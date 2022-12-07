import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    position: relative;
`

export const Input = styled.input`
    padding: 16px 24px;
    box-sizing: border-box;
	box-shadow: 0 3px 1px -2px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.05), 0 1px 5px 0 rgba(0,0,0,0.05);
    border: none;
    border-radius: 24px;
    font-size: 12px;
    &:focus {
        outline: 1px solid rgba(0, 0, 0, 0.05);
        outline-offset: 1px;
    }
`

export const InputDropDown = styled.ul`
    padding: 16px 24px;
    box-sizing: border-box;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.05), 0 1px 5px 0 rgba(0,0,0,0.05);
    border: none;
    border-radius: 24px;
    font-size: 12px;
    background: white;
    position: absolute;
    top: 30px;
    z-index: 10;
    width: 100%;
    top: 70px;
    list-style: none;
    li {
        cursor: pointer;
        padding: 0px 0 16px;
        font-weight: bold;
    }
    opacity: 0.9;
`

export const Label = styled.label`
    text-align: right;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 24px 4px;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 8px 24px 0;
    white-space: pre;
`

export const MapContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 400px;
    border-radius: 24px;
    overflow: hidden;
    margin: 16px 0 0;
`