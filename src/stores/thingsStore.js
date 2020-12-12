import axios from "axios";
import { makeAutoObservable } from "mobx";

class ThingsStore {
  randomThings = [];
  treasureThings = [];

  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchRandomThings = async () => {
    try {
      const response = await axios.get("http://localhost:8001/things/random");
      this.randomThings = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };
  fetchTreasureThings = async () => {
    try {
      const response = await axios.get("http://localhost:8001/things/treasure");
      this.treasureThings = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };
}
const thingsStore = new ThingsStore();
thingsStore.fetchRandomThings();
thingsStore.fetchTreasureThings();
export default thingsStore;
