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
  // const username = document.querySelector('#usernameInput').value;
  // const password = document.querySelector('#passwordInput').value;
  //
  // const url = 'http://localhost:5000/Login';
  // let payload = {
  //   "login" : username,
  //   "password" : password
  // };
  //
  // fetch(url, {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers:{
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
  // .then(response => {
  //   console.log('Success:', response)
  //   if(response===200){
  //     document.querySelector('.invalid').classList.add('hidden');
  //     document.querySelector('.loginBox').classList.remove('redShadow');
  // //if I used a toggle in every example below, then switching from Configuration into Login screen
  // //and logging back would put me back in configuration instead of Dashboard
  //     document.querySelector('.dashboardhidden').classList.remove('d-none');
  //     document.querySelector('.dashboardhidden').querySelector('h2').textContent = 'Dashboard';
  //     document.querySelector('.window1').classList.remove('d-none');
  //     document.querySelector('.window2').classList.add('d-none');
  //     document.querySelector('.content').classList.toggle('d-none');
  //   } else {
  //     document.querySelector('.invalid').classList.remove('hidden');
  //     document.querySelector('.loginBox').classList.add('redShadow');
  //   }
  // })
  // .catch(error => console.error('Error:', error));

  document.querySelector('.invalid').classList.add('hidden');
  document.querySelector('.loginBox').classList.remove('redShadow');
//if I used a toggle in every example below, then switching from Configuration into Login screen
//and logging back would put me back in configuration instead of Dashboard
  document.querySelector('.dashboardhidden').classList.remove('d-none');
  document.querySelector('.dashboardhidden').querySelector('h2').textContent = 'Dashboard';
  document.querySelector('.window1').classList.remove('d-none');
  document.querySelector('.window2').classList.add('d-none');
  document.querySelector('.content').classList.toggle('d-none');
});

//logout
document.querySelector('.viewLogout').addEventListener("click",()=>{
  document.querySelector('.dashboardhidden').classList.toggle('d-none');
  document.querySelector('.content').classList.toggle('d-none');
});

//configuration
document.querySelector('.viewConfiguration').addEventListener("click",()=>{
  document.querySelector('.window2').classList.remove('d-none');
  document.querySelector('.window1').classList.add('d-none');
});
//clicking on dashboard from nav
document.querySelector('.dashboardLoad').addEventListener("click", ()=>{
  document.querySelector('.window1').classList.remove('d-none');
  document.querySelector('.window2').classList.add('d-none');
})


})
