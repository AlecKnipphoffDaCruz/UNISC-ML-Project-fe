export default function Footer(){
    
    return(
        <footer className="bg-gray-950 border-t border-gray-800">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            AIPE
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            AI Property Estimator - Revolutionizing real estate valuation with machine learning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">How It Works</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">Get Estimate</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">About Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">Documentation</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">Support</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="text-purple-400 mr-3">✉</span>
                                <a href="mailto:info@aipe.com" className="text-gray-400 hover:text-purple-400 transition">
                                    info@aipe.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-purple-400 mr-3">📞</span>
                                <span className="text-gray-400">(11) 9999-9999</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-purple-400 mr-3">📍</span>
                                <span className="text-gray-400">São Paulo, BR</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
                    <div className="flex gap-6">
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition">
                            f
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition">
                            𝕏
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition">
                            in
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition">
                            ▶
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-gray-900 bg-opacity-50">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        <p>© 2025 AIPE - AI Property Estimator. All rights reserved.</p>
                    </div>
                    <div className="flex gap-6 text-gray-500 text-sm">
                        <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
                        <a href="#" className="hover:text-purple-400 transition">Cookie Policy</a>
                    </div>
                    <div className="text-gray-500 text-sm mt-4 md:mt-0">
                        <p>Developed by Students 👨‍💻</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}