<template>
  <SearchBar />
  <SearchBarExtra />
  <ListingList />
  <NoResults />
</template>

<script>
import ListingList from "@/components/ListingList.vue";
import NoResults from "@/components/NoResults.vue";
import SearchBar from "@/components/SearchBar.vue";
import SearchBarExtra from "@/components/SearchBarExtra.vue";
export default {
  name: "HomeView",
  components: {
    ListingList,
    SearchBar,
    NoResults,
    SearchBarExtra,
  },
};
</script>
