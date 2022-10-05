import { Link } from '@tanstack/react-location';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type ButtonProps = {
  bgColor?: string;
  color?: string;
  size?: string;
  block?: boolean;
  outline?: string;
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: ${(props) => (props.block ? 'block' : 'flex')};
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor || 'white'};
  color: ${(props) => props.color || 'black'};
  border: none;
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  width: ${(props) => props.size || 'max-content'};
  outline: ${(props) => props.outline || 'none'};
  transition: translate 0.3s ease;

  &.loading {
    padding: 1rem;
  }

  &.loading::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    inset: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: ${(props) => props.color || 'white'};
    border-radius: 50%;
    animation: ${loading} 1s ease infinite;
  }

  &:disabled {
    cursor: initial;
    opacity: 0.7;

    &:hover {
      translate: 0;
    }
  }

  &:hover {
    translate: 0 -3px;
  }

  &:active {
    box-shadow: none;
  }
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor || 'white'};
  color: ${(props) => props.color || 'black'};
  border: none;
  font-size: 1rem;
  text-decoration: none;
  width: max-content;
  transition: translate 0.3s ease;

  &:hover {
    translate: 0 -3px;
  }

  &:active {
    box-shadow: none;
  }
`;

export const ButtonGhost = styled.button<{ color?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  background: transparent;
  color: ${(props) => props.color || 'black'};
  border: none;
  width: max-content;
`;

type ButtonRoundProps = ButtonProps & {
  size?: string;
};

export const ButtonRound = styled.button<ButtonRoundProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 100%;
  padding: 0.5rem;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.bgColor || 'white'};
  color: ${(props) => props.color || 'black'};
  border: none;
  font-size: 1rem;
  height: ${(props) => props.size || '20px'};
  aspect-ratio: 1;
`;
