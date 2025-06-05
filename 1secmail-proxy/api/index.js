export default async function handler(req, res) {
  const { action } = req.query;

  if (action === 'generate') {
    // Resposta simples para testar
    res.status(200).json({ email: 'test@example.com' });
  } else {
    res.status(400).json({ error: 'Ação inválida' });
  }
}
