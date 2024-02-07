import styled from 'styled-components'

export const Container = styled.main`
height: 110vh;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 750px) { 
    background-position: center;
    
    }
`

export const Section = styled.section`
    background-color: #007dff;
    margin: 5rem 0 0rem 13rem;
    border-radius: 4rem;
    color: #fff;
    width: 81rem;
    display: flex;
    flex-direction: column;
    padding: 7rem 5rem 2rem 5rem;
    
    p{
        font-size: 3rem;
    }
    h1{
        font-size: 3.8rem;
    }
    
    @media (max-width: 750px) { 
    gap: 2rem;
    padding: 5rem 3rem 2rem ;
    background-color: #007dff;
    border-radius: 4rem;
    font-size: 2.4rem;
    margin:  20rem auto;
    width: 75vw;
    p{
        text-align: justify;
        width: 100%;
    }
}
`