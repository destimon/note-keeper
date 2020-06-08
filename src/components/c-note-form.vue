<template>
  <div class="nk-note-form">
    <div class="nk-block">
      <label>Note title</label>
      <input type="text" v-model="title" name="notetitle" placeholder="Give name to the note..">
    </div>

    <div class="nk-block">
      <button class="nk-button">Add Todo</button>

      <div class="nk-container">
        <template v-for="(todo, i) in todos">
          <label :key="i" class="nk-checkbox-container">{{ todo.label }}
            <input type="checkbox" :checked="(todo.isDone) ? 'checked' : ''">
            <span class="nk-checkmark"></span>
          </label>
        </template>
      </div>
    </div>

    <input @click="submitNote()" id="nk-button-form" class="nk-button" type="button" value="Submit">
  </div>
</template>

<script>

export default {
  props: {
    titleEdit: {
      type: String
    }
  },
  data() {
    return {
      title: '',
      todos: []
    }
  },
  methods: {
    submitNote() {
      const note = {
        title: this.title,
        todos: this.todos
      }

      this.$store.dispatch('addNote', note)
    }
  },
  mounted() {
    console.log(this.titleEdit);
  }
}
</script>

<style>
#nk-button-form {
  width: 100%;
}

</style>