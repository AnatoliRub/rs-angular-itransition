import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCount',
})
export class FormatCountPipe implements PipeTransform {
  transform(counts: string): string {
    if (counts.length >= 10)
      return `${counts.slice(0, -9)}.${Math.round(Number(counts.slice(-9)) / 100000000)}B`;
    if (counts.length >= 7)
      return `${counts.slice(0, -6)}.${Math.round(Number(counts.slice(-6)) / 100000)}M`;
    if (counts.length >= 4)
      return `${counts.slice(0, -3)}.${Math.round(Number(counts.slice(-3)) / 100)}K`;
    return counts;
  }
}
