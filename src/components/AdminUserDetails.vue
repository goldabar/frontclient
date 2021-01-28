<template>
  <div class="aud__content">
      <div class="aud__card-content">
        <div class="aud__data">
          <div class="aud__user-name">Imię: {{ firstName }}</div>
          <div class="aud__user-name">Nazwisko: {{ lastName }}</div>
          <div class="aud__user-name">Mail: {{ mail }}</div>
          <div class="aud__user-id">Rezerwacja: {{ reservation }}</div>
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
      userDetails: {},
    };
  },
  props: {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    mail: {
      type: String,
      default: "",
    },
    reservation: Array,
  },
  methods: {
    onDeleteUser() {
      console.log("delete user");
      console.log(this.userData.identityId);
      axios
          .delete("http://localhost:5000/api/User/" + `${this.userData.identityId}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log("deleted user");
            console.log(res);
            this.$store.dispatch('logout');
            router.push('/');
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>