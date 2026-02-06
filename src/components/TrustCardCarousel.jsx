import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const cardVariants = {
    enter: (direction) => ({
        opacity: 0,
        x: direction > 0 ? 30 : -30,
        scale: 0.92,
        filter: "blur(10px)",
        rotateY: direction > 0 ? 12 : -12,
    }),
    center: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        rotateY: 0,
    },
    exit: (direction) => ({
        opacity: 0,
        x: direction > 0 ? -30 : 30,
        scale: 0.92,
        filter: "blur(10px)",
        rotateY: direction > 0 ? -12 : 12,
    }),
}

const cards = [
    {
        grade: "D",
        score: 57,
        confidence: "Medium",
        warning: true,
        bullets: [
            "Many reviews include photos or videos",
            "Natural review length variation",
            "Low verified purchase rate",
        ],
        recommendation: "CONSIDER",
        buyIndex: 47.8,
    },
    {
        grade: "A",
        score: 88,
        confidence: "High",
        sentiment: { up: 86, neutral: 0, down: 14 },
        highlights: [
            "If you're considering nespresso vertuoline, JUST BUY IT",
            "My journey towards owning my nespresso started 6 months ago",
            "Customer service worked with me for one hour",
        ],
        recommendation: "BUY",
        buyIndex: 95,
    },
    {
        grade: "C",
        score: 73,
        confidence: "High",
        sentiment: { up: 100, neutral: 0, down: 0 },
        highlights: [
            "They are large enough to stop grains from spilling",
            "Performs same as higher priced brands",
            "Better value for money",
        ],
        recommendation: "BUY",
        buyIndex: 80.6,
        note: "Unnaturally concentrated 5★ ratings",
    },
    {
        grade: "F",
        score: 44,
        confidence: "Caution Advised",
        warning: true,
        bullets: [
            "Unnaturally concentrated 5★ ratings",
            "Low verified purchase percentage",
            "Suspicious review timing patterns",
        ],
        recommendation: "NOT RECOMMENDED",
        buyIndex: 35.4,
    },
]

const gradeClass = (g) => {
    if (g === "A" || g === "B") return "text-emerald-400"
    if (g === "C") return "text-lime-400"
    if (g === "D") return "text-amber-400"
    return "text-red-400"
}



export default function TrustCardCarousel() {
    const [i, setI] = useState(0)
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        const t = setInterval(() => {
            setDirection(1)
            setI((p) => (p + 1) % cards.length)
        }, 5000)
        return () => clearInterval(t)
    }, [])

    const c = cards[i]

    const cardSizes = [
        { width: 320, minHeight: 440 },
        { width: 320, minHeight: 330 },
        { width: 320, minHeight: 330 },
        { width: 320, minHeight: 440 },
    ]


    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl">
            <div className="">

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={i}
                        custom={direction}
                        variants={cardVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative bg-[#141416eb] backdrop-blur-xl border border-slate-700/60 rounded-3xl p-4 shadow-2xl shadow-black/60 overflow-hidden"
                        style={{
                            transformStyle: "preserve-3d",
                            width: cardSizes[i].width,
                            minHeight: cardSizes[i].minHeight,
                        }}
                    >

                        {/* Animated background glow */}
                        <motion.div
                            className={`absolute inset-0 bg-[ #141416eb] opacity-50 blur-2xl`}
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="relative z-10">
                            {/* HEADER */}
                            <motion.div
                                className="flex items-center gap-3 mb-3"
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                {c.warning && (
                                    <motion.span
                                        className="text-amber-400 text-2xl leading-none"
                                        animate={{
                                            rotate: [0, -12, 12, -8, 8, 0],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            delay: 0.4,
                                            duration: 0.8,
                                            ease: "easeOut",
                                        }}
                                    >
                                        ⚠️
                                    </motion.span>
                                )}
                                <span className={`text-5xl font-black ${gradeClass(c.grade)} tracking-tight`}>
                                    {c.grade}
                                </span>
                                <span className="opacity-30 text-slate-500 text-lg">·</span>
                                <span className={`text-2xl font-bold ${gradeClass(c.grade)}`}>
                                    {c.score}%
                                </span>
                            </motion.div>

                            {/* CONFIDENCE */}
                            <motion.div
                                className="text-sm text-slate-400 mb-4"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Review confidence:{" "}
                                <span className={`font-bold ${gradeClass(c.grade)}`}>
                                    {c.confidence}
                                </span>
                            </motion.div>

                            {/* BULLETS */}
                            {c.bullets && (
                                <motion.ul
                                    className="space-y-2 text-sm text-slate-300 mb-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    {c.bullets.map((b, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                                            className="flex items-start gap-2"
                                        >
                                            <span className={`${gradeClass(c.grade)} mt-0.5`}>•</span>
                                            <span>{b}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}

                            {/* AI SUMMARY */}
                            {c.highlights && (
                                <motion.div
                                    className="border border-slate-700/60 rounded-2xl p-4 mb-4 bg-slate-800/30 backdrop-blur-sm"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.35, duration: 0.5 }}
                                >
                                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                                        <motion.span
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ delay: 0.5, duration: 0.8 }}
                                        >
                                            ★
                                        </motion.span>
                                        <span>What Customers Love</span>
                                    </div>

                                    {/* SENTIMENT */}
                                    <div className="mb-3">
                                        <div className="flex text-xs text-slate-400 mb-1.5">
                                            <span className="w-1/3 flex items-center gap-1">
                                                <span>👍</span>
                                                <span>{c.sentiment.up}%</span>
                                            </span>
                                            <span className="w-1/3 text-center flex items-center justify-center gap-1">
                                                <span>😐</span>
                                                <span>{c.sentiment.neutral}%</span>
                                            </span>
                                            <span className="w-1/3 text-right flex items-center justify-end gap-1">
                                                <span>👎</span>
                                                <span>{c.sentiment.down}%</span>
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden flex">
                                            <motion.div
                                                className="bg-emerald-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${c.sentiment.up}%` }}
                                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                            />
                                            <motion.div
                                                className="bg-amber-400"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${c.sentiment.neutral}%` }}
                                                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                                            />
                                            <motion.div
                                                className="bg-red-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${c.sentiment.down}%` }}
                                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>

                                    {/* QUOTES */}
                                    <div className="space-y-3 text-sm text-slate-300">
                                        {c.highlights.map((h, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + idx * 0.15, duration: 0.4 }}
                                                className="border-l-2 border-emerald-500/40 pl-3 py-1"
                                            >
                                                <div className="italic leading-relaxed">"{h}"</div>
                                                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                                                    <span>✓</span>
                                                    <span>Verified</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* RECOMMENDATION */}
                            <motion.div
                                className="border-t border-slate-700/60 pt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                    Smart recommendation
                                </div>
                                <div className={`text-2xl font-black ${gradeClass(c.grade)} mb-1`}>
                                    {c.recommendation}
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-400">
                                        Buy index: <span className={`font-bold ${gradeClass(c.grade)}`}>{c.buyIndex}</span>
                                    </span>
                                </div>

                                {c.note && (
                                    <motion.div
                                        className="text-sm text-amber-400 mt-2 flex items-start gap-2"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.85, duration: 0.4 }}
                                    >
                                        <span className="mt-0.5">•</span>
                                        <span>{c.note}</span>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* FOOTER */}
                            <motion.div
                                className="mt-4 text-xs text-slate-500 flex items-center gap-2 justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                >
                                    ⚡
                                </motion.span>
                                <span className="p-3">AI-powered • Runs locally • No data sent</span>
                            </motion.div>
                        </div>

                        {/* Progress indicators */}
                        <motion.div
                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.4 }}
                        >
                            {cards.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-500 ${idx === i
                                        ? `w-8 ${gradeClass(c.grade).replace('text-', 'bg-')}`
                                        : 'w-1 bg-slate-600'
                                        }`}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}