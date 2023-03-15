import { fetchUserInfo, loginUser } from "@/utils/axiosHelper"
import { signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { requestPending, requestSuccess } from "./authSlice"

export const getUserInfo = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo()

  status === "success"
    ? dispatch(requestSuccess(user))
    : dispatch(requestSuccess({}))
}

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending())

    // call api through axiosHelper
    const { status, message, tokens } = await loginUser(formData)
    toast[status](message)
    dispatch(getUserInfo())

    if (status === "success") {
      const { accessJwt, refreshJwt } = tokens

      sessionStorage.setItem("accessJwt", accessJwt)
      localStorage.setItem("refreshJwt", refreshJwt)

      dispatch(getUserInfo())
    }

    // await signIn("credentials", {
    //   email,
    //   password,
    //   redirect: true,
    //   callbackUrl: "/",
    // })
  } catch (error) {
    return {
      status: "error",
      message: error.messsage,
    }
  }
}
