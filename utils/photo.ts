import axios, { AxiosResponse } from "axios";
import { API_URL } from "@/configs";
import { IPhoto } from "@/types";

export const getPhotos = async (): Promise<AxiosResponse<IPhoto[]>> => axios.get(`${API_URL}/photos`)