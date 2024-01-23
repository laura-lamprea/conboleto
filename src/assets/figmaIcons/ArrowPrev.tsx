import React from "react";

const ArrowPrev: React.FC<{ fillColor?: string }> = ({fillColor = "white"}) => {
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
				d="M1.40715 27.2744L28.5987 2.13636C30.4781 0.39888 33.5171 0.39888 35.3765 2.13636L39.8951 6.31371C41.7745 8.05119 41.7745 10.8607 39.8951 12.5797L20.6212 30.3981L39.8951 48.2166C41.7745 49.954 41.7745 52.7636 39.8951 54.4826L35.3965 58.6969C33.5171 60.4344 30.4781 60.4344 28.6187 58.6969L1.42715 33.5589C-0.472256 31.8214 -0.47226 29.0119 1.40715 27.2744Z"
				fill={`${fillColor}`}
			/>
		</svg>
	);
};

export default ArrowPrev;
