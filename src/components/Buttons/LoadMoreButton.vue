<template>

    <button class="button" @click="handleButtonClick">Load</button>

</template>

<script>
import $ from 'jquery';
export default {
  name: "JoinButton",
  methods: {
    handleButtonClick() {
      const button = $('.button');
      const spinner = '<span class="spinner"></span>';
      if (!button.hasClass('loading')) {
        button.toggleClass('loading').html(spinner);
      } else {
        button.toggleClass('loading').html('Load');
      }
    }
  }

}
</script>



<style scoped>


.my-button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 55px;
  /*gap: 10px;*/

  /*position: absolute;*/
  width: 177px;
  height: 45px;
  /*left: 631px;*/
  /*top: 1653px;*/

  background: #000000;

  color: #ffffff;
  font-size: 16px;
  /*border: none;*/
  cursor: pointer;
  border-radius: 0;

}


.my-button:hover {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000;
}



</style>