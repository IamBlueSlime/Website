<template lang="pug">
  div.background
    video(autoplay loop)
      source(src="../assets/muse.mp4" type="video/mp4")
    span.title {{ $t("messages.videoTitle") }}
</template>

<script>
export default {
};
</script>


<style lang="scss" scoped>
.background {
  video {
    height: auto;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -100;
  }

  .title {
    bottom: 25px;
    right: 25px;
    position: absolute;

    font-size: 14px;
    text-align: right;
    color: rgba(255, 255, 255, 0.75);
  }
}
</style>
