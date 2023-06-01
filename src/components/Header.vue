<template>
  <header>
    <nav>
      <h1 class="logo">
        <img src="../assets/svg/logo1.svg" alt="logo" class="logo1" />
        <img src="../assets/svg/logo2.svg" alt="logo" class="logo2" />
      </h1>
      <ul class="nav1">
        <li>
          <router-link to="/" class="fbr t-shadow underline cwhite pointer"
            >HOME</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="fbr t-shadow underline cwhite pointer"
            >ABOUT US</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="fbr t-shadow underline cwhite pointer"
            >CONTACT</router-link
          >
        </li>
        <li>
          <router-link
            to="/work_us"
            class="work fbr underline box-shadow cblue pointer"
            >WORK WITH US</router-link
          >
        </li>
      </ul>
      <ul class="nav2 pointer">
        <li>
          <i
            class="bx bx-menu pointer"
            @click="store.toggle = !store.toggle"
          ></i>
        </li>
      </ul>
      <ul
        class="dropdown p-a flex flex-col"
        :class="{ hidden: store.toggle }"
        @click="store.toggle = !store.toggle"
      >
        <li>
          <router-link to="/" class="fbr t-shadow underline cwhite pointer"
            >HOME</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="fbr t-shadow underline cwhite pointer"
            >ABOUT US</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="fbr t-shadow underline cwhite pointer"
            >CONTACT</router-link
          >
        </li>
        <li>
          <router-link
            to="/work_us"
            class="work fbr underline box-shadow cblue pointer"
            >WORK WITH US</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useToggleStore } from "../stores/toggle";
const store = useToggleStore();
</script>

<style scoped>
.router-link-active {
  color: white;
}

.router-link-exact-active {
  color: black;
}

.router-link {
  color: white;
}

* {
  margin: 0;
  padding: 0;
}

header {
  padding: 5px;
  background: linear-gradient(
    89.99deg,
    rgba(0, 148, 255, 0) 0.01%,
    #0074c9 99.98%
  );
}

.dropdown {
  background: #0075c9c8;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  top: 75px;
  right: 15px;
  gap: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-size: 15px;
}

.dropdown :last-child {
  padding: 5px 10px;
  border-radius: 20px;
}

nav {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
}

.nav1 {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: normal;
  color: #ffffff;
}

.logo {
  display: flex;
  align-items: center;
  height: 40px;
}

.logo1 {
  height: 100px;
  widows: 100px;
}

.logo2 {
  height: 53px;
  widows: 210px;
}

.work {
  background: #ffe500;
  padding: 5px 30px;
  border-radius: 20px;
}

.nav2 {
  display: none;
}

@media (max-width: 950px) {
  .nav1 {
    display: none;
  }
  .nav2 {
    display: block;
  }

  .nav2 li i {
    font-size: 40px;
  }

  .logo2 {
    height: 40px;
  }
}

@media (max-width: 420px) {
  .logo1 {
    height: 70px;
  }
  .logo2 {
    height: 30px;
  }
}
</style>