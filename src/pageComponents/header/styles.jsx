import styled from 'styled-components'



export const Container = styled.header`
width: 100vw;
height: 12rem;

@media (max-width: 1600px) {
        padding: .3rem ;
    }
`

export const Navigation = styled.nav`

@media (max-width: 990px){
display: none;
}
`
export const ListAnchor = styled.ul`
display: flex;
justify-content: space-around;
padding: 4rem 0px 3rem;

    a{
        z-index: 1;
    text-decoration: none;
    font-weight: bolder;
    color: rgb(34, 34, 34);
    cursor: pointer;
    font-size: 2.7em;
    }

`









export const MobileNavigation = styled.nav`
display: none;

    .menu-toogle{
    display: none;
    width: 40px;
    height: 30px ;
    margin: 12px 5px 0 0;
        .one,
        .two, 
        .three{
            background-color: #222;
            height: 4px;
            width: 30px;
            margin: 5px auto;
            color: green;
            transition-duration: .4s;
    }
}


    @media (max-width: 990px) {
display: flex;

.menu-toogle{
display: block;
position: absolute;
top: 2rem;
right: 20px;
z-index: 4;
cursor: pointer;
            .one{
        transform: ${props => props.$clicked ?
        "" :
        "rotate(45deg) translate(3px,2px)"} ;
            }
            .two{ 
                opacity: ${props => props.$clicked ?
        "1" :
        "0"};
                
            } 
            .three{
        transform: ${props => props.$clicked ?
        "" :
        "rotate(-45deg) translate(11px,-10px)"} ;
            }

}  
}

`

export const AnchorMobileList = styled.ul`
position: absolute;
left: 0;
background-color: #e9e9e9;
transition: all.5s;
top: ${props => props.$clicked ? "-220vh" : "12rem"};
width: 100vw;
height: 100vh;
padding: 25rem 10rem;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    padding-bottom: 25rem;

    a{
        z-index: 1;
        text-decoration: none;
        font-weight: bolder;
        color: rgb(34, 34, 34);
        cursor: pointer;
        font-size: 4.7rem;
        text-transform: uppercase;
    }
    
}
    @media (max-width: 990px){

}
`







export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 80%;
    height: 14rem;
    width: 25rem;
    display: flex;
    justify-content: center;
    z-index: 4;
    @media (max-width: 990px) {
        width: 20rem;
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%, -2rem);
    }
    `

export const Logo = styled.img`
    height: 10rem;
    width: 16rem;
    translate: 7% 25%;
    @media (max-width: 990px) {
        translate: 0 3rem;
        width: 10rem;
        height: 7rem;
        
    }

`


