import {ShortenPipe} from './shorten.pipe';

describe('ShortenPipe', () => {
  const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ';

  it('should not shorten short strings', () => {
    let pipe = new ShortenPipe();
    expect(pipe.transform(LOREM_IPSUM, 30)).toEqual(LOREM_IPSUM);
  });

  it('should shorten long strings', () => {
    let pipe = new ShortenPipe();
    expect(pipe.transform(LOREM_IPSUM, 11)).toEqual('Lorem ipsum ...');
  });
});
