import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect;

  if (method === "GET") {
    // req.body;
    const product = await Product.create(req.body);
    res.status(201).json(product);
  }

  if (method === "POST") {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
