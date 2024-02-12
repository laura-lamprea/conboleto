"use client";
import React from "react";
import Summary from "@/components/ui/invoice-summary/Summary";
import RemainingTimeAlert from "@/components/ui/remaining-time-alert/RemainingTimeAlert";
import { useSession } from "next-auth/react";
import RequestLogin from "@/components/sections/request-login/RequestLogin";
import StepCheckout from "@/components/sections/step-checkout/StepCheckout";

const Checkout = () => {
	const { status } = useSession();
	return (
		<div className="relative flex">
			<div className="grow flex flex-col justify-center">
				<RemainingTimeAlert />
				{status === "authenticated" ? <StepCheckout /> : <RequestLogin />}
			</div>
			<Summary />
		</div>
	);
};
export default Checkout;
