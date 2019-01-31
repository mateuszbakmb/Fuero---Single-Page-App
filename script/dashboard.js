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

    let findOut = whatTime();

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

    // minimize the draggable window
      document.querySelector('.minimize').addEventListener('click', ()=>{
        document.querySelector('.draggable').classList.toggle('smaller');
      });

    // showing clicked element from the sidebar in the window
    const navigation = document.querySelector('#navigation');
    navigation.querySelectorAll('a').forEach(elem=>{
      elem.addEventListener('click', ()=>{
        if(elem.classList=='nav-link'){
          document.querySelectorAll('h2').forEach(head=>{
            head.textContent = `${elem.parentNode.parentNode.parentNode.firstElementChild.textContent} - ${elem.textContent}`;
          })
        } else {
          document.querySelectorAll('h2').forEach(head=>{
            head.textContent = elem.textContent;
          })
        }
      })
    });

    //sidebar on smaller screen
    document.querySelector('.navbar-toggler').addEventListener("click", ()=>{
      navigation.classList.toggle('d-none');
    });

    //draggable window
    const dragWindow = document.querySelector(".window");
    const draggable = document.querySelector(".draggable");

    //detecting if element is moving
    let moving = false;
    //starting position of the element before moving (also before moving it again)
    let startingX;
    let startingY;
    //position after (and during) moving the element
    let currentX;
    let currentY;
    //detecting how much the position has changed after dragging/transforming
    let transformedX = 0;
    let transformedY = 0;

    dragWindow.addEventListener("mousedown", e=>{
      startingX = e.clientX - transformedX;
      startingY = e.clientY - transformedY;

      if (e.target === draggable) {
        moving = true;
      }
    });

    dragWindow.addEventListener("mousemove", (e)=>{
      if (moving) {
        currentX = e.clientX - startingX;
        currentY = e.clientY - startingY;
        transformedX = currentX;
        transformedY = currentY;
        draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
    });

    dragWindow.addEventListener("mouseup", ()=>{
      startingX = currentX;
      startingY = currentY;
      moving = false;
    });

})
