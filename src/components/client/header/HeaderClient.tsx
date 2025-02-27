function HeaderClient() {
  const items_header = [{ logo: "/assets/logo.png" }];

  return (
    <>
      <div className="flex justify-center bg-black text-white p-1 text-base">
        Ambiente de administrador
      </div>
      <header className="flex justify-start border-gray-200 border pl-4 py-4 md:pl-18">
        <nav className="flex flex-wrap gap-4 md:gap-8">
          {items_header.map((item, index) => (
            <div key={index}>
              <img className="w-12 h-full rounded-full" src={item.logo} alt="logo" />
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
export default HeaderClient;
