import { useNavigate } from '@tanstack/react-location';
import { FC, FormEvent, useEffect, useState } from 'react';

import ButtonLoading from '../components/ButtonLoading';
import FormInput from '../components/FormInput';
import {
  CheckoutCartNbItems,
  CheckoutCartTitle,
  CheckoutCartTotal,
  CheckoutError,
  CheckoutPaymentTitle,
  CheckoutWrapper,
} from '../components/ui/Checkout';
import { Block } from '../components/ui/common/Block';
import { Button, ButtonLink } from '../components/ui/common/Button';
import { Col } from '../components/ui/common/Col';
import { Row } from '../components/ui/common/Row';
import { Form } from '../components/ui/form/Form';
import { EmptyObject } from '../interfaces';
import useCart from '../store/cart/useCart';
import { useCreateOrderMutation } from '../store/order/orderHook';
import { formatPrice } from '../utils';

const CheckoutPage: FC<EmptyObject> = () => {
  const navigate = useNavigate();
  const { total, items } = useCart();
  const [createOrder, { isLoading, error, isSuccess }] = useCreateOrderMutation();
  const [showCreditCardForm, setShowCreditCardForm] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfos = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    userInfos['payment_method'] = selectedPaymentMethod;
    await createOrder({ userInfos, items });
  };

  const payWithPaypal = () => {
    setShowCreditCardForm(false);
    setSelectedPaymentMethod('PAYPAL');
  };

  useEffect(() => {
    if (isSuccess) {
      navigate({ to: '/cart/checkout/success' });
    }
  }, [isSuccess]);

  return (
    <Form onSubmit={submitHandler}>
      <CheckoutWrapper>
        <Col>
          <h2>Saisissez vos coordonnées</h2>
          <FormInput id="lastname" label="Nom" required errorMessage={undefined} />
          <FormInput id="firstname" label="Prénom" required errorMessage={undefined} />
          <FormInput
            id="email"
            label="E-Mail"
            type="email"
            required
            errorMessage={undefined}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            inputmode="email"
          />
          <FormInput id="address" label="Adresse" required errorMessage={undefined} />
          <FormInput
            id="postal_code"
            label="Code postal"
            required
            errorMessage={undefined}
          />
          <FormInput id="city" label="Ville" required errorMessage={undefined} />
          <FormInput id="country" label="Pays" required errorMessage={undefined} />
        </Col>
        <Col>
          <Row>
            <Block>
              <Col width="100%">
                <CheckoutCartTitle>Votre panier</CheckoutCartTitle>
                <CheckoutCartNbItems>
                  <b style={{ color: '#399fb6' }}>{items.length}</b> produit
                  {items.length > 1 ? 's' : ''} dans le panier
                </CheckoutCartNbItems>
                <CheckoutCartTotal>
                  Total:{' '}
                  <span style={{ color: '#399fb6' }}>
                    {formatPrice(total, navigator.language, 'EUR')}
                  </span>
                </CheckoutCartTotal>
              </Col>
            </Block>
          </Row>
          <Row>
            <Block>
              <CheckoutPaymentTitle>Moyen de paiement</CheckoutPaymentTitle>
              <Row>
                <Button
                  onClick={() => {
                    setShowCreditCardForm(true);
                    setSelectedPaymentMethod('CREDIT_CARD');
                  }}
                  type="button"
                  size="100%"
                  block
                  outline={
                    selectedPaymentMethod === 'CREDIT_CARD' ? '1px solid #333' : 'none'
                  }
                >
                  Carte de crédit
                </Button>
                <Button
                  onClick={payWithPaypal}
                  type="button"
                  size="100%"
                  block
                  outline={selectedPaymentMethod === 'PAYPAL' ? '1px solid #333' : 'none'}
                >
                  Paypal
                </Button>
              </Row>
              {showCreditCardForm && (
                <Col>
                  <FormInput
                    id="card_name"
                    label="Nom sur la carte"
                    required
                    errorMessage={undefined}
                  />
                  <FormInput
                    id="card_number"
                    label="Numéro de carte"
                    type="text"
                    required
                    placeholder="XXXX XXXX XXXX XXXX"
                    pattern="[0-9]{12}"
                    errorMessage={undefined}
                    inputmode="numeric"
                  />
                  <Row>
                    <FormInput
                      id="card_expiration"
                      label="Expire le"
                      type="text"
                      required
                      placeholder="MM/YY"
                      pattern="([0-9]{2}[/]?){2}"
                      errorMessage={undefined}
                      inputmode="numeric"
                    />
                    <FormInput
                      id="card_cvc"
                      label="CVC"
                      type="text"
                      required
                      placeholder="XXX"
                      errorMessage={undefined}
                      inputmode="numeric"
                    />
                  </Row>
                </Col>
              )}
            </Block>
          </Row>
          {error && (
            <CheckoutError>
              {error.data ? error.data : 'Le paiement n&apos;a pas pu être effectué'}
            </CheckoutError>
          )}
          <Row>
            <Col>
              <ButtonLink to="/cart" block size="100%" color="#ce3030" type="button">
                Annuler
              </ButtonLink>
            </Col>
            <Col>
              <ButtonLoading
                block
                size="100%"
                bgColor="green"
                color="#fff"
                isLoading={isLoading}
                disabled={selectedPaymentMethod === null}
                text="Payer"
              />
            </Col>
          </Row>
        </Col>
      </CheckoutWrapper>
    </Form>
  );
};

export default CheckoutPage;
