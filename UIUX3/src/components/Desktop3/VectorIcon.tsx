import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.288793 1.53968C0.295953 0.68934 0.991098 0.00580433 1.84144 0.0129643L14.313 0.117976C14.7707 0.12183 15.2029 0.329093 15.4925 0.683547L20.7192 7.08165C21.0087 7.4361 21.441 7.64337 21.8986 7.64722L40.5738 7.80447C41.4242 7.81163 42.1077 8.50677 42.1006 9.35712L41.8876 34.6441C41.8805 35.4945 41.1853 36.178 40.335 36.1709L1.53974 35.8442C0.689395 35.837 0.00585869 35.1419 0.0130187 34.2916L0.288793 1.53968Z'
      fill='#111111'
      stroke='white'
      strokeWidth={1.1548}
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
