import { useNavigate } from "react-router-dom";
import Input from "../../UI/Inputs/Input";
import IconCart from "../../UI/Icons/IconCart";
import IconUser from "../../UI/Icons/IconUser";
import Divider from "../../UI/Divider";
import { useState } from "react";

function HeaderUser() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" &&
      navigate("/pesquisa", { state: { searchTerm: search }, replace: true });
  };

  return (
    <>
      <header className="flex justify-between m-6">
        <img
          className="w-12 h-full rounded-full"
          src="/assets/logo.png"
          alt="logo"
        />
        <nav className="flex flex-row gap-8 mt-3">
          <a className="hover:text-gray-600" onClick={() => navigate("/")}>
            Home
          </a>
          <a className="hover:text-gray-600">Contato</a>
          <a className="hover:text-gray-600">Sobre</a>
          <a className="hover:text-gray-600">Login</a>
        </nav>
        <nav className="flex flex-row gap-6">
          <Input
            value={search}
            onChange={handleInput}
            typeInput="text"
            onKeyDown={handleKeyDown}
            placeholder="O que você está procurando?"
            className="h-8 w-65 mt-2 text-sm bg-[#F5F5F5] border rounded-sm border-gray-300 focus:border-black focus:ring-2 focus:ring-black px-4"
          />
          <button>
            <IconCart />
          </button>
          <button>
            <IconUser />
          </button>
        </nav>
      </header>
      <Divider className="my-6" />
    </>
  );
}
export default HeaderUser;
