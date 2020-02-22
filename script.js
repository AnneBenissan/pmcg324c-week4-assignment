console.log('hello world');

var userNote = document.querySelector('#userNote');
var userTitle = document.querySelector('#userTitle');
var userBody = document.querySelector('#userBody');

userNote.addEventListener ('submit',function (event){

  event.preventDefault();
  if (userBody.value.lenght < 1) return;
  else {
    userNote.innerHTML = userTitle.innerHTML + userBody.innerHTML;
    userNote.value ='';
    window.localStorage.setItem('userNote',userNote.value);
  }
}, false);

var saved = window.localStorage.getItem('userNote', userNote.value);
if (saved){
  userNote.innerHTML = saved;
}
JSON.parse(window.localStorage.getItem('saved'));

console.log('saved');
