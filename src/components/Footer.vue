<template>
  <div style="margin-top:20px">
    <vs-navbar v-model="activeItem"
               :color="colorx"
               text-color="rgba(255,255,255,.6)"
               active-text-color="rgba(255,255,255,1)"
               style="
               padding-top:10px;
               padding-bottom:10px;
               padding-left:2%;
               padding-right:2%;

width:100%">
      <div slot="title">
          <img alt="Winnitude Software logo" src="../../static/Images/logo.webp" style="margin-left:20%;" height=60px />
      </div>


        <p style="color:white">Copyright Winnitude! Software 2020</p>
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

