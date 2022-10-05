import { Link } from '@tanstack/react-location';
import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  transition: translate 0.3s ease;

  &:hover {
    translate: 0 -3px;
  }

  &:active {
    box-shadow: none;
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  max-height: 180px;
  object-fit: contain;
`;

export const CardTitle = styled(Link)`
  font-size: 2rem;
  color: black;
  padding: 0.5rem;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardCTA = styled(Link)`
  padding: 0.5rem;
  background-color: #399fb6;
  color: white;
  text-decoration: none;
  text-align: center;
`;
