<template>
  <div>
    <form class="login" @submit.prevent="onSubmit">
      <h1>Zaloguj</h1>
      <label>Email</label>
      <label>
        <input
          required
          v-model="email"
          type="email"
          placeholder="email@example.com"
        />
      </label>
      <label>Hasło</label>
      <label>
        <input
          required
          v-model="password"
          type="password"
          placeholder="Hasło"
        />
      </label>
      <hr />
      <button type="submit">Zaloguj</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";
// import router from "@/router/router";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("login");
      const formData = {
        email: this.email,
        password: this.password,
      };
      // this.$store.dispatch('login', formData);
      // TODO - test
      const data = JSON.stringify({
        email: formData.email,
        password: formData.password,
      });
      axios
        .post("/account/login", data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          console.log("login");
          console.log(res.data);
          this.$store.commit("authUser");
          this.$store.commit("storeUser", res.data);
          router.push("/my-profile");
        })
        .catch((err) => {
          console.log(err);
          // this.isDataNotValid = true;
        });
    },
  },
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
