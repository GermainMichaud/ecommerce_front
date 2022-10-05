import { FC, useEffect } from 'react';

import SuccessIcon from '../components/icons/SuccessIcon';
import { ButtonLink } from '../components/ui/common/Button';
import { Col } from '../components/ui/common/Col';
import { Row } from '../components/ui/common/Row';
import { EmptyObject } from '../interfaces';
import { resetCart, resetCartStatus } from '../store/cart/cartSlice';
import { useAppDispatch } from '../store/hooks';

const CheckoutSuccessPage: FC<EmptyObject> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCart());
    dispatch(resetCartStatus());
  }, [dispatch]);

  return (
    <Col align="center" width="100%">
      <Row align="center" width="auto">
        <SuccessIcon size="80" />
      </Row>
      <Row align="center" width="auto">
        La commande a bien été passée!
      </Row>
      <Row align="center" width="auto">
        <ButtonLink
          to="/products"
          title="Page des produits"
          bgColor="#399fb6"
          color="#fff"
        >
          Retourner à la boutique
        </ButtonLink>
      </Row>
    </Col>
  );
};

export default CheckoutSuccessPage;
