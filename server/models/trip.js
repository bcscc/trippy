const Date = require("../models/date");
const Activity = require("../models/activity");


class Trip {
    #id;
    #destination;
    #description;
    #departureDate;
    #returnDate;
    #flight;
    #accommodation;
    #itinerary;

    static #next_id = 0;

    constructor(destination) {
        this.#id = Trip.#next_id++;
        this.#description = "Trip";
        this.#destination = destination || "";
        this.#departureDate = new Date();
        this.#returnDate = new Date();
        this.#flight = {
            departureAirport: "",
            arrivalAirport: "",
            confirmationNum: "",
        };
        this.#accommodation = { address: "", confirmationNum: "" };
        this.#itinerary = [];
    }

    get id() {
        return this.#id;
    }

    get destination() {
        return this.#destination;
    }

    set destination(newDestination) {
        this.#destination = newDestination;
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription
    }

    get departureDate() {
        return this.#departureDate;
    }

    set departureDate(newDepartureDate) {
        this.#departureDate = newDepartureDate;
    }

    get returnDate() {
        return this.#returnDate;
    }

    set returnDate(newReturnDate) {
        this.#returnDate = newReturnDate;
    }

    get flight() {
        return this.#flight;
    }

    setflight(d, a, c) {
        this.#flight = {
            departureAirport: d,
            arrivalAirport: a,
            confirmationNum: c
        };
    }

    get accommodation() {
        return this.#accommodation;
    }

    setAccommodation(a, c) {
        this.#accommodation = {
            address: a,
            confirmationNum: c
        }
    }

    get itinerary() {
        return this.#itinerary.map(act => act.toJSON());
    }

    addActivity(d, n) {
        this.#itinerary.push(new Activity(d, n));
    }

    getActivity(id) {
        return this.#itinerary.find((act) => act.id === id);
    }

    removeActivity(id) {
        this.#itinerary.pop(this.getActivity(id));
    }

    toJSON() {
        return {
            tripId: this.#id,
            destination: this.#destination,
            description: this.#description,
            departureDate: this.#departureDate.toJSON(),
            returnDate: this.#returnDate.toJSON(),
            flight: this.#flight,
            accommodation: this.#accommodation,
            itinerary: this.#itinerary.map(act => act.toJSON())
        }
    }
}

module.exports = Trip;