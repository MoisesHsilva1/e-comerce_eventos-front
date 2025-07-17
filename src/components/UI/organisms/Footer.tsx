function Footer() {
  const itemsSupport = [
    { title: "Suporte" },
    {
      description: "Av. Mário Covas, 710, Suzano - SP",
      link: "https://maps.app.goo.gl/v2gRUGpuHDzgcjU56",
      type: "adress",
    },
    {
      description: "(11) 99815-8927",
      link: "https://wa.me/5511998158927",
      type: "Telphone",
    },
  ];

  const itemsAccount = [
    { title: "Conta" },
    { description: "Minha conta", link: "", type: "myAccount" },
    { description: "Login / Registro", link: "/login", type: "login_Register" },
    { description: "Carrinho", link: "/carrinho", type: "car" },
  ];

  const itemsPolicies = [
    { title: "Políticas" },
    {
      description: "Política de privacidade",
      link: "",
      type: "policiesAndPrivacy",
    },
    { description: "Termos de uso", link: "", type: "termsOfUse" },
  ];

  return (
    <footer className="bg-black w-full text-white p-8 md:p-16">
      <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-16 max-w-6xl mx-auto">
        {[itemsSupport, itemsAccount, itemsPolicies].map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]"
          >
            {section.map((item, index) => (
              <div key={index} className="mt-2">
                {item.title ? (
                  <h1 className="font-bold text-lg md:text-xl">{item.title}</h1>
                ) : (
                  <a href={item.link}>
                    <p className="hover:text-gray-400 cursor-pointer text-sm md:text-base">
                      {item.description}
                    </p>
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
