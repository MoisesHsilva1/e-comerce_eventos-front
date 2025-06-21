import { userService } from "../../services/userService";
import { UserDto } from "../../types/interface/user/UserDto";

export const createUserUseCase = async (userData: UserDto) => {
  return await userService.createUser(userData);
};
