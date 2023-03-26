import { toast } from "react-toastify"
import authAPI from "../../api/authAPI"
import { requestNewAccessJwt } from "../../api/axiosHelper"
import {
  loginSuccess,
  logoutSuccess,
  requestFailed,
  requestPending,
} from "./authSlice"

export const getUser = () => async (dispatch) => {
  dispatch(requestPending())
  const { status, user } = await authAPI.fetchUserInfo()

  status === "success"
    ? dispatch(loginSuccess(user))
    : dispatch(logoutSuccess())
}

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending())
    // call api through axiosHelper
    const { status, message, tokens } = await authAPI.loginUser(formData)

    if (status === "success") {
      const { accessJwt, refreshJwt } = tokens
      sessionStorage.setItem("accessJwt", accessJwt)
      localStorage.setItem("refreshJwt", refreshJwt)

      return dispatch(getUser())
    }

    dispatch(requestFailed({ status, message })) && toast[status](message)
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
    localStorage.removeItem("refreshJwt")
    return dispatch(logoutSuccess())
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
    dispatch(getUser())
    return
  }

  if (!accessJwt && refreshJwt) {
    // call server to get new access token
    const token = await requestNewAccessJwt(refreshJwt)
    token && sessionStorage.setItem("accessJwt", token)
    return token && dispatch(getUser())
  }
  dispatch(logoutAction())
}
