let viewConfiguration = `<header id="topNav" class="navbar navbar-expand navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img class="d-block d-md-none" src="https://media.licdn.com/dms/image/C560BAQFafbwye-SOAg/company-logo_200_200/0?e=2159024400&v=beta&t=KCFcy6Ti533kw5vI7THbD6u0EBMA3EZMLjstqr9pRD8" width="50px" alt="Fuero logo img"><img
      class="d-none d-md-block" src="http://fuerogames.com/wp-content/themes/responsive/core/images/f-logo.png" alt="Fuero logo"></a>
  <button class="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <span class="notifications ml-auto">Notifications</span>
  <ul class="navbar-nav ml-auto justify-content-end">
    <li class="nav-item">
      <a id="viewLogout" class="nav-link" href="#"><i class="fas fa-sign-out-alt d-block d-md-none"></i><span class="d-none d-md-block">Logout</span></a>
    </li>
    <li class="nav-item">
      <a id="viewConfiguration" class="nav-link" href="#"><i class="fas fa-cog d-block d-md-none"></i><span class="d-none d-md-block">Configuration</span></a>
    </li>
  </ul>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="navigation" class="col-6 col-md-3 col-lg-2 d-none d-md-block sidebar">
      <ul class="nav flex-column">
        <li class="nav-item p-0">
          <a href="#">Dashboard</a>
        </li>
        <li class="nav-item p-0">
          <a href="#statisticsMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Statistics</a>
          <ul class="collapse list-unstyled" id="statisticsMenu">
            <li>
              <a class="nav-link" href="#">Tests</a>
            </li>
            <li>
              <a class="nav-link" href="#">Devices</a>
            </li>
            <li>
              <a class="nav-link" href="#">Builds</a>
            </li>
            <li>
              <a class="nav-link" href="#">Services</a>
            </li>
            <li>
              <a class="nav-link" href="#">Projects</a>
            </li>
        </li>
      </ul>
      <li class="nav-item p-0">
        <a href="#reportsMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Reports</a>
        <ul class="collapse list-unstyled" id="reportsMenu">
          <li>
            <a class="nav-link" href="#">Tests</a>
          </li>
          <li>
            <a class="nav-link" href="#">Devices</a>
          </li>
          <li>
            <a class="nav-link" href="#">Builds</a>
          </li>
          <li>
            <a class="nav-link" href="#">Services</a>
          </li>
          <li>
            <a class="nav-link" href="#">Projects</a>
          </li>
        </ul>
      </li>
      <li class="nav-item p-0">
        <a href="#">Configurations</a>
      </li>
      <li class="nav-item p-0">
        <a href="#overviewMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Overview</a>
        <ul class="collapse list-unstyled" id="overviewMenu">
          <li>
            <a class="nav-link" href="#">Tests</a>
          </li>
          <li>
            <a class="nav-link" href="#">Devices</a>
          </li>
          <li>
            <a class="nav-link" href="#">Builds</a>
          </li>
          <li>
            <a class="nav-link" href="#">Services</a>
          </li>
          <li>
            <a class="nav-link" href="#">Projects</a>
          </li>
        </ul>
      </li>
      </ul>
    </nav>
    <section id="window" class="col-md-9 col-lg-10 offset-md-3 offset-lg-2 text-center">
      <h2>Configuration</h2>

      <section class="language mt-4">
        <form class="col-sm-6 col-lg-4 mx-auto">
          <div class="form-group">
            <label for="languageSelect">Choose a language</label>
            <select class="form-control" id="languageSelect">
              <option value='' disabled>Choose a language</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </section>

      <section class="notifySettings">
        <form class="col-sm-6 col-lg-4 mx-auto mt-4">
          <div class="form-group">
            <label for="notificationSelect">Choose notifications</label>
            <select multiple size='3' class="form-control" id="notificationSelect">
            </select>
          </div>
          <button type="submit" disabled class="notifSelectButton btn btn-primary">Save</button>
        </form>
      </section>

      <section class="changeEmail mb-4">
        <form class="col-sm-6 col-lg-4 mx-auto mt-4">
          <div class="form-group">
            <label for="enterEmail">Enter your email address</label>
            <input type="email" class="form-control" id="enterEmail" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <button type="submit" class="enterEmailButton btn btn-primary">Save</button>
        </form>
      </section>
    </section>
  </div>
</div>`
