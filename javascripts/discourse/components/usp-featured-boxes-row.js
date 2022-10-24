import Component from "@ember/component";
import { defaultHomepage } from "discourse/lib/utilities";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service("router"),

  get cards() {
    let cards_data = JSON.parse(settings.card_details);

    return cards_data.slice(0, 4);
  },

  get heading_text() {
    return settings.heading_text;
  },

  @discourseComputed("site.mobileView", "router.currentRouteName")
  shouldDisplay(isMobile, currentRouteName) {
    if (isMobile && !settings.display_on_mobile) return false;

    return currentRouteName == `discovery.${defaultHomepage()}`;
  },
});
