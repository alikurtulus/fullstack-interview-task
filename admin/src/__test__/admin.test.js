const supertest = require("supertest");
const mocks = require('../__mocks__/data');
const app = require('../index');
const companies = require('../services/companies');
const investments = require('../services/investments');

const server = app.listen();
const request = supertest(server);

jest.mock('../services/companies');
jest.mock('../services/investments');

const companiesMock = companies.getAllCompanies;
const investmentsMock = investments.getAllInvestments;

afterAll(() => {
  server.close();
})

describe('GET /', () => {
  it('GET /generate-csv should generate CSV', async () => {
    investmentsMock.mockResolvedValueOnce(mocks.investmentsMock)
    companiesMock.mockResolvedValueOnce(mocks.companiesMock)

    const response = await request.get('/generate-csv')

    expect(response.status).toBe(200)
    expect(response.type).toBe('text/csv')
    expect(response.text).toContain('User,First Name,Last Name,Date,Holding,Value')
  })
})
