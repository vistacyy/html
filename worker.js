onmessage=function(e){
  let num=e.data;
  let result=0;
  for(let i=0;i<=num;i++){
    result+=i;
  }
  postMessage(result);
};