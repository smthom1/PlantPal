import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={36.6729} cy={36} rx={36.6729} ry={36} fill='#80956D' fillOpacity={0.99} />
  </svg>
);

const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
