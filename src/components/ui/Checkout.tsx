import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const CheckoutCartTitle = styled.h3``;

export const CheckoutCartNbItems = styled.p``;

export const CheckoutCartTotal = styled.p`
  font-weight: bold;
  text-align: right;
  font-size: 1.3rem;
`;

export const CheckoutPaymentTitle = styled.h3``;

export const CheckoutError = styled.p`
  color: #ce3030;
`;

export const CheckoutSuccess = styled.div``;
