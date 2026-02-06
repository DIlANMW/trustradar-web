import { motion } from "framer-motion"

export default function Comparison() {
    return (
        <section className="relative py-36 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
            {/* Ambient depth with vibrant color */}
            <div
                className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[160px] opacity-15"
                style={{ backgroundColor: '#9C61FF' }}
            />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Shopping without clarity vs shopping with confidence
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Star ratings alone don't tell the full story.
                        TrustRadar reveals what's really behind the reviews.
                    </p>
                </motion.div>

                {/* COMPARISON LANE */}
                <div className="relative mt-24 grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-start">
                    {/* WITHOUT */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 p-8 shadow-lg"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-amber-500">⚠️</span>
                            <span className="uppercase text-sm tracking-wide text-gray-500 font-medium">
                                Without TrustRadar
                            </span>
                        </div>

                        <h3 className="font-semibold text-xl mb-6 text-gray-900">
                            Making decisions with limited signals
                        </h3>

                        <ul className="space-y-4 text-gray-600">
                            <li className="flex gap-3">
                                <span className="mt-1 text-gray-400">•</span>
                                Star ratings can hide manipulated reviews
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 text-gray-400">•</span>
                                Review quality and authenticity are unclear
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 text-gray-400">•</span>
                                Positive sentiment may be artificially amplified
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 text-gray-400">•</span>
                                Risky sellers are hard to identify early
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 text-gray-400">•</span>
                                Buying relies heavily on intuition
                            </li>
                        </ul>
                    </motion.div>

                    {/* CENTER DIVIDER */}
                    <div className="hidden lg:flex flex-col items-center gap-3 text-gray-400">
                        <div className="h-10 w-px bg-gray-300" />
                        <span className="text-xs uppercase tracking-widest font-medium">
                            vs
                        </span>
                        <div className="h-10 w-px bg-gray-300" />
                    </div>

                    {/* WITH */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-2xl bg-white/80 backdrop-blur-xl p-8 border-2 shadow-2xl"
                        style={{ borderColor: '#84DDFF' }}
                    >
                        {/* Soft glow */}
                        <div
                            className="absolute inset-0 rounded-2xl blur-xl -z-10 opacity-30"
                            style={{ background: 'linear-gradient(135deg, #84DDFF, #9C61FF)' }}
                        />

                        <div className="flex items-center gap-2 mb-6">
                            <span style={{ color: '#84DDFF' }}>✓</span>
                            <span
                                className="uppercase text-sm tracking-wide font-semibold"
                                style={{ color: '#0891B2' }}
                            >
                                With TrustRadar
                            </span>
                        </div>

                        <h3 className="font-semibold text-xl mb-6 text-gray-900">
                            Clear signals. Confident decisions.
                        </h3>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex gap-3">
                                <span className="mt-1" style={{ color: '#84DDFF' }}>✓</span>
                                AI trust score summarizes review quality instantly
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1" style={{ color: '#84DDFF' }}>✓</span>
                                Fake and suspicious reviews are flagged
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1" style={{ color: '#84DDFF' }}>✓</span>
                                Sentiment balance shows what customers really say
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1" style={{ color: '#84DDFF' }}>✓</span>
                                Warnings appear when confidence is low
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1" style={{ color: '#84DDFF' }}>✓</span>
                                Simple BUY / CONSIDER / NOT RECOMMENDED guidance
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* FOOTER NOTE */}
                <div className="mt-14 text-center text-sm text-gray-500">
                    TrustRadar works locally in your browser. No accounts. No tracking.
                </div>
            </div>
        </section>
    )
}