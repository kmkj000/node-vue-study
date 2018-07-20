<template lang="pug">
div
  h1.red Hello {{ name }}!
  h2#time.time {{ hour }}:{{ minute }}:{{ second }}
  table
    tr
      td
        a.button--green#add-1h +1h
      td
        a.button--green#add-1m +1m
      td
        a.button--green#add-1s +1s
    tr
      td
        a.button--green#add-3h +3h
      td
        a.button--green#add-3m +3m
      td
        a.button--green#add-3s +3s
</template>

<script lang="coffee">
module.exports = data: ->
  {
    name: 'World',
    hour: '00',
    minute: '00',
    second: '00'
  }
</script>

<style lang="sass">
.red
  color: red
</style>
