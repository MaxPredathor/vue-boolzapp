import { contactsList } from "./data.js";
import { myReply } from "./data.js";
import { getRndInteger } from "./data.js";
const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: contactsList,
      activeId: 1,
      contactIndex: 0,
      newMessage: "",
      myReply: myReply,
      filterContact: "",
      clicked: null,
      dropdownClick: false,
      sent: false,
      staScrivendo: false,
      online: false,
      showChat: false,
    };
  },
  methods: {
    isActive(id) {
      return id === this.activeContact ? true : false;
    },
    addMessage() {
      if (this.newMessage.trim() === "") {
      } else {
        this.contacts[this.activeContact].messages.push({
          date: new Date().toLocaleString(),
          message: this.newMessage,
          status: "sent",
        });
        this.sent = true;
        this.newMessage = "";
        setTimeout(() => {
          this.updateScroll();
        }, 2010);
        setTimeout(() => {
          this.addAnswer();
        }, 2000);
        setTimeout(() => {
          this.staScrivendo = true;
        }, 1000);
        setTimeout(() => {
          this.staScrivendo = false;
          this.online = true;
        }, 2500);
        setTimeout(() => {
          this.online = false;
        }, 4000);
      }
    },
    addAnswer() {
      this.contacts[this.activeContact].messages.push({
        date: new Date().toLocaleString(),
        message: this.myReply[getRndInteger(0, this.myReply.length - 1)],
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
    filteredContact() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.filterContact.toLowerCase())
      );
    },
    getLastMessage(id) {
      const contact = this.contacts.find((contact) => contact.id === id);
      const len = contact.messages.length;
      if (len > 0) {
        return contact.messages[len - 1].message;
      } else {
        return "Non hai messaggi con questo contatto";
      }
    },
    getLastAccess(id) {
      const contact = this.contacts.find((contact) => contact.id === id);
      const len = contact.messages.length;
      if (len > 0) {
        return contact.messages[len - 1].date;
      } else {
        return "";
      }
    },
    dropdownRemove() {
      this.clicked = null;
    },
    dropdownAppear(index) {
      if (this.clicked === null) {
        this.clicked = index;
      } else {
        this.clicked = null;
      }
    },
    deleteMessage(index) {
      this.contacts[this.activeContact].messages.splice(index, 1);
      this.clicked = null;
    },
    deleteAllMessage() {
      this.contacts[this.activeContact].messages.splice(
        this.contacts[this.activeContact].messages[0],
        this.contacts[this.activeContact].messages.length
      );
    },
    // deleteContact() {
    //   this.contacts.splice(this.activeContact, 1);
    //   this.activeContact = 0;
    // },
  },
  computed: {
    activeContact() {
      return this.contacts.findIndex((contact) => contact.id === this.activeId);
    },
    activeTuma() {
      return this.contacts[this.contactIndex];
    },
    lastDate() {
      const dateLength = this.activeTuma.messages.length;
      return dateLength > 0
        ? this.activeTuma.messages[dateLength - 1].date
        : "Unknown Date";
    },
  },
}).mount("#app");

// function bottom() {
//   document.getElementById("test").scrollIntoView();
// }
