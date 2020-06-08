<template>
  <div class="nk-container">
    <div class="nk-subheader">List of notes</div>
    <template v-for="(note, i) in notes">
      <div @click="editNote(note.title)" class="nk-note-block" :key="i">
        <p class="nk-subheader">{{ note.title }}</p>
        <template v-for="(todo, i) in note.todos"> 
          <p :key="i">{{ todo }}</p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'c-notes-list',
  computed: mapState([
     'notes',
    ]
  ),
  methods: {
    editNote(title) {
      this.$router.push({ path: 'edit', query: { action: 'edit', title }})
    }
  }
}
</script>

<style>

</style>>