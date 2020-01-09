function gameFactory() {
  const magicNumber = Math.floor((Math.random() * 1000) + 1);
  const getMagicNumber = () => magicNumber;

  const isNumberCorrect = (number) => (number === getMagicNumber());

  return { isNumberCorrect, getMagicNumber };
}

export default gameFactory;
