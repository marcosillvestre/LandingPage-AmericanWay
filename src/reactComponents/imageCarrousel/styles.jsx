import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
margin: auto;
display: flex;
gap: 8px;
justify-content: center;
z-index: 9;
background-color: #fff;
padding: 0 20px;


div{
    display: flex;
    gap: 10px;
}

    @media (max-width: 990px) {
padding: 0 15px;
div{
    overflow-x: scroll;
    overflow-y: hidden;
    /* height: 80rem; */

}
    }
`
export const Image = styled.img`
width: max-content;
height: max(20rem, 70rem);

    &:hover {
    transition: .3s;
        scale: 1.03 ;
    }
        @media (max-width: 1445px) {
    height: max(30rem, 65rem);

    }
        @media (max-width: 990px) {
    width: 40rem;
    height: 55rem;
    }
`