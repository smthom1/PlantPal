import { memo, SVGProps } from 'react';

const LoginButtonIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 417 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      style={{
        mixBlendMode: 'plus-lighter',
      }}
    >
      <path
        d='M0 24.5C0 10.969 10.969 0 24.5 0H392.5C406.031 0 417 10.969 417 24.5V24.5C417 38.031 406.031 49 392.5 49H24.5C10.969 49 0 38.031 0 24.5V24.5Z'
        fill='#D9D9D9'
        fillOpacity={0.9}
      />
    </g>
  </svg>
);

const Memo = memo(LoginButtonIcon3);
export { Memo as LoginButtonIcon3 };
