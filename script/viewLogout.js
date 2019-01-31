let viewLogout = `<main>
  <div class="content">

    <form class="loginBox container col-md-6 col-lg-6 col-xl-4 p-4 m-4">
      <p class='invalid text-center hidden'>Invalid login and/or password!</p>
      <div class="form-group">
        <label for="usernameInput">Login</label>
        <input type="text" class="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="Login">
      </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" class="form-control" id="passwordInput" placeholder="Password">
      </div>
      <div class="text-center">
        <button type="submit" id="logIn" class="btn btn-success px-5" disabled>Log In</button>
      </div>
    </form>

  </div>
</main>`
