<template>
  <div
    class="modal fade"
    id="modal710"
    tabindex="-1"
    role="dialog"
    aria-labelledby="710"
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
            <div id="control" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block"
                    src="../assets/img/710(1).jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/7101.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/7102.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/7103.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/7104.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/7105.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/7106.jpg"
                    alt="Second slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#control"
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
                href="#control"
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
  name: 'Modal710',
  props: [],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.move {
  padding-right: 10px !important;
  margin-top: -15px !important;
  margin-bottom: 10px;
}

img {
  height: 70vh;
}
</style>
