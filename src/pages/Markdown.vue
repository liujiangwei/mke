<template>
  <mavon-editor :ishljs = "true"></mavon-editor>
</template>
<script>
  import Vue from 'vue'
  import mavonEditor from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  // use
  Vue.use(mavonEditor)

  export default {
    name: 'markdwon',
    data () {
      return {
        msg: 'this is markdown page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
