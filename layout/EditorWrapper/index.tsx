/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import CenterComponent from "./CenterComponent";

const RightArrow = (props: any) => (
    <svg {...props} className="arrow-sidebar" style={{ height: '30px', width: '30px', border: '1px solid lightgray', borderRadius: '5px', padding: '2px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
)
const LeftArrow = (props: any) => (
    <svg {...props} className="arrow-sidebar w-6 h-6" style={{ height: '30px', width: '30px', border: '1px solid lightgray', borderRadius: '5px', padding: '2px' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>

)
export default function EditorWrapper({ children }: any) {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);


    return (
        <div className="bg-gray-200 relative w-full">
            <div className={`fixed z-10 top-0 bg-gray-200 text-gray-900 h-screen ${left && 'w-60'}`}>
                <div className="btn-holder left">{left ? <LeftArrow onClick={() => setLeft(!left)} /> : <RightArrow onClick={() => setLeft(!left)} />}</div>
            </div>
            <CenterComponent
                left={left}
                right={right}
            >
                {children}
            </CenterComponent>
            <div className={`fixed right-0 top-0 z-10 bg-gray-200 text-gray-900 h-screen ${right && 'w-60'}`}>
                <div className="btn-holder right">{right ? <RightArrow onClick={() => setRight(!right)} className={`right`} /> : <LeftArrow onClick={() => setRight(!right)} className={`right`} />}</div>
            </div>
        </div>
    )
}