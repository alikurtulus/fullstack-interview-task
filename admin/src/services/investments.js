const config = require("../../config/default.json");

const getAllInvestments = async () => {
  const response = await fetch(`${config.investmentsServiceUrl}/investments`);
  
  return response.json();
};

const postCsv = async (data) => {
  const response = await fetch(
    `${config.investmentsServiceUrl}/investments/export`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  return await response.text();
};

module.exports = { getAllInvestments, postCsv };
