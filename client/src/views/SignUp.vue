<template>
  <div class="su">
      TEST
    <div class="hero">
      <h1 class="hero__header">Rejestracja</h1>
    </div>
    <div class="su__content">
      <div class="su__error-box" v-if="isDataNotValid">
        <div class="su__error-message">
          Błędne dane rejestracji
        </div>
      </div>
      <div class="su__box">
        <form class="su__form"  @submit.prevent="onSubmit">
          <label
              for="first-name"
              class="input__label"
          >
            Imię
          </label>
          <input
              class="input__input"
              type="text"
              id="first-name"
              v-model="firstName"
          />
          <label
              for="last-name"
              class="input__label"
          >
            Nazwisko
          </label>
          <input
              class="input__input"
              type="text"
              id="last-name"
              v-model="lastName"
          />
          <label
              for="email"
              class="input__label"
          >
            Email
          </label>
          <input
              class="input__input"
              type="text"
              id="email"
              v-model="email"
          />
          <label
              for="password"
              class="input__label"
          >
            Hasło
          </label>
          <input
              class="input__input"
              type="password"
              id="password"
              v-model="password"
          />
          
          <button class="su__button" type="submit">Zarejestruj się</button>
        </form>
      </div>
    </div>
  </div>
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
      isDataNotValid: false
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
            router.push('/sign-in');
          })
          .catch(err => {
            console.log(err);
            this.isDataNotValid = true;
          });
    }
  }
}
</script>


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
