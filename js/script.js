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
    addMessage() {
      this.contacts[this.activeContact].messages.push({
        date: new Date().toLocaleString(),
        message: this.newMessage,
        status: "sent",
      });
      this.newMessage = "";
      setTimeout(() => {
        this.addAnswer();
        updateScroll();
      }, 1000);
    },
    addAnswer() {
      this.contacts[this.activeContact].messages.push({
        date: new Date().toLocaleString(),
        message: "Ok",
        status: "received",
      });
    },
  },
  computed: {
    activeContact() {
      return this.contacts.findIndex((contact) => contact.id === this.activeId);
    },
  },
}).mount("#app");

function updateScroll() {
  let element = document.getElementById("myDiv");
  element.scrollBy(0, 2000);
}

// function bottom() {
//   document.getElementById("test").scrollIntoView();
// }
