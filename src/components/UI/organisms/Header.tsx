import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../atoms/Inputs/Input";
import IconCart from "../atoms/Icons/IconCart";
import IconUser from "../atoms/Icons/IconUser";
import Divider from "../atoms/Divider";

function Header() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate("/busca", { state: { searchTerm: search }, replace: true });
    }
  };

  return (
    <>
      <header className="flex flex-wrap items-center justify-between px-4 py-3 gap-4 md:flex-nowrap md:px-6">
        <img
          className="w-12 h-12 rounded-full"
          src="/assets/logo.png"
          alt="logo"
        />

        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
          <a
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <a className="hover:text-gray-600 cursor-pointer">Contato</a>
          <a className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/login")}>Login</a>
        </nav>

        <nav className="flex flex-wrap items-center gap-3 md:gap-6 w-full md:w-auto">
          <Input
            value={search}
            onChange={handleInput}
            typeInput="text"
            onKeyDown={handleKeyDown}
            placeholder="O que você está procurando?"
            className="h-8 w-full md:w-64 text-sm bg-[#F5F5F5] border rounded-sm border-gray-300 focus:border-black focus:ring-2 focus:ring-black px-4"
          />
          <button className="p-2" aria-label="Carrinho" onClick={() =>  navigate("/carrinho")}>
            <IconCart />
          </button>
          <button className="p-2" aria-label="Usuário" onClick={() => navigate("/login")}>
            <IconUser />
          </button>
        </nav>
      </header>
      <Divider className="my-4" />
    </>
  );
}

export default Header;
