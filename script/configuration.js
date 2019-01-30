document.addEventListener("DOMContentLoaded", ()=>{

//setting random notifications
const notifications = [{
  message: 'Error!',
  class: 'error'
},{
  message: 'Warning!',
  class: 'warning'
},{
  message: 'Info!',
  class: 'info'
}]

function whatTime(){
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (hours < 10){
    hours = '0' + hours
  }
  if (minutes<10){
    minutes = '0' + minutes
  }
  if (seconds <10){
    seconds = '0' + seconds
  }
  today = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
  return today
}

const findOut = whatTime();

const notifySpace = document.querySelector('.notifications');
const randomNot = Math.floor(Math.random()*3);
notifySpace.innerHTML = `<span class='${notifications[randomNot].class}'>${notifications[randomNot].message} </span><span class="time">${findOut}</span><i class="closeNot fas fa-times-circle"></i>`

function randomize() {
  const timeNow = whatTime();
  const randomItem = Math.floor(Math.random()*3);
  const randomTime = ((Math.random()*6)+5)*1000;
  notifySpace.innerHTML = `<span class='${notifications[randomItem].class}'>${notifications[randomItem].message} </span><span class="time">${timeNow}</span><i class="closeNot fas fa-times-circle"></i>`
  setTimeout(randomize, randomTime);

//closing notifications
  document.querySelector('.closeNot').addEventListener("click", ()=>{
    notifySpace.innerHTML = '';
  })

}
randomize();

// showing clicked element from the sidebar in the window
const navigation = document.querySelector('#navigation');
navigation.querySelectorAll('a').forEach(elem=>{
  elem.addEventListener('click', ()=>{
    if(elem.classList=='nav-link'){
      document.querySelector('h2').textContent = `${elem.parentNode.parentNode.parentNode.firstElementChild.textContent} - ${elem.textContent}`
    } else {document.querySelector('h2').textContent = elem.textContent}
  })
});

//sidebar on smaller screen
document.querySelector('.navbar-toggler').addEventListener("click", ()=>{
  navigation.classList.toggle('d-none');
});


//getting languages
fetch('https://gist.githubusercontent.com/piraveen/fafd0d984b2236e809d03a0e306c8a4d/raw/eb8020ec3e50e40d1dbd7005eb6ae68fc24537bf/languages.json')
  .then(response=> {
    return response.json();
  })
  .then(myJson=> {
    Object.keys(myJson).forEach(lang=>{
    const languageSelect = document.querySelector('#languageSelect')
    const option = document.createElement('option');
    option.innerHTML = `${myJson[lang].name}`;
    option.value = myJson[lang].name;

    //English selected by default
    if(myJson[lang].name==='English'){
      option.setAttribute('selected', 'selected');
    }

    //looking for any special characters, excluding a comma, space and semicolon ', ;'
    const rege = /[^a-zA-Z\s,;]/;
    if(rege.test(myJson[lang].nativeName)){
      option.disabled = true;
    }

    languageSelect.appendChild(option)
    });
  });

  //selecting notifications
  const notificationSelect = document.querySelector('#notificationSelect')
  notifications.forEach(notif=>{
      const notificationOption = document.createElement('option')
      notificationOption.innerHTML = notif.message;
      notificationOption.value = notif.message;
      notificationOption.className = notif.class;
      notificationSelect.appendChild(notificationOption)
  })

//disable button
notificationSelect.addEventListener("change", (e)=>{
  if (e.target.selectedIndex!==-1){
    document.querySelector('.notifSelectButton').disabled = false;
  } else {
    document.querySelector('.notifSelectButton').disabled = true;
  }
})

})
