<template>
  <div class="reg_button">
    <a href="">
      вход

    </a>

  </div>
</template>

<script>
export default {
  name: "RegistrationBtn"
}
</script>

<style scoped>
.reg_button {
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #112130;
}

.reg_button a {
  text-decoration: none;
  color: #FFFEF1;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
  text-transform: uppercase;
}
</style>
