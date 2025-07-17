import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { ToastContainer, toast } from "react-toastify";

import Button from "../../UI/atoms/buttons/Button";
import IconPhoneCart from "../../UI/atoms/Icons/IconPhoneCart";
import Input from "../../UI/atoms/Inputs/Input";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const { data, mutate: loginUser, error } = useLoginUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      toast.success("Login realizado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });

      setTimeout(() => navigate("/"), 4000);
    }

    if (error) {
      toast.error("Deu erro ao realizar o login!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  }, [error, data, navigate]);

  const onSubmit = (data: FormState) => {
    loginUser(data);
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                className="border-0 border-b-2"
                typeInput="email"
                placeholder="Email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Senha é obrigatória",
            }}
            render={({ field }) => (
              <Input
                {...field}
                className="border-0 border-b-2"
                typeInput="password"
                placeholder="Senha"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <Button
            textButton="Login"
            className="w-full text-white"
            type="submit"
          />
          <ToastContainer />
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
