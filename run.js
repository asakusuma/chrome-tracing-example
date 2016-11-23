var InitialRenderBenchmark = require("chrome-tracing").InitialRenderBenchmark;

let benchmark = new InitialRenderBenchmark({
  name: "app initial render",
  url: "http://localhost:3000/",
  endMarker: "renderEnd",
  browser: {
    type: "canary"
  }
});

benchmark.run().then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});