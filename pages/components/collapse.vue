<template>
  <div class="menu">
    {{ selectedCategory }}
    <div v-for="(group, index) in filteredData" :key="index" class="category">
      <div class="category-header" @click="toggleCollapse(index)">
        <strong>{{ group[0]?.category }}</strong>
        <span class="arrow" :class="{ open: !collapsed[index] }">
          <img src="../../public/images/collapse_arrow.png" alt="" />
        </span>
      </div>
      <hr />
      <div v-show="!collapsed[index]" class="items">
        <div v-for="(item, i) in group" :key="i" class="item-card">
          <input type="checkbox" v-model="item.checked" />
          <img :src="item.image" alt="image" />
          <div class="info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <span class="price"
              >&dollar;{{
                item.checked
                  ? (item.price * item.quantity).toFixed(2)
                  : item.price.toFixed(2)
              }}</span
            >
            <div class="quantity">
              <label>Quantity</label>
              <select v-model="item.quantity">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useMenuData from "./collapse";

const {
  collapsed,
  searchValue,
  toggleCollapse,
  filteredData,
  selectedCategory,
} = useMenuData();
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.category {
  // border-bottom: 1px solid #ccc;

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;
    font-size: 18px;
  }

  .arrow {
    transition: transform 0.3s ease;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    width: 15px;
    height: 20px;
    img {
      width: 100%;
    }
    &.open {
      transform: rotate(180deg);
    }
  }

  .items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 0;
    input[type="checkbox"] {
      position: absolute;
      transform: scale(1.5); /* 1.5× larger; use 0.75 for 75% size, etc. */
      transform-origin: top left; /* so it scales from the corner */
      margin: 4px; /* adjust spacing afterward as needed */
      border-radius: 0; // ← no rounding
      &:checked {
        background-color: grey;
        border-color: grey;
      }
    }
  }

  .item-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    background-color: #fff;

    img {
      width: 100%;
      height: 210px;
      object-fit: cover;
      border-radius: 4px;
    }

    .info {
      margin-top: 10px;

      h4 {
        margin: 0;
        font-size: 16px;
      }

      p {
        font-size: 13px;
        color: #555;
        margin: 5px 0;
      }

      .price {
        color: #007bff;
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
      }

      .quantity {
        margin-top: 30px;
        display: grid;
        gap: 5px;
        color: grey;
        label {
          font-size: 15px;
          font-weight: 500;
        }
        select {
          width: 50px;
          height: 30px;
          margin-top: 3px;
          font-size: 15px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .items {
    flex-direction: column;
  }
}
</style>
