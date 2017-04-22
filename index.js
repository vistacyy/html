window.onload = function () {

  let c = document.getElementById('canvas');
  let ctx = c.getContext('2d');
  // 三种填充模式
  ctx.fillStyle = '#FF0000';
  // 线性渐变
  let lg = ctx.createLinearGradient(0, 0, 100, 0);
  lg.addColorStop(0, 'blue');
  lg.addColorStop(1, 'white');
  // 径向渐变
  let rg = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
  rg.addColorStop(0, "red");
  rg.addColorStop(1, "white");
  ctx.fillStyle = rg;
  // 图像
  let img = document.getElementById('lamp');
  let pat = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pat;
  // 绘制填充矩形
  ctx.fillRect(0, 0, 200, 200);
  // 填充已定义的路径
  ctx.fill();
  // 笔触模式同上
  ctx.strokeStyle = '#00f';
  // 线条宽度
  ctx.lineWidth = 10;
  // 模糊
  ctx.shadowBlur = 10;
  // 阴影
  ctx.shadowColor = '#f00';
  // 阴影偏移
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  // 起始一条路径，或重置当前路径。
  ctx.beginPath();
  // 线帽的样式butt、round、square
  ctx.lineCap = 'square';
  // 交汇时边角样式round、bevel、miter
  ctx.lineJoin = 'miter';
  // 最大斜接长度.lineJoin为 "miter" 时，miterLimit 才有效
  ctx.miterLimit = 5;
  ctx.moveTo(20, 20);
  ctx.lineTo(150, 150);
  ctx.lineTo(20, 50);
  // 创建从当前点回到起始点的路径
  ctx.closePath();
  // 绘制已定义的路径
  ctx.stroke();
  //绘制无填充矩形
  // ctx.strokeRect(20, 20, 160, 160);
  // 定义矩形路径,要用fill或stroke实际绘制，同线条
  // ctx.rect(20, 20, 160, 160);
  //
  // ctx.stroke();
  // 清空一个矩形
  // ctx.clearRect(20,20,100,50);

  c = document.getElementById("canvas2");
  ctx = c.getContext("2d");
  // 保存画布
  ctx.save();
  // 从父画布上剪切出一块新画布
  // 旋转
  ctx.rotate(20 * Math.PI / 180);
  ctx.rect(0, 0, 100, 100);
  ctx.clip();
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 150, 100);
  // 恢复画布
  ctx.restore();
  // 创建弧/曲线
  // 缩放
  ctx.scale(2, 2);
  // 转换
  ctx.translate(-100, -100);
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = '#0f0';
  ctx.stroke();

  // 恢复
  ctx.translate(100, 100);
  ctx.scale(0.5, 0.5);
  // 两切线之间的弧/曲线。
  ctx.beginPath();
  ctx.moveTo(20, 20);           // Create a starting point
  ctx.lineTo(100, 20);          // Create a horizontal line
  ctx.arcTo(150, 20, 150, 70, 50); // Create an arc
  ctx.lineTo(150, 120);         // Continue with vertical line
  ctx.stroke();                // Draw it
  // 文字
  ctx.fillStyle = 'red';
  ctx.font = '50px 黑体';
  ctx.fillText('填充文本', 10, 120);
  ctx.strokeText('绘制文本', 10, 150);
  // 绘制图像
  ctx.drawImage(img, 150, 150);

  // 像素操作
  let ctx2 = document.getElementById('canvas3').getContext('2d');
  let imageData = ctx.getImageData(0, 0, 100, 100);
  ctx2.putImageData(imageData, 50, 50);
  // 透明度
  ctx2.globalAlpha = 0.8;
  // 叠加方法
  ctx2.fillStyle = "red";
  ctx2.fillRect(20, 20, 75, 50);
  ctx2.globalCompositeOperation = "source-over";
  ctx2.fillStyle = "blue";
  ctx2.fillRect(50, 50, 75, 50);
  ctx2.globalAlpha = 1;
  ctx2.fillStyle = "red";
  ctx2.fillRect(150, 20, 75, 50);
  ctx2.globalCompositeOperation = "destination-over";
  ctx2.fillStyle = "blue";
  ctx2.fillRect(180, 50, 75, 50);
};