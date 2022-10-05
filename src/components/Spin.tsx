import { FC } from 'react';

import { Spinner } from './ui/common/Spinner';

type SpinProps = {
  color?: string;
  small?: boolean;
  full?: boolean;
};

const Spin: FC<SpinProps> = ({ color, small, full }) =>
  full ? (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner color={color} small={small}>
        <div />
        <div />
      </Spinner>
    </div>
  ) : (
    <Spinner color={color} small={small}>
      <div />
      <div />
    </Spinner>
  );

export default Spin;
