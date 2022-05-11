import s from './ConfirmModal.module.css'
import {useDispatch, useSelector} from "react-redux";
import {closeConfirmModal} from "../../store/products/Products.slice";
import {deleteProduct} from "../../store/products/Products.slice";
import {useEffect} from "react";

export default function ConfirmModal() {
    const {deleteId} = useSelector(state => state["productReducer"]);
    const dispatch = useDispatch()

    useEffect(() => {

        console.log(deleteId)
    }, [deleteId])

    return (
        <div className={s.container}>
            <h1 className={s.title}>Do you want to delete product?</h1>
            <div className={s.btnWrap}>
                <button className={s.btn} onClick={() => dispatch(deleteProduct({deleteId}))}>Yes</button>
                <button className={s.btn} onClick={() => dispatch(closeConfirmModal())}>No</button>
            </div>
        </div>
    )
}