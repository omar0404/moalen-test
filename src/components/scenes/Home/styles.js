import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    width: 100%;
`

export const Content = styled.div`
	box-sizing: border-box;
	padding: 0 0 0;
	position: relative;
	max-width: 1100px;
	margin: 0 auto;
	background: white;
`

export const SectionContent = styled.div`
    position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 16px 16px;
	box-sizing: border-box;
    max-width: 900px;
    margin: 0 auto;
    z-index: 100;
    gap: 24px;
    z-index: 2;
    @media only screen and (max-width: 667px) {
        flex-direction: column-reverse;
	}
`
export const SectionContent2 = styled.div`
    position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 16px 16px;
	box-sizing: border-box;
    max-width: 900px;
    margin: 0 auto;
    z-index: 100;
    gap: 24px;
    z-index: 2;
    @media only screen and (max-width: 667px) {
        flex-direction: column;
	}
`

export const Section = styled.div`
    position: relative;
    margin: 5px 0;
	box-sizing: border-box;
    padding: 5px 0;
    background: ${props => props.grey ? '#f4f4f5' : '#fff'}
`

export const SectionActions = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const SectionImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 220px;
    @media only screen and (max-width: 667px) {
        display: block;
        flex: none;
        width: 90%;
	}
`

export const SectionTitle = styled.div`
	display: block;
	color: ${configs.colors.primary};
	font-family: 'BoldFont';
	font-size: 1.5em;
	line-height: 32px;
	margin: 0 0 16px;
    @media only screen and (max-width: 667px) {
        font-size: 1.4em;
	}
`

export const SectionSubTitle = styled.div`
	display: block;
	color: ${configs.colors.primary};
	font-family: 'RegularFont';
	font-size: 14px;
	line-height: 20px;
	margin: 0 0 24px;
`

export const Shape1 = styled.div`
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(/assets/images/shape.png);
    position: absolute;
    top: 0;
    right: 4px;
    height: 100px;
    width: 40px;
    z-index: 1;
    @media only screen and (max-width: 667px) {
	}
`

export const Shape2 = styled.div`
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(/assets/images/shape1.png);
    position: absolute;
    right: 4px;
    height: 100px;
    width: 40px;
    z-index: 1;
    @media only screen and (max-width: 667px) {
	}
`

export const Shape3 = styled.div`
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(/assets/images/shape2.png);
    position: absolute;
    right: -200px;
    height: 250px;
    width: 130px;
    z-index: 1;
    @media only screen and (max-width: 667px) {
        display:none;
	}
`

export const VideoSquare = styled.div`
    background-color: rgba(237, 187, 66, 0.3);
    width: 200px;
    height: 210px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    @media only screen and (max-width: 667px) {
	}
`

export const VideoSquare2 = styled.div`
    background-color: #0e256b;
    width: 230px;
    height: 160px;
    position: absolute;
    right: 0;
    top: 24px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        color: rgba(255, 255, 255, 0.7);
        font-size: 32px;
    }
    @media only screen and (max-width: 667px) {
	}
`

export const VideoPlay = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
`

export const ClickToPlay = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border:none;
    background:transparent ;

    svg {
        color: #edbb42;
        font-size: 32px;
    }

    span {
        color: ${configs.colors.primary};
        font-family: 'MediumFont';
        font-size: 14px;
        margin: 0 16px 0 0;
        border-bottom: 3px solid ${configs.colors.primary};
    }
`


export const SectionTitle2 = styled.div`
	display: block;
	color: ${configs.colors.primary};
	font-family: 'BoldFont';
	font-size: 32px;
	line-height: 32px;
	margin: 0 0 16px;
    text-align: center;
    padding-top: 25px;
`


export const FeaturesList = styled.div`
    width: 100%;
    text-align: center;
    gap: 16px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 667px) {
        flex-direction: column;
	}
`

export const Feature = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
    background-color: #fff;
    color: ${configs.colors.primary};
	font-family: 'BoldFont';
	font-size: 16px;
    margin: 0 8px 8px;
    svg {
        color: #edbb42;
        font-size: 24px;
        margin: 0 16px 0 0;
    }
    
`

export const FooterContent = styled.div`
    position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 16px 16px;
	box-sizing: border-box;
    max-width: 900px;
    margin: 0 auto;
    z-index: 100;
    gap: 24px;
    z-index: 2;
`

export const Footer = styled.div`
    position: relative;
    margin: 32px 0 0;
	box-sizing: border-box;
    padding: 4px 0 10px;
    height: 50px;
    background-color: #142667;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(/assets/images/home-footer.png);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    color: white;
    text-align: center;
`