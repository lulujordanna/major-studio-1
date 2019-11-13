let mainGrid = d3.select('main.grid');
// var fs = require('fs');

let photos = [
   {"id":11790,
    "photo": 110,
    "alt": "California",
    "acquisition": 1872
    }, 
 {"id":244558,
    "photo": 27,
    "alt": "Bronze mirror support in the form of a nude girl",
    "acquisition": 1874
    }, 
    {"id":241102,
    "photo": 48,
    "alt": "Terracotta statuette of a nude woman",
    "acquisition": 1874
    },  
    {"id":241105,
    "photo": 50,
    "alt": "Terracotta statuette of a nude woman",
    "acquisition": 1874
    }, 
    {"id":240955,
    "photo": 55,
    "alt": "Terracotta statuette of the upper part of a woman",
    "acquisition": 1874
    }, 
    {"id":322114,
    "photo": 76,
    "alt": "Figure of a reclining woman",
    "acquisition": 1886
    }, 
{"id":555566,
    "photo": 7,
    "alt": "Nude female figure holding a vase on her head",
    "acquisition": 1886
    }, 
   {"id":245834,
    "photo": 25,
    "alt": "Stucco relief panel",
    "acquisition": 1892
    }, 
 {"id":11677,
    "photo": 100,
    "alt": "Female Nude",
    "acquisition": 1894
    }, 
    {"id":12642,
    "photo": 95,
    "alt": "The Bather",
    "acquisition": 1895
    }, 
    {"id":246542,
    "photo": 42,
    "alt": "Bronze patera handle in the form of Lasa",
    "acquisition": 1896
    }, 
    {"id":10785,
    "photo": 114,
    "alt": "Ariadne",
    "acquisition": 1897
    }, 
    {"id":13146,
    "photo": 86,
    "alt": "Diana",
    "acquisition": 1898
    }, 
    {"id":11952,
    "photo": 111,
    "alt": "Ruth Gleaning",
    "acquisition": 1899
    }, 
    {"id":547478,
    "photo": 26,
    "alt": "Statuette of a Standing Woman",
    "acquisition": 1903
    },
    {"id":188810,
    "photo": 45,
    "alt": "Female figure playing the bass-viol",
    "acquisition": 1903
    }, 
    {"id":247542,
    "photo": 61,
    "alt": "Gold ring with intaglio of a naked woman",
    "acquisition": 1906
    }, 
    {"id":248606,
    "photo": 8,
    "alt": "Terracotta nude female statuette, perhaps Aphrodite",
    "acquisition": 1911
    }, 
    {"id":248602,
    "photo": 12,
    "alt": "Statuette of a woman",
    "acquisition": 1911
    }, 
    {"id":248607,
    "photo": 46,
    "alt": "Terracotta statuette of a seated doll",
    "acquisition": 1911
    }, 
    {"id":248605,
    "photo": 51,
    "alt": "Terracotta statuette of a doll",
    "acquisition": 1911
    }, 
    {"id":191807,
    "photo": 78,
    "alt": "Beside the Sea",
    "acquisition": 1911
    }, 
    {"id":11922,
    "photo": 92,
    "alt": "Clytie",
    "acquisition": 1911
    }, 
    {"id":191848,
    "photo": 71,
    "alt": "Study for Obsession",
    "acquisition": 1912
    }, 
{"id":248793,
    "photo": 49,
    "alt": "Terracotta statuette of a nude woman",
    "acquisition": 1913
    }, 
    {"id":437393,
    "photo": 68,
    "alt": "The Toilet of Bathsheba",
    "acquisition": 1914
    }, 
  {"id":193491,
    "photo": 2,
    "alt": "Female Nude Seen from Behind", 
    "acquisition": 1917
    }, 
    {"id":250530,
    "photo": 19,
    "alt": "Faience statuette of a woman",
    "acquisition": 1917
    }, 
    {"id":250529,
    "photo": 56,
    "alt": "Faience statuette of a woman holding two vases",
    "acquisition": 1917
    }, 
    {"id":550934,
    "photo": 66,
    "alt": "Amulet: Woman Playing Lyre",
    "acquisition": 1917
    }, 
    {"id":552786,
    "photo": 72,
    "alt": "Woman with a lyre",
    "acquisition": 1917
    }, 
    {"id":250798,
    "photo": 23,
    "alt": "Handle of a patera, winged Lasa",
    "acquisition": 1919
    }, 
    {"id":250747,
    "photo": 63,
    "alt": "Terracotta duck-askos",
    "acquisition": 1919
    }, 
    {"id":435739,
    "photo": 98,
    "alt": "The Toilette of Venus",
    "acquisition": 1920
    }, 
 {"id":10344,
    "photo": 102,
    "alt": "At the Threshold",
    "acquisition": 1920
    }, 
    {"id":251055,
    "photo": 22,
    "alt": "Mirror with Apollo and a nymph",
    "acquisition": 1921
    }, 
    {"id":12699,
    "photo": 93,
    "alt": "Musidora",
    "acquisition": 1921
    }, 
    {"id":546858,
    "photo": 29,
    "alt": "Female figurine",
    "acquisition": 1922
    }, 
    {"id":251177,
    "photo": 85,
    "alt": "Bronze cista (toiletries box)",
    "acquisition": 1922
    }, 
    {"id":569274,
    "photo": 9,
    "alt": "Plaque with nude female in a shrine niche",
    "acquisition": 1923
    }, 
    {"id":569275,
    "photo": 10,
    "alt": "Plaque with nude female in a shrine niche",
    "acquisition": 1923
    }, 
    {"id":195360,
    "photo": 47,
    "alt": "Seated Nude Woman Touching her Foot",
    "acquisition": 1925
    }, 
{"id":251935,
    "photo": 67,
    "alt": "Terracotta oinochoe (jug)",
    "acquisition": 1925
    }, 
    {"id":544222,
    "photo": 14,
    "alt": "Female figure",
    "acquisition": 1926
    }, 
    {"id":556631,
    "photo": 41,
    "alt": "Fragment of female figure",
    "acquisition": 1926
    }, 
    {"id":195516,
    "photo": 151,
    "alt": "Twelve Dancers", 
    "acquisition": 1926
    },
    {"id":11998,
    "photo": 34,
    "alt": "Diana",
    "acquisition": 1928
    }, 
    {"id":436004,
    "photo": 20,
    "alt": "The Woman in the Waves",
    "acquisition": 1929
    }, 
    {"id":436018,
    "photo": 38,
    "alt": "Nude with Flowering Branch",
    "acquisition": 1929
    }, 
    {"id":436173,
    "photo": 59,
    "alt": "Woman Having Her Hair Combed",
    "acquisition": 1929
    }, 
    {"id":436172,
    "photo": 62,
    "alt": "Woman Drying Her Foot",
    "acquisition": 1929
    }, 
    {"id":436003,
    "photo": 69,
    "alt": "The Young Bather",
    "acquisition": 1929
    }, 
 {"id":436022,
    "photo": 80,
    "alt": "The Source",
    "acquisition": 1929
    }, 
    {"id":436128,
    "photo": 81,
    "alt": "Woman with a Towel",
    "acquisition": 1929
    }, 
    {"id":436127,
    "photo": 84,
    "alt": "Woman Bathing in a Shallow Tub",
    "acquisition": 1929
    }, 
    {"id":437306,
    "photo": 89,
    "alt": "Bather in the Woods",
    "acquisition": 1929
    }, 
    {"id":436131,
    "photo": 90,
    "alt": "Bather Stepping into a Tub",
    "acquisition": 1929
    }, 
  {"id":436002,
    "photo": 99,
    "alt": "Woman with a Parrot",
    "acquisition": 1929
    }, 
    {"id":435965,
    "photo": 101,
    "alt": "Bacchante in a Landscape",
    "acquisition": 1929
    }, 
   {"id":196441,
    "photo": 130,
    "alt": "Seated Woman Wiping her Left Hip",
    "acquisition": 1929
    }, 
    {"id":196446,
    "photo": 131,
    "alt": "Dancer Looking at the Sole of Her Right Foot",
    "acquisition": 1929
    }, 
    {"id":196452,
    "photo": 132,
    "alt": "Woman Getting out of the Bath",
    "acquisition": 1929
    }, 
    {"id":196443,
    "photo": 133,
    "alt": "Torso: Woman Rubbing Her Back with a Sponge",
    "acquisition": 1929
    }, 
    {"id":196453,
    "photo": 134,
    "alt": "Pregnant Woman",
    "acquisition": 1929
    }, 
    {"id":196447,
    "photo": 135,
    "alt": "Dancer Looking at the Sole of Her Right Foot",
    "acquisition": 1929
    }, 
    {"id":196449,
    "photo": 136,
    "alt": "Dancer Holding her Right Foot in Her Right Hand",
    "acquisition": 1929
    }, 
    {"id":196444,
    "photo": 137,
    "alt": "Dancer Moving Forward, Arms Raised, Right Leg Forward",
    "acquisition": 1929
    }, 
    {"id":196451,
    "photo": 138,
    "alt": "Dancer Putting on Her Stocking",
    "acquisition": 1929
    }, 
    {"id":196472,
    "photo": 139,
    "alt": "Dancer Adjusting the Shoulder Strap of Her Bodice",
    "acquisition": 1929
    }, 
    {"id":196466,
    "photo": 140,
    "alt": "First Arabesque Penchée",
    "acquisition": 1929
    }, 
    {"id":196479,
    "photo": 141,
    "alt": "The Bow",
    "acquisition": 1929
    }, 
    {"id":196463,
    "photo": 142,
    "alt": "Arabesque Devant",
    "acquisition": 1929
    }, 
    {"id":196456,
    "photo": 143,
    "alt": "Tendu Devant",
    "acquisition": 1929
    }, 
    {"id":196454,
    "photo": 144,
    "alt": "Arabesque Devant",
    "acquisition": 1929
    }, 
    {"id":196464,
    "photo": 145,
    "alt": "Spanish Dancer",
    "acquisition": 1929
    }, 
    {"id":196458,
    "photo": 146,
    "alt": "Woman Taken Unawares",
    "acquisition": 1929
    }, 
    {"id":196471,
    "photo": 147,
    "alt": "Dancer at Rest",
    "acquisition": 1929
    }, 
    {"id":196474,
    "photo": 148,
    "alt": "Dancer Fastening the String of Her Tights",
    "acquisition": 1929
    }, 
    {"id":196488,
    "photo": 149,
    "alt": "The Tub",
    "acquisition": 1929
    }, 
    {"id":196507,
    "photo": 150,
    "alt": "Woman Arranging her Hair",
    "acquisition": 1929
    },
    {"id":544224,
    "photo": 11,
    "alt": "Female figure",
    "acquisition": 1930
    }, 
    {"id":546746,
    "photo": 17,
    "alt": "Statuette of a Royal (?)  Woman with the Cartouches of Necho II on her Arms",
    "acquisition": 1930
    }, 
    {"id":548521,
    "photo": 52,
    "alt": "Seated woman with Two Female Servants",
    "acquisition": 1930
    }, 
    {"id":471098,
    "photo": 54,
    "alt": "Roundel with Nude Woman Supporting a Heraldic Shield",
    "acquisition": 1932
    }, 
    {"id":471095,
    "photo": 58,
    "alt": "Roundel with Nude Woman Supporting a Heraldic Shield",
    "acquisition": 1932
    }, 
    {"id":322916,
    "photo": 4,
    "alt": "Nude female figure",
    "acquisition": 1933
    }, 
    {
    "id":323163,
    "photo": 1,
    "alt": "Nude female figure", 
    "acquisition": 1934
    },
    {"id":253423,
    "photo": 39,
    "alt": "Marble female figure",
    "acquisition": 1934
    }, 
    {"id":253556,
    "photo": 57,
    "alt": "Bronze mirror with a support in the form of a nude girl",
    "acquisition": 1938
    }, 
    {"id":436708,
    "photo": 106,
    "alt": "Odalisque in Grisaille",
    "acquisition": 1938
    }, 
    {"id":199645,
    "photo": 123,
    "alt": "Bather",
    "acquisition": 1945
    }, 
    {"id":199615,
    "photo": 129,
    "alt": "Plaque",
    "acquisition": 1945
    }, 
    {"id":200559,
    "photo": 91,
    "alt": "Girl with Doves",
    "acquisition": 1949
    }, 
    {"id":436446,
    "photo": 107,
    "alt": "Two Tahitian Women",
    "acquisition": 1949
    }, 
    {"id":200842,
    "photo": 122,
    "alt": "La Baigneuse",
    "acquisition": 1950
    }, 
   {"id":200740,
    "photo": 125,
    "alt": "Coffeepot",
    "acquisition": 1950
    }, 
    {"id":324126,
    "photo": 15,
    "alt": "Nude standing female",
    "acquisition": 1951
    }, 
    {"id":324112,
    "photo": 21,
    "alt": "Female figure",
    "acquisition": 1951
    }, 
    {"id":438821,
    "photo": 79,
    "alt": "Ia Orana Maria (Hail Mary)",
    "acquisition": 1951
    }, 
    {"id":324199,
    "photo": 60,
    "alt": "Fan or fly-whisk handle in the form of four female figures",
    "acquisition": 1952
    }, 
    {"id":9299,
    "photo": 112,
    "alt": "Vase",
    "acquisition": 1952
    }, 
    {"id":254751,
    "photo": 24,
    "alt": "Statuette of a female figure",
    "acquisition": 1953
    }, 
    {"id":201635,
    "photo": 36,
    "alt": "Figure personifying a spring",
    "acquisition": 1953
    }, 
    {"id":436170,
    "photo": 103,
    "alt": "Woman Combing Her Hair",
    "acquisition": 1956
    }, 
    {"id":437383,
    "photo": 88,
    "alt": "Pandora",
    "acquisition": 1960
    }, 
    {"id":325348,
    "photo": 65,
    "alt": "Horse frontlet",
    "acquisition": 1961
    }, 
    {"id":202614,
    "photo": 73,
    "alt": "Winter",
    "acquisition": 1962
    }, 
    {"id":202696,
    "photo": 119,
    "alt": "Relief",
    "acquisition": 1962
    }, 
    {"id":325688,
    "photo": 6,
    "alt": "Statuette of a female",
    "acquisition": 1964
    }, 
    {"id":325824,
    "photo": 3,
    "alt": "Nude female", 
    "acquisition": 1966
    }, 
    {"id":549698,
    "photo": 5,
    "alt": "Nude female holding monkeys",
    "acquisition": 1966
    }, 
    {"id":552477,
    "photo": 16,
    "alt": "Statuette, nude woman, armless",
    "acquisition": 1966
    }, 
    {"id":204715,
    "photo": 97,
    "alt": "The Hand of Rodin",
    "acquisition": 1966
    }, 
    {"id":11788,
    "photo": 109,
    "alt": "America",
    "acquisition": 1966
    }, 
{"id":205098,
    "photo": 128,
    "alt": "Venus Anadyomene",
    "acquisition": 1969
    },
    {"id":436580,
    "photo": 96,
    "alt": "Aegina Visited by Jupiter",
    "acquisition": 1970
    }, 
    {"id":205413,
    "photo": 127,
    "alt": "Nymph drying her hair",
    "acquisition": 1971
    }, 
    {"id":435713,
    "photo": 104,
    "alt": "The Disillusioned Medea",
    "acquisition": 1972
    }, 
 {"id":11157,
    "photo": 115,
    "alt": "Daphne",
    "acquisition": 1973
    }, 
    {"id":459078,
    "photo": 70,
    "alt": "Nymph of the Spring",
    "acquisition": 1975
    }, 
    {"id":435867,
    "photo": 82,
    "alt": "Bathers",
    "acquisition": 1976
    }, 
    {"id":255595,
    "photo": 40,
    "alt": "Marble female figure",
    "acquisition": 1977
    }, 
 {"id":206698,
    "photo": 74,
    "alt": "Hermaphrodite",
    "acquisition": 1977
    }, 
    {"id":311052,
    "photo": 32,
    "alt": "Figure: Female",
    "acquisition": 1978
    }, 
    {"id":313167,
    "photo": 30,
    "alt": "Female Figure",
    "acquisition": 1979
    }, 
   {"id":313168,
    "photo": 31,
    "alt": "Female Figure",
    "acquisition": 1979
    }, 
    {"id":12650,
    "photo": 113,
    "alt": "The Libyan Sibyl",
    "acquisition": 1979
    }, 
    {"id":314204,
    "photo": 18,
    "alt": "Female Figure",
    "acquisition": 1980
    }, 
    {"id":207024,
    "photo": 35,
    "alt": "Nude Women Wrestling",
    "acquisition": 1982
    }, 
    {"id":39413,
    "photo": 116,
    "alt": "Karaikkal Ammaiyar, Shaiva Saint",
    "acquisition": 1982
    }, 
  {"id":207028,
    "photo": 120,
    "alt": "Bather",
    "acquisition": 1982
    }, 
    {"id":207031,
    "photo": 121,
    "alt": "Lucretia",
    "acquisition": 1982
    }, 
    {"id":393740,
    "photo": 94,
    "alt": "Two Terms, Two Cornices and a Pillar",
    "acquisition": 1983
    }, 
    {"id":436918,
    "photo": 108,
    "alt": "Venus and Cupid",
    "acquisition": 1986
    }, 
    {"id":38149,
    "photo": 44,
    "alt": "Bust of a Female Deity",
    "acquisition": 1987
    }, 
   {"id":207756,
    "photo": 124,
    "alt": "Themire Crowned by Graces",
    "acquisition": 1988
    }, 
    {"id":316682,
    "photo": 53,
    "alt": "Lime Container (Poporo)",
    "acquisition": 1991
    }, 
    {"id":327463,
    "photo": 13,
    "alt": "Vessel fragment in the form of a nude female",
    "acquisition": 1992
    },  
    {"id":208212,
    "photo": 43,
    "alt": "Nude at the Bathtub",
    "acquisition": 1995
    }, 
  {"id":208203,
    "photo": 126,
    "alt": "Holy-water stoup with relief of Mary of Egypt",
    "acquisition": 1995
    }, 
    {"id":208572,
    "photo": 87,
    "alt": "Joseph and Potiphar's Wife",
    "acquisition": 1997
    }, 
    {"id":318283,
    "photo": 33,
    "alt": "Kneeling Female Figure",
    "acquisition": 1999
    }, 
    {"id":40098,
    "photo": 118,
    "alt": "Plaque with Standing Yakshi",
    "acquisition": 1999
    }, 
    {"id":39205,
    "photo": 117,
    "alt": "Seated Figure",
    "acquisition": 2000
    }, 
    {"id":438013,
    "photo": 28,
    "alt": "Reclining Nude",
    "acquisition": 2003
    }, 
    {"id":72387,
    "photo": 37,
    "alt": "Standing Female Diety",
    "acquisition": 2003
    }, 
    {"id":438018,
    "photo": 105,
    "alt": "Woman before a Mirror",
    "acquisition": 2003
    }, 
   {"id":505630,
    "photo": 75,
    "alt": "Rattle",
    "acquisition": 2007
    }, 
    {"id":634108,
    "photo": 64,
    "alt": "The Dream of the Shepherd (Der Traum des Hirten)",
    "acquisition": 2013
    }, 
    {"id":670765,
    "photo": 77,
    "alt": "The Death of Cleopatra",
    "acquisition": 2016
    }
    ];

// var photos = fs.readFileSync('/major-studio-1/interactive/files/photos.JSON');
// photos = JSON.parse(photos); 
    
photos.forEach((photo) => {
    let existingHTML = mainGrid.html();
    let html = `<a href="https://www.metmuseum.org/art/collection/search/${photo.id}" target="_blank"><img src="images/${photo.photo}.jpg" alt="${photo.alt}"></a>`
    mainGrid.html(existingHTML += html);
});