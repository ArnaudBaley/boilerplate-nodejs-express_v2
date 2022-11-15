const { isUrlValid } = require('../src/util/urlUtil')

const urlsValid = [
    'http://lunii.com',
    'https://lunii.com',
];

const urlsInvalid = [
    'http//lunii',
    'https://lunii',
];

describe('URL validation', () => {

    test("urlsValid URLs", () => {
        urlsValid.forEach(url => {
            expect(isUrlValid(url)).toBe(true);
        });
    })

    test("Invalid URLs", () => {
        urlsInvalid.forEach(url => {
            expect(isUrlValid(url)).toBe(false);
        });
    })

});