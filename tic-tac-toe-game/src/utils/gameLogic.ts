import type { Board, Player } from '@/types'

// Game logic functions - to be implemented in task 2
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function makeMove(board: Board, _index: number, _player: Player): Board {
  // Implementation will be added in task 2
  return [...board]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function checkWinner(_board: Board): Player | null {
  // Implementation will be added in task 2
  return null
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function checkDraw(_board: Board): boolean {
  // Implementation will be added in task 2
  return false
}

export function resetGame(): Board {
  // Implementation will be added in task 2
  return Array(9).fill(null)
}