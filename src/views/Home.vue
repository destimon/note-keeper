<template>
  <div class="home">
    <div class="nk-container">
      <div class="nk-header">Notes</div>
      <hr />
      <CreateNew />
      <NotesList />
    </div>
  </div>
</template>

<script>
import NotesList from '@/components/c-notes-list';
import CreateNew from '@/components/c-create-new';

export default {
  name: 'Home',
  components: {
    NotesList,
    CreateNew
  },
}
</script>

<style scoped>
@import '../assets/main.sass';


</style>