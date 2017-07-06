
onmessage = function (event) {      
  var requestId = event.data.requestId;
  var workerFunction = eval(event.data.functionName);
  var params = event.data.params;
  var result =  workerFunction(params);
  postMessage({result: result, requestId: requestId}); 
}
