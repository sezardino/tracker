import { IData } from "@/types";
import { Commit, Dispatch } from "vuex";

export interface TrackerState {
  data: [] | Array<IData>;
  tabs: [] | Array<string>;
  currentTab: string;
}

export interface IRootState {
  tracker: TrackerState;
}

export type ActionContextType = {
  dispatch: Dispatch;
  commit: Commit;
  getters: any;
  rootGetters: any;
};
