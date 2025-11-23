import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { lat, lon } = req.query

  if (!lat || !lon) {
    return res.status(400).json({ error: 'lat & lon required' })
  }

  try {
    const response = await axios.get(
      'https://meteostat.p.rapidapi.com/stations/nearby',
      {
        params: { lat, lon },
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
          'x-rapidapi-host': 'meteostat.p.rapidapi.com',
        },
      },
    )

    res.status(200).json(response.data)
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}
