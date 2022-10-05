import styled from 'styled-components';

type SpinnerProps = {
  color?: string;
  small?: boolean;
};

export const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.small ? '30px' : '80px')};
  height: ${(props) => (props.small ? '30px' : '80px')};

  div {
    position: absolute;
    border: 4px solid ${(props) => props.color || '#000'};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes ripple {
    0% {
      top: ${(props) => (props.small ? '13px' : '36px')};
      left: ${(props) => (props.small ? '13px' : '36px')};
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: ${(props) => (props.small ? '13px' : '36px')};
      left: ${(props) => (props.small ? '13px' : '36px')};
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: ${(props) => (props.small ? '13px' : '36px')};
      left: ${(props) => (props.small ? '13px' : '36px')};
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: ${(props) => (props.small ? '27px' : '72px')};
      height: ${(props) => (props.small ? '27px' : '72px')};
      opacity: 0;
    }
  }
`;
