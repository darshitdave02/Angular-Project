const db = require("../../database/models");

const getAllCompounds = async () => {
    try {
        const compounds = await db.Compounds.findAll();
        return compounds;
    } catch {
        console.log("failed to get all compounds");
    }
    
};


const editCompound = async (_id, new_description) => {
  try {
    await db.Compounds.update(
      { description: new_description},
      {
        where: {
          id: _id,
        },
      }
    );
  } catch (err) {
    console.log("failed to update compound");
  }
};



module.exports = {
  getAllCompounds,
  editCompound,
 
};
