<template>
  <div id="app">x
    <Navbar  :active-item="0"/>
    <Home msg="Welcome to W!S"/>
    <Section heading="
    We are unapologetically indie.
" content="
    We're just a handful of students making fun games for people to enjoy the same way
we have enjoyed other great games for thousands of hours. No publishers, no
executives to answer to - just passion and creativity.
"
             alignment="left"
             rowname="row1"
             :bglink="`${publicPath}Images/VIRDemo.png`"
             :button1="false"
             :button2="false"
            />
    <Section heading="
    Be a part of the journey.
" content="
    We'll be posting frequent development videos every step of the way on
our new project Arachnophobia, so that the players can be part of the process
and influence it at every turn.
"
             alignment="right"
             :bglink="`${publicPath}Images/rewind_boss.png`"
             rowname="row2"
             :button1="false"
             :button2="false"
             is-parallax="parallax"
    />
    <Section heading="
See Our Games" content="
    Click here for our games, which comprise of both solo projects collectively shared and team efforts, including
    our newest project, Arachnophobia
"
             alignment="left"
             :bglink="`${publicPath}Images/VIRWall.png`"
             rowname="row3"

    button-type="filled"
             :button1="true"
             :button2="false"
    secondary-button-type="border"
    button-label="Click here"
             destination="/games.html"
    />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Section from './components/Section.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Section,
    Footer
  },
  data(){
    return {
      publicPath: process.env.BASE_URL,
      message: "test \n test"
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color:#050505;
}
</style>
