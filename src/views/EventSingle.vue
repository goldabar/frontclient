<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <date-picker placeholder="Wybierz datę" valueType="format" format="DD-MM-YYYY" v-model="time2" type="date"></date-picker>
          <!--<div>
              <label class="typo__label">Wybierz broń:</label>
              <multiselect v-model="value" placeholder="Wybierz broń" label="name" track-by="name" :options="event.weapons" :option-height="104" :custom-label="customLabel" :show-labels="false">
                <template slot="singleLabel" slot-scope="props"><img class="option__image" :src="props.option.image"><span class="option__desc"><span class="option__name">{{ props.option.name }}</span></span></template>
                <template slot="option" slot-scope="props"><img class="option__image" :src="props.option.image">
                  <div class="option__desc"><span class="option__name">{{ props.option.name }}</span><span class="option__small">{{ props.option.desc }}</span></div>
                </template>
              </multiselect>
          </div> -->
          <v-select :items="event.weapons" :options="event.weapons" v-model="event.weapons.name" hide-selected multiple placeholder="Wybierz broń" hint="Wybierz broń do rezerwacji" persistent-hint>
              <template slot="option" slot-scope="option">
              <img :src="option.image">
              {{ option.name }}
            </template>>
          </v-select>
          <h2 class="subtitle ">
            <strong v-if="time2 !== null">Data rezerwacji:</strong> {{time2}}
            <button v-if="time2">12:00</button><button v-if="time2">13:00</button><button v-if="time2">14:00</button><button v-if="time2">15:00</button><button v-if="time2">16:00</button>
            
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
//import Multiselect from 'vue-multiselect';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
//import Vue from 'vue';
import vSelect from 'vue-select';
import "vue-select/src/scss/vue-select.scss";
//Vue.component('v-select', VueSelect.VueSelect);
export default {
  components: {
    DatePicker,
    vSelect,
    //Multiselect,
  },
  name: 'EventSingle',
  data () {
    return {
      value: [],
      time2: null,
      event: {},
  
    }    
  },
  created() {
  },
  methods: {
  }
}
</script>

