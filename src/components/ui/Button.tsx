import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "success";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  asChild?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      asChild = false,
      icon,
      iconPosition = "left",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Base classes
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none transition-all duration-200 ease-in-out";

    // Variant classes
    const variantClasses = {
      primary:
        "bg-portfolio-blue text-black hover:bg-portfolio-blue-dark focus:ring-portfolio-blue-light",
      secondary:
        "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-200",
      outline:
        "bg-transparent text-black border border-portfolio-green hover:bg-portfolio-green hover:text-white focus:ring-portfolio-green",
      ghost:
        "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
    };

    // Size classes
    const sizeClasses = {
      sm: "text-sm px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2 gap-2",
      lg: "text-base px-6 py-3 gap-3",
    };

    // Additional classes
    const widthClass = fullWidth ? "w-full" : "";
    const loadingClass = isLoading ? "opacity-75 cursor-not-allowed" : "";

    return (
      <Comp
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${loadingClass} ${className}`}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Procesando...
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
