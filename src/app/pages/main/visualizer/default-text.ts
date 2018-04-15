export const CODE_STUB = `
function fibonacci(fibonacci, n) {
    if(n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

recursiviz.entrypoint = fibonacci
`
