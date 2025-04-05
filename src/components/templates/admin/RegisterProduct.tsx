import { useState } from "react";
import Input from "../../UI/atoms/Inputs/Input";
import InputImage from "../../UI/atoms/Inputs/InputImage";
import Button from "../../UI/atoms/buttons/Button";
import useCreateProduct from "../../../hooks/useCreateProduct";
import { ToastContainer, toast } from "react-toastify";

type Product = {
  name: string;
  description: string;
  category: string;
  price: number;
};

function RegisterProduct() {
  const [inputsValues, setInputsValues] = useState<Record<string, string>>({});
  const { data, createProduct, error } = useCreateProduct();

  const toastsProducts = () => {
    {
      error &&
        toast.error("Erro ao cadastrar o produto.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
    {
      data &&
        toast.success("Produto cadastrado com sucesso!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  };

  const handleValueInputsText = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputsValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  };

  const handleValueInputsNumber = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = event.target.value.replace(/[^0-9]/g, "");

    setInputsValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formattedData: Product = {
      name: inputsValues.name,
      description: inputsValues.description,
      category: inputsValues.category,
      price: Number(inputsValues.price.replace(",", ".")),
    };
    4;

    createProduct(formattedData);
    setInputsValues({});
  };

  const labelsRegisterText = [
    {
      id: "name",
      label: "Nome do produto",
      placeholder: "Ex.: Smartphone Galaxy S24 Ultra 256GB",
    },
    {
      id: "category",
      label: "Categoria",
      placeholder: "Ex.: Eletrônicos, Roupas, Livros",
    },
    {
      id: "description",
      label: "Descrição",
      placeholder: "Ex.: Smartphone com tela AMOLED de 6.8",
    },
  ];

  const labelRegisterNumber = [
    { id: "price", label: "Preço", placeholder: "Ex.: R$100,00" },
  ];

  return (
    <section className="flex justify-center items-center -my-35 ml-80 p-6 bg-[#FAFAFA] rounded-xl w-200">
      <article className="flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-black">
          Cadastro de Produto
        </h1>
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-wrap justify-center gap-10"
        >
          {labelsRegisterText.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <Input
                typeInput="text"
                value={inputsValues[item.id] || ""}
                onChange={(event) => handleValueInputsText(event, item.id)}
                placeholder={item.placeholder}
                id={item.id}
                htmlFor={item.id}
                label={item.label}
              />
            </div>
          ))}
          {labelRegisterNumber.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <Input
                typeInput="number"
                value={inputsValues[item.id] || ""}
                onChange={(event) => handleValueInputsNumber(event, item.id)}
                placeholder={item.placeholder}
                label={item.label}
                pattern="[0-9]+$"
              />
            </div>
          ))}

          <InputImage
            label="Imagem do produto"
            placeholder="Carregue a imagem do seu produto"
          />

          <Button
            type="submit"
            className="w-50 h-12"
            onClick={toastsProducts}
            textButton="Cadastrar Produto"
            value="Submit"
          />
          <ToastContainer />
        </form>
      </article>
    </section>
  );
}

export default RegisterProduct;
