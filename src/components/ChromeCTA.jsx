import { motion } from "framer-motion"

export default function ChromeCTA() {
    return (
        <section className="relative py-36 overflow-hidden bg-white">
            {/* Vibrant ambient glow */}
            <div
                className="absolute inset-0 opacity-20"
                style={{ background: 'radial-gradient(circle at 50% 50%, #F265FF 0%, #9C61FF 40%, transparent 70%)' }}
            />
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[140px] opacity-25"
                style={{ backgroundColor: '#9C61FF' }}
            />
            <div
                className="absolute -bottom-40 right-1/4 w-[480px] h-[480px] rounded-full blur-[140px] opacity-20"
                style={{ backgroundColor: '#84DDFF' }}
            />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                {/* CHROME BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-gray-200 backdrop-blur-xl text-gray-700 shadow-lg"
                >
                    <span className="text-lg">🧩</span>
                    <span className="text-sm font-medium">
                        Available on the Chrome Web Store
                    </span>
                </motion.div>

                {/* HEADLINE */}
                <motion.h2
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mt-8 font-sora text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
                >
                    Add TrustRadar to Chrome
                </motion.h2>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Get instant insight into review quality, sentiment balance,
                    and risk signals — directly on Amazon product pages.
                </motion.p>

                {/* TRUST POINTS */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600"
                >
                    <div className="flex items-center gap-2">
                        <span>⚡</span>
                        Runs locally
                    </div>
                    <div className="flex items-center gap-2">
                        <span>🔒</span>
                        No data sent
                    </div>
                    <div className="flex items-center gap-2">
                        <span>⭐</span>
                        Free to install
                    </div>
                </motion.div>

                {/* CTA BUTTON */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-14"
                >
                    <a
                        href="https://chrome.google.com/webstore"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base hover:scale-[1.04] hover:shadow-2xl transition shadow-xl"
                        style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                    >
                        <span>➕</span>
                        Add to Chrome — It's Free
                    </a>

                    <div className="mt-4 text-xs text-gray-500">
                        No sign-up required • Install takes less than 10 seconds
                    </div>
                </motion.div>
            </div>
        </section>
    )
}