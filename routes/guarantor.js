///////////
//routes => Guarantor.js

const express = require("express");
const router = express.Router();
const { create,getAllGuarantors } = require("../controllers/guarantor")


//CREATE
router.post("/", create)

//GET ALL BLOG
router.get("/", getAllGuarantors);

module.exports = router;