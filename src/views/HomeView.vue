<template>
  <div class="container">
    <BigBoxArticle />



  </div>
  <button class="load-more" @click="loadMore()">Load More</button>
</template>

<script>
import BigBoxArticle from "@/components/BigBoxArticle.vue";
export default {
  name: 'HomeView',
  components: {
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

@media screen and (min-width: 768px) {
  /*.container {*/
  /*  padding: 40px;*/
  /*}*/
}
</style>

}

<style scoped lang="scss">




</style>