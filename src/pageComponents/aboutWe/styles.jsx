import styled from 'styled-components'

export const Container = styled.main`
height: 110vh;
display: flex;
background-repeat: no-repeat;
background-size: cover;
`

export const Section = styled.section`
    background-color: #007dff;
    margin: 5rem 0 0rem 13rem;
    border-radius: 4rem;
    color: #fff;
    padding: 6rem 7rem;
    width: 81rem;
    font-size: 3.2rem;
    height: 83rem;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 750px) { 
    gap: 2rem;
    background-color: #007dff;
    border-radius: 4rem;
    width: 56rem;
    font-size: 2.6rem;
    height: 81rem;
    margin: 14rem auto;
}
`