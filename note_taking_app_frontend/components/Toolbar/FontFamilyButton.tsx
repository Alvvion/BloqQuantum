import useEditorStore from "@/lib/useEditorStore";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@heroui/react";
import { ChevronDownIcon } from "lucide-react";

const FontFamilyButton = () => {
  const { editor } = useEditorStore();
  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Arial Black", value: "Arial Black" },
    { label: "Courier New", value: "Courier New" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Georgia", value: "Georgia" },
    { label: "Impact", value: "Impact" },
    { label: "Tahoma", value: "Tahoma" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Verdana", value: "Verdana" },
    { label: "Lucida Console", value: "Lucida Console" },
    { label: "Monaco", value: "Monaco" },
    { label: "Monospace", value: "Monospace" },
    { label: "Serif", value: "Serif" },
  ];
  return (
    <Dropdown
      // className="dark"
      classNames={{
        content: "bg-[#F1F4F9] text-black dark:bg-[#363636] dark:text-white",
        base: "before:bg-default-200",
      }}
    >
      <DropdownTrigger>
        <Button className="h-7 w-32 shrink-0 flex items-center justify-between rounded-sm bg-[#F1F4F9] dark:bg-[#363636] hover:bg-neutral-200/80 dark:hover:bg-[#505050] px-1.5 overflow-hidden text-sm">
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="p-1 flex flex-col gap-y-1 bg-[#F1F4F9] text-black dark:bg-[#363636] dark:text-white"
        onAction={(key) =>
          editor
            ?.chain()
            .focus()
            .setFontFamily(key as string)
            .run()
        }
      >
        {fonts.map(({ label, value }) => (
          <DropdownItem
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 dark:hover:bg-[#505050]",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-neutral-200/80 dark:bg-[#505050]"
            )}
            key={value}
            style={{ fontFamily: value }}
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default FontFamilyButton;
