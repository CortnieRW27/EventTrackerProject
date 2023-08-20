import { BeerNamePipe } from './beer-name.pipe';

describe('BeerNamePipe', () => {
  it('create an instance', () => {
    const pipe = new BeerNamePipe();
    expect(pipe).toBeTruthy();
  });
});
