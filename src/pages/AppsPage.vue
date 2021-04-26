<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 mb-5">
        <div
          class="portfolio-item mx-auto"
          data-toggle="modal"
          data-target="#modal710"
        >
          <div
            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
          >
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="far fa-eye fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="../assets/img/710.jpg" alt="..." />
        </div>
      </div>
      <!-- Portfolio Item 2-->
      <div class="col-md-6 col-lg-4 mb-5">
        <div
          class="portfolio-item mx-auto"
          data-toggle="modal"
          data-target="#keeprmodal"
        >
          <div
            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
          >
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="far fa-eye fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="../assets/img/keepr1.jpg" alt="..." />
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-5">
        <div
          class="portfolio-item mx-auto"
          data-toggle="modal"
          data-target="#buglogmodal"
        >
          <div
            class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
          >
            <div class="portfolio-item-caption-content text-center text-white">
              <i class="far fa-eye fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="../assets/img/buglog.jpg" alt="..." />
        </div>
      </div>
    </div>
  </div>
  <Modal710 />
  <KeeprModal />
  <BugLogModal />
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
.row {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-item {
  cursor: pointer;
  position: relative;
  display: block;
  max-width: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.portfolio-item-caption {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  background-color: rgba(26, 188, 156, 0.9);
}

.portfolio-item-caption:hover {
  opacity: 1;
}

.portfolio-item-caption-content {
  font-size: 1.5rem;
}

.portfolio-modal .portfolio-modal-title {
  font-size: 2.25rem;
  line-height: 2rem;
}

@media (min-width: 992px) {
  .portfolio-modal .portfolio-modal-title {
    font-size: 3rem;
    line-height: 2.5rem;
  }
}
/* img {
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
} */
</style>
