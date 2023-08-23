import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { useState, useEffect } from "react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

export interface EditorProps {
    onChange: (editor: IDomEditor) => void
}

const ReactEditor = (props: EditorProps) => {
    const [editor, setEditor] = useState<IDomEditor | null>(null);
    const [html, setHtml] = useState("");
    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}
    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
    }
    useEffect(() => {
        return () => {
            if (editor == null) return;
            editor.destroy();
            setEditor(null);
        }
    }, [editor]);
    return <>
        <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
            <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
                style={{ borderBottom: '1px solid #ccc' }}
            />
            <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={editor => props.onChange(editor)}
                mode="default"
                style={{ height: '500px', overflowY: 'hidden' }}
            />
        </div>
    </>
}

export default ReactEditor;
