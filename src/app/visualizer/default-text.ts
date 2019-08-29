export const CODE_STUB = `
/*
* entrypoint should be set to a function with one
* argument. It should return your recursive
* function, which can accept any number of args.
* Make recursive calls with the outer function's
* argument.
*/
entrypoint = (fibonacci) => (n) => {
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
`
