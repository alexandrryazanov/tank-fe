import api, { BASE_URL } from "@/api";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";

export default class AuthServices {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("auth/login", { email, password });
  }

  static async registration(
    name: string,
    age: number,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/auth/register", {
      name,
      age,
      email,
      password,
    });
  }

  // static async logout(): Promise<void> {
  //   return api.post("/logout");
  // }

  static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return axios.get<AuthResponse>(`${BASE_URL}/auth/refresh`, {
      withCredentials: true,
    });
  }
}
