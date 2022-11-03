import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
    padding: 16px 24px;
    @media only screen and (max-width: 667px) {
        padding: 32px 10px;
	}
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    width: 100%;
`

export const Cover = styled.div`
    border-radius: 32px;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url(${props => props.cover});
    background-position: center center;
    background-size: cover;
    height: 250px; 
    position: relative;
    margin: 0 0 52px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
    &:before {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: linear-gradient(0deg, rgba(244,244,245,1) 0%, rgba(244,244,245,1) 10%, rgba(244,244,245,0) 100%);
        z-index: 1;
    }
`

export const Details = styled.div`
    height: 100px;
    width: 100%;
    z-index: 10;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: auto;
	}
`

export const TitleDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 40px 32px 0 0;
    & > strong {
        display: block;
        color: ${configs.colors.primary};
        font-family: 'BoldFont';
        font-size: 18px;
        line-height: 18px;
        margin: 0 0 8px;
    }
    & > span {
        font-family: 'MediumFont';
        display: block;
        color: #7c8ab4;
        font-size: 14px;
        line-height: 14px;
        margin: 0 0 8px;
    }

    @media only screen and (max-width: 900px) {
        margin: 24px 0px 0 0;
	}
`

export const Avatar = styled.div`
	width: 72px;
	height: 72px;
	border-radius: 50%;
	background-color: #eee;
	background-position: center center;
	background-size: cover;
	background-image: url(${props => props.background});
`

export const Tags = styled.div`
	padding: 8px 0;

    @media only screen and (max-width: 900px) {
        display: none;
	}
`
export const Tag = styled.div`
	display: inline-flex;
	font-size: 12px;
	padding: 0px 8px;
	margin: 0 0 4px 4px;
	border-radius: 4px;
	background: ${props => props.background};
	color: white;
	cursor: pointer;
`

export const PlatformsCount = styled.div`
	color: ${configs.colors.primary};
	font-size: 40px;
	line-height: 40px;
	font-family: 'BoldFont';
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 24px 16px;
    @media only screen and (max-width: 667px) {
        margin: 0 10px 16px;
	}
`

export const ChartIcons = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 16px;
    margin: 0 24px 16px;
    width: 100%;
`

export const RowGrid = styled.div`
    margin: 0 24px 16px;

    display: grid;
	align-items: stretch;
	grid-template-columns: repeat(4, 1fr);
	gap: 16px;
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
	}
    @media only screen and (max-width: 667px) {
        margin: 0 10px 16px;
	}
`

export const GalleryRowGrid = styled.div`
    margin: 0 24px 16px;

    display: grid;
	align-items: stretch;
	grid-template-columns: repeat(4, 1fr);
	gap: 16px;
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
	}
    @media only screen and (max-width: 667px) {
        margin: 0 10px 16px;
	}
`

export const RowGrid2 = styled.div`
    margin: 0 24px 16px;

    display: grid;
	align-items: stretch;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px;

	@media only screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 10px 16px;
	}
`

export const Card = styled.div`
	border-radius: 32px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 16px;
	position: relative;

	cursor: pointer;
	transition: all 0.5s ease;

	border: #fff 2px solid;
	overflow: hidden;
    min-height: 150px;
`

export const ImageCard = styled.div`
    border: #fff 0px solid;
    overflow: hidden;
    min-height: 10px;
    position: relative;
    border-radius: 32px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    position: relative;
    height: 426px;
    @media only screen and (max-width: 667px) {
        height: 350px;
    }
    video {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none !important;
    }
`

export const GraphCard = styled.div`
	border-radius: 32px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	padding: 16px;
	position: relative;

	cursor: pointer;
	transition: all 0.5s ease;

	border: #fff 2px solid;
	overflow: hidden;
    min-height: 150px;
`

export const GraphContainer = styled.div`
    width: 55%;
    height: 250px;
    margin: 20px 0 80px;
`

export const BarGraphContainer = styled.div`
    width: 55%;
    height: 300px;
    margin: 24px 0;
`

export const StyledIcon = styled.div`
	color: #edbb42;
	height: 32px;
	svg {
		font-size: 32px;
		color: #edbb42;
	}
`

export const GraphIcon = styled.div`
	color: ${props => props.color};
	height: 24px;
	svg {
		font-size: 24px;
		color: ${props => props.color};
	}
`

export const Description = styled.p`
    font-size: 16px;
    line-height: 18px;
    color: ${configs.colors.negative};
    padding: 52px 24px 40px;

`

export const GraphLabel = styled.div`
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: ${props => props.color};
`

export const GraphPercentage = styled.div`
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: white;
`

export const FollowersCount = styled.div`
    font-size: 32px;
    font-weight: 900;
    font-family: 'BoldFont';
    color: ${configs.colors.primary};
`

export const CardTitle = styled.div`
    font-size: 16px;
    font-weight: 900;
    font-family: 'BoldFont';
    color: ${configs.colors.primary};
    width: 100%;
`

export const AddContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #edbb42;
    padding: 8px;
    margin: 0 24px 0 0;
    border-radius: 8px;
    svg {
		color: white;
		font-size: 16px;
	}
    cursor: pointer;
`


export const ModalRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0 0 16px;
cursor: pointer;
&>div {
    margin: 0;
}
&>div {
    flex: 1;
    margin: 0 8px 0 0;
    max-width: 48%;
}

@media only screen and (max-width: 667px) {
    margin: 0 0 24px;
}
`

export const ModalTitle = styled.div`
	display: block;
	color: ${configs.colors.primary};
	font-family: 'MediumFont';
	font-size: 18px;
	line-height: 18px;
	margin: 0 0 8px;
`

export const ModalContent = styled.div`
	padding: 32px 0;
`

export const ModalStyledIcon = styled.div`
	color: #edbb42;
	height: 24px;
	svg {
		font-size: 24px;
		color: ${props => props.active ? configs.colors.secondary : configs.colors.negativeLight};
		transition: all ease 0.4s;
	}
`

export const SectionRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 16px;
    @media only screen and (max-width: 667px) {
		flex-direction: column;

	}
`