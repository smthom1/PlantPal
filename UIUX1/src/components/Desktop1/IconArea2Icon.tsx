import { memo, SVGProps } from 'react';

const IconArea2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.9308 11C14.9308 12.7325 13.3975 14.1325 11.5 14.1325C9.60249 14.1325 8.06915 12.7325 8.06915 11C8.06915 9.2675 9.60249 7.8675 11.5 7.8675C13.3975 7.8675 14.9308 9.2675 14.9308 11Z'
      stroke='#232D14'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.5 18.2363C14.8829 18.2363 18.0358 16.4163 20.2304 13.2663C21.0929 12.0325 21.0929 9.95875 20.2304 8.725C18.0358 5.575 14.8829 3.755 11.5 3.755C8.11709 3.755 4.96417 5.575 2.76959 8.725C1.90709 9.95875 1.90709 12.0325 2.76959 13.2663C4.96417 16.4163 8.11709 18.2363 11.5 18.2363Z'
      stroke='#232D14'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(IconArea2Icon);
export { Memo as IconArea2Icon };
