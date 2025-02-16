function VerticalBar() {
  const options = [
    { option: "Cadastro de produtos" },
    { option: "Minhas vendas" },
    { option: "Entrega dos produtos" },
    { option: "Contratos" },
  ];

  return (
    <>
      <div className="flex justify-start flex-col ml-20 mt-14">
        <h1 className="font-semibold">Gerenciar minha Loja</h1>
        <nav className="flex flex-col px-12">
          {options.map((option, index) => (
            <div key={index}>
              <p className="text-[#828282] hover:text-black">{option.option}</p>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
export default VerticalBar;
