import s from './Header.module.css'
import {useDispatch} from "react-redux";
import { openModal} from "../../store/products/Products.slice";


export default function Header(){
    const dispatch = useDispatch();

    const showModal=()=>{
        dispatch(openModal())
    }

    return(
        <div>
            <div className={s.container}>
                <div className={s.btnWrap}>
                    <button className={s.btn} onClick={()=>showModal()}>Add Product</button>
                </div>
            </div>
        </div>
    )
}