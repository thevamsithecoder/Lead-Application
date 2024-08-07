const express = require("express");
const router = express.Router();
const {
  createLeadController,
  getLeadController,
  getSingleLeadController,
  updateSingleLeadController,
  deleteSingleLeadController,
} = require("../controllers/leadController");

//create route
router.post("/register", createLeadController);
router.get("/getdata", getLeadController);
router.get("/getuser/:id", getSingleLeadController);
router.patch("/updateuser/:id", updateSingleLeadController);
router.delete("/deleteuser/:id", deleteSingleLeadController);

module.exports = router;
