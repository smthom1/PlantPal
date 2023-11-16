import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1184 808' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M50 0C22.3858 0 0 22.3858 0 50V758C0 785.614 22.3857 808 50 808H1134C1161.61 808 1184 785.614 1184 758V50C1184 22.3858 1161.61 0 1134 0H50ZM592 779C799.107 779 967 611.107 967 404C967 196.893 799.107 29 592 29C384.893 29 217 196.893 217 404C217 611.107 384.893 779 592 779Z'
      fill='#E8E8E9'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
