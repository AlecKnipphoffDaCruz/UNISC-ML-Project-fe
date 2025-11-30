export default function Explaining() {
  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Como o AIPE funciona?</h2>
          <p className="text-xl text-gray-400">Baseado em Machine Learning e Python</p>
        </div>

        {/* Main Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1: Input */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 border border-blue-400 border-opacity-30">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">1. Insira os dados do imóvel</h3>
            <p className="text-blue-100 mb-4">
              Enviamos um conjunto de dados do imóvel para a API de previsão —
              em resumo: tamanho e áreas, contagem de cômodos, bairro,
              características (piscina, churrasqueira, sacada etc.), custos e
              informações de construção. Esses dados fornecem contexto para o
              modelo estimar o valor.
            </p>
            <div className="text-blue-100 text-sm bg-slate-800 p-3 rounded-md border border-slate-700">
              <div className="mb-2">Exemplo de payload (resumido):</div>
              <pre className="text-xs text-white/80 bg-transparent whitespace-pre-wrap">{`{
    "tipo_imovel": "casa",
    "area_m2": 120,
    "quartos": 3,
    "bairro": "Universitário",
    "condominio_valor": 0,
    "iptu_mensal": 0,
    "piscina": "sim",
    "churrasqueira": "sim"
}`}</pre>
            </div>
          </div>

          {/* Step 2: ML Processing */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 border border-purple-400 border-opacity-30">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">2. Processamento do Modelo</h3>
            <p className="text-purple-100 mb-4">Nosso modelo treinado analisa seus dados usando:</p>
            <ul className="text-purple-100 space-y-2">
              <li>✓ <strong>Scikit-Learn</strong> — algoritmos de ML</li>
              <li>✓ Modelos de regressão múltipla</li>
              <li>✓ Normalização de features</li>
              <li>✓ Padrões extraídos de dados históricos</li>
              <li>✓ Análise de tendências de mercado</li>
            </ul>
          </div>

          {/* Step 3: Prediction */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-8 border border-green-400 border-opacity-30">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">3. Receba a previsão</h3>
            <p className="text-green-100 mb-4">Receba estimativas de preço instantâneas e precisas:</p>
            <ul className="text-green-100 space-y-2">
              <li>✓ Faixa de preço estimada</li>
              <li>✓ Nível de confiança</li>
              <li>✓ Comparação com o mercado</li>
              <li>✓ Análise detalhada</li>
              <li>✓ Recomendações</li>
            </ul>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-16">
          <h3 className="text-3xl font-bold mb-8">🔬 Technical Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                Backend (Python)
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>
                    <strong>Scikit-Learn:</strong> Algoritmos principais para
                    análise de regressão
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>
                    <strong>Pandas:</strong> Pré-processamento e engenharia de
                    features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>
                    <strong>NumPy:</strong> Cálculos numéricos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>
                    <strong>Treinamento do modelo:</strong> treinado com mais de
                    10k registros de imóveis
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Frontend (React)</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>
                    <strong>Interface:</strong> formulários limpos e intuitivos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>
                    <strong>Validação em tempo real:</strong> feedback imediato
                    nas entradas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>
                    <strong>Exibição de resultados:</strong> visualização clara
                    das previsões
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">→</span>
                  <span>
                    <strong>Integração com API:</strong> comunicação fluida com o
                    backend
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Model Features */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-8 border border-indigo-400 border-opacity-20">
          <h3 className="text-3xl font-bold mb-8">⚙️ Recursos do Modelo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">Precisão do Modelo</h4>
              <p className="text-gray-300">Nosso modelo alcança ~85–92% de precisão em validação cruzada com dados históricos, garantindo previsões confiáveis.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">Engenharia de Features</h4>
              <p className="text-gray-300">Processamos um conjunto rico de features (28 entradas) incluindo área, construção, bairro, amenidades e custos — isso fornece ao modelo o contexto necessário para estimativas precisas.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-300 mb-3">Aprendizado Contínuo</h4>
              <p className="text-gray-300">O modelo é atualizado regularmente com novos dados de mercado para manter a acurácia e se adaptar às mudanças do mercado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
