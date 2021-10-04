import { tracker } from "./modules/tracker";
import { IRootState } from "@/types";
import { createStore } from "vuex";

export default createStore<IRootState>({
  modules: { tracker },
});
