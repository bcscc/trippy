class Date {
    #month;
    #day;
    #year;
  
    constructor(month = "MM", day = "DD", year = "YYYY") {
      this.#month = month > 0 && month < 13 ? month : "MM";
      this.#day = day > 0 && day <= 31 ? day : "DD";
      this.#year = year >= 1 && year.toString().length === 4 ? year : "YYYY";
    }
  
    get month() {
      return this.#month;
    }
  
    get day() {
      return this.#day;
    }
  
    get year() {
      return this.#year;
    }
  
    set month(newMonth) {
      this.#month = newMonth > 0 && newMonth < 13 ? newMonth : "MM";
    }
  
    set day(newDay) {
      this.#day = newDay > 0 && newDay <= 31 ? newDay : "DD";
    }
  
    set year(newYear) {
      this.#year = newYear >= 1 ? newYear : "YYYY";
    }

    setDate(month, day, year) {
      this.#month = month
      this.#day = day
      this.#year = year
    }
  
    toJSON() {
      return `${this.#year}-${this.#month}-${this.#day}`;
    }
  }
  
  module.exports = Date;
  