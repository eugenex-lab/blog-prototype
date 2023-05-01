<template>



    <button
        @click="initiatePayment()"
        class="load-button">
      <span>JOIN US!</span>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <rect x="0" y="0" width="4" height="10" fill="#333">
        <animateTransform attributeType="xml"
                          attributeName="transform" type="translate"
                          values="0 0; 0 20; 0 0"
                          begin="0" dur="0.6s" repeatCount="indefinite" />
      </rect>
        <rect x="10" y="0" width="4" height="10" fill="#333">
        <animateTransform attributeType="xml"
                          attributeName="transform" type="translate"
                          values="0 0; 0 20; 0 0"
                          begin="0.2s" dur="0.6s" repeatCount="indefinite" />
      </rect>
        <rect x="20" y="0" width="4" height="10" fill="#333">
        <animateTransform attributeType="xml"
                          attributeName="transform" type="translate"
                          values="0 0; 0 20; 0 0"
                          begin="0.4s" dur="0.6s" repeatCount="indefinite" />
      </rect>
    </svg>
    </button>



</template>

<script>
import $ from 'jquery'
// eslint-disable-next-line no-unused-vars
// import router from "@/router";

// import router from "@/router";


export default {
  name: "JoinButton",
  methods: {

    initiatePayment() {
      console.log("Payment Initiated");
        window.FlutterwaveCheckout({
          public_key: `${process.env.VUE_APP_PUBLIC_KEY}`,
          tx_ref: "new-sale"+ new Date(),
          amount: 25,
          currency: "USD",
          country: "NG",
          payment_options: "card",
          customer: {
            email: "kolapo.eugene@gmail.com",
            phone_number: "+234702909304",
            name: "Evan You",
          },
          callback: function(data) {
            console.log(data.status);
            console.log("Here is the callback" + data);

            if (data.status === "successful") {
              // redirect to a success page
              // alert("Payment Successful")


              // redirect to a / with location.ref

              // commit to vuex
              // set getShowStatusAlert to true
              // set getStatusAlertSuccess to true
              // this.$store.commit('SET_STATUS_ALERT_SUCCESS', true)



              // AFTER 10 SECONDS, REDIRECT TO THE DASHBOARD
              setTimeout(function() {
                window.location.href =  "/";
              }, 10000);  // 10 seconds

            } else {
              // redirect to a failure p
              // this.$store.commit('SET_STATUS_ALERT_ERROR', true)


              setTimeout(function() {
                // alert("Redirecting to Dashboard")

                window.location.href =  "/";




                // set getShowStatusAlert to true
                // set getStatusAlertError to true


              }, 10000);  // 10 seconds
            }

          },
          onclose: function() {},
          customizations: {
            title: "Dasdas Blog",
            description: "Payment for Blog Membership",
            logo: "https://imgtr.ee/images/2023/05/01/J5rMY.png",
          },
        });
    }

  },

  mounted() {
    $(document).ready(function() {
      $("button.load-button").on("click", function() {
        var btndom = $(this);
        btndom.addClass("loading-start");
        btndom.attr("disabled", true);
        setTimeout(function() {
          btndom.removeClass("loading-start").removeAttr("disabled");
        }, 5000);
      });
    });
  },
  created() {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },



}



</script>



<style scoped lang="scss">

  $btn-bg-color: #004B97;
  $btn-txt-color: #fff;

  %button-default{
    font-size: 20px;
    outline: 0;
    /* display: block; */
    margin-bottom: 4rem;
    width: 15rem;
    height: 4REM;
}

button.load-button{
  @extend %button-default;
  span{
    transition: all 1s;
    opacity:1;
  }
  svg{
    display:none;
    margin:0 auto;
    transition: all 1s;
    path,rect{
      fill: $btn-txt-color;
    }
  }
}

button.loading-start{
  span{
    display: none;
    opacity: 0;
  }
  svg{
    display: block;
    opacity: 1;
  }
}

div.btn-content{
  float: left;
  margin: 0 20px;
}


/// add on hover change the background color to white and the text color to black and border to black on on hover

button.load-button:hover{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:active{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:focus{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:disabled{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:visited{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:link{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:after{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }

  button.load-button:before{
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    span{
      color: #000;
    }
    svg{
      path,rect{
        fill: #000;
      }
    }
  }






</style>