import React from 'react'
import {useDispatch} from "react-redux";
import {getOrders} from "../redux/actions";

export const Header = () => {
    const dispatch = useDispatch()
    const handle = () =>{
         dispatch (getOrders())
    }

    return (
        <div className={'headerWrapper'}>
            <button>Пункт разгрузки</button>
            <button>Пункт погрузки</button>
            <button onClick={handle}>Get</button>
        </div>
    )
}