import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/atoms/buttons/Button";
import IconPhoneCart from "../../../UI/atoms/Icons/IconPhoneCart";
import Input from "../../../UI/atoms/Inputs/Input";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormState>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido!");
      return;
    }

    setError("");
  };

  return (
    <main className="flex flex-col md:flex-row justify-center items-center p-6 md:p-24 gap-8">
           <figure className="flex justify-center md:block mb-6 md:mb-0">
        <IconPhoneCart className="w-72 h-74 md:w-100 md:h-100" />
      </figure>

      <section className="flex justify-center flex-col gap-4 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center md:text-start">
          Login
        </h1>
        <p className="text-center md:text-start">Digite suas informações</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            className="border-0 border-b-2"
            typeInput="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            className="border-0 border-b-2"
            typeInput="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            textButton="Login"
            className="w-full text-white"
            type="submit"
          />
        </form>

        <p className="text-center md:text-start mt-4">
          <a
            className="text-[#7D8184] hover:text-gray-800"
            onClick={() => navigate("/cadastro")}
          >
            Não tem uma conta? Cadastre-se aqui
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
