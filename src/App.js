import React from 'react'
import {Header} from "./components/Header";
import {OrdersList} from "./components/OrdersList";
import {Map} from "./components/Map";

function App() {
    return (
        <div className='appWrapper'>
            <Header/>

            <div className={'mainContent'}>
                <OrdersList/>
                <Map/>
            </div>
        </div>
    );
}

export default App;
