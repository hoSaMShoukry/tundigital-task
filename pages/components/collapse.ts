import { ref } from "vue";
import menuJson from "./data.json";
const selectedCategory = ref<string>("Categories: All");
const searchValue = ref<string>("");
const useMenuData = () => {
  interface MenuItem {
    checked: boolean;
    total: number;
    title: string;
    desc: string;
    price: number;
    quantity: number;
    image: string;
  }
  const menuData = ref<MenuItem[][]>(menuJson.data);
  //  * A reactive array of booleans, one for each category group in the menu.
  //  * Controls whether each group’s item list is currently collapsed (hidden) or expanded (visible).
  const collapsed = ref<boolean[]>(menuJson.data.map(() => false));

  const toggleCollapse = (index: number) => {
    // if you wanna to close other collapses when you open the target collapse just execute the next code
    // collapsed.value = collapsed.value.map((e, i) => {
    //   return (e = false);
    // });
    collapsed.value[index] = !collapsed.value[index];
  };
  const filteredData = computed(() => {
    return menuData.value
      .map((group) =>
        group.filter((item) => {
          const matchesSearch =
            !searchValue.value ||
            item.title
              .toLowerCase()
              .includes(searchValue.value.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchValue.value.toLowerCase()) ||
            item.category
              .toLowerCase()
              .includes(searchValue.value.toLowerCase());
          const matchesCategory =
            !selectedCategory.value || item.category === selectedCategory.value;
          return matchesSearch && matchesCategory;
        })
      )
      .filter((group) => group.length > 0);
  });

  const uniqueCategories = computed(() => {
    const categories = new Set<string>();
    menuData.value.flat().forEach((item) => categories.add(item.category));
    return Array.from(categories);
  });
  return {
    toggleCollapse,
    uniqueCategories,
    menuData,
    collapsed,
    searchValue,
    filteredData,
    selectedCategory,
  };
};
export default useMenuData;
