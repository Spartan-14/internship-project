"use client"

import { useEffect } from "react"
import Button from "./Button"
import styles from "../styles/modal.module.css"

const Modal = ({ isOpen, onClose, title, children, showCloseButton = true }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {title && (
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        {showCloseButton && (
                            <Button variant="ghost" onClick={onClose}>
                                ×
                            </Button>
                        )}
                    </div>
                )}
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    )
}

export default Modal
