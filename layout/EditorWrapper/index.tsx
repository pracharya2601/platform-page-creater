/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import CenterComponent from "./CenterCompoenent";

const RightArrow = (props: any) => (
    <svg {...props} className="arrow-sidebar" style={{height: '30px', width: '30px', border: '1px solid lightgray', borderRadius: '5px', padding: '2px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
)
const LeftArrow = (props: any) => (
    <svg {...props} className="arrow-sidebar" style={{height: '30px', width: '30px', border: '1px solid lightgray', borderRadius: '5px', padding: '2px'}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

)
export default function EditorWrapper({children}: any) {
    const [left, setLeft] = useState(true);
    const [right, setRight] = useState(true);


    return (
        <div className="editor-container-f bg-gray-200">
            <div className={`left-f ${left && "open"}`}>
                <div className="btn-holder left">{left ? <LeftArrow onClick={() => setLeft(!left)}/>: <RightArrow onClick={() => setLeft(!left)}/>}</div>
            </div>
            <CenterComponent>
                {children}
            </CenterComponent>
            <div className={`right-f ${right && "open"}`}>
                <div className="btn-holder right">{right ? <RightArrow onClick={() => setRight(!right)} className={`right`}/>: <LeftArrow onClick={() => setRight(!right)} className={`right`}/> }</div>
            </div>
        </div>
    )
}