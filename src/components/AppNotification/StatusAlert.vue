<template>
  <div class="notification" v-if="getShowStatusAlert">

  <div  v-show="getStatusAlertWarning" @click="initNotifications" class="alert alert-warn"> {{this.getShowStatusAlert}}Something Went wrong check your Network, and try again</div>
<!--  <div @click="initNotifications" class="alert alert-info">Here's some information you may find useful!</div>-->
    <div v-show="getStatusAlertError" @click="initNotifications" class="alert alert-error">An error occurred while processing your payment, please try again</div>
<!--    <div v-show="getStatusAlertError" @click="initNotifications" class="alert alert-error">An error occurred while processing your payment, please try again</div>-->
  <div v-show="getStatusAlertSuccess" @click="initNotifications" class="alert alert-success">Success!Your registration is now complete, check your email for payment confirmation</div>
  </div>
</template>

<script>
import $ from 'jquery';
import {mapGetters} from "vuex";
export default {
  name: "StatusAlert",
  mounted() {
  },
  computed: {

    ...mapGetters([ 'getShowStatusAlert' , 'getStatusAlertWarning', 'getStatusAlertError' , 'getStatusAlertSuccess' ]),


  },

  methods: {
    initNotifications() {
      $('.alert').click(function() {
        $(this).fadeOut();


      });

    }

    // write in vue

    // initNotifications() {
    //   const notifications = new Notifications('.notification', { animationInName: 'fadein' });
    //   notifications.init();
    // }

  }
}
</script>

<style scoped lang="scss">
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  height: 100%;
  padding: 25px;

  background-color: #f9f9f9;
}

.alert {
  margin: 10px 0px;
  padding:12px;
  border-radius: 5px;

  font-family: 'Open Sans', sans-serif;
  font-size: .9rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.alert:hover {
  cursor: pointer;
}

.alert:before {
  padding-right: 12px;
}

.alert:after {
  content: '\f00d';
  font-family: 'FontAwesome';
  float: right;
  padding: 3px;
  &:hover {
    cursor: pointer;
  }
}

.alert-info {
  color: #00529B;
  background-color: #BDE5F8;
  border: 1px solid darken(#BDE5F8, 15%);
}

.alert-info:before {
  content: '\f05a';
  font-family: 'FontAwesome';
}

.alert-warn {
  color: #9F6000;
  background-color: #FEEFB3;
  border: 1px solid darken(#FEEFB3, 15%);
}

.alert-warn:before {
  content: '\f071';
  font-family: 'FontAwesome';
}

.alert-error {
  color: #D8000C;
  background-color: #FFBABA;
  border: 1px solid darken(#FFBABA, 15%);
}

.alert-error:before {
  content: '\f057';
  font-family: 'FontAwesome';
}

.alert-success {
  color: #4F8A10;
  background-color: #DFF2BF;
  border: 1px solid darken(#DFF2BF, 15%);
}

.alert-success:before {
  content: '\f058';
  font-family: 'FontAwesome';
}


.notification {
  position: absolute;
  top: 15%;
  transform: translateY(-50%);
  right: 10px;
  width: 28rem;
  padding: 10px;
  z-index: 999;

}

.alert {
display: block;
margin-bottom: 10px;
padding: 10px;
border-radius: 5px;
font-size: 14px;
  z-index: 999;
}


</style>