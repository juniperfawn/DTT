<template>
  <SearchBar />
  <ListingList />
</template>

<script>
import ListingList from '@/components/ListingList.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'HomeView',
  components: {
    ListingList, 
    SearchBar
  }
}
</script>
