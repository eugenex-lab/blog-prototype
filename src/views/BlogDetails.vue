
        <template>
          <div class="article-details">
            <div class="article-container">


              <div class="article-meta">
                <small class="article-author">By Helen A.</small>
                <small class="article-date">{{ getTimeAgo(this.postDetails.date) }}</small>
              </div>

              <h1 class="article-heading">{{ this.postDetails.titleTransformed}}</h1>



                <div class="text-container" v-if="showLoadStateDetailsPage">
                    <img class="resizeGifLoaderBigBox" src="@/assets/image-SmallBox.gif"
                         alt="Loading...">
                </div>

              <div class="article-content" v-else  v-html="getFirstTwoParagraphs" ref="article" >
              </div>


                <div class="image-loader" v-if="showLoadStateDetailsPage">
                    <img class="resizeGifImage" src="@/assets/image-BigBox.gif"
                         alt="Loading...">
                </div>
                <div v-else  >
                    <div  class="article-image" v-if="imageUrl">
                        <img :src="imageUrl"  class="details-image" :alt="postDetails.titleTransformed" />
                    </div>
                </div>



                <div class="text-container" v-if="showLoadStateDetailsPage">

                    <img class="resizeGifLoaderBigBoxBelow" src="@/assets/gitAmination.gif"
                         alt="Loading...">



                </div>
              <div class="article-rest" v-else  v-html="getRestOfArticle" ref="article" >
              </div>








            </div>


              <MainArticleListBox/>

          </div>
        </template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import moment from "moment/moment";
import MainArticleListBox from "@/components/MainArticleListBox";
export default {
  name: "BlogDetails",
    components: {
        MainArticleListBox
    },
    watch: {


    },
  computed: {
      ...mapState(['showLoadStateDetailsPage']),

    ...mapGetters(['getPostById' , 'getAuthor']),


    postDetails() {
          // create a regecx to remove all div tags from content


      return this.getPostById
    },
      imageUrl() {
        // console.log(this.postDetails.jetpack_featured_media_url)
          return this.postDetails.jetpack_featured_media_url
      },
      // remove audio and video tags from content postdetails.contentTransformed




    authorDetails() {


        return this.getAuthor

    },
      getFirstTwoParagraphs () {  // get first three paragraphs

          let article = this.postDetails.contentTransformed
          let firstTwoParagraphs = article.split('</p>').slice(0, 2).join('</p>')
         // cna we use regex to remove all div tags from content
          let regex = /<div[\s\S]*?<\/div>/g;

          return firstTwoParagraphs.replace(regex, '')
      },
      // get 3 paragraphs to the end
      getRestOfArticle() {
          let article = this.postDetails.contentTransformed
          let restOfArticle = article.split('</p>').slice(2,8).join('</p>')
          let regex = /<div[\s\S]*?<\/div>/g;
          return restOfArticle.replace(regex, '')
      },

  },


  methods: {
    ...mapActions(['FETCH_SINGLE_POST_BY_ID' , 'FETCH_AUTHOR_BY_ID']),
    getSinglePostById() {
      this.FETCH_SINGLE_POST_BY_ID(this.$route.params.id)
    },
    getAuthorById() {
        console.log(this.$store.getters.getAuthor + 'author')
      return this.FETCH_AUTHOR_BY_ID(this.$store.state.author)
    },
      getTimeAgo(date) {
          return moment(date).fromNow().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      },


  },
  created() {
    console.log('BlogDetails created');
    this.getSinglePostById()
    this.getAuthorById()

  },
    mounted() {

    }

};

</script>

<style scoped>

svg {
display: none;
}

/* Article Details Component Styles */

/* Set the font family and size for the entire component */
.article-details {
  font-family: 'SF Pro Text';
  font-size: 16px;
}

/* Set the width and margin of the article container */
.article-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 400px;
  box-sizing: border-box;
}

/* Style the article heading */
.article-heading {
    min-height: auto;
    /* font-size: 24px; */
    margin-bottom: 20px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    color: #2C2C2C;
}

/* Style the article content */
.article-content {

    margin-bottom: 27px;
    height: auto;
    left: -0.5px;
    right: 9.5px;
    top: 89px;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6E6E6E;
    text-align: justify;
    //height: 264px;
}

.article-rest{
    margin-bottom: 27px;
    height: auto;
    left: -0.5px;
    right: 9.5px;
    top: 89px;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6E6E6E;
    text-align: justify;

}


/* Style the article image */
.article-image {
    display: flex;
    margin-bottom: 20px;
    width: auto;
    /* max-width: 37rem; */
    height: 327px;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
}

.details-image {
    width: 100%;
    height: 100%;
    max-width: 510px;
    -o-object-fit: cover;
    object-fit: cover;
}

/* Style the rest of the article */
.article-rest {
  //font-size: 18px;
  //line-height: 1.5;
  //margin-bottom: 40px;
}

/* Style the article meta */
.article-meta {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    height:auto;
}

/* Style the article author */
.article-author {

    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    /* --c-black-30 */

    color: #4B4B4B;
    padding-right: 0.5rem;
}

/* Style the article date */
.article-date {
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    /* --c-black-30 */

    color: #4B4B4B;
}



.text-container{

    height: 20rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //margin-bottom: 2rem;
    margin-top: -1rem;

}

img.resizeGifLoaderBigBox {
    height: 100%;
    width: 100%;
    max-width: 569px;
}

.resizeGifImage {
    height: 100%;
    width: 100%;
    max-width: 535px;
}

.image-loader {
    height: 14rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: -1rem;
    padding: 0.75rem;
}
img.resizeGifLoaderBigBoxBelow {
    height: 100%;
    width: 100%;
    max-width: 569px;
    margin-top: -2rem;
    margin-left: -0.5rem;
}





/* Responsive Styles */
@media only screen and (min-width: 768px) {
  /* Style the article container for larger screens */
  .article-container {
    padding: 40px;
  }

  /* Adjust the font size of the article heading for larger screens */
  .article-heading {
    //font-size: 30px;
  }

  /* Adjust the font size and line height of the article content for larger screens */
  .article-content, .article-rest {
    //font-size: 20px;
    //line-height: 1.6;
  }
}




</style>