<template>
  <div class="nk-container">
    <div class="nk-subheader">
      Options
    </div>
    <button @click="createNew()" class="nk-button">Create new</button>
    <button @click="deleteAll()" class="nk-button">Delete all</button>
  </div>
</template>

<script>
export default {
  methods: {
    createNew() {
      this.$router.push({ path: 'edit', query: {
        action: 'create', 
      }})
    },
    deleteAll() {
      this.$store.dispatch('deleteAllNotes');
    }
  }
}
</script>

<style scoped>
@import '../assets/main.sass';


</style>