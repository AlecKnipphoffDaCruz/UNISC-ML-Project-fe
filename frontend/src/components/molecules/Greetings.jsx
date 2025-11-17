export default function Greetings(){
        
    return (
        <div className="bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                {/* Logo/Title */}
                <div className="mb-8">
                    <h1 className="text-6xl font-black text-white mb-2 tracking-tight">
                        AIPE
                    </h1>
                    <p className="text-2xl text-blue-100 font-semibold">
                        AI Property Estimator
                    </p>
                </div>

                {/* Subtitle */}
                <p className="text-xl text-white mb-8 leading-relaxed">
                    Welcome to the future of real estate valuation. Using advanced artificial intelligence, 
                    we provide accurate property price estimates in seconds.
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20">
                        <div className="text-3xl mb-2">⚡</div>
                        <p className="text-white font-semibold">Fast</p>
                        <p className="text-blue-100 text-sm">Instant estimates</p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20">
                        <div className="text-3xl mb-2">🎯</div>
                        <p className="text-white font-semibold">Accurate</p>
                        <p className="text-blue-100 text-sm">AI-powered precision</p>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20">
                        <div className="text-3xl mb-2">🔒</div>
                        <p className="text-white font-semibold">Secure</p>
                        <p className="text-blue-100 text-sm">Your data protected</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                    <p className="text-white text-lg font-medium">
                        Ready to estimate your property's value?
                    </p>
                    <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}