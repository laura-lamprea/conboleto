import Checkout from "@/components/sections/checkout/Checkout";
// import { useAuth } from "@/context/AuthContext";

const Invoice = () => {
	// const { isAuthenticated } = useAuth();
	// Editar el boolean para mostrar login o Step 1 del fomulario
	return <Checkout isAuthenticated={false} />;
};
export default Invoice;
