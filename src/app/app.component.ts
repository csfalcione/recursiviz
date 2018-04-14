import {Component, OnInit} from '@angular/core';
import {FrameStream} from '../lib/recursiviz/FrameStream';
import {RecursiViz} from '../lib/recursiviz/RecursiViz';
import {TreeSpy} from '../lib/recursiviz/TreeSpy';

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/delay'

declare let vis;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    let nodes = [];
    let edges = [];
    var connectionCount = [];

    // randomly create some nodes and edges
    for (var i = 0; i < 15; i++) {
      nodes.push({id: i, label: String(i)});
    }
    edges.push({from: 0, to: 1});
    edges.push({from: 0, to: 6});
    edges.push({from: 0, to: 13});
    edges.push({from: 0, to: 11});
    edges.push({from: 1, to: 2});
    edges.push({from: 2, to: 3});
    edges.push({from: 2, to: 4});
    edges.push({from: 3, to: 5});
    edges.push({from: 1, to: 10});
    edges.push({from: 1, to: 7});
    edges.push({from: 2, to: 8});
    edges.push({from: 2, to: 9});
    edges.push({from: 3, to: 14});
    edges.push({from: 1, to: 12});


    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };

    var options = {
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
      physics:false
    };
    let network = new vis.Network(container, data, options);
  }

  compute() {
    let fib = (recurse, n) => {
      if(n <= 2) return 1
      return recurse(n - 1) + recurse(n - 2)
    }

    let fs = new FrameStream()
    let rs = new RecursiViz(new TreeSpy(fs))

    let frames = []
    fs.frames$
      .delay(1000)
      .map( root => root.children[0] )
      .subscribe( f => frames.push(f) )

    rs.visualize(fib, [7])
  }
}
