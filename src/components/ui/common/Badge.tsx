import styled from 'styled-components';

type BadgeProps = {
  bgColor?: string;
  color?: string;
};

export const Badge = styled.span<BadgeProps>`
  border-radius: 2rem;
  font-size: 0.7rem;
  background-color: ${(props) => props.bgColor || '#399fb6'};
  color: ${(props) => props.color || 'white'};
  padding: 0.1rem 0.3rem;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
`;
