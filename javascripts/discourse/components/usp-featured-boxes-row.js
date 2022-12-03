import Component from "@ember/component";
import { defaultHomepage } from "discourse/lib/utilities";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service("router"),

  get cards() {
    return JSON.parse(settings.card_details);
  },

  get height() {
    return Math.ceil(JSON.parse(settings.card_details).length / 4) * 70;
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
