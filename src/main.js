'use strict';

import 'pixi.js';
let renderer = PIXI.autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
let stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);