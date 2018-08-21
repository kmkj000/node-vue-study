<template lang="pug">
div#app
  p あなたは{{ count }}回クリックしたよ
  button(@click="test") click!
</template>

<script>

const vm = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    test: function() {
      this.count++
    }
  }
})
</script>
