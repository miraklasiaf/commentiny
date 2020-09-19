import { getAllComment } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const [siteId, route] = req.query.site;
    const { comment } = await getAllComment(siteId, route);

    res.status(200).json({ comment });
  } catch (error) {
    res.status(500).json({ error });
  }