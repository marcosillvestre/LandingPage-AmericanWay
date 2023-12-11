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
    width: 81rem;
    font-size: 3.2rem;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 750px) { 
    padding: 2rem 3rem;
    gap: 2rem;
    background-color: #007dff;
    border-radius: 4rem;
    width: 71vw;
    font-size: 2.6rem;
    margin:  auto;
}
`