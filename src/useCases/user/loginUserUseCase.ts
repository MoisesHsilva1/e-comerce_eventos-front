import { userService } from "../../services/userService";
import { LoginUserDto } from "../../types/interface/user/LoginUserDto";

export const loginUserUseCase = async (loginData: LoginUserDto) => {
  return userService.loginUser(loginData);
};
