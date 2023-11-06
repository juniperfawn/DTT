<template>
  <SearchBar />
  <ListingList />
  <NoResults />
</template>

<script>
import ListingList from "@/components/ListingList.vue";
import NoResults from "@/components/NoResults.vue";
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "HomeView",
  components: {
    ListingList,
    SearchBar,
    NoResults,
  },
};
</script>
