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
    this.player = new VideoPlayer(new AppGraph('graph-canvas'))
  }

  submitCode(argString, codeString) {
    this.player = new VideoPlayer(new AppGraph('graph-canvas'))

    let fs = new FrameStream()
    let ts = new TreeSpy(fs)
    let rv = new RecursiViz(ts)

    fs.frames$/*.do( _ => console.log(_))*/.subscribe( frame => this.player.addFrame(frame) )
    rv.visualizeText(codeString, 'fibonacci', argString)
    this.player.play()
  }


}
