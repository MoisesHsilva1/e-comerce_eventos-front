import { CreateUserDto } from "../types/interface/user/CreateUserDto";
import { LoginUserDto } from "../types/interface/user/LoginUserDto";
import { signInWithEmailAndPassword } from "firebase/auth";
import { api } from "./api";
import authFireBase from "../config/firebase/firebase";

export const userService = {
  createUser: async (userData: CreateUserDto) => {
    const response = await api.put("/user/create", userData);

    return response.data;
  },
  loginUser: async (loginData: LoginUserDto) => {
    const userCredential = await signInWithEmailAndPassword(
      authFireBase,
      loginData.email,
      loginData.password
    );

    const idToken = await userCredential.user.getIdToken();

    const response = await api.post("/auth/login", { idToken });

    return response.data;
  },
};
