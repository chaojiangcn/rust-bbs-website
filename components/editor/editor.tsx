"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

interface EditorProps {
  // getContent: () => void;
  initContent?: string;
  editable: boolean;
}
export interface EditorRef {
  getContent: () => any[];
}

const Page = forwardRef<EditorRef, EditorProps>((props, ref) => {
  const [editable, setEditable] = useState(true);
  useEffect(() => {
    setEditable(props.editable);
  }, []);

  const editor = useCreateBlockNote({
    initialContent: props.initContent
      ? JSON.parse(props.initContent)
      : undefined,
  });
  editor.isEditable = editable;
  useImperativeHandle(ref, () => ({
    getContent: () => {
      return editor.document;
    },
  }));
  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      style={{ paddingInline: editable ? "54px" : "0" }}
      editor={editor}
      formattingToolbar={editor.isEditable}
    >
      {/* <FormattingToolbar /> */}
    </BlockNoteView>
  );
});
Page.displayName = "Page";
export default Page;
