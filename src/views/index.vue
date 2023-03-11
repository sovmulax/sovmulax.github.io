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
  components: { Navbar, Service, Features, Pricing, Blog, Contact, Footer },
};
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section class="hero-1-bg" id="home">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-12">
              <div style="height: 50px"></div>
              <h1 class="hero-1-title text-dark font-weight-bold text-shadow mb-4">
                Portfolio
              </h1>
              <div class="w-75 mb-2 mb-lg-0">
                <p class="j-align  mb-1 pb-5 font-size-17">
                  Bonjour, je suis un développeur Fullstack et Mobile passionné par la création d'applications web et
                  mobiles de haute qualité. J'ai créé ce portfolio pour vous montrer mes compétences en développement, mes
                  projets les plus récents et mes réalisations les plus impressionnantes.
                <div style="height: 10px"></div>
                <a href="mailto:soumail@gmail.com" class="btn btn-primary col-4">Contacter</a>
                </p>
                <div style="height: 100px"></div>
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
