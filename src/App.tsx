import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import {
  checkForRowOfFour,
  checkForRowOfThree,
  isColumnOfFour,
  isColumnOfThree,
} from "./utils/moveCheckLogic";
import {
  formulaForColumnOfFour,
  formulaForColumnOfThree,
  generateInvalidMovies,
} from "./utils/formulas";

function App() {
  const dispatch = useAppDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(
        newBoard,
        boardSize,
        generateInvalidMovies(boardSize, true)
      );
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMovies(boardSize));
      dispatch(updateBoard(newBoard));
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
