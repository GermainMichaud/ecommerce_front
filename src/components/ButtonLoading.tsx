import { FC } from 'react';

import { Button } from './ui/common/Button';

type ButtonLoadingProps = {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
};

const ButtonLoading: FC<ButtonLoadingProps> = ({
  text,
  isLoading = false,
  disabled = false,
  ...rest
}) => (
  <Button
    {...rest}
    className={isLoading ? 'loading' : ''}
    disabled={isLoading || disabled}
  >
    {!isLoading && text}
  </Button>
);

export default ButtonLoading;
