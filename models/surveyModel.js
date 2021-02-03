'use strict'

const db = require('./conn');

class SurveyModel {
    constructor(topic, phrase, ranking) {
        this.topic = topic;
        this.phrase = phrase;
        this.ranking = ranking;
    }

    static async getAll() {
        const response = await db.any(`SELECT * FROM topics INNER JOIN rankings ON topics.score = rankings.id`);
        return response;
    }
}

//     //create another static method to get ceo by slug, pass slug as argument
//     static async getBySlug(slug) {
//         const response = await db.one(`SELECT * FROM apple_ceos WHERE slug = '${slug}';`);
//         return response;
//     }
// 


module.exports = SurveyModel;