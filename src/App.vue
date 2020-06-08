<template>
  <div id="app">
    <ul class="nav">
      <li><router-link class="nav-li" to="/">Home</router-link></li>
      <li><router-link class="nav-li" to="/edit">Edit</router-link></li>
      <li><router-link class="nav-li" to="/about">About</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<style lang="scss">
.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.nav-li {
  float: left;
}

.nav-li {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li :hover {
  background-color: #111;
}
</style>
