import 'rxjs/add/operator/map'
import {FrameStream} from './FrameStream'
import {CallNode} from './CallNode'
import {CallEdge} from './CallEdge'

let id = 0

function createNode(node, edge) {
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
    let node: CallNode = this.defaultNode(args.join(', '))
    let edge: CallEdge = this.makeParentEdge(node)

    this.callStack.push(node.id)
    this.frameStream.changes$.next(createNode(node, edge))
    return node
  }

  onEval({node, value}) {

    let old = { ...node }

    node.label += '\n' + value
    node.color = 'green'

    this.frameStream.changes$.next(editNode(old, node))
    this.callStack.pop()
  }

  protected defaultNode(label: string): CallNode {
    return {
      id: ++id,
      color: 'red',
      label: label
    }
  }

  protected makeParentEdge(node: CallNode): CallEdge {
    return {
      from: this.callStack[this.callStack.length - 1].id,
      to: node.id
    }
  }

}
