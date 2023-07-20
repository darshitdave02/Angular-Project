const app = require("express");
const {
  getAllCompounds,
  getOneCompound,
  updateCompound,
  
} = require("../controllers/compounds.controllers");
const validateReqest = require("../middlewares/compounds.validateMiddleware");
const Router = app.Router;

const router = Router();

router.get("", getAllCompounds);

router.get("/:id", getOneCompound);


router.patch("/:id", validateReqest, updateCompound);


module.exports = { compoundRouter: router };
