import styled from 'styled-components'


export const Container = styled.div`
width: 100vw;
height: 90.4vh;
background-repeat: no-repeat;
background-size: cover;
display: flex;

justify-content: end;
align-items: center;
padding: 0 10rem;

@media (max-width: 1300px) {
    justify-content: center;
    }
@media (max-width: 1075px) {
    flex-direction: column;
    gap: 3rem;
    }


    .container-text{
    z-index: 10;
    color: #fff;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    z-index: 10;
    color: #fff;
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 52rem;
    align-items: center;
    position: absolute;
    left: 0;
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
    width: 99vw;

    @media (max-width: 1300px) {
    display: none;
    }

`