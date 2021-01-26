<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <date-picker
            placeholder="Wybierz datę"
            valueType="format"
            format="YYYY-MM-DD"
            v-model="time2"
            @change="changeHandler"
            type="date"
          ></date-picker>

          <div v-if="time2 !== null">
            <h2 class="subtitle">
              <br />
              <strong>Wybierz godzinę:</strong>
              <br />
              <div>
                <!--<b-form-checkbox-group
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-checkbox-group>
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
              </div>
            </h2>
            <h2></h2>
          </div>
          <!--<div>
              <label class="typo__label">Wybierz broń:</label>
              <multiselect v-model="value" placeholder="Wybierz broń" label="name" track-by="name" :options="event.weapons" :option-height="104" :custom-label="customLabel" :show-labels="false">
                <template slot="singleLabel" slot-scope="props"><img class="option__image" :src="props.option.image"><span class="option__desc"><span class="option__name">{{ props.option.name }}</span></span></template>
                <template slot="option" slot-scope="props"><img class="option__image" :src="props.option.image">
                  <div class="option__desc"><span class="option__name">{{ props.option.name }}</span><span class="option__small">{{ props.option.desc }}</span></div>
                </template>
              </multiselect>
          </div> -->
          <v-select
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

          <h2 class="subtitle">
            <br />
            <strong v-if="time2 !== null">Data rezerwacji:</strong> {{ time2 }}
            <div v-if="selectedWeapons.length">
              <br />
              <strong>Wybrane bronie:</strong>
              <button>test</button>
              <div
                v-for="selectedWeapon in selectedWeapons"
                :selectedWeapon="selectedWeapon.name"
                :key="selectedWeapon.name"
              >
                {{ selectedWeapon.name }}
              </div>

              <!-- <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter"> -->
              <!--<div v-for="selectedWeapon in selectedWeapons" :selectedWeapon="selectedWeapon.name" :key="selectedWeapon.name">
            {{selectedWeapon.name}}
          </div>-->
            </div>

            <!-- <strong>Godzina:</strong> {{ event.time }} -->
          </h2>
          <div v-for="slot in slots" :key="slot.startDateTime">
            {{ slot }}
          </div>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <!-- <p class="is-size-4 description">{{ event.description }}</p> -->
        <!--<p class="is-size-5"><strong>Lokacja:</strong> {{ event.location }}</p>-->
        <p class="is-size-5">
          <strong>Kategoria:</strong> {{ event.description }}
        </p>

        <div class="column is-one-third">
          <img :src="event.featuredImage" />
        </div>
      </div>
    </section>
<!--    TODO - test-->
    <form @submit.prevent="onSubmit">
      <v-select
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
      <button>test</button>
    </form>

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
    //Multiselect,
  },

  name: "EventSingle",
  data() {
    return {
      clickedButton: false,
      selectedHours: [],
      selectedWeapons: [],
      time2: null, // new Date().toJSON().slice(0,10),
      event: {},
      weapons: [],
      DateParam: this.time2,
      slots: {},
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
    };
  },
  created() {
    this.getEventData();
    this.getWeaponsData();
    //this.getSlotsData();
  },
  methods: {
    changeHandler() {
      this.getSlotsData();
    },
    async getEventData() {
      // Use the eventService to call the getEventSingle() method
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
        })
        .then(
          ((slots) => {
            this.$set(this, "slots", slots.data);
          }).bind(this)
        );
    },
    onSubmit() {
      console.log("send form request");

      // TODO - get variables form data()
      // TODO - pass user ID to this whole component to send it to backend if needed
      const data = JSON.stringify({
        selectedWeapons: this.selectedWeapons
      });
      // TODO - this method will be fired after clicking form button
      axios.post('endpoint', data, {
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
