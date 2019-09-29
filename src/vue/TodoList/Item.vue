<template>
  <div class="list-item" :style="{ transition: `opacity ${TRANSITION_SPEED}ms ease-in-out`, opacity: opacity.toString() }">
    <img v-if="content.img" :src="content.img" />
    <div :style="{ flexDirection: 'column', textAlign: 'left' }">
      <div :style="{fontSize: '150%'}">{{content.header}}</div>
      <div v-if="content.subheader" :style="{fontSize: '75%'}">{{content.subheader}}</div>
    </div>
    <div @click="removeSelf" class="button">&times;</div>
  </div>
</template>
<script>
export default {
  props: {
    content: Object
  },
  created() {
    this.TRANSITION_SPEED = 200;
  },
  data() {
    return {
      opacity: 1
    }
  },
  methods: {
    removeSelf() {
      setTimeout(() => this.$emit('remove', this.content.id), this.TRANSITION_SPEED);
      this.$data.opacity = 0;
    }
  }
}
</script>