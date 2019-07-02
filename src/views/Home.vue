<template lang="pug">
  div.home
    video-background
    bio
</template>

<script>
// @ is an alias to /src
import VideoBackground from '@/components/VideoBackground.vue';
import Bio from '@/components/Bio.vue';

export default {
  name: 'home',
  components: {
    VideoBackground,
    Bio,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
