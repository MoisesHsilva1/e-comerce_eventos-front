import Input from "../UI/Inputs/Input";
import IconCart from "../UI/Icons/IconCart";
import IconUser from "../UI/Icons/IconUser";
import Divider from "../UI/Divider";

function HeaderUser() {
  const pages = [
    { id: 1, page: "Home" },
    { id: 2, page: "Contato" },
    { id: 3, page: "Sobre" },
    { id: 4, page: "Login" },
  ];
  return (
    <>
      <header className="flex justify-between m-6">
        Logo
        <nav className="flex flex-row gap-8">
          {pages.map((page, index) => (
            <div key={index}>
              <h2 className="hover:bg-[#7D8184]">{page.page}</h2>
            </div>
          ))}
        </nav>
        <nav className="flex flex-row gap-4">
          <Input
            placeholder="O que você está procurando?"
            className="h-8 w-65 text-sm bg-[#F5F5F5] border rounded-sm border-gray-300 focus:border-black focus:ring-2 focus:ring-black px-4"
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
