import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView";
import FormView from "../views/FormView";
import EditView from "../views/EditView";
import ListingView from "../views/ListingView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
  {
    path: "/listing/:listingId",
    name: "byListing",
    component: ListingView,
    props: true,
  },
  {
    path: "/edit/:listingId",
    name: "edit",
    component: EditView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
