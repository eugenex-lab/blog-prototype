<template>

  <div class="big-box">
    <div class="image-container" v-if="showLoadStateBigBigArticle">
      <img class="resizeGifLoaderBigBox" src="@/assets/image-BigBox.gif"
           alt="loading Skeleton Frame">
    </div>

    <div v-else class="left-section">
      <img :src="imageUrl" alt="Article Image">
    </div>


    <div class="text-container" v-if="showLoadStateBigBigArticle">
      <img class="resizeGifLoaderBigBox" src="@/assets/image-SmallBox.gif"
           alt="Loading...">
    </div>

    <div v-else class="right-section">

      <div class="details-row">
            <span class="category-title">{{ this.postDetails.categoryTransformed }}
            </span>
        <span class="dot"></span>
          <span class="hours">{{ getTimeAgo(this.postDetails.date) }} </span>


      </div>
      <h2 class="article-title">{{ postDetails.titleTransformed }}</h2>

      <p class="article-description" v-html="transformShortArticle">


      </p>


      <a class="base-section" @click="articleDetails()">
        <div class="read-time">{{estimatedReadingTime}} Mins Read</div>
        <div class="full-read">Full read
          <span class="arrow">
                <img class="iconArrow"
                     src="@/assets/icons8-up-arrow-48.png"
                     alt="arrow">
              </span>

        </div>


      </a>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
import moment from 'moment';

export default {
  name: "BigBoxArticle",
  computed: {
    ...mapState(['showLoadStateBigBigArticle']),
    ...mapGetters(['getPost']),
    transformShortArticle() {
      // return this.postDetails.contentTransformed

      const regex = /<audio[\s\S]*?<\/audio>|<video[\s\S]*?<\/video>/g;
      const str = this.postDetails.contentTransformed;
      const subst = ``;
      return str.replace(regex, subst);


    },
    postDetails() {

      // typeof this.getPost
      return this.getPost
    },
    getDetailsTitle() {
      console.log("the post details title", this.postDetails)
      return this.postDetails[0].title
    },
    imageUrl() {
      return this.postDetails.jetpack_featured_media_url
    },
    getTitle() {
      console.log("the post details title", JSON.stringify(this.postDetails.title))
      const getdata = JSON.stringify(this.postDetails.title)
      console.log("the post details title", getdata)

      return getdata
    },
    estimatedReadingTime() {
      const wordCount = this.postDetails.articleMainDetails.length;
      const averageReadingSpeed = 200; // words per minute
      console.log("the post details title", wordCount)
      return Math.ceil(wordCount / averageReadingSpeed);
    },

  },
  watch: {},
  methods: {


    getTimeAgo(date) {
      return moment(date).fromNow().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    },
    articleDetails() {
      // console.log("the post details title", this.postDetails.articleMainDetails.length)
      //
      // console.log("it takes so sos to ", this.estimatedReadingTime)

      // this.$router.push({name: 'ArticleDetails', params: {id: this.postDetails.id}})
console.log("the post details title", this.postDetails.id)
this.$router.push({name: 'postDetail', params: {id: this.postDetails.id}})

    }


  },

  mounted() {
    // create a random number between 100 and 200
    // this.FETCH_SINGLE_POST()
    //
    // this.$store.dispatch('FETCH_DATA_LIST')


  }

}
</script>

<style scoped lang="scss">

// hide big box on small screens
// @media screen and (max-width: 655px) {
.big-box {
  display: none;
}


@media screen and (min-width: 655px) {

  .big-box {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    max-height: 23em;
    //max-height: 21em;
    max-width: 1160px;
    border: 1px solid #F5F5F5;
    border-radius: 5px;
    margin: 0 auto 20px auto;


    height: 600px;
  }

  .left-section {

    margin-right: 15px;
    //min-width: 32em;
    min-width: 13em;
    min-height: 280px;
  }

  .left-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .right-section, .text-container {
    min-width: 23rem;
    //min-width: 24rem;
    min-height: 18rem;
    position: relative;
  }


  .details-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 0.3rem;
  }

  .meta-info span {
    margin-right: 10px;
  }

  .hours {

    /* small */

    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    /* --c-black-20 */

    color: #6E6E6E;
  }

  .category-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .category-title {

    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    /* --c-black-30 */

    color: #4B4B4B;
  }

  .article-title {
    margin-bottom: 10px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #2C2C2C;
    padding-top: 0.5rem;
  }

  .article-description {
    padding-right: 0.5rem;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* display: flex; */
    color: #6E6E6E;
    align-items: end;
    text-align: justify;
    flex-direction: row;
  }

  .dot {
    height: 3px;
    width: 3px;
    background-color: rgba(0, 0, 0, 0.48);
    border-radius: 50%;
    display: inline-block;
    margin: 5px;
  }

  .base-section {
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    color: #888;
    position: absolute;
    bottom: 11px;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    align-content: flex-end;
  }

  .read-time {
    margin-right: 10px;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #6E6E6E;
  }

  .full-read {
    color: #1473E6;
    text-decoration: none;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 11px;
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    cursor: pointer;
  }

  .iconArrow {
    width: 16px;
    height: 16px;
    /* margin-left: 3px; */
    transform: rotate(90deg);
  }

  .read-button-format {
    margin-left: 3px;
  }


  .resizeGifLoaderBigBox {
    width: 100%;
    height: 100%;

  }

  //.image-container{
  //  width: 28rem;
  //  height: 18rem;
  //  display: flex;
  //  align-items: baseline;
  //  flex-direction: column;
  //  justify-content: center;
  //  align-content: space-between;
  //
  //}

  .image-container {
    margin-right: 15px;
    min-width: 13em;
    /* min-height: 280px; */
  }

}

@media screen and (min-width: 800px) {

  .left-section, .image-container {

    min-width: 23em;

  }


}


@media screen and (min-width: 1000px) {

  .big-box {

    max-height: 21em;
    max-width: 1160px;

  }


  .big-box {

    max-height: 21em;

  }


  .left-section, .image-container {

    min-width: 32em;

  }


  .right-section, .text-container {
    min-width: 24rem;

  }

}


</style>