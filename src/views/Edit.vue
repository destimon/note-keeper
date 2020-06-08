<template>
  <div class="edit">
    <div class="nk-container">
      <div v-if="this.$route.query.action === 'edit'">
        <div class="nk-header">Edit note</div>
      </div>
      <div v-else>
        <div class="nk-header">Create note</div>
      </div>
      <hr/>
      <NoteForm :titleEdit="this.$route.query.title"/>
    </div>
  </div>
</template>

<script>
import NoteForm from '@/components/c-note-form';

export default {
  components: {
    NoteForm
  },
}
</script>

<style scoped>
@import '../assets/main.sass';


</style>