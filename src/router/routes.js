const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "accueil",
        path: "/",
        component: () => import("pages/AccueilPage.vue"),
      },
      {
        name: "choix",
        path: "choix",
        component: () => import("pages/ChoixPage.vue"),
      },
      {
        name: "commande",
        path: "commande",
        component: () => import("pages/CommandePage.vue"),
      },
      {
        name: "contact",
        path: "contact",
        component: () => import("pages/ContactPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
