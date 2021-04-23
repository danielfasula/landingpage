<template>
  <div class="container-fluid d-flex">
    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/js-logo.png" alt="" />
            <h6 class="card-title">JavaScript</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/html-logo.png" alt="" />
            <h6 class="card-title">HTML</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/css-logo.png" alt="" />
            <h6 class="card-title">CSS</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/vue-logo.png" alt="" />
            <h6 class="card-title">VUE3</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/node-logo.png" alt="" />
            <h6 class="card-title">NODE.JS</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/csharp-logo.png" alt="" />
            <h6 class="card-title">C#</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/firebase-logo.png" alt="" />
            <h6 class="card-title">FireBase</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <img height="30" src="../assets/img/vscode-logo.png" alt="" />
            <h6 class="card-title">VSCode</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  setup() {
    return {}
  }
}
</script>

<style scoped>
.card {
  min-height: 150px;
  text-align: center;
  background: #1d293e;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: whitesmoke;
  margin-bottom: 10px;
  transition: 0.5s;
}
.card-title {
  margin-top: 10px;
}
.card:hover {
  transform: translateY(-5px);
  border-color: #6f64e7;
}
.card:hover .card-body .card-title {
  color: #6f64e7;
}
</style>
