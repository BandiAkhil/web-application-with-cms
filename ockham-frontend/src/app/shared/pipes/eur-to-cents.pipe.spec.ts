import { EurToCentsPipe } from 'src/app/shared/pipes/eur-to-cents.pipe';

describe('EurToCentsPipe', () => {
  it('create an instance', () => {
    const pipe = new EurToCentsPipe();
    expect(pipe).toBeTruthy();
  });
});
