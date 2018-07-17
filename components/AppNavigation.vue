<template lang="pug">
  nav
    h2 Simple Transition Group For Layout: {{ page }}
    // simple navigation, we use nuxt-link for routing links
    ul
      nuxt-link(exact='', to='/')
        li index
      nuxt-link(to='/about')
        li about
      nuxt-link(to='/users')
        li users
    br
    // we use the page to update the class with a conditional
    svg(:class="{ 'active' : (page === 'about') }", xmlns='http://www.w3.org/2000/svg', width='200', height='200', viewbox='0 0 447 442')
      // we use the transition group component, we need a g tag because it’s SVG
      transition-group(name='list', tag='g')
        rect.items.rect(ref='rect', key='rect', width='171', height='171')
        circle#profile.items.circ(key='circ', cx='382', cy='203', r='65')
        g#text.items.text(key='text')
          rect(x='56', y='225', width='226', height='16')
          rect(x='56', y='252', width='226', height='16')
          rect(x='56', y='280', width='226', height='16')
        rect#footer.items.footer(key='footer', y='423', width='155', height='19', rx='9.5', ry='9.5')
</template>
