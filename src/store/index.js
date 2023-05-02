import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        example: 'helloWorld',
        postList: [],
        post: [],
        post_by_id: [],
        author: [],
        author_Id:  '',
        showLoadStateBigBigArticle: true,
        showLoadStateDetailsPage: true,
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
        },
        getPostById(state) {
            return state.post_by_id
        },
        getAuthor(state) {
            return state.author
        }
        ,
        getAuthorId(state) {
            return state.author_Id
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

        SET_SHOW_LOAD_STATE_DETAILS_PAGE(state, newState) {
            state.showLoadStateDetailsPage = newState
        }
        ,

        SET_AUTHOR_ID(state, newState) {
            state.author_Id = newState
        },

        ADD_DATA_LIST(state, newData) {
            // state.postList = state.postList.concat(newData)


            state.postList = newData.map(newData => {
                const post = {}

                post.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
                post.contentTransformed = newData.content.rendered.substring(0, 300) + "..."

                // remave audio and video from the content
                post.contentTransformed = post.contentTransformed.replace(/<audio\b[^>]*>.*?<\/audio>/gi, '').replace(/<video\b[^>]*>.*?<\/video>/gi, '').replace(/<iframe\b[^>]*>.*?<\/iframe>/gi, '')
                // create another contentTransformed for the big big article
                post.articleListArticle = newData.content.rendered.replace(/<audio\b[^>]*>.*?<\/audio>/gi, '').replace(/<video\b[^>]*>.*?<\/video>/gi, '').replace(/<iframe\b[^>]*>.*?<\/iframe>/gi, '')

                post.categoryTransformed = newData.primary_category.name
                post.date = newData.date
                post.id = newData.id
                post.image = newData.jetpack_featured_media_url

                // console.log(post.contentTransformedBigBigArticle)


                return post
            })


        },
        ADD_DATA(state, newData) {
            state.post = newData
            // state.post.titleTransformed = newData.title.rendered // remove &#8217 and &#8216

            state.post.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/<a\b[^>]*>/gi, '<a>'.replace(/<audio\b[^>]*>.*?<\/audio>/gi, '').replace(/<video\b[^>]*>.*?<\/video>/gi, '').replace(/<iframe\b[^>]*>.*?<\/iframe>/gi, '')
            )

            // remove all href link decoration from the content


            state.post.contentTransformed = newData.content.rendered.substring(0, 500) + "...".replace(/<audio\b[^>]*>.*?<\/audio>/gi, '').replace(/<video\b[^>]*>.*?<\/video>/gi, '').replace(/<iframe\b[^>]*>.*?<\/iframe>/gi, '')
            // remove all audio and video from the content and replace with empty string ''

            state.post.categoryTransformed = newData.primary_category.name

            // get all article content

            state.post.articleMainDetails = newData.content.rendered.replace(/<audio\b[^>]*>.*?<\/audio>/gi, '').replace(/<video\b[^>]*>.*?<\/video>/gi, '').replace(/<iframe\b[^>]*>.*?<\/iframe>/gi, '')

            /// use substring to get the first 800 characters of the content and end with ...
        },
        // create mutation to randomize Id
        //
        ADD_DATA_BY_ID(state, newData) {
            // const author = newData.parselyMeta.parsely-author


            state.post_by_id = newData

            state.post_by_id.titleTransformed = newData.title.rendered.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
            state.post_by_id.contentTransformed = newData.content.rendered.replace(/<audio\b[^>]*>.*?<\/audio>/gi, '').replace(/<video\b[^>]*>.*?<\/video>/gi, '')
                .replace(/<iframe\b[^>]*>.*?<\/iframe>/gi, '')
            state.post_by_id.categoryTransformed = newData.primary_category.name.replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
            state.post_by_id.date = newData.date

            },
        SET_AUTHOR_BY_ID(state, newData) {
            state.author = newData
        }
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
            } else {
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
                            commit('SET_SHOW_STATUS_ALERT', true)
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
                            commit('SET_SHOW_STATUS_ALERT', true)

                        }
                    )
            )
        },
        async FETCH_SINGLE_POST_BY_ID({commit}, id) {

            // console.log(id)
            (await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${id}?per_page=1&per_page=1`)
                    .then(response => {

                        // console.log("single post" + response.data )
                        commit('ADD_DATA_BY_ID', response.data)

                        commit('SET_AUTHOR_BY_ID', response.data.author)

                        // console.log(response.data.jetpack_featured_media_url)
                        // set showLoadStateBigBigArticle to false
                        commit('SET_SHOW_LOAD_STATE_DETAILS_PAGE', false)
                        commit('SET_STATUS_ALERT_WARNING', false)
                    })
                    .catch(error => {
                            console.log(error)
                            commit('SET_STATUS_ALERT_WARNING', true)
                            commit('SET_SHOW_STATUS_ALERT', true)

                        }
                    )
            )
        },


        async FETCH_AUTHOR_BY_ID({commit} ,param  )   {
            (await axios.get(`https://techcrunch.com/wp-json/wp/v2/users/${param}`)
                    .then(response => {

                        console.log(param)
                        console.log(response.data)
                            commit('SET_AUTHOR_BY_ID', response.data)
                        // set showLoadStateBigBigArticle to false
                        commit('SET_SHOW_LOAD_STATE_DETAILS_PAGE', false)

                        }
                    )
                    .catch(error => {
                            console.log(error + "author id " + this.author)
                        }
                    )
            )

            }
        },

})
