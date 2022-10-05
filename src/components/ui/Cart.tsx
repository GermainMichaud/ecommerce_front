import styled from 'styled-components';

export const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  &.error {
    outline: 1px solid #ce3030;
  }
`;

export const CartItemImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 0.3rem;
`;

export const CartItemName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const CartItemQuantity = styled.span`
  font-size: 0.9rem;
  color: #333;
`;

export const CartItemPrice = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

export const CartItemTotal = styled.span`
  font-weight: bold;
`;

export const CartItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.9rem;
  align-items: center;
`;

export const CartItemLeftDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CartItemQuantityBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

export const CartItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

export const CartItemError = styled.span`
  background: #ce3030;
  color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 0.9rem;
  display: block;
  padding: 0.2rem;
  border-radius: 0 0 0.2rem 0.2rem;
  translate: -50% 0;
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.5rem;
`;

export const CartTotal = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
`;

export const CartCAT = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;
