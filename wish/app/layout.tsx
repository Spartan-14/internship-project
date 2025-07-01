import { ReactNode } from "react"
import "./styles/globals.css"

export const metadata = {
    title: "TemplateHub - Premium Web Templates",
    description: "Discover and download premium web templates for your next project",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}