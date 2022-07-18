import { ProductStartDrawer } from "../products/productStartDrawer";
import { TemplateKeeper } from "../products/productTemplate";
import { IFilterStats, IReset } from "../interfacesAndTypes";
import { Checkbox } from "./checkboxes";
import { RangeSlider } from "./rangeSliders";
import "../../styles/reset.css";

class Reset implements IReset {
  static isSaveAllowed = true;

  productDrawer: ProductStartDrawer;

  constructor() {
    this.productDrawer = new ProductStartDrawer();
  }

  createResetFilterButton(): void {
    const target = document.querySelector(".resets") as HTMLElement;
    if (target === undefined) return;
    const wrapper = document.createElement("div") as HTMLElement;
    const resetFilterButton = document.createElement(
      "button"
    ) as HTMLButtonElement;
    resetFilterButton.classList.add("reset-button", "reset-filter-button");
    resetFilterButton.innerText = "Сбросить фильтры";
    resetFilterButton.addEventListener("click", () => {
      const resetEvent = new Event("resetEvent", {
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      document.dispatchEvent(resetEvent);
      Checkbox.currentCheckboxes = [];
      RangeSlider.currentRanges.size = [];
      RangeSlider.currentRanges.amount = [];
      let key: keyof IFilterStats;
      for (key in TemplateKeeper.currentTemplate) {
        const str = JSON.stringify(TemplateKeeper.defaultTemplate[key]);
        TemplateKeeper.currentTemplate[key] = JSON.parse(str);
      }
      this.productDrawer.drawProducts();
    });
    target.append(wrapper);
    wrapper.append(resetFilterButton);
  }

  createResetStorageButton(): void {
    const target = document.querySelector(".resets") as HTMLElement;
    if (target === undefined) return;
    const wrapper = document.createElement("div") as HTMLElement;
    const resetFilterButton = document.createElement(
      "button"
    ) as HTMLButtonElement;
    resetFilterButton.classList.add("reset-button", "reset-storage-button");
    resetFilterButton.innerText = "Сбросить настройки";
    resetFilterButton.addEventListener("click", () => {
      Reset.isSaveAllowed = false;
      localStorage.clear();
      window.location.reload();
    });
    target.append(wrapper);
    wrapper.append(resetFilterButton);
  }
}

export { Reset };
