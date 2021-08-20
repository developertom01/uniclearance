const validator = require("../../utils/validator");

const issuesValidator = (req, res, next) => {
  const rules = {
    detail: "required|string",
  };
  validator(req.body);
};

module.exports = issuesValidator;
