import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Novel from '../../../models/Novel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const novels = await Novel.find({})
          .sort({ createdAt: -1 })
          .limit(10);
        res.status(200).json(novels);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch novels' });
      }
      break;

    case 'POST':
      try {
        const novel = await Novel.create(req.body);
        res.status(201).json(novel);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create novel' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
} 