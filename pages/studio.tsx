import grapesjs from 'grapesjs'
import { useEffect, useState } from 'react';

import {editor as editorObj} from 'utils/editor';
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-blocks-basic/dist/grapesjs-blocks-basic.min.js";

export default function Studio({}) {
    const [editor, setEditor] = useState<any>(null);

    useEffect(() => {
        const edit = grapesjs.init(editorObj)
        setEditor(edit);
    }, [])
    return (
        <div>
            <div id='editor'></div>
        </div>
    )
}