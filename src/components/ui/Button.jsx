import React from 'react';
import { cn } from '../../utils/cn.jsx';

const buttonVariants = {
  default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
  destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
  outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
  ghost: "hover:bg-slate-100 hover:text-slate-900",
  link: "text-slate-900 underline-offset-4 hover:underline",
  hero: "bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-300",
  white: "bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10"
};

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children, 
  href,
  onClick,
  ...props 
}, ref) => {
  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      ref={ref}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;