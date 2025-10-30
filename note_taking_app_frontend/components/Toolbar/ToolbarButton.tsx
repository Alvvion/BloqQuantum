import { LucideIcon } from "lucide-react";
import { Button, Tooltip, cn } from "@heroui/react";

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
    <Tooltip content={label} showArrow offset={15} delay={500}>
      <Button
        onPress={onClick}
        size="sm"
        radius="md"
        isIconOnly
        aria-label={label}
        className={cn(
          "text-sm h-7 min-w-7 flex items-center justify-center bg-[#F1F4F9] dark:bg-[#363636] rounded-sm hover:bg-neutral-200/80 dark:hover:bg-[#505050]",
          isActive &&
            "bg-neutral-300 dark:bg-[#505050] dark:hover:bg-[#d2d2d2] dark:hover:text-black"
        )}
      >
        <Icon className="size-4" />
      </Button>
    </Tooltip>
  );
};

export default ToolbarButton;
