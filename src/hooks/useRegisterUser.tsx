import { useMutation } from "@tanstack/react-query";
import { createUserUseCase } from "../useCases/user/createUserUseCase";
import { UserDto } from "../types/interface/user/UserDto";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (userData: UserDto) => createUserUseCase(userData),
  });
};
