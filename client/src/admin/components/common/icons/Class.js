import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 32 33",
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M 7 5 C 5.355469 5 4 6.355469 4 8 L 4 24 C 4 25.644531 5.355469 27 7 27 L 25 27 C 26.644531 27 28 25.644531 28 24 L 28 8 C 28 6.355469 26.644531 5 25 5 Z M 7 7 L 25 7 C 25.566406 7 26 7.433594 26 8 L 26 24 C 26 24.566406 25.566406 25 25 25 L 23 25 L 23 23 L 18 23 L 18 25 L 7 25 C 6.433594 25 6 24.566406 6 24 L 6 8 C 6 7.433594 6.433594 7 7 7 Z M 16 11 C 14.894531 11 14 11.894531 14 13 C 14 14.105469 14.894531 15 16 15 C 17.105469 15 18 14.105469 18 13 C 18 11.894531 17.105469 11 16 11 Z M 11.5 13 C 10.671875 13 10 13.671875 10 14.5 C 10 15.328125 10.671875 16 11.5 16 C 12.328125 16 13 15.328125 13 14.5 C 13 13.671875 12.328125 13 11.5 13 Z M 20.5 13 C 19.671875 13 19 13.671875 19 14.5 C 19 15.328125 19.671875 16 20.5 16 C 21.328125 16 22 15.328125 22 14.5 C 22 13.671875 21.328125 13 20.5 13 Z M 16 16 C 14.453125 16 13.394531 16.660156 12.75 17.21875 C 12.414063 17.09375 12.039063 17 11.59375 17 C 9.902344 17 9 18 9 18 L 9 20 L 23 20 L 23 18 C 23 18 22.082031 17 20.59375 17 C 20.082031 17 19.644531 17.089844 19.28125 17.21875 C 18.636719 16.65625 17.558594 16 16 16 Z" />
  </svg>
);

export default SVG;
