import { memo, SVGProps } from 'react';

const LoginButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 417 82' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      style={{
        mixBlendMode: 'plus-lighter',
      }}
    >
      <path
        d='M0 20C0 8.95431 8.95431 0 20 0H397C408.046 0 417 8.95431 417 20V62C417 73.0457 408.046 82 397 82H20C8.95431 82 0 73.0457 0 62V20Z'
        fill='#D9D9D9'
        fillOpacity={0.9}
      />
    </g>
  </svg>
);

const Memo = memo(LoginButtonIcon);
export { Memo as LoginButtonIcon };
