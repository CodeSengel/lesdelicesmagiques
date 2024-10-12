<template>
  <q-page class="row">
    <div class="col-xs-12 flex flex-center">
      <q-parallax style="height: 150px; filter: grayscale(50%)">
        <template v-slot:media>
          <video poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop>
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
            class="q-pt-lg text-white text-center"
            style="width: 40%; background-color: rgba(0, 0, 0, 0.5)"
          >
            Azul - Bienvenue - Welcome - مرحبا
          </p>
        </div>
      </q-parallax>
    </div>
    <div class="column col-12">
      <div class="col-11 row">
        <div class="col-md-6 col-sm-6 col-xs-12 q-pa-sm">
          <q-card bordered style="height: 100%" class="column q-pb-md">
            <q-card-section style="width: 100%" class="col-2 flex flex-center">
              <div style="font-size: calc(10px + 2vw); color: #00973a">
                Nos offres et services
              </div>
            </q-card-section>
            <q-card-section class="col-7 column">
              <div class="col-12 column">
                <q-carousel
                  autoplay
                  arrows
                  animated
                  infinite
                  swipeable
                  v-model="slide"
                  class="col-12"
                >
                  <q-carousel-slide
                    name="first"
                    img-src="https://img.freepik.com/photos-premium/gateau-lune-est-concept-nourriture-traditionnelle-chinoise-fete_641503-85786.jpg?ga=GA1.1.347363657.1728114457&semt=ais_hybrid"
                  >
                    <div
                      style="background-color: rgba(0, 0, 0, 0.5)"
                      class="absolute-bottom custom-caption text-white"
                    >
                      <div style="font-size: calc(12px + 1vw)">
                        Prise de votre commande
                      </div>
                      <div style="font-size: calc(5px + 1vw)">
                        Vous pouvez commander à distance
                      </div>
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide
                    name="second"
                    img-src="https://img.freepik.com/photos-gratuite/plateau-petits-pains-cannelle-angle-eleve_23-2148904677.jpg?ga=GA1.1.347363657.1728114457&semt=ais_hybrid"
                  >
                    <div
                      style="background-color: rgba(0, 0, 0, 0.5)"
                      class="absolute-bottom custom-caption text-white"
                    >
                      <div style="font-size: calc(12px + 1vw)">Livraison</div>
                      <div style="font-size: calc(5px + 1vw)">
                        On vous livre chez vous !
                      </div>
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide
                    name="third"
                    img-src="https://img.freepik.com/photos-premium/variete-patisseries-dont-point-noir-dessus_1234220-33282.jpg?ga=GA1.1.347363657.1728114457&semt=ais_hybrid"
                  >
                    <div
                      style="background-color: rgba(0, 0, 0, 0.5)"
                      class="absolute-bottom custom-caption text-white"
                    >
                      <div style="font-size: calc(12px + 1vw)">
                        Accompagnement
                      </div>
                      <div style="font-size: calc(5px + 1vw)">
                        Nous vous proposons un accompagnement rigoureux pour
                        tout type d'evenement
                      </div>
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </q-card-section>
            <q-card-section class="col-2 text-center">
              <q-btn
                class="q-mb-lg"
                bordered
                color="blue"
                :to="{ name: 'choix' }"
                >Consulter nos offres</q-btn
              >
            </q-card-section>

            <q-card-section class="q-pt-none"> </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 q-pa-sm">
          <q-card bordered style="overflow: hidden">
            <q-card-section class="flex flex-center">
              <div
                class="text"
                style="font-size: calc(10px + 2vw); color: #00973a"
              >
                Qui sommes nous ?
              </div>
            </q-card-section>
            <q-card-section
              ><p style="font-size: calc(8px + 0.5vw)" v-html="description"></p
            ></q-card-section>
            <q-card-section class="col-2 text-center">
              <q-btn
                class="q-mb-lg"
                bordered
                color="blue"
                :to="{ name: 'contact' }"
                >Nous contacter</q-btn
              >
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="col-2 q-pa-sm" style="height: 20vh"></div>
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

    const slide = ref("first");
    const description = ref(`<p>
  <strong>Bienvenue chez "Les délices magiques"</strong><br><br>
  Créé par deux jeunes femmes <strong>passionnées</strong> et <strong>motivées</strong>, [Nom du Magasin] est votre destination de choix pour des gâteaux <strong>exquis</strong> et faits maison. Nous nous spécialisons dans la préparation de gâteaux <strong>traditionnels</strong> et <strong>modernes</strong>, qu'ils soient <em>orientaux</em>, <em>occidentaux</em> ou <em>locaux</em>.<br><br>
  <strong>Nos Services :</strong><br>
  - <strong>Prise de commande personnalisée</strong> : Dites-nous ce que vous souhaitez, et nous le réaliserons avec soin.<br>
  - <strong>Livraison rapide et fiable</strong> : Profitez de nos délicieux gâteaux sans quitter le confort de votre maison ou bureau.<br><br>
  <strong>Nos Offres :</strong><br>
  - <strong>Gâteaux pour toutes les occasions</strong> : <em>Anniversaires</em>, <em>mariages</em>, <em>fêtes d'entreprise</em>, et bien plus encore.<br>
  - <strong>Pour particuliers et professionnels</strong> : Que vous soyez un particulier ou une entreprise, nous avons ce qu'il vous faut.<br><br>
  Chez [Nom du Magasin], chaque gâteau est une <strong>œuvre d'art</strong>, préparée avec <strong>amour</strong> et <strong>passion</strong>. Laissez-nous rendre vos moments spéciaux encore plus mémorables avec nos <strong>créations sucrées</strong>.
</p>
`);

    return {
      section_list,
      slide,
      description,
    };
  },
});
</script>

<style>
.page {
  background-color: #f0f0f0; /* Light grey background */
}
</style>
