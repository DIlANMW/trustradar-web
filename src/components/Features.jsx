import { motion } from "framer-motion"

const features = [
    {
        title: "AI Trust Score",
        desc: "A single, easy-to-understand grade generated from multiple independent signals.",
        points: [
            "Review authenticity patterns",
            "Verified purchase weighting",
            "Rating distribution balance",
        ],
        icon: "🧠",
        color: "#84DDFF",
    },
    {
        title: "Fake Review Detection",
        desc: "Detects manipulation signals that normal star ratings can't reveal.",
        points: [
            "Suspicious review timing",
            "Over-concentrated 5★ clusters",
            "Repetitive phrasing patterns",
        ],
        icon: "🚫",
        color: "#EF4444",
    },
    {
        title: "Sentiment Balance",
        desc: "Understands what customers actually say — not just how many stars they give.",
        points: [
            "Positive / neutral / negative split",
            "Emotion & intent signals",
            "Weighted by review quality",
        ],
        icon: "📊",
        color: "#9C61FF",
    },
    {
        title: "Smart Recommendation",
        desc: "A clear decision based on overall risk — not hype.",
        points: [
            "BUY / CONSIDER / NOT RECOMMENDED",
            "Transparent buy index",
            "Warnings when confidence is low",
        ],
        icon: "✅",
        color: "#F59E0B",
    },
    {
        title: "Runs Locally",
        desc: "All analysis happens in your browser.",
        points: [
            "No accounts required",
            "No data sent to servers",
            "Instant results on page load",
        ],
        icon: "🔒",
        color: "#6B7280",
    },
    {
        title: "Stays Out of the Way",
        desc: "Designed to assist — never interrupt.",
        points: [
            "Lightweight popup UI",
            "Doesn't block the page",
            "Appears only when useful",
        ],
        icon: "🧩",
        color: "#F265FF",
    },
]

export default function Features() {
    return (
        <section
            id="features"
            className="relative py-32 bg-white overflow-hidden"
        >
            {/* ── HERO-LIKE ANIMATED BACKGROUND ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* base pastel wash */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                    transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        background:
                            "linear-gradient(180deg,#ffffff,#f5f0ff,#eff6ff,#ffffff)",
                        backgroundSize: "240% 240%",
                    }}
                />

                {/* violet glow */}
                <motion.div
                    className="absolute rounded-full"
                    animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        top: -260,
                        left: -260,
                        width: 520,
                        height: 520,
                        background:
                            "radial-gradient(circle, rgba(156,97,255,0.45) 0%, transparent 70%)",
                        filter: "blur(160px)",
                    }}
                />

                {/* blue glow */}
                <motion.div
                    className="absolute rounded-full"
                    animate={{ x: [0, -70, 0], y: [0, 80, 0] }}
                    transition={{ duration: 65, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        bottom: -200,
                        right: -200,
                        width: 480,
                        height: 480,
                        background:
                            "radial-gradient(circle, rgba(132,221,255,0.4) 0%, transparent 70%)",
                        filter: "blur(160px)",
                    }}
                />

                {/* pink accent */}
                <motion.div
                    className="absolute rounded-full"
                    animate={{ x: [0, 60, 0], y: [0, -70, 0] }}
                    transition={{ duration: 68, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        top: "45%",
                        right: "20%",
                        width: 420,
                        height: 420,
                        background:
                            "radial-gradient(circle, rgba(242,101,255,0.35) 0%, transparent 72%)",
                        filter: "blur(170px)",
                    }}
                />

                {/* micro texture */}
                <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:24px_24px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Designed for confident decisions
                    </h2>
                    <p className="mt-5 text-lg text-gray-600">
                        TrustRadar doesn't guess. It analyzes patterns, verifies signals,
                        and gives you a clear recommendation in seconds.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.45 }}
                            whileHover={{ y: -6 }}
                            className="relative group rounded-2xl bg-white/80 border backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition-all"
                            style={{ borderColor: `${f.color}40` }}
                        >
                            {/* hover gradient */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                                style={{
                                    background: `linear-gradient(135deg, ${f.color}20, ${f.color}05)`,
                                }}
                            />

                            <div className="relative">
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4"
                                    style={{ backgroundColor: `${f.color}15` }}
                                >
                                    {f.icon}
                                </div>

                                <h3 className="font-semibold text-lg text-gray-900">
                                    {f.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    {f.desc}
                                </p>

                                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                                    {f.points.map((p) => (
                                        <li key={p} className="flex items-start gap-2">
                                            <span className="mt-0.5" style={{ color: f.color }}>•</span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
