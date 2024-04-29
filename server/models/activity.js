class Activity {
    
    #id
    #description
    #notes

    static #next_id = 0

    constructor(description, notes) {
        this.#id = Activity.#next_id++
        this.description = description || "";
        this.notes = notes || "";
    }

    get id() {
        return this.#id
    }

    get description() {
        return this.#description;
    }

    get notes() {
        return this.#notes;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    set notes(newNotes) {
        this.#notes = newNotes;
    }

    toJSON() {
        return {
            activityId: this.#id,
            description: this.#description,
            notes: this.#notes
        }
    }

}

module.exports = Activity;