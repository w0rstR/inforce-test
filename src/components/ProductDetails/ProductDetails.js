import s from './ProductDetails.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeModal, getById} from "../../store/products/Products.slice";

export default function ProductDetails() {
    const {products} = useSelector(state => state["productReducer"]);
    const {id} = useParams()
    const dispatch = useDispatch();
    const [product, setProduct] = useState()

    useEffect(() => {
        setProduct(products.find(product => product.id == id))
    }, [id, products])

    return (
        <div className={s.wrap}>
            {product ? <div className={s.container}>
                <img className={s.img}
                     src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                     alt="productImage"/>
                <div className={s.descriptionBlock}>
                    <div>Product Name: {product.name}</div>
                    <div>Product Weight: {product.weight}</div>
                    <div>Product count: {product.count}</div>
                    <button className={s.btn} onClick={() => dispatch(changeModal(true))}>Change</button>
                    Comments:{product.comment ? product.comment.map(comment => <div
                    key={comment.id + Math.floor(Math.random() * (5000 - 10)) + 10}>{comment.description}</div>) : null}
                </div>
            </div> : null}
        </div>
    )
}