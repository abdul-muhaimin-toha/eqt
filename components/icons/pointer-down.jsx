function PointerDown({ className = '' }) {
   return (
      <svg
         className={className}
         width={16}
         height={16}
         viewBox="0 0 16 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M13 6L8.5 10.5L4 6"
            stroke="#1F5126"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}

export default PointerDown;
