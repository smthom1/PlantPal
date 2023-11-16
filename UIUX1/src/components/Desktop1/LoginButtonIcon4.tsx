import { memo, SVGProps } from 'react';

const LoginButtonIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 297 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      style={{
        mixBlendMode: 'plus-lighter',
      }}
    >
      <path
        d='M0 20C0 8.9543 8.95431 0 20 0H277C288.046 0 297 8.95431 297 20V23C297 34.0457 288.046 43 277 43H20C8.95431 43 0 34.0457 0 23V20Z'
        fill='#D9D9D9'
        fillOpacity={0.9}
      />
    </g>
  </svg>
);

const Memo = memo(LoginButtonIcon4);
export { Memo as LoginButtonIcon4 };
