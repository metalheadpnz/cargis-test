import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export const GMap = (props)=> {

    const onMarkerClick = () => {
        console.log('Marker Clicked')
    }

    return <div className={'mapWrapper'}>
        Map
        <Map
            google={props.google}
             zoom={12}
             initialCenter={{
                 lat: 53.2,
                 lng: 45
             }}
             style={{
                 width: '800px',
                 height: '450px'
             }}

        >

            <Marker onClick={onMarkerClick}
                    name={'Current location'}
                    position={{
                        lat: 53.2,
                        lng: 45
                    }}
            />


            {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
            {/*    <div><h1>{this.state.selectedPlace.name}</h1>*/}
            {/*    </div>*/}
            {/*</InfoWindow>*/}
        </Map>
    </div>
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBBMbbo2QzzKRyTrsBsHv7JGvSo8dtbwbA"),
    language: 'ru'
})(GMap)