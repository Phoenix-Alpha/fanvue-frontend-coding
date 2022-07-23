import axios, { AxiosResponse } from "axios";
import { API_URL } from "@/configs";
import { IPhoto } from "@/types";

export const getPhotos = async (limit: number = 20): Promise<AxiosResponse<IPhoto[]>> => axios.get(`${API_URL}/photos?_limit=${limit}`)