<template>
  <nav class="navbar" id="prmy-navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <RouterLink to="/" id="home-anchor" class="router-link-navbar"><b>Degree Planner</b></RouterLink>
        </div>
        <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <RouterLink class="router-link-navbar">Course Planner</RouterLink>
          </div>
          <div class="navbar-item">
            <RouterLink class="router-link-navbar">Degree Requirements Tracker</RouterLink>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="navbar-link">uOttawa Resources</a>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-dropdown">
                <a href="https://catalogue.uottawa.ca/en/undergrad/honours-bsocsc-political-science/#programrequirementstext" class="navbar-item">Honours Poli Sci Requirements</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </nav>
  <div id="app">
    <div id="content">
      <h1 class="title">uOttawa Planner</h1>
      <RouterView />
    </div>
  </div>
</template>

<style>
#content {
  padding: 2%;
}

#sidebar {
  padding: 1%;
  width: 10%;
  background-color: black;
  color: white;
}

nav.navbar {
  background-color: #8F001A;
  padding: 1%;
}

#home-anchor {
  font-size: 150%;
}

.router-link-navbar {
  color: white;
}
</style>