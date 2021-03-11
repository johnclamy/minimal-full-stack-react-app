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

const Nav = styled.nav`
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavTitle = styled.h1`
  font-family: 'Flavors', cursive;
  color: #FFD700;
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
  Nav,
  NavTitle,
  NavList,
  NavListItem
}