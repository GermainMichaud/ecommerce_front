import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const ProductImages = styled.div`
  width: 100%;
`;

export const ProductMainImg = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  outline: 1px solid #ccc;
  border-radius: 0.5rem;
`;

export const ProductGalleryImgs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 1rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
    outline: 1px solid #ccc;
    cursor: pointer;

    &.selected {
      outline: 1px solid black;
      cursor: initial;
    }
  }
`;

export const ProductDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  margin: 0.5rem 0;
`;

export const ProductNearOutOfStock = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  margin: 0.5rem 0;
`;

export const ProductColors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  flex-wrap: wrap;
  height: 25px;
  margin: 0.5rem 0;
  align-items: center;
`;

type ProductColorLabelProps = {
  color: string;
};

export const ProductColorLabel = styled.label<ProductColorLabelProps>`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    box-shadow: 0 0 2px 1px rgb(0 0 0 / 40%);
  }
  &.checked span {
    outline: 2px solid black;
    box-shadow: 0 0 0 0 rgb(0 0 0 / 40%);
  }
`;

export const ProductColorInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const ProductSizes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  margin: 0.5rem 0;
  align-items: center;
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  margin: 0.5rem 0;
  align-items: center;

  input {
    max-width: 10rem;
  }
`;

export const ProductCTA = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0.5rem;
`;
