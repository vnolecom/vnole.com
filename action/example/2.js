// ユーザーが入力した文字を挿入する
function input(event) {
  return {
    op: "input",
    title: "文字の指定",
    text: "挿入したい文字を入力して下さい。",
    form: [
      {
        name: "a",
        title: "挿入したい文字",
        type: "text",
      },
    ],
  };
}

function action(event) {
  return {
    op: "insert",
    text: event.input.a,
  };
}
