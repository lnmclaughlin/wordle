import express from "express";
import Word from "../db/Word";

const routes = express.Router();

export const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

routes.get("/", async (req, res) => {
  try {
    const results = typeof Word;
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default routes;
