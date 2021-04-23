<template>
  <div
    class="modal fade"
    id="modalkeepr"
    tabindex="-1"
    role="dialog"
    aria-labelledby="keepr"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col move">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div id="keeprControl" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block"
                    src="../assets/img/keepr1.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/keepr2.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/keepr3.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/keepr4.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/keepr5.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/keepr6.jpg"
                    alt="Second slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#keeprControl"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#keeprControl"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeeprModal',
  props: [],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
img {
  max-height: 70vh;
  width: 90%;
}
.carousel-item {
  display: flex !important;
  justify-content: center;
}
</style>
