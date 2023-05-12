export const formulaForColumnOfFour = (boardSize: number) =>
  boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;

export const formulaForColumnOfThree = (boardSize: number) =>
  boardSize * boardSize - (boardSize + boardSize) - 1;

export const formulaForMoveBelow = (boardSize: number) =>
  boardSize * boardSize - boardSize - 1;

export const generateInvalidMovies = (
  boardSize: number,
  isFour: boolean = false
) => {
  const invalidMovies: Array<number> = [];
  for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMovies.push(i - 3);
    invalidMovies.push(i - 2);
    invalidMovies.push(i - 1);
  }
  return invalidMovies;
};
