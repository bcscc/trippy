export class Trip {

    #id
    #destination
    #date
    #description

    static #next_id = 0;
    
    constructor(destination, date, description) {
        this.id = Trip.#next_id++;
        this.destination = destination;
        this.date = date;
        this.description = description;
    }

    get id() {
        return this.id;
    }

    get destination() {
        return this.destination;
    }

    get date() {
        return this.date;
    }

    get description() {
        return this.description;
    }

    // Setters
    set destination(newDestination) {
        this.destination = newDestination;
    }

    set date(newDate) {
        this.date = newDate;
    }

    set description(newDescription) {
        this.description = newDescription;
    }
}
