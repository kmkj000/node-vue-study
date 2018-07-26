<script lang="coffee">
# import Vue from 'vue'

# export default {
#   name: 'app',
#   data() -> {
#     name: 'World',
#     hour: 0,
#     minute: 0,
#     second: 0
#   },
#   methods: {
#
#   },
#   computed: {
#   }
# }

dataReturn = ->
  {
    name: 'World'
    hour: 0
    minute: 0
    second: 0
  }

export default
  name: 'HelloWorld'
  data: dataReturn

# # data: function() { return {key: value} }
# module.exports =
#   data: ->
#     name: 'World'
#     hour: 0
#     minute: 0
#     second: 0
#     timerStart: () ->
#       console.dir(module.exports.data())
#       time = {
#         hour: module.exports.data().hour
#         minute: module.exports.data().minute
#         second: module.exports.data().second
#       }
#       console.dir(this)


# () ->
#   filters: {
#     zeroPadding: (value, num) ->
#       num = if typeof num != 'undefined' then num else -2
#       ('0' + value).slice(num)
#   }


# new Vue (filters: {
#     zeroPadding: (value, num) ->
#       console.log(value)
#       num = if typeof num != 'undefined' then num else 2
#       ('0' + value).slice num
#   }
# )
</script>
