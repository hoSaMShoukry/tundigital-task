import { ref } from "vue";
import menuJson from "./data.json";
import { toast } from "vue3-toastify";
const selectedCategory = ref<string>("");
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
  // Filtered data based on search-input
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
  const clc_price = (item: MenuItem) => {
    if (item.checked) {
      toast.info(`total price is $${(item.price * item.quantity).toFixed(2)}`);
    }
  };
  return {
    toggleCollapse,
    clc_price,
    menuData,
    collapsed,
    searchValue,
    filteredData,
    selectedCategory,
  };
};
export default useMenuData;
