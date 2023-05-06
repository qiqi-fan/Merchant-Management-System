<template>
  <div id="app">
      <Topper></Topper>
      <leftList></leftList>
      <listContent></listContent>
  </div>
</template>

<script>

import Topper from './components/Topper.vue'
import leftList from './components/leftList.vue'
import listContent from './components/CenterInfo.vue'


export default {
  name: 'App',
  components: {Topper,leftList,listContent}
}
</script>

<style>

</style>
