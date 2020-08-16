import { CentsToEurPipe } from 'src/app/shared/pipes/cents-to-eur.pipe';

describe('CentsToEurPipe', () => {
  it('create an instance', () => {
    const pipe = new CentsToEurPipe();
    expect(pipe).toBeTruthy();
  });
});
