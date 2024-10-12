<template>
  <q-item
    clickable
    tag="a"
    target="_self"
    :to="{ name: name }"
    v-ripple
    :actived="name === nameActive"
    :active="actived"
    active-class="my-menu -link"
    @click="console.log(name, nameActive), changeItemActive(name)"
  >
    <q-item-section class="" v-if="icon" avatar>
      <q-icon size="lg" :name="icon" :style="stylecomp" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator v-if="separator" />
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EssentialLink",
  setup() {
    const nameActive = ref("commande");
    const changeItemActive = (item) => {
      console.log("voici ce que je recois ", item);
      nameActive.value = item;
    };
    return {
      nameActive,
      changeItemActive,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },

    separator: {
      type: Boolean,
      default: false,
    },
    actived: {
      type: Boolean,
      default: false,
    },
    stylecomp: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.my-menu-link {
  color: white;
  background: #f2c037;
}
</style>
