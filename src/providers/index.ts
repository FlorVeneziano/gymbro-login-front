import axios from "axios";
import { BACKEND_URL } from "../helpers/envs";
import type { ILoginReq, ILoginRes } from "../interfaces/login.interface";

export const API = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const login = async ({ email, password }: ILoginReq) => {
  return await API.post<ILoginRes>("/login", { email, password });
};

export const register = async ({ email, password }: ILoginReq) => {
  return await API.post("/register", { email, password });
};