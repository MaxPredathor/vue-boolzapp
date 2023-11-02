const { createApp } = Vue;
import { contactsList } from "./data.js";

createApp({
  data() {
    return {
      contacts: contactsList,
      activeContact: 1,
    };
  },
  methods: {
    removeContact(id) {
      const index = this.contacts.findIndex((contact) => task.id === id);
      this.contacts.splice(index, 1);
    },
  },
}).mount("#app");
