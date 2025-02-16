import Input from "../../UI/Inputs/Input";
import InputImage from "../../UI/Inputs/InputImage";

function RegisterProduct() {
  const labelsRegisterProduct = [
    {
      label: "Nome do produto",
      placeholder: "Ex.: Smartphone Galaxy S24 Ultra 256GB",
      type: "text",
    },
    {
      label: "Categoria",
      placeholder: "Ex.: Eletrônicos, Roupas, Livros",
      type: "text",
    },
    {
      label: "Descrição",
      placeholder: "Ex.: Smartphone com tela AMOLED de 6.8",
      type: "text",
    },
    {
      label: "Preço",
      placeholder: "Ex.: R$100,00",
      type: "number",
    },
  ];

  return (
    <>
      <section className="flex justify-center items-center -my-30 ml-80 p-6 bg-[#FAFAFA] rounded-xl  w-200">
        <article className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold text-black">
            Cadastre-se o produto
          </h1>
          <div className="flex flex-wrap justify-center gap-10">
            {labelsRegisterProduct.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <Input placeholder={item.placeholder} label={item.label} />
              </div>
            ))}
            <InputImage
              label="Imagem do produto"
              placeholder="Carregue a imagem do seu produto"
            />
          </div>
        </article>
      </section>
    </>
  );
}
export default RegisterProduct;
