import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.post("http://localhost:5000/api/track/list/", {Body: {}});
    return res.data;
  },
  async getEventSingle(eventId) {
    let res = await axios.get("http://localhost:5000/api/track/get/" + eventId);
    return res.data;
  },
  async getWeapons() {
    let res = await axios.post("http://localhost:5000/api/Weapon/list/", {Body: {}});
    return res.data;
  },
  async getSlots(date) {
    let res = await axios.post("http://localhost:5000/api/Slot/list", {Body: {date}});
    return res.data;
  },
  async getReservation(userId) {
    let res = await axios.post("http://localhost:5000/api/Reservation/list", {Body: {userId}});
    return res.data;
  },

}