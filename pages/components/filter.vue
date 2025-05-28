<template>
  <div class="filter-bar">
    <span class="menu-label">Menu</span>
    <div class="select-boxes">
      <select v-model="selectedCategory">
        <option selected value="">All Categories</option>

        <option v-for="(filter, index) in filters" :key="index">
          {{ filter }}
        </option>
      </select>
      <input v-model="searchValue" type="text" placeholder="Search" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useMenuData from "./collapse";
const { searchValue, selectedCategory } = useMenuData();
const filters = ref<String[]>(["Appetizer", "Soups", "Salads", "Sandwiches"]);
const filter_input = ref<String>("Categories: All");
</script>

<style scoped lang="scss">
.filter-bar {
  display: flex;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 15px;

  .menu-label {
    font-weight: 500;
    color: #333;
    font-size: 16px;
  }

  .select-boxes {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    select,
    input[type="text"] {
      padding: 6px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      text-transform: capitalize;
      min-width: 160px;
    }

    input[type="text"] {
      background-image: url("../../public/images/search.png");
      background-size: 16px;
      background-repeat: no-repeat;
      background-position: right 8px center;
      padding-right: 30px;
      color: #333;
    }
  }

  // Responsive styles
  @media (max-device-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .select-boxes {
      width: 100%;
      flex-direction: column;
      width: 200px;
    }
  }
}
</style>
