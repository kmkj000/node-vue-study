<template lang="pug">
div
  h1.red Hello {{ name }}!
  h2#time.time {{ hour | zeroPadding }}:{{ minute }}:{{ second }}

  table
    tr(v-for="n in 10")
      td
        a.button--green(v-on:click="hour += n") +{{n}}h
      td
        a.button--green(v-on:click="minute += n") +{{n}}m
      td
        a.button--green(v-on:click="second += n") +{{n}}s
</template>

<script>
// module.exports = {
//   data: function() {
//     return {
//       name: 'World',
//       hour: 0,
//       minute: 0,
//       second: 0
//     };
//   }
// };
// filters: {
//   zeroPadding: function (value, num) {
//     var num = typeof num !== 'undefined' ? num : -2;
//     return ('0' + value).slice num;
//   }
// }
</script>


<script lang="coffee">
## data: function() { return {key: value} }
module.exports = data: ->
  {
    name: 'World',
    hour: 0,
    minute: 0,
    second: 0
  }
# new Vue (filters: {
#     zeroPadding: (value, num) ->
#       console.log(value)
#       num = if typeof num != 'undefined' then num else 2
#       ('0' + value).slice num
#   }
# )
</script>


<style lang="sass">
.red
  color: red
</style>
