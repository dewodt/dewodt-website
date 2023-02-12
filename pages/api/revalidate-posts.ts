import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if req method is not post
  if (req.method !== "POST") {
    return res
      .status(400)
      .json({ error: "Invalid HTTP Method. Only POST request are allowed."});
  }

  // Check for secret token validation
  if (req.query.secret !== process.env.NEXT_DATOCMS_REVALIDATE_TOKEN) {
    return res
      .status(401)
      .json({ message: "Invalid Token" });
  }

  try {
    // Check body is empty
    const body = req.body;
    if (!body) {
      return res
        .status(400)
        .send("Bad request no body found");
    }

    // Get record id to revalidate
    const idToRevalidate = body.idToRevalidate;
    if (idToRevalidate) {
      await res.revalidate("/posts");
      await res.revalidate(`/posts/${idToRevalidate}`);
      return res
      .status(200)
      .json({ message: "Success revalidating" });
    }
  } catch (err) {
    // Revalidate error
    return res
      .status(500)
      .json({ message: "Error revalidating" });
  }
}