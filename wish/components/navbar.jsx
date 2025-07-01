"use client"

import { useState, useEffect } from "react"
import Button from "./Button"
import styles from "../styles/navbar.module.css"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <h2>TemplateHub</h2>
                </div>

                <nav className={styles.nav}>
                    <button className={styles.navLink} onClick={() => scrollToSection("product")}>
                        Product
                    </button>
                    <button className={styles.navLink} onClick={() => scrollToSection("resources")}>
                        Resources
                    </button>
                    <button className={styles.navLink} onClick={() => scrollToSection("pricing")}>
                        Pricing
                    </button>
                </nav>

                <div className={styles.navActions}>
                    <Button variant="ghost">Sign In</Button>
                    <Button variant="primary">Get Started</Button>
                </div>
            </div>
        </header>
    )
}

