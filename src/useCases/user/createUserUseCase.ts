import { userService } from "../../services/userService";
import { CreateUserDto } from "../../types/interface/user/CreateUserDto";

export const createUserUseCase = async (userData: CreateUserDto) => {
  return userService.createUser(userData);
};
