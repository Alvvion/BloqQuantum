"use client";

import {
  BoldIcon,
  ItalicIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import ToolbarButton from "@/components/Toolbar/ToolbarButton";
import useEditorStore from "@/lib/useEditorStore";
import { Divider } from "@heroui/divider";
import FontFamilyButton from "@/components/Toolbar/FontFamilyButton";

type Sections = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
}[][];

const Toolbar = () => {
  const { editor } = useEditorStore();
  const sections: Sections = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("Comment"),
      },
    ],
  ];
  return (
    <div className="bg-[#f1f4f9] dark:bg-[#363636] dark:text-white px-2.5 rounded-3xl min-h-10 flex items-center gap-x-1 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Divider
        orientation="vertical"
        className="mx-2 h-6 bg-neutral-300 dark:bg-[#808080]"
      />
      <FontFamilyButton />
      <Divider
        orientation="vertical"
        className="mx-2 h-6 bg-neutral-300 dark:bg-[#808080]"
      />
    </div>
  );
};

export default Toolbar;
