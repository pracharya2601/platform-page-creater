import { useState } from "react"
import { createPortal } from "react-dom"

export default function CustomIframe({
    children,
    ...props
}: any) {
    const [contentRef, setContentRef] = useState<any>(null)

    const mountNode =
        contentRef?.contentWindow?.document?.body

    return (
        <iframe {...props} ref={setContentRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}