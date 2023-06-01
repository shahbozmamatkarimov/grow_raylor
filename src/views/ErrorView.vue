<template>
  <div class="flex items-center justify-center min-h">
    <div class="error">
      <p class="p">404</p>
      <div class="page-ms">
        <p class="page-msg">The page is not found</p>
        <router-link to="/" class="go-back underline">Go Back</router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.error {
  text-align: center;
}
.error .p {
  color: #c0d7dd;
  font-size: 100px;
  font-family: "Anton", sans-serif;
  font-family: "Combo", cursive;
}

.error p.page-msg {
  text-align: center;
  color: #c0d7dd;
  font-size: 30px;
  font-family: "Combo", cursive;
  margin-bottom: 40px;
}
.go-back {
  font-size: 30px;
  font-family: "Combo", cursive;
  padding: 10px 20px;
  transition: 0.3s linear;
  border-radius: 10px;
  background: #c0d7dd;
  color: #33265c;
  box-shadow: 0 0 10px 0 #c0d7dd;
}
.go-back:hover {
  box-shadow: 0 0 20px 0 black;
}

.go-back:active {
  box-shadow: none;
}
</style>