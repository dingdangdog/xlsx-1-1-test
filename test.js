const XLSX = require('xlsx');
const fs = require('fs');

// 读取 CSV 文件
const workbook = XLSX.readFile('test.csv');
const sheetName = workbook.SheetNames[0]; // 获取第一个工作表
const worksheet = workbook.Sheets[sheetName];

// 获取所有行数据
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// 打印解析结果
data.forEach((row, index) => {
  if (index === 0) return; // 跳过标题行

  const rawDate = row[0]; // 获取日期字段
  let parsedDate;

  // 尝试解析日期
  try {
    parsedDate = new Date(rawDate);
  } catch (e) {
    parsedDate = null;
  }

  console.log(`Row ${index}: Raw Date: ${rawDate}, Parsed Date: ${parsedDate}`);
});
