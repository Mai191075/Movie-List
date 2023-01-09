<template> 
<div id="nav">
  <br>
<router-link to="/" class="button"> Home </router-link>  
  <h1> 
    <br>
    Welcome back to your movie list :)
  </h1>
  <br>
  <p>The film is a consecutive set of still images, or small photographic (video) clips, where these pictures or video clips are professionally taken, and then arranged in a series and professionally, through the use of special equipment, and displayed at high speed, and depending on the phenomenon of optical illusion, The movie will appear to the viewer as one shot. The first experience of showing a movie for the two brothers was in 1895, but the film was long, and the ideas were not arranged, and the story of the film did not appear in an orderly and clear manner, so this experience was like a quantum leap for the development of filmmaking, laying down foundations and rules for viewing and acting, and with the end of the First World War, The film industry was at its height, in terms of image and sound, and spread widely, especially in the United States of America, and especially in Hollywood, where filmmakers were looking for picturesque nature, and suitable for the nature of films.</p>   
    <router-link :to="{ name: 'Actions' }" class="button-17">Actions </router-link> 
    <router-link :to="{ name: 'Horrors' }" class="button-17">Horrors</router-link>  
    <router-link :to="{ name: 'Familials' }" class="button-17">Familials</router-link>
</div>
 <router-view/>
</template>

  <style>
.button{
  position: absolute;
  top:8%;
  left: 60px;
  width: 120px;
  transform: translateY(-50%);
  background-color: rgb(138, 195, 226);
  align-items: center;
  appearance: none;
  background-color: rgb(138, 195, 226);
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  display: inline-flex;
  height: 48px;
  padding: 2px 24px;
  width: auto;
}

.button:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17{
  align-items: center;
  margin-left:1%;
  margin-right: 1%;
  appearance: none;
  background-color: rgb(138, 195, 226);
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font6-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}




/* .a b c {
background: #f4f4f4;
padding: 20px;
border-radius: 10px;
margin: 10px auto;
max-width: 600px;
 cursor: pointer;
 color: #05c2db;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
 
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
  padding: 9px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: #05c2db;
}
</style>
