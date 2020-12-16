let keys = ["Stranger Things", "The Crown", "Ozark", "Black Summer", "Another Life", 
"Criminal: UK", "The Witcher", "The Letter for the King", "Cursed", "Ratched"];

let content = [{
    "Stranger Things" : {
        title : "Stranger Things",
        company : ["Netflix"],
        seasions : 3,
        episodes : 25,
        genres : "Science fiction/horror",
        year : 2020
    },
    "The Crown" : {
        title : "The Crown",
        company : ["Netflix"],
        seasions : 4,
        episodes : 40,
        genres : "Historical drama",
        year : 2020
    },
    "Ozark" : {
        title : "Ozark",
        company : ["Netflix"],
        seasions : 3,
        episodes : 30,
        genres : "Crime drama",
        year : 2020
    },
    "Black Summer" : {
        title : "Black Summer",
        company : ["Netflix"],
        seasions : 1,
        episodes : 8,
        genres : "Zombie drama",
        year : 2020
    },
    "Another Life" : {
        title : "Another Life",
        company : ["Netflix"],
        seasions : 1,
        episodes : 10,
        genres : "Science fiction drama",
        year : 2020
    },
    "Criminal: UK" : {
        title : "Criminal: UK",
        company : ["Netflix"],
        seasions : 2,
        episodes : 7,
        genres : "Police procedural anthology series",
        year : 2020
    },
    "The Witcher" : {
        title : "The Witcher",
        company : ["Netflix"],
        seasions : 1,
        episodes : 8,
        genres : "Fantasy drama",
        year : 2020
    },
    "The Letter for the King" : {
        title : "The Letter for the King",
        company : ["Netflix"],
        seasions : 1,
        episodes : 6,
        genres : "fantasy",
        year : 2020
    },
    "Cursed" : {
        title : "Cursed",
        company : ["Netflix"],
        seasions : 1,
        episodes : 10,
        genres : "fantasy",
        year : 2020
    },
    "Ratched" : {
        title : "Ratched",
        company : ["Netflix"],
        seasions : 1,
        episodes : 8,
        genres : "drama",
        year : 2020
    }

}]


class SeriesLibrary {
    static getSeries () {
        return content;
    }


    static getSeriesByCompany(company) {
        let i,
        result = [];

        if (company === "Netflix"){
            for (i = 0; i <= keys.length - 1; i++){
                if (content[0][keys[i]].company.includes(company)){
                    result.push(content[0][keys[i]].title);
                }
            }
        }

        return result;
    }
}

module.exports = SeriesLibrary;
