import { requestApi } from "./axiosHelper"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ROOT_URL + "/api"
    : "http://blogapplication-env.eba-dvh9qzrx.us-east-1.elasticbeanstalk.com/api"
const catEP = rootUrl + "/category"

const categoryAPI = {
  createCategory: async (obj) => {
    try {
      const axiosData = {
        method: "POST",
        url: catEP,
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

  getCategories: async () => {
    try {
      const axiosData = {
        method: "GET",
        url: catEP,
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
export default categoryAPI
