import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import configs from '../../../configs'

import { Container, Input, Label, Error, MapContainer, InputDropDown } from './styles';

Geocode.setApiKey(configs.keys.maps);

export default function InputComponent(props) {
    const [location, setLocation] = useState({ lat: 24.68195784495908, lng: 46.66686176098688 });
    const [address, setAddress] = useState("");
    const [options, setOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [zoom, setZoom] = useState(16);

    useEffect(() => {
        Geocode.fromLatLng(location.lat, location.lng).then(
            response => {
                const address = response.results[0].formatted_address;
                setAddress(address);
                setShowOptions(false);
            },
            error => {
                console.error(error);
            }
        );
    }, [location]);

    useEffect(() => {
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setOptions(response.results.slice(0, 10))
            },
            error => {
                console.error(error);
            }
        );
    }, [address]);

    useEffect(() => {
        if(props.onChange)
            props.onChange({address, zoom, location})
    }, [address, zoom, location]);

    useEffect(() => {
    }, [props.value]);

    const onLocationChange = (value) => {
        setLocation(value.center);
        setZoom(value.zoom);
    };

    const onAddressChange = (value) => {
        setLocation(value.geometry.location);
        setShowOptions(false);
    };

    return <Container>
        <Label>{props.label} {zoom}</Label>
        <Input placeholder={"Enter the address .."} value={address} onFocus={()=>{setShowOptions(true)}} onChange={e => setAddress(e.target.value)} />
        {showOptions && options.length > 0 && <InputDropDown>
            {options.map(item => (
                <li onClick={() => {onAddressChange(item)}}>{item.formatted_address}</li>
            ))}
            <li onClick={() => {setShowOptions(false)}}>Cencel</li>
        </InputDropDown>}
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: configs.keys.maps, libraries: ['visualization'] }}
                center={location}
                onChange={onLocationChange}
                defaultZoom={zoom}
            />
        </MapContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};