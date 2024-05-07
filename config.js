const BASE_URL = 'https://fakerestapi.azurewebsites.net/api/v1'

const verifyContentLength = (response) => {
    const contentLengthHeader = response.headers['content-length'];
    console.log('Content-Length:', contentLengthHeader);
    expect(contentLengthHeader).toBe('0'); // Expecting an empty response body
};
  
module.exports = {
    BASE_URL,
    verifyContentLength,
};