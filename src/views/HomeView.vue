<script setup>
import { onMounted, reactive } from "vue";
const res = reactive({
  step: 0,
  width: 0,
  left: 20,
});

const slider = setInterval(() => {
  if (res.step == 2) {
    res.step = 0;
  } else {
    res.step += 1;
  }
}, 2000);

function next() {
  if (res.step == 2) {
    res.step = 0;
    return;
  }
  res.step += 1;
}

function back() {
  if (res.step == 0) {
    res.step = 2;
    return;
  }
  res.step -= 1;
}

window.addEventListener("resize", () => {
  res.width = window.outerWidth;
});

onMounted(() => {
  res.width = window.innerWidth;
  console.log(res.width);
});
</script>

<template>
  <main>
    <section class="flex">
      <div class="halfleft contain">
        <div>
          <h1 class="title fb line-height c-t-shadow">
            You
            <span><i class="fb cyellow underline-y t-shadow">build</i></span> a
            base, and <br />
            the
            <span><i class="fb cblue underline-b t-shadow">growth</i></span>
            mounts the <br />
            <span><i class="fb underline-d dark:underline-w">empire</i></span
            >.
          </h1>
          <p class="f-lg pad">
            Digital Marketing <span class="cblue f-lg">Agency</span> For
            Promotion
          </p>
          <div class="flex justify-between pad btn-group">
            <button class="min-w ready bgyellow cblue box-shadow">
              GET READY
            </button>
            <button class="min-w info cblue bgwhite box-shadow">
              MORE INFO
            </button>
          </div>
        </div>
        <div
          class="content"
          :class="{
            'flex-col justify-center': res.width < 450,
            'flex justify-between': res.width >= 450,
          }"
        >
          <div
            class="box bgyellow br-lg text-center max-w m-auto min-w box-shadow"
          >
            <div class="flex p-r">
              <h3 class="flex box-t btn bgblue fb cwhite">
                <span class="cyellow fbr">1+</span> Years Of:
              </h3>
              <img
                class="p-a topIcon1"
                src="../assets/svg/head.svg"
                alt="img"
              />
            </div>
            <p class="fb cblack">
              In-depth <br />
              <span class="cblue fb">marketing</span><br />
              knowledge
            </p>
          </div>
          <div
            class="box bgblue br-lg text-center min-w max-w m-auto p-r box-shadow"
            :class="{ 'top-10': res.width < 450 }"
          >
            <p class="free cyellow f-sm fb p-a top">(Free)</p>
            <div class="flex justify-center p-r">
              <h3 class="box-t btn bgyellow cblue fb">Consultations</h3>
              <img
                class="p-a topIcon"
                src="../assets/svg/arrow.svg"
                alt="img"
              />
            </div>
            <p class="fb cwhite">
              Free <br /><span class="cyellow fb">consultancy</span> for <br />
              our clients
            </p>
          </div>
        </div>
      </div>
      <div class="halfright p-a">
        <img src="../assets/svg/group7.svg" alt="img" />
        <img src="../assets/svg/ellipse4.svg" class="ellipse1" alt="img" />
        <img src="../assets/svg/ellipse5.svg" class="ellipse2" alt="img" />
      </div>
    </section>

    <section id="bgimage" class="bgimage cblack flex justify-center p-r">
      <div class="slider flex items-center justify-center" @click="back()">
        <i
          class="bx bx-chevron-left fs-lg"
          :class="{ hidden: res.width >= 768 }"
        ></i>
      </div>
      <div
        class="bgwhite box-shadow border br-md w-30 text-center"
        :class="{ hidden: res.step != 0 && res.width <= 768 }"
      >
        <div class="envelope2 p-r">
          <img src="../assets/svg/facebook/polygon.svg" alt="img" />
          <img
            class="p-a"
            src="../assets/svg/facebook/facebook.svg"
            alt="img"
          />
        </div>
        <h4 class="fb">
          How to paint an <br />
          <span class="cyellow fb">advertisement</span>
        </h4>
        <p class="f-md">
          <span class="cblue f-md">Facebook</span> Ads, our main <br />
          source for advertising!
        </p>
      </div>
      <div
        class="bgwhite box-shadow border br-md w-30 text-center"
        :class="{ hidden: res.step != 1 && res.width <= 768 }"
      >
        <div class="envelope1 p-r">
          <img src="../assets/svg/box/polygon1.svg" alt="img" />
          <img class="p-a" src="../assets/svg/box/boxicon.svg" alt="img" />
        </div>
        <h4 class="fb"><span class="cblue fb">Appointment</span> settings!</h4>
        <p class="f-md">
          Appointment setting is <br />
          the <span class="cyellow f-md">fundamental</span> part of <br />
          making you grow!
        </p>
      </div>
      <div
        class="bgwhite box-shadow border br-md w-30 text-center"
        :class="{ hidden: res.step != 2 && res.width <= 768 }"
      >
        <div class="envelope p-r">
          <img src="../assets/svg/user/polygon.svg" alt="img" />
          <img class="p-a" src="../assets/svg/user/user.svg" alt="img" />
        </div>
        <h4 class="fb">Lead <span class="cblue fb">generation</span></h4>
        <p class="f-md">
          We turn them directly <br />
          into <span class="cblue f-md">customers</span>!
        </p>
      </div>
      <div class="w-30 amplifier p-r z-1" :class="{ hidden: res.width < 1150 }">
        <img src="../assets/svg/amplifier.svg" alt="img" />
      </div>
      <div class="slider flex items-center justify-center" @click="next()">
        <i
          class="bx bx-chevron-right fs-lg"
          :class="{ hidden: res.width >= 768 }"
        ></i>
      </div>
      <div class="p-a left-8">
        <!-- <img src="../assets/svg/bgimage2.svg" alt="img" /> -->
      </div>
    </section>

    <section>
      <h1 class="text-center fs-lg fb pad">
        Where We <span class="cblue fb">Highlight</span>
      </h1>
      <p
        class="text-center fs-md pad m-auto"
        :class="{ 'half-w': res.width > 970, 'w-70': res.width <= 970 }"
      >
        According to our niches, we highlight and provide a better result to
        these types of businesses! We specialise in one to study your market and
        offer the best possible marketing.
      </p>
      <div
        class="section3 flex justify-center items-center w-70 m-auto mb-100 pad"
      >
        <div class="w-3">
          <div class="box-shadow min-h w-70 bgwhite cblack border-top">
            <img
              src="../../public/image1.png"
              class="w-full border-top"
              alt="img"
            />
            <div class="pad-10">
              <h2 class="f-md">Car Modifier Shops</h2>
              <h5 class="cblue fb">CMS</h5>
              <p class="pad f-md f-sm">
                We have a deep knowledge of how this business works, able to
                easily increase their sales and more.
              </p>
              <br />
              <p class="f-sm f-md">
                We use adverti sing campaigns to improve the visibility of the
                business, above all to differentiate and be original!
              </p>
            </div>
          </div>
        </div>
        <div class="w-3">
          <div class="box-shadow min-h w-70 bgwhite cblack border-top">
            <img
              src="../../public/image2.png"
              alt="img"
              class="w-full border-top"
            />
            <div class="pad-10">
              <h2 class="f-md">Aesthetic Medicine Clinic</h2>
              <h5 class="cblue fb">MedSpa</h5>
              <p class="pad f-md f-sm">
                Easy and quick to increase the simplicity of the final sale, we
                work with unrecognisable Med Spas or little pupular between the
                integrated area.
              </p>
              <br />
              <p class="f-sm f-md">
                We have expertise in business operation and know how to deliver
                the right value.
              </p>
            </div>
          </div>
        </div>
        <div class="w-3">
          <div class="box-shadow min-h w-70 bgwhite cblack border-top">
            <img
              src="../../public/image3.png"
              class="w-full border-top"
              alt="img"
            />
            <div class="pad-10">
              <h2 class="f-md">Digital Business</h2>
              <h5 class="cblue fb">Online Business</h5>
              <p class="pad f-md f-sm">
                As our business works, they have their own functionality, we
                help to create websites, advertise, and increase sales.
              </p>
              <br />
              <p class="f-sm f-md">
                In case of e-c ommerce or dropshipping online shops, it is
                easier and sooner we will be able to achieve results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.title {
  font-family: "Inter";
  font-size: 35px;
}

.info {
  border: 3px solid #0094ff;
}

.halfleft {
  width: 40%;
}

.info,
.ready {
  font-weight: bold;
  padding: 10px 50px;
  border-radius: 30px;
  font-size: 14px;
}

.ready {
  border: none;
}

.content {
  padding-top: 100px;
  padding-right: 50px;
  gap: 50px;
  margin: 0 auto;
}
.box {
  padding: 30px 20px;
}

.btn {
  border-radius: 10px;
  padding: 0 10px;
}

.free {
  padding-top: 15px;
}

.topIcon {
  top: -80px;
  right: -90px;
}

.topIcon1 {
  top: -70px;
  right: -70px;
}

.box-t {
  margin: 10px 0 60px;
}

.btn-group {
  padding-right: 50px;
  gap: 10px;
}

.c-t-shadow {
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.35);
}

.halfright {
  margin: 0 auto;
  position: relative;
}

.ellipse2,
.ellipse1 {
  position: absolute;
}

.ellipse1 {
  bottom: 20%;
  left: 5%;
  z-index: -1;
}

.ellipse2 {
  top: 15%;
  right: 2%;
  z-index: -1;
}

.bgimage {
  min-height: 400px;
  min-width: 100%;
  background-image: url(../assets/svg/bgimage.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: yellow;
  margin-left: -50px;
}

.bgimage h4 {
  height: 80px;
}

.bgimage .bgwhite {
  padding: 15px;
  position: relative;
  z-index: 99;
  max-height: 320px;
  max-width: 230px;
  min-width: 230px;
  margin: 30px;
}

.envelope :nth-child(2) {
  top: 15px;
  left: 35%;
}

.envelope1 :nth-child(2) {
  left: 35%;
}

.envelope2 :nth-child(2) {
  top: -15px;
  left: 35%;
}

.section3 {
  padding-left: 30px;
}

.amplifier {
  margin-top: -100px;
}

.slider {
  background: rgba(128, 128, 128, 0.325);
  margin: 35px 0;
  border-radius: 20px;
}

/* responsive */

@media (max-width: 1300px) {
  .bgimage .bgwhite {
    margin: 30px 10px;
  }
}

@media (max-width: 1100px) {
  .section3 .w-3 .w-70 {
    display: flex;
    flex-direction: column;
    width: 90% !important;
  }

  .bgimage {
    margin-left: 0;
  }
  .halfright {
    position: absolute;
    right: 0;
    z-index: -1;
  }
  .halfleft {
    width: 50%;
  }
}

@media (max-width: 1000px) {
  .section3 {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }
  .section3 .w-3 {
    margin-top: 40px;
  }
}

@media (max-width: 860px) {
  .halfleft {
    width: 80%;
  }
  .halfright {
    opacity: 20%;
  }
}

@media (max-width: 768px) {
  .section3 .w-3 {
    width: 80%;
    padding-left: 30px;
  }
}

@media (max-width: 571px) {
  .halfleft {
    width: 100%;
    padding-left: 30px;
    font-size: 10px;
  }
  .halfleft .title {
    font-size: 23px;
  }
  .section3 .w-3 {
    width: 100%;
    padding-left: 0;
  }

  .info,
  .ready {
    font-weight: bold;
    padding: 5px 30px;
    border-radius: 30px;
    font-size: 13px;
  }
}

@media (max-width: 450px) {
  .content {
    padding-right: 10px;
  }
}
</style>