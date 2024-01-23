import styled from 'styled-components'

export const Container = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 0.9rem;
    padding: 5rem 2rem;
    width: 40rem;
    justify-content: space-evenly;
    z-index: 1000009;
    transition: .7s;
    margin: 0 15rem 0 0;
    
    @media (max-width: 1255px) {
        
        margin: initial;
        padding: 2.5rem 2.5rem;

    }
h2{
    font-size: 3.6rem;
}
.container-inputs{
    max-width: 100%;
    display : flex ;
    flex-direction: column;
    justify-content: center;
    gap: .8rem;
    text-align: center;
    margin-top: 2rem;
}
    p{
        font-size: 1.5rem;
    }
`

export const Input = styled.input`
background-color: #f9f9f9;
height: 4.8rem;
border-radius: 5px;
border: 1px solid #cccccc;
padding-left: 1rem;

`

export const Submit = styled.input`
background-color: #c81d49;
color: #fff;
padding: 1.8rem 4rem;
border-radius: 10px;
border: none;
font-size: 2.5em;
font-weight: bolder;
margin: 2rem 0;
&:hover{
    background-color: #b21139;

}
&:active{
    opacity: .8;
}

`