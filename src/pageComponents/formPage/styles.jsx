import styled from 'styled-components'


export const Container = styled.div`
width: 100vw;
height: 90.4vh;
background-repeat: no-repeat;
background-size: cover;
display: flex;

justify-content: end;
align-items: center;
padding: 0 10rem 0 25rem;

@media (max-width: 1300px) {
    justify-content: center;
    padding: unset;
    gap: 4rem;
    }
@media (max-width: 1075px) {
    flex-direction: column;
    gap: 3rem;
    }


    .container-text{
    order: -3;
    z-index: 10;
    color: #fff;
    font-size: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: auto;
    position: absolute;
    left: 55px;
    .text-2{
        font-size: 3.5rem;
    }
    @media (max-width: 1300px) {
    position: initial;
    }
}

`

export const Image = styled.img`
    position: absolute;
    height: 90vh;
    width: 90vw;

    @media (max-width: 1500px) {
    display: none;
    }
    @media (max-width: 1075px) {
    order: -1;
    display: block;
    position: unset;
    height: 81vh;
    width: 150vw;
    order: -1;
    }

`