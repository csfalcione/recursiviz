import 'rxjs/add/operator/map'
import {FrameStream} from './FrameStream'

let id = 0

function createNode(node, edge){
  return {
    type: 'create',
    node,
    edge
  }
}

function editNode(old, node) {
  return {
    type: 'edit',
    old,
    node
  }
}

export class TreeSpy {

  callStack = []

  constructor(public frameStream: FrameStream) {}

  onCall({args}) {
    let node = {
      id: ++id,
      color: {
        background: 'red'
      },
      label: args.join(', ')
    }

    let edge = {
      from: this.callStack[this.callStack.length - 1].id,
      to: node.id
    }

    this.callStack.push(node.id)
    this.frameStream.changes$.next(createNode(node, edge))
    return node
  }

  onEval({node, value}) {

    let old = { ...node }

    node.label = value
    node.color = {
      background: 'green'
    }

    this.frameStream.changes$.next(editNode(old, node))
    this.callStack.pop()
  }

}
