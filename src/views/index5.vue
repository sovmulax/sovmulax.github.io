<script>
import { PieChartIcon, TriangleIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Service from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

/**
 * Index-5
 */
export default {
  components: {
    PieChartIcon,
    TriangleIcon,
    Navbar,
    Service,
    Features,
    Pricing,
    Blog,
    Contact,
    Footer
  }
};
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-5-bg d-flex vh-100 mx-auto flex-column align-items-center justify-content-center position-relative"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/hero-5-bg-img.jpg') + ')'}"
      >
        <div class="bg-overlay"></div>
        <div class="bg-hero-overlay"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6">
              <div class="hero-content">
                <h1
                  class="text-dark hero-5-title text-shadow line-height-1_4 mb-4"
                >We Help Startups Launch Their Products</h1>
                <p
                  class="text-muted mb-4"
                >On the other hand as we denounce with righteous indignation and dislike men who are beguiled.</p>
                <p class="text-muted font-size-15">
                  <pie-chart-icon class="icon-xs icon mr-1 text-success"></pie-chart-icon>Temporibus autem quibusdam et aut officiis.
                </p>
                <p class="text-muted font-size-15">
                  <TriangleIcon class="icon-xs icon mr-1 text-success"></TriangleIcon>Sed ut perspiciatis unde omne.
                </p>
                <a href="javascript: void(0);" class="btn btn-primary mt-4">Get Started</a>
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