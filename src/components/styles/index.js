import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFFFF0;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`

const Row = styled.div`
  padding: 3rem 1rem;
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

export {
  Container,
  Row,
  Hero,
  HeroTitle,
  HeroText,
  Nav,
  NavTitle,
  NavList,
  NavListItem
}