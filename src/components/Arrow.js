import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  
  >
    <circle cx={22.5} cy={22.5} r={22.5} fill="#5266FF" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.75}
      d="m25.222 16.058 6.94 6.805-6.94 6.804M13.334 22.863h15.698"
    />
  </svg>
);
export default SvgArrow;

