import { requestApi } from "./axiosHelper"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ROOT_URL
    : "http://localhost:8000/api"

const blogEP = rootUrl + "/blog"

const blogAPI = {
  createPost: async (obj) => {
    try {
      const axiosData = {
        method: "POST",
        url: blogEP,
        data: obj,
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

export default blogAPI
