import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const NavBar = styled.nav`
    background: #8c92ac;
    heigth: 80px;
   // margin-top: -80px;
   display: flex;
    justify-content: flex-end;
    //align-items: center;
    //font-size: 1rem;
    position: sticky;
    //top: 0;
    //z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: flex-end;
height: 80px;
//z-index: 1;
//width: 100%;
padding: 0 24px;
//max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
color: #fff;
//justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
margin-left: 24px;
//font-weight: bold;
text-decoration: none;
margin-top: 24px;

&:hover{
    color: 	rgb(255, 235, 245);
    transition: 0.2s ease-in-out;
}
`;

export const NavLinks = styled(LinkScroll)`
justify-content: flex-end;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 14px;


height: 100%;
cursor: pointer;
font-size: 2rem;

&.active {
    border-bottom: 3px solid rgb(255,0,127);
}

&:hover{
    color: rgb(	255, 235, 245);
    transition: 0.2s ease-in-out;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
life-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}`;