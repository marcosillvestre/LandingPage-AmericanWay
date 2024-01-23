import styled from 'styled-components'


export const Container = styled.section`
width: 100vw;
height: 90.4vh;
background-repeat: no-repeat;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
z-index: 2;

@media (max-width: 750px) { 
flex-direction: column;
justify-content: space-between;
gap: 5rem;
}

    .container-text{
    z-index: 10;
    color: #fff;
    font-size: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: auto;


    .text-2{
        font-size: 4.4rem;
    }
    @media (max-width: 1300px) {
    
    translate: 0 18%;
    margin: 5rem 0;
    font-size: 4.3rem;
    }

}

`

export const Image = styled.img`
    order: 3;
    width: max-content;
    height: 90vh;
    translate: -5% 0;

    @media (max-width: 1075px) {
    height: auto;
    width: 85vw;
    }

`