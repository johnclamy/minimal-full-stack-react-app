import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFFFF0;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`

const Alert = styled.section`
  border: 1px solid skyblue;
  background-color: skyblue;
  margin: 1.5rem 0;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`

const Row = styled.div`
  padding: 3rem 1rem;
`

const Section = styled.section`
  margin: 1.5rem 0;
`

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  margin: 1rem 0.5rem;
  margin-bottom: 2px solid brown; 
`

const Hero = styled.section`
  border: 1px solid #DCDCDC;
  border-radius: 4px;
  background-color: #DCDCDC;
  padding: 2rem;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  margin: 1.5rem 0;
  font-size: 3rem;
  color: black;
`

const HeroText = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: #696969;
`

const HeroButton = styled.button`
  background-image: linear-gradient(to bottom, #ffd89b, #19547b);
  border-radius: 8px;
  font-family: Arial;
  color: #D9D9D9;
  box-shadow: 6px 5px 24px #666666;
  font-size: 27px;
  padding: 19px; 
  text-decoration: none;
  cursor: pointer;

  :hover {
    background: #2079b0; 
    background-image: linear-gradient(to bottom, #19547b, #ffd89b);
    text-decoration: none;
  }

  :active { 
    transform: scale(0.98);  
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`

const Nav = styled.nav`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavTitle = styled.h1`
  font-family: 'Flavors', cursive;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`
const NavListItem = styled.li`
  margin-right: 1rem;
`

const Form = styled.form`
 display: flex;
 justify-content: center;
 align-items: center;
`

const FormControl = styled.input`
  margin-left: 2.5rem;
  font-size: 18px;
  font-size: max(18px, 1em);
  font-family: inherit;
  padding: 0.75em 0.5em;
  background-color: #fff;
  border: 2px solid #19547b;
  border-radius: 4px;
`

const Footer = styled.footer`
  padding: 2rem 1rem;
  color: #F8F8FF;
  text-align: center;
  font-weight: lighter;
  font-style: italic;
  font-size: 0.8rem;
  background-color: #2F4F4F;
`

export {
  Container,
  Alert,
  Row,
  Section,
  List,
  ListItem,
  Form,
  FormControl,
  Hero,
  HeroTitle,
  HeroText,
  HeroButton,
  Nav,
  NavTitle,
  NavList,
  NavListItem,
  Footer
}