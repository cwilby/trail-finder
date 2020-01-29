<template>
  <div>
    <b-navbar wrapper-class="container" type="is-light">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="@/assets/logo.svg"
            alt="Create automated trail paths using AllTrails API."
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          About
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light" @click="open">
              Open App
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    
    <div class="container content" style="margin-top: 1em">
      <h1>TrailFinder</h1>
      <p>Create automated trail paths using the AllTrails API.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="sass"></style>
