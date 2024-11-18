import moment from "moment";

export const DateTimeRangeFormatter = (startTime: string, endTime: string) => {
  // Format timestamps using Moment.js
  const formattedTime = `${moment(startTime).format("dddd, D MMM")}, ${moment(
    startTime
  ).format("hA")}-${moment(endTime).format("hA")}`;

  return formattedTime;
};
