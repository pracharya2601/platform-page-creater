import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';

import { addComponent, updateComponent, deleteComponent } from "store/studio";

export function Editor({ children, onClick, active, ...other }: any) {
    const [hover, setHover] = useState(false);

    const editor = useSelector((state: any) => state.editor);
    console.log(editor)

    return (
        <div {...other}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${active && 'active-editor-box'}`}
        >
            <div>Edit button</div>
            {children}
        </div>
    )
}