function post (){
  //リクエストを送信する処理
  const submit = document.getElementById("submit");
  //重複するため編集　submit.addEventListener("click", () => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 }
 
 window.addEventListener('load', post);
