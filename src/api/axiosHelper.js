import axios from "axios"
export const requestApi = async (axiosInfo, sendAuth) => {
  try {
    if (sendAuth) {
      axiosInfo = {
        ...axiosInfo,
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    }
    const { data } = await axios(axiosInfo)
    return data
  } catch (error) {
    if (error.response?.status === 401) {
      return { status: "error", message: "logout user" }
    }
    // if (
    //     error.response?.status === 403 &&
    //     error.response?.data?.message === "jwt expired"
    // ) {
    //     const { accessJWT } = await getNewAccessJWT();

    //     if (accessJWT) {
    //         return requestApi(axiosInfo, sendAuth);
    //     }
    // }

    return error.response.data || { status: "error", message: error.message }
  }
}
