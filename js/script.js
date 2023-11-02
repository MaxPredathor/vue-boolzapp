const { createApp } = Vue;
import { contactsList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactsList,
      activeId: 1,
    };
  },
  methods: {},
  computed: {
    activeContact() {
      return this.contacts.findIndex((contact) => contact.id === this.activeId);
    },
  },
}).mount("#app");
