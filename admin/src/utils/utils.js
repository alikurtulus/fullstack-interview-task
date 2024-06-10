const buildEntries = (comp) => {
  const { holding, ...rest } = comp;

  return holding.map((h) => ({
    ...rest,
    holding: h.name,
    value: h.value,
  }));
};

const buildResponse = (response) => {
  const headers = "User,First Name,Last Name,Date,Holding,Value\n";

  const rows = response
    .map(
      (r) =>
        `${r.userId},${r.firstName},${r.lastName},${r.date},${r.holding},${r.value}`
    )
    .join("\n");

  return headers + rows;
};

const getFormattedCompanies = (investments, companies) => {
  return investments.map((holding) => ({
    userId: holding.userId,
    firstName: holding.firstName,
    lastName: holding.lastName,
    date: holding.date,
    holding: holding.holdings.map((h) => ({
      name: companies.find((i) => i.id === h.id).name,
      value: holding.investmentTotal * h.investmentPercentage,
    })),
  }));
};

module.exports = { buildEntries, buildResponse, getFormattedCompanies };
