<template>
  <div class="hello">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-navbar toggleable="lg">
              <b-navbar-brand href="#">
                <router-link to="/">SAMANTHA FLAGLER</router-link>
              </b-navbar-brand>

              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                  <b-navbar-nav right>
                    <b-nav-item>
                      <router-link to="/Portfolio">Portfolio</router-link>
                    </b-nav-item>
                    <b-nav-item href="#">
                      <router-link to="/Resume">Resume</router-link>
                    </b-nav-item>
                    <b-nav-item href="#">
                      <router-link to="/Contact">Contact</router-link>
                    </b-nav-item>
                  </b-navbar-nav>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </b-col>
        </b-row>
      </b-container>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Navigation',

}
</script>

<style scoped>

  a{
    color: #000;
  }

</style>



