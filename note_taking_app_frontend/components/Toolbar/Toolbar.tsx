"use client";

import { LucideIcon, Undo2Icon } from "lucide-react";
import ToolbarButton from "@/components/Toolbar/ToolbarButton";
import useEditorStore from "@/lib/useEditorStore";

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
    ],
  ];
  return (
    <div className="bg-[#f1f4f9] dark:bg-[#363636] dark:text-white px-2.5 rounded-3xl min-h-10 flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
