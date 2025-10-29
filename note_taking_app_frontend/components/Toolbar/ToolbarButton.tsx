import { LucideIcon } from "lucide-react";

type ToolbarButtonProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
};

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  label,
  onClick,
  isActive,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 dark:hover:bg-[#505050] ${
        isActive
          ? "bg-neutral-200/80 dark:bg-[#505050] dark:hover:bg-[#d2d2d2]"
          : ""
      }`}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ToolbarButton;
