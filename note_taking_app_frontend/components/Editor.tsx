"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { ListKit } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { Gapcursor, Dropcursor } from "@tiptap/extensions";
import useEditorStore from "@/lib/useEditorStore";

const Editor = () => {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate: ({ editor }) => setEditor(editor),
    onUpdate: ({ editor }) => setEditor(editor),
    onDestroy: () => setEditor(null),
    onSelectionUpdate: ({ editor }) => setEditor(editor),
    onTransaction: ({ editor }) => setEditor(editor),
    onFocus: ({ editor }) => setEditor(editor),
    onBlur: ({ editor }) => setEditor(editor),
    onContentError: ({ editor }) => setEditor(editor),
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] drop-shadow-xl flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text text-black",
        style: "padding-left: 56px; padding-right: 56px;",
      },
    },
    extensions: [
      StarterKit,
      ImageResize,
      ListKit,
      Gapcursor,
      Dropcursor,
      TableKit.configure({ table: { resizable: true } }),
      Image,
    ],
    content: `<table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colSpan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
        <img src="https://placehold.co/800x400" />`,
    immediatelyRender: false,
  });
  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] dark:bg-[#262626] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
