<template lang="pug">
div#app
  p あなたは{{ count }}回クリックしたよ
  button(@click="test") click!
</template>

<script>
export default {
  asyncData() {
    return {
      count: 0
    }
  },
  methods: {
    test: function() {
      this.count++
    }
  },
  head: {
    title: 'About page'
  }
}
</script>
