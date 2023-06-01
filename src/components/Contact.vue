<template>
  <div class="contact flex justify-around">
    <div class="info">
      <div class="flex items-center min-w m-top pad">
        <i class="bx bxs-phone"></i>
        <div>
          <p>+91 9973860205</p>
          <p>+91 9204613799</p>
          <p>+91 989 878 626</p>
        </div>
      </div>
      <div class="email flex items-center">
        <i class="bx bxs-envelope"></i>
        <div>
          <p>eladanan007@gmail.com</p>
          <p>metagalaxy214@gmail.com</p>
        </div>
      </div>
      <div class="flex flex-col icons">
        <div class="flex items-center">
          <i class="bx bxl-twitter"></i>
          <p>/growraylor</p>
        </div>
        <div class="flex items-center">
          <i class="bx bxl-instagram"></i>
          <p>/growraylor</p>
        </div>
        <div class="flex items-center">
          <i class="bx bxl-facebook"></i>
          <p>/growraylor</p>
        </div>
      </div>
    </div>
    <div class="ordiv flex flex-col justify-center items-center">
      <span class="arrow"></span><span class="or">OR</span
      ><span class="arrow"></span>
    </div>
    <form @submit.prevent="sendMessage">
      <div>
        <div class="p-r m-top">
          <label for="name" class="p-a">Name:</label>
          <input v-model="message.name" type="text" id="name" minlength="2" required />
        </div>
        <div class="p-r m-top">
          <label for="email" class="p-a">Email:</label>
          <input v-model="message.email" type="email" id="email" minlength="2" required />
        </div>
      </div>
      <div class="message p-r">
        <label for="text" class="p-a">Message:</label>
        <textarea v-model="message.message" id="text"  minlength="10" rows="10" required></textarea>
      </div>
      <div>
        <button type="submit">
          <img
            src="../assets/svg/sendbutton.svg"
            alt="img"
            class="bgyellow sendbtn"
          />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const message = reactive({
  name: '',
  email: '',
  message: '',
})

function sendMessage(){
  console.log(message.name, message.email, message.message);
}
</script>

<style scoped>
.contact {
  padding: 80px 150px;
}
.contact i {
  font-size: 25px !important;
  padding: 10px;
}

.icons {
  margin-top: 70px;
}

.icons i {
  font-size: 15px !important;
  margin: 5px;
  margin-left: 15px;
  padding: 5px;
  background: #000;
  color: white;
  border-radius: 5px;
}

.email {
  padding: 40px 0;
}

form label {
  top: -13px;
  left: 15px;
  background: white;
  padding: 0 10px;
  color: rgba(128, 128, 128, 0.515);
}

form input,
textarea {
  width: 50vh;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid rgba(128, 128, 128, 0.515);
}

input:focus, textarea:focus{
  border: 2px solid rgba(128, 128, 128, 0.515);
  outline: none;
}

button {
  border: none;
  background: transparent;
}

.message {
  margin-top: 150px;
}

.arrow {
  width: 3px;
  height: 45%;
  background: #0094ff;
}

.or {
  color: #878787;
  padding: 10px;
}

.sendbtn {
  padding: 7px 20px;
  margin-top: 10px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.478);
}

@media (max-width: 992px) {
  .contact {
    padding: 80px 0px;
  }
}

@media (max-width: 700px) {
  form {
    margin: 0 auto;
  }
  .contact {
    flex-direction: column;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .info div {
    padding: 0;
    margin: 0;
  }

  .email {
    padding: 0;
  }

  .ordiv {
    flex-direction: row;
  }

  .arrow {
    width: 45%;
    height: 3px;
    background: #0094ff;
  }
}

@media (max-width: 570px) {
  .info {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 20px;
  }

  .arrow {
    width: 40%;
    height: 3px;
    background: #0094ff;
  }

  form input,
  textarea {
    width: 35vh;
  }
}
</style>