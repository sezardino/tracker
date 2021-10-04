import Api from "@/api";
import { TrackerState, IRootState, IData } from "@/types";
import { Module } from "vuex";

export const tracker: Module<TrackerState, IRootState> = {
  namespaced: true,
  state: {
    data: [],
    tabs: [],
    currentTab: "",
  },
  getters: {
    data(state) {
      return state.data;
    },
    tabs(state) {
      return state.tabs;
    },
    currentTab(state) {
      return state.currentTab;
    },
  },
  mutations: {
    setData(state, payload: Array<IData>) {
      state.data = payload;
    },
    setTabs(state, payload: Array<string>) {
      console.log(state.tabs);
      state.tabs = payload;
      console.log(state.tabs);
      state.currentTab = payload[0];
    },
    setCurrentTab(state, payload: string) {
      state.currentTab = payload;
    },
  },
  actions: {
    async initialization({ commit, dispatch }) {
      try {
        const data: Array<IData> = await Api.getData();
        commit("setData", data);
        dispatch("tabInit");
      } catch (error) {
        console.error(error);
      }
    },
    tabInit({ commit, getters }) {
      const tabs = new Set();
      const items = getters["data"]
      items.forEach((item: IData) => {
        Object.keys(item.timeframes).map((timeframe) => tabs.add(timeframe));
      });
      commit("setTabs", Array.from(tabs));
    },
    changeTab({ commit }, tab: string) {
      commit("setCurrentTab", tab);
    },
  },
};
