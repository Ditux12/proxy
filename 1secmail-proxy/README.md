# 1secmail Proxy for Vercel

## Como usar

- Deploy na Vercel colocando a pasta `api` no root.
- Endpoints:

  - `GET /api?action=generate` - Gera email aleatório
  - `GET /api?action=inbox&login=xxx&domain=yyy` - Obter mensagens
  - `GET /api?action=message&login=xxx&domain=yyy&id=zzz` - Ler mensagem específica

## Instalar dependências localmente para testes

```bash
npm install
npm run start
```