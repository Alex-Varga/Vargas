import axios from "axios"
import config from "./config"

export const HTTP = axios.create({
  baseURL: config.MOCK
})

export default {
  async getPopularProducts() {
    try {
      const response = await HTTP.get('/products/popular')
      return response.data
    } catch (error) {
      console.log(error);
    }
  },

  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          prefer: `code=200, example=Example ${id}`
        }
      })
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
}