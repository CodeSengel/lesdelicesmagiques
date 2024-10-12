<template>
  <q-item class="" clickable v-ripple tag="a" v-bind="linkProps">
    <q-item-section v-if="icon" avatar>
      <q-icon size="lg" :name="icon" :style="stylecomp" />
    </q-item-section>

    <q-item-section class="row">
      <div class="col-6 row">
        <q-item-label class="col-8">{{ title }} </q-item-label>
        <q-icon class="" name="mdi-link-variant"></q-icon>
      </div>
      <div class="col-6">
        <q-item-label caption>{{ caption }}</q-item-label>
      </div>
    </q-item-section>
  </q-item>
  <q-separator v-if="separator" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
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
    useRouterLink: {
      type: Boolean,
      default: true,
    },
    stylecomp: {
      type: String,
      default: "",
    },
  },
  computed: {
    linkProps() {
      if (this.useRouterLink) {
        return { to: { name: this.name }, target: "_self" };
      } else {
        return {
          href: this.name.startsWith("http")
            ? this.name
            : `https://${this.name}`,
          target: "_blank",
        };
      }
    },
  },
});
</script>
