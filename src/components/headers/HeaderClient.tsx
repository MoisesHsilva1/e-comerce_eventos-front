function HeaderClient() {
  const items_header = [{ item: "logo" }];

  return (
    <>
      <div className="flex justify-center bg-black text-white p-1 text-base">
        Ambiente de administrador
      </div>
      <header className="flex jusfify-start border-gray-200 border-1 pl-18 py-4">
        <nav className="flex flex-row gap-8">
          {items_header.map((item, index) => (
            <div key={index}>
              <h2>{item.item}</h2>
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
export default HeaderClient;
