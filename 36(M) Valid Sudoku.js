var isValidSudoku = function(board) {
    // Initialize empty sets to keep track of seen numbers in rows, columns, and sub-boxes
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    // Loop through each cell in the 9x9 board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];

            // Skip if the cell is empty
            if (num === '.') continue;

            // Calculate the index of the 3x3 sub-box
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check if the number is already seen in the row, column, or sub-box
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            // Add the number to the corresponding row, column, and sub-box sets
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    // If no conflicts are found, the board is valid
    return true;
};
