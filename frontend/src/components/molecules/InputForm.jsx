import React, { useState } from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";
import prevision from "../../service/ml-service";

export default function InputForm() {
    const [form, setForm] = useState({
        tipo_imovel: "casa",
        area_m2: "",
        quartos: "",
        suites: "",
        banheiros: "",
        vagas_garagem: "",
        bairro: "",
        pet_friendly: "nao",
        ano_construcao: "",
        mobiliado: "nao",
        condominio_valor: "",
        iptu_mensal: "",
        proximidade_centro: "",
        andar: "",
        elevador: "",
        area_privativa_m2: "",
        churrasqueira: "",
        piscina: "",
        area_servico: "",
        armarios_embutidos: "",
        seguranca_24h: "",
        playground: "",
        academia: "",
        salao_festas: "",
        sacada_varanda: "",
        quintal: "",
        estado_conservacao: "",
        orientacao_solar: "",
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    function handleInputChange(key, value) {
        setForm((s) => ({ ...s, [key]: value }));
    }

    function handleSelectChange(key, checked) {
        setForm((s) => ({ ...s, [key]: checked ? "sim" : "nao" }));
    }

    const handlePrevision = async () => {
        setLoading(true);
        setError(null);
        setResult(null);

        const payload = {
            tipo_imovel: form.tipo_imovel,
            area_m2: Number(form.area_m2) || 0,
            quartos: Number(form.quartos) || 0,
            suites: Number(form.suites) || 0,
            banheiros: Number(form.banheiros) || 0,
            vagas_garagem: Number(form.vagas_garagem) || 0,
            bairro: form.bairro || "",
            pet_friendly: form.pet_friendly,
            ano_construcao: Number(form.ano_construcao) || 0,
            mobiliado: form.mobiliado,
            condominio_valor: Number(form.condominio_valor) || 0,
            iptu_mensal: Number(form.iptu_mensal) || 0,
            proximidade_centro: form.proximidade_centro || "",
            andar: form.andar || "",
            elevador: form.elevador || "",
            area_privativa_m2: Number(form.area_privativa_m2) || 0,
            churrasqueira: form.churrasqueira || "",
            piscina: form.piscina || "",
            area_servico: form.area_servico || "",
            armarios_embutidos: form.armarios_embutidos || "",
            seguranca_24h: form.seguranca_24h || "",
            playground: form.playground || "",
            academia: form.academia || "",
            salao_festas: form.salao_festas || "",
            sacada_varanda: form.sacada_varanda || "",
            quintal: form.quintal || "",
            estado_conservacao: form.estado_conservacao || "",
            orientacao_solar: form.orientacao_solar || "",
        };

        try {
            const response = await prevision(payload);
            setResult(response);
        } catch (err) {
            setError(err?.message || String(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-20 px-6 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-white mb-4">Avaliação de Imóvel</h2>
                    <p className="text-xl text-gray-400">Preencha os dados do imóvel para receber uma estimativa de valor</p>
                </div>

                {/* Input Form Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-10 border border-slate-700 shadow-2xl">
                    
                    {/* Tipo de Imóvel */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-300 mb-3">Tipo de Imóvel</label>
                        <select 
                            value={form.tipo_imovel}
                            onChange={(e) => handleInputChange('tipo_imovel', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white focus:border-purple-500 focus:outline-none transition"
                        >
                            <option value="casa">Casa</option>
                            <option value="apartamento">Apartamento</option>
                            <option value="cobertura">Cobertura</option>
                            <option value="kitnet">Kitnet</option>
                        </select>
                    </div>

                    {/* Campos Principais */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Área Total (m²) *</label>
                            <Input
                                placeholder="Ex: 120"
                                value={form.area_m2}
                                onChange={(e) => handleInputChange('area_m2', e.target.value)}
                                type="number"
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Área Privativa (m²)</label>
                            <Input
                                placeholder="Ex: 100"
                                type="number"
                                value={form.area_privativa_m2}
                                onChange={(e) => handleInputChange('area_privativa_m2', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Quartos *</label>
                            <Input
                                placeholder="Ex: 3"
                                type="number"
                                value={form.quartos}
                                onChange={(e) => handleInputChange('quartos', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Suítes</label>
                            <Input
                                placeholder="Ex: 1"
                                type="number"
                                value={form.suites}
                                onChange={(e) => handleInputChange('suites', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Banheiros *</label>
                            <Input
                                placeholder="Ex: 2"
                                type="number"
                                value={form.banheiros}
                                onChange={(e) => handleInputChange('banheiros', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Vagas Garagem</label>
                            <Input
                                placeholder="Ex: 1"
                                type="number"
                                value={form.vagas_garagem}
                                onChange={(e) => handleInputChange('vagas_garagem', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Ano de Construção</label>
                            <Input
                                placeholder="Ex: 2010"
                                type="number"
                                value={form.ano_construcao}
                                onChange={(e) => handleInputChange('ano_construcao', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Andar</label>
                            <Input
                                placeholder="Ex: 5"
                                value={form.andar}
                                onChange={(e) => handleInputChange('andar', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Bairro *</label>
                            <select
                                value={form.bairro}
                                onChange={(e) => handleInputChange('bairro', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            >
                                <option value="">Selecione o bairro</option>
                                <option>Jardim Europa</option>
                                <option>Higienópolis</option>
                                <option>Classe Média-Alta Centro</option>
                                <option>Santo Inácio</option>
                                <option>Goiás</option>
                                <option>Universitário</option>
                                <option>Arroio Grande</option>
                                <option>Linha Santa Cruz</option>
                                <option>João Alves</option>
                                <option>Bonfim</option>
                                <option>Schulz</option>
                                <option>Renascença</option>
                                <option>Ana Nery</option>
                                <option>Belvedere</option>
                                <option>Esmeralda</option>
                                <option>Aliança</option>
                                <option>Bom Jesus</option>
                                <option>Senai</option>
                                <option>Santa Vitória</option>
                                <option>Dona Carlota</option>
                                <option>Pedreira</option>
                                <option>São João</option>
                            </select>
                        </div>
                    </div>

                    {/* Campos de Localização e Custos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Proximidade Centro</label>
                            <Input
                                placeholder="Ex: 2 km"
                                value={form.proximidade_centro}
                                onChange={(e) => handleInputChange('proximidade_centro', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Condomínio (R$/mês)</label>
                            <Input
                                placeholder="Ex: 500"
                                type="number"
                                value={form.condominio_valor}
                                onChange={(e) => handleInputChange('condominio_valor', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">IPTU (R$/mês)</label>
                            <Input
                                placeholder="Ex: 150"
                                type="number"
                                value={form.iptu_mensal}
                                onChange={(e) => handleInputChange('iptu_mensal', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Estado de Conservação</label>
                            <Input
                                placeholder="Ex: bom, regular, novo"
                                value={form.estado_conservacao}
                                onChange={(e) => handleInputChange('estado_conservacao', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Orientação Solar</label>
                            <Input
                                placeholder="Ex: norte, sul, leste"
                                value={form.orientacao_solar}
                                onChange={(e) => handleInputChange('orientacao_solar', e.target.value)}
                                style="w-full px-4 py-3 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Características - Checkboxes como sim/não */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4">Características do Imóvel</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="pet" 
                                    type="checkbox" 
                                    checked={form.pet_friendly === "sim"} 
                                    onChange={(e) => handleSelectChange('pet_friendly', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="pet" className="cursor-pointer">Pet Friendly</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="mobiliado" 
                                    type="checkbox" 
                                    checked={form.mobiliado === "sim"} 
                                    onChange={(e) => handleSelectChange('mobiliado', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="mobiliado" className="cursor-pointer">Mobiliado</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="elevador" 
                                    type="checkbox" 
                                    checked={form.elevador === "sim"} 
                                    onChange={(e) => handleSelectChange('elevador', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="elevador" className="cursor-pointer">Elevador</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="churrasqueira" 
                                    type="checkbox" 
                                    checked={form.churrasqueira === "sim"} 
                                    onChange={(e) => handleSelectChange('churrasqueira', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="churrasqueira" className="cursor-pointer">Churrasqueira</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="piscina" 
                                    type="checkbox" 
                                    checked={form.piscina === "sim"} 
                                    onChange={(e) => handleSelectChange('piscina', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="piscina" className="cursor-pointer">Piscina</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="area_servico" 
                                    type="checkbox" 
                                    checked={form.area_servico === "sim"} 
                                    onChange={(e) => handleSelectChange('area_servico', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="area_servico" className="cursor-pointer">Área de Serviço</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="armarios" 
                                    type="checkbox" 
                                    checked={form.armarios_embutidos === "sim"} 
                                    onChange={(e) => handleSelectChange('armarios_embutidos', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="armarios" className="cursor-pointer">Armários Embutidos</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="seguranca" 
                                    type="checkbox" 
                                    checked={form.seguranca_24h === "sim"} 
                                    onChange={(e) => handleSelectChange('seguranca_24h', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="seguranca" className="cursor-pointer">Segurança 24h</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="playground" 
                                    type="checkbox" 
                                    checked={form.playground === "sim"} 
                                    onChange={(e) => handleSelectChange('playground', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="playground" className="cursor-pointer">Playground</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="academia" 
                                    type="checkbox" 
                                    checked={form.academia === "sim"} 
                                    onChange={(e) => handleSelectChange('academia', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="academia" className="cursor-pointer">Academia</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="salao" 
                                    type="checkbox" 
                                    checked={form.salao_festas === "sim"} 
                                    onChange={(e) => handleSelectChange('salao_festas', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="salao" className="cursor-pointer">Salão de Festas</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="sacada" 
                                    type="checkbox" 
                                    checked={form.sacada_varanda === "sim"} 
                                    onChange={(e) => handleSelectChange('sacada_varanda', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="sacada" className="cursor-pointer">Sacada/Varanda</label>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 bg-slate-700 px-4 py-3 rounded-lg">
                                <input 
                                    id="quintal" 
                                    type="checkbox" 
                                    checked={form.quintal === "sim"} 
                                    onChange={(e) => handleSelectChange('quintal', e.target.checked)}
                                    className="w-4 h-4 accent-purple-500"
                                />
                                <label htmlFor="quintal" className="cursor-pointer">Quintal</label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <Button
                            style="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handlePrevision}
                            placeHolder={loading ? 'Processando...' : 'Obter Avaliação'}
                            disabled={loading}
                        />
                    </div>

                    {/* Info Text */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Nosso modelo de IA analisará seu imóvel e fornecerá uma estimativa de valor de mercado instantaneamente.
                    </p>

                    {/* Result */}
                    {result && (
                        <div className="mt-8 text-center">
                            {/* Prefer displaying only the predicted price, styled */}
                            {result.preco_previsto != null ? (
                                <div className="inline-block bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 p-6 rounded-3xl shadow-2xl text-white">
                                    <div className="text-xs text-white/90 uppercase tracking-wider">Preço Estimado</div>
                                    <div className="text-4xl md:text-5xl font-extrabold mt-2">
                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.preco_previsto)}
                                    </div>
                                    <div className="text-sm text-white/80 mt-1">Valor aproximado — use como referência</div>
                                </div>
                            ) : (
                                <div className="mt-8 bg-gradient-to-r from-green-900 to-green-800 border border-green-700 p-6 rounded-lg">
                                    <div className="text-center">
                                        <div className="text-sm text-green-300 mb-2">Resultado da Avaliação</div>
                                        <pre className="text-white text-lg font-semibold whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="mt-8 bg-red-900/50 border border-red-700 text-white p-4 rounded-lg">
                            <strong>Erro:</strong> {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}