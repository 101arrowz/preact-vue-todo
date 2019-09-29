<template>
  <div :style="{display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center'}">
    <div :style="{fontSize: '200%'}">Vue Todo</div>
    <TodoList :contents="todoListData" :style="{width: '50vw'}" @updateData="synchronizeData"></TodoList>
    <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '1vh'}">
      <input ref="todoListInput" @keypress.passive="$event.charCode === 13 ? addElement() : null" :style="{textAlign: 'center'}" />
      <div @click.passive="updateData" class="button" :style="{marginTop: '1vh'}">+</div>
    </div>
  </div>
</template>
<script>
import TodoList from '../TodoList';
export default {
  data() {
    return {
      todoListData: JSON.parse(localStorage.getItem('vue-todo')) || []
    };
  },
  components: {
    TodoList
  },
  methods: {
    addElement() {
      const input = this.$refs.todoListInput;
      const todoListData = this.todoListData;
      const header = input.value;
      if (header) {
        input.value = '';
        this.synchronizeData(todoListData.concat({header, subheader: 'Example Subheader', id: Math.max(...(todoListData.map(el => el.id)), -1)+1}));
      }
    },
    synchronizeData(newData) {
      this.todoListData = newData;
      localStorage.setItem('vue-todo', JSON.stringify(newData));
    }
  }
}
</script>
<style>
/* It would be a good idea to use scoping but I tend to reuse CSS in random places :/ Try to avoid this */
.button {
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  font-size: 1.5em;
  width: 1em;
  border-radius: 50%;
}
.list-item:not(:hover) .button {
  visibility: hidden;
}
.button:hover {
  background-color: rgba(0,0,0,0.2)
}
.list-item {
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  padding: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  align-items: center;
  background-color: #4fc08d;
  color: #273849;
  border-radius: 4px;
}
</style>