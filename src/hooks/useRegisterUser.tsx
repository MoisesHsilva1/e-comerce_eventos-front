import { useMutation } from "@tanstack/react-query";
import { createUserUseCase } from "../useCases/user/createUserUseCase";
import { CreateUserDto } from "../types/interface/user/CreateUserDto";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (userData: CreateUserDto) => createUserUseCase(userData),
  });
};
