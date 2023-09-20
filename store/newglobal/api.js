import axios from "axios"
import { GLB12_USERNAME, GLB12_PASSWORD } from "react-native-dotenv"
const newglobal = axios.create({
  baseURL: "https://bcnfjfj.com",
  auth: { username: GLB12_USERNAME, password: GLB12_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
