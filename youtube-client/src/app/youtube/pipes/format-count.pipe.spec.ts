import { FormatCountPipe } from './format-count.pipe';

describe('FormatCountPipe', () => {
  let pipe: FormatCountPipe;

  beforeEach(() => {
    pipe = new FormatCountPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return Billion', () => {
    expect(pipe.transform('1000000000')).toBe('1.0B');
  });

  it('should return Million', () => {
    expect(pipe.transform('1000000')).toBe('1.0M');
  });

  it('should return one thousand', () => {
    expect(pipe.transform('1000')).toBe('1.0K');
  });

  it('should return ten', () => {
    expect(pipe.transform('10')).toBe('10');
  });
});
