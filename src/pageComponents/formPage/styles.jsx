import styled from 'styled-components'


export const Container = styled.section`
width: 100vw;
height: 90.4vh;
background-repeat: no-repeat;
background-size: cover;

display: flex;
justify-content: right;
align-items: center;
z-index: 2;

    svg{
        fill: none !important;
    }

@media (max-width: 750px) { 
flex-direction: column;
height: inherit;
justify-content: space-between;

}

    .container-text{
    order: -3;
    z-index: 10;
    color: #fff;
    font-size: 6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: auto;
    position: absolute;
    left: 105px;
    .text-2{
        font-size: 4.5rem;
    }
    @media (max-width: 1300px) {
    position: initial;
    translate: 0 18%;
    margin: 5rem 0;
    font-size: 4rem;
    }

}

`

export const Image = styled.img`
    position: absolute;
    height: 90vh;
    width: 90vw;
    translate: -5% 0;
    @media (max-width: 1500px) {
    /* display: none; */
    }
    @media (max-width: 1075px) {
    order: -1;
    display: block;
    position: unset;
    height: unset;
    width: 85vw;
    }

`