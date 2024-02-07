import styled from "styled-components";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';



export const Container = styled.div`
width: 100vw;
height: 80vh;
padding: 60rem 30rem;
display: flex;
flex-direction: column;
align-items: center;
font-size: 4rem;
justify-content: space-around;
h1{
    font-size: 6.8rem;
    color: #fa6000;
    margin: 5rem 0;
}

.know-more{
    font-size: 4.5rem;
    background-color: #fa6000;
    padding: 3rem;
    border-radius: 2rem;
    color: #fff;
    line-height: 100%;
    width: 60%;
    text-decoration: none;
    font-weight: bolder;
    text-align: center;
        &:visited{
    color: #fff;
    }

}
@media (max-width: 750px) {
    font-size: 2.4rem;
.know-more{
    background-color: #fa6000;
    padding: 3rem 6rem ;
}
}


`
export const Carrousel = styled.div`
    display:flex;
    justify-content: center;
    height: 20rem;
    align-items: center;
    padding: 20rem 0 29rem 0;

    button{
    background: none;
    z-index: 1;
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
@media (max-width: 1600px) {
    margin: 10rem 0;
    max-width: initial;
    
}
`



export const Data = styled.span`
display: flex;
flex-direction: column;
width: 70rem;
p{
    width: 40vw;
    font-size: 2rem;
    @media (max-width: 1600px) {
        width: initial;
        text-align: justify;
    }
}

.sub-profile{
    h2{
        font-size: 3rem;
    }
}
.profile {
    span{
        display: flex;
        margin: 1rem  0;
        svg{
            height: 4rem;
            width: 4rem;
        }
        
    }
}
`


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