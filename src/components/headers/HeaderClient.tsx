function HeaderClient() {
  const items_header = [{ item: "logo" }];

  return (
    <>
      <div className="flex justify-center bg-black text-white p-1 text-base">
        Ambiente de administrador
      </div>
      <header className="flex justify-start border-gray-200 border pl-4 py-4 md:pl-18">
        <nav className="flex flex-wrap gap-4 md:gap-8">
          {items_header.map((item, index) => (
            <div key={index}>
              <h2 className="text-lg">{item.item}</h2>
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
export default HeaderClient;
