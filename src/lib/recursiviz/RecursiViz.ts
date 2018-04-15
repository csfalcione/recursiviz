export class RecursiViz {

    constructor(public treeSpy) {}

    func

    visualizeText(userInput: string, funcName: string, userArgs: string) {
      const args = this.parseArgs(userArgs)
      console.log(args)

      userInput = this.rewriteUserInput(userInput, funcName, 'recurse')
      console.log(userInput)
      let recurse = this.recurse.bind(this)
      let userFunc
      eval(userInput)
      this.visualize(userFunc, ...args)
    }

    public parseArgs(userArgs: string): any[] {
      return eval(userArgs)
    }

    public rewriteUserInput(input: string, funcName: string, newName): string {
      return input + '\nuserFunc = ' + funcName
    }

    visualize(myRecursiveFunction, ...args) {
        this.func = myRecursiveFunction
        this.recurse(...args)
    }

    recurse(...args) {
        let node = this.treeSpy.onCall({ args })
        let result = this.func(this.recurse.bind(this), ...args)
        this.treeSpy.onEval({ node, value: result })
        return result
    }

}
