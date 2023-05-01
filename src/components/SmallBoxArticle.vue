<template>
  <div  class="containerTopLayout">
  <div class="box-container">
    <div   class="list-loader-container"  v-if="showLoadStateBigBigArticle">
    <img v-for="n in 6" :key="n"
         class="image-List"


         src=@/assets/skeleton-loading-list.gif
         :alt="`Image ${n}`" />
    </div>
    <div v-else v-for="(item, index) in visibleItems" :key="index" class="box">

        <div class="top-row">
          <img
              v-if="showLoadStateBigBigArticle"
              class="image-box"

              src=@/assets/skeleton-loading-list.gif
              :alt="`Image ${n}`" />

          <img v-else @load="onImageLoaded"   :src="item.image" alt="loading state"  class="image-box">

        </div>




        <div class="top-section">
          <div class="section-category">{{ item.categoryTransformed }}</div>
          <span class="dot"></span>

          <div class="time">{{  getTimeAgo(item.date) }}


          </div>


        </div>


        <h5 class="header-list-item">{{ item.titleTransformed }}</h5>
        <p class="desc-content" v-html="item.contentTransformed">

        </p>
        <div class="base-section">
          <div class="read-time">3 mins read</div>
          <div class="full-read">Full read
            <span class="arrow">
                <img class="iconArrow"
                     src="@/assets/icons8-up-arrow-48.png"
                     alt="arrow read more">
              </span>

          </div>


        </div>
      </div>



  </div>
  </div>
  <ShowMoreButton v-if="showMoreButton" @click="showMore"></ShowMoreButton>
<!--  <button v-if="showMoreButton" @click="showMore">Show More</button>-->

</template>

<script>
import {mapGetters, mapState} from "vuex";
import moment from "moment";
import ShowMoreButton from "@/components/Buttons/ShowMoreButton";

export default {
  name: "SmallBoxArticle",
  components: {ShowMoreButton},
  data() {

    return {
      numItemsLoaded: this.initialVisibleItems


    }


  }
  ,

  computed: {
    ...mapState(['showLoadStateBigBigArticle']),

    ...mapGetters(['getPostList']),

    visibleItems() {
      return this.getPostList.slice(0, this.numItemsLoaded)
    },
    showMoreButton() {
      return this.numItemsLoaded < this.getPostList.length
    }
  },

  methods: {
    showMore() {
      this.numItemsLoaded += this.itemsPerLoad
    },
    getTimeAgo(date) {
      return moment(date).fromNow();
    },
    onImageLoaded() {
      this.$store.commit('showLoadStateBigBigArticle', false)
    }
  },


  props: {
    initialVisibleItems: {
      type: Number,
      default: 6
    },
    itemsPerLoad: {
      type: Number,
      default: 6
    },


  },

}
</script>

<style scoped  lang="scss">


.image-List{
  height: 28rem;
  width: 25rem;
}

img.image-box {
  width: 100%;
  height: 100%;
}


.box-container {
  display: flex;

border-radius: 5px;

  padding-top: 2rem;
  flex-wrap: wrap;
  flex-direction: column;

  width: 100%;
  max-width: 1272px;}

.box {




  width: 349px;
  height: 464px;
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 3rem;
  padding: 10px;
  /* min-height: 28rem; */
  position: relative;

}

//.box-block {
//  padding: 10px;
//}

.top-row {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
  height: 14rem;
}

.image-box {
width: 100%;
height: auto;
object-fit: cover;
}

p {
margin: 0;
font-size: 1.2rem;
font-weight: 500;
}

.list-loader-container {
max-width: 1266px;
/* min-height: 4px; */
  /* overflow: hidden; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;

}
.top-section {
  display: flex;
  flex-direction: row;
}
.top-section {
  display: flex;
  flex-direction: row;
}
.dot {
  height: 3px;
  width: 3px;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 50%;
  display: inline-block;
  margin: 9px;
}

.section-category {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #4B4B4B;
}

.full-read {

  cursor: pointer;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #1473E6;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.time{
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #6E6E6E;

}
 .header-list-item{
  /* h5 */

  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

   padding-top: 10px;
   padding-bottom: 10px;

  color: #2C2C2C;
}

.read-time {
  padding-left: 0.5rem;
}


p.desc-content {
  width: 100%;
  overflow: hidden;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* display: flex; */
  align-items: center;
  color: #6E6E6E;
  height: 4.2rem;
}

.containerTopLayout{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.base-section{
  display: flex;
  align-items: center;
  /* margin-top: 20px; */
  color: #888;
  position: absolute;
  bottom: 11px;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  bottom: 14px;
  width: 95%;
  /* height: auto; */
  align-content: flex-end;
  flex-direction: row;
}
.iconArrow {
  width: 16px;
  height: 16px;
  /* margin-left: 3px; */
  transform: rotate(90deg);
}

.arrow {
  margin-left: 8px;
  width: 12px;
  margin-bottom: -0.2rem;
}
@media (min-width: 768px) {
  .box-container {
    display: flex;
    min-height: 100%;
    min-width: auto;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}


</style>