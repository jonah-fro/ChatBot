const form = document.querySelector('form')
const input = document.querySelector('input')

const rgxVerify = {
  hour: /\b(hour)\b/i,
  date: /\b(date)\b/i,
  time: /\b(time)\b/i,
  hello: /\b(hello)\b/i,
  hey: /\b(hey)\b/i
}

form.addEventListener('submit', (e) => {
  e.preventDefault()  

  const today = new Date();
  const time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
  const date = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2, "0")+'-'+String(today.getDate()).padStart(2, "0");  

  if(input.value != ""){
    document.querySelector('.messageArea').insertAdjacentHTML('afterbegin', 
    '<div class="messageResponseBlock">'+
     '<div class="messageResponse">'+
      '<p class="messageContent">'+input.value+
      '</p>'+
     '</div>'+
    '</div>')
  } else{
    alert('Please write something.')
  }  

  if (rgxVerify.hour.test(input.value) || rgxVerify.time.test(input.value)){  
   document.querySelector('.messageArea').insertAdjacentHTML('afterbegin', 
    '<div class="messageBlock">'+
     '<div class="user">'+
      '<img src="assets/img/chaton.jpeg" class="messageAvatar">'+
      '<span class="messageUsername">Cat Time Bot</span>'+
     '</div>'+
     '<div class="message">'+
      '<p class="messageContent">Il est '+time+
      '</p>'+
     '</div>'+
    '</div>');
  }  

  if (rgxVerify.date.test(input.value)){
    document.querySelector('.messageArea').insertAdjacentHTML('afterbegin', 
    '<div class="messageBlock">'+
     '<div class="user">'+
      '<img src="assets/img/chat2.jpeg" class="messageAvatar">'+
      '<span class="messageUsername">Cat Date Bot</span>'+
     '</div>'+
     '<div class="message">'+
      '<p class="messageContent">Il est '+date+
      '</p>'+
     '</div>'+
    '</div>');
  }
  input.value = ""
})