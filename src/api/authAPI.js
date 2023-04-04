import { requestApi } from "./axiosHelper"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ROOT_URL
    : "http://blogapplication-env.eba-dvh9qzrx.us-east-1.elasticbeanstalk.com/api"

const authEP = rootUrl + "/auth"
const authAPI = {
  registerUser: async (formData) => {
    try {
      const axiosData = {
        method: "POST",
        url: authEP + "/register",
        data: formData,
      }
      const data = await requestApi(axiosData, true)
      return data
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      }
    }
  },

  loginUser: async (formData) => {
    try {
      const axiosData = {
        method: "POST",
        url: authEP + "/login",
        data: formData,
      }
      const data = await requestApi(axiosData, false)
      return data
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      }
    }
  },
  fetchUserInfo: async () => {
    try {
      const axiosData = {
        method: "GET",
        url: authEP,
      }
      const data = await requestApi(axiosData, true)
      return data
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      }
    }
  },
}

export default authAPI
