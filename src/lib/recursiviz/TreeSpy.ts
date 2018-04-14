import "rxjs/add/operator/map"
import {FrameStream} from "./FrameStream"

export class TreeSpy {

    root = { children: [] }
    callStack = [this.root]

    constructor(public frameStream: FrameStream) {}

    onCall({ args }) {
        let node = {
            color: 'red',
            args: args.join(', '),
            value: '',
            children: []
        }

        this.callStack[this.callStack.length - 1].children.push(node)
        this.callStack.push(node)

        this.frameStream.changes$.next(this.root)
        return node
    }

    onEval({ node, value }) {
        node.value = value
        node.color = 'green'
        this.frameStream.changes$.next(this.root)
        this.callStack.pop()
    }

}
