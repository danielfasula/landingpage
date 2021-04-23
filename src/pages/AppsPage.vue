<template>
  <div class="container-fluid">
    <div class="row d-flex">
      <div class="col-5">
        <div class="item-img">
          <img src="../assets/img/710.jpg" alt="" />
          <div class="item-img-overlay">
            <div class="overlay-info full-width">
              <span class="icon">
                <i
                  class="far fa-eye"
                  data-toggle="modal"
                  data-target="#modal710"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-5">
        <div class="item-img">
          <img src="../assets/img/keepr1.jpg" alt="" />
          <div class="item-img-overlay">
            <div class="overlay-info full-width">
              <span class="icon">
                <i
                  class="far fa-eye"
                  data-toggle="modal"
                  data-target="#modal710"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>
    </div>
    <div class="col-5">
        <div class="card">
          <img src="../assets/img/keepr1.jpg" alt="" />
          <div class="card-img-overlay">
            <h5
              class="card-title keepr"
              data-toggle="modal"
              data-target="#modalkeepr"
              aria-hidden="true"
            >
              KEEPR
            </h5>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <Modal710 />
  <KeeprModal />
</template>

<script>
export default {
  name: 'AppsPage',
  setup() {
    return {}
  }
}
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
.item-img {
  position: relative;
  margin-bottom: 30px;
  transition: all 0.4s;
}
.item-img-overlay {
  display: flex !important;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #6f64e7;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.overylay-info {
  margin-top: 90px;
}
.icon {
  position: absolute;
  display: none;
  right: 5%;
  bottom: 35%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-right: 130px;
  margin-bottom: 35px;
  border: 1px solid #fff;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
.item-img:hover .item-img-overlay {
  opacity: 0.5;
}
.item-img:hover .icon {
  display: inline-block;
  z-index: 1;
}
.keepr {
  color: white;
  text-shadow: 2px 2px black;
}
</style>
