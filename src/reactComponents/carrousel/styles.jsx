import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';

export const ArrowLeft = styled(ArrowBackIosIcon)`

`

export const ArrowRight = styled(ArrowBackIosIcon)`
transform: rotate(180deg);
`

export const Container = styled.div`
width: 100vw;
margin: auto;
display: flex;
gap: 20px;
padding: 0 2rem;
align-items: self-end;
justify-content: space-around;
z-index: 900;
background-color: #fff;

    
div{
    display: flex;
    gap: 20px;
    width: 100%;
}
&:hover > :not(:hover){
        opacity: .6 ;
    }
    @media (max-width: 1445px) {
display: grid;

    }
    @media (max-width: 768px) {
div{
    display: flex;
    gap: 20px;
    overflow: scroll;
}
    }
`
// 202310065928
export const Image = styled.img`
width: 100%;
transition: .3s;
`