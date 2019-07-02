<template lang="pug">
  div.bio
    div.catch {{ $t("messages.bio.catch") }}
    div.long {{ $t("messages.bio.long") }}
    links
</template>

<script>
import Links from '@/components/Links.vue';

export default {
  components: {
    Links,
  },
};
</script>

<style lang="scss" scoped>
@import url("//fonts.googleapis.com/css?family=Merriweather");

.bio {
  width: 600px;
  left: 42px;
  color: #FFF;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  .catch {
    font-size: 48px;
    font-family: 'Merriweather', serif;
  }

  .long {
    font-size: 20px;
  }
}
</style>
