import React, {useEffect} from 'react'
import {OrderItem} from "./OrderItem";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../redux/actions";


export const OrdersList = () => {
    const orders = useSelector(state => state.routs.routs)
    const dispatch = useDispatch()
    // const testMapArr = ['Краснодар', 'Калининград', 'Москва','']
    // console.log(orders)
    // console.log(testMapArr)

    useEffect(()=> {
        dispatch(getOrders())
    }, [dispatch])

    return <div className={'RoutsListWrapper'}>
        OrdersList
        {orders.map(item => <OrderItem order={item} key={item.id}/>)}
    </div>
}