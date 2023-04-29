<template>
  <header>
    <div class="container">
      <div class="left">
        <img src="@/assets/dasdasLogo.png" alt="Blog Logo">
      </div>
      <div class="right">
        <a href="https://twitter.com/"  target="_blank" ><img src="@/assets/twitter.svg" alt="Twitter Logo"></a>
        <span class="dot"></span>
        <a href="https://github.com/"  target="_blank" ><img src="@/assets/icons8-dribbble.svg" alt="GitHub Logo"></a>
        <span class="dot"></span>
        <a href="https://twitter.com/"  target="_blank" ><img src="@/assets/figma.svg" alt="Twitter Logo"></a>
        <span class="dot"></span>
        <a href="https://github.com/"  target="_blank" ><img src="@/assets/githubreal.svg" alt="GitHub Logo"></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="scss">
//header {
//  background-color: #ffffff;
//  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
//  position: fixed;
//  top: 0;
//  left: 0;
//  right: 0;
//  z-index: 100;
//}
//
//.container {
//  margin: 0px auto;
//  height: 7rem;
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//}

header {
  background-color: #fff;
  //box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
  //max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left img {
  height: 80px;
  width: 80px ;
}

.right img {
  height: 20px;
  width: 20px;
  margin-left: 10px;
}

// put the dot between the icons

.dot {
  height: 3px;
  width: 3px;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 8px;
}


// mobile first design for container







@media only screen and (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
</style>