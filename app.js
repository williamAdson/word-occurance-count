const fs = require('fs');

function countWords(file1, file2) {
  const words1 = fs.readFileSync(file1, 'utf8').split(/\s+/);
  const words2 = fs.readFileSync(file2, 'utf8').split(/\s+/);
  const wordCount = {};

  for (let i = 0; i < words1.length; i++) {
    const word = words1[i];
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  for (let i = 0; i < words2.length; i++) {
    const word = words2[i];
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

console.log(countWords('file1.txt', 'file2.txt'));
module.exports = {
    countWords
}