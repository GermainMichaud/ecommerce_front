import styled from 'styled-components';

type RowProps = {
  padding?: string;
  gap?: string;
  align?: string;
  width?: string;
};

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '0.5rem'};
  gap: ${(props) => props.gap || '0.5rem'};
  align-item: ${(props) => props.align || 'flex-start'};
`;
