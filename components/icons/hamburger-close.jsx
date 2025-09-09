import React from 'react';

function HamburgerClose() {
   return (
      <svg
         width={36}
         height={36}
         viewBox="0 0 36 36"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <rect width={36} height={36} rx={18} fill="#E6AF2E" />
         <line
            y1="-0.75"
            x2="15.5441"
            y2="-0.75"
            transform="matrix(0.706549 0.707664 -0.706549 0.707664 12 13)"
            stroke="#1F5126"
            strokeWidth="1.5"
         />
         <line
            y1="-0.75"
            x2="15.5441"
            y2="-0.75"
            transform="matrix(-0.706549 0.707664 0.706549 0.707664 24 13)"
            stroke="#1F5126"
            strokeWidth="1.5"
         />
      </svg>
   );
}

export default HamburgerClose;
