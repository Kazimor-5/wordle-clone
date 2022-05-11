export const handlePressLetter = (
  prevWord: string,
  key: string,
  compareWordLength: number
) => {
  const newWord = `${prevWord}${key}`;
  const isWordLengthOK = newWord.length < compareWordLength;

  if (isWordLengthOK) {
    return newWord;
  }
  return prevWord;
};
