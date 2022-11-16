import React,{useState} from "react";
import {postRequest} from "../Services"
import { FaTimes } from 'react-icons/fa';
import "./modal.css"

 export const Modals = ({closeModal,modal}) => {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const onOrder = async (e) =>{
        e.preventDefault()
        setNumber('')
        setName('')
        await postRequest({name: name, number: number})
            .then(res => res)
    }
    return(
        <>
            <div onClick={closeModal} className={modal?'modal-tell active':'modal-tell'}>
            <div className={'modal-main'}>
                <div onClick={e => e.stopPropagation()} className={'modal-content'}>
                    <button onClick={closeModal} id={'close-modal'}><FaTimes/></button>
                    <h5>Оставить заявку</h5>
                    <form onSubmit={onOrder}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'Ваше имя'}/>
                        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder={'Ваш номер телефона'}/>
                        <button className="btnreq" type={'submit'}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
</>

    )
}
