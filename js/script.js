const { createApp } = Vue;
import { contactsList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactsList,
    };
  },
}).mount("#app");
