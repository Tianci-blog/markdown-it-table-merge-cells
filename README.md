![](https://img.shields.io/github/license/Tianci-blog/markdown-it-table-merge-cells) ![](https://img.shields.io/github/package-json/v/Tianci-blog/markdown-it-table-merge-cells) ![](https://img.shields.io/npm/dm/markdown-it-table-merge-cells)

# ✨ markdown-it-table-merge-cells

- 🦜 `markdown-it` 增强辅助类表格语法插件(目前只支持列合并和行合并。后面会考虑加入行列合并。)
- 🦞 由于`markdown-it-multimd-table`不支持配合`prettier`格式化一起使用，可读性和可维护性就比较差，因此我自己写一个。
- 🦈 凡是用`markdown-it`作为解析器的`markdown`编辑器，只要该编辑器支持配置即可使用此插件扩展表格语法。

- 🦜 `markdown-it` enhanced auxiliary class table syntax plug-in (Currently, only column merging and row merging are supported. Will consider joining the column merge later.)
- 🦞 Because `markdown-it-multimd-table` is not supported with `prettier` formatting, making it less readable and maintainable, so I wrote my own.
- 🦈 Any `markdown` editor that uses `markdown-it` as the parser can use this plugin to extend the table syntax as long as the editor supports configuration.

## 🐸 Usage

```js
npm i markdown-it -D
npm i markdown-it-table-merge-cells -D
// 以上两行效果同下行/The above two lines have the same downward effect
npm i markdown-it  markdown-it-table-merge-cells -D


import MarkdownIt from "markdown-it";
import TableMergeCells from "markdown-it-table-merge-cells";

const md = new MarkdownIt()

md.use(TableMergeCells);

console.log(
  md.render(`
|  4col   |   ==    |  ==  |   ==    |
| :-----: | :-----: | :--: | :-----: |
|  2row   | content | 3row | content |
|   ^^    | content |  ^^  | content |
| content | content |  ^^  | content |
`)
);
```

- 以下是浏览器上预期的表格:
- Here's the table expected on browser:

<table>
<thead>
<tr>
<th style="text-align:center" colspan="4">4col</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center" rowspan="2">2row</td>
<td style="text-align:center">content</td>
<td style="text-align:center" rowspan="3">3row</td>
<td style="text-align:center">content</td>
</tr>
<tr>
<td style="text-align:center">content</td>
<td style="text-align:center">content</td>
</tr>
<tr>
<td style="text-align:center">content</td>
<td style="text-align:center">content</td>
<td style="text-align:center">content</td>
</tr>
</tbody>
</table>

## License

MIT © [itianci]()
