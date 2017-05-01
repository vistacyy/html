<?php
header("Content-type: text/html; charset=utf-8"); 
header('Access-Control-Allow-Origin:*'); //*代表可访问的地址，可以设置指定域名
header('Access-Control-Allow-Methods:POST,GET'); 
  $name=$_POST['name'];
  $age=$_POST['age'];
  echo '服务器接收的数据：<br />';
  echo '姓名:'.$name.'<br/>';
  echo '年龄:'.$age.'<br/>';
  flush();
?>