<template>
  <div>
    <vs-navbar v-model="activeItem"
               :color="colorx"
               text-color="rgba(255,255,255,.6)"
               active-text-color="rgba(255,255,255,1)"
               class="nabarx"
               id="navbar"
               style="
               padding-top:10px;
               padding-bottom:5px;
               padding-left:2%;
               padding-right:2%;
              width:100%;
              overflow:hidden;
              top:0;
              position:absolute;
">
      <div slot="title">
        <vs-navbar-title>
          <img alt="Winnitude software logo" src="../../static/Images/logo.webp" onclick="document.location='/'" style="margin-left:20%" height=60px />
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="/" style="top:50%">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="/games.html">Games</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="/about.html">About</a>
      </vs-navbar-item>
    </vs-navbar>

  </div>

</template>
<script>

export default {
  name: 'Navbar',
  props: {
    activeItem : Number
  },
  data:() => ({
    colorx:'#252525'
  })
}
</script>

