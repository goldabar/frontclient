<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <date-picker placeholder="Wybierz datę" valueType="format" format="DD-MM-YYYY" v-model="time2" type="date"></date-picker>
          <div v-if="time2 !== null">
          
          <h2 class="subtitle">
          <br>
          <strong>Wybierz godzinę:</strong>
          <div v-if="time2" class="buttons has-addons">  
            <button :click="selectedHours" class="button">10:00</button>
            <button class="button" selected>11:00</button>
            <button class="button">12:00</button>
            <button class="button" disabled>13:00</button>
            <button class="button">14:00</button>
            <button class="button">15:00</button>
            <button class="button">16:00</button>
            <button class="button" disabled>17:00</button>
            <button class="button">18:00</button>
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
          <!--<v-select :items="event.weapons" label="name" :selected="event.weapons.name" :options="event.weapons" multiple v-model="selectedWeapons" placeholder="Wybierz broń">
            <template slot="option" slot-scope="option">
              <img :src="option.image">
              {{ option.name }}
            </template>>
          </v-select> -->
        
          <h2 class="subtitle ">
            
          <br>
          <strong v-if="time2 !== null">Data rezerwacji:</strong> {{time2}}
  
          <div v-if="selectedWeapons.length">
            <br>
          <strong>Wybrane bronie:</strong> 
          <!-- <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter"> -->
          <div v-for="selectedWeapon in selectedWeapons" :selectedWeapon="selectedWeapon.name" :key="selectedWeapon.name">
            {{selectedWeapon.name}}
          </div>
          </div>  
           <!-- <strong>Godzina:</strong> {{ event.time }} -->
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <!-- <p class="is-size-4 description">{{ event.description }}</p> -->
        <!--<p class="is-size-5"><strong>Lokacja:</strong> {{ event.location }}</p>-->
        <p class="is-size-5"><strong>Kategoria:</strong> {{ event.description }}</p>
                          
            <div class="column is-one-third">
              <img :src="event.featuredImage">
            </div>
         
        
      </div>
    </section>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js';
//import Multiselect from 'vue-multiselect';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
//import Vue from 'vue';
//import vSelect from 'vue-select';
import "vue-select/src/scss/vue-select.scss";
//Vue.component('v-select', VueSelect.VueSelect);
export default { 
  components: {
    DatePicker,
    //vSelect,
    //Multiselect,
  },
  name: 'EventSingle',
  data () {
    return {
      clickedButton: false,
      selectedHours: [],
      selectedWeapons: [],
      time2: null,
      event: {},
  
    }    
  },
  created() {
    this.getEventData();
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



