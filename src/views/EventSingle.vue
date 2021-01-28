<script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <form @submit.prevent="onSubmit">
            <div>
            <h1 class="title">
              {{ event.name }}
            </h1>
            <h2 class="subtitle">
              <strong>Kategoria: </strong>{{event.description}}
            <br>
            <br>
              <strong>Wybierz datę: </strong>
            </h2>
            <date-picker
                placeholder="Wybierz datę"
                valueType="format"
                format="YYYY-MM-DD"
                v-model="time2"
                @change="changeHandler"
                type="date"
            ></date-picker>
            </div>

            <div v-if="time2 !== null">
              <h2 class="subtitle">
                <br />
                <strong>Wybierz godzinę:</strong>
                <br>
                <br />
                <template>

                  <div>
                    <b-form-group
                        v-slot="{ ariaDescribedby }"
                    >
                      <b-form-checkbox-group
                          buttons
                          name="buttons-2"
                          v-model="selected"
                          :options="slots"
                          :aria-describedby="ariaDescribedby"                       
                          size="md"                     
                          button-variant="light"
                          value-field="id"
                          text-field="hour"

                      ></b-form-checkbox-group>
                    </b-form-group>
                  </div>
                </template>
              </h2>
              <h2></h2>
            </div>
            <h2 class="subtitle">
              <strong>Wybierz broń: </strong>
            </h2>
            <v-select
                class="style-chooser"
                :items="filteredWeapons"
                label="name"
                :selected="filteredWeapons.name"
                :options="filteredWeapons"
                multiple
                v-model="selectedWeapons"
                placeholder="Wybierz broń"
            >
              <template slot="option" slot-scope="option">
                <img :src="option.pictureUrl" />
                {{ option.name }} </template
              >>
            </v-select>

            <!--<h2 class="subtitle">
              <br />
              <strong v-if="time2 !== null">Data rezerwacji:</strong> {{ time2 }}
              <div v-if="selected.length">
                <strong>Godzina:</strong>  {{selected}}
              </div>
              <div v-if="selectedWeapons.length">
                <br />
                <strong>Wybrane bronie:</strong>
                <div
                    v-for="selectedWeapon in selectedWeapons"
                    :selectedWeapon="selectedWeapon.name"
                    :key="selectedWeapon.name"
                >
                  {{ selectedWeapon.name }}
                </div>
              </div>
            </h2>-->
            <br>
            <br>
            <button class="button is-light">Rezerwuj</button>
          </form>



          <!--<div v-for="slot in slots" :key="slot.id">
            {{ slot }}
          </div>-->
        </div>
      </div>
    </section>
   <!-- <section class="event-content">
      <div class="container">
        <div class="column is-one-third">
          <img :src="event.featuredImage" />
        </div>
      </div>
    </section> -->
    
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
//import Multiselect from 'vue-multiselect';
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
//import Vue from 'vue';
import vSelect from "vue-select";
import "vue-select/src/scss/vue-select.scss";
import axios from "axios";
import BootstrapVue from 'bootstrap-vue';
//Vue.component('v-select', VueSelect.VueSelect);
export default {
  computed: {
    filteredWeapons: function () {
      return this.weapons.filter(
        (weapon) => weapon.weaponType === this.event.category
      );
    },
  },
  components: {
    DatePicker,
    vSelect,
    BootstrapVue,
  },

  name: "EventSingle",
  data() {
    return {
      userDetails: {},
      clickedButton: false,
      selectedHours: [],
      selectedWeapons: [],
      time2: new Date().toJSON().slice(0,10),
      selected: [],
      event: {},
      weapons: [],
      DateParam: this.time2,
      slots: [],
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
    };
  },
  created() {
    this.userData = this.$store.getters.userData;
    this.getEventData();
    this.getWeaponsData();
    this.getSlotsData();
  },
  methods: {
    changeHandler() {
      this.getSlotsData();
    },
    async getEventData() {
      EventService.getEventSingle(this.$route.params.id).then(
        ((event) => {
          this.$set(this, "event", event);
        }).bind(this)
      );
    },
    async getWeaponsData() {
      EventService.getWeapons().then(
        ((weapons) => {
          this.$set(this, "weapons", weapons);
        }).bind(this)
      );
    },
    async getSlotsData() {
      axios
        .post("http://localhost:5000/api/Slot/list", {
            DateTime: this.time2,
            TrackId: this.event.id,      
        })
        .then(
          (slots => {
            this.$set(this, "slots", slots.data);
          }).bind(this)
        );
    },
    onSubmit() {
      console.log("creat reservation");


      // TODO - pass user ID to this whole component to send it to backend if needed
      const weaponsArray = this.selectedWeapons.map(function (obj){
        return obj.id;
      })
      console.log(weaponsArray)

      const data = JSON.stringify({
        userId: this.userData.identityId,
        trackId: parseInt(this.$route.params.id),
        weaponIds: weaponsArray,
        slotIds: this.selected,

      });
      console.log(data);
      // TODO - this method will be fired after clicking form button
      axios.post("http://localhost:5000/api/Reservation/create", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log("response");
        console.log(res);
      })
    }
  },
};
</script>
<style>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: #eff0f5;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: normal;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
  
  .hero {
  
  background-image: url("https://i.imgur.com/rBqgQbY.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
}
</style>
