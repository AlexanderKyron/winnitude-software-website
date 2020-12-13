<template>
  <div class="hello">
    <vs-row  class="rowbg parallax" vs-type="flex"  vs-w="12"
             style="
             padding-bottom:150px;
             margin-top:60px;
             padding-top:150px;
             color:white;
              width:100%">
      <vs-col>
        <img alt="Winnitude Software logo" src="../../static/Images/logo.webp">
      <h1 style="font-size:72px">We are Winnitude! Software.</h1>
        <p>We make games for everyone to enjoy.</p>
      </vs-col>
    </vs-row>


  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
:root {

}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body, html {
  padding-top:60px;
  height: 100%;
}

.rowbg {
  /* The image used */
  background: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
  ), url("../../public/Images/rewind_foresty.png");

  /* Full height */
  height: 100%;
}

.parallax {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

p {
  color:white;
}
</style>
