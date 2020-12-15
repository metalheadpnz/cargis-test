import React from 'react'
import {Header} from "./components/Header";
import {RoutsList} from "./components/RoutsList";
import {Map} from "./components/Map";

function App() {
    return (
        <div className='appWrapper'>
            <Header/>

            <div className={'mainContent'}>
                <RoutsList/>
                <Map/>
            </div>

            {/*<RoutsList/>*/}
            {/*<Map/>*/}

        </div>
    );
}

export default App;
