<template lang="pug">
  div.links
    a(title="GitHub" href="https://github.com/IamBlueSlime/" target="_blank")
      font-awesome-icon(:icon="faGithub", size="2x")
    a(title="LinkedIn" href="https://www.linkedin.com/in/jlevilain/" target="_blank")
      font-awesome-icon(:icon="faLinkedin", size="2x")
</template>

<script>
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default {
  data() {
    return {
      faGithub,
      faLinkedin,
    };
  },
};
</script>

<style lang="scss" scoped>
.links {
  margin-top: 10px;

  a {
    color: inherit;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>
