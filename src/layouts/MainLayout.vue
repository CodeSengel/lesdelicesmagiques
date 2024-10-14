<template>
  <q-layout view="lHh Lpr lFf ">
    <q-header>
      <q-toolbar style="background: #c29fff" class="row">
        <q-btn
          v-if="$q.platform.is.mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          style="
            font-size: calc(14px + 2vw);
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
              'Helvetica Neue', sans-serif;
          "
          class="text-white flex flex-center"
          :class="$q.platform.is.mobile ? 'col-9' : 'col-6'"
        >
          Les délices magiques
        </q-toolbar-title>
        <div class="col-4 row" v-if="!$q.platform.is.mobile">
          <q-btn-group dense flat class="col-12">
            <q-btn
              style="font-size: calc(1px + 1vw)"
              class="Menubutton col-3"
              color="#5ffbf1"
              label="Accueil"
              target="_self"
              to="/"
              dense
              flat
            />
            <q-btn
              style="font-size: calc(1px + 1vw)"
              class="Menubutton col-3"
              color="#5ffbf1"
              label="Nox Choix"
              target="_self"
              to="choix"
              dense
              flat
            />
            <q-btn
              style="font-size: calc(1px + 1vw)"
              class="Menubutton col-3"
              color="#5ffbf1"
              label="Commander"
              target="_self"
              to="commande"
              dense
              flat
            />
            <q-btn
              style="font-size: calc(1px + 1vw)"
              class="Menubutton col-3"
              color="#5ffbf1"
              label="Contact"
              target="_self"
              to="contact"
              dense
              flat
            />
          </q-btn-group>
        </div>

        <div class="col-2 flex flex-center">
          <q-toggle
            size="xl"
            v-model="darkmode"
            checked-icon="mdi-shield-moon"
            color="dark"
            unchecked-icon="mdi-white-balance-sunny"
            @click="handleDarkMode()"
            class="col-2 flex flex-center"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="300"
      v-if="$q.platform.is.mobile"
    >
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-list>
        <q-expansion-item
          :content-inset-level="0.5"
          default-opened
          expand-separator
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon
                size="lg"
                name="mdi-multimedia"
                style="
                  background: linear-gradient(
                    135deg,
                    #f274bb,
                    #f274bb,
                    #d790ec,
                    #84beff,
                    #00ecff
                  );
                  border-radius: 20%;
                  border: solid 1px yellow;
                  color: #ffffff;
                "
                avatar
              ></q-icon>
            </q-item-section>

            <q-item-section>
              Nos réseaux sociaux
              <q-item-label caption>
                Suivez nos sur nos réseaux sociaux !</q-item-label
              >
            </q-item-section>
          </template>
          <EssentialLinkWraped
            v-for="link in essentialWrapedLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :class="darkmode ? 'bg-black' : 'bg-pinkBackground'" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import EssentialLinkWraped from "components/EssentialLinkWraped.vue";
import { useQuasar } from "quasar";

const linksList = [
  {
    title: "Accueil",
    caption: "Découvrir notre magasin et qui nous sommes.",
    icon: "mdi-home",
    stylecomp:
      "background: linear-gradient(135deg, #f274bb,#f274bb, #d790ec,#84beff,#00ecff );border-radius: 20%; border : solid 1px yellow ; color:#ffffff ",
    name: "accueil",
    separator: false,
    active: true,
  },
  {
    title: "Nos choix",
    caption: "Découvrir nos choix délicieux et nos nouveautés.",
    icon: "mdi-list-box",
    stylecomp:
      "background: linear-gradient(135deg, #f274bb,#f274bb, #d790ec,#84beff,#00ecff );border-radius: 20%; border : solid 1px yellow ; color:#ffffff ",
    name: "choix",
    separator: false,
  },
  {
    title: "Commander",
    caption: "Passer une commande ! ",
    icon: "mdi-cart",
    stylecomp:
      "background: linear-gradient(135deg, #f274bb,#f274bb, #d790ec,#84beff,#00ecff );border-radius: 20%; border : solid 1px yellow ; color:#ffffff ",
    name: "commande",
    separator: true,
  },
  {
    title: "Contact",
    caption: "Contactez nous pour plus de détails",
    icon: "mdi-phone",
    stylecomp:
      "background: linear-gradient(135deg, #f274bb,#f274bb, #d790ec,#84beff,#00ecff );border-radius: 20%; border : solid 1px yellow ; color:#ffffff ",

    name: "contact",
    separator: false,
  },
];

const linksWrapedList = [
  {
    title: "Facebook",
    caption: "@lesdelicesmagiques",
    icon: "fa-brands fa-square-facebook",
    stylecomp:
      "background:#ffffff;border-radius: 20%;color:#1877F2; border : solid #1877F2 1px ",
    name: "https://www.facebook.com/people/Les-D%C3%A9lices-Magiques/61565901702603/",
    separator: false,
    useRouterLink: false,
  },
  {
    title: "Youtube",
    caption: "@lesdelicesmagiques",
    icon: "fa-brands fa-square-youtube",
    stylecomp:
      "background:#C4302B;border-radius: 20%;color:#ffffff; border : solid #C4302B 1px ",
    name: "https://www.youtube.com/@sisiatoumia",
    separator: false,
    useRouterLink: false,
  },
  {
    title: "Instagram",
    caption: "@lesdelicesmagiques",
    icon: "fa-brands fa-square-instagram",
    stylecomp:
      "background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);border-radius: 20%;",
    name: "https://www.instagram.com/",
    separator: false,
    useRouterLink: false,
  },
  {
    title: "Tiktok",
    caption: "@lesdelicesmagiques",
    icon: "tiktok",
    stylecomp:
      "background: linear-gradient(135deg, #010101,#69c9d0, #FFFFFF,#ee1d52 );border-radius: 20%; color:black",

    name: "https://www.tiktok.com/@les.delices.magiques?lang=fr",
    separator: false,
    useRouterLink: false,
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    EssentialLinkWraped,
  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const darkmode = ref(false);

    const handleDarkMode = async () => {
      console.log("voici le dark mode", darkmode);
      $q.dark.set(darkmode.value);
    };

    return {
      essentialLinks: linksList,
      essentialWrapedLinks: linksWrapedList,

      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      darkmode,
      handleDarkMode,
      $q,
    };
  },
});
</script>

<style>
.Menubutton {
  cursor: pointer;
  word-wrap: normal;
  text-align: center;
}
.Menubutton::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #f274bb;
  transition: width 0.3s ease;
}

.Menubutton:hover::after {
  width: 100%;
}
</style>
