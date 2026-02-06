export default function Footer() {
    return (
        <footer className="relative bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-2 font-semibold text-gray-900">
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                            />
                            TrustRadar
                        </div>

                        <p className="mt-4 text-sm text-gray-600 max-w-sm">
                            TrustRadar helps you understand the quality and authenticity of
                            product reviews before you buy — directly inside your browser.
                        </p>

                        <p className="mt-4 text-xs text-gray-500">
                            AI-powered • Runs locally • No data sent
                        </p>
                    </div>

                    {/* LINKS */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">
                                Product
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <a href="#features" className="hover:text-gray-900 transition">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#how" className="hover:text-gray-900 transition">
                                        How it works
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://chrome.google.com/webstore"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-gray-900 transition"
                                    >
                                        Chrome Web Store
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-4">
                                Trust & Legal
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <a href="#privacy" className="hover:text-gray-900 transition">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#terms" className="hover:text-gray-900 transition">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:support@trustradar.app"
                                        className="hover:text-gray-900 transition"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">
                            Get started
                        </h4>

                        <p className="text-sm text-gray-600 mb-6">
                            Install TrustRadar and see review quality instantly on Amazon
                            product pages.
                        </p>

                        <a
                            href="https://chromewebstore.google.com/detail/hgnlhnjkenedenmhngkfdnfclmmocock?utm_source=landing"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:scale-[1.04] hover:shadow-lg transition shadow-md"
                            style={{ background: 'linear-gradient(135deg, #F265FF, #9C61FF)' }}
                        >
                            Add to Chrome
                        </a>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <span>
                        © {new Date().getFullYear()} TrustRadar. All rights reserved.
                    </span>

                    <span>
                        Built for transparency • Not affiliated with Amazon
                    </span>
                </div>
            </div>
        </footer>
    )
}