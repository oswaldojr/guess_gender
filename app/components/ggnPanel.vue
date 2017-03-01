<template>
  <nav class="panel">
    <p class="panel-heading" v-text="title"></p>
    <div class="panel-block">
        <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ggnPanel',
  props: ['title']
}
</script>