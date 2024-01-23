import React from "react";

const ArrowNext: React.FC<{ fillColor?: string }> = ({fillColor = "white"}) => {
	return (
		<svg
			width="42"
			height="60"
			viewBox="0 0 42 60"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M39.8975 32.7256L12.706 57.8636C10.8266 59.6011 7.78757 59.6011 5.92815 57.8636L1.40956 53.6863C-0.469853 51.9488 -0.469853 49.1393 1.40956 47.4203L20.6835 29.6019L1.40956 11.7834C-0.469853 10.046 -0.469853 7.23642 1.40956 5.51743L5.90815 1.30311C7.78757 -0.43437 10.8266 -0.43437 12.686 1.30311L39.8775 26.4411C41.7769 28.1786 41.7769 30.9881 39.8975 32.7256Z"
				fill={`${fillColor}`}
			/>
		</svg>
	);
};

export default ArrowNext;
