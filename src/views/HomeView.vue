<template>
  <div class="container">
    <BigBoxArticle />

      <SmallBoxArticle />




  </div>
</template>

<script>
import BigBoxArticle from "@/components/BigBoxArticle.vue";
import SmallBoxArticle from "@/components/SmallBoxArticle";
export default {
  name: 'HomeView',
  components: {
    SmallBoxArticle,
    BigBoxArticle

  },
  data() {
    return {
      numBoxes: 3,
      maxBoxes: 9,
    }
  },
  methods: {
    loadMore() {
      if (this.numBoxes < this.maxBoxes) {
        this.numBoxes += 3;
      }
    }
  }
}
</script>

<style scoped>
.container {



  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  flex-direction: column;

}


.load-more {
  display: block;
  margin: 20px auto;
  padding: 10px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}


.box-container {
  display: flex;
}

@media screen and (min-width: 768px) {
  /*.container {*/
  /*  padding: 40px;*/
  /*}*/
}

</style>

}

<style scoped lang="scss">




</style>