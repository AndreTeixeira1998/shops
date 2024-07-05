<template>
  <div>
    <b-modal v-model="isActive" :width="360">
      <div class="card">
        <form action="">
          <div class="modal-card padding-4" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title is-uppercase has-text-primary">
                Sign in
              </p>
              <button
                type="button"
                class="delete"
                @click="$emit('modalClosed')"
              />
            </header>
            <section class="modal-card-body" style="padding-bottom: 20px">
              <b-field label="Email">
                <b-input
                  type="email"
                  placeholder="Your email"
                  required
                  v-model="username"
                >
                </b-input>
              </b-field>

              <b-field label="Password">
                <b-input
                  type="password"
                  password-reveal
                  placeholder="Your password"
                  required
                  v-model="password"
                >
                </b-input>
              </b-field>

              <b-checkbox v-model="rememberMe">Remember me</b-checkbox>
              <p class="is-size-7 has-text-centered has-text-danger">
                {{ error }}
              </p>
            </section>
            <div class="modal-card-foot" style="justify-content: center">
              <b-button
                label="Login"
                type="is-primary"
                :disabled="!password || !isFormValid() || loading"
                @click="userLogin()"
              ></b-button>
            </div>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { login } from 'pinelab-storefront';

export default {
  data() {
    return {
      isActive: false,
      username: '',
      password: '',
      rememberMe: false,
      loading: false,
      error: '',
    };
  },
  props: {
    isModalActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    isFormValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+$/;
      if (!emailRegex.test(this.username)) {
        return false;
      }
      return true;
    },
    async userLogin() {
      try {
        this.error = '';
        this.loading = true;
        const result = await login(
          this.username,
          this.password,
          this.rememberMe,
          {
            vendure: this.$vendure,
            emitter: this.$emitter,
          }
        );
        console.log(result);
        this.$emit('modalClosed');
        this.$buefy.notification.open({
          message: 'Logged in successfully!',
          type: 'is-success',
          progressBar: true,
          pauseOnHover: true,
          position: 'is-bottom-right',
          duration: 5000,
        });
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    clearform() {
      this.username = '';
      this.password = '';
      this.rememberMe = false;
    },
  },
  watch: {
    isModalActive(newVal) {
      this.isActive = newVal;
    },
    isActive(newVal) {
      if (newVal === false) {
        this.$emit('modalClosed');
      }
    },
  },
};
</script>

<style scoped>
.modal-card-foot {
  display: flex;
  justify-content: center;
}
</style>
