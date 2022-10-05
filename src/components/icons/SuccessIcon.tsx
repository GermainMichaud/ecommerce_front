import { FC } from 'react';

type SuccessIconProps = {
  size?: string;
  primaryColor?: string;
  secondaryColor?: string;
};

const SuccessIcon: FC<SuccessIconProps> = ({
  size = '50',
  primaryColor = '#25ae88',
  secondaryColor = '#fff',
}) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    xmlSpace="preserve"
  >
    <circle style={{ fill: primaryColor }} cx="25" cy="25" r="25" />
    <polyline
      style={{
        fill: 'none',
        stroke: secondaryColor,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
      points="
38,15 22,33 12,25 "
    />
  </svg>
);

export default SuccessIcon;
