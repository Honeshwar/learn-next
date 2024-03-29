import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../Configuration/dbSetup";

connectDB();
const data = [
  {
    id: 2,
    ac_name: "Uttarkashi",
  },
  {
    id: 3,
    ac_name: "Tehri Garhwal",
  },
  {
    id: 4,
    ac_name: "Dehradun",
  },
  {
    id: 5,
    ac_name: "Chamoli",
  },
  {
    id: 6,
    ac_name: "Rudraprayag",
  },
  {
    id: 7,
    ac_name: "Pauri Garhwal",
  },
  {
    id: 8,
    ac_name: "Nainital",
  },
  {
    id: 9,
    ac_name: "Pithoragarh",
  },
  {
    id: 10,
    ac_name: "Bageshwar",
  },
  {
    id: 11,
    ac_name: "Almora",
  },
  {
    id: 12,
    ac_name: "Champawat",
  },
  {
    id: 13,
    ac_name: "Udham Singh Nagar",
  },
  {
    id: 14,
    ac_name: "Hardwar",
  },
  {
    id: 15,
    ac_name: "Tawang",
  },
  {
    id: 16,
    ac_name: "West Kameng",
  },
  {
    id: 17,
    ac_name: "East Kameng",
  },
  {
    id: 18,
    ac_name: "Pakke Kessang",
  },
  {
    id: 19,
    ac_name: "Itanagar Capital Complex",
  },
  {
    id: 20,
    ac_name: "Papumpare",
  },
  {
    id: 21,
    ac_name: "Lower Subansiri",
  },
  {
    id: 22,
    ac_name: "Kra daadi",
  },
  {
    id: 23,
    ac_name: "Kurung Kumey",
  },
  {
    id: 24,
    ac_name: "Upper Subansiri",
  },
  {
    id: 25,
    ac_name: "Kamle",
  },
  {
    id: 26,
    ac_name: "West Siang",
  },
  {
    id: 27,
    ac_name: "Lower Siang",
  },
  {
    id: 28,
    ac_name: "Lepa Rada",
  },
  {
    id: 29,
    ac_name: "Siang",
  },
  {
    id: 30,
    ac_name: "Shi-Yomi",
  },
  {
    id: 31,
    ac_name: "Upper Siang",
  },
  {
    id: 32,
    ac_name: "East Siang",
  },
  {
    id: 33,
    ac_name: "Dibang Valley",
  },
  {
    id: 34,
    ac_name: "Lower Dibang Valley",
  },
  {
    id: 35,
    ac_name: "Lohit",
  },
  {
    id: 36,
    ac_name: "Anjaw",
  },
  {
    id: 37,
    ac_name: "Namsai",
  },
  {
    id: 38,
    ac_name: "Changlang",
  },
  {
    id: 39,
    ac_name: "Tirap",
  },
  {
    id: 40,
    ac_name: "Longding",
  },
  {
    id: 41,
    ac_name: "Karimganj",
  },
  {
    id: 42,
    ac_name: "Hailakandi",
  },
  {
    id: 43,
    ac_name: "Cachar",
  },
  {
    id: 44,
    ac_name: "Dima Hasao",
  },
  {
    id: 45,
    ac_name: "Karbi Anglong",
  },
  {
    id: 46,
    ac_name: "West Karbi Anglong",
  },
  {
    id: 47,
    ac_name: "South Salmara",
  },
  {
    id: 48,
    ac_name: "Dhubri",
  },
  {
    id: 49,
    ac_name: "Kokrajhar",
  },
  {
    id: 50,
    ac_name: "Chirang",
  },
  {
    id: 51,
    ac_name: "Bongaigaon",
  },
  {
    id: 52,
    ac_name: "Goalpara",
  },
  {
    id: 53,
    ac_name: "Barpeta",
  },
  {
    id: 54,
    ac_name: "Bajali",
  },
  {
    id: 55,
    ac_name: "Kamrup",
  },
  {
    id: 56,
    ac_name: "Kamrup Metro",
  },
  {
    id: 57,
    ac_name: "Tamulpur",
  },
  {
    id: 58,
    ac_name: "Nalbari",
  },
  {
    id: 59,
    ac_name: "Baksa",
  },
  {
    id: 60,
    ac_name: "Udalguri",
  },
  {
    id: 61,
    ac_name: "Darrang",
  },
  {
    id: 62,
    ac_name: "Sonitpur",
  },
  {
    id: 63,
    ac_name: "Biswanath",
  },
  {
    id: 64,
    ac_name: "Morigaon",
  },
  {
    id: 65,
    ac_name: "Nagaon",
  },
  {
    id: 66,
    ac_name: "Hojai",
  },
  {
    id: 67,
    ac_name: "Golaghat",
  },
  {
    id: 68,
    ac_name: "Jorhat",
  },
  {
    id: 69,
    ac_name: "Majuli",
  },
  {
    id: 70,
    ac_name: "Sivasagar",
  },
  {
    id: 71,
    ac_name: "Charaideo",
  },
  {
    id: 72,
    ac_name: "Lakhimpur",
  },
  {
    id: 73,
    ac_name: "Dhemaji",
  },
  {
    id: 74,
    ac_name: "Dibrugarh",
  },
  {
    id: 75,
    ac_name: "Tinsukia",
  },
  {
    id: 76,
    ac_name: "Imphal East",
  },
  {
    id: 77,
    ac_name: "Imphal West",
  },
  {
    id: 78,
    ac_name: "Bishnupur",
  },
  {
    id: 79,
    ac_name: "Thoubal",
  },
  {
    id: 80,
    ac_name: "Kakching",
  },
  {
    id: 81,
    ac_name: "Jiribam",
  },
  {
    id: 82,
    ac_name: "Chandel",
  },
  {
    id: 83,
    ac_name: "Tengnoupal",
  },
  {
    id: 84,
    ac_name: "Kamjong",
  },
  {
    id: 85,
    ac_name: "Ukhrul",
  },
  {
    id: 86,
    ac_name: "Kangpokpi",
  },
  {
    id: 87,
    ac_name: "Senapati",
  },
  {
    id: 88,
    ac_name: "Tamenglong",
  },
  {
    id: 89,
    ac_name: "Noney",
  },
  {
    id: 90,
    ac_name: "Pherzawl",
  },
  {
    id: 91,
    ac_name: "Churachandpur",
  },
  {
    id: 92,
    ac_name: "West Jaintia Hills",
  },
  {
    id: 93,
    ac_name: "East Jaintia Hills",
  },
  {
    id: 94,
    ac_name: "Ri Bhoi",
  },
  {
    id: 95,
    ac_name: "East Khasi Hills",
  },
  {
    id: 96,
    ac_name: "Eastern West Khasi Hills",
  },
  {
    id: 97,
    ac_name: "West Khasi Hills",
  },
  {
    id: 98,
    ac_name: "South West Khasi Hills",
  },
  {
    id: 99,
    ac_name: "North Garo Hills",
  },
  {
    id: 100,
    ac_name: "East Garo Hills",
  },
  {
    id: 101,
    ac_name: "West Garo Hills",
  },
  {
    id: 102,
    ac_name: "South West Garo Hills",
  },
  {
    id: 103,
    ac_name: "South Garo Hills",
  },
  {
    id: 104,
    ac_name: "Mamit",
  },
  {
    id: 105,
    ac_name: "Kolasib",
  },
  {
    id: 106,
    ac_name: "Aizwal",
  },
  {
    id: 107,
    ac_name: "Saitual",
  },
  {
    id: 108,
    ac_name: "Khawzawl",
  },
  {
    id: 109,
    ac_name: "Champai",
  },
  {
    id: 110,
    ac_name: "Serchhip",
  },
  {
    id: 111,
    ac_name: "Hnahthial",
  },
  {
    id: 112,
    ac_name: "Lunglei",
  },
  {
    id: 113,
    ac_name: "Lawngtlai",
  },
  {
    id: 114,
    ac_name: "Siaha",
  },
  {
    id: 115,
    ac_name: "Dimapur",
  },
  {
    id: 116,
    ac_name: "Chumoukedima",
  },
  {
    id: 117,
    ac_name: "Niuland",
  },
  {
    id: 118,
    ac_name: "Peren",
  },
  {
    id: 119,
    ac_name: "Kohima",
  },
  {
    id: 120,
    ac_name: "Tseminyu",
  },
  {
    id: 121,
    ac_name: "Zünheboto",
  },
  {
    id: 122,
    ac_name: "Phek",
  },
  {
    id: 123,
    ac_name: "Mokokchung",
  },
  {
    id: 124,
    ac_name: "Wokha",
  },
  {
    id: 125,
    ac_name: "Mon",
  },
  {
    id: 126,
    ac_name: "Longleng",
  },
  {
    id: 127,
    ac_name: "Tuensang",
  },
  {
    id: 128,
    ac_name: "Noklak",
  },
  {
    id: 129,
    ac_name: "Shamator",
  },
  {
    id: 130,
    ac_name: "Kiphire",
  },
  {
    id: 131,
    ac_name: "Gyalshing",
  },
  {
    id: 132,
    ac_name: "Soreng",
  },
  {
    id: 133,
    ac_name: "Namchi",
  },
  {
    id: 134,
    ac_name: "Gangtok",
  },
  {
    id: 135,
    ac_name: "Pakyong",
  },
  {
    id: 136,
    ac_name: "Mangan",
  },
  {
    id: 137,
    ac_name: "NA",
  },
  {
    id: 138,
    ac_name: "West Tripura",
  },
  {
    id: 139,
    ac_name: "Sipahijala",
  },
  {
    id: 140,
    ac_name: "Khowai",
  },
  {
    id: 141,
    ac_name: "Gomati",
  },
  {
    id: 142,
    ac_name: "South Tripura",
  },
  {
    id: 143,
    ac_name: "Dhalai",
  },
  {
    id: 144,
    ac_name: "Unakoti",
  },
  {
    id: 145,
    ac_name: "North Tripura",
  },
  {
    id: 146,
    ac_name: "CHAMBA",
  },
  {
    id: 147,
    ac_name: "KANGRA",
  },
  {
    id: 148,
    ac_name: "LAHAUL & SPITI",
  },
  {
    id: 149,
    ac_name: "KULLU",
  },
  {
    id: 150,
    ac_name: "MANDI",
  },
  {
    id: 151,
    ac_name: "HAMIRPUR",
  },
  {
    id: 152,
    ac_name: "UNA",
  },
  {
    id: 153,
    ac_name: "BILASPUR",
  },
  {
    id: 154,
    ac_name: "SOLAN",
  },
  {
    id: 155,
    ac_name: "SIRMOUR",
  },
  {
    id: 156,
    ac_name: "SHIMLA",
  },
  {
    id: 157,
    ac_name: "KINNAUR",
  },
  {
    id: 158,
    ac_name: "Puducherry",
  },
  {
    id: 159,
    ac_name: "Karaikal",
  },
  {
    id: 160,
    ac_name: "Mahe",
  },
  {
    id: 161,
    ac_name: "Yanam",
  },
  {
    id: 162,
    ac_name: "Chandigarh",
  },
  {
    id: 163,
    ac_name: "Leh",
  },
  {
    id: 164,
    ac_name: "Kargil",
  },
  {
    id: 165,
    ac_name: "Lakshadweep",
  },
  {
    id: 166,
    ac_name: "Nicobar",
  },
  {
    id: 167,
    ac_name: "North and Middle Andman",
  },
  {
    id: 168,
    ac_name: "South Andaman",
  },
  {
    id: 169,
    ac_name: "Daman",
  },
  {
    id: 170,
    ac_name: "Diu",
  },
  {
    id: 171,
    ac_name: "Dadra and Nagar Haveli",
  },
  {
    id: 172,
    ac_name: "North Goa",
  },
  {
    id: 173,
    ac_name: "South Goa",
  },
  {
    id: 174,
    ac_name: "Sheopur",
  },
  {
    id: 175,
    ac_name: "Morena",
  },
  {
    id: 176,
    ac_name: "Bhind",
  },
  {
    id: 177,
    ac_name: "Gwalior",
  },
  {
    id: 178,
    ac_name: "Datia",
  },
  {
    id: 179,
    ac_name: "Shivpuri",
  },
  {
    id: 180,
    ac_name: "Guna",
  },
  {
    id: 181,
    ac_name: "Ashok Nagar",
  },
  {
    id: 182,
    ac_name: "Sagar",
  },
  {
    id: 183,
    ac_name: "Tikamgarh",
  },
  {
    id: 184,
    ac_name: "Niwari",
  },
  {
    id: 185,
    ac_name: "Chhatarpur",
  },
  {
    id: 186,
    ac_name: "Damoh",
  },
  {
    id: 187,
    ac_name: "Panna",
  },
  {
    id: 188,
    ac_name: "Satna",
  },
  {
    id: 189,
    ac_name: "Rewa",
  },
  {
    id: 190,
    ac_name: "Sidhi",
  },
  {
    id: 191,
    ac_name: "Singrauli",
  },
  {
    id: 192,
    ac_name: "Shahdol",
  },
  {
    id: 193,
    ac_name: "Anuppur",
  },
  {
    id: 194,
    ac_name: "Umaria",
  },
  {
    id: 195,
    ac_name: "Umariya",
  },
  {
    id: 196,
    ac_name: "Katni",
  },
  {
    id: 197,
    ac_name: "Jabalpur",
  },
  {
    id: 198,
    ac_name: "Dindori",
  },
  {
    id: 199,
    ac_name: "Mandla",
  },
  {
    id: 200,
    ac_name: "Balaghat",
  },
  {
    id: 201,
    ac_name: "Seoni",
  },
  {
    id: 202,
    ac_name: "Narsingpur",
  },
  {
    id: 203,
    ac_name: "Chhindwara",
  },
  {
    id: 204,
    ac_name: "Betul",
  },
  {
    id: 205,
    ac_name: "Harda",
  },
  {
    id: 206,
    ac_name: "Narmadapuram",
  },
  {
    id: 207,
    ac_name: "Raisen",
  },
  {
    id: 208,
    ac_name: "Vidisha",
  },
  {
    id: 209,
    ac_name: "Bhopal",
  },
  {
    id: 210,
    ac_name: "Sehore",
  },
  {
    id: 211,
    ac_name: "Rajgarh",
  },
  {
    id: 212,
    ac_name: "Agar Malwa",
  },
  {
    id: 213,
    ac_name: "Shajapur",
  },
  {
    id: 214,
    ac_name: "Dewas",
  },
  {
    id: 215,
    ac_name: "Khandwa",
  },
  {
    id: 216,
    ac_name: "Burhanpur",
  },
  {
    id: 217,
    ac_name: "Khargone",
  },
  {
    id: 218,
    ac_name: "Barwani",
  },
  {
    id: 219,
    ac_name: "Alirajpur",
  },
  {
    id: 220,
    ac_name: "Jhabua",
  },
  {
    id: 221,
    ac_name: "Dhar",
  },
  {
    id: 222,
    ac_name: "Indore",
  },
  {
    id: 223,
    ac_name: "Ujjain",
  },
  {
    id: 224,
    ac_name: "Ratlam",
  },
  {
    id: 225,
    ac_name: "Mandsaur",
  },
  {
    id: 226,
    ac_name: "Neemuch",
  },
  {
    id: 227,
    ac_name: "Komarambheem Asifabad",
  },
  {
    id: 228,
    ac_name: "Mancherial",
  },
  {
    id: 229,
    ac_name: "Nirmal",
  },
  {
    id: 230,
    ac_name: "Adilabad",
  },
  {
    id: 231,
    ac_name: "Nizamabad",
  },
  {
    id: 232,
    ac_name: "Kamareddy",
  },
  {
    id: 233,
    ac_name: "Jagtial",
  },
  {
    id: 234,
    ac_name: "Peddapalle",
  },
  {
    id: 235,
    ac_name: "Karimnagar",
  },
  {
    id: 236,
    ac_name: "Rajanna Siricilla",
  },
  {
    id: 237,
    ac_name: "Siddipet",
  },
  {
    id: 238,
    ac_name: "Medak",
  },
  {
    id: 239,
    ac_name: "Sangareddy",
  },
  {
    id: 240,
    ac_name: "Medchal-Malkajgiri",
  },
  {
    id: 241,
    ac_name: "Rangareddy",
  },
  {
    id: 242,
    ac_name: "Vikarabad",
  },
  {
    id: 243,
    ac_name: "Hyderabad",
  },
  {
    id: 244,
    ac_name: "Narayanpet",
  },
  {
    id: 245,
    ac_name: "Mahabubunagar",
  },
  {
    id: 246,
    ac_name: "Wanaparthy",
  },
  {
    id: 247,
    ac_name: "Jogulamba Gadwal",
  },
  {
    id: 248,
    ac_name: "Nagarkurnool",
  },
  {
    id: 249,
    ac_name: "Nalgonda",
  },
  {
    id: 250,
    ac_name: "Suryapet",
  },
  {
    id: 251,
    ac_name: "Yadadri Bhongir",
  },
  {
    id: 252,
    ac_name: "Jangaon",
  },
  {
    id: 253,
    ac_name: "Mahabubabad",
  },
  {
    id: 254,
    ac_name: "Warangal",
  },
  {
    id: 255,
    ac_name: "Hanamkonda",
  },
  {
    id: 256,
    ac_name: "Jayashankar Bhupalpally",
  },
  {
    id: 257,
    ac_name: "Mulugu",
  },
  {
    id: 258,
    ac_name: "Badradri Kothagudem",
  },
  {
    id: 259,
    ac_name: "Khammam",
  },
  {
    id: 260,
    ac_name: "Ganganagar",
  },
  {
    id: 261,
    ac_name: "Hanumangarh",
  },
  {
    id: 262,
    ac_name: "Bikaner",
  },
  {
    id: 263,
    ac_name: "Churu",
  },
  {
    id: 264,
    ac_name: "Jhunjhunun",
  },
  {
    id: 265,
    ac_name: "Sikar",
  },
  {
    id: 266,
    ac_name: "Jaipur",
  },
  {
    id: 267,
    ac_name: "Alwar",
  },
  {
    id: 268,
    ac_name: "Bharatpur",
  },
  {
    id: 269,
    ac_name: "Dhaulpur",
  },
  {
    id: 270,
    ac_name: "Karauli",
  },
  {
    id: 271,
    ac_name: "Dausa",
  },
  {
    id: 272,
    ac_name: "Sawai Madhopur",
  },
  {
    id: 273,
    ac_name: "Tonk",
  },
  {
    id: 274,
    ac_name: "Ajmer",
  },
  {
    id: 275,
    ac_name: "Nagaur",
  },
  {
    id: 276,
    ac_name: "Pali",
  },
  {
    id: 277,
    ac_name: "Jodhpur",
  },
  {
    id: 278,
    ac_name: "Jaisalmer",
  },
  {
    id: 279,
    ac_name: "Barmer",
  },
  {
    id: 280,
    ac_name: "Jalor",
  },
  {
    id: 281,
    ac_name: "Sirohi",
  },
  {
    id: 282,
    ac_name: "Udaipur",
  },
  {
    id: 283,
    ac_name: "Pratapgarh",
  },
  {
    id: 284,
    ac_name: "Dungarpur",
  },
  {
    id: 285,
    ac_name: "Banswara",
  },
  {
    id: 286,
    ac_name: "Chittorgarh",
  },
  {
    id: 287,
    ac_name: "Rajsamand",
  },
  {
    id: 288,
    ac_name: "Bhilwara",
  },
  {
    id: 289,
    ac_name: "Bundi",
  },
  {
    id: 290,
    ac_name: "Kota",
  },
  {
    id: 291,
    ac_name: "Baran",
  },
  {
    id: 292,
    ac_name: "Jhalawar",
  },
  {
    id: 293,
    ac_name: "Srikakulam",
  },
  {
    id: 294,
    ac_name: "Vizianagaram",
  },
  {
    id: 295,
    ac_name: "Manyam",
  },
  {
    id: 296,
    ac_name: "Visakhapatnam",
  },
  {
    id: 297,
    ac_name: "Anakapalli",
  },
  {
    id: 298,
    ac_name: "Alluri Seetharama Raju",
  },
  {
    id: 299,
    ac_name: "Kakinada",
  },
  {
    id: 300,
    ac_name: "East Godavari",
  },
  {
    id: 301,
    ac_name: "Dr B R Ambedkar Konaseema",
  },
  {
    id: 302,
    ac_name: "West Godavari",
  },
  {
    id: 303,
    ac_name: "Eluru",
  },
  {
    id: 304,
    ac_name: "NTR",
  },
  {
    id: 305,
    ac_name: "Krishna",
  },
  {
    id: 306,
    ac_name: "Palnadu",
  },
  {
    id: 307,
    ac_name: "Guntur",
  },
  {
    id: 308,
    ac_name: "Bapatla",
  },
  {
    id: 309,
    ac_name: "Prakasam",
  },
  {
    id: 310,
    ac_name: "Nellore",
  },
  {
    id: 311,
    ac_name: "Tirupati",
  },
  {
    id: 312,
    ac_name: "Kadapa",
  },
  {
    id: 313,
    ac_name: "Annamayya",
  },
  {
    id: 314,
    ac_name: "Nandyal",
  },
  {
    id: 315,
    ac_name: "Kurnool",
  },
  {
    id: 316,
    ac_name: "Anantapur",
  },
  {
    id: 317,
    ac_name: "Sri Sathya Sai",
  },
  {
    id: 318,
    ac_name: "Chittoor",
  },
  {
    id: 319,
    ac_name: "Belagavi",
  },
  {
    id: 320,
    ac_name: "Bagalakote",
  },
  {
    id: 321,
    ac_name: "Vijayapura",
  },
  {
    id: 322,
    ac_name: "Kalaburagi",
  },
  {
    id: 323,
    ac_name: "Yadgir",
  },
  {
    id: 324,
    ac_name: "Bidar",
  },
  {
    id: 325,
    ac_name: "Raichur",
  },
  {
    id: 326,
    ac_name: "Koppal",
  },
  {
    id: 327,
    ac_name: "Gadag",
  },
  {
    id: 328,
    ac_name: "Dharwad",
  },
  {
    id: 329,
    ac_name: "Uttara Kannada",
  },
  {
    id: 330,
    ac_name: "Haveri",
  },
  {
    id: 331,
    ac_name: "Vijayanagara",
  },
  {
    id: 332,
    ac_name: "Ballari",
  },
  {
    id: 333,
    ac_name: "Chitradurga",
  },
  {
    id: 334,
    ac_name: "Davangere",
  },
  {
    id: 335,
    ac_name: "Shimoga",
  },
  {
    id: 336,
    ac_name: "Udupi",
  },
  {
    id: 337,
    ac_name: "Chikmagalur",
  },
  {
    id: 338,
    ac_name: "Tumkur",
  },
  {
    id: 339,
    ac_name: "Chikkaballapur",
  },
  {
    id: 340,
    ac_name: "Kolar",
  },
  {
    id: 341,
    ac_name: "Bangalore Urban",
  },
  {
    id: 342,
    ac_name: "Bangalore Rural",
  },
  {
    id: 343,
    ac_name: "Ramanagara",
  },
  {
    id: 344,
    ac_name: "Mandya",
  },
  {
    id: 345,
    ac_name: "Hassan",
  },
  {
    id: 346,
    ac_name: "Dakshina Kannada",
  },
  {
    id: 347,
    ac_name: "Kodagu",
  },
  {
    id: 348,
    ac_name: "Mysore",
  },
  {
    id: 349,
    ac_name: "Chamarajanagar",
  },
  {
    id: 350,
    ac_name: "Kasaragod",
  },
  {
    id: 351,
    ac_name: "Kannur",
  },
  {
    id: 352,
    ac_name: "Wayanad",
  },
  {
    id: 353,
    ac_name: "Kozhikode",
  },
  {
    id: 354,
    ac_name: "Malappuram",
  },
  {
    id: 355,
    ac_name: "Palakkad",
  },
  {
    id: 356,
    ac_name: "Thrissur",
  },
  {
    id: 357,
    ac_name: "Ernakulam",
  },
  {
    id: 358,
    ac_name: "Idukki",
  },
  {
    id: 359,
    ac_name: "Kottayam",
  },
  {
    id: 360,
    ac_name: "Alappuzha",
  },
  {
    id: 361,
    ac_name: "Pathanamthitta",
  },
  {
    id: 362,
    ac_name: "Kollam",
  },
  {
    id: 363,
    ac_name: "Thiruvananthapuram",
  },
  {
    id: 364,
    ac_name: "Thiruvallur",
  },
  {
    id: 365,
    ac_name: "Chennai",
  },
  {
    id: 366,
    ac_name: "Kancheepuram",
  },
  {
    id: 367,
    ac_name: "Vellore",
  },
  {
    id: 368,
    ac_name: "Krishnagiri",
  },
  {
    id: 369,
    ac_name: "Dharmapuri",
  },
  {
    id: 370,
    ac_name: "Tiruvannamalai",
  },
  {
    id: 371,
    ac_name: "Villupuram",
  },
  {
    id: 372,
    ac_name: "Salem",
  },
  {
    id: 373,
    ac_name: "Namakkal",
  },
  {
    id: 374,
    ac_name: "Erode",
  },
  {
    id: 375,
    ac_name: "Tiruppur",
  },
  {
    id: 376,
    ac_name: "Nilgiris",
  },
  {
    id: 377,
    ac_name: "Coimbatore",
  },
  {
    id: 378,
    ac_name: "Dindigul",
  },
  {
    id: 379,
    ac_name: "Karur",
  },
  {
    id: 380,
    ac_name: "Tiruchirappalli",
  },
  {
    id: 381,
    ac_name: "Perambalur",
  },
  {
    id: 382,
    ac_name: "Ariyalur",
  },
  {
    id: 383,
    ac_name: "Cuddalore",
  },
  {
    id: 384,
    ac_name: "Nagapattinam",
  },
  {
    id: 385,
    ac_name: "Thiruvarur",
  },
  {
    id: 386,
    ac_name: "Thanjavur",
  },
  {
    id: 387,
    ac_name: "Pudukkottai",
  },
  {
    id: 388,
    ac_name: "Sivaganga",
  },
  {
    id: 389,
    ac_name: "Madurai",
  },
  {
    id: 390,
    ac_name: "Theni",
  },
  {
    id: 391,
    ac_name: "Virudhunagar",
  },
  {
    id: 392,
    ac_name: "Ramanathapuram",
  },
  {
    id: 393,
    ac_name: "Thoothukkudi",
  },
  {
    id: 394,
    ac_name: "Tirunelveli",
  },
  {
    id: 395,
    ac_name: "Kanniyakumari",
  },
  {
    id: 396,
    ac_name: "Kutch",
  },
  {
    id: 397,
    ac_name: "Banaskantha",
  },
  {
    id: 398,
    ac_name: "Patan",
  },
  {
    id: 399,
    ac_name: "Mahesana",
  },
  {
    id: 400,
    ac_name: "Sabarkantha",
  },
  {
    id: 401,
    ac_name: "Aravalli",
  },
  {
    id: 402,
    ac_name: "Gandhinagar",
  },
  {
    id: 403,
    ac_name: "Ahmedabad",
  },
  {
    id: 404,
    ac_name: "Surendranagar",
  },
  {
    id: 405,
    ac_name: "Morbi",
  },
  {
    id: 406,
    ac_name: "Rajkot",
  },
  {
    id: 407,
    ac_name: "Jamnagar",
  },
  {
    id: 408,
    ac_name: "Devbhoomi Dwarka",
  },
  {
    id: 409,
    ac_name: "Porbandar",
  },
  {
    id: 410,
    ac_name: "Junagadh",
  },
  {
    id: 411,
    ac_name: "Gir Somnath",
  },
  {
    id: 412,
    ac_name: "Amreli",
  },
  {
    id: 413,
    ac_name: "Bhavnagar",
  },
  {
    id: 414,
    ac_name: "Botad",
  },
  {
    id: 415,
    ac_name: "Anand",
  },
  {
    id: 416,
    ac_name: "Kheda",
  },
  {
    id: 417,
    ac_name: "Mahisagar",
  },
  {
    id: 418,
    ac_name: "Panchmahal",
  },
  {
    id: 419,
    ac_name: "Dahod",
  },
  {
    id: 420,
    ac_name: "Vadodara",
  },
  {
    id: 421,
    ac_name: "Chhota Udaipur",
  },
  {
    id: 422,
    ac_name: "Narmada",
  },
  {
    id: 423,
    ac_name: "Bharuch",
  },
  {
    id: 424,
    ac_name: "Surat",
  },
  {
    id: 425,
    ac_name: "Tapi",
  },
  {
    id: 426,
    ac_name: "Dang",
  },
  {
    id: 427,
    ac_name: "Navsari",
  },
  {
    id: 428,
    ac_name: "Valsad",
  },
  {
    id: 429,
    ac_name: "Nandurbar",
  },
  {
    id: 430,
    ac_name: "Dhule",
  },
  {
    id: 431,
    ac_name: "Jalgaon",
  },
  {
    id: 432,
    ac_name: "Buldhana",
  },
  {
    id: 433,
    ac_name: "Akola",
  },
  {
    id: 434,
    ac_name: "Washim",
  },
  {
    id: 435,
    ac_name: "Amravati",
  },
  {
    id: 436,
    ac_name: "Wardha",
  },
  {
    id: 437,
    ac_name: "Nagpur",
  },
  {
    id: 438,
    ac_name: "Bhandara",
  },
  {
    id: 439,
    ac_name: "Gondiya",
  },
  {
    id: 440,
    ac_name: "Gadchiroli",
  },
  {
    id: 441,
    ac_name: "Chandrapur",
  },
  {
    id: 442,
    ac_name: "Yavatmal",
  },
  {
    id: 443,
    ac_name: "Nanded",
  },
  {
    id: 444,
    ac_name: "Hingoli",
  },
  {
    id: 445,
    ac_name: "Parbhani",
  },
  {
    id: 446,
    ac_name: "Jalna",
  },
  {
    id: 447,
    ac_name: "Aurangabad",
  },
  {
    id: 448,
    ac_name: "Nashik",
  },
  {
    id: 449,
    ac_name: "Palghar",
  },
  {
    id: 450,
    ac_name: "Thane",
  },
  {
    id: 451,
    ac_name: "Mumbai Suburban",
  },
  {
    id: 452,
    ac_name: "Mumbai City",
  },
  {
    id: 453,
    ac_name: "Raigad",
  },
  {
    id: 454,
    ac_name: "Pune",
  },
  {
    id: 455,
    ac_name: "Ahmednagar",
  },
  {
    id: 456,
    ac_name: "Beed",
  },
  {
    id: 457,
    ac_name: "Latur",
  },
  {
    id: 458,
    ac_name: "Osmanabad",
  },
  {
    id: 459,
    ac_name: "Solapur",
  },
  {
    id: 460,
    ac_name: "Satara",
  },
  {
    id: 461,
    ac_name: "Ratnagiri",
  },
  {
    id: 462,
    ac_name: "Sindhudurg",
  },
  {
    id: 463,
    ac_name: "Kolhapur",
  },
  {
    id: 464,
    ac_name: "Sangli",
  },
  {
    id: 465,
    ac_name: "Manendragarh-Chirmiri-Bharatpur",
  },
  {
    id: 466,
    ac_name: "Koria",
  },
  {
    id: 467,
    ac_name: "Surajpur",
  },
  {
    id: 468,
    ac_name: "Balrampur",
  },
  {
    id: 469,
    ac_name: "Surguja",
  },
  {
    id: 470,
    ac_name: "Jashpur",
  },
  {
    id: 471,
    ac_name: "Raigarh",
  },
  {
    id: 472,
    ac_name: "Sarangarh-Bilaigarh",
  },
  {
    id: 473,
    ac_name: "Korba",
  },
  {
    id: 474,
    ac_name: "Gaurella-Pendra-Marwahi",
  },
  {
    id: 475,
    ac_name: "Bilaspur",
  },
  {
    id: 476,
    ac_name: "Mungeli",
  },
  {
    id: 477,
    ac_name: "Janjgir- Champa",
  },
  {
    id: 478,
    ac_name: "Sakti",
  },
  {
    id: 479,
    ac_name: "Mahasamund",
  },
  {
    id: 480,
    ac_name: "Balodabazar - Bhatapara",
  },
  {
    id: 481,
    ac_name: "Raipur",
  },
  {
    id: 482,
    ac_name: "Gariyaband",
  },
  {
    id: 483,
    ac_name: "Dhamtari",
  },
  {
    id: 484,
    ac_name: "Balod",
  },
  {
    id: 485,
    ac_name: "Durg",
  },
  {
    id: 486,
    ac_name: "Bemetara",
  },
  {
    id: 487,
    ac_name: "Kabirdham",
  },
  {
    id: 488,
    ac_name: "Khairagarh-Chhuikhadan-Gandai",
  },
  {
    id: 489,
    ac_name: "Rajnandgaon",
  },
  {
    id: 490,
    ac_name: "Mohla-Manpur- Ambagarh Chowki",
  },
  {
    id: 491,
    ac_name: "Kanker",
  },
  {
    id: 492,
    ac_name: "Kondagaon",
  },
  {
    id: 493,
    ac_name: "Narayanpur",
  },
  {
    id: 494,
    ac_name: "Bastar (Jagdalpur)",
  },
  {
    id: 495,
    ac_name: "Dantewada",
  },
  {
    id: 496,
    ac_name: "Bijapur",
  },
  {
    id: 497,
    ac_name: "Sukma",
  },
  {
    id: 498,
    ac_name: "North Delhi",
  },
  {
    id: 499,
    ac_name: "Central Delhi",
  },
  {
    id: 500,
    ac_name: "North West Delhi",
  },
  {
    id: 501,
    ac_name: "West Delhi",
  },
  {
    id: 502,
    ac_name: "New Delhi",
  },
  {
    id: 503,
    ac_name: "South West Delhi",
  },
  {
    id: 504,
    ac_name: "South East Delhi",
  },
  {
    id: 505,
    ac_name: "South Delhi",
  },
  {
    id: 506,
    ac_name: "East Delhi",
  },
  {
    id: 507,
    ac_name: "Shahdara",
  },
  {
    id: 508,
    ac_name: "North East Delhi",
  },
  {
    id: 509,
    ac_name: "Bargarh",
  },
  {
    id: 510,
    ac_name: "Jharsuguda",
  },
  {
    id: 511,
    ac_name: "Sundargarh",
  },
  {
    id: 512,
    ac_name: "Sambalpur",
  },
  {
    id: 513,
    ac_name: "Deoghar",
  },
  {
    id: 514,
    ac_name: "Keonjhar",
  },
  {
    id: 515,
    ac_name: "Mayurbhanj",
  },
  {
    id: 516,
    ac_name: "Balasore",
  },
  {
    id: 517,
    ac_name: "Bhadrak",
  },
  {
    id: 518,
    ac_name: "Jajpur",
  },
  {
    id: 519,
    ac_name: "Dhenkanal",
  },
  {
    id: 520,
    ac_name: "Angul",
  },
  {
    id: 521,
    ac_name: "Subarnapur",
  },
  {
    id: 522,
    ac_name: "Bolangir",
  },
  {
    id: 523,
    ac_name: "Nuapada",
  },
  {
    id: 524,
    ac_name: "Nabarangpur",
  },
  {
    id: 525,
    ac_name: "Kalahandi",
  },
  {
    id: 526,
    ac_name: "Kandhamal",
  },
  {
    id: 527,
    ac_name: "Boudh",
  },
  {
    id: 528,
    ac_name: "Cuttack",
  },
  {
    id: 529,
    ac_name: "Kendrapara",
  },
  {
    id: 530,
    ac_name: "Jagatsinghpur",
  },
  {
    id: 531,
    ac_name: "Puri",
  },
  {
    id: 532,
    ac_name: "Khurda",
  },
  {
    id: 533,
    ac_name: "Nayagarh",
  },
  {
    id: 534,
    ac_name: "Ganjam",
  },
  {
    id: 535,
    ac_name: "Gajapati",
  },
  {
    id: 536,
    ac_name: "Rayagada",
  },
  {
    id: 537,
    ac_name: "Koraput",
  },
  {
    id: 538,
    ac_name: "Malkangiri",
  },
  {
    id: 539,
    ac_name: "Coochbehar",
  },
  {
    id: 540,
    ac_name: "Alipurduar",
  },
  {
    id: 541,
    ac_name: "Jalpaiguri",
  },
  {
    id: 542,
    ac_name: "Kalimpong",
  },
  {
    id: 543,
    ac_name: "Darjeeling",
  },
  {
    id: 544,
    ac_name: "Uttar Dinajpur",
  },
  {
    id: 545,
    ac_name: "Dakshin Dinajpur",
  },
  {
    id: 546,
    ac_name: "Malda",
  },
  {
    id: 547,
    ac_name: "Murshidabad",
  },
  {
    id: 548,
    ac_name: "Nadia",
  },
  {
    id: 549,
    ac_name: "N-24 Parganas",
  },
  {
    id: 550,
    ac_name: "South 24 Pargana",
  },
  {
    id: 551,
    ac_name: "Kolkata",
  },
  {
    id: 552,
    ac_name: "Howrah",
  },
  {
    id: 553,
    ac_name: "Hooghly",
  },
  {
    id: 554,
    ac_name: "Purba Medinipur",
  },
  {
    id: 555,
    ac_name: "Paschim Medinipur",
  },
  {
    id: 556,
    ac_name: "Jhargram",
  },
  {
    id: 557,
    ac_name: "Purulia",
  },
  {
    id: 558,
    ac_name: "Bankura",
  },
  {
    id: 559,
    ac_name: "Purba Bardhaman",
  },
  {
    id: 560,
    ac_name: "Paschim Bardhaman",
  },
  {
    id: 561,
    ac_name: "Birbhum",
  },
  {
    id: 562,
    ac_name: "West",
  },
  {
    id: 563,
    ac_name: "Brij",
  },
  {
    id: 564,
    ac_name: "Kanpur Bundelkhand",
  },
  {
    id: 565,
    ac_name: "Awadh",
  },
  {
    id: 566,
    ac_name: "Kashi",
  },
  {
    id: 567,
    ac_name: "Gorakhpur",
  },
  {
    id: 568,
    ac_name: "Paschim Champaran",
  },
  {
    id: 569,
    ac_name: "Purvi Champaran",
  },
  {
    id: 570,
    ac_name: "Sheohar",
  },
  {
    id: 571,
    ac_name: "Sitamarhi",
  },
  {
    id: 572,
    ac_name: "Madhubani",
  },
  {
    id: 573,
    ac_name: "Supaul",
  },
  {
    id: 574,
    ac_name: "Araria",
  },
  {
    id: 575,
    ac_name: "Kishanganj",
  },
  {
    id: 576,
    ac_name: "Purnia",
  },
  {
    id: 577,
    ac_name: "Katihar",
  },
  {
    id: 578,
    ac_name: "Madhepura",
  },
  {
    id: 579,
    ac_name: "Saharsa",
  },
  {
    id: 580,
    ac_name: "Darbhanga",
  },
  {
    id: 581,
    ac_name: "Muzaffarpur",
  },
  {
    id: 582,
    ac_name: "Gopalganj",
  },
  {
    id: 583,
    ac_name: "Siwan",
  },
  {
    id: 584,
    ac_name: "Saran",
  },
  {
    id: 585,
    ac_name: "Vaishali",
  },
  {
    id: 586,
    ac_name: "Samastipur",
  },
  {
    id: 587,
    ac_name: "Begusarai",
  },
  {
    id: 588,
    ac_name: "Khagaria",
  },
  {
    id: 589,
    ac_name: "Bhagalpur",
  },
  {
    id: 590,
    ac_name: "Banka",
  },
  {
    id: 591,
    ac_name: "Munger",
  },
  {
    id: 592,
    ac_name: "Lakhisarai",
  },
  {
    id: 593,
    ac_name: "Sheikhpura",
  },
  {
    id: 594,
    ac_name: "Nalanda",
  },
  {
    id: 595,
    ac_name: "Patna",
  },
  {
    id: 596,
    ac_name: "Bhojpur",
  },
  {
    id: 597,
    ac_name: "Buxar",
  },
  {
    id: 598,
    ac_name: "Kaimur",
  },
  {
    id: 599,
    ac_name: "Rohtas",
  },
  {
    id: 600,
    ac_name: "Arwal",
  },
  {
    id: 601,
    ac_name: "Jehanbad",
  },
  {
    id: 602,
    ac_name: "Aurangabad",
  },
  {
    id: 603,
    ac_name: "Gaya",
  },
  {
    id: 604,
    ac_name: "Nawada",
  },
  {
    id: 605,
    ac_name: "Jamui",
  },
  {
    id: 606,
    ac_name: "Sahibganj",
  },
  {
    id: 607,
    ac_name: "Pakur",
  },
  {
    id: 608,
    ac_name: "Dumka",
  },
  {
    id: 609,
    ac_name: "Jamtara",
  },
  {
    id: 610,
    ac_name: "Deoghar",
  },
  {
    id: 611,
    ac_name: "Godda",
  },
  {
    id: 612,
    ac_name: "Koderma",
  },
  {
    id: 613,
    ac_name: "Hazaribagh",
  },
  {
    id: 614,
    ac_name: "Ramgarh",
  },
  {
    id: 615,
    ac_name: "Chatra",
  },
  {
    id: 616,
    ac_name: "Giridih",
  },
  {
    id: 617,
    ac_name: "Bokaro",
  },
  {
    id: 618,
    ac_name: "Dhanbad",
  },
  {
    id: 619,
    ac_name: "Purbi Singhbhum",
  },
  {
    id: 620,
    ac_name: "Sarikela-Kharswana",
  },
  {
    id: 621,
    ac_name: "Pashchimi Singhbhum",
  },
  {
    id: 622,
    ac_name: "Ranchi",
  },
  {
    id: 623,
    ac_name: "Khunti",
  },
  {
    id: 624,
    ac_name: "Gumla",
  },
  {
    id: 625,
    ac_name: "Simdega",
  },
  {
    id: 626,
    ac_name: "Lohardaga",
  },
  {
    id: 627,
    ac_name: "Latehar",
  },
  {
    id: 628,
    ac_name: "Palamu",
  },
  {
    id: 629,
    ac_name: "Garhwa",
  },
  {
    id: 630,
    ac_name: "Panchkula",
  },
  {
    id: 631,
    ac_name: "Ambala",
  },
  {
    id: 632,
    ac_name: "Yamunanagar",
  },
  {
    id: 633,
    ac_name: "Kurukshetra",
  },
  {
    id: 634,
    ac_name: "Kaithal",
  },
  {
    id: 635,
    ac_name: "Karnal",
  },
  {
    id: 636,
    ac_name: "Panipat",
  },
  {
    id: 637,
    ac_name: "Sonipat",
  },
  {
    id: 638,
    ac_name: "Jind",
  },
  {
    id: 639,
    ac_name: "Fatehabad",
  },
  {
    id: 640,
    ac_name: "Sirsa",
  },
  {
    id: 641,
    ac_name: "Hisar",
  },
  {
    id: 642,
    ac_name: "Bhiwani",
  },
  {
    id: 643,
    ac_name: "Charkhi Dadri",
  },
  {
    id: 644,
    ac_name: "Rohtak",
  },
  {
    id: 645,
    ac_name: "Jhajjar",
  },
  {
    id: 646,
    ac_name: "Mahendragarh",
  },
  {
    id: 647,
    ac_name: "Rewari",
  },
  {
    id: 648,
    ac_name: "Gurgaon",
  },
  {
    id: 649,
    ac_name: "Mewat",
  },
  {
    id: 650,
    ac_name: "Palwal",
  },
  {
    id: 651,
    ac_name: "Faridabad",
  },
  {
    id: 652,
    ac_name: "Pathankot",
  },
  {
    id: 653,
    ac_name: "Gurdaspur",
  },
  {
    id: 654,
    ac_name: "Amristar",
  },
  {
    id: 655,
    ac_name: "Tarn Taran",
  },
  {
    id: 656,
    ac_name: "Kapurthala",
  },
  {
    id: 657,
    ac_name: "Jalandhar",
  },
  {
    id: 658,
    ac_name: "Hoshiarpur",
  },
  {
    id: 659,
    ac_name: "SBS Nagar",
  },
  {
    id: 660,
    ac_name: "Rupnagar",
  },
  {
    id: 661,
    ac_name: "Mohali",
  },
  {
    id: 662,
    ac_name: "Fatehgarh Sahib",
  },
  {
    id: 663,
    ac_name: "Ludhiana",
  },
  {
    id: 664,
    ac_name: "Moga",
  },
  {
    id: 665,
    ac_name: "Firozpur",
  },
  {
    id: 666,
    ac_name: "Fazilka",
  },
  {
    id: 667,
    ac_name: "Sri Muktsar Sahib",
  },
  {
    id: 668,
    ac_name: "Faridkot",
  },
  {
    id: 669,
    ac_name: "Bathinda",
  },
  {
    id: 670,
    ac_name: "Mansa",
  },
  {
    id: 671,
    ac_name: "Sangrur",
  },
  {
    id: 672,
    ac_name: "Barnala",
  },
  {
    id: 673,
    ac_name: "Malerkotla",
  },
  {
    id: 674,
    ac_name: "Patiala",
  },
  {
    id: 675,
    ac_name: "Kupwara",
  },
  {
    id: 676,
    ac_name: "Baramulla",
  },
  {
    id: 677,
    ac_name: "Bandipora",
  },
  {
    id: 678,
    ac_name: "Ganderbal",
  },
  {
    id: 679,
    ac_name: "Srinagar",
  },
  {
    id: 680,
    ac_name: "Budgam",
  },
  {
    id: 681,
    ac_name: "Pulwama",
  },
  {
    id: 682,
    ac_name: "Shopian",
  },
  {
    id: 683,
    ac_name: "Kulgam",
  },
  {
    id: 684,
    ac_name: "Anantnag",
  },
  {
    id: 685,
    ac_name: "Kishtawar",
  },
  {
    id: 686,
    ac_name: "Doda",
  },
  {
    id: 687,
    ac_name: "Ramban",
  },
  {
    id: 688,
    ac_name: "Reasi",
  },
  {
    id: 689,
    ac_name: "Udhampur",
  },
  {
    id: 690,
    ac_name: "Kathua",
  },
  {
    id: 691,
    ac_name: "Samba",
  },
  {
    id: 692,
    ac_name: "Jammu",
  },
  {
    id: 693,
    ac_name: "Rajouri",
  },
  {
    id: 694,
    ac_name: "Poonch",
  },
  {
    id: 695,
    ac_name: "Saharanpur",
  },
  {
    id: 696,
    ac_name: "Shamli",
  },
  {
    id: 697,
    ac_name: "Muzaffarnagar",
  },
  {
    id: 698,
    ac_name: "Bijnor",
  },
  {
    id: 699,
    ac_name: "Moradabad",
  },
  {
    id: 700,
    ac_name: "Sambhal",
  },
  {
    id: 701,
    ac_name: "Rampur",
  },
  {
    id: 702,
    ac_name: "Amroha",
  },
  {
    id: 703,
    ac_name: "Meerut",
  },
  {
    id: 704,
    ac_name: "Baghpat",
  },
  {
    id: 705,
    ac_name: "Ghaziabad",
  },
  {
    id: 706,
    ac_name: "Hapur",
  },
  {
    id: 707,
    ac_name: "Gautam Buddha Nagar",
  },
  {
    id: 708,
    ac_name: "Bulandshahar",
  },
  {
    id: 709,
    ac_name: "Aligarh",
  },
  {
    id: 710,
    ac_name: "Hathras",
  },
  {
    id: 711,
    ac_name: "Mathura",
  },
  {
    id: 712,
    ac_name: "Agra",
  },
  {
    id: 713,
    ac_name: "Firozabad",
  },
  {
    id: 714,
    ac_name: "Kasganj",
  },
  {
    id: 715,
    ac_name: "Etah",
  },
  {
    id: 716,
    ac_name: "Maharajganj",
  },
  {
    id: 717,
    ac_name: "Gorakhpur",
  },
  {
    id: 718,
    ac_name: "Kushinagar",
  },
  {
    id: 719,
    ac_name: "Deoria",
  },
  {
    id: 720,
    ac_name: "Azamgarh",
  },
  {
    id: 721,
    ac_name: "Mau",
  },
  {
    id: 722,
    ac_name: "Ballia",
  },
  {
    id: 723,
    ac_name: "Jaunpur",
  },
  {
    id: 724,
    ac_name: "Ghazipur",
  },
  {
    id: 725,
    ac_name: "Chandauli",
  },
  {
    id: 726,
    ac_name: "Varanasi",
  },
  {
    id: 727,
    ac_name: "Bhadohi",
  },
  {
    id: 728,
    ac_name: "Mirzapur",
  },
  {
    id: 729,
    ac_name: "Sonbhadra",
  },
  {
    id: 730,
    ac_name: "Mainpuri",
  },
  {
    id: 731,
    ac_name: "Budaun",
  },
  {
    id: 732,
    ac_name: "Bareilly",
  },
  {
    id: 733,
    ac_name: "Pilibhit",
  },
  {
    id: 734,
    ac_name: "Shahjahanpur",
  },
  {
    id: 735,
    ac_name: "Lakhimpur Kheri",
  },
  {
    id: 736,
    ac_name: "Sitapur",
  },
  {
    id: 737,
    ac_name: "Hardoi",
  },
  {
    id: 738,
    ac_name: "Unnao",
  },
  {
    id: 739,
    ac_name: "Lucknow",
  },
  {
    id: 740,
    ac_name: "Raebareli",
  },
  {
    id: 741,
    ac_name: "Amethi",
  },
  {
    id: 742,
    ac_name: "Sultanpur",
  },
  {
    id: 743,
    ac_name: "Farrukhabad",
  },
  {
    id: 744,
    ac_name: "Kannauj",
  },
  {
    id: 745,
    ac_name: "Etawah",
  },
  {
    id: 746,
    ac_name: "Auraiya",
  },
  {
    id: 747,
    ac_name: "Kanpur Dehat",
  },
  {
    id: 748,
    ac_name: "Kanpur Nagar",
  },
  {
    id: 749,
    ac_name: "Jalaun",
  },
  {
    id: 750,
    ac_name: "Jhansi",
  },
  {
    id: 751,
    ac_name: "Lalitpur",
  },
  {
    id: 752,
    ac_name: "Hamirpur",
  },
  {
    id: 753,
    ac_name: "Mahoba",
  },
  {
    id: 754,
    ac_name: "Banda",
  },
  {
    id: 755,
    ac_name: "Chitrakoot",
  },
  {
    id: 756,
    ac_name: "Fatehpur",
  },
  {
    id: 757,
    ac_name: "Pratapgarh",
  },
  {
    id: 758,
    ac_name: "Kaushambi",
  },
  {
    id: 759,
    ac_name: "Prayagraj",
  },
  {
    id: 760,
    ac_name: "Barabanki",
  },
  {
    id: 761,
    ac_name: "Ayodhya",
  },
  {
    id: 762,
    ac_name: "Ambedkar Nagar",
  },
  {
    id: 763,
    ac_name: "Bahraich",
  },
  {
    id: 764,
    ac_name: "Shravasti",
  },
  {
    id: 765,
    ac_name: "Balrampur",
  },
  {
    id: 766,
    ac_name: "Gonda",
  },
  {
    id: 767,
    ac_name: "Siddharthnagar",
  },
  {
    id: 768,
    ac_name: "Basti",
  },
  {
    id: 769,
    ac_name: "Sant Kabir Nagar",
  },
];
export async function GET(request: NextRequest) {
  console.log("GET /api/v1/get_states");
  try {
    return NextResponse.json({ status: 200, data: data });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong on the server",
      error,
    });
  }
}
