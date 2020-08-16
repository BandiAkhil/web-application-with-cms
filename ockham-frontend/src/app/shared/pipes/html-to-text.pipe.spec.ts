import { HtmlToTextPipe } from 'src/app/shared/pipes/html-to-text.pipe';

describe('HtmlToTextPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlToTextPipe();
    expect(pipe).toBeTruthy();
  });
});
