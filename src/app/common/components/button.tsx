import { LucideIcon, PlayCircle } from "lucide-react";
import React from "react";

interface ButtonProps {
  ctaText: string;
  ctaAction: () => void;
  ctaIcon?: LucideIcon;
  iconPosition?: "left" | "right";
  buttonColor?: string;
  innerBorderColor?: string;
  iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  ctaAction,
  ctaText,
  ctaIcon: CtaIcon,
  iconPosition = "right",
  buttonColor = "bg-linear-to-r from-blue-500 to-blue-600",
  iconColor = "white",
  innerBorderColor,
}) => {
  return (
    <button
      onClick={ctaAction}
      className={`font-medium text-sm text-white rounded-md cursor-pointer ${buttonColor}`}
    >
      <div
        className={`m-[2px] px-3 py-2 rounded-sm border-[1.5px]  ${
          innerBorderColor ? innerBorderColor : "border-sky-300"
        } whitespace-nowrap items-center gap-2 flex-nowrap flex`}
      >
        {CtaIcon && iconPosition === "left" && (
          <CtaIcon color={iconColor} size={15} className="animate-bounce" />
        )}
        {ctaText}
        {CtaIcon && iconPosition === "right" && (
          <CtaIcon color={iconColor} size={15} className="animate-bounce" />
        )}
      </div>
    </button>
  );
};

export default Button;
