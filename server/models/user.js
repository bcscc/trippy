const Trip = require("../models/trip");

class User {

    #id
    #username
    #password
    #trips

    static #next_id = 0;
    
    constructor(username, password) {
        this.#id = User.#next_id++;
        this.#username = username;
        this.#password = password;
        this.#trips = [];
    }

    get id() {
        return this.#id;
    }

    get username() {
        return this.#username;
    }

    get password() {
        return this.#password;
    }

    get trips() {
        return this.#trips.map(trip => trip.toJSON());
    }

    set username(newUsername) {
        this.#username = newUsername;
    }

    set password(newPassword) {
        this.#password = newPassword;
    }

    addTrip(trip) {
        this.#trips.push(trip);
    }

    toJSON() {
        return {
            id: this.#id,
            username: this.#username,
            password: this.#password,
            trips: this.#trips
        };
    }
}

module.exports = User;
