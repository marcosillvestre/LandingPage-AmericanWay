import styled from 'styled-components'

export const Container = styled.main`

background-color: #007dff;
padding: 5rem  0;
height: 110vh;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 990px) {
    background-position: left;
}


`


export const Section = styled.section`
text-align: center;
color: #fff;
font-size: 3rem;

h1 {
    font-size: 2em;
}
h4{
    font-size: 1em;
}

div{
position: absolute;
margin: 15rem 0 0 10rem;
display: flex;
flex-direction: column;
gap: 3rem;
    article{
        width: 70rem;
        text-align: justify;
    }
}
img{
    display: none;
}

@media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        position: unset;
        margin: unset;

    display: flex;
    flex-direction: column;
    align-items: center;
    article{
        padding: 5rem 7rem  ;
        text-align: justify;
    }
}
    img{
        display: block;
    }

}


`
export const DownloadEbook = styled.span`
justify-content: center;
background-color: #efab00;
padding: 4rem 5rem ;
border-radius: 2rem;
font-size: 2rem;
font-weight: bolder;

@media (max-width: 750px) {
    font-size: 2.4rem;
.know-more{
    background-color: #fa6000;
    padding: 3rem 6rem ;
}
}

/* .know-more{
    background-color: #fa6000;
    a{
    color: #fff;
    line-height: 100%;
    width: 100%;
    text-decoration: none;
        &:visited{
    color: #fff;
}
}
}
 */


        &:hover{
            border: solid #fff .2rem;
            font-size: 1.8rem;
            transition: .2s;
        }
    
`