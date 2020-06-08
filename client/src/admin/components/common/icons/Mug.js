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
    <path d="M30 10h-6v-3c0-2.761-5.373-5-12-5s-12 2.239-12 5v20c0 2.761 5.373 5 12 5s12-2.239 12-5v-3h6c1.105 0 2-0.895 2-2v-10c0-1.105-0.895-2-2-2zM5.502 8.075c-1.156-0.381-1.857-0.789-2.232-1.075 0.375-0.286 1.075-0.694 2.232-1.075 1.811-0.597 4.118-0.925 6.498-0.925s4.688 0.329 6.498 0.925c1.156 0.381 1.857 0.789 2.232 1.075-0.375 0.286-1.076 0.694-2.232 1.075-1.811 0.597-4.118 0.925-6.498 0.925s-4.688-0.329-6.498-0.925zM28 20h-4v-6h4v6z"></path>
  </svg>
);

export default SVG;
