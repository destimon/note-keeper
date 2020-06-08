<template>
  <div class="nk-note-form">
    <div class="nk-block">
      <label>Note title</label>
      <input type="text" v-model="title" name="notetitle" placeholder="Give name to the note..">
    </div>

    <div class="nk-block">
      <button class="nk-button">Add Todo</button>

      <div class="nk-container">
        <label class="nk-checkbox-container">One
          <input type="checkbox" checked="checked">
          <span class="nk-checkmark"></span>
        </label>
      </div>
    </div>

    <input id="nk-button-form" class="nk-button" type="button" value="Submit">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'asds',
      todos: []
    }
  },
  mounted() {
    
  }
}
</script>

<style>
#nk-button-form {
  width: 100%;
}

</style>