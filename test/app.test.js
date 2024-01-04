import {describe, expect, test} from '@jest/globals';
import {countWords} from '../app';

describe('counting module', () => {
  test('searching files for similar words', () => {
    expect(countWords('file1', 'file2')).toBe('string of new words');
  });
});