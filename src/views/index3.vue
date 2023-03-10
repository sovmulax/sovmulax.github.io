<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-3
 */
export default {
  components: { Navbar, Service, Features, Pricing, Blog, Contact, Footer }
};
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section class="hero-3-bg" id="home">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-4 col-lg-5">
              <h1 class="hero-3-title text-shadow mb-0">Cool & Amazing Landing Page</h1>
              <p
                class="text-muted mt-4 mb-0"
              >Itaque earum rerum tenetur sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur repellat.</p>
              <div class="mt-4 mb-5 pb-5">
                <a href="javascript: void(0);" class="btn btn-primary text-uppercase">Buy Now</a>
              </div>
              <div class="watch-video mb-4 mb-lg-0">
                <a href="javascript: void(0);" v-b-modal.modal class="video-play-icon text-dark">
                  <i class="mdi mdi-play play-icon-circle text-dark mr-3"></i>
                  <span class="icon">Watch The Video!</span>
                </a>
                <b-modal
                  id="modal"
                  hide-footer
                  size="lg"
                  centered
                  header-close-variant="white"
                  modal-class="video-modal"
                >
                  <youtube video-id="RnDC9MXSqCY" ref="youtube" width="750" height="450"></youtube>
                </b-modal>
              </div>
            </div>
            <div class="col-xl-7 offset-xl-1 col-lg-7 col-md-10">
              <img src="@/assets/images/hero-3-img.png" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <Service />
      <Features />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  </div>
</template>


<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
::v-deep .video-modal .modal-dialog {
  max-width: 800px;
}
</style>