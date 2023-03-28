import axios from "axios"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ROOT_URL
    : "http://localhost:8000/api"

const authEP = rootUrl + "/auth"

export const requestNewAccessJwt = async (refreshJwt) => {
  if (refreshJwt) {
    const { data } = await axios.get(authEP + "/accessJwt", {
      headers: {
        Authorization: refreshJwt,
      },
    })

    return data.accessJwt
  }
  return { status: "error", message: "logour user" }
}

export const requestApi = async (axiosInfo, sendAuth) => {
  try {
    if (sendAuth) {
      if (!sessionStorage.getItem("accessJwt")) {
        return {
          status: "error",
          message: "You are not authorized to perform this task!",
        }
      }
      axiosInfo = {
        ...axiosInfo,
        headers: {
          Authorization: sessionStorage.getItem("accessJwt"),
        },
      }
    }
    const { data } = await axios(axiosInfo)

    return data
  } catch (error) {
    if (error.response?.status === 401) {
      return { status: "error", message: "logout user" }
    }

    return error.response.data || { status: "error", message: error.message }
  }
}
