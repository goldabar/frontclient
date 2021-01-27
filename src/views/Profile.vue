<template>
  <div class="ma">
    <div class="hero">
      <h1 class="hero__header">Mój profil</h1>
    </div>
    <div class="ma__content">
      <div class="ma__user-info"></div>
      <div class="ma__cards">

          <div class="ma__user-info">

            <div class="ma__user-details">
              <div class="ma__user-name">Imię: {{ userDetails.firstName }}</div>
              <div class="ma__user-name">
                Nazwisko: {{ userDetails.lastName }}
              </div>
              <div class="ma__user-name">Rola: {{ userDetails.identityRole }}</div>
              <div class="ma__user-id">ID: {{ userDetails.identityId }}</div>
              <div class="ma__user-res">
                <ul class="ma__content">
                  Rezerwacje:
                  <li v-for="reservation in reservation" :key="reservation.id">
                    {{reservation.track.name}}
                    Data rozpoczęcia: {{reservation.slots.map(function (obj){
                              return obj.startDateTime})}}
                    Bronie: {{reservation.weapons.map(function (obj){
                              return obj.name})}}
                    Status rezerwacji: {{reservation.reservationStatus}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ma__settings">
            <button class="ma__button ma__button--delete" @click="showWarning">
              Usuń konto
            </button>
          </div>
          <div class="ma__warning" v-if="isWarningVisible">
            <div class="ma__warning-text">
              Tej akcji nie można cofnąć. Kontunuować?
            </div>
            <div class="ma__warning-buttons">
              <button
                  class="ma__button ma__button--cancel"
                  @click="hideWarning"
              >
                Nie
              </button>
              <button
                  class="ma__button ma__button--delete"
                  @click="onDeleteUser"
              >
                Tak
              </button>
            </div>
          </div>
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
        role: '',
        userDetails: {},
        isWarningVisible: false,
        reservation: {},
        slots: [],
      };
    },
    created() {
      console.log("created");
      console.log(this.$store.getters.userData);
      this.userDetails = this.$store.getters.userData;
      this.getReservationData();


    },
    methods: {
      async getReservationData(){
        axios
            .post("http://localhost:5000/api/Reservation/list", {
              userData: this.userDetails.id,
            })
            .then(
                (reservation => {
                  this.$set(this, "reservation", reservation.data);
                }).bind(this)
            );
      },

      showWarning() {
        this.isWarningVisible = true;
      },
      hideWarning() {
        this.isWarningVisible = false;
      },
      onDeleteUser() {
        console.log("delete user");
        axios
            .delete("/account/deleteUser" + `?id=${this.userDetails.id}`, {
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

<style scoped>

</style>