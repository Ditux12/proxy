export default async function handler(req, res) {
  // Habilitar CORS para qualquer origem
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responder a requisições OPTIONS para CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { action } = req.query;

  if (action === 'generate') {
    // Resposta simples para testar
    res.status(200).json({ email: 'test@example.com' });
  } else {
    res.status(400).json({ error: 'Ação inválida' });
  }
}
