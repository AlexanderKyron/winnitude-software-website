<template>
  <div class="person" style="  background-color:#dddddd;
margin: 0 auto;width:55%;box-shadow:10px 10px 5px #333333; text-align:center;align-content:center;">
    <vs-row  class="" vs-type="flex"  vs-w="12"
             style="
             margin-top:30px;
             padding-top:45px;
             padding-bottom:45px;
             padding-left:40px;
             padding-right:40px;
             color:white;
             text-align:center;
              ">
      <vs-col>
        <img alt="Face" style="border-radius:50%; width:100px" :src="imglink">
      </vs-col>
      <vs-col>
        <vs-row>
      <h3 style="margin:0 auto;">{{name}}</h3>
          </vs-row>
        <vs-row>
        <p style="margin:0 auto; color:#444444">{{positions}}</p>
      </vs-row>
        <vs-row>
          <p style="margin:0 auto;">{{about}}</p>
        </vs-row>
      </vs-col>
    </vs-row>


  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    name: String,
    about:String,
    positions:String,
    imglink:String
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color:black;
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
  background-color:#ffffff;
}

p {
  color:black;
  text-align:center;
}
</style>