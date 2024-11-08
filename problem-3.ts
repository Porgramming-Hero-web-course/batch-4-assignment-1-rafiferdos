{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceArray = sentence.toLowerCase().split(" ");
    const count = sentenceArray.filter(
      (item) => item === word.toLowerCase()
    ).length;
    console.log(count);
    return count;
  };

  countWordOccurrences("I love typescript", "typescript");
}
