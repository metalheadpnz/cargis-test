import React from 'react';

export const OrderItem = (props) => {
    console.log()
    return <div className={'routItemWrap'}>
        <div>
            {props.order.loading_address}
        </div>
    </div>
}