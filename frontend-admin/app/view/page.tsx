import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Header = styled.header`
  background-color: #00796b;
  color: white;
  padding: 15px 0;
  text-align: center;
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #004d40;
`;

const NavLink = styled(Link)`
  color: white;
  padding: 15px 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #00695c;
  }
`;

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #004d40;
`;

const Paragraph = styled.p`
  color: #00695c;
`;

const Footer = styled.footer`
  background-color: #00796b;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// Components
const Home = () => (
  <Container>
    <Title>Selamat Datang di Website Laut</Title>
    <Paragraph>Temukan informasi menarik tentang laut dan bagaimana kita bisa menjaganya.</Paragraph>
  </Container>
);

const Conservation = () => (
  <Container>
    <Title>Konservasi Laut</Title>
    <Paragraph>Pelajari tentang upaya konservasi laut dan bagaimana Anda dapat terlibat.</Paragraph>
  </Container>
);

const App = () => (
  <Router>
    <Header>Website Laut</Header>
    <Nav>
      <NavLink to="/">Beranda</NavLink>
      <NavLink to="/konservasi-laut">Konservasi Laut</NavLink>
    </Nav>
    <Route exact path="/" component={Home} />
    <Route path="/konservasi-laut" component={Conservation} />
    <Footer>&copy; 2024 Website Laut. All rights reserved.</Footer>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

