let keys = ["The Grudge", "Underwater ", "Like a Boss", "Three Christs", "Inherit the Viper", 
"The Sonata", "Bad Boys for Life", "A Fall from Grace", "The Gentlemen", "The Assistant"];

let content = [{
    "The Grudge" : {
        title : "The Grudge",
        company : ["Screen Gems", "Ghost House Pictures", "Stage 6 Films"],
        year : 2020
    },
    "Underwater " : {
        title : "Underwater",
        company : ["20th Century Fox", "TSG Entertainment", "Chernin Entertainment"],
        year : 2020
    },
    "Like a Boss" : {
        title : "Like a Boss",
        company : ["Paramount Pictures"],
        year : 2020
    },
    "Three Christs" : {
        title : "Three Christs",
        company : ["Ifc Films"],
        year : 2020
    },
    "Inherit the Viper" : {
        title : "Three Christs",
        company : ["Barry Films", "Tycor International Film Company"],
        year : 2020
    },
    "The Sonata" : {
        title : "The Sonata",
        company : ["Screen Media Films"],
        year : 2020
    },
    "Bad Boys for Life" : {
        title : "Bad Boys for Life",
        company : ["Columbia Pictures", "Don Simpson", "Jerry Bruckheimer Films"],
        year : 2020
    },
    "A Fall from Grace" : {
        title : "A Fall From Grace",
        company : ["Netflix"],
        year : 2020
    },
    "The Gentlemen" : {
        title : "The Gentlemen",
        company : ["Stx Films", "Miramax"],
        year : 2020
    },
    "The Assistant" : {
        title : "The Assistant",
        company : ["Bleecker Street"],
        year : 2020
    }
}]

class MoviesLibrary {


    static getMovies() {
        return content;
    }


    static getMoviesByCompany (company) {
        let i,
        result = [];

        for (i = 0; i <= keys.length - 1; i++){
             if (content[0][keys[i]].company.includes(company)){
                    result.push(content[0][keys[i]].title);
                }

        }

        return result;
    }
}

module.exports = MoviesLibrary;
