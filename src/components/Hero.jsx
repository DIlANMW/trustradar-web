import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

/* ── floating helper ── */
const float = (distance = 6, duration = 16) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
})

/* ── subtle parallax (desktop only) ── */
function useTinyParallax(max = 4) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 25 })
  const springY = useSpring(y, { stiffness: 50, damping: 25 })

  useEffect(() => {
    if (window.innerWidth < 1024) return
    const onMove = (e) => {
      x.set((e.clientX / window.innerWidth - 0.5) * max * 2)
      y.set((e.clientY / window.innerHeight - 0.5) * max * 2)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [max, x, y])

  return { x: springX, y: springY }
}

/* ── cards ── */
const CARDS = [
  { src: "/cards/card-f-1.png", w: 280, x: "44%", y: "12%", z: 30, float: [7, 17], delay: 0, glow: true },
  { src: "/cards/card-d-1.png", w: 200, x: "72%", y: "4%", z: 20, float: [4, 21], delay: 0.12 },
  { src: "/cards/card-a-m.png", w: 210, x: "14%", y: "38%", z: 15, float: [5, 23], delay: 0.18 },
  { src: "/cards/card-a-2.png", w: 230, x: "60%", y: "52%", z: 22, float: [5, 20], delay: 0.24 },
  { src: "/cards/card-c-1.png", w: 160, x: "90%", y: "44%", z: 10, float: [3, 25], delay: 0.3 },
  { src: "/cards/card-d-2.png", w: 175, x: "30%", y: "20%", z: 12, float: [4, 22], delay: 0.36 },
  { src: "/cards/card-a-4.png", w: 150, x: "8%", y: "10%", z: 8, float: [3, 26], delay: 0.42 },
]

function FloatingCard({ card, parallax }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        left: card.x,
        top: card.y,
        zIndex: card.z,
        x: parallax.x,
        y: parallax.y,
      }}
    >
      {card.glow && (
        <div
          className="absolute rounded-2xl blur-2xl opacity-40"
          style={{
            inset: -16,
            background: "linear-gradient(135deg,#342a3e,#29144d,#7b63f1)",
          }}
        />
      )}

      <motion.img
        src={card.src}
        alt=""
        draggable={false}
        style={{ width: card.w }}
        className="relative rounded-2xl shadow-2xl"
        {...float(...card.float)}
      />
    </motion.div>
  )
}

export default function Hero() {
  const parallax = useTinyParallax(4)

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Invisible SEO helper */}
      <p className="sr-only">
        TrustRadar is a free Amazon review analyzer Chrome extension that detects fake,
        manipulated, and biased reviews in real time before you buy products online.
      </p>

      {/* ── ANIMATED BACKGROUND ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(180deg,#ffffff,#f5f0ff,#ffffff)",
            backgroundSize: "200% 200%",
          }}
        />

        <motion.div
          className="absolute rounded-full"
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          style={{
            top: -320,
            left: -320,
            width: 920,
            height: 920,
            background:
              "radial-gradient(circle, rgba(248, 55, 235, 0.74) 0%, transparent 65%)",
            filter: "blur(190px)",
          }}
        />

        <motion.div
          className="absolute rounded-full"
          animate={{ x: [0, -90, 0], y: [0, 70, 0] }}
          transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
          style={{
            top: "12%",
            right: -340,
            width: 900,
            height: 900,
            background:
              "radial-gradient(circle, rgba(57, 60, 254, 0.69) 0%, transparent 68%)",
            filter: "blur(200px)",
          }}
        />

        <motion.div
          className="absolute rounded-full"
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 58, repeat: Infinity, ease: "easeInOut" }}
          style={{
            bottom: -340,
            left: "30%",
            width: 860,
            height: 860,
            background:
              "radial-gradient(circle, rgba(236,72,153,0.55) 0%, transparent 70%)",
            filter: "blur(210px)",
          }}
        />

        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-32 grid lg:grid-cols-2 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/60 text-sm text-gray-600 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live on Amazon product pages
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.02] tracking-[-0.02em] text-gray-950">
            Detect fake Amazon reviews.
            <br />
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 blur-2xl opacity-30"
                animate={{ opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(90deg,#d946ef,#8b5cf6,#6366f1)",
                }}
              />
              <span className="relative">Decide instantly.</span>
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
            TrustRadar is a free Chrome extension that analyzes Amazon reviews in real time,
            detecting fake reviews, manipulation signals, and sentiment imbalance, so you can buy with confidence.
          </p>

          <div className="mt-12 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/hgnlhnjkenedenmhngkfdnfclmmocock?utm_source=landing",
                  "_blank"
                )
              }
              className="relative px-8 py-4 rounded-full font-semibold shadow-xl overflow-hidden"
            >
              <span
                className="absolute -inset-3 rounded-full blur-2xl opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(167, 139, 250, 0.78), rgba(147,197,253,0.6))",
                }}
              />

              <span
                className="absolute inset-0 rounded-full ring-1 ring-black/10"
                style={{
                  background:
                    "linear-gradient(135deg, #c026d3 0%, #7c3aed 50%, #2563eb 100%)",
                }}
              />

              <span className="absolute inset-0 rounded-full ring-1 ring-indigo-300/30" />

              <span className="relative z-10 flex items-center gap-3 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]">
                <img
                  src="/Chrome-Logo.png"
                  alt="Chrome"
                  className="w-10 h-10 bg-white rounded-full p-0.5 shadow-md"
                />
                <span className="font-semibold tracking-wide">
                  Add TrustRadar to Chrome – Free
                </span>
              </span>
            </motion.button>
          </div>

          <p className="m-4 text-xs text-gray-400 tracking-wide">
            Runs locally · No data sent · Free
          </p>
        </motion.div>

        {/* RIGHT */}
        <div className="hidden lg:block relative h-[560px]">
          {CARDS.map((card, i) => (
            <FloatingCard key={i} card={card} parallax={parallax} />
          ))}
        </div>

      </div>
    </section>
  )
}
