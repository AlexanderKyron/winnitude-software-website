<template>
  <div id="app">
    <Navbar :active-item="2"/>


    <Section heading="
Who are we?" content="
    We are Winnitude! Software - a collection of young creatives, programmers and everything in-between making fun games.
    We publish both our solo titles and our group projects under this banner, and we do it with pride, because to us,
    getting something out there for the world to enjoy is what matters. We're currently working on two large team projects -
    Vigilantes and Arachnophobia.
"
             alignment="left"
             :bglink="`${publicPath}Images/wsBanner.jpg`"
             rowname="arachnophobia"

             button-type="filled"
             :button1="false"
             :button2="false"
            />

<Person name="Alex Kyron"
        positions="Founder | Full Stack Developer | Web Developer | Gameplay Programmer | Animator"
        about="
Alex is the main programmer of the group. He's been developing games for years and is working on the nitty-gritty
under-the-hood aspect of games at Winnitude! Software - C++ programming, gameplay design, animation and UI.
You'll see some games, like R3WiND and  the Viral Insurgent series, are solo titles from Alex. His main fascination however
is virtual reality, and you'll be seeing some new stuff from him in that format soon.
You can find him on his personal website, at https://alexkyron.xyz."
        :imglink="`${publicPath}Images/alex.png`"

>
</Person>
    <Person name="Ryan Glasbug"
            positions="Level Designer | Artist | Scripter"
            about="
The newest addition to the Winnitude! Software games collective is Ryan Glasburg. He's a long-time gamer and is working on level design
for the eventual multiplayer re-release of Viral Insurgent: Redux, as well as the logic for scripted level events and weapons."
            :imglink="`${publicPath}Images/ryan.jpg`"

    >
    </Person>
    <Person name="Sam Bohara"
            positions="Concept Artist | Writer"
            about="
Sam is our main artist. He's responsible for a lot of the visual look and feel of some of our games, namely Vigilantes and soon to be
Arachnophobia. He's also the secondary writer for dialog and story in Vigilantes."
            :imglink="`${publicPath}Images/Sam.jpg`"

    >
    </Person>
    <Person name="Cage Castaneda"
            positions="Writer"
            about="
Cage is the primary writer for our upcoming survival-horror psychological thriller game Arachnophobia. He's a passionate writer and
creates fantastic, flowing, movie-quality scripts."
            :imglink="`${publicPath}Images/cage.jpg`"

    >
    </Person>
    <Footer></Footer>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Section from './components/Section.vue'
import Person from './components/Person.vue'
import Footer from './components/Footer.vue'
// eslint-disable-next-line no-unused-vars

export default {
  name: 'Games',
  components: {
    Navbar,
    Section,
    Person,
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
  background-color:#0b0b0b;

}

</style>
