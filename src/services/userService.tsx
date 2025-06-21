import { UserDto } from "../types/interface/user/UserDto";
import { api } from "./api";

export const userService = {
  createUser: async (userData: UserDto) => {
    const response = await api.post("/user/create", userData);

    return response.data;
  },
};
