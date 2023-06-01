<script setup>
import { onMounted, ref } from "vue";

const width = ref(0);
const email = ref("");

function sendMessage(){
  // sendMessage is called
  console.log(email.value);
  email.value = "";
}

window.addEventListener("resize", () => {
  width.value = window.outerWidth;
});

onMounted(() => {
  width.value = window.innerWidth;
});
</script>
<template>
  <footer>
    <div class="flex" :class="{ 'flex-col': width < 1270 }">
      <div
        class="flex"
        :class="{ 'half-w': width >= 1270, 'flex-col': width <= 700 }"
      >
        <div :class="{ 'half-w': width > 700, 'w-full pad': width <= 700 }">
          <h1 class="cwhite f-md">About</h1>
          <ul class="pad">
            <li>History</li>
            <li>Our Team</li>
            <li>Terms Of Condition</li>
            <li>Privacy Policy</li>
            <li>Other Business</li>
          </ul>
        </div>
        <div :class="{ 'half-w': width > 700, 'w-full pad': width <= 700 }">
          <h1 class="cwhite f-md">Services</h1>
          <ul class="pad">
            <li>Digital Services</li>
            <li>High Ticket Products</li>
            <li>Advertising Campaigns</li>
            <li>Web Creation</li>
            <li>Payment Methods</li>
          </ul>
        </div>
      </div>
      <div :class="{ pad: width < 1270, 'half-w text-end': width >= 1270 }">
        <h1 class="cwhite f-md">Subscription</h1>
        <p class="pad fs-25">
          Subscriptions can generate spam in your email inbox.
        </p>
        <form @submit.prevent="sendMessage" class="pad">
          <input
            type="email"
            placeholder="Enter your gmail..."
            class="cwhite bgdarky fb"
            v-model="email"
          />
          <input type="submit" value="SUBSCRIBE" class="cwhite bgblue fb" />
        </form>
        <div class="icon-group">
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-twitter"></i>
        </div>
      </div>
    </div>
    <div>
      <h6 class="text-center contain pad fb">GROW RAYLOR LLC.</h6>
    </div>
  </footer>
</template>


<style scoped>
footer {
  padding: 50px;
  background: #181818;
  color: grey;
  line-height: 50px;
  font-size: 25px;
}

input {
  padding: 15px;
  border: none;
}

input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari/Edge */
  color: white;
}

input:focus {
  outline: none;
}

form :first-child {
  width: 60%;
}

.icon-group i {
  background: #fff;
  color: #181818;
  border-radius: 50%;
  padding: 2px;
  font-size: 40px;
}

.icon-group {
  display: flex;
  justify-content: end;
  gap: 1rem;
  padding-top: 60px;
}

@media (max-width: 1270px) {
  footer {
    padding: 50px 200px;
  }

  .icon-group {
    justify-content: start;
  }
}

@media (max-width: 992px) {
  footer {
    padding: 50px;
  }
}

@media (max-width: 700px) {
  footer {
    padding: 50px;
    font-size: 20px;
  }
}

@media (max-width: 370px) {
  form :first-child {
    width: 100%;
  }
}
</style>