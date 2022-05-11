import s from './Loyout.module.css'
import Header from "../Header/Header";
import {Outlet} from "react-router-dom"
import Modal from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import {useEffect} from "react";
import {getAllProducts} from "../../store/products/Products.slice";

export default function Loyout() {
    const {modal, confirmModal} = useSelector(state => state["productReducer"]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    return (
        <div className={s.container}>
            <div>
                <Header/>
                {confirmModal && (<div className={s.modal}>
                    <ConfirmModal/>
                </div>)}
                {modal && (<div className={s.modal}>
                    <Modal/>
                </div>)}
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}