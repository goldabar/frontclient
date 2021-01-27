<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="login-panel bg-white text-left">
          <h1 class="display-3 font-weight-bold">Logowanie</h1>

          <form class="login" @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email" class="input-label">Email</label>     
              <input
                required
                v-model="email"
                type="email"
                class="form-control"
                placeholder="email@example.com"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="password" class="input-label">Hasło</label>
              <input
                required
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Hasło"
                id="password"
              />
            </div>
            <br>
            <div class="form-group d-flex justify-content-center">
              <button class="btn btn-primary w-25" type="submit">Zaloguj</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
      
     <!-- <hr />
      <button type="submit">Zaloguj</button>
    </form>
  </div>-->
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
          router.push("/");
          console.log(this.$store.getters.userData);
        })
        .catch((err) => {
          console.log(err);
          // this.isDataNotValid = true;
        });
    },
  },
};
</script>
<style lang="scss">
  .login-panel{
    padding: 200px 0;
}
</style>
