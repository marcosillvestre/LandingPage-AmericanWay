import styled from "styled-components";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';



export const Container = styled.section`
width: 100vw;
height: 80vh;
padding: 60rem 0rem;
display: flex;
flex-direction: column;
align-items: center;
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
    margin: 10rem auto;
        &:visited{
    color: #fff;
    }
    &:hover{
        transition: .1s ease-in-out ;
        font-size: 4.7rem;
    background-color: #fe8438;

    }

}
@media (max-width: 990px) {
    font-size: 2.4rem;
    padding: 50rem 5rem;
    h1{
        width: max-content;
    }
.know-more{
    background-color: #fa6000;
    padding: 3rem 0 ;
    width: 100%;
}
}


`
export const Carrousel = styled.div`
    display:flex;
    justify-content: center;
    height: 20rem;
    align-items: center;
    padding: 20rem 2rem;
    background-color: #f2f2f2;
    border-radius: 2rem;

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
        button{
    padding: 2rem 1rem ;

    svg{
    height: 4rem;
    width: 4rem;
    }
}
}


`



export const Data = styled.span`
display: flex;
flex-direction: column;
padding: 5rem;
border-radius: 2rem;
background-color: #fff;
p{
    width: 40vw;
    font-size: 2rem;
    @media (max-width: 1600px) {
        width: initial;
        text-align: justify;
    }
}

@media (max-width: 990px) {
    width: 100%;
    padding: 20px;
}
.sub-profile{
    h2{
        font-size: 3rem;
    }
    img{
        width: 5rem;
        height: 5rem;
        background: none;
    }
}
.profile {
    span{
        display: flex;
        margin: 1rem  0;
        svg{
            height: 2rem;
            width: 2rem;
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