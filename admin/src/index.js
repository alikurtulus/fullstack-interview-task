const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const util = require("util");
const { getAllCompanies } = require("./services/companies");
const { getAllInvestments, postCsv } = require("./services/investments");
const {
  buildEntries,
  buildResponse,
  getFormattedCompanies,
} = require("./utils/utils");

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.get("/investments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `${config.investmentsServiceUrl}/investments/${id}`
    );
    const investments = await response.json();
    res.send(investments);
  } catch (e) {
    console.error(util.inspect(e, false, null, true));
    res.sendStatus(500);
  }
});

app.get("/generate-csv", async (req, res) => {
  try {
    const [companies, investments] = await Promise.all([
      getAllCompanies(),
      getAllInvestments(),
    ]);
    const formattedCompanies = getFormattedCompanies(investments, companies);

    const csvData = buildResponse(formattedCompanies.map(buildEntries).flat());

    await postCsv(csvData);

    res.status(200).type("text/csv").send(csvData);
  } catch (e) {
    console.error(util.inspect(e, false, null, true));
    res.sendStatus(500);
  }
});

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error occurred starting the server", err);
    process.exit(1);
  }
  console.log(`Server running on port ${config.port}`);
});

module.exports = app
