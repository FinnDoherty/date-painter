
const DateUtils = {

  dateObjectToReadableLabels: function(dateObj) {
    const labelsDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const labelsMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      day: labelsDay[dateObj.toDate().getDay()],
      date: dateObj.toDate().getDate(),
      month: labelsMonth[dateObj.toDate().getMonth()],
    };
  }
};

export default DateUtils;
