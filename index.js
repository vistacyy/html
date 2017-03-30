window.indexedDB=window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
window.IDBTransaction=window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange=window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
window.IDBCursor=window.IDBCursor || window.webkitIDBCursor || window.msIDBCursor;
function connectDatabase(){
  let dbName='indexedDbTest';
  let dbVersion=20150307;
  let idb;
  let dbConnect=indexedDB.open(dbName,dbVersion);
  dbConnect.onsuccess=function(e){
    idb=e.target.result;
    console.log('连接成功',e);
    // 开启事务
    let tx=idb.transaction(['Users'],'readwrite');
    let store=tx.objectStore('Users');
    let value={
      userId:1,
      userName:'张三',
      address:'住址1'
    };
    let req=store.put(value);
    req.onsuccess=function(e){
      alert('数据保存成功');
    };
    req.onerror=function(e){
      alert('数据保存失败');
    };
    let reqGut=store.get(1);
    reqGut.onsuccess=function(e){
      if(this.result == undefined){
        alert('无数据');
      }else{
        console.log('获取数据成功',this.result);
      }
    };
    reqGut.onerror=function(){
      alert('获取数据失败');
    };
  };
  dbConnect.onerror=function(e){
    alert('连接失败');
  };
  
  // 版本更新事务
  dbConnect.onupgradeneeded=function(e){
    idb=e.target.result;
    let tx=e.target.transaction;
    // let oldVersion=e.oldVersion;
    // let newVersion=e.newVersion;
    // alert('数据库版本更新成功，旧版本号为'+oldVersion+',新版本号为'+newVersion);
    let name='Users';
    let optionalParameters={
      keyPath:'userId',
      autoIncreament:false
    };
    let store=idb.createObjectStore(name,optionalParameters);
    alert('对象仓库创建成功');
    let indexName='userNameIndex';
    let keyPath='userName';
    let indexParameters={
      unique:false,
      multiEntry:false
    };
    let idx=store.createIndex(name,keyPath,indexParameters);
    alert('创建索引成功');
  };


}