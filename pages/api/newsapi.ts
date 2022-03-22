import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  fetch(process.env.NEWS_API_URL || "", { cache: "force-cache" })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
};
