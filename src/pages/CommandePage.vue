<template>
  <q-page class="flex row flex-center">
    <q-card class="col-11">
      <q-card-section> <h2 class="text-center">Oups !</h2> </q-card-section>
      <q-card-section class="text-center">
        <q-icon size="1000%" name="mdi-emoticon-sad-outline"></q-icon>
      </q-card-section>
      <q-card-section>
        <h2 class="text-center">
          La fonctionnalité de commande n'est pas encore disponible !
        </h2>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
