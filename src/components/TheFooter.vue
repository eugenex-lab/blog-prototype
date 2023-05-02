<template>
  <footer>
    <div class="container">
      <h2  class="title">Join our Team of Writers</h2>
      <p class="inline-p">On dasdas, writers earn a living doing what they love.</p>
      <p class="inline-p second-paragraph">Getting started is easy. Just pay a one time $25 fee and everything is ready to go.</p>
      <JoinButton>
      </JoinButton>
    </div>
</footer>
</template>

<script>
import JoinButton from "@/components/Buttons/FlutterWaveJoinButton";
export default {
  name: 'TheFooter',
  components: {JoinButton},
  methods: {
    joinUs() {
      // Implement your joinUs() method here
    }
  }
}
</script>

<style scoped>

.title {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #2C2C2C;
    //padding-bottom: 4rem;

}

button {
  background-color: #000000;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 177px;
  height: 45px;
}

p{
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    color: #6E6E6E;
    width: 80%;
    text-align: center;
}

.inline-p {
    /* margin-bottom: 15px; */
    text-align: center;
    /* margin-top: -6rem; */
    padding-top: 1rem;
}

footer {
  /*background-color: #f2f2f2;*/
  padding: 15px 0;
}

.second-paragraph {
    padding-bottom: 2rem;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: space-between;
    height: 36rem;
    padding-top: 4rem;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
  }

  button {
    margin-top: 0;
  }



  .container > button {
    margin-left: 20px;
  }

}
</style>
