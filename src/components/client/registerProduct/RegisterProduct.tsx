import { useState } from "react";
import Input from "../../UI/Inputs/Input";
import InputImage from "../../UI/Inputs/InputImage";
import Button from "../../UI/buttons/Button";
import useCreateProduct from "../../../hooks/useCreateProduct";

function RegisterProduct() {
  const [inputsValues, setInputsValues] = useState<Record<string, string>>({});
  const { response, loading, error, fetchProductData } = useCreateProduct();

  const handleValueInputs = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputsValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formattedData = {
      ...inputsValues,
      price: Number(inputsValues.price?.replace("R$", "").replace(",", ".")) || 0,
      amount: Number(inputsValues.amount)
    };

    fetchProductData(formattedData);
  };

  const labelsRegisterProduct = [
    { id: "name", label: "Nome do produto", placeholder: "Ex.: Smartphone Galaxy S24 Ultra 256GB" },
    { id: "category", label: "Categoria", placeholder: "Ex.: Eletrônicos, Roupas, Livros" },
    { id: "description", label: "Descrição", placeholder: "Ex.: Smartphone com tela AMOLED de 6.8" },
    { id: "price", label: "Preço", placeholder: "Ex.: R$100,00" },
    { id: "amount", label: "Quantidade do produto", placeholder: "Ex.: 100 unidades " },
  ];

  return (
    <section className="flex justify-center items-center -my-35 ml-80 p-6 bg-[#FAFAFA] rounded-xl w-200">
      <article className="flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-black">Cadastro de Produto</h1>
        <form onSubmit={handleSubmitForm} className="flex flex-wrap justify-center gap-10">
          {loading && <p className="text-blue-500">Enviando...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {response && <p className="text-green-500">Produto cadastrado com sucesso!</p>}

          {labelsRegisterProduct.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <Input
                typeInput="text"
                value={inputsValues[item.id] || ""}
                onChange={(event) => handleValueInputs(event, item.id)}
                placeholder={item.placeholder}
                label={item.label}
              />
            </div>
          ))}

          <InputImage label="Imagem do produto" placeholder="Carregue a imagem do seu produto" />

          <Button type="submit" className="w-50 h-12" textButton="Cadastrar Produto" value="Submit" disabled={loading} />
        </form>
      </article>
    </section>
  );
}

export default RegisterProduct;
