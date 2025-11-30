import bg from "../../assets/bg.jpg";

export default function Greetings(){
        
    return (
        <div className="relative">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
                aria-hidden="true"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-2xl">
                    {/* Logo/Title */}
                    <div className="mb-8">
                        <h1 className="text-6xl font-black text-white mb-2 tracking-tight">
                            AIPE
                        </h1>
                        <p className="text-2xl text-blue-100 font-semibold">
                            Estimador de Imóveis com IA
                        </p>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl text-white mb-8 leading-relaxed">
                        Bem-vindo ao futuro da avaliação imobiliária. Utilizando inteligência artificial avançada,
                        entregamos estimativas precisas de preços de imóveis em segundos.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20">
                            <div className="text-3xl mb-2">⚡</div>
                            <p className="text-white font-semibold">Rápido</p>
                            <p className="text-blue-100 text-sm">Estimativas instantâneas</p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20">
                            <div className="text-3xl mb-2">🎯</div>
                            <p className="text-white font-semibold">Preciso</p>
                            <p className="text-blue-100 text-sm">Precisão alimentada por IA</p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20">
                            <div className="text-3xl mb-2">🔒</div>
                            <p className="text-white font-semibold">Seguro</p>
                            <p className="text-blue-100 text-sm">Seus dados protegidos</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-4">
                        <p className="text-white text-lg font-medium">
                            Pronto para estimar o valor do seu imóvel?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}