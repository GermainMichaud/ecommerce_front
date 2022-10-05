import { FC } from 'react';

import { Col } from './ui/common/Col';
import { Input } from './ui/form/Input';
import { Label } from './ui/form/Label';

type FormInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  pattern?: string;
  inputmode?: string;
  errorMessage?: string;
};

const FormInput: FC<FormInputProps> = ({
  id,
  label,
  placeholder = '',
  type = 'text',
  required = false,
  errorMessage = undefined,
  pattern = undefined,
  inputmode = 'text',
}) => (
  <Col width="100%">
    <Label htmlFor={id}>
      {label} {required && <span style={{ color: '#ce3030' }}>*</span>}
    </Label>
    <Input
      id={id}
      name={id}
      placeholder={placeholder}
      type={type}
      required={required}
      width="100%"
      pattern={pattern}
      inputMode={inputmode}
    />
    {errorMessage && (
      <span style={{ color: '#ce3030', fontSize: '.8rem' }}>{errorMessage}</span>
    )}
  </Col>
);

export default FormInput;
