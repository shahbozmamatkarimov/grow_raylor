<script setup>
import { onMounted, reactive } from "vue";
const res = reactive({
  width: 0,
});
window.addEventListener("resize", () => {
  res.width = window.outerWidth;
});

onMounted(() => {
  res.width = window.innerWidth;
});
</script>
<template>
  <div class="flex mx" :class="{ 'flex-col': res.width < 992 }">
    <div
      class="flex about justify-center"
      :class="{ 'flex-wrap w-3': res.width > 992 }"
    >
      <div class="text-center box-shadow p-10">
        <h1 class="fb">Adnan</h1>
        <h3>Outreacher And Organiser</h3>
        <p>
          Young Entrepreneur With <br :class="{ hidden: res.width < 500 }" />
          The Ability To Provide <br :class="{ hidden: res.width < 500 }" />The
          Best Result For Our<br :class="{ hidden: res.width < 500 }" />
          Client.
        </p>
      </div>
      <div class="between text-center box-shadow p-10">
        <h1 class="fb">Naman</h1>
        <h3>Media Buyer</h3>
        <p>
          Able And Effective In<br :class="{ hidden: res.width < 500 }" />
          Providing The Best<br :class="{ hidden: res.width < 500 }" />
          Results For All Our <br :class="{ hidden: res.width < 500 }" />Clients
        </p>
      </div>
      <div class="text-center box-shadow p-10">
        <h1 class="fb">Ahmad</h1>
        <h3>Sales Closer</h3>
        <p>
          Able And Effective In<br :class="{ hidden: res.width < 500 }" />
          Providing The Best<br :class="{ hidden: res.width < 500 }" />
          Results For All Our<br :class="{ hidden: res.width < 500 }" />
          Clients
        </p>
      </div>
    </div>

    <div
      class="flex w-60 flex-col m-auto items-center justify-center"
      :class="{ 'flex-wrap w-full': res.width <= 992 }"
    >
      <div class="about2">
        <div>
          <h1 class="fb cwhite">OUR VISION</h1>
          <p>
            We have a very efficient working approach from our point of view, so
            that we as a team will always provide the best results for our
            clients.
          </p>
        </div>
        <div>
          <h1 class="fb cwhite">OUR GOALS</h1>
          <p>
            Demonstrate our ability to grow other businesses from our strategies
            and ideas.
          </p>
        </div>
        <div>
          <h1 class="fb cwhite">OUR TEAM</h1>
          <p>
            We are a rigid team and our agency operation is very effective. We
            communicate and convey opinions, ideas and strategies in the right
            way.
          </p>
        </div>
      </div>
    </div>
    <div class="about3 w-full flex justify-center gap flex-wrap">
      <img src="../assets/svg/facebookads.svg" alt="img" />
      <img src="../assets/svg/googleads.svg" alt="img" />
      <img src="../assets/svg/tiktok.svg" class="tiktok" alt="img" />
    </div>
  </div>
</template>


<style scoped>
.about {
  padding-left: 50px;
  margin: 20px 0;
}
.about div {
  max-width: 40vh;
  min-width: 40vh;
  font-size: 10px !important;
  line-height: 21px;
}

.about2 {
  background: url("../assets/svg/aboutimage.svg");
  width: 100%;
  border-radius: 20px;
  padding: 50px;
  background-color: #f9e41b;
  box-shadow: 1px 2px 14px 8px #fad039a9;
  margin-bottom: 20px;
}

.about3 {
  background: linear-gradient(90deg, #0094ff 0%, #0074c9 100%);
  margin-top: 50px;
}
.about2 p {
  font-size: 25px;
  line-height: 25px;
}

.about2 h1 {
  padding: 10px 0;
}

.between {
  margin: 45px 20px !important;
}

p {
  padding-top: 10px;
  font-size: 16px;
}

.w-full {
  width: 100% !important;
}

@media (min-width: 992px) {
  .about{
    max-width: 30%;
  }
}

@media (max-width: 992px) {
  .about {
    padding-left: 5px;
    margin: 20px auto;
  }

  .about div {
    margin: 12px !important;
  }
  .about2 {
    max-width: 80% !important;
    min-width: 80% !important;
  }
}

@media (max-width: 450px) {
  .tiktok {
    height: 100px;
  }
}

@media (max-width: 350px) {
  .about2 {
    font-size: 12px;
  }
  .about2 p {
    font-size: 15px;
  }
}
</style>