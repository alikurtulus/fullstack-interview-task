const config = require("../../config/default.json");

const getAllCompanies = async () => {
  const response = await fetch(`${config.financialCompaniesServiceUrl}/companies`);

  return response.json();
};

module.exports = { getAllCompanies };
