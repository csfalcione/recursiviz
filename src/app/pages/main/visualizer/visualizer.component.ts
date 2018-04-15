import {Component, OnInit, ViewChild} from '@angular/core'
import {AppGraph} from '../../../../lib/app-graph/AppGraph'
import {VideoPlayer} from '../../../../lib/video-player/VideoPlayer'
import {FrameStream} from '../../../../lib/recursiviz/FrameStream'
import {TreeSpy} from '../../../../lib/recursiviz/TreeSpy'
import {RecursiViz} from '../../../../lib/recursiviz/RecursiViz'

import 'rxjs/add/operator/do'
import {CODE_STUB} from './default-text'

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  @ViewChild('editor') editor;

  player: VideoPlayer
  text: string = CODE_STUB

  ngOnInit() {
    const graph = new AppGraph('graph-canvas')
    this.player = new VideoPlayer(graph)
    this.mockData()
  }

  submitCode(argString, codeString) {
    console.log(argString, codeString)
  }

  mockData() {
    let myFunc = (recurse, n) => {
      if(n <= 2) return 1
      return recurse(n - 1) + recurse(n - 2)
    }

    let fs = new FrameStream()
    let ts = new TreeSpy(fs)
    let rv = new RecursiViz(ts)

    fs.frames$.do( _ => console.log(_)).subscribe( frame => this.player.addFrame(frame) )
    rv.visualize(myFunc, [10])
  }

}
