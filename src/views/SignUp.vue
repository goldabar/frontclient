<template>
  <section class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="login-panel bg-white text-left">
             <h1 class="display-3 font-weight-bold">Rejestracja</h1>

            <form class="signup"  @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="first-name" class="input-label">Imię</label>
                <input
                  required
                  class="form-control"
                  type="firstname"
                  id="first-name"
                  v-model="firstName"
                  placeholder="Wpisz imię"
                />
              </div>
                <div class="form-group">
                <label for="last-name" class="input-label">Nazwisko</label>
                <input
                  required
                  class="form-control"
                  type="lastname"
                  id="last-name"
                  v-model="lastName"
                  placeholder="Wpisz nazwisko"
                />
                </div>
                <div class="form-group">
                <label for="email" class="input-label">Adres e-mail</label>
                <input
                  required
                  class="form-control"
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="Wpisz adres e-mail"
                />
                </div>
                <div class="form-group">
                <label for="password" class="input-label">Hasło</label>
                <input
                  required
                  class="form-control"
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="Wpisz hasło"
                />
                </div>
                <br>
                <div class="form-group d-flex justify-content-center">
                  <button class="btn btn-primary w-25" type="submit">Zarejestruj</button>
                </div>
              </form>
            </div>
          </div>
      </div>       
  </section>
</template>

<script>
import axios from "axios";
import router from "@/router/router";

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('signup');
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }
      // this.$store.dispatch('signup', formData)
      // TODO - test
      const data = JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      axios.post('/account/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then(res => {
            console.log('signup');
            console.log(res);
            router.push('/Login');
          })
          .catch(err => {
            console.log(err);
          });
    }
  }
}
</script>

<style>
.su {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<style lang="scss">
.input {
  &__input {
    &:not(last-child) {
      margin-bottom: 24px;
    }
  }

  &__label {
    margin-bottom: 24px !important;
  }
}
</style>
