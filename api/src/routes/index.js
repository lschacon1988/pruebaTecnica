const { Router } = require("express");
const getReverceText  = require("./controller/modelRouter/getReverseText.js");


const router = Router();

router.use("/", getReverceText );


module.exports = router;
