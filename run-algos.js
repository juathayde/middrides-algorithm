// import { enumeratePaths, calculateETA, findOptimumPaths } from './algo-0';
//
// var t0 = performance.now();
//
// runAlgorithm0()
// {
//   if (this.state.requests.length === 0) {
//     return;
//   }
//   {
//   const paths = enumeratePaths(this.state.currentStop, this.state.requests, this.state.seatsLeft);
//   const now = (new Date()).toISOString;
//   console.log("The number of paths created is " + paths.length + ".")
//   const optimalPath = findOptimumPath(this.state.requests, paths, Date.parse(now) / 60000);
//   }
// };
//
// var t1 = performance.now();
//
// console.log("Call to runAlgorithm0 took " + (t1 - t0) + " milliseconds.")
