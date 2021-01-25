<template>
  <div class="event-card">
    <div class="card" :style="style"> 
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">{{ event.name }}</h2>
        <!--<small class="event-date">{{ event.description }}</small>-->
        <span>{{ event.description }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'event',
    'event.featuredImage',
  ],
  computed: {
    style() {
    return 'background-image: ' + 'url(' + this.event.featuredImage + ')';
    }
  } 
}
</script>
<style lang="scss" scoped>
  .card {
    //background-image:url('https://images.unsplash.com/photo-1596069804545-bd71b5b67f6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    height: 200px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    padding-top: 50px;
    position: absolute;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.35);
    top: 0;
    padding: 10px;
    height: 200px;
    width: 100%;
    span {
      font-size: 18px;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
    h2 {
      margin-top: 10px;
    }
  }
  .event-date {
    background-color: #151515;
    color: #FFF;
    font-size: .75em;
    padding: 2px 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>