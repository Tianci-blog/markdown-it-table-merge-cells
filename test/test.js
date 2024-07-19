/*
 * @Author: tianci
 * @Date: 2024-07-16 11:00:48
 * @LastEditors: tianci
 * @LastEditTime: 2024-07-18 17:49:57
 * @FilePath: \markdown-it-multimd-table-extra\test\test.js
 */
const MarkdownIt = require("markdown-it");
const TableMergeCells = require("../index.js");

const md = new MarkdownIt();

md.use(TableMergeCells);

// md.render(`
//   |  4col   |   ==    |  ==  |
//   | :-----: | :-----: | :--: |
//   | content | content | 3row |
//   | content | content |  ^^  |
//   | content | content |  ^^  |
//   `);

// md.render(`
// |  4col   |   ==    |  ==  |   ==    |
// | :-----: | :-----: | :--: | :-----: |
// |  2row   |  22row22| 3row | content |
// |   ^^    |   ^^    |  ^^  | content |
// | content | content |  ^^  | content |
// `);

console.log(
  md.render(`
|  4col   |   ==    |  ==  |   ==    |
| :-----: | :-----: | :--: | :-----: |
|  2row   | content | 3row | content |
|   ^^    | content |  ^^  | content |
| content | content |  ^^  | content |
`)
);
