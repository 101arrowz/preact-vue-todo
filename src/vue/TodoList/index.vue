<template>
  <div :style="{ textAlign: 'center' }">
    <Item v-for="item in contents" :key="item.id" :content="item" @remove="removeItem"></Item>
    <div v-if="!contents.length" :style="{fontSize: '150%'}">Nothing to do!</div>
  </div>
</template>
<script>
import Item from './Item';
export default {
  props: {
    contents: Array,
  },
  components: {
    Item
  },
  methods: {
    removeItem(id) {
      this.$emit('updateData', this.contents.filter(el => el.id !== id));
    }
  }
}
</script>