import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Novel from '../../../models/Novel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const novel = await Novel.findById(id);
        if (!novel) {
          return res.status(404).json({ error: 'Novel not found' });
        }
        res.status(200).json(novel);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch novel' });
      }
      break;

    case 'PUT':
      try {
        const novel = await Novel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!novel) {
          return res.status(404).json({ error: 'Novel not found' });
        }
        res.status(200).json(novel);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update novel' });
      }
      break;

    case 'DELETE':
      try {
        const novel = await Novel.findByIdAndDelete(id);
        if (!novel) {
          return res.status(404).json({ error: 'Novel not found' });
        }
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete novel' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
} 