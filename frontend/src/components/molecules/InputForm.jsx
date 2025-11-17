import Button from "../atoms/button";
import Input from "../atoms/input";

export default function InputForm(){

    return(
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-20 px-6 min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-white mb-4">Get Your Property Valuation</h2>
                    <p className="text-xl text-gray-400">Enter your property details to receive an AI-powered price estimate</p>
                </div>

                {/* Input Form Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-10 border border-slate-700 shadow-2xl">
                    
                    <div className="space-y-5 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Property Area (m²)</label>
                            <Input
                                placeHolder={"e.g., 1000"}
                                style={"w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Bedrooms</label>
                            <Input      
                                placeHolder={"e.g., 3"}
                                style={"w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Bathrooms</label>
                            <Input 
                                placeHolder={"e.g., 2"}
                                style={"w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Year Built</label>
                            <Input
                                placeHolder={"e.g., 2010"}
                                style={"w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Location / City</label>
                            <Input
                                placeHolder={"e.g., São Paulo"}
                                style={"w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        style={"w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 shadow-lg"}
                        placeHolder={"Get Valuation"}
                    />

                    {/* Info Text */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Our AI model will analyze your property and provide an estimated market value instantly.
                    </p>
                </div>
            </div>
        </div>
    )
}