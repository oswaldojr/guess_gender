<template>
  <div class="container">
    <ggnPanelName></ggnPanelName>
    <div class="columns">
      <div class="column">
        <ggnCardMaleNames title="Male Names"></ggnCardMaleNames>
      </div>
      <div class="column">
        <ggnCardFemaleNames title="Female Names"></ggnCardFemaleNames>
      </div>
    </div>
  </div>
</template>

<script>

import ggnPanelName from './containers/ggnPanelName.vue';
import ggnCardMaleNames from './containers/ggnCardMaleNames.vue';
import ggnCardFemaleNames from './containers/ggnCardFemaleNames.vue';

export default {
  name: 'app',
  components: {ggnPanelName, ggnCardMaleNames, ggnCardFemaleNames}
}
</script>
