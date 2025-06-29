import { useMutation } from "@tanstack/react-query";
import { LoginUserDto } from "../types/interface/user/LoginUserDto";
import { loginUserUseCase } from "../useCases/user/loginUserUseCase";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (loginData: LoginUserDto) => loginUserUseCase(loginData),
  });
};
