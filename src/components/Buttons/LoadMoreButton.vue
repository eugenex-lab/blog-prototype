<template>
  <div>
    <button class="my-button">Join Us</button>
  </div>
</template>

<script>
export default {
  name: "JoinButton"
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