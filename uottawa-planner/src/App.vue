<template>
  <nav class="navbar" id="prmy-navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <RouterLink to="/" id="home-anchor" class="router-link-navbar"><b>Degree Planner</b></RouterLink>
        </div>
        <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" id="burger" @click="handleModal(['burger', 'menu'])">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <RouterLink class="router-link-navbar" to="/courses">Course Planner</RouterLink>
          </div>
          <div class="navbar-item">
            <RouterLink class="router-link-navbar" to="/sequence">Requirements Tracker</RouterLink>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link router-link-navbar">uOttawa Resources</a>
              <div class="navbar-dropdown">
                <a href="https://www.uottawa.ca/faculty-social-sciences/programs/political-science-course-sequences-all#honours-ps" target="_blank" class="navbar-item dropdown-item">Course Sequence</a>
                <a href="https://catalogue.uottawa.ca/en/undergrad/honours-bsocsc-political-science/#programrequirementstext" target="_blank" class="navbar-item dropdown-item">Major Requirements</a>
                <a href="https://catalogue.uottawa.ca/en/undergrad/minor-law/#programrequirementstext" target="_blank" class="navbar-item dropdown-item">Law Minor Requirements</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </nav>
  <div id="app">
    <div id="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
function handleModal(ids) {
  ids.forEach(id => {
    const elem = document.getElementById(id);
    elem.classList.toggle('is-active');
  });
}
</script>

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

.navbar-link.router-link-navbar:hover {
  color: black
}

@media (max-width: 1024px) {
  .router-link-navbar {
    color: black;
  }
  #home-anchor {
    color: white;
  }
  .has-dropdown {
    border: 1px solid black;
  }
}
</style>