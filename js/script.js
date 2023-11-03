const dt = luxon.DateTime;
const date = dt.now();
import { contactsList } from "./data.js";
const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: contactsList,
      activeId: 1,
      newMessage: "",
    };
  },
  methods: {
    isActive(id) {
      return id === this.activeContact ? true : false;
    },
    addMessage() {
      this.contacts[this.activeContact].messages.push({
        date: new Date().toLocaleString(),
        message: this.newMessage,
        status: "sent",
      });
      this.newMessage = "";
      setTimeout(() => {
        this.updateScroll();
      }, 10);
      setTimeout(() => {
        this.addAnswer();
      }, 10);
    },
    addAnswer() {
      this.contacts[this.activeContact].messages.push({
        date: new Date().toLocaleString(),
        message: "Ok",
        status: "received",
      });
      setTimeout(() => {
        this.updateScroll();
      }, 1000);
    },
    updateScroll() {
      let element = document.getElementById("myDiv");
      element.scroll({ top: element.scrollHeight, behavior: "smooth" });
    },
    myHour(date) {
      return date.slice(11, 16);
    },
  },
  computed: {
    activeContact() {
      return this.contacts.findIndex((contact) => contact.id === this.activeId);
    },
  },
}).mount("#app");

// function bottom() {
//   document.getElementById("test").scrollIntoView();
// }
