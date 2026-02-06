import {
    motion,
    useScroll,
    useMotionValueEvent,
} from "framer-motion"
import { useEffect, useState } from "react"

const links = [
    // { label: "How", href: "#how" },
    { label: "Features", href: "#features" },
    // { label: "Privacy", href: "#privacy" },
]

export default function FloatingNavbar() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [active, setActive] = useState("")

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious()
        if (latest > prev && latest > 100) setHidden(true)
        else setHidden(false)
    })

    useEffect(() => {
        const handler = () => {
            const offset = window.scrollY + 160
            links.forEach((l) => {
                const el = document.querySelector(l.href)
                if (
                    el &&
                    offset >= el.offsetTop &&
                    offset < el.offsetTop + el.offsetHeight
                ) {
                    setActive(l.href)
                }
            })
        }
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])

    return (
        <>
            {/* DESKTOP */}
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: hidden ? -90 : 0, opacity: hidden ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-5 inset-x-0 z-50 hidden md:flex justify-center"
            >
                <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-xl">
                    {/* LOGO */}
                    <div className="flex items-center gap-2 font-semibold text-gray-900">
                        <img
                            src="/logo.png"
                            className="w-15 h-10"


                        />
                        TrustRadar
                    </div>

                    {/* LINKS */}
                    <div className="flex items-center gap-5 text-sm text-gray-600">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className={`relative transition ${active === l.href
                                    ? "text-gray-900 font-medium"
                                    : "hover:text-gray-900"
                                    }`}
                            >
                                {l.label}
                                {active === l.href && (
                                    <span
                                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                                        style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white hover:scale-[1.05] transition shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                    >

                        Add to Chrome
                    </button>
                    <a
                        href="https://chromewebstore.google.com/detail/hgnlhnjkenedenmhngkfdnfclmmocock?utm_source=landing"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold text-gray-700 hover:scale-[1.05] transition shadow-lg border border-gray-200 bg-blue-100"
                    > Rate us</a>



                </nav>
            </motion.div>

            {/* MOBILE */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: hidden ? 90 : 0, opacity: hidden ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed bottom-4 inset-x-0 z-50 flex md:hidden justify-center px-4"
            >
                <nav className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-xl">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className={`flex flex-col items-center text-xs transition ${active === l.href
                                ? "text-gray-900"
                                : "text-gray-600"
                                }`}
                        >
                            <span className="text-lg">
                                {l.label === "How" && "⚙️"}
                                {l.label === "Features" && "✨"}
                                {l.label === "Privacy" && "🔒"}
                            </span>
                            <span className="mt-0.5">{l.label}</span>
                            {active === l.href && (
                                <span
                                    className="mt-1 w-1.5 h-1.5 rounded-full"
                                    style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                                />
                            )}
                        </a>
                    ))}

                    <button
                        className="px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                    >
                        Install
                    </button>
                </nav>
            </motion.div>
        </>
    )
}