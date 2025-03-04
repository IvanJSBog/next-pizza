import { axiosInstance } from "@/shared/services/axios";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>("/ingredients");

  return data;
};
