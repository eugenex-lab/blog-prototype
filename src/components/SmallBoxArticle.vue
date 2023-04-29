<template>
  <div class="box">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <a href="#">Learn More</a>
  </div>

</template>

<script>
export default {
  name: "SmallBoxArticle",
}
</script>

<style scoped>

.box {
  width: 100%;
  max-width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.box h2 {
  margin-top: 0;
}

.box a {
  display: inline-block;
  margin-top: 10px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.box {
  width: 100%;
  max-width: 358px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

</style>