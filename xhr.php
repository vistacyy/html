<?php
  $name=$_POST['name'];
  $age=$_POST['age'];
  echo '服务器接收的数据：<br />';
  echo '姓名:'.$name.'<br/>';
  echo '年龄:'.$age.'<br/>';
  flush();
?>