import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productService from "../../service/product.service";

export const setProduct = createAsyncThunk(
    "productSlice/SetProduct",
    async (data, {dispatch}) => {
        try {
            const product = await productService.setProducts(data)
            dispatch(getAllProducts())
        } catch (e) {
            console.log(e)
        }
    }
)

export const getAllProducts = createAsyncThunk(
    "productSlice/GetAllProducts",
    async (_, {dispatch}) => {
        try {
            const products = await productService.getAllProducts()
            dispatch(setProductsToList(products))
        } catch (e) {
            console.log(e)
        }
    }
)
export const putAllProducts = createAsyncThunk(
    "productSlice/PutAllProducts",
    async (product, {dispatch}) => {
        try {
            const id = product.id
            console.log(id)
            const updatedProducts = await productService.putProducts(product, id)
        } catch (e) {
            console.log(e)
        }
    }
)

export const updateProductThunk = createAsyncThunk(
    "productSlice/updateProductThunk",
    async (product, {dispatch}) => {
        try {
            console.log(product)
            await dispatch(updateProduct(product))
        } catch (e) {
            console.log(e)
        }
    }
)

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        product: [],
        deleteId: null,
        modal: false,
        confirmModal: false,
        changeModal: false

    },
    reducers: {
        openModal: (state, action) => {
            state.modal = true
        },
        closeModal: (state, action) => {
            state.modal = false
        },
        openConfirmModal: (state, action) => {
            state.deleteId = action.payload.id;
            state.confirmModal = true
        },
        closeConfirmModal: (state, action) => {
            state.confirmModal = false
        },
        addProduct: (state, action) => {
            console.log(action.payload)
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            console.log(action.payload)
            state.products = state.products.filter(product => product.id !== action.payload.deleteId)
            state.confirmModal = false;
        },
        getById: (state, action) => {
            state.product = state.products.find(item => item.id == action.payload.id)
        },
        changeModal: (state, action) => {
            state.changeModal = action.payload
            state.modal = true
        },
        updateProduct: (state, action) => {
            state.products.forEach(item => {
                if (item.id == action.payload.id) {
                    item.name = action.payload.name
                    item.weight = action.payload.weight
                    item.count = action.payload.count
                    item.comment.push(...action.payload.comment)
                }
            })

        },
        sortProductsList: (state, action) => {
            if (action.payload == 'Alphabetically') {
                state.products = state.products.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload == 'Count') {
                state.products = state.products.sort((a, b) => a.count - b.count)
            }
        },
        setProductsToList: (state, action) => {
            state.products = [...action.payload]
        }
    }


})
const productReducer = productSlice.reducer
export const {
    openModal,
    closeModal,
    openConfirmModal,
    closeConfirmModal,
    addProduct,
    getById,
    deleteProduct,
    changeModal,
    updateProduct,
    sortProductsList,
    setProductsToList
} = productSlice.actions
export default productReducer