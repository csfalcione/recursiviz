# Recursiviz

![RecursiViz Dashboard](https://image.ibb.co/ifY7u7/screenshot.png)

## About the Application
If you know what a recursive function is, you know they can be difficult to wrap your head around. But what if you could watch any code run step-by-step, rewind, and repeat? This would provide valuable insights into its behavior. We've created an application that does just that!

RecursiViz will pipe custom test cases through your custom code, and analyze your function's call tree for visualization. Several behavioral hooks/events are streamed from the emulated execution environment and mapped into a sequence of frames for powerful playback and visualization.

This method of differentially evaluating change events allows us to visualize any recursive function without modification! You can even rewind time through compensating actions. Better yet, it's incredibly efficient!

## How Does it Work? Is it Magic?
No! Behavioral analysis of your code happens in a 5 step process:

![RecursiViz Architectural Diagram](https://image.ibb.co/i3A3Z7/recursiviz.jpg)

1. User writes a JavaScript module, exporting an entrypoint function to a target variable
2. We load the function and its abstract syntax tree (AST) into a browser-side execution environment to perform a term rewrite on recursive rules to go through our proxy. This does not alter normal execution flow.
3. Flagged behavioral events are streamed to a visualizer module. We are using a graph visual, but you could write your own driver for any visualization!
4. Processed actions are transformed in to a render-able data-structure (AppGraph). Changes to that data structure are streamed to the Playback Component, which interprets events and applies differential changes to the render-able data-model for real-time updates
5. An MVC pattern exposes controls to the Playback component for rewinding, animating, and stepping through the events. Edits are shown in real-time!
