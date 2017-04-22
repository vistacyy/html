<?php
  header('Content-Type:text/event-stream;charset:utf-8');
  header('Cache-Control:no-cache');
  date_default_timezone_set('Asia/Shanghai'); 
  echo "event:test\n";
  echo 'data:服务器时间:'.date('Y/m/d H:i:s')."\n\n";
  flush();
?>