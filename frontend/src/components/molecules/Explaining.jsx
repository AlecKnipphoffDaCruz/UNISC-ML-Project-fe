export default function Explaining(){

    return(
        <div className="bg-gray-900 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">How Does AIPE Work?</h2>
                    <p className="text-xl text-gray-400">Powered by Machine Learning & Python</p>
                </div>

                {/* Main Process Flow */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Step 1: Input */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 border border-blue-400 border-opacity-30">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-2xl font-bold mb-4">1. Input Your Data</h3>
                        <p className="text-blue-100 mb-4">
                            Provide property details:
                        </p>
                        <ul className="text-blue-100 space-y-2">
                            <li>✓ Property Area (m²)</li>
                            <li>✓ Number of Bedrooms</li>
                            <li>✓ Number of Bathrooms</li>
                            <li>✓ Year Built</li>
                            <li>✓ Location</li>
                        </ul>
                    </div>

                    {/* Step 2: ML Processing */}
                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 border border-purple-400 border-opacity-30">
                        <div className="text-4xl mb-4">🤖</div>
                        <h3 className="text-2xl font-bold mb-4">2. ML Processing</h3>
                        <p className="text-purple-100 mb-4">
                            Our trained model analyzes your data using:
                        </p>
                        <ul className="text-purple-100 space-y-2">
                            <li>✓ <strong>Scikit-Learn</strong> Algorithms</li>
                            <li>✓ Multiple Regression Models</li>
                            <li>✓ Feature Normalization</li>
                            <li>✓ Historical Data Patterns</li>
                            <li>✓ Market Trends Analysis</li>
                        </ul>
                    </div>

                    {/* Step 3: Prediction */}
                    <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-8 border border-green-400 border-opacity-30">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-2xl font-bold mb-4">3. Get Prediction</h3>
                        <p className="text-green-100 mb-4">
                            Receive instant, accurate price estimates:
                        </p>
                        <ul className="text-green-100 space-y-2">
                            <li>✓ Predicted Price Range</li>
                            <li>✓ Confidence Score</li>
                            <li>✓ Market Comparison</li>
                            <li>✓ Detailed Analysis</li>
                            <li>✓ Recommendations</li>
                        </ul>
                    </div>
                </div>

                {/* Technical Details */}
                <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-16">
                    <h3 className="text-3xl font-bold mb-8">🔬 Technical Architecture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-400 mb-4">Backend (Python)</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3">→</span>
                                    <span><strong>Scikit-Learn:</strong> Core ML algorithms for regression analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3">→</span>
                                    <span><strong>Pandas:</strong> Data preprocessing and feature engineering</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3">→</span>
                                    <span><strong>NumPy:</strong> Numerical computations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3">→</span>
                                    <span><strong>Model Training:</strong> Trained on 10K+ property records</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-purple-400 mb-4">Frontend (React)</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">→</span>
                                    <span><strong>User Interface:</strong> Clean, intuitive input forms</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">→</span>
                                    <span><strong>Real-time Validation:</strong> Instant feedback on inputs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">→</span>
                                    <span><strong>Results Display:</strong> Beautiful visualization of predictions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3">→</span>
                                    <span><strong>API Integration:</strong> Seamless backend communication</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Model Features */}
                <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-8 border border-indigo-400 border-opacity-20">
                    <h3 className="text-3xl font-bold mb-8">⚙️ Machine Learning Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-indigo-300 mb-3">Model Accuracy</h4>
                            <p className="text-gray-300">Our model achieves ~85-92% accuracy using cross-validation on historical data, ensuring reliable predictions.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-indigo-300 mb-3">Feature Engineering</h4>
                            <p className="text-gray-300">We process 15+ features including area, age, location, amenities, and market conditions for comprehensive analysis.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-indigo-300 mb-3">Continuous Learning</h4>
                            <p className="text-gray-300">The model is regularly updated with new market data to maintain accuracy and adapt to market changes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}