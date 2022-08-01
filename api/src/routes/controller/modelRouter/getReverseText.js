const { Router } = require("express");
const { getReverce } = require("../controller");

const router = Router();

router.get("/reverce", (req, res) => {
  const { text } = req.query;
  if (!text || Number.isInteger(parseInt(text))) {    
    res.status(400).json({ error: "No text" });
  } else {
    const textRequire = getReverce(text);
    res.status(200).json( {text:textRequire});
  }
});

module.exports = router;
