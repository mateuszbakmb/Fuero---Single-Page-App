document.addEventListener("DOMContentLoaded", ()=>{

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

    //this single name is simply too long, its just more convenient to edit it here
    if(myJson[lang].name==='Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic'){
      option.innerHTML = 'Old Church Slavonic'
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

  const notificationSelect = document.querySelector('#notificationSelect')
  notifications.forEach(notif=>{
      const notificationOption = document.createElement('option')
      notificationOption.innerHTML = notif.message;
      notificationOption.value = notif.message;
      notificationOption.className = notif.class;
      notificationSelect.appendChild(notificationOption)
  })

//disable notifications settings button
notificationSelect.addEventListener("change", (e)=>{
  if (e.target.selectedIndex!==-1){
    document.querySelector('.notifSelectButton').disabled = false;
  } else {
    document.querySelector('.notifSelectButton').disabled = true;
  }
})

//email settings
const enterEmail = document.querySelector('#enterEmail')
enterEmail.addEventListener("change", (e)=>{
  //email regex taken from https://emailregex.com/
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRegex.test(e.target.value) || e.target.value==''){
    document.querySelector('.enterEmailButton').disabled = false;
  } else {
    document.querySelector('.enterEmailButton').disabled = true;
  }

})
})
