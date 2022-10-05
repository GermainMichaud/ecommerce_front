import styled from 'styled-components';

type WrapperProps = {
  maxWidth?: string;
  display?: string;
  flexDirection?: 'column' | 'row';
};

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${(props) => props.maxWidth || '100%'};
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0.5rem;
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
`;
