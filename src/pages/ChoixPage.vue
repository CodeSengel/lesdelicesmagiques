<template>
  <q-page class="row">
    <div class="col-12 row">
      <div class="col-12">
        <div class="col-12 polaroid">
          <q-parallax style="height: 100px; filter: grayscale(50%)">
            <template v-slot:media>
              <video
                poster="https://cdn.quasar.dev/img/polina.jpg"
                autoplay
                loop
              >
                <source
                  type="video/webm"
                  src="https://storage.cdn-luma.com/lit_lite_inference_v1.6-xl/60865476-ec63-4391-8283-4f5ab6070d5f/653014ef-99c4-46a4-91e5-30500dc4f010_watermarked_video0612dd8dfa2914909b9dcc6949551b279.mp4"
                />
                <source
                  type="video/mp4"
                  src="https://storage.cdn-luma.com/lit_lite_inference_v1.6-xl/60865476-ec63-4391-8283-4f5ab6070d5f/653014ef-99c4-46a4-91e5-30500dc4f010_watermarked_video0612dd8dfa2914909b9dcc6949551b279.mp4"
                />
              </video>
            </template>
            <div
              style="width: 100%; font-size: calc(10px + 1vw)"
              class="flex flex-center"
            >
              <p
                class="q-pt-lg text-white flex flex-center"
                style="width: 40%; background-color: rgba(0, 0, 0, 0.5)"
              >
                Nos choix
              </p>
            </div>
          </q-parallax>
        </div>
      </div>

      <div class="col-12 row">
        <div
          v-for="section in section_list"
          :key="section"
          class="q-pa-sm col-md-3 col-xs-6 row"
          style=""
        >
          <div
            style="
              height: 20vh;
              width: 100%;
              border-top-left-radius: 25px;
              border-top-right-radius: 25px;
            "
            class="col-12 polaroid clickable"
          >
            <img
              :src="section.img_link"
              alt="Cinque Terre"
              style="
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-top-left-radius: 25px;
                border-top-right-radius: 25px;
              "
            />
          </div>

          <div
            style="
              height: 40px;
              font-size: x-large;
              background: linear-gradient(
                135deg,
                #ffdd12,
                #00973a,
                #69c9d0,
                #ffdd12
              );
              border-radius: 2px;

              color: #ffffff;
            "
            class="col-12 polaroid flex flex-center text-white"
          >
            {{ section.name }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const section_list = ref([
      {
        name: "Oriental",
        img_link:
          "https://img.freepik.com/photos-premium/harissa-fraiche-isolee-fond-blanc-ideale-pour-collations-plats-epices_1033579-73172.jpg?semt=ais_hybrid",
      },
      {
        name: "Occidental",
        img_link:
          "https://img.freepik.com/photos-gratuite/macaron_74190-5718.jpg?semt=ais_hybrid",
      },
      {
        name: "Algérienne",
        img_link:
          "https://media.istockphoto.com/id/1388968627/fr/photo/makrout-frit-semoule-alg%C3%A9rienne-dattes-et-bonbons-au-miel-nourriture-sucr%C3%A9e-traditionnelle.jpg?s=612x612&w=0&k=20&c=FgSCEGBF2BqwfZLYOInkWBWfFgA2UCSZUImAqJC24To=",
      },
      {
        name: "Local (Kabyle)",
        img_link:
          "https://www.amourdecuisine.fr/wp-content/uploads/2012/07/khfaf-%C3%A0-la-semoule-et-farine-4.jpg",
      },
      {
        name: "Anniversaire",
        img_link:
          "https://img.freepik.com/photos-gratuite/celebration-anniversaire-bougies-gateau-ballons-generes-par-intelligence-artificielle_188544-150346.jpg?semt=ais_hybrid",
      },
    ]);

    return {
      section_list,
    };
  },
});
</script>

<style>
div.polaroid {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 0;
}

.clickable {
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.clickable:hover {
  transform: scale(1.03) rotate(1deg);
}

.clickable a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
}
</style>
