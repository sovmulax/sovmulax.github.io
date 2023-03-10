<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-1
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
        class="hero-1-bg"
        :style="{'background-image': 'url(' + require('@/assets/images/img/hero.png') + ')'}"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6">
              <h1
                class="hero-1-title text-dark font-weight-bold text-shadow mb-4"
              >Creative Landing Page</h1>
              <div class="w-75 mb-5 mb-lg-0">
                <p class="text-muted mb-5 pb-5 font-size-17">
                  A creative & modern landing page with Lezir template & We
                  love
                  make things amazing.
                </p>
                <p class>
                  <span class="font-size-20 mr-2">🥳️</span>Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur that is fugit.
                </p>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Enter  email..." />
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                  </form>
                </div>
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