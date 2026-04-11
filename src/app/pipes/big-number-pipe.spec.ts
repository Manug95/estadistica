import { BigNumberPipe } from './big-number-pipe';

describe('FormatPuntosPipePipe', () => {
  it('create an instance', () => {
    const pipe = new BigNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
