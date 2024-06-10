const {
  buildEntries,
  buildResponse,
  getFormattedCompanies,
} = require("../utils/utils");
const investmentsData = require("../__mocks__/investments.json");
const companiesData = require("../__mocks__/companies.json");
const formattedCompaniesData = require("../__mocks__/formattedCompanies.json");
const buildEntriesData = require("../__mocks__/buildEntriesData.json");
const buildResponseData =  require("../__mocks__/buildResponseData.json");
const testObj = require("../__mocks__/builResponseDataStr.js");

describe("utils", () => {
  describe("getFormattedCompanies", () => {
    it("should return the correct formatted companies", () => {
      const formattedCompanies = getFormattedCompanies(
        investmentsData,
        companiesData
      );

      expect(formattedCompanies[0]).toEqual(formattedCompaniesData[0]);
    });
    it("should return formatted companies not to equal empty array", () => {
      const formattedCompanies = getFormattedCompanies(
        investmentsData,
        companiesData
      );

      expect(formattedCompanies[0]).not.toEqual([]);
    });
  });
  describe("buildEntries", () => {
    it("should return the correct build entries", () => {
      const expectedBuildData = buildEntries(buildEntriesData[0]);
      expect(expectedBuildData[0]).toEqual({
        userId: "1",
        firstName: "Billy",
        lastName: "Bob",
        date: "2020-01-01",
        holding: "The Small Investment Company",
        value: 1400,
      });
    });
    it("should return build entries not equal chosen data", () => {
      const expectedBuildData = buildEntries(buildEntriesData[0]);
      expect(expectedBuildData[0]).not.toEqual({
        userId: "999",
        firstName: "Test",
        lastName: "Test",
        date: "2020-01-01",
        holding: "Test",
        value: 0,
      });
    });
  });
  describe("buildResponse", () => {
    it("should return the correct build response", () => {
      const expectedBuildResponse = buildResponse(buildResponseData);
      
      expect(expectedBuildResponse).toEqual(testObj['builResponseDataStr']);
    });
    it("should return build response not equal to 'Test' ", () => {
      const expectedBuildResponse = buildResponse(buildResponseData);
      
      expect(expectedBuildResponse).not.toEqual("Test");
    });
  });
});
