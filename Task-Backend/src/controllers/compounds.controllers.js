const compoundServices = require("../services/compounds.services");

const getAllCompounds = async (req, res) => {
  try {
    const allCompounds = await compoundServices.getAllCompounds();
    res.status(200).json(allCompounds);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCompound = async (req, res) => {
  try {
    const compoundId = Number(req.params.id);
    await compoundServices.editCompound(compoundId, req.body.description);
    res.status(200).json({ message: "compound updated successfully" });
  } catch (err) {
    res.status(500).json(err);
    res.end();
  }
};

const getOneCompound = async (req, res) => {
  try {
    const compoundId = Number(req.params.id);
    const compound = await compoundServices.getOneCompound(compoundId);
    res.status(200).json(compound);
  } catch (err) {
    res.status(500).json(err);
    res.end();
  }
};

module.exports = {
  getAllCompounds,
  updateCompound,
  getOneCompound,
};
