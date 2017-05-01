<?php
  $callback=$_GET['callback'];
  $data=array('a','b','c');
  echo $callback.'('.json_encode($data).')';
?>