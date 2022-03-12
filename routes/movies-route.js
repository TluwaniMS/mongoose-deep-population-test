const express = require("express");
const router = express.Router();

router.get("/get-deeply-populated-movies", async (req, res) => {
  res.status(200).send({ data: "success" });
});

module.exports = router;
