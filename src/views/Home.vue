<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Strzelnica</h1>
          <h2 class="subtitle">Zarejestruj się by zarezerwować tor</h2>
          <h2 class="subtitle">Wybierz tor, który chcesz zarezerwować</h2>
          <div class="button-block">
          </div>
        </div>
      </div>
    </section>
    <EventsList />
  </div>
</template>
<script>
import EventsList from "../components/EventsList";

export default {
  name: "home",
  components: {
    EventsList,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url("https://center-a.com/assets/media/glavnaya-1_banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
}

.hero-body .title {
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 90px;
  opacity: 1;
}

.subtitle {
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.6);
  font-size: 50px;
  opacity: 1;
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;

  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}

.is-xl {
  font-size: 1.7rem;
}
</style>
