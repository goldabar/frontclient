<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <date-picker placeholder="Wybierz datę" format="DD-MM-YYYY" v-model="time2" type="date"></date-picker>
          <v-select  v-model="selectedWeapons" :items="event.weapons" :options="event.weapons" multiple placeholder="Wybierz broń" width="101px">
           <!-- <template v-slot:item="{ item }">
              <img :srv="item.image">
              <span>{{item.name}}</span>
            </template>> -->
          </v-select>
          <h2 class="subtitle ">
            <strong v-if="time2 !== null">Data rezerwacji:</strong> {{time2}}
            
            <br>
           <!-- <strong>Godzina:</strong> {{ event.time }} -->
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Lokacja:</strong> {{ event.location }}</p>
        <p class="is-size-5"><strong>Kategoria:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="event.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
//import Vue from 'vue';
import vSelect from 'vue-select';
import "vue-select/src/scss/vue-select.scss";
//Vue.component('v-select', VueSelect.VueSelect);
export default {
  components: {
    DatePicker,
    vSelect
  },
  name: 'EventSingle',
  data () {
    return {
      time2: null,
      event: {},
  
    }    
  },
  created() {
    this.getEventData(); // NEW - call getEventData() when the instance is created
  },
  methods: {
    async getEventData() {
      // Use the eventService to call the getEventSingle() method
      EventService.getEventSingle(this.$route.params.id)
      .then(
        (event => {
          this.$set(this, "event", event);
        }).bind(this)
      );
    }
  }
}
</script>

