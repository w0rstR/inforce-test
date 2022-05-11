import s from './ProductItem.module.css'
import {openConfirmModal} from "../../store/products/Products.slice";

import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export default function ProductItem({item}) {
    const dispatch = useDispatch();
    const {id, name} = item;
    return (
        <div className={s.container}>
            <div>
                <img className={s.img}
                     src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                     alt="ProductImage"/>
                <div>{name}</div>
                <div><Link to={`/details/${item.id}`}
                           style={{textDecoration: 'none', color: '#282c34', fontSize: '20px'}}>
                    Show Details
                </Link></div>
            </div>
            <div>
                <button className={s.btn} onClick={() => dispatch(openConfirmModal({id}))}>Delete Item</button>
            </div>
        </div>
    )
}