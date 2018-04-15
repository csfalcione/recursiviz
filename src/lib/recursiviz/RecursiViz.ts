export class RecursiViz {

  constructor(public treeSpy) {
  }

  func

  visualizeText(userInput: string, funcName: string, userArgs: string) {
    if (userArgs.trim() === '') userArgs = '[]'

    let recurse = this.recurse.bind(this)
    let entrypoint
    eval(userInput)
    let args = eval(userArgs)
    if (!entrypoint) return alert('No function exported!')
    if (!Array.isArray(args)) return alert('Invalid args!')

    this.visualize(entrypoint, ...args)
  }

  visualize(myRecursiveFunction, ...args) {
    this.func = myRecursiveFunction
    this.recurse(...args)
  }

  recurse(...args) {
    let node = this.treeSpy.onCall({args})
    let result = this.func(this.recurse.bind(this), ...args)
    this.treeSpy.onEval({node, value: result})
    return result
  }

}
