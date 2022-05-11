export const handlePressEnter = (word: string, compareWord: string) => {
  if (word.length < compareWord.length) {
    console.log('mot trop court');
    return word;
  }
  if (word !== compareWord) {
    console.log('nope');
    return word;
  }
  console.log('gg', word);
  return word;
};
