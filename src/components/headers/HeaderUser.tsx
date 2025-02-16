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
          <input type="text" placeholder="teste input" />
          <p> teste</p>
          <p>teste</p>
        </nav>
      </header>
    </>
  );
}
export default HeaderUser;
