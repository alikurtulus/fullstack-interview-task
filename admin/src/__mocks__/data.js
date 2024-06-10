module.exports = {
  investmentsMock: [
    {
      id: "1",
      userId: "1",
      firstName: "Billy",
      lastName: "Bob",
      investmentTotal: 1400,
      date: "2020-01-01",
      holdings: [{id: "2", investmentPercentage: 1}],
    },
    {
      id: "2",
      userId: "2",
      firstName: "Sheila",
      lastName: "Aussie",
      investmentTotal: 20000,
      date: "2020-01-01",
      holdings: [
        {id: "1", investmentPercentage: 0.5},
        {id: "2", investmentPercentage: 0.5},
      ],
    },
  ],
  companiesMock: [
    {
      id: "1",
      name: "The Big Investment Company",
      address: "14 Square Place",
      postcode: "SW18UU",
      frn: "234165",
    },
    {
      id: "2",
      name: "The Small Investment Company",
      address: "12 Circle Square",
      postcode: "SW18UD",
      frn: "773388",
    },
  ],
}
