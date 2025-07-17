import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useRegisterUser } from "../../../hooks/useRegisterUser";
import { ToastContainer, toast } from "react-toastify";

import IconPhoneCart from "../../UI/atoms/Icons/IconPhoneCart";
import Input from "../../UI/atoms/Inputs/Input";
import Button from "../../UI/atoms/buttons/Button";

interface FormState {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const { data, mutate: registerUser, error } = useRegisterUser();

  useEffect(() => {
    if (data) {
      toast.success("Cadastro realizado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });

      setTimeout(() => navigate("/login"), 4000);
    }

    if (error) {
      toast.error("Usuário já existente!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  }, [error, data, navigate]);

  const onSubmit = (data: FormState) => {
    registerUser(data);
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: "Nome completo é obrigatório" }}
              render={({ field }) => (
                <Input
                  {...field}
                  className="border-0 border-b-2"
                  typeInput="text"
                  placeholder="Nome completo"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

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
                maxLength: {
                  value: 8,
                  message: "Senha deve ter no máximo 8 caracteres",
                },
                minLength: {
                  value: 8,
                  message: "Senha deve ter no mínimo 8 caracteres",
                },
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
