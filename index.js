window.onload=function(){
  let btn=document.getElementById('btn');
  let text=document.getElementById('text');
  let count=1
  btn.onclick=function(){
    window.history.pushState(count,'记录'+count,`count${count}`);
    text.innerText=count;
    count++;
  };
  window.addEventListener('popstate',function(e){
    console.log(e);
    text.innerText=e.state;
  });
};