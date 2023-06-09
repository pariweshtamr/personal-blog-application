import { requestApi } from "./axiosHelper"

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ROOT_URL + "/api"
    : "http://blogapplication-env.eba-dvh9qzrx.us-east-1.elasticbeanstalk.com/api"

const blogEP = rootUrl + "/blog"

const blogAPI = {
  createBlog: async (obj) => {
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
  editBlog: async (post) => {
    try {
      const axiosData = {
        method: "PUT",
        url: `${blogEP}/updateBlog/${post.slug}`,
        data: post,
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
  editBlogStatus: async (post) => {
    try {
      const axiosData = {
        method: "PATCH",
        url: `${blogEP}/updateStatus/${post.slug}`,
        data: post,
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
  deleteBlog: async (id) => {
    try {
      const axiosData = {
        method: "DELETE",
        url: `${blogEP}/deleteBlog/${id}`,
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
  fetchBlogs: async () => {
    try {
      const axiosData = {
        method: "GET",
        url: blogEP + "/getAll",
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
  fetchActiveBlogs: async () => {
    try {
      const axiosData = {
        method: "GET",
        url: blogEP + "/getActiveBlogs",
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
  fetchSingleBlog: async (slug) => {
    try {
      const axiosData = {
        method: "GET",
        url: `${blogEP}/find/${slug}`,
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

export default blogAPI
