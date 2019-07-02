<template lang="pug">
  div#app
    router-view
</template>

<style lang="scss">
@import url("//fonts.googleapis.com/css?family=Open+Sans");

body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
