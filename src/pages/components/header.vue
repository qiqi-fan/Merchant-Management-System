<template>
  <div>
    <h2>{{ names.name }}</h2>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'header',
    data(){
        return{
            names:[
                {id:'01',name:'全部订单'},
                {id:'02',name:'维权订单'}
            ]
        }
    }
}
</script>

<style>

</style>