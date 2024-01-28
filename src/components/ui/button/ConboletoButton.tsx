function ConboletoButton({
	children,
	className,
	height = "[52px]",
	width = "full",
	onClick,
	disabled = false,
	...props
}: {
	children: React.ReactNode;
	className?: string;
	height?: string;
	width?: string;
	onClick?: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			{...props}
			onClick={onClick}
			className={`h-${height} w-${width} bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px] ${className}`}
		>
			{children}
		</button>
	);
}

export default ConboletoButton;
