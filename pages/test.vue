<template lang="pug">
section#app.container
  h1.red Hello {{ name }}!

  div#timer-buttons.timer-buuttons
    a.button.is-rounded.is-primary(@click="timerStart") Start
    a#timerStop.button.is-rounded.is-info(@click="timerStop") Stop
    a#timerReset.button.is-rounded.is-danger(@click="timerReset") Reset

  table
    tr
      td#hour.time {{ hour }}
      td#minute.time {{ minute }}
      td#second.time {{ second }}
    tr.plus-buttons(v-for="n in 10")
      td
        a.button--green(@click="plusHour(n)") +{{n}}h
      td
        a.button--green(@click="plusMinute(n)") +{{n}}m
      td
        a.button--green(@click="plusSecond(n)") +{{n}}s
</template>

<script>
var data = {
  name: 'World',
  hour: 0,
  minute: 0,
  second: 0
}

export default {
  asyncData() {
    // コンポーネントをロードする前に毎回呼び出されます
    return data
  },
  methods: {
    timerStart: function() {

    },
    timerStop: function() {

    },
    timerReset: function() {
      this.hour = 0
      this.minute = 0
      this.second = 0
    },
    plusHour: function(num) {
      this.hour += num
    },
    plusMinute: function(num) {
      this.minute += num
      // 60分処理
      if(this.minute > 59) {
        this.minute = 59
      }
    },
    plusSecond: function(num) {
      this.second += num
      // 60秒処理
      if(this.second > 59) {
        this.second = 59
      }
    }
  }
}

</script>



<style lang="sass">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  flex-direction: column

.time
  font-size: 2em
  font-weight: 500
  text-align: center

.timer-buuttons
  .button
    width: 5em
    margin: 1em

.plus-buttons
  td
    padding: 5px
  a
    width: 100%

.red
  color: red
</style>
