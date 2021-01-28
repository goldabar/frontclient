<template>
  <div class="ap">
    <div class="hero">
      <h1 class="title">Admin panel</h1>
    </div>
    <h2 class="subtitle">
      <div>
        <br>
        <strong>Konta na portalu</strong>
        <li v-for="user in users" :key="user.id">
          <AdminUserDetails
              :first-name="user.firstName"
              :last-name="user.lastName"
              :mail="user.email"
          />
        </li>
      </div>
    </h2>

    <div class="ap__content">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminUserDetails from "@/components/AdminUserDetails";
export default {
  components: {AdminUserDetails },
  data() {
    return {
      nameNew: "",
      users: [],
      userData: {},
    };
  },
  created() {
    this.userData = this.$store.getters.userData;
    console.log("created");
    this.getUserData();
  },
  methods: {
    async getUserData(){
      axios
          .post("http://localhost:5000/api/User/list", {})
          .then((res) => {
            console.log(res.data);
            this.users = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },


  },
};
</script>


<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
</style>