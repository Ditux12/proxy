import fetch from 'node-fetch';

const API_BASE = 'https://www.1secmail.com/api/v1/';

export default async function handler(req, res) {
  const { action } = req.query;

  try {
    if (action === 'generate') {
      const response = await fetch(`${API_BASE}?action=genRandomMailbox&count=1`);
      const emails = await response.json();
      res.status(200).json({ email: emails[0] });
    } else if (action === 'inbox') {
      const { login, domain } = req.query;
      if (!login || !domain) {
        res.status(400).json({ error: 'login and domain are required' });
        return;
      }
      const response = await fetch(`${API_BASE}?action=getMessages&login=${login}&domain=${domain}`);
      const messages = await response.json();
      res.status(200).json(messages);
    } else if (action === 'message') {
      const { login, domain, id } = req.query;
      if (!login || !domain || !id) {
        res.status(400).json({ error: 'login, domain and id are required' });
        return;
      }
      const response = await fetch(`${API_BASE}?action=readMessage&login=${login}&domain=${domain}&id=${id}`);
      const message = await response.json();
      res.status(200).json(message);
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}