import { IData } from "@/types";

class Api {
  url: string;

  constructor() {
    this.url = "/1.json";
  }

  static async getData(): Promise<IData[]> {
    const response = await fetch("/data.json");

    if (!response.ok) {
      throw new Error("Something goes wrong");
    }

    const data = await response.json();

    return data;
  }
}

export default Api;
