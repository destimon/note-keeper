<template>
  <div class="nk-container">
    <div class="nk-subheader">List</div>
    <template v-for="(note, i) in notes">
      <div :key="i">
        <p>{{ note.title }}</p>
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
}
</script>

<style>

</style>>