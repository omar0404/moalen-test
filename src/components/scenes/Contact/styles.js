import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    padding: 32px 24px 16px;
    display: flex;

    @media (max-width: 500px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 667px) {
        padding: 32px 10px 16px;
	}
`
export const FormBox = styled.div`
    flex: 70%;
`

export const ContactsBox = styled.div`
    flex: 30%;
    padding: 5.5em 1.5em;
    @media (max-width: 500px) {
        padding: .5em 1em;
    }
`
export const BoxItem = styled.div `
    margin: 0 0 15px 0;
    p{
        margin: 5px 0;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    width: 100%;
`



export const StyledIcon = styled.div`
	color: #000;
	height: 20px;
	svg {
		font-size: 20px;
		color: #252424;
		transition: all ease 0.4s;
	}
    margin-left: 16px;
`








