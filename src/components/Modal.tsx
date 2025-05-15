import { useRef } from "react";

interface ModalProps {
    headerLabel: string,
    onCloseRequested: () => void,
    isOpen: boolean,
    children: React.ReactNode,

}

function Modal(props: ModalProps){
    const innerDivRef = useRef<HTMLDivElement>(null)

    function checkClickOutsideInnerDiv(e : React.MouseEvent<HTMLElement>){
        if(!innerDivRef.current?.contains(e.target as Node)){
            props.onCloseRequested();
        } 
    }

    return props.isOpen ? 
    (<div onClick={checkClickOutsideInnerDiv} className="w-full h-full bg-blue-200/75 absolute left-0 top-0 flex justify-center items-center --z-1">
        <div ref={innerDivRef} className="flex flex-col justify-center items-center gap-2 bg-white rounded-lg p-2">
            <header className="grid grid-cols-2 w-full">
                <p className="ml-2">{props.headerLabel}</p>
                <p className="justify-self-end" aria-label="Close" onClick={props.onCloseRequested}>X</p>
            </header>
            {props.children}
        </div>
    </div>) 
    : 
    null;
}

export default Modal;