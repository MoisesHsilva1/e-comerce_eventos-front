function VerticalBar() {
  const options = [
    { option: "Cadastro de produtos" },
    { option: "Minhas vendas" },
    { option: "Entrega dos produtos" },
    { option: "Contratos" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[250px] px-6 md:ml-10 md:mt-10">
      <h1 className="font-semibold mb-4">Gerenciar minha Loja</h1>
      <nav className="flex flex-col gap-2">
        {options.map((option, index) => (
          <div key={index}>
            <p className="text-gray-500 hover:text-black cursor-pointer">
              {option.option}
            </p>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default VerticalBar;
