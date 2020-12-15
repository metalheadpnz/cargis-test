import React from 'react'
import {useDispatch} from "react-redux";
import {test} from "../redux/actions";

export const Header = () => {
    const dispatch = useDispatch()
    const handle = () =>{
         dispatch (test())
    }

    return (
        <div className={'headerWrapper'}>
            <button>Пункт разгрузки</button>
            <button>Пункт погрузки</button>
            <button onClick={handle}>Get</button>
            1
        </div>
    )
}