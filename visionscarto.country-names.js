// convert to ISO_3166-1_alpha 3
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
// [SEE ALSO](https://github.com/vincentarelbundock/countrycode)
(function () {
  const visionscarto = {};
  visionscarto.init_country_names = function() {
    var a =
      "{" +
      ' "Afghanistan":"AFG";' +
      ' "Angola":"AGO";' +
      ' "Albania":"ALB";' +
      ' "Andorra":"AND";' +
      ' "UAE":"ARE";' +
      ' "United Arab Emirates":"ARE";' +
      ' "Argentina":"ARG";' +
      ' "Armenia":"ARM";' +
      ' "/Fr.*AntarcticLands/":"ATF";' +
      ' "Antigua and Barbuda":"ATG";' +
      ' "Australia":"AUS";' +
      ' "Austria":"AUT";' +
      ' "Azerbaijan":"AZE";' +
      ' "Burundi":"BDI";' +
      ' "Belgium":"BEL";' +
      ' "Benin":"BEN";' +
      ' "/Burkina/":"BFA";' +
      ' "Bangladesh":"BGD";' +
      ' "Bulgaria":"BGR";' +
      ' "Bahrain":"BHR";' +
      ' "Bahamas":"BHS";' +
      ' "The Bahamas":"BHS";' +
      ' "/Bosnia/":"BIH";' +
      ' "/Herzegovin/":"BIH";' +
      ' "Belarus":"BLR";' +
      ' "Belize":"BLZ";' +
      ' "Bermuda":"BMU";' +
      ' "/Bolivia/":"BOL";' +
      ' "Brazil":"BRA";' +
      ' "Brasil":"BRA";' +
      ' "Brunei":"BRN";' +
      ' "Brunei Darussalam":"BRN";' +
      ' "Bhutan":"BTN";' +
      ' "Botswana":"BWA";' +
      ' "Central African Rep.":"CAF";' +
      ' "Central African Republic":"CAF";' +
      ' "Canada":"CAN";' +
      ' "Switzerland":"CHE";' +
      ' "Chile":"CHL";' +
      ' "/^China/":"CHN";' +
      ' "/Macao/":"MAC";' + // Macao écrase la Chine car il existe "China, Macao"
      ' "/Taiwan/":"TWN";' +
      ' "/Taïwan/":"TWN";' +
      ' "/HongKong/":"HKG";' +
      ' "Côte d\'Ivoire":"CIV";' +
      ' "Côte d’Ivoire":"CIV";' +
      ' "Cte d\'Ivoire":"CIV";' +
      ' "Cote d Ivoire":"CIV";' +
      ' "Ivory Coast":"CIV";' +
      ' "Cameroon":"CMR";' +
      ' "Dem. Rep. of the Congo":"COD";' +
      ' "Congo, Dem Rep":"COD";' +
      ' "Congo (Dem. Rep.)":"COD";' +
      ' "Democratic Republic of the Congo":"COD";' +
      ' "DR Congo":"COD";' +
      ' "DRC":"COD";' +
      ' "RDC":"COD";' +
      ' "/Kinshasa/":"COD";' +
      ' "Dem. Rep. Congo":"COD";' +
      ' "Rép. Dém. Congo":"COD";' +
      ' "Congo (Rep.)":"COG";' +
      ' "Republic of the Congo":"COG";' +
      ' "Congo, Rep":"COG";' +
      ' "Congo":"COG";' +
      ' "/Brazza/":"COG";' +
      ' "Democratic Republic of the Congo":"COD";' +
      ' "Colombia":"COL";' +
      ' "Comoros":"COM";' +
      ' "Cabo Verde":"CPV";' +
      ' "Cape Verde":"CPV";' +
      ' "Costa Rica":"CRI";' +
      ' "Cuba":"CUB";' +
      ' "/^N.*Cyprus/":"CYN";' +
      ' "Cyprus":"CYP";' +
      ' "Czech Republic":"CZE";' +
      ' "Czech Rep.":"CZE";' +
      ' "Barbados":"DBS";' +
      ' "/Germany/":"DEU";' +
      ' "Djibouti":"DJI";' +
      ' "Dominica":"DMA";' +
      ' "Denmark":"DNK";' +
      ' "Dominican Rep.":"DOM";' +
      ' "Dominican Republic":"DOM";' +
      ' "Algeria":"DZA";' +
      ' "Ecuador":"ECU";' +
      ' "Egypt":"EGY";' +
      ' "Egypt, Arab Rep.":"EGY";' +
      ' "Eritrea":"ERI";' +
      ' "/W.*Sahara/":"ESH";' +
      ' "Spain":"ESP";' +
      ' "Estonia":"EST";' +
      ' "Ethiopia":"ETH";' +
      ' "Finland":"FIN";' +
      ' "Fiji":"FJI";' +
      ' "/Falkland/":"FLK";' +
      ' "France":"FRA";' +
      ' "Micronesia":"FSM";' +
      ' "Gabon":"GAB";' +
      ' "United Kingdom":"GBR";' +
      ' "UK":"GBR";' +
      ' "Georgia":"GEO";' +
      ' "Ghana":"GHA";' +
      ' "Guinea":"GIN";' +
      ' "Gambia":"GMB";' +
      ' "Guinea Bissau":"GNB";' +
      ' "Guinea-Bissau":"GNB";' +
      ' "/Eq.*Guinea/":"GNQ";' +
      ' "Greece":"GRC";' +
      ' "Grenada":"GRD";' +
      ' "Greenland":"GRL";' +
      ' "Guatemala":"GTM";' +
      ' "French Guiana":"GUF";' +
      ' "Guyana":"GUY";' +
      ' "Honduras":"HND";' +
      ' "Croatia":"HRV";' +
      ' "Haiti":"HTI";' +
      ' "Hungary":"HUN";' +
      ' "Indonesia":"IDN";' +
      ' "India":"IND";' +
      ' "Ireland":"IRL";' +
      ' "/^Iran/":"IRN";"Iraq":"IRQ";' +
      ' "Iceland":"ISL";' +
      ' "Israel":"ISR";' +
      ' "Italy":"ITA";' +
      ' "Jamaica":"JAM";' +
      ' "Jordan":"JOR";' +
      ' "/Jap[oa]n/":"JPN";' +
      ' "Kazakhstan":"KAZ";' +
      ' "Kenya":"KEN";' +
      ' "Kyrgyzstan":"KGZ";' +
      ' "Cambodia":"KHM";' +
      ' "Kiribati":"KIR";' +
      ' "/KittsandNevis/":"KNA";' +
      ' "Korea (Rep.)":"KOR";' +
      ' "Korea, Rep.":"KOR";' +
      ' "Korea, Republic of":"KOR";' +
      ' "Republic of Korea":"KOR";' +
      ' "South Korea":"KOR";' +
      ' "Korea":"KOR";' +
      ' "Kosovo":"KOS";' +
      ' "Kuwait":"KWT";' +
      ' "/LaoPeople/":"LAO";' +
      ' "Lao P.D.R.":"LAO";' +
      ' "Laos":"LAO";' +
      ' "Lebanon":"LBN";' +
      ' "Liberia":"LBR";' +
      ' "Libya":"LBY";' +
      ' "/S.*Luci[ea]/":"LCA";' +
      ' "Liechtenstein":"LIE";' +
      ' "Sri Lanka":"LKA";' +
      ' "Lesotho":"LSO";' +
      ' "Lithuania":"LTU";' +
      ' "Lituania":"LTU";' +
      ' "Luxembourg":"LUX";' +
      ' "Latvia":"LVA";' +
      ' "Morocco":"MAR";' +
      ' "Monaco":"MCO";' +
      ' "/Moldova/":"MDA";' +
      ' "Madagascar":"MDG";' +
      ' "Maldives":"MDV";' +
      ' "/M.xico/":"MEX";' +
      ' "Marshall Islands":"MHL";' +
      ' "FYROM":"MKD";' +
      ' "/Macedonia/":"MKD";' +
      ' "Mali":"MLI";' +
      ' "Malta":"MLT";' +
      ' "Myanmar":"MMR";' +
      ' "Montenegro":"MNE";' +
      ' "Mongolia":"MNG";' +
      ' "Mozambique":"MOZ";' +
      ' "Mauritania":"MRT";' +
      ' "Mauritius":"MUS";' +
      ' "Malawi":"MWI";' +
      ' "Malaysia":"MYS";' +
      ' "Namibia":"NAM";' +
      ' "New Caledonia":"NCL";' +
      ' "Niger":"NER";' +
      ' "Nigeria":"NGA";' +
      ' "Nicaragua":"NIC";' +
      ' "Netherlands":"NLD";' +
      ' "Norway":"NOR";' +
      ' "Nepal":"NPL";' +
      ' "Nauru":"NRU";' +
      ' "New Zealand":"NZL";' +
      ' "Oman":"OMN";' +
      ' "Pakistan":"PAK";' +
      ' "Panama":"PAN";' +
      ' "Peru":"PER";' +
      ' "Philippines":"PHL";' +
      ' "Papua New Guinea":"PNG";' +
      ' "Poland":"POL";' +
      ' "Puerto Rico":"PRI";' +
      ' "North Korea":"PRK";' +
      ' "Dem. Rep. Korea":"PRK";' +
      ' "/^Korea.*People/":"PRK";' +
      ' "/People.*Korea/":"PRK";' +
      '  "Portugal":"PRT";' +
      ' "Paraguay":"PRY";' +
      ' "/Palestin.*/":"PSE";' +
      ' "Qatar":"QAT";' +
      ' "Romania":"ROU";' +
      ' "Russia":"RUS";' +
      ' "Russian Federation":"RUS";' +
      ' "Rwanda":"RWA";' +
      ' "Saudi Arabia":"SAU";' +
      ' "Sudan":"SDN";' +
      ' "South Sudan":"SSD";' +
      ' "S Sudan":"SSD";' +
      ' "Senegal":"SEN";' +
      ' "Singapore":"SGP";' +
      ' "/S[ao]lomonI/":"SLB";' +
      ' "Sierra Leone":"SLE";' +
      ' "El Salvador":"SLV";' +
      ' "San Marino":"SMR";' +
      ' "Somaliland":"SOL";' +
      ' "Somalia":"SOM";' +
      ' "Republic of Serbia":"SRB";' +
      ' "Serbia":"SRB";' +
      ' "/Tomé.*Principe/":"STP";' +
      ' "/Tome.*Principe/":"STP";' +
      ' "Suriname":"SUR";' +
      ' "/^Slovak/":"SVK";' +
      ' "Slovenia":"SVN";' +
      ' "Sweden":"SWE";' +
      ' "Swaziland":"SWZ";' +
      ' "Seychelles":"SYC";' +
      ' "/Syria/":"SYR";' +
      ' "Chad":"TCD";' +
      ' "Togo":"TGO";' +
      ' "Thailand":"THA";' +
      ' "Tajikistan":"TJK";' +
      ' "Turkmenistan":"TKM";' +
      ' "East Timor":"TLS";' +
      ' "Timor-Leste":"TLS";' +
      ' "Tonga":"TON";' +
      ' "Trinidad and Tobago":"TTO";' +
      ' "Tunisia":"TUN";' +
      ' "Turkey":"TUR";' +
      ' "Tuvalu":"TUV";' +
      ' "Tanzania":"TZA";' +
      ' "United Republic of Tanzania":"TZA";' +
      ' "Uganda":"UGA";' +
      ' "Ukraine":"UKR";' +
      ' "Uruguay":"URY";' +
      ' "United States":"USA";' +
      ' "United States of America":"USA";' +
      ' "Uzbekistan":"UZB";' +
      ' "St. Vin. and Gren.":"VCT";' +
      ' "St. Vincent":"VCT";' +
      ' "St. Vincent and the G.":"VCT";' +
      ' "/SaintVincentand/": "VCT";' +
      ' "/Venezuela/":"VEN";' +
      ' "Viet Nam":"VNM";' +
      ' "Vietnam":"VNM";' +
      ' "Vanuatu":"VUT";' +
      ' "Samoa":"WSM";' +
      ' "Yemen":"YEM";' +
      ' "South Africa":"ZAF";' +
      ' "Zambia":"ZMB";' +
      ' "Zimbabwe":"ZWE";' +
      ' "AD":"AND";' +
      ' "AE":"ARE";' +
      ' "AF":"AFG";' +
      ' "AG":"ATG";' +
      ' "AI":"AIA";' +
      ' "Anguilla":"AIA";' +
      ' "AL":"ALB";' +
      ' "AM":"ARM";' +
      ' "AN":"CUW";' +
      ' "Curaçao":"CUW";' +
      ' "AO":"AGO";' +
      ' "AR":"ARG";' +
      ' "AS":"WSM";' +
      ' "AT":"AUT";' +
      ' "AU":"AUS";' +
      ' "AW":"ABW";' +
      ' "Aruba":"ABW";' +
      ' "AZ":"AZE";' +
      ' "BA":"BIH";' +
      ' "BB":"DBS";' +
      ' "BD":"BGD";' +
      ' "BE":"BEL";' +
      ' "BF":"BFA";' +
      ' "BG":"BGR";' +
      ' "BH":"BHR";' +
      ' "BI":"BDI";' +
      ' "BJ":"BEN";' +
      ' "BM":"BMU";' +
      ' "BN":"BRN";' +
      ' "BO":"BOL";' +
      ' "BR":"BRA";' +
      ' "BS":"BHS";' +
      ' "BT":"BTN";' +
      ' "BW":"BWA";' +
      ' "BY":"BLR";' +
      ' "BZ":"BLZ";' +
      ' "CA":"CAN";' +
      ' "CD":"COD";' +
      ' "CF":"CAF";' +
      ' "CG":"COG";' +
      ' "CH":"CHE";' +
      ' "CI":"CIV";' +
      ' "CK":"COK";' +
      ' "Cook Islands":"COK";' +
      ' "CL":"CHL";' +
      ' "CM":"CMR";' +
      ' "CN":"CHN";' +
      ' "CO":"COL";' +
      ' "CR":"CRI";' +
      ' "CU":"CUB";' +
      ' "CV":"CPV";' +
      ' "CY":"CYP";' +
      ' "CZ":"CZE";' +
      ' "DE":"DEU";' +
      ' "DJ":"DJI";' +
      ' "DK":"DNK";' +
      ' "DM":"DMA";' +
      ' "DO":"DOM";' +
      ' "DZ":"DZA";' +
      ' "EC":"ECU";' +
      ' "EE":"EST";' +
      ' "EG":"EGY";' +
      ' "ER":"ERI";' +
      ' "ES":"ESP";' +
      ' "ET":"ETH";' +
      ' "FI":"FIN";' +
      ' "FJ":"FJI";' +
      ' "FM":"FSM";' +
      ' "FR":"FRA";' +
      ' "GA":"GAB";' +
      ' "GB":"GBR";' +
      ' "GD":"GRD";' +
      ' "GE":"GEO";' +
      ' "GF":"GUF";' +
      ' "GH":"GHA";' +
      ' "GI":"GIB";' +
      ' "Gibraltar":"GIB";' +
      ' "GM":"GMB";' +
      ' "GN":"GIN";' +
      ' "GP":"GLP";' +
      ' "GQ":"GNQ";' +
      ' "GR":"GRC";' +
      ' "GT":"GTM";' +
      ' "GU":"GUM";' +
      ' "Guam":"GUM";' +
      ' "GW":"GNB";' +
      ' "GY":"GUY";' +
      ' "HK":"HKG";' +
      ' "HN":"HND";' +
      ' "HR":"HRV";' +
      ' "HT":"HTI";' +
      ' "HU":"HUN";' +
      ' "ID":"IDN";' +
      ' "IE":"IRL";' +
      ' "IL":"ISR";' +
      ' "IN":"IND";' +
      ' "IQ":"IRQ";' +
      ' "IR":"IRN";' +
      ' "IS":"ISL";' +
      ' "IT":"ITA";' +
      ' "JM":"JAM";' +
      ' "JO":"JOR";' +
      ' "JP":"JPN";' +
      ' "KE":"KEN";' +
      ' "KG":"KGZ";' +
      ' "KH":"KHM";' +
      ' "KI":"KIR";' +
      ' "KM":"COM";' +
      ' "KN":"KNA";' +
      ' "KP":"PRK";' +
      ' "KR":"KOR";' +
      ' "KW":"KWT";' +
      ' "KY":"CYM";' +
      ' "Cayman Islands":"CYM";' +
      ' "KZ":"KAZ";' +
      ' "LA":"LAO";' +
      ' "LB":"LBN";' +
      ' "LC":"LCA";' +
      ' "LI":"LIE";' +
      ' "LK":"LKA";' +
      ' "LR":"LBR";' +
      ' "LS":"LSO";' +
      ' "LT":"LTU";' +
      ' "LU":"LUX";' +
      ' "LV":"LVA";' +
      ' "LY":"LBY";' +
      ' "MA":"MAR";' +
      ' "MC":"MCO";' +
      ' "MD":"MDA";' +
      ' "ME":"MNE";' +
      ' "MG":"MDG";' +
      ' "MH":"MHL";' +
      ' "MK":"MKD";' +
      ' "ML":"MLI";' +
      ' "MM":"MMR";' +
      ' "MN":"MNG";' +
      ' "MO":"MAC";' +
      ' "Macau":"MAC";' +
      ' "MP":"MNP";' +
      ' "Northern Mariana Islands":"MNP";' +
      ' "MR":"MRT";' +
      ' "MS":"MSR";' +
      ' "Montserrat":"MSR";' +
      ' "MT":"MLT";' +
      ' "MU":"MUS";' +
      ' "MV":"MDV";' +
      ' "MW":"MWI";' +
      ' "MX":"MEX";' +
      ' "MY":"MYS";' +
      ' "MZ":"MOZ";' +
      ' "NA":"NAM";' +
      ' "NC":"NCL";' +
      ' "NE":"NER";' +
      ' "NF":"NFK";' +
      ' "Norfolk Island":"NFK";' +
      ' "NG":"NGA";' +
      ' "NI":"NIC";' +
      ' "NL":"NLD";' +
      ' "NO":"NOR";' +
      ' "NP":"NPL";' +
      ' "NR":"NRU";' +
      ' "NU":"NIU";' +
      ' "Niue":"NIU";' +
      ' "NZ":"NZL";' +
      ' "OM":"OMN";' +
      ' "PA":"PAN";' +
      ' "PE":"PER";' +
      ' "PF":"PYF";' +
      ' "/Fr.*Polynesia/":"PYF";' +
      ' "PG":"PNG";' +
      ' "PH":"PHL";' +
      ' "PK":"PAK";' +
      ' "PL":"POL";' +
      ' "PR":"PRI";' +
      ' "PS":"PSE";' +
      ' "PT":"PRT";' +
      ' "PW":"PLW";' +
      ' "Palau":"PLW";' +
      ' "PY":"PRY";' +
      ' "QA":"QAT";' +
      ' "RE":"REU";' +
      ' "Reunion":"REU";' +
      ' "RK":"KOS";' +
      ' "RO":"ROU";' +
      ' "RS":"SRB";' +
      ' "RU":"RUS";' +
      ' "RW":"RWA";' +
      ' "SA":"SAU";' +
      ' "SB":"SLB";' +
      ' "SC":"SYC";' +
      ' "SD":"SDN";' +
      ' "SE":"SWE";' +
      ' "SG":"SGP";' +
      ' "SI":"SVN";' +
      ' "SK":"SVK";' +
      ' "SL":"SLE";' +
      ' "SM":"SMR";' +
      ' "SN":"SEN";' +
      ' "SO":"SOM";' +
      ' "SR":"SUR";' +
      ' "SS":"SSD";' +
      ' "ST":"STP";' +
      ' "SV":"SLV";' +
      ' "SY":"SYR";' +
      ' "SZ":"SWZ";' +
      ' "TC":"TCA";' +
      ' "Turks and Caicos Islands":"TCA";' +
      ' "Turks and Caicos Is.":"TCA";' +
      ' "TD":"TCD";' +
      ' "TG":"TGO";' +
      ' "TH":"THA";' +
      ' "TJ":"TJK";' +
      ' "TL":"TLS";' +
      ' "TM":"TKM";' +
      ' "TN":"TUN";' +
      ' "TO":"TON";' +
      ' "TR":"TUR";' +
      ' "TT":"TTO";' +
      ' "TV":"TUV";' +
      ' "TW":"TWN";' +
      ' "TZ":"TZA";' +
      ' "UA":"UKR";' +
      ' "UG":"UGA";' +
      ' "US":"USA";' +
      ' "UY":"URY";' +
      ' "UZ":"UZB";' +
      ' "VA":"VAT";' +
      ' "Vatican City":"VAT";' +
      ' "Holy See (Vatican City State)":"VAT";' +
      ' "VC":"VCT";' +
      ' "VE":"VEN";' +
      ' "VG":"VGB";' +
      ' "British Virgin Islands":"VGB";' +
      ' "Virgin Islands, British":"VGB";' +
      ' "VI":"VIR";' +
      ' "/USVirginIs/":"VIR";' +
      ' "United States Virgin Islands":"VIR";' +
      ' "Virgin Islands, U.S.":"VIR";' +
      ' "VN":"VNM";' +
      ' "VU":"VUT";' +
      ' "WF":"WLF";' +
      ' "Wallis-et-Futuna":"WLF";' +
      ' "WS":"WSM";' +
      ' "YE":"YEM";' +
      ' "YT":"MYT";' +
      ' "ZA":"ZAF";' +
      ' "ZM":"ZMB";' +
      ' "ZW":"ZWE";' +
      ' "AQ":"ATA";' +
      ' "AX":"ALA";' +
      ' "BL":"BLM";' +
      ' "BQ":"BES";' +
      ' "CX":"CXR";' +
      ' "CC":"CCK";' +
      ' "CW":"CUW";' +
      ' "FK":"FLK";' +
      ' "FO":"FRO";' +
      ' "GS":"SGS";' +
      ' "GL":"GRL";' +
      ' "GG":"GGY";' +
      ' "IM":"IMN";' +
      ' "JE":"JEY";' +
      ' "MQ":"MTQ";' +
      ' "PN":"PCN";' +
      ' "EH":"ESH";' +
      ' "MF":"MAF";' +
      ' "PM":"SPM";' +
      ' "SH":"SHN";' +
      ' "SJ":"SJM";' +
      ' "TF":"ATF";' +
      ' "TK":"TKL";' +
      ' "/^Aland/":"ALA";' + // attention a ne pas taper New Ze*aland*
      ' "/Fae?roe/":"FRO";' +
      ' "/Feroe/":"FRO";' +
      ' "/Jersey/":"JEY";' +
      ' "/Guerne?sey/":"GGY";' +
      ' "Netherlands Antilles":"ANT";' +
      ' "Antilles néerlandaises":"ANT";' +
      ' "/BritishVirginIs/":"VGB";' +
      ' "/Cayman/":"CYM";' +
      ' "/Antigua/":"ATG";' +
      ' "/MarshallIs/":"MHL";' +
      ' "/CookIs":"COK";' +
      ' "/N(orth)?Mariana/":"MNP";' +
      ' "/SintMaarten/":"SXM";' +
      ' "/Saint-?Martin/":"SXM";' +
      ' "/St-?Martin/":"SXM";' +
      ' "Isle of Man":"IMN";' +
      ' "XK":"KOS";' +
      ' "China-hk":"HKG";' +
      ' "China-tw":"TWN";' +
      ' "Czech":"CZE";' +
      ' "Korea, South":"KOR";' +
      ' "the Netherlands":"NLD";' +
      ' "/UnitedKingdom/":"GBR";' +
      ' "USSR":"RUS";' +
      ' "Czechoslovakia":"CZE"}';
    a = a.toLowerCase().replace(/;/g, ",");
    visionscarto.country_names = JSON.parse(a);
    visionscarto.iso = {};
    visionscarto.country_regexp = {};

    visionscarto.french = {
      Chine: "China",
      "États-Unis": "United States",
      Russie: "Russia",
      "Royaume-Uni": "UK",
      Allemagne: "Germany",
      Andorre: "Andorra",
      Australie: "Australia",
      Autriche: "Austria",
      Belgique: "Belgium",
      Chypre: "Cyprus",
      Danemark: "Denmark",
      Espagne: "Spain",
      Estonie: "Estonia",
      Finlande: "Finland",
      Grèce: "Greece",
      Irlande: "Ireland",
      Islande: "Iceland",
      Israél: "Israel",
      Italie: "Italy",
      Japon: "Japan",
      Malte: "Malta",
      Norvège: "Norway",
      "Nouvelle-Zélande": "New Zealand",
      "Pays-Bas": "Netherlands",
      "Corée du Sud": "Korea",
      Corée: "Korea",
      "Saint-Marin": "San Marino",
      Slovénie: "Slovenia",
      Suède: "Sweden",
      Suisse: "Switzerland",
      "Arabie saoudite": "Saudi Arabia",
      Bruneï: "Brunei",
      "Émirats arabes unis": "United Arab Emirates",
      Koweït: "Kuwait",
      Singapour: "Singapore",
      "République tchèque": "Czech Republic",
      "République Tchèque": "Czech Republic",
      Slovaquie: "Slovakia",
      Barbade: "Barbados",
      Lettonie: "Latvia",
      "Trinité-et-Tobago": "Trinidad and Tobago",
      Chili: "Chile",
      Croatie: "Croatia",
      Hongrie: "Hungary",
      Libye: "Libya",
      Lituanie: "Lithuania",
      Pologne: "Poland",
      "Saint-Kitt-et-Niéves": "KNA",
      Argentine: "Argentina",
      Bulgarie: "Bulgaria",
      Roumanie: "Romania",
      Brésil: "Brazil",
      Turquie: "Turkey",
      "Afrique du Sud": "South Africa",
      "Afrique Sud": "South Africa",
      Albanie: "Albania",
      Algérie: "Algeria",
      Arménie: "Armenia",
      Azerbaïdjan: "Azerbaijan",
      Biélorussie: "Belarus",
      Bolivie: "Bolivia",
      "Bosnie-Herzégovine": "Bosnia and Herzegovina",
      "Cap Vert": "Cabo Verde",
      Cameroun: "Cameroon",
      Colombie: "Colombia",
      Dominique: "Dominica",
      Égypte: "Egypt",
      Egypte: "Egypt",
      Équateur: "Ecuador",
      Macédoine: "Macedonia",
      Fidji: "Fiji",
      Géorgie: "Georgia",
      Grenade: "Grenada",
      "Îles Marschall": "Marshall Is.",
      Inde: "India",
      Indonésie: "Indonesia",
      Irak: "Iraq",
      Jamaïque: "Jamaica",
      Jordanie: "Jordan",
      Kirghizistan: "Kyrgyzstan",
      Liban: "Lebanon",
      Malaisie: "Malaysia",
      Maroc: "Morocco",
      Maurice: "Mauritius",
      Mexique: "Mexico",
      Micronésie: "Micronesia",
      Mongolie: "Mongolia",
      Monténégro: "Montenegro",
      Namibie: "Namibia",
      Nigéria: "Nigeria",
      Ouzbékistan: "Uzbekistan",
      Palaos: "Palau",
      Papouasie: "Papua New Guinea",
      Pérou: "Peru",
      Philippine: "Philippines",
      Syrie: "Syria",
      Moldavie: "Moldova",
      "République Dominicaine": "Dominican Republic",
      "Corée du Nord": "North Korea",
      "Saint-Vincent-et-Grenadines": "Saint Vincent and the Grenadines",
      Serbie: "Serbia",
      Tadjikistan: "Tajikistan",
      Thaïlande: "Thailand",
      Tunisie: "Tunisia",
      Turkménistan: "Turkmenistan",
      Bénin: "Benin",
      Bhoutan: "Bhutan",
      Cambodge: "Cambodia",
      Comores: "Comoros",
      Érythrée: "Eritrea",
      Éthiopie: "Ethiopia",
      Ethiopie: "Ethiopia",
      Gambie: "Gambia",
      Guinée: "Guinea",
      "Guinée-Bissau": "Guinea-Bissau",
      "Guinée équatoriale": "Equatorial Guinea",
      Haïti: "Haiti",
      "Îles Salomon": "Salomon Is.",
      Libéria: "Liberia",
      Mauritanie: "Mauritania",
      Népal: "Nepal",
      Ouganda: "Uganda",
      "République centrafricaine": "Central African Republic",
      "République démocratique du Congo": "Democratic Republic of the Congo",
      Tanzanie: "Tanzania",
      Sénégal: "Senegal",
      Somalie: "Somalia",
      Soudan: "Sudan",
      "Soudan du Sud": "South Sudan",
      Tchad: "Chad",
      Yémen: "Yemen",
      Zambie: "Zambia"
    };

    for (let i in visionscarto.country_names) {
      if (i[0] === "/") {
        var j = i.replace(/\//g, "");
        visionscarto.country_regexp[j] = visionscarto.country_names[i];
      } else {
        var iso = visionscarto.country_names[i];
        visionscarto.iso[iso] = iso;
        visionscarto.country_names[i.replace(/[' ,.-]/g, "")] = iso;
      }
    }
  };
  visionscarto.country_name_to_iso3 = function(str) {
    if (typeof str !== "string") {
      console.log("not a string", str);
      return false;
    }
    if (!("country_names" in visionscarto)) {
      visionscarto.init_country_names();
    }
    str = str.replace(/ /g, " ").trim();
    var str2 = str.toLowerCase().replace(/["' ,.-]/g, "");
    var iso = false;
    if (str2 in visionscarto.iso) {
      iso = str2;
    } else if (str2 in visionscarto.country_names) {
      iso = visionscarto.country_names[str2];
    } else {
      for (var r in visionscarto.country_regexp) {
        if (new RegExp(r).exec(str2)) {
          iso = visionscarto.country_regexp[r];
        }
      }
    }
    if (iso) {
      return iso.toUpperCase();
    } else {
      if (str in visionscarto.french && str != visionscarto.french[str]) {
        return visionscarto.country_name_to_iso3(visionscarto.french[str]);
      }
      console.log("iso not found", str);
    }
  };

  return visionscarto;
})();
