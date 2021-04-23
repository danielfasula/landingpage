<template>
  <div class="about container-fluid col-12 mt-4">
    <div class="row justify-content-center align-items-center">
      <div class="col-3">
        <img class="img-fluid" src="../assets/img/selfie.jpg" alt="" />
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col">
            <h4 class="mb-3">Hi, I'm <span class="name">Daniel</span></h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, numquam? Totam modi laboriosam amet illo ullam fugit
              exercitationem ex vitae fugiat, necessitatibus quis perspiciatis
              repellendus! Expedita ratione necessitatibus iste quos.
            </h6>
          </div>
        </div>
        <div class="row d-flex mt-3">
          <div class="col-4 bold">
            <p>Name:</p>
            <p>Age:</p>
            <p>Phone Number:</p>
            <p>Email:</p>
          </div>
          <div class="col-6">
            <p>Daniel Fasula</p>
            <p>26</p>
            <p>208-447-0035</p>
            <p>danielfasula@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  color: whitesmoke;
}
.name {
  color: #6f64e7;
}
img {
  border-radius: 150%;
  height: 30vh;
}
.bold > p {
  font-weight: bold;
}
p {
  line-height: 0.5;
}
</style>
