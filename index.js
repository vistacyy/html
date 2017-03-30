
let datatable = document.getElementById('datatable');
// 创建数据库
let db = openDatabase('MyData', '', 'My database', 102400);
// 显示所有数据
function init() {
  showAllData();
}
// 隐藏全部数据
function removeAllData() {
  for (let i = datatable.childNodes.length - 1; i > 0; i--) {
    datatable.removeChild(datatable.childNodes[i]);
  }
}
// 创建表头
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
th1.innerHTML = '姓名';
th2.innerHTML = '留言';
th3.innerHTML = '时间';
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
datatable.appendChild(tr);

// 显示出所有数据
function showData(row) {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.innerHTML = row.name;
  let td2 = document.createElement('td');
  td2.innerHTML = row.message;
  let td3 = document.createElement('td');
  let t = new Date();
  t.setTime(row.time);
  td3.innerHTML = t.toLocaleDateString() + ' ' + t.toLocaleTimeString();
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  datatable.appendChild(tr);
}

function showAllData() {
  db.transaction(function (tx) {
    tx.executeSql('create table if not exists msgdata(name text,message text,time interge)', []);
    tx.executeSql('select * from msgdata', [], function (tx, rs) {
      removeAllData();
      for (let i = 0; i < rs.rows.length; i++) {
        showData(rs.rows[i]);
      }
    });
  });
}
// 添加数据
function addData(name, message, time) {
  db.transaction(function (tx) {
    tx.executeSql('insert into msgdata values(?,?,?)', [name, message, time], function (tx, rs) {
      alert('数据保存成功');
    }, function (tx, error) {
      alert(error.source + '::' + error.message);
    });
  });
}

function saveData() {
  let name = document.getElementById('name').value;
  let memo = document.getElementById('memo').value;
  let time = new Date().getTime();
  addData(name, memo, time);
  showAllData();
}