/*
 * @Author: tianci
 * @Date: 2024-07-19 10:30:08
 * @LastEditors: tianci
 * @LastEditTime: 2024-07-22 15:12:34
 * @FilePath: \markdown-it-table-merge-cells\index.js
 */
function TableMergeCells(_0x39a5d5) {
  _0x39a5d5["\u0063\u006f\u0072\u0065"]["\u0072\u0075\u006c\u0065\u0072"]["\u0070\u0075\u0073\u0068"](
    "selur_elbat_motsuc".split("").reverse().join(""),
    function (_0x29414b) {
      function _0x36c8b0(_0x2643f7, _0x4f75aa) {
        if (_0x2643f7[_0x4f75aa]["\u0074\u0079\u0070\u0065"] === "esolc_daeht".split("").reverse().join("")) {
          _0x554bbc = ![];
          return 0x48cea ^ 0x48cea;
        } else {
          _0x2643f7[_0x4f75aa]["\u0074\u0079\u0070\u0065"] === "nepo_ht".split("").reverse().join("") && _0x452838++;
          return _0x36c8b0(_0x2643f7, ++_0x4f75aa);
        }
      }
      const _0x298000 = _0x29414b["\u0074\u006f\u006b\u0065\u006e\u0073"];
      let _0x5915db = 0x5200a ^ 0x5200a;
      let _0x452838 = 0x4368a ^ 0x4368a;
      let _0x3112ad = ![];
      let _0x554bbc = ![];
      for (let _0x4c5a48 = 0x97876 ^ 0x97876; _0x4c5a48 < _0x298000["\u006c\u0065\u006e\u0067\u0074\u0068"]; _0x4c5a48++) {
        const _0x56c9d1 = _0x298000[_0x4c5a48];
        if (_0x56c9d1["type"] === "\u0074\u0061\u0062\u006c\u0065\u005f\u006f\u0070\u0065\u006e") {
          _0x3112ad = !![];
          _0x554bbc = !![];
          _0x452838 = 0x2bc50 ^ 0x2bc50;
          console["log"]("--\u59CB\u5F00--\u683C\u8868".split("").reverse().join(""), _0x56c9d1["\u0063\u006f\u006e\u0074\u0065\u006e\u0074"]);
          continue;
        }
        if (_0x554bbc) _0x36c8b0(_0x298000, _0x4c5a48);
        if (_0x56c9d1["type"] === "esolc_elbat".split("").reverse().join("")) {
          _0x3112ad = ![];
          _0x452838 = 0xb0970 ^ 0xb0970;
          console["log"]("--\u675F\u7ED3--\u683C\u8868".split("").reverse().join(""), _0x56c9d1["content"]);
          continue;
        }
        if (_0x3112ad) {
          ++_0x5915db;
          if (_0x56c9d1["\u0074\u0079\u0070\u0065"] === "nepo_rt".split("").reverse().join("")) {
            _0x5915db = 0xc1e57 ^ 0xc1e56;
          } else if (
            _0x5915db &&
            _0x56c9d1["\u0074\u0079\u0070\u0065"] === "enilni".split("").reverse().join("") &&
            _0x56c9d1["\u0063\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0074\u0072\u0069\u006d"]() === "==".split("").reverse().join("")
          ) {
            _0x298000[_0x4c5a48]["\u0063\u006f\u006e\u0074\u0065\u006e\u0074"] = "".split("").reverse().join("");
            _0x298000[_0x4c5a48]["children"] = "".split("").reverse().join("");
            _0x298000[_0x4c5a48]["hidden"] = !![];
            _0x298000[_0x4c5a48 - (0x783af ^ 0x783ae)]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
            _0x298000[_0x4c5a48 + (0x547de ^ 0x547df)]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
            const _0x4864c2 = _0x4c5a48 - _0x452838;
            findLastCol(_0x4864c2, _0x298000, _0x4c5a48, _0x452838);
          } else if (
            _0x5915db &&
            _0x56c9d1["type"] === "enilni".split("").reverse().join("") &&
            _0x56c9d1["\u0063\u006f\u006e\u0074\u0065\u006e\u0074"]["trim"]() === "\u005e\u005e"
          ) {
            const _0x57a122 = _0x4c5a48 - ((0xeddb5 ^ 0xeddb6) * _0x452838 + 0x3);
            _0x298000[_0x4c5a48]["content"] = "";
            _0x298000[_0x4c5a48]["\u0063\u0068\u0069\u006c\u0064\u0072\u0065\u006e"] = "";
            _0x298000[_0x4c5a48]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
            _0x298000[_0x4c5a48 - 0x1]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
            _0x298000[_0x4c5a48 + (0xaf326 ^ 0xaf327)]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
            findLastRow(_0x57a122, _0x298000, _0x4c5a48, _0x452838);
          } else if (_0x5915db && _0x56c9d1["type"] === "inline" && _0x56c9d1["type"] !== "tr_close") {
          } else if (_0x56c9d1["type"] === "tr_close") {
            _0x5915db = 0x0;
          }
        }
      }
    }
  );
}
const findLastCol = (_0x3b84f, _0x397a29, _0x5af7e4, _0x3b968e, _0x590ff8 = 0x1, _0x5f0cdc = 0x5b4f2 ^ 0x5b4f0) => {
  let _0x3ccbef = _0x5af7e4 + _0x3b968e * _0x590ff8 - _0x590ff8;
  if (_0x397a29[_0x3ccbef]?.["\u0063\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0074\u0072\u0069\u006d"]() === "==") {
    _0x397a29[_0x3ccbef]["content"] = "";
    _0x397a29[_0x3ccbef]["children"] = "";
    _0x397a29[_0x3ccbef]["hidden"] = !![];
    _0x397a29[_0x3ccbef - (0x89d22 ^ 0x89d23)]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
    _0x397a29[_0x3ccbef + 0x1]["hidden"] = !![];
    return findLastCol(_0x3b84f, _0x397a29, _0x5af7e4, _0x3b968e, ++_0x590ff8, ++_0x5f0cdc);
  } else {
    _0x397a29[_0x3b84f]["\u0061\u0074\u0074\u0072\u0053\u0065\u0074"]("\u0063\u006f\u006c\u0073\u0070\u0061\u006e", _0x5f0cdc);
  }
};
const findLastRow = (_0x1cc32b, _0x3f42a9, _0x246fd3, _0x37fd2a, _0x9b74c7 = 0x1, _0x5c8a95 = 0x2) => {
  let _0x40e356 = _0x246fd3 + ((0x5f9a1 ^ 0x5f9a2) * _0x37fd2a + (0x574d0 ^ 0x574d2)) * _0x9b74c7;
  if (_0x3f42a9[_0x40e356]?.["content"]["trim"]() === "^^".split("").reverse().join("")) {
    _0x3f42a9[_0x40e356]["\u0063\u006f\u006e\u0074\u0065\u006e\u0074"] = "";
    _0x3f42a9[_0x40e356]["children"] = "".split("").reverse().join("");
    _0x3f42a9[_0x40e356]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
    _0x3f42a9[_0x40e356 - 0x1]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
    _0x3f42a9[_0x40e356 + (0x30062 ^ 0x30063)]["\u0068\u0069\u0064\u0064\u0065\u006e"] = !![];
    return findLastRow(_0x1cc32b, _0x3f42a9, _0x246fd3, _0x37fd2a, ++_0x9b74c7, ++_0x5c8a95);
  } else {
    _0x3f42a9[_0x1cc32b]["\u0061\u0074\u0074\u0072\u0053\u0065\u0074"]("rowspan", _0x5c8a95);
  }
};
module["\u0065\u0078\u0070\u006f\u0072\u0074\u0073"] = TableMergeCells;
