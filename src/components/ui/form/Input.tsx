import styled from 'styled-components';

type InputProps = {
  width?: string;
  inputColor?: string;
};

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.width || 'auto'};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);
  color: ${(props) => (props.inputColor ? props.inputColor : 'black')};
`;
