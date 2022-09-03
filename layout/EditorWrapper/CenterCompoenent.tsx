/* eslint-disable react/no-unknown-property */
import { MutableRefObject, useLayoutEffect, useRef, useState } from "react"

export default function CenterComponent({children}: any) {
    const [dimension, setDimenstion] = useState({
        x: 1220,
        y: 800,
    })
    
    return (
        <div className="center-f">
                <div className="top-f flex justify-end p-1 gap-1">
                    <button onClick={() => setDimenstion({x: 320, y: 800})} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${dimension.x=== 320 && 'outline'}`}>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </button>
                    <button onClick={() => setDimenstion({x: 620, y: 800})} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${dimension.x=== 620 && 'outline'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </button>
                    <button onClick={() => setDimenstion({x: 1220, y: 800})} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${dimension.x=== 1220 && 'outline'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>

                    </button>
                </div>
                <div className="center-c flex bg-gray-50 p-2 overflow-auto">
                    <div className={`border-2 h-full ${!dimension.x && !dimension.y && 'flex-1'}`} id="resizable" style={{width: dimension.x, height: dimension.y}}>
                        {children}
                        <div>Hello</div>
                    </div>
                </div>
            </div>
    )
}