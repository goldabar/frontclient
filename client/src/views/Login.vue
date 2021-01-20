<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Zaloguj</h1>
      <label>Email</label>
      <input
        required
        v-model="email"
        type="email"
        placeholder="email@example.com"
      />
      <label>Hasło</label>
      <input required v-model="password" type="password" placeholder="Hasło" />
      <hr />
      <button type="submit">Zaloguj</button>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "../store/actions/auth";
export default {
  name: "login",
  data() {
    return {
      username: "dogo",
      password: "dogy"
    };
  },
  methods: {
    login: function() {
      const { email, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>
