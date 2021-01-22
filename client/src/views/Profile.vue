<template>
<div>test</div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log(this.$store.getters.userData)
  }
}
</script>

<style scoped>

</style>