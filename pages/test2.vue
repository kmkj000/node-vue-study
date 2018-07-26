<template lang="pug">
div#app
  input(type="text" v-model="test")
  p {{test}}
</template>

<script>
export default {
  data: function() {
    return {
      test: "ta"
    }
  }
}
</script>
