document.addEventListener("DOMContentLoaded", ()=>{

//disabling the Log in button
document.querySelector('form').addEventListener('change', ()=>{
if (document.querySelector('#usernameInput').value=='' || document.querySelector('#passwordInput').value==''){
  document.querySelector('#logIn').disabled = true;
} else {
  document.querySelector('#logIn').disabled = false;
}
});

document.querySelector('#logIn').addEventListener("click", (e)=>{
  e.preventDefault();
  const username = document.querySelector('#usernameInput').value
  const password = document.querySelector('#passwordInput').value

  const url = 'http://localhost:5000/Login';
  let payload = {
    "login" : username,
    "password" : password
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => {
    console.log('Success:', response)
    if(response===200){
      console.log('logged in')
      document.querySelector('.invalid').classList.add('hidden')
      document.querySelector('.loginBox').classList.remove('redShadow')
    } else {
      document.querySelector('.invalid').classList.remove('hidden')
      document.querySelector('.loginBox').classList.add('redShadow')
    }
  })
  .catch(error => console.error('Error:', error));
})


})
