<template>
  <div class="edit">
    <div class="nk-container">
      <div class="nk-header">Edit</div>
      <hr/>
      <NoteForm />
    </div>
  </div>
</template>

<script>
import NoteForm from '@/components/c-note-form';

export default {
  components: {
    NoteForm
  }
}
</script>

<style scoped>
@import '../assets/main.sass';


</style>