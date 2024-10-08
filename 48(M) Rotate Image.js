// 48. Rotate Image
// Medium
// Topics
// Companies
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

var rotate = function (matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    console.log(matrix)
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix; // This line is optional since the matrix is modified in-place
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))