<script>
// import Vue from 'vue'

// var data = {
//   name: 'World',
//   hour: 0,
//   minute: 0,
//   second: 0
// }

var dataReturn = function() {
  return {
    name: 'World',
    hour: 0,
    minute: 0,
    second: 0
  }
}

export default {
  data: dataReturn
}

// ルート Vue インスタンス
// new Vue({
//   data: data,
//   computed: {
//     bar: function () { /* ... */ }
//   },
//   methods: {
//     baz: function () { /* ... */ }
//   }
// })

// var vm = new Vue({
//   el: '#app',
//   data: data,
//   // `methods` オブジェクトの下にメソッドを定義する
//   methods: {
//   }
// })





// export default {
//   asyncData() {
//     return {
//       data: data
//     }
//   },
//   head: {
//     title: 'About page'
//   }
// }



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
