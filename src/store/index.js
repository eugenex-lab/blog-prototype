import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        example: 'helloWorld',
        postList: [],
        post: [],
        showLoadStateBigBigArticle: true,
        statusAlertSuccess: false,
        statusAlertError: false,
        statusAlertWarning: false,
        showStatusAlert: false,


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
        ,
        getStatusAlertSuccess(state) {
            return state.statusAlertSuccess
        }
        ,

        getStatusAlertError(state) {
            return state.statusAlertError
        }
        ,
        getStatusAlertWarning(state) {
            return state.statusAlertWarning
        },
        getShowStatusAlert(state) {
            return state.showStatusAlert
        }





    },
    mutations: {
        SET_SHOW_STATUS_ALERT(state, newState) {
            state.showStatusAlert = newState
        }
        ,
        SET_STATUS_ALERT_SUCCESS(state, newState) {
            state.statusAlertSuccess = newState
        }
        ,
        SET_STATUS_ALERT_ERROR(state, newState) {
            state.statusAlertError = newState
        }
        ,
        SET_STATUS_ALERT_WARNING(state, newState) {
            state.statusAlertWarning = newState
        }
        ,
        SET_SHOW_LOAD_STATE_BIG_BIG_ARTICLE(state, newState) {
            state.showLoadStateBigBigArticle = newState
        }
        ,
        ADD_DATA_LIST(state, newData) {
            // state.postList = state.postList.concat(newData)


            state.postList = newData.map(newData => {
                const post = {}

                post.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
                post.contentTransformed = newData.content.rendered.substring(0, 300) + "..."

                post.categoryTransformed = newData.primary_category.name
                post.date = newData.date
                post.id = newData.id
                post.image = newData.jetpack_featured_media_url


                return post
            })


        },
        ADD_DATA(state, newData) {
            state.post = newData
            // state.post.titleTransformed = newData.title.rendered // remove &#8217 and &#8216

            state.post.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/<a\b[^>]*>/gi, '<a>'
            )

            // remove all href link decoration from the content


        state.post.contentTransformed = newData.content.rendered.substring(0, 500) + "..."

            state.post.categoryTransformed = newData.primary_category.name

            /// use substring to get the first 800 characters of the content and end with ...
        },
        // create mutation to randomize Id

        ADD_ID(state, newDate) {
            state.id = newDate
        }
        ,
    },
    actions: {

        async FETCH_DATA_LIST({commit}) {


            // declara variable for local storage
            let storageDate = localStorage.getItem('myData')

            // check if local storage is empty
            if (storageDate) {
                console.log('data from local storage')
                // if not empty, parse the data and set it to the state
                commit('ADD_DATA_LIST', JSON.parse(storageDate))
                // set showLoadStateBigBigArticle to false
                commit('SET_STATUS_ALERT_WARNING', false)
            }
            else {
            await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=30`)
                .then(response => {
                        console.log(response.data)
                        commit('ADD_DATA_LIST', response.data)
                        // set showLoadStateBigBigArticle to false
                    commit('SET_STATUS_ALERT_WARNING', false)
                    localStorage.setItem('myData', JSON.stringify(response.data))


                    // commit('SET_SHOW_STATUS_ALERT', true   )
                    console.log('data from api')
                    }
                )
                .catch(error => {
                        console.log(error)
                    // set showLoadStateBigBigArticle to false
                    commit('SET_STATUS_ALERT_WARNING', true)
                    commit('SET_SHOW_STATUS_ALERT', true   )
                    }
                )
        }
        },


        async FETCH_SINGLE_POST({commit}) {



            (await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&per_page=15")
                    .then(response => {

                            // console.log("single post" + response.data )
                            const randomId = Math.floor(Math.random() * 15)
                            commit('ADD_DATA', response.data[randomId])
                            // console.log(response.data[1] )

                            // set showLoadStateBigBigArticle to false
                            commit('SET_SHOW_LOAD_STATE_BIG_BIG_ARTICLE', false)
                            commit('SET_STATUS_ALERT_WARNING', false)


                        }
                    )
                    .catch(error => {
                            console.log(error)
                            commit('SET_STATUS_ALERT_WARNING', true)
                        commit('SET_SHOW_STATUS_ALERT', true   )

                        }
                    )
            )
        }
    }
})

