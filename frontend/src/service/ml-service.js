import axios from 'axios';

const URL = "http://localhost:8000/prever"


export default async function prevision(data = {}){
  // required numeric fields (cannot be null according to the comment)
  const requiredNumbers = [
    'area_m2',
    'quartos',
    'suites',
    'banheiros',
    'vagas_garagem',
    'condominio_valor',
    'iptu_mensal',
    'ano_construcao',
    'area_privativa_m2'
  ];

  // Simple validation: ensure required numeric fields are present (or set defaults)
  requiredNumbers.forEach((field) => {
    if (data[field] == null) {
      // If missing, default to 0 so backend receives a numeric value (adjust if you prefer throwing)
      data[field] = 0;
    }
  });

  // Build the request object using all commented variables
  const request = {
    tipo_imovel: data.tipo_imovel,
    area_m2: data.area_m2,
    quartos: data.quartos,
    suites: data.suites,
    banheiros: data.banheiros,
    vagas_garagem: data.vagas_garagem,
    bairro: data.bairro,
    pet_friendly: data.pet_friendly,
    ano_construcao: data.ano_construcao,
    mobiliado: data.mobiliado,
    condominio_valor: data.condominio_valor,
    iptu_mensal: data.iptu_mensal,
    proximidade_centro: data.proximidade_centro,
    andar: data.andar,
    elevador: data.elevador,
    area_privativa_m2: data.area_privativa_m2,
    churrasqueira: data.churrasqueira,
    piscina: data.piscina,
    area_servico: data.area_servico,
    armarios_embutidos: data.armarios_embutidos,
    seguranca_24h: data.seguranca_24h,
    playground: data.playground,
    academia: data.academia,
    salao_festas: data.salao_festas,
    sacada_varanda: data.sacada_varanda,
    quintal: data.quintal,
    estado_conservacao: data.estado_conservacao,
    orientacao_solar: data.orientacao_solar,
  };

  try {
    const response = await axios.post(URL, request);
    // return the API response body so callers get the prediction directly
    return response.data;
  } catch (error) {
    console.error('Error at ml service:', error);
    throw error;
  }
}