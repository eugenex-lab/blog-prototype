<template>
<!--  <div class="app-wrapper">-->

    <TheHeader></TheHeader>
    <transition name="fade">

  <router-view />
  </transition>

<!--  </div>-->
</template>

<script>
import { Transition } from 'vue'

// import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import {mapActions} from "vuex";
// import StatusAlert from "@/components/AppNotification/StatusAlert";
export default {
  name: "app",
    components: {TheHeader,Transition },
  data() {
    return {
      navigation: null,
    };
  },
    methods: {
        ...mapActions(['FETCH_SINGLE_POST'], ['FETCH_DATA_LIST']),
    }
  ,
  created() {

  },
  mounted() {
      this.FETCH_SINGLE_POST()

      this.$store.dispatch('FETCH_DATA_LIST')

  },

  watch: {

  },
};
</script>

<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'SF Pro Text';

  font-style: normal;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}
.arrow-light {
  path {
    fill: #fff;
  }
}


.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  //margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }

  i {
    margin-left: 8px;
  }
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

a{
  // remove the blue highlight
  //-webkit-tap-highlight-color: transparent;
  // remove the tap highlight for links and buttons
  //-webkit-tap-highlight-color: rgba(0,0,0,0);
  color: #6E6E6E;
  //text-decoration: none;
  //font-size: 14px;

}

p{

  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */


  /* --c-black-20 */

  color: #6E6E6E;
}

h2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

p a {
  display: none;
}

</style>
