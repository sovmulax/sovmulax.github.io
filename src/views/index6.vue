<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-6
 */
export default {
  components: { Navbar, Service, Features, Pricing, Blog, Contact, Footer },
  data() {
    return {
      navbarcolor: true
    };
  }
};
</script>

<template>
  <div>
    <Navbar :navbarcolor="this.navbarcolor" />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-6-bg position-relative"
        :style="{'background-image': 'url(' + require('@/assets/images/hero-6-bg-img.jpg') + ')'}"
        id="home"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center">
                <h1
                  class="text-white hero-6-title mb-4 line-height-1_4"
                >We help startups launch their products with awesome website</h1>
                <p
                  class="text-white-50 w-75 mx-auto font-size-15"
                >Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cumque nihil impedit quo minus quod maxime.</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center Subcribe-form mt-5">
                <form action="#">
                  <input type="text" placeholder="Enter your Email..." />
                  <button
                    type="submit"
                    class="btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
                  >SubCribe</button>
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