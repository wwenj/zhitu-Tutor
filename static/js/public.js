// 获取url中参数
function getQueryStr(key) {
    var queryString = location.href.match(new RegExp("[\?\&]" + key + "=([^\&]*)(\&?)", "i")),
            val = (queryString && queryString.length > 1 && queryString[1]) || "";
    return decodeURIComponent(val);
}

module.exports = {
  getQueryStr: getQueryStr
};
