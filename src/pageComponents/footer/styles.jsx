import styled from "styled-components";

export const Container = styled.section`
display: flex;
background-color: #f9f9f9;
justify-content: space-around;
align-items: center;
padding: 3rem 0;

h3{
    font-size: 2rem;
}
.links{
    display: flex;
    flex-direction: column;

    a[href$='#']{
        text-decoration: none;
        color: #222;
        font-size: 1.8rem;
        border-radius: 5px;
        padding-left: 10px;
        &:hover{
            transition: all .4s ease-in-out;
            translate: 8px 0;
            background-color: #007dff;
            color:#fff;
        }
    }
}

.social{
    align-items: center;
    p{
        font-size: 1.5rem;
    }
    div{
        margin: 1rem 0;
    }
}

@media (max-width: 990px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    .links{
    a[href$='#']{
        padding: 0;
        font-size: 2rem;
    }
    }
}

`

export const Image = styled.img`

@media (max-width: 990px) {
    width: 200px;
}
`