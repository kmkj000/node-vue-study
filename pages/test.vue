<template lang="pug">
section#app.container
  h1.red Hello {{ name }}!

  div#timer-buttons.timer-buuttons
    a.button.is-rounded.is-primary(v-on:click="timerStart") Start
    a#timerStop.button.is-rounded.is-info Stop
    a#timerReset.button.is-rounded.is-danger Reset

  table
    tr
      td#hour.time {{ hour }}
      td#minute.time {{ minute }}
      td#second.time {{ second }}
    tr.plus-buttons(v-for="n in 10")
      td
        a.button--green(v-on:click="hour += n") +{{n}}h
      td
        a.button--green(v-on:click="minute += n") +{{n}}m
      td
        a.button--green(v-on:click="second += n") +{{n}}s
</template>

<script>
// export default {}
// import Vue from 'vue'

var data = {
  name: 'World',
  hour: 0,
  minute: 0,
  second: 0
}

var dataReturn = function() {
  return {
    name: 'World',
    hour: 0,
    minute: 0,
    second: 0
  }
}

// export default {
//   data: dataReturn
// }

// new Vue({
// 	el: '#app',
//   // state
//   data () {
//     return {
//       count: 0
//     }
//   },
//   // view
//   template: `
//     <div>
//       {{ count }}
//       <input type="button" value="countUp" v-on:click="increment" />
//     </div>
//   `,
//   // actions
//   methods: {
//     increment () {
//       this.count++
//     }
//   }
// })
export default {
  asyncData() {
    // コンポーネントをロードする前に毎回呼び出されます
    return data
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



// export default {
//   name: 'app',
//   data () {
//     return {
//       name: 'World',
//       hour: 0,
//       minute: 0,
//       second: 0
//     }
//   }
//   },
//   methods: {
//     timerStart: function() {
//         var time;
//         console.dir(module.exports.data());
//         time = {
//           hour: module.exports.data().hour,
//           minute: module.exports.data().minute,
//           second: module.exports.data().second
//         };
//       return console.dir(this);
//     }
//   },
//   computed: {
//   }
// }
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
