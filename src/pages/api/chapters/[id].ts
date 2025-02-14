import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Chapter from '../../../models/Chapter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const chapter = await Chapter.findById(id)
          .populate('novelId', 'title author');
        if (!chapter) {
          return res.status(404).json({ error: 'Chapter not found' });
        }
        res.status(200).json(chapter);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch chapter' });
      }
      break;

    case 'PUT':
      try {
        const chapter = await Chapter.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!chapter) {
          return res.status(404).json({ error: 'Chapter not found' });
        }
        res.status(200).json(chapter);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update chapter' });
      }
      break;

    case 'DELETE':
      try {
        const chapter = await Chapter.findByIdAndDelete(id);
        if (!chapter) {
          return res.status(404).json({ error: 'Chapter not found' });
        }
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete chapter' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
} 