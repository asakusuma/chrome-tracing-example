var ct = require("chrome-tracing");
var InitialRenderBenchmark = ct.InitialRenderBenchmark;
var Runner = ct.Runner;

var benchmark = new InitialRenderBenchmark({
  name: "app initial render",
  url: "http://localhost:3000/",
  endMarker: "renderEnd",
  browser: {
    type: "canary"
  }
});

var runner = new Runner([benchmark]);
runner.run(1).then(result => {
  var first = result[0];
  console.log(first.meta.cpus);
  console.log(first.samples);
}).catch(err => {
  console.log('ERROR');
  console.error(err);
  process.exit(1);
});

/*
meta: { browserVersion: 'Chrome/57.0.2935.0', cpus: [Object] },
    set: 'app initial render',
    samples: [ [Object] ]
*/
