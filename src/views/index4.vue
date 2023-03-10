<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-4
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
      <section
        class="hero-4-bg"
        :style="{'background-image': 'url(' + require('@/assets/images/hero-4-bg.jpg') + ')'}"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-6 col-lg-7">
              <h2 class="hero-4-title mb-4 text-shadow line-height-1_4">
                Get Your Professional Website Done With
                <span class="text-bottom-border">Lezir</span>
              </h2>
              <p
                class="text-muted"
              >Donec pede justo fringilla vel aliquet nec vulputate eget arcu in enim bibendum must explain you how sitye all this mistaken.</p>
              <button class="btn btn-primary mt-4">Get Started</button>
            </div>
            <div class="col-xl-4 offset-xl-2 col-lg-5 col-md-8">
              <div class="hero-4-registration-form mx-auto rounded bg-white mt-5 mt-lg-0">
                <h5 class="form-title mb-4 text-center">Get 30 days FREE Trial</h5>
                <div class="form-border w-25 mx-auto mb-4"></div>
                <form class="registration-form">
                  <div class="form-group mb-4">
                    <label for="exampleFormControlInput1" class="text-muted font-size-15">Your Name*</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label
                      for="exampleFormControlInput1"
                      class="text-muted font-size-15"
                    >Your email*</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput2"
                      placeholder
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="exampleFormControlInput1" class="text-muted font-size-15">Password*</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput3"
                      placeholder
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block btn-sm text-uppercase"
                  >Get Started</button>
                </form>
              </div>
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