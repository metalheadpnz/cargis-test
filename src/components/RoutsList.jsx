import React from 'react'
import {RoutItem} from "./RoutItem";


export const RoutsList = () => {
    const testMapArr = ['Краснодар', 'Калининград', 'Москва','','','']

    return <div className={'RoutsListWrapper'}>
        RoutsList
        {testMapArr.map(item => <RoutItem text={item}/>)}
    </div>
}