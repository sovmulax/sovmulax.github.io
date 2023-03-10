<script>
import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-2
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
        class="hero-2-bg"
        :style="{'background-image': 'url(' + require('@/assets/images/hero-2-bg.jpg') + ')'}"
        id="home"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-10">
              <div class="text-center">
                <span class="badge badge-soft-primary text-uppercase">Creative Landing</span>
                <h1
                  class="hero-2-title text-shadow text-dark font-weight-bold my-4"
                >A Clean & Minimal Landing Template</h1>
                <p
                  class="text-muted w-75 mx-auto mb-5"
                >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaqueillosite inventore veritatis.</p>
                <a href="javascript: void(0);" class="btn btn-primary">
                  Read More
                  <i class="mdi mdi-timer-sand mdi-spin ml-2"></i>
                </a>
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