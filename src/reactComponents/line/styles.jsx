import styled from "styled-components";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';

export const Star = styled(StarIcon)`
color: #f8cf00dd;

`

export const ArrowLeft = styled(ArrowBackIosIcon)`
color: #ff6100;

`

export const ArrowRight = styled(ArrowBackIosIcon)`
transform: rotate(180deg);
color: #ff6100;

`

export const Container = styled.div`
width: 100vw;
margin: 0 auto;
display: flex;
justify-content: center;
max-height: 50vh;
/* background-color: #222; */
.container{
    display:flex;
    max-width: 60%;
    justify-content: center;
    height: 20rem;
    align-items: center;
}
div > button{
    background: none;
    z-index: 1000;
    color: #fff;
    border-radius: .5rem;
    padding: 2rem 3rem ;
    border: none;
    cursor: pointer;

    svg{
    height: 6rem;
    width: 6rem;
    }
}

`

export const Date = styled.span`
display: flex;
flex-direction: column;

p{
    max-width: 31vw;
    font-size: clamp(.7rem, 100%, .8rem);
}
.profile {

}
.profile > .sub-profile{
    h2{
        font-size: 1.2rem;
    }
    span{
        display: flex;
        
    }
}
.profile > div > img{
height: 2.5rem;
}
`