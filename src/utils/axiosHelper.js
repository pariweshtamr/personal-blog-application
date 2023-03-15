import axios from "axios"
import { useSession } from "next-auth/react"

const apiRootUrl = process.env.NEXT_PUBLIC_API_ROOT_URL
const authUrl = apiRootUrl + "/auth"

export const axiosProcessor = async ({
  url,
  method,
  objData,
  isPrivate,
  token,
}) => {
  try {
    const jwtToken = token || sessionStorage.getItem("accessJwt")
    const headers = isPrivate ? { Authorization: jwtToken } : null
    const { data } = await axios({
      method,
      url,
      data: objData,
      headers,
    })
    return data
  } catch (error) {
    return {
      status: error,
      message: error.message,
    }
  }
}

// auth

export const fetchUserInfo = async () => {
  const url = authUrl
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  }
  return axiosProcessor(obj)
}
export const registerUser = async (objData) => {
  const obj = {
    method: "post",
    url: authUrl + "/register",
    objData,
  }
  return axiosProcessor(obj)
}
export const loginUser = async (objData) => {
  const obj = {
    method: "post",
    url: authUrl + "/login",
    objData,
  }
  return axiosProcessor(obj)
}
