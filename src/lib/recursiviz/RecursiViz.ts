export class RecursiViz {

  constructor(public treeSpy) { }

  func

  visualize(myRecursiveFunction, args) {
    const recur = this.recur.bind(this)
    this.func = myRecursiveFunction(recur)
    recur(...args)
  }

  recur(...args) {
    let node = this.treeSpy.onCall({args})
    let result = this.func(...args)
    this.treeSpy.onEval({node, value: result})
    return result
  }

}
