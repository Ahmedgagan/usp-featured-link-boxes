import Component from "@ember/component";
import { isEmpty } from "@ember/utils";

export default Component.extend({
  classNames: ["col"],

  get target() {
    if (this.card.open_in == "Same Window" || isEmpty(this.card.open_in)) {
      return "_self";
    } else {
      return "_blank";
    }
  },
});
