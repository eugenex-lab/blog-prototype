<template>



    <button class="load-button">
      <span>Send</span>
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

export default {
  name: "JoinButton",
  methods: {

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
  }

  }
</script>



<style scoped lang="scss">

  $btn-bg-color: #004B97;
  $btn-txt-color: #fff;

  %button-default{
    color: #fff;
    color: #fff;
    background-color: #000000;
    /* padding: 0px; */
    /* border: 0px; */
    font-size: 20px;
    width: 177px;
    //height: 0px;
    outline: 0;
    /* display: block; */
    height: 4rem;
    margin-bottom: 4rem;
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