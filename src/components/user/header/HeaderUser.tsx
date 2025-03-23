import Input from "../../UI/Inputs/Input";
import IconCart from "../../UI/Icons/IconCart";
import IconUser from "../../UI/Icons/IconUser";
import Divider from "../../UI/Divider";
import { useNavigate } from "react-router";

function HeaderUser() {
  const navigate = useNavigate();

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
