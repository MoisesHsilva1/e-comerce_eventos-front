import { useState, useEffect } from "react";
import Input from "../../UI/atoms/Inputs/Input";
import InputImage from "../../UI/atoms/Inputs/InputImage";
import Button from "../../UI/atoms/buttons/Button";
import { useCreateProduct } from "../../../hooks/useCreateProduct";
import { ToastContainer, toast } from "react-toastify";

interface InputsValues {
  name: string;
  category: string;
  description: string;
  price: string;
}

function RegisterProduct() {
  const [inputsValues, setInputsValues] = useState<InputsValues>({
    name: "",
    category: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const { data, mutate: createProduct, error } = useCreateProduct();

  useEffect(() => {
    if (error) {
      toast.error("Erro ao cadastrar o produto.", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      toast.success("Produto cadastrado com sucesso!!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
      setInputsValues({ name: "", category: "", description: "", price: "" });
      setImage(null);
    }
  }, [data]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof InputsValues
  ) => {
    setInputsValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setInputsValues((prev) => ({ ...prev, price: numericValue }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      toast.error("Imagem é obrigatória.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    const productData = {
      name: inputsValues.name,
      category: inputsValues.category,
      description: inputsValues.description,
      price: Number(inputsValues.price) || 0,
      image,
    };

    createProduct(productData);
  };

  const labelsRegisterText = [
    {
      id: "name" as const,
      label: "Nome do produto",
      placeholder: "Ex.: Smartphone Galaxy S24 Ultra 256GB",
    },
    {
      id: "category" as const,
      label: "Categoria",
      placeholder: "Ex.: Eletrônicos, Roupas, Livros",
    },
    {
      id: "description" as const,
      label: "Descrição",
      placeholder: "Ex.: Smartphone com tela AMOLED de 6.8",
    },
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
          {labelsRegisterText.map(({ id, label, placeholder }) => (
            <div className="flex flex-col" key={id}>
              <Input
                typeInput="text"
                value={inputsValues[id]}
                onChange={(e) => handleInputChange(e, id)}
                placeholder={placeholder}
                id={id}
                htmlFor={id}
                label={label}
              />
            </div>
          ))}

          <div className="flex flex-col">
            <Input
              typeInput="number"
              value={inputsValues.price}
              onChange={handlePriceChange}
              placeholder="Ex.: R$100,00"
              label="Preço"
              pattern="[0-9]+$"
            />
          </div>

          <InputImage
            onImageChange={setImage}
            label="Imagem do produto"
            placeholder="Carregue a imagem do seu produto"
          />

          <Button
            type="submit"
            className="w-50 h-12 text-white"
            textButton={"Cadastrar Produto"}
            value="Submit"
          />

          <ToastContainer />
        </form>
      </article>
    </section>
  );
}

export default RegisterProduct;
