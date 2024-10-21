import React, {useEffect, useState, useRef} from "react";

const Modal = ({isOpen, onClose, children, style, className}) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    useEffect(()=>{
        setIsModalOpen(isOpen);
    }, [isOpen])

    useEffect(()=>{
        const dialog = modalRef.current;
        if(dialog) {
            if(isModalOpen) {
                dialog.showModal()
            } else {
                dialog.close();
            }
        }
    }, [isModalOpen])

    const onClick = (event) => {
        const dialog = modalRef.current;
        if (event.target === dialog) {
          dialog.close();
        }
    }

    return (
        <dialog ref={modalRef} onClose={onClose} onClick={onClick} style={style} className={className}>
            {children}
        </dialog>
    )
}

export default Modal;
