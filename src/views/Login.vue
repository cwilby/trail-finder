<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <loadmask :active="loading" />
      <img src="@/assets/logo.svg" />
      <div v-if="finished">
        <b-notification :closable="false" type="is-success">
          <div class="has-text-centered">
            Check your inbox for a link to sign in!
          </div>
        </b-notification>
      </div>
      <div v-else>
        <b-field label="Email">
          <b-input ref="email" v-model="email"></b-input>
        </b-field>
        <p class="has-text-centered">
          TrailFinder uses
          <a
            href="https://medium.com/@kelvinvanamstel/should-we-embrace-magic-links-and-leave-passwords-alone-c73db7007fc4"
            >passwordless authentication</a
          >.
        </p>
        <b-button :disabled="!readyToLogin" type="is-info" class="is-fullwidth"
          >Login</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    finished: false,
    showErrors: false,
    email: ""
  }),

  mounted() {
    this.$nextTick(() => {
      this.$refs.email.focus();
    });
  },

  computed: {
    readyToLogin() {
      return (
        this.email &&
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
          this.email
        )
      );
    }
  },

  methods: {
    async login() {
      if (!this.readyToLogin) return;

      try {
        this.loading = true;
        await this.$store.dispatch('requestMagicLink', this.email);
        this.finished = true;
      } catch (e) {
        this.error = 'We done went and broke.  Please try again later.'
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="sass">
.login-container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  height: 100vh

  form
    width: 25em
    border: 1px solid #3EA9AF
    border-radius: .5em
    padding: 3.5em

    img
      margin-bottom: 1em

    p
      margin-top: 1em

    button
      margin-top: 2em
</style>
