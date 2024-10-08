<template>
  <q-layout view="lHh Lpr lFf ">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$q.platform.is.mobile"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-toggle
          v-model="darkmode"
          checked-icon="mdi-shield-moon"
          color="dark"
          unchecked-icon="mdi-white-balance-sunny"
          @click="handleDarkMode()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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
          expand-separator
          icon="mdi-multimedia"
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon size="lg" name="mdi-multimedia" avatar></q-icon>
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
      <router-view />
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
    name: "accueil",
    separator: false,
    active: true,
  },
  {
    title: "Nos choix",
    caption: "Découvrir nos choix délicieux et nos nouveautés.",
    icon: "mdi-list-box",
    name: "choix",
    separator: false,
  },
  {
    title: "Commander",
    caption: "Passer une commande ! ",
    icon: "mdi-cart",
    name: "commande",
    separator: true,
  },
  {
    title: "Contact",
    caption: "Contactez nous pour plus de détails",
    icon: "mdi-card-account-phone",
    name: "contact",
    separator: false,
  },
];

const linksWrapedList = [
  {
    title: "Facebook",
    caption: "@lesdelicesmagiques",
    icon: "mdi-facebook",
    name: "https://www.facebook.com/people/Les-D%C3%A9lices-Magiques/61565901702603/",
    separator: false,
    useRouterLink: false,
  },
  {
    title: "Youtube",
    caption: "@lesdelicesmagiques",
    icon: "mdi-youtube",
    name: "https://www.youtube.com/@sisiatoumia",
    separator: false,
    useRouterLink: false,
  },
  {
    title: "Instagram",
    caption: "@lesdelicesmagiques",
    icon: "mdi-instagram",
    name: "https://www.instagram.com/",
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
    const darkmode = ref(true);

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
