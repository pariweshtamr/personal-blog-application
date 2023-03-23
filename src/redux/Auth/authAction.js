import { toast } from "react-toastify"
import authAPI from "../../api/authAPI"
import { requestNewAccessJwt } from "../../api/axiosHelper"
import { loginSuccess, logoutSuccess, requestPending } from "./authSlice"

export const getUser = (token) => async (dispatch) => {
  const { status, user } = await authAPI.fetchUserInfo(token)

  status === "success"
    ? dispatch(loginSuccess(user))
    : dispatch(loginSuccess({}))
}

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending())
    // call api through axiosHelper
    const { status, message, tokens } = await authAPI.loginUser(formData)
    toast[status](message)
    if (status === "success") {
      const { accessJwt, refreshJwt } = tokens
      sessionStorage.setItem("accessJwt", accessJwt)
      localStorage.setItem("refreshJwt", refreshJwt)

      dispatch(getUser(accessJwt))
    }
  } catch (error) {
    return {
      status: "error",
      message: error.messsage,
    }
  }
}

export const logoutAction = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("accessJwt")
    localStorage.getItem("refreshJwt")
    dispatch(logoutSuccess())
  } catch (error) {
    return {
      status: "error",
      message: error.messsage,
    }
  }
}

export const autoLoginAction = () => async (dispatch) => {
  const accessJwt = sessionStorage.getItem("accessJwt")
  const refreshJwt = localStorage.getItem("refreshJwt")
  // if accessJwt exists, fetch user and dispatch to our global state
  // else
  // if only refreshJwt exists, fech new accessJwt from backend and then fetch user info

  if (accessJwt) {
    dispatch(getUser(accessJwt))
    return
  }

  if (!accessJwt && refreshJwt) {
    // call server to get new access token
    const token = await requestNewAccessJwt(refreshJwt)

    token.accessJwt && sessionStorage.setItem("accessJwt", token.accessJwt)
    return token.accessJwt && dispatch(getUser(token.accessJwt))
  }
  dispatch(logoutAction())
}
