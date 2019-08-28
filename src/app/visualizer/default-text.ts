export const CODE_STUB = `
function fibonacci(recur, n) {
    if(n <= 2) return 1
    // make recursive calls with recur(...args)
    return recur(n - 1) + recur(n - 2)
}

// export your function
entrypoint = fibonacci
`
