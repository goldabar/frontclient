<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <date-picker placeholder="Wybierz datę" valueType="format" format="DD-MM-YYYY" v-model="time2" type="date"></date-picker>
          <v-select :items="event.weapons" :options="event.weapons" v-model="event.weapons.name" hide-selected multiple placeholder="Wybierz broń" hint="Wybierz broń do rezerwacji" persistent-hint>
              <template slot="option" slot-scope="option">
              <img :src="option.image">
              {{ option.name }}
            </template>> -->
          </v-select>
          <h2 class="subtitle ">
            <strong v-if="time2 !== null">Data rezerwacji:</strong> {{time2}}
            <!--<button>12:00</button><button>13:00</button><button>14:00</button><button>15:00</button><button>16:00</button>-->
            
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
      e7: [],
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

