"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// module.exportを使ってhello関数を定義する。
exports.hello = function (message) {
    log(message);
};
function log(message) {
    document.body.innerHTML = ("" + message);
    console.log(message + "\u3092\u51FA\u529B\u3057\u307E\u3057\u305F");
}
function piyo() {
}
exports.piyo = piyo;
