/*
 * @Author: tianci
 * @Date: 2024-07-16 11:00:48
 * @LastEditors: tianci
 * @LastEditTime: 2024-07-22 16:48:29
 * @FilePath: \markdown-it-table-merge-cells\test\test.js
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
## 😲 md-editor-v3

Markdown 编辑器，vue3 版本，使用 jsx 模板 和 typescript 开发，支持切换主题、prettier 美化文本等。

## 📈 表格演示

| col | col | col |
| - | - | - |
| content | == | content |
| content | == | content |

## 📏 公式

行内：$x+y^{2x}$

$$
\sqrt[3]{x}
$$

## 🧬 图表
  |  4col   |   ==    |  ==  |
  | :-----: | :-----: | :--: |
  | content | content | 3row |
  | content | content |  ^^  |
  | content | content |  ^^  |
`)
);
