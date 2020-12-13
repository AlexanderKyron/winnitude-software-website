<template>
  <div id="app">
    <Navbar :active-item="1"/>

    <Section heading="
Arachnophobia" content="
    Become the monster you dread in this psychological thriller, where you get to be the horror.
"
             alignment="right"
             :bglink="`${publicPath}Images/blood.jpg`"
             rowname="row1"

             button-type="filled"
             :button1="true"
             :button2="false"
             secondary-button-type="border"
             button-label="Coming Soon"
             destination="#"
             is-parallax="parallax"
    heading_style="font-family:Horroroid;color:red;font-size:140px"/>

    <Section heading="
Viral Insurgent: Redux" content="
    Welcome back, insurgent. Return to the system and fight - with style - for dominance against a rival trojan in this short demo. Full game releasing soon with
    multiplayer and other features!
"
             alignment="left"
             :bglink="`${publicPath}Images/virbackground.png`"
             rowname="arachnophobia"

             button-type="filled"
             :button1="true"
             :button2="false"
             secondary-button-type="border"
             secondary-button-label="Watch the Trailer"

             is-parallax="parallax"
             button-label="Play now on Itch.io"

    destination="https://winnitude.itch.io/viral-insurgent-redux"/>

    <Section heading="
    R3WiND
" content="
    Fight for the future in this solo-project by Alex, made for the Brackeys 2020.2 7-day game jam in Unreal Engine.
    Battle aliens and fight their queen to save your future in this frantic third-person shooter.
"
             alignment="right"
             :bglink="`${publicPath}Images/rewind_boss.png`"
             rowname="row2"
             :button1="true"

             button-label="Play now on Itch.io"
             :button2="true"
             secondary-button-label="Watch  the Trailer"
             secondary-destination="https://www.youtube.com/watch?v=TEzUn00RME4"
             is-parallax="parallax"
             destination="https://winnitude.itch.io/r3wind"
    />
    <Section heading="
Viral Insurgent" content="
    Bunny-hop and fight for control over a computer as a sentient virus.
"
             alignment="left"
             :bglink="`${publicPath}Images/VIRDemo.png`"
             rowname="row3"

             button-type="filled"
             :button1="true"
             :button2="false"
             secondary-button-type="border"
             button-label="Play now on Itch.io"
             destination="https://winnitude.itch.io/viral-insurgent"/>
<Footer></Footer>  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Section from './components/Section.vue'
import Footer from './components/Footer.vue'

// eslint-disable-next-line no-unused-vars

export default {
  name: 'Games',
  components: {
    Navbar,
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
@font-face {
  font-family: 'Horroroid';
  src: url('../public/horroroid/Horroroid.svg#Horroroid') format('svg'),
  url('../public/horroroid/Horroroid.ttf') format('truetype'),
  url('../public/horroroid/Horroroid.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
body {
  background-color:#050505;
}

</style>
