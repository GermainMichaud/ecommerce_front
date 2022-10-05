import styled from 'styled-components';

type ColProps = {
  padding?: string;
  gap?: string;
  align?: string;
  justify?: string;
  width?: string;
};

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || ''};
  flex: 1;
  padding: ${(props) => props.padding || '0.5rem'};
  gap: ${(props) => props.gap || '0.5rem'};
  width: ${(props) => props.width || 'auto'};
`;
