"use client"

import styles from "../styles/button.module.css"

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "medium",
                                   onClick,
                                   disabled = false,
                                   ...props
                               }) {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ""}`

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </button>
    )
}
