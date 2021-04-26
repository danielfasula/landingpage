<template>
  <div
    class="modal fade"
    id="keeprmodal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="keeprmodal"
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
            <div id="controlkeepr" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block img-fluid"
                    src="../assets/img/keepr2.jpg"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="../assets/img/keepr3.jpg"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="../assets/img/keepr4.jpg"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="../assets/img/keepr5.jpg"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="../assets/img/keepr6.jpg"
                    alt="..."
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#controlkeepr"
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
                href="#controlkeepr"
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
.move {
  padding-right: 10px !important;
  margin-top: -15px !important;
  margin-bottom: 10px;
}

img {
  height: 70vh;
}
</style>
