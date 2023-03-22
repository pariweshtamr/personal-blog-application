import { requestApi } from "./axiosHelper"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ROOT_URL
    : "http://localhost:8000/api"

const authEP = rootUrl + "/auth"
const authAPI = {
  registerUser: async (formData) => {
    try {
      const axiosData = {
        method: "POST",
        url: authEP,
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
}

export default authAPI
