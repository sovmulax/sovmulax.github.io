<script>
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon
} from "vue-feather-icons";
export default {
  components: { LayoutIcon, LifeBuoyIcon, ServerIcon, RssIcon }
};
</script>

<template>
  <div>
    <!-- Features Start -->
    <section
      class="section bg-light feather-bg-img"
      :style="{'background-image': 'url(' + require('@/assets/images/features-bg-img.png') + ')'}"
      id="features"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">Awesome Features</h3>
              <p class="text-muted font-size-15">
                Et harum quidem rerum facilis est et expedita distinctio nam libero
                tempore cum soluta nobis eligendi cumque.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img src="@/assets/images/features-img.png" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Creative Features
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Build
              <b>community</b> &
              <b>conversion</b> with our
              suite of
              <b>social tool</b>
            </h3>
            <p class="text-muted font-size-15 mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque.
            </p>
            <p class="text-muted mb-2">
              <layout-icon class="icon-xs mr-1"></layout-icon>Donec pede justo fringilla vel nec.
            </p>
            <p class="text-muted">
              <life-buoy-icon class="icon-xs mr-1"></life-buoy-icon>Cras ultricies mi eu turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2">Read More</a>
              <a href="javascript: void(0);" class="btn btn-soft-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section feather-bg-img"
      :style="{'background-image': 'url(' + require('@/assets/images/features-bg-img-1.png') + ')'}"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Creative Features
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              We do the work you
              <b>stay focused</b> on
              <b>
                your
                customers
              </b>.
            </h3>
            <!-- <h3 class="font-weight-semibold line-height-1_4 mb-4">Build <b>community</b> & <b>conversion</b> with our suite of <b>social tool</b></h3> -->
            <p class="text-muted font-size-15 mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque.
            </p>
            <p class="text-muted mb-2">
              <server-icon class="icon-xs mr-1"></server-icon>Donec pede justo fringilla vel nec.
            </p>
            <p class="text-muted">
              <rss-icon class="icon-xs mr-1"></rss-icon>Cras ultricies mi eu turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2">Read More</a>
              <a href="javascript: void(0);" class="btn btn-soft-primary">Buy Now</a>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="mt-4 mt-lg-0">
              <img src="@/assets/images/features-img-1.png" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features End -->
  </div>
</template>