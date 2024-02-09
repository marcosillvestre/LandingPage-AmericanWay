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
gap: 8px;
padding: 0 2rem;
align-items: self-end;
justify-content: space-around;
z-index: 900;
background-color: #fff;
padding: 0 100px;


div{
    display: flex;
    gap: 10px;
}

    @media (max-width: 990px) {
padding: 0 15px;
div{
    overflow-x: scroll;
    overflow-y: hidden;
}
    }
`
export const Image = styled.img`
width: max-content;
height: max(40rem, max-content);
&:hover {
    transition: .3s;
        scale: 1.03 ;
    }
     @media (max-width: 1445px) {
width: 100%;
    }
`