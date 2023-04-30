import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    example : 'helloWorld',
    postList: [] ,
    post:[],
      showLoadStateBigBigArticle:true,


        id: 7
  },
  getters: {



    getExample(state) {
        return state.example
    }
    ,
    getPostList(state) {
        return state.postList
    }
    ,
    getPost(state) {
        return state.post
    },
      getId(state) {
        return state.id
      },
        getShowLoadStateBigBigArticle(state) {
            return state.showLoadStateBigBigArticle
        }


    },
  mutations: {
      SET_SHOW_LOAD_STATE_BIG_BIG_ARTICLE(state, newState) {
            state.showLoadStateBigBigArticle = newState
      }
      ,
    ADD_DATA_LIST(state, newData) {
      // state.postList = state.postList.concat(newData)


        state.postList = newData.map(newData => {
            const post = {}

            post.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
            post.contentTransformed = newData.content.rendered.substring(0, 600) + "..."
            post.categoryTransformed = newData.primary_category.name

            return post
        })





    },
    ADD_DATA(state, newData) {
      state.post = newData
        // state.post.titleTransformed = newData.title.rendered // remove &#8217 and &#8216

        state.post.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")

        state.post.contentTransformed = newData.content.rendered.substring(0, 600) + "..."

        state.post.categoryTransformed = newData.primary_category.name

      /// use substring to get the first 800 characters of the content and end with ...
    },
      // create mutation to randomize Id

      ADD_ID(state, newDate){
        state.id = newDate
      }
,
    },
  actions: {

      async FETCH_DATA_LIST({commit}) {

          await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=30`)
              .then(response => {
                      console.log(response.data)
                      commit('ADD_DATA_LIST', response.data)
                          // set showLoadStateBigBigArticle to false
                  }
              )
              .catch(error => {
                      console.log(error)
                  }
              )
      },

      // FECTH SINGLE POST
      // async FETCH_SINGLE_POST({commit}, id) {


      async FETCH_SINGLE_POST({commit}) {

           (await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=15")
               .then(response => {

                   // console.log("single post" + response.data )
                   const randomId = Math.floor(Math.random() * 15)
                       commit('ADD_DATA', response.data[randomId])
                     // console.log(response.data[1] )

                   // set showLoadStateBigBigArticle to false
                     commit('SET_SHOW_LOAD_STATE_BIG_BIG_ARTICLE', false)

                   }
                )
                .catch(error => {
                        console.log(error)
                    }
                )
            )
        }
    }
})

