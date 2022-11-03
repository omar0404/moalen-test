import React, { useEffect, useState } from 'react';
import { Container, PhoneInput, Label, Error } from './styles';
import { PhoneStyle } from './phoneStyle';
import { allCountries } from './listOfCountries';

export default function PhoneInputComponent(props) {
    const [country, setCountry] = useState("sa");
    
    useEffect(() => {
		init();
    }, []);

    const init = async () => {
        /*let country = "us";
		let countryData = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=a803ccac68124fe093433829f54a215b`).catch(//console.log);
        if(!!countryData.data && !!countryData.data["country_code2"]) {
			country = (countryData.data["country_code2"] || "us").toLowerCase();
		}
        setCountry(country);*/
    };


    return <Container>
        <Label>{props.label}</Label>
        <div dir="ltr">
            <PhoneInput
                key={country+"-phone"}
                defaultCountry={country}
                preferredCountries={['ae', 'sa', 'in', 'us', 'pk', 'gb']}
                onChange={props.onChange}
                flagsImagePath='/assets/images/flags.png'
                onlyCountries={allCountries}
                autoFormat={true}
            />
        </div>
        <PhoneStyle />
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};