import React from 'react'
import {OrderItem} from "./OrderItem";
import {useSelector} from "react-redux";


export const OrdersList = () => {
    const orders = useSelector(state => state.routs.routs)
    // const testMapArr = ['Краснодар', 'Калининград', 'Москва','']
    // console.log(orders)
    // console.log(testMapArr)

    return <div className={'RoutsListWrapper'}>
        OrdersList
        {orders.map(item => <OrderItem order={item} key={item.id}/>)}
    </div>
}