function Button({
  children,
  href = "#",
  variant = "primary",
  target = "_blank",
}) {
  const baseClass =
    "inline-flex w-full sm:w-auto items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-300";

  const variantClass =
    variant === "outline"
      ? "border border-white/15 text-white hover:border-blue-500 hover:text-blue-400"
      : "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20";

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`${baseClass} ${variantClass}`}
    >
      {children}
    </a>
  );
}

export default Button;