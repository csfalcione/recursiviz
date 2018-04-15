import { Component, OnInit } from '@angular/core';
import {AppGraph} from '../../../../lib/app-graph/AppGraph'
import {VideoPlayer} from '../../../../lib/video-player/VideoPlayer'
import {FrameStream} from '../../../../lib/recursiviz/FrameStream'
import {TreeSpy} from '../../../../lib/recursiviz/TreeSpy'
import {RecursiViz} from '../../../../lib/recursiviz/RecursiViz'

import 'rxjs/add/operator/do'

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  player: VideoPlayer

  ngOnInit() {
    const graph = new AppGraph('visualizer-container')
    this.player = new VideoPlayer(graph)
    this.mockData()
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
    rv.visualize(myFunc, [4])
  }

}
