<template>
	<el-input :name="name"
	  placeholder="search"
	  icon="search"
	  v-model="value"
	  :on-icon-click="handleIconClick">
	</el-input>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props:['name'],
  methods: {
    handleIconClick(ev) {
         var valSelect = {};
         valSelect.name = this.name;
         valSelect.value = this.value;      
         this.$emit('selectVal',valSelect);
    }

  }
}
</script>