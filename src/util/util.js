import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  month = Math.floor(month)
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1,)).day();

  let currentmonthCounter = 0 - firstDayOfTheMonth
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
        currentmonthCounter++
        return dayjs(new Date(year, month, currentmonthCounter))
    });
  });
  return daysMatrix;
};
