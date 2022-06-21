// ボタンを押すと、文字を挿入します。
function action(event) {
  return {
    op: "insert",
    text: "挿入したい文字",
  };
}
