<template>
  <div>
    <v-style>
      .{{rowname}} {
      background: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
      ), url({{bglink}});
      background-size:cover;
      /* Full height */
      height: 100%;

      }

    </v-style>
    <vs-row  :class="[rowname, isParallax]" vs-align="left" vs-justify="left"  vs-type="flex"
             style='
             padding-bottom:150px;
             padding-top:150px;
             padding-left:10%;
             padding-right:10%;
             color:white;
             text-wrap:normal;
             word-wrap:break-word;
 '>
      <vs-col  vs-align="left" vs-justify="left" :align=alignment>
        <h1 style="font-size:48px" :style="heading_style" >{{heading}}</h1>
        <p style="max-width:40em">{{content}}</p>
       <span> <vs-button color="primary" :type="buttonType" :href="destination" :hidden="!button1" style="margin-top:20px;margin-left:20px;margin-right:15px;">{{buttonLabel}}</vs-button>
              <vs-button color="primary" :type="secondaryButtonType" :href="secondaryDestination" :hidden="!button2" style="margin-top:20px;">{{secondaryButtonLabel}}</vs-button>
         </span>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    bglink: {
      type:String,
      required : true,
    },
    heading:{
      type: String,
      required : true
    },
    content:{
      type: String,
      required : true
    },
    isParallax: {type:String, default : ''},
    alignment:{type:String, default:"left"},
    leftRow:{type:Boolean,default:true},
    rowname:{type:String,required:true},
    buttonLabel:String,
    secondaryButtonLabel:String,
    buttonType:{type:String,default:"filled"},
    secondaryButtonType:{type:String,default:"border"},
    button1:{type:Boolean},
    button2:{type:Boolean},
    destination:{type:String,default:"#"},
    secondaryDestination:{type:String,default:"#"},
    heading_style:{type:String}

  }


}
// eslint-disable-next-line no-unused-vars
function joinList() {
  alert(1);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
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
