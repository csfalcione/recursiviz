export class RecursiViz {

    constructor(public treeSpy) {}

    func

    visualizeText(userInput: string, funcName: string, userArgs: string[]) {
      const args = this.parseArgs(userArgs)

      userInput = this.rewriteUserInput(userInput, funcName, 'recurse')
      eval(userInput)
      const userFunc = eval(funcName)
      this.visualize(userFunc, ...args)
    }

    public parseArgs(userArgs: string[]): any[] {
      return userArgs.map(eval);
    }

    public rewriteUserInput(input: string, funcName: string, newName): string {
      const findExp = new RegExp('.*?' + funcName)
      const replaceExp = new RegExp(funcName, 'g')

      const firstUsage = input.match(findExp)[0]
      let remainder = input.slice(firstUsage.length)

      remainder = remainder.replace(replaceExp, newName)

      return firstUsage + remainder
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
