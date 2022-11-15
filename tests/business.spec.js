const urlBusiness = require('../src/business/urlBusiness');

describe('Generate a shortUrl from an URL', () => {

    test("URL valid -> get short url", async () => {
        const url = "http://www.lunii.com";
        const result = await urlBusiness.setUrl(url);

        expect(result.originalUrl).toBe("http://www.lunii.com");
        expect(result.shortUrl).toBeTruthy();
    })

    test("URL is invalid -> false", async () => {
        const url = "http://lunii";
        expect(await urlBusiness.setUrl(url)).toBe(false);
    })

});

describe('Retrieve original URL from short URL', () => {

    test("url exists", async () => {
        const shortUrl = 'X5XSGY';

        const result = await urlBusiness.getUrl(shortUrl);

        expect(result.originalUrl).toBe("http://www.lunii.com");
        expect(result.shortUrl).toBe('X5XSGY');
    })

    test("url does NOT exists", async () => {
        const shortUrl = 'XXXXXX';
        const result = await urlBusiness.getUrl(shortUrl);

        expect(result).toBeFalsy();
    })

});