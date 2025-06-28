import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router";
import IconPhoneCart from "../../../UI/atoms/Icons/IconPhoneCart";
import Input from "../../../UI/atoms/Inputs/Input";
import Button from "../../../UI/atoms/buttons/Button";
import { useRegisterUser } from "../../../../hooks/useRegisterUser";
import { ToastContainer, toast } from "react-toastify";

interface FormState {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const { data, mutate: registerUser } = useRegisterUser();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success("Login Realizado com sucesso!!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
      setFormData({ name: "", email: "", password: "" });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!email || !password || !name) {
      setError("Preencha todos os campos!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email inválido!");
      return;
    }

    const userDataRegister = {
      name: name,
      email: email,
    };

    registerUser(userDataRegister);
    setError("");
  };

  return (
    <>
      <main className="flex flex-col md:flex-row justify-center items-center p-6 md:p-24 gap-8">
        <figure className="flex justify-center md:block mb-6 md:mb-0">
          <IconPhoneCart className="w-72 h-74 md:w-150 md:h-150" />
        </figure>

        <section className="flex justify-center flex-col gap-4 w-full max-w-sm">
          <h1 className="text-2xl font-semibold text-center md:text-start">
            Crie sua conta
          </h1>
          <p className="text-center md:text-start">Digite suas informações</p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              className="border-0 border-b-2"
              typeInput="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
            />
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
              textButton="Criar a conta"
              className="w-83 text-white"
              type="submit"
            />
            <ToastContainer />
          </form>

          <p className="text-center md:text-start mt-4">
            <a
              className="text-[#7D8184] hover:text-gray-800"
              onClick={() => navigate("/login")}
            >
              Ja tem conta? Faca login
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
export default Register;
