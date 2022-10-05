import { Link } from '@tanstack/react-location';

import LogoIcon from './icons/LogoIcon';
import { Col } from './ui/common/Col';
import { Row } from './ui/common/Row';
import { NavLink } from './ui/header/Navbar';

const Footer = () => (
  <footer style={{ backgroundColor: '#399fb6' }}>
    <Row>
      <Col>
        <Row>
          <Col>
            <LogoIcon />
            <p style={{ fontSize: '.8rem', color: '#fff' }}>
              © Eco-Shop | {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Col>
      <Col align="flex-end" justify="center">
        <NavLink style={{ color: '#fff', fontWeight: 'normal' }} to="/products">
          Produits
        </NavLink>
      </Col>
    </Row>
  </footer>
);

export default Footer;
