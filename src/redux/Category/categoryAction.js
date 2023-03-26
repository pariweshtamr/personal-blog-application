import categoryAPI from "../../api/categoryAPI"
import { getCategoriesSuccess } from "./categorySlice"

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
