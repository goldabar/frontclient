<template>
  <div class="ma">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Mój profil</h1> 
          <br>
            <h2 class="subtitle"> 
              <div>
                <strong>Imię: </strong> {{ userDetails.firstName }}
              </div>
              <div>
                <strong>Nazwisko: </strong>{{ userDetails.lastName }}
              </div>
              <div v-if = "userDetails.identityRole === 1" >
                <strong>Rola: </strong>użytkownik
              </div>
              <div v-else>
                <strong>Rola: </strong>admin
              </div>
              <div>
                <strong>ID: </strong>{{ userDetails.identityId }}
              </div>
              <br>
              <br>
              <div>
                
                  <strong>Rezerwacje:</strong>
                  <li v-for="reservation in reservation" :key="reservation.id">
                    {{reservation.track.name}}
                    Data rozpoczęcia: {{reservation.slots.map(function (obj){
                              return obj.startDateTime})}}
                    Bronie: {{reservation.weapons.map(function (obj){
                              return obj.name})}}
                    Status rezerwacji: {{reservation.reservationStatus}}
                  </li>
                
              </div>
            </h2>
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
      //this.getReservationData();


    },
    mounted(){
      this.getReservationData();
    },
    methods: {
      /*addAsset(){
        var self = this; //----the script I have to add
        axios.post('/api/asset',self.formAddAsset)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
      },*/
      async getReservationData(){
        var self = this.userDetails.id;
        axios
            .post("http://localhost:5000/api/Reservation/list", {
              userData: self,
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

<style>

</style>