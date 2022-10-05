import { Link } from '@tanstack/react-location';
import styled from 'styled-components';

type NavbarUIProps = {
  bgColor?: string;
};

export const NavbarUI = styled.header<NavbarUIProps>`
  width: 100%;
  z-index: 99;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.bgColor || 'white'};
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
`;

export const NavBrand = styled(Link)`
  display: flex;
  font-size: 2rem;
  color: black;
  text-decoration: none;
`;

export const Nav = styled.nav`
  padding: 0;
  margin: 0;
`;

export const NavUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
`;

export const NavLi = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  position: relative;
  font-weight: bold;

  &.active {
    color: #399fb6;
  }
`;
