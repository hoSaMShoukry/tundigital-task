import { ref } from "vue";
import menuJson from "./data.json";

export function useMenuData() {
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
  const collapsed = ref<boolean[]>(menuJson.data.map(() => true));

  const toggleCollapse = (index: number) => {
    collapsed.value[index] = !collapsed.value[index];
    collapsed.value.forEach((e, i) => {
      if (index != i) {
        e = true;
      }
    });
  };

  return { menuData, collapsed, toggleCollapse };
}
