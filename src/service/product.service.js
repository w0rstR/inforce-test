import axiosService from "./axios.service";

const productService = {
    getAllProducts: () => axiosService.get('/products').then(value => value.data),
    setProducts: (data) => axiosService.post(`/products`, {...data}).then(value => value.data),
    putProducts: (product, productId) => axiosService.put(`/products/${productId}`, {...product}).then(value => value.data)
}

export default productService