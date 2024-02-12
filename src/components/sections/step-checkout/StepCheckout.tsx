"use client";
import React, { useState } from "react";
import SaleFormStep1 from "@/components/forms/SaleFormStep1";
import SaleFormStep2 from "@/components/forms/SaleFormStep2";

const StepCheckout = () => {
	const [currentStep, setCurrentSteps] = useState(true);
	return (
		<>
			{currentStep ? (
				<SaleFormStep1 setCurrentStep={setCurrentSteps} />
			) : (
				<SaleFormStep2 />
			)}
		</>
	);
};
export default StepCheckout;
