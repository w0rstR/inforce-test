import s from './Modal.module.css'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {
    closeModal, getAllProducts, putAllProducts, setProduct,
    updateProductThunk
} from "../../store/products/Products.slice";
import {useState} from "react";
import {useParams} from "react-router-dom";

export default function Modal() {
    const {products, changeModal} = useSelector(state => state["productReducer"]);
    const dispatch = useDispatch();
    const {id} = useParams()
    const [comment, setComment] = useState([])
    const [commentList, setCommentList] = useState([])
    const {handleSubmit, register, reset} = useForm();

    const randomId = Math.floor(Math.random() * (1000 - 100)) + 100;

    const addItem = (data) => {
        dispatch(setProduct({
            id: randomId,
            ...data,
            comment: commentList
        }))

        setCommentList([])
        reset()
    }

    const changeItem = (data) => {
        const {comment} = products.find(item => item.id == id)

        console.log([...comment, ...commentList])

        dispatch(updateProductThunk({
            id: id,
            ...data,
            comment: commentList
        }))
        dispatch(putAllProducts({
            id: id,
            ...data,
            comment: [...comment, ...commentList]
        }))
        reset()
    }

    const clsModal = () => {
        dispatch(closeModal());
        dispatch(getAllProducts())

    }
    const closeChangeModal = () => {
        dispatch(closeModal());

    }


    const addComment = (event) => {
        event.preventDefault()
        setCommentList([...commentList, {
            description: comment,
            id: commentList.length,
            productId: randomId,
            data: new Date().toLocaleString()
        }]);
        setComment([]);
    }


    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    return (
        <div>
            {changeModal ?
                <div className={s.container}>
                    <div>
                        <form onSubmit={handleSubmit(changeItem)}>
                            <div className={s.wrap}>
                                <label className={s.inputContainer}>
                                    <input className={s.input} type="text"
                                           placeholder={'Product name'} {...register('name')}/>
                                    <input className={s.input} type="number"
                                           placeholder={'Product count'} {...register('count')}/>
                                    <input className={s.input} type="number"
                                           placeholder={'Product weight'} {...register('weight')}/>
                                </label>
                                <div className={s.btnWrap}>
                                    <button className={s.btn}>Change</button>
                                </div>
                            </div>
                        </form>
                        <button className={s.cancelBtn} onClick={() => clsModal()}>Cancel</button>
                    </div>
                    <div>
                        <form onSubmit={addComment}>
                            <div className={s.wrap}>
                                <label className={s.inputContainer}>
                                    <input className={s.input} type="text" placeholder={'Comment'} value={comment}
                                           onChange={handleCommentChange}/>
                                </label>
                                <div className={s.btnWrap}>
                                    <button className={s.btn}>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                : <div className={s.container}>
                    <div>
                        <form onSubmit={handleSubmit(addItem)}>
                            <div className={s.wrap}>
                                <label className={s.inputContainer}>
                                    <input className={s.input} type="text"
                                           placeholder={'Product name'} {...register('name')}/>
                                    <input className={s.input} type="number"
                                           placeholder={'Product count'} {...register('count')}/>
                                    <input className={s.input} type="text"
                                           placeholder={'Product weight'} {...register('weight')}/>
                                </label>
                                <div className={s.btnWrap}>
                                    <button className={s.btn}>Add</button>
                                </div>
                            </div>
                        </form>
                        <button className={s.cancelBtn} onClick={() => closeChangeModal()}>Cancel</button>
                    </div>

                    <div>
                        <form onSubmit={addComment}>
                            <div className={s.wrap}>
                                <label className={s.inputContainer}>
                                    <input className={s.input} type="text" placeholder={'Comment'} value={comment}
                                           onChange={handleCommentChange}/>
                                </label>
                                <div className={s.btnWrap}>
                                    <button className={s.btn}>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>}
        </div>

    )
}