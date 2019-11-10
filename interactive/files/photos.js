let mainGrid = d3.select('main.grid');
// var fs = require('fs');

let photos = [
    {
    "id":323163,
    "photo": 1,
    "alt": "Nude female figure"
    },
    {
    "id":193491,
    "photo": 2,
    "alt": "Female Nude Seen from Behind"
    }, 
    {"id":325824,
    "photo": 3,
    "alt": "Nude female"
    }, 
    {"id":322916,
    "photo": 4,
    "alt": "Nude female figure"
    }, 
    {"id":549698,
    "photo": 5,
    "alt": "Nude female holding monkeys"
    }, 
    {"id":325688,
    "photo": 6,
    "alt": "Statuette of a female"
    }, 
    {"id":555566,
    "photo": 7,
    "alt": "Nude female figure holding a vase on her head"
    }, 
    {"id":248606,
    "photo": 8,
    "alt": "erracotta nude female statuette, perhaps Aphrodite"
    }, 
    {"id":569274,
    "photo": 9,
    "alt": "Plaque with nude female in a shrine niche"
    }, 
    {"id":569275,
    "photo": 10,
    "alt": "Plaque with nude female in a shrine niche"
    }, 
    {"id":544224,
    "photo": 11,
    "alt": "Female figure"
    }, 
    {"id":248602,
    "photo": 12,
    "alt": "Statuette of a woman"
    }, 
    {"id":327463,
    "photo": 13,
    "alt": "Vessel fragment in the form of a nude female"
    }, 
    {"id":544222,
    "photo": 14,
    "alt": "Female figure"
    }, 
    {"id":324126,
    "photo": 15,
    "alt": "Nude standing female"
    }, 
    {"id":552477,
    "photo": 16,
    "alt": "Statuette, nude woman, armless"
    }, 
    {"id":546746,
    "photo": 17,
    "alt": "Statuette of a Royal (?)  Woman with the Cartouches of Necho II on her Arms"
    }, 
    {"id":314204,
    "photo": 18,
    "alt": "Female Figure"
    }, 
    {"id":250530,
    "photo": 19,
    "alt": "Faience statuette of a woman"
    }, 
    {"id":436004,
    "photo": 20,
    "alt": "The Woman in the Waves"
    }, 
    {"id":324112,
    "photo": 21,
    "alt": "Female figure"
    }, 
    {"id":251055,
    "photo": 22,
    "alt": "Mirror with Apollo and a nymph"
    }, 
    {"id":250798,
    "photo": 23,
    "alt": "Handle of a patera, winged Lasa"
    }, 
    {"id":254751,
    "photo": 24,
    "alt": "Statuette of a female figure"
    }, 
    {"id":245834,
    "photo": 25,
    "alt": "Stucco relief panel"
    }, 
    {"id":547478,
    "photo": 26,
    "alt": "Statuette of a Standing Woman"
    }, 
    {"id":244558,
    "photo": 27,
    "alt": "Bronze mirror support in the form of a nude girl"
    }, 
    {"id":438013,
    "photo": 28,
    "alt": "Reclining Nude"
    }, 
    {"id":546858,
    "photo": 29,
    "alt": "Female figurine"
    }, 
    {"id":313167,
    "photo": 30,
    "alt": "Female Figure"
    }, 
    {"id":313168,
    "photo": 31,
    "alt": "Female Figure"
    }, 
    {"id":311052,
    "photo": 32,
    "alt": "Figure: Female"
    }, 
    {"id":318283,
    "photo": 33,
    "alt": "Kneeling Female Figure"
    }, 
    {"id":11998,
    "photo": 34,
    "alt": "Diana"
    }, 
    {"id":207024,
    "photo": 35,
    "alt": "Nude Women Wrestling"
    }, 
    {"id":201635,
    "photo": 36,
    "alt": "Figure personifying a spring"
    }, 
    {"id":72387,
    "photo": 37,
    "alt": "Standing Female Diety"
    }, 
    {"id":436018,
    "photo": 38,
    "alt": "Nude with Flowering Branch"
    }, 
    {"id":253423,
    "photo": 39,
    "alt": "Marble female figure"
    }, 
    {"id":255595,
    "photo": 40,
    "alt": "Marble female figure"
    }, 
    {"id":556631,
    "photo": 41,
    "alt": "Fragment of female figure"
    }, 
    {"id":246542,
    "photo": 42,
    "alt": "Bronze patera handle in the form of Lasa"
    }, 
    {"id":208212,
    "photo": 43,
    "alt": "Nude at the Bathtub"
    }, 
    {"id":38149,
    "photo": 44,
    "alt": "Bust of a Female Deity"
    }, 
    {"id":188810,
    "photo": 45,
    "alt": "Female figure playing the bass-viol"
    }, 
    {"id":248607,
    "photo": 46,
    "alt": "Terracotta statuette of a seated doll"
    }, 
    {"id":195360,
    "photo": 47,
    "alt": "Seated Nude Woman Touching her Foot"
    }, 
    {"id":241102,
    "photo": 48,
    "alt": "Terracotta statuette of a nude woman"
    }, 
    {"id":248793,
    "photo": 49,
    "alt": "Terracotta statuette of a nude woman"
    }, 
    {"id":241105,
    "photo": 50,
    "alt": "Terracotta statuette of a nude woman"
    }, 
    {"id":248605,
    "photo": 51,
    "alt": "Terracotta statuette of a doll"
    }, 
    {"id":548521,
    "photo": 52,
    "alt": "Seated woman with Two Female Servants"
    }, 
    {"id":316682,
    "photo": 53,
    "alt": "Lime Container (Poporo)"
    }, 
    {"id":471098,
    "photo": 54,
    "alt": "Roundel with Nude Woman Supporting a Heraldic Shield"
    }, 
    {"id":240955,
    "photo": 55,
    "alt": "Terracotta statuette of the upper part of a woman"
    }, 
    {"id":250529,
    "photo": 56,
    "alt": "Faience statuette of a woman holding two vases"
    }, 
    {"id":253556,
    "photo": 57,
    "alt": "Bronze mirror with a support in the form of a nude girl"
    }, 
    {"id":471095,
    "photo": 58,
    "alt": "Roundel with Nude Woman Supporting a Heraldic Shield"
    }, 
    {"id":436173,
    "photo": 59,
    "alt": "Woman Having Her Hair Combed"
    }, 
    {"id":324199,
    "photo": 60,
    "alt": "Fan or fly-whisk handle in the form of four female figures"
    }, 
    {"id":247542,
    "photo": 61,
    "alt": "Gold ring with intaglio of a naked woman"
    }, 
    {"id":436172,
    "photo": 62,
    "alt": "Woman Drying Her Foot"
    }, 
    {"id":250747,
    "photo": 63,
    "alt": "Terracotta duck-askos"
    }, 
    {"id":634108,
    "photo": 64,
    "alt": "The Dream of the Shepherd (Der Traum des Hirten)"
    }, 
    {"id":325348,
    "photo": 65,
    "alt": "Horse frontlet"
    }, 
    {"id":550934,
    "photo": 66,
    "alt": "Amulet: Woman Playing Lyre"
    }, 
    {"id":251935,
    "photo": 67,
    "alt": "Terracotta oinochoe (jug)"
    }, 
    {"id":437393,
    "photo": 68,
    "alt": "The Toilet of Bathsheba"
    }, 
    {"id":436003,
    "photo": 69,
    "alt": "The Young Bather"
    }, 
    {"id":459078,
    "photo": 70,
    "alt": "Nymph of the Spring"
    }, 
    {"id":191848,
    "photo": 71,
    "alt": "Study for Obsession"
    }, 
    {"id":552786,
    "photo": 72,
    "alt": "Woman with a lyre"
    }, 
    {"id":202614,
    "photo": 73,
    "alt": "Winter"
    }, 
    {"id":206698,
    "photo": 74,
    "alt": "Hermaphrodite"
    }, 
    {"id":3505630,
    "photo": 75,
    "alt": "Rattle"
    }, 
    {"id":322114,
    "photo": 76,
    "alt": "Figure of a reclining woman"
    }, 
    {"id":670765,
    "photo": 77,
    "alt": "The Death of Cleopatra"
    }, 
    {"id":191807,
    "photo": 78,
    "alt": "Beside the Sea"
    }, 
    {"id":438821,
    "photo": 79,
    "alt": "Ia Orana Maria (Hail Mary)"
    }, 
    {"id":436022,
    "photo": 80,
    "alt": "The Source"
    }, 
    {"id":436128,
    "photo": 81,
    "alt": "Woman with a Towel"
    }, 
    {"id":435867,
    "photo": 82,
    "alt": "Bathers"
    }, 
    {"id":205518,
    "photo": 83,
    "alt": "Bacchante"
    }, 
    {"id":436127,
    "photo": 84,
    "alt": "Woman Bathing in a Shallow Tub"
    }, 
    {"id":251177,
    "photo": 85,
    "alt": "Bronze cista (toiletries box)"
    }, 
    {"id":13146,
    "photo": 86,
    "alt": "Diana"
    }, 
    {"id":208572,
    "photo": 87,
    "alt": "Joseph and Potiphar's Wife"
    }, 
    {"id":437383,
    "photo": 88,
    "alt": "Pandora"
    }, 
    {"id":437306,
    "photo": 89,
    "alt": "Bather in the Woods"
    }, 
    {"id":436131,
    "photo": 90,
    "alt": "Bather Stepping into a Tub"
    }, 
    {"id":200559,
    "photo": 91,
    "alt": "Girl with Doves"
    }, 
    {"id":11922,
    "photo": 92,
    "alt": "Clytie"
    }, 
    {"id":12699,
    "photo": 93,
    "alt": "Musidora"
    }, 
    {"id":393740,
    "photo": 94,
    "alt": "Two Terms, Two Cornices and a Pillar"
    }, 
    {"id":12642,
    "photo": 95,
    "alt": "The Bather"
    }, 
    {"id":436580,
    "photo": 96,
    "alt": "Aegina Visited by Jupiter"
    }, 
    {"id":204715,
    "photo": 97,
    "alt": "The Hand of Rodin"
    }, 
    {"id":435739,
    "photo": 98,
    "alt": "The Toilette of Venus"
    }, 
    {"id":436002,
    "photo": 99,
    "alt": "Woman with a Parrot"
    }, 
    {"id":11677,
    "photo": 100,
    "alt": "Female Nude"
    }, 
    {"id":435965,
    "photo": 101,
    "alt": "Bacchante in a Landscape"
    }, 
    {"id":10344,
    "photo": 102,
    "alt": "At the Threshold"
    }, 
    {"id":436170,
    "photo": 103,
    "alt": "Woman Combing Her Hair"
    }, 
    {"id":435713,
    "photo": 104,
    "alt": "The Disillusioned Medea"
    }, 
    {"id":438018,
    "photo": 105,
    "alt": "Woman before a Mirror"
    }, 
    {"id":436708,
    "photo": 106,
    "alt": "Odalisque in Grisaille"
    }, 
    {"id":436446,
    "photo": 107,
    "alt": "Two Tahitian Women"
    }, 
    {"id":436918,
    "photo": 108,
    "alt": "Venus and Cupid"
    }, 
    {"id":11788,
    "photo": 109,
    "alt": "America"
    }, 
    {"id":11790,
    "photo": 110,
    "alt": "California"
    }, 
    {"id":11952,
    "photo": 111,
    "alt": "Ruth Gleaning"
    }, 
    {"id":9299,
    "photo": 112,
    "alt": "Vase"
    }, 
    {"id":12650,
    "photo": 113,
    "alt": "The Libyan Sibyl"
    }, 
    {"id":10785,
    "photo": 114,
    "alt": "Ariadne"
    }, 
    {"id":11157,
    "photo": 115,
    "alt": "Daphne"
    }, 
    {"id":39413,
    "photo": 116,
    "alt": "Karaikkal Ammaiyar, Shaiva Saint"
    }, 
    {"id":39205,
    "photo": 117,
    "alt": "Seated Figure"
    }, 
    {"id":40098,
    "photo": 118,
    "alt": "Plaque with Standing Yakshi"
    }, 
    {"id":202696,
    "photo": 119,
    "alt": "Relief"
    }, 
    {"id":207028,
    "photo": 120,
    "alt": "Bather"
    }, 
    {"id":207031,
    "photo": 121,
    "alt": "Lucretia"
    }, 
    {"id":200842,
    "photo": 122,
    "alt": "La Baigneuse"
    }, 
    {"id":199645,
    "photo": 123,
    "alt": "Bather"
    }, 
    {"id":207756,
    "photo": 124,
    "alt": "Themire Crowned by Graces"
    }, 
    {"id":200740,
    "photo": 125,
    "alt": "Coffeepot"
    }, 
    {"id":208203,
    "photo": 126,
    "alt": "Holy-water stoup with relief of Mary of Egypt"
    }, 
    {"id":205413,
    "photo": 127,
    "alt": "Nymph drying her hair"
    }, 
    {"id":205098,
    "photo": 128,
    "alt": "Venus Anadyomene"
    }, 
    {"id":199615,
    "photo": 129,
    "alt": "Plaque"
    }, 
    {"id":196441,
    "photo": 130,
    "alt": "Seated Woman Wiping her Left Hip"
    }, 
    {"id":196446,
    "photo": 131,
    "alt": "Dancer Looking at the Sole of Her Right Foot"
    }, 
    {"id":196452,
    "photo": 132,
    "alt": "Woman Getting out of the Bath"
    }, 
    {"id":196443,
    "photo": 133,
    "alt": "Torso: Woman Rubbing Her Back with a Sponge"
    }, 
    {"id":196453,
    "photo": 134,
    "alt": "Pregnant Woman"
    }, 
    {"id":196447,
    "photo": 135,
    "alt": "Dancer Looking at the Sole of Her Right Foot"
    }, 
    {"id":196449,
    "photo": 136,
    "alt": "Dancer Holding her Right Foot in Her Right Hand"
    }, 
    {"id":196444,
    "photo": 137,
    "alt": "Dancer Moving Forward, Arms Raised, Right Leg Forward"
    }, 
    {"id":196451,
    "photo": 138,
    "alt": "Dancer Putting on Her Stocking"
    }, 
    {"id":196472,
    "photo": 139,
    "alt": "Dancer Adjusting the Shoulder Strap of Her Bodice"
    }, 
    {"id":196466,
    "photo": 140,
    "alt": "First Arabesque Penchée"
    }, 
    {"id":196479,
    "photo": 141,
    "alt": "The Bow"
    }, 
    {"id":196463,
    "photo": 142,
    "alt": "Arabesque Devant"
    }, 
    {"id":196456,
    "photo": 143,
    "alt": "Tendu Devant"
    }, 
    {"id":196454,
    "photo": 144,
    "alt": "Arabesque Devant"
    }, 
    {"id":196464,
    "photo": 145,
    "alt": "Spanish Dancer"
    }, 
    {"id":196458,
    "photo": 146,
    "alt": "Woman Taken Unawares"
    }, 
    {"id":196471,
    "photo": 147,
    "alt": "Dancer at Rest"
    }, 
    {"id":196474,
    "photo": 148,
    "alt": "Dancer Fastening the String of Her Tights"
    }, 
    {"id":196488,
    "photo": 149,
    "alt": "The Tub"
    }, 
    {"id":196507,
    "photo": 150,
    "alt": "Woman Arranging her Hair"
    }
    ];

// var photos = fs.readFileSync('/major-studio-1/interactive/files/photos.JSON');
// photos = JSON.parse(photos); 
    
photos.forEach((photo) => {
    let existingHTML = mainGrid.html();
    let html = `<a href="https://www.metmuseum.org/art/collection/search/${photo.id}" target="_blank"><img src="images/${photo.photo}.jpg" alt="${photo.alt}"></a>`
    mainGrid.html(existingHTML += html);
});