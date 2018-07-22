<template lang="pug">
div
  h1.red Hello {{ name }}!

  div#timer-buttons
    a.button.is-rounded.is-primary(v-on:click="timerStart") Start
    a#timerStop.button.is-rounded.is-info Stop
    a#timerReset.button.is-rounded.is-danger Reset

  table
    tr
      td.hour {{ hour }}
      td.minute {{ minute }}
      td.second {{ second }}
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

# timerbuttons = new Vue(
#   el: '#timer-buttons',
#   data: name: 'Vue.js'
#   # `methods` オブジェクトの下にメソッドを定義する
#   methods: timerStart: (event) ->
#     # メソッド内の `this` は、 Vue インスタンスを参照します
#     alert('Hello !')
#     # `event` は、ネイティブ DOM イベントです
#     if event
#       alert(event.target.tagName)
#     return
# )

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
