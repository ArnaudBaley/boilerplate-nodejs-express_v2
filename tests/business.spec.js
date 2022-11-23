const urlBusiness = require('../src/business/urlBusiness');

const urlDao = require('../src/dao/urlDao');

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

        const getShortUrlMock = {
            original_url: 'http://myMock.com',
            short_url: 'M0cK',            
        };
        const urlDao = require('../src/dao/urlDao');
        jest.spyOn(urlDao, 'getShortUrl').mockReturnValue(getShortUrlMock);
        jest.spyOn(urlDao, 'addClick').mockReturnValue(true);

        const result = await urlBusiness.getUrl(shortUrl);

        expect(result.originalUrl).toBe("http://myMock.com");
        expect(result.shortUrl).toBe('M0cK');
    })

    test("url does NOT exists", async () => {
        const shortUrl = 'XXXXXX';
        jest.spyOn(urlDao, 'getShortUrl').mockReturnValue(false);
        const result = await urlBusiness.getUrl(shortUrl);
        expect(result).toBeFalsy();
    })

});