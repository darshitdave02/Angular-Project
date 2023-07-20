const Joi = require("joi");

const schema = Joi.object({
  description: Joi.string().required(),
}).options({ abortEarly: false });
const validateRequest = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return res.status(400).json({ error: errorMessage });
  }

  next();
};

module.exports = validateRequest;
