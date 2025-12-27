// Game types for tic-tac-toe
export type Player = 'X' | 'O'
export type Cell = Player | null
export type Board = Cell[]
export type GameStatus = 'playing' | 'won' | 'draw'

export interface GameState {
  board: Board
  currentPlayer: Player
  gameStatus: GameStatus
  winner: Player | null
}