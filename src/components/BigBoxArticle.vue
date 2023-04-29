<template>

      <div class="big-box">
        <div class="left-section">
          <img src="https://picsum.photos/200/300" alt="Image description">
        </div>
        <div class="right-section">
          <div class="details-row">
            <span class="category-title">Category title</span>
            <span class="dot"></span>
            <span class="hours">2 hours ago</span>
          </div>
          <h2 class="article-title">Article Title</h2>
          <p class="article-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in est eget erat volutpat placerat. Suspendisse vel orci lobortis, eleifend elit et, euismod eros. Ut molestie ultricies augue, a tincidunt nulla vulputate vel. Fusce tincidunt consectetur feugiat. Donec nec congue dolor.</p>
        </div>
      </div>

</template>

<script>
export default {
  name: "BigBoxArticle"
}
</script>

<style scoped lang="scss" >


.big-box {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  /* border-radius: 5px; */
  max-height: 296px;
  max-width: 1160px;
  border: 1px solid #F5F5F5;
  border-radius: 5px;
  /* max-width: 1200px; */
  margin: 0 auto 20px auto;


  height: 600px;
}

.left-section {

  margin-right: 20px;

  width: 500px;
  height: 280px;
}

.left-section img {
  width: 100%;
  height: 100%;
}

.right-section {
width: 60%;
}

.details-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.meta-info span {
margin-right: 10px;
}

.hours {

  /* small */

  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;

  /* --c-black-20 */

  color: #6E6E6E;
}

.category-name {
font-size: 16px;
font-weight: bold;
color: #333;
}

.category-title {

  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;

  /* --c-black-30 */

  color: #4B4B4B;
}

.article-title {
font-size: 24px;
font-weight: bold;
margin-bottom: 10px;
}

.article-description {
font-size: 16px;
color: #666;
}

.dot {
  height: 3px;
  width: 3px;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}

</style>