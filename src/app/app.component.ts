import {Component, OnInit} from '@angular/core';
import {FrameStream} from '../lib/recursiviz/FrameStream';
import {RecursiViz} from '../lib/recursiviz/RecursiViz';
import {TreeSpy} from '../lib/recursiviz/TreeSpy';

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/delay'
import { interval } from 'rxjs/observable/interval';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/takeWhile'

declare let vis;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  treeOptions = {
    edges: {
      smooth: {
        type: 'cubicBezier',
        forceDirection: 'vertical',
        roundness: 0.4
      }
    },
    layout: {
      hierarchical: {
        direction: 'UD'
      }
    },
    physics: false
  }

  networkGraph;
  data;

  playing = false
  currentFrame = -1
  frames = []

  ngOnInit() {
    this.data = {
      nodes: new vis.DataSet(),
      edges: new vis.DataSet()
    };

    this.networkGraph = new vis.Network(
      document.getElementById('mynetwork'),
      this.data,
      this.treeOptions
    );

    this.compute()
  }

  stepForward() {
    if(this.currentFrame === this.frames.length - 1) return
    let frame = this.frames[++this.currentFrame]
    switch (frame.type) {
      case 'create':
        console.log(frame)
        this.data.nodes.add(frame.node)
        if(frame.edge)
          this.data.edges.add(frame.edge)
        break
      case 'edit':
        this.data.nodes.update(frame.node)
        break
    }
  }

  stepBack() {
    if(this.currentFrame <= 0) return
    let frame = this.frames[this.currentFrame--]
    switch (frame.type) {
      case 'create':
        this.data.nodes.remove(frame.node.id)
        this.data.edges.remove(frame.edge.id)
        break
      case 'edit':
        this.data.nodes.update(frame.old)
        break
    }
  }

  play() {
    this.playing = true
    interval(100)
      .takeWhile(() => this.playing)
      .subscribe( _ => this.stepForward())
  }

  rewind() {
    this.playing = true
    interval(100)
      .takeWhile(() => this.playing)
      .subscribe( _ => this.stepBack())
  }

  stop() {
    this.playing = false
  }

  compute() {
    let fs = new FrameStream()
    let rs = new RecursiViz(new TreeSpy(fs))

    fs.frames$
      .map( event => event )
      .subscribe( event => {
        console.log(event)
        this.frames.push(event)
      })

    let memo = [];
    rs.visualize(
      (recurse, n) => {
        if (n <= 2) return 1
        // if(memo[n]) return memo[n]
        memo[n] = recurse(n - 1) + recurse(n - 2)
        return memo[n]
      },
      [7]
    )
  }
}
