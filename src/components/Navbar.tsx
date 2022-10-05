import { FC } from 'react';

import { EmptyObject } from '../interfaces';
import { selectTotalProducts } from '../store/cart/cartSlice';
import { useAppSelector } from '../store/hooks';
import CartIcon from './icons/CartIcon';
import LogoIcon from './icons/LogoIcon';
import { Badge } from './ui/common/Badge';
import { Nav, NavbarUI, NavBrand, NavLi, NavLink, NavUl } from './ui/header/Navbar';

const Navbar: FC<EmptyObject> = () => {
  const nbItems = useAppSelector(selectTotalProducts);

  return (
    <NavbarUI>
      <h1>
        <NavBrand to="/" title="Home page">
          <LogoIcon />
        </NavBrand>
      </h1>
      <Nav>
        <NavUl>
          <NavLi>
            <NavLink to="products" getActiveProps={() => ({ className: 'active' })}>
              Produits
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="cart" getActiveProps={() => ({ className: 'active' })}>
              <CartIcon />
              {nbItems > 0 && <Badge>{nbItems >= 100 ? '99+' : nbItems}</Badge>}
            </NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </NavbarUI>
  );
};

export default Navbar;
