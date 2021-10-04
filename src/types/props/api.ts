export interface ITimeFrame {
  current: number;
  previous: number;
}

export interface IData {
  title: string;
  color: string;
  timeframes: {
    [key: string]: ITimeFrame;
    daily: ITimeFrame;
    weekly: ITimeFrame;
    monthly: ITimeFrame;
  };
}
