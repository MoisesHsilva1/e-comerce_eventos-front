import { useNavigate } from "react-router";

function VerticalBar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full max-w-[250px] px-6 md:ml-10 md:mt-10">
      <h1 className="font-semibold mb-4">Gerenciar minha Loja</h1>
      <nav className="flex flex-col gap-2">
        <div>
          <p className="text-gray-500 hover:text-black cursor-pointer" onClick={() => navigate("/admin")}>
            Cadastro de produtos
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer">
            Minhas vendas
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer" onClick={() => navigate("/estoque")}>
            Estoque de produtos
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer">
            Entrega dos produtos
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer">
            Contratos
          </p>
        </div>
      </nav>
    </div>
  );
}

export default VerticalBar;
