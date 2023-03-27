import { toast } from "react-toastify"
import categoryAPI from "../../api/categoryAPI"
import { getCategoriesSuccess, requestSuccess } from "./categorySlice"

export const getCategoriesAction = () => async (dispatch) => {
  try {
    const { categories } = await categoryAPI.getCategories()

    categories.length
      ? dispatch(getCategoriesSuccess(categories))
      : dispatch(getCategoriesSuccess([]))
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const createCategoryAction = (obj) => async (dispatch) => {
  try {
    const { status, message } = await categoryAPI.createCategory(obj)

    status === "success"
      ? dispatch(requestSuccess({ status, message })) &&
        dispatch(getCategoriesAction()) &&
        toast[status](message)
      : dispatch(requestSuccess({ status, message })) && toast[status](message)
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}
