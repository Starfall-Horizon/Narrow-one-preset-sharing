const itemIdMap = {
    "wizardHat": "00001",
    "desertMerchantAssistantBody": "00002",
    "pokeLightGodendag": "00003",
    "smallCrossbowIvyTip": "00004",
    "mediumBowChineseDragonSimpleHandle": "00005",
    "mediumBowChineseDragonSimpleTip": "00006",
    "largeBowIvyHandle": "00007",
    "largeBowGuardTip": "00008",
    "spikeFeatherArrow": "00009",
    "branchedTipArrow": "00010",
    "forkArrow": "00011",
    "flowerDressHat": "00012",
    "flowerWristGuard": "00013",
    "aztecExecutionerLegs": "00014",
    "aztecWarriorArms": "00015",
    "eyesRedAndBlind": "00016",
    "flowerDressBody": "00017",
    "settlersHat": "00018",
    "jesterBody": "00019",
    "jesterLegs": "00020",
    "jesterHat": "00021",
    "largeBowChineseDragonSimpleHandle": "00022",
    "largeBowAztecTip": "00023",
    "miscEyePatch": "00024",
    "baseSkinToneSkeleton": "00025",
    "saracenWarrior": "00026",
    "vikingArmor": "00027",
    "chainmailArmorHat": "00028",
    "chainmailArmorHands": "00029",
    "mediumBowDragonHandle": "00030",
    "strawHatWithMask": "00031",
    "strawHat": "00032",
    "basicArmorBody": "00033",
    "basicArmorLegs": "00034",
    "basicArmorFeet": "00035",
    "basicArmorArms": "00036",
    "samuraiArmorBody": "00037",
    "samuraiArmorHelmet": "00038",
    "samuraiArmorArms": "00039",
    "samuraiArmorLegs": "00040",
    "ninjaBody": "00041",
    "ninjaHoodSimple": "00042",
    "ninjaHoodDetailed": "00043",
    "plagueDoctorArms": "00044",
    "chainmailArmorLegs": "00045",
    "largeBowAztecHandle": "00046",
    "ninjaLeg": "00047",
    "smallCrossbowGoldenHandle": "00048",
    "smallBowChineseDragonHeadHandle": "00049",
    "largeBowGoldenHandle": "00050",
    "spartanArmorBody": "00051",
    "qingDynastyTrainingGearBody": "00052",
    "tangDynastyWarriorHat": "00053",
    "miscEyeliner": "00054",
    "miscEyeLashes": "00055",
    "miscDragonTattoo": "00056",
    "miscNinjaMask": "00057",
    "smallBowChineseDragonTip": "00058",
    "jesterFeet": "00059",
    "mediumBowTacticalHandle": "00060",
    "largeBowJesterHandle": "00061",
    "kingQuiver": "00062",
    "gladiatorArmorLegs": "00063",
    "greekWingedWarriorFeet": "00064",
    "repeatingCrossbowMetalHandle": "00065",
    "largeCrossbowJesterHandle": "00066",
    "repeatingCrossbowMetalTip": "00067",
    "largeBowGoldenTip": "00068",
    "bloodlustBarbarianGloves": "00069",
    "romanArmorSandles": "00070",
    "smallHatColored": "00071",
    "mediumBowMetalHandle": "00072",
    "bucketHelmet": "00073",
    "bluntLightFryingPan": "00074",
    "bladedHeavyShortSword": "00075",
    "bladedHeavyScythe": "00076",
    "bladedHeavyKatana": "00077",
    "chineseNewYearRabbitHat": "00078",
    "mediumBowGoldenHandle": "00079",
    "samuraiArmorQuiver": "00080",
    "chainmailArmorBody": "00081",
    "pokeHeavyPilum": "00082",
    "bladedLightRapier": "00083",
    "vikingArmorDetailedHelmet": "00084",
    "commonerColorfulPants": "00085",
    "mediumBowChineseDragonHeadHandle": "00086",
    "miscPaintRedHand": "00087",
    "miscPaintWar": "00088",
    "mediumBowAztecTip": "00089",
    "spartanArmorArms": "00090",
    "tangDynastyWarriorBody": "00091",
    "miscTribalTattoo": "00092",
    "bluntLightMorningStar": "00093",
    "bladedHeavyShovel": "00094",
    "miscPaintLine": "00095",
    "miscEyelinerHue": "00096",
    "mediumBowGreekHandle": "00097",
    "StPatricksDayHat": "00098",
    "mediumBowGoldenTip": "00099",
    "vikingArmorDetailedWrist": "00100",
    "headband": "00101",
    "easterRabbitHat": "00102",
    "pokeLightShortSpear": "00103",
    "bloodlustBarbarianHat": "00104",
    "pokeHeavyhalberd": "00105",
    "smallCrossbowChineseDragonHandle": "00106",
    "aztecWarriorLegs": "00107",
    "mediumBowGreekTip": "00108",
    "leafTipArrow": "00109",
    "smallHatBlack": "00110",
    "bladedHeavyPersianScimitar": "00111",
    "ottomanJanissaryQuiver": "00112",
    "vikingArrow": "00113",
    "bucketHat": "00114",
    "mediumBowChineseDragonTip": "00115",
    "flowerShirtBody": "00116",
    "repeatingCrossbowOttomanTip": "00117",
    "smallBowGreekHandle": "00118",
    "smallHat": "00119",
    "peasantManHatLong": "00120",
    "turban": "00121",
    "hood": "00122",
    "arabianKnightWrist": "00123",
    "miscPunchedEye": "00124",
    "mediumBowVikingTip": "00125",
    "mediumBowOttomanHandle": "00126",
    "topHat": "00127",
    "thinTipColoredArrow": "00128",
    "mediumBowMetalTip": "00129",
    "greekZeusHat": "00130",
    "gladiatorArmorBody": "00131",
    "basicArmorQuiver": "00132",
    "ottomanJanissaryBody": "00133",
    "kepreshHat": "00134",
    "eyesBlind": "00135",
    "jesterArms": "00136",
    "largeBowMetalHandle": "00137",
    "largeBowGreekTip": "00138",
    "largeCrossbowGreekTip": "00139",
    "moonShapedGoldTipArrow": "00140",
    "goldenArrow": "00141",
    "heavySharpPointArrow": "00142",
    "repeatingCrossbowGreekHandle": "00143",
    "repeatingCrossbowChineseDragonHeadTip": "00144",
    "monkArms": "00145",
    "largeBowGreekHandle": "00146",
    "aztecWarriorBody": "00147",
    "vTipSharpArrow": "00148",
    "aztecExecutionerHat": "00149",
    "aztecWarriorQuiver": "00150",
    "greekOwlWarriorLegs": "00151",
    "greekZeusFeet": "00152",
    "qingDynastyWarriorQuiver": "00153",
    "smallCrossbowGreekHandle": "00154",
    "greekZeusBody": "00155",
    "chineseNewYearTigerHat": "00156",
    "bladedHeavySingleHandedSword": "00157",
    "mediumBowOttomanTip": "00158",
    "mediumBowGuardTip": "00159",
    "medievalExecutioner": "00160",
    "fangTianArrow": "00161",
    "smallCrossbowChineseDragonSimpleTip": "00162",
    "smallCrossbowOttomanHandle": "00163",
    "christmasTreeHat": "00164",
    "cupidoValentinesday": "00165",
    "largeBowOttomanHandle": "00166",
    "chonmage": "00167",
    "bladedLightGuardKey": "00168",
    "miscEarRing": "00169",
    "miscNoseRing": "00170",
    "hanDynastyWarriorArms": "00171",
    "desertMerchantShoes": "00172",
    "ninjaHoodwithMask": "00173",
    "greekZeusLegs": "00174",
    "basicArmorHands": "00175",
    "strawHatBlack": "00176",
    "basicArmorHelmet": "00177",
    "stripedArmorQuiver": "00178",
    "commonerColorfulSleaves": "00179",
    "templarKnightLegs": "00180",
    "heavySideQuiver": "00181",
    "ancientEgyptArmorFeet": "00182",
    "romanArmorWristBrace": "00183",
    "hunterBoots": "00184",
    "hunterQuiver": "00185",
    "aztecWarriorFeet": "00186",
    "stripedArmorHands": "00187",
    "heavyArmorGloves": "00188",
    "bucketHelmetKnight": "00189",
    "bucketHelmetWings": "00190",
    "samuraiArmorHands": "00191",
    "heavyArmorUpperArms": "00192",
    "arabianKnightBoots": "00193",
    "templarKnightHelmet": "00194",
    "mediumBowArrowPointTip": "00195",
    "hanDynastyWarriorLegs": "00196",
    "smallCrossbowTigerHandle": "00197",
    "smallCrossbowArrowPointTip": "00198",
    "smallBowMetalHandle": "00199",
    "smallBowChineseDragonSimpleTip": "00200",
    "smallBowArrowPointTip": "00201",
    "kingBody": "00202",
    "largeBowVikingTip": "00203",
    "christmasSnowmanHat": "00204",
    "stripedArmorFeet": "00205",
    "kingBoots": "00206",
    "greekWingedWarriorBody": "00207",
    "greekOakWreathHoodedLight": "00208",
    "smallCrossbowGreekTip": "00209",
    "bluntHeavyMorningStar": "00210",
    "bladedHeavyFalchionSword": "00211",
    "pokeHeavyFangtianJi": "00212",
    "gladiatorArmorHelmet": "00213",
    "bluntLightSpoon": "00214",
    "bladedHeavyTwoHandedSword": "00215",
    "tangDynastyWarriorArms": "00216",
    "bladedHeavyBlackKatana": "00217",
    "moustachRolledWhite": "00218",
    "hunterWrist": "00219",
    "featheredHelmet": "00220",
    "commonerColorfulBody": "00221",
    "heavyArmorFeet": "00222",
    "heavyArmorBody": "00223",
    "heavyArmorLegs": "00224",
    "hunterBody": "00225",
    "plagueDoctorTopHat": "00226",
    "samuraiArmorFeet": "00227",
    "mediumBowVikingHandle": "00228",
    "bluntHeavyMaul": "00229",
    "bucketHelmetCrown": "00230",
    "greekOwlWarriorArms": "00231",
    "plagueDoctorBody": "00232",
    "greekOwlWarriorHands": "00233",
    "smallBowAztecHandle": "00234",
    "monkChain": "00235",
    "mediumBowEasterEggsHandle": "00236",
    "smallCrossbowTacticalTip": "00237",
    "smallCrossbowMetalTip": "00238",
    "stripedArmorHelmet": "00239",
    "xTipSharpArrow": "00240",
    "morningStarArrow": "00241",
    "largeCrossbowGreekHandle": "00242",
    "largeCrossbowChineseDragonTip": "00243",
    "aztecWarriorHat": "00244",
    "smallBowGreekTip": "00245",
    "ancientEgyptArmorDetailedBody": "00246",
    "greekZeusWristBand": "00247",
    "ninjaLowerArm": "00248",
    "largeBowChineseDragonTip": "00249",
    "mediumBowChineseDragonHandle": "00250",
    "arabianKnightBody": "00251",
    "smallCrossbowDragonHandle": "00252",
    "smallCrossbowTacticalHandle": "00253",
    "repeatingCrossbowGreekTip": "00254",
    "repeatingCrossbowChineseDragonTip": "00255",
    "vTipSharpColoredArrow": "00256",
    "smallBowVikingTip": "00257",
    "largeBowTacticalHandle": "00258",
    "largeBowTacticalTip": "00259",
    "smallBowMetalTip": "00260",
    "mediumBowTacticalTip": "00261",
    "ottomanLadleBearerBody": "00262",
    "repeatingCrossbowTacticalTip": "00263",
    "smallBowOttomanTip": "00264",
    "smallCrossbowOttomanTip": "00265",
    "largeCrossbowMetalTip": "00266",
    "repeatingCrossbowTigerHandle": "00267",
    "repeatingCrossbowDragonTip": "00268",
    "largeCrossbowDragonTip": "00269",
    "largeCrossbowMetalHandle": "00270",
    "smallBowJesterHandle": "00271",
    "largeCrossbowDragonHandle": "00272",
    "ottomanJanissaryPants": "00273",
    "qingDynastyTrainingGearArms": "00274",
    "largeCrossbowChineseDragonHeadTip": "00275",
    "ottomanLadleBearerFeet": "00276",
    "largeCrossbowChineseDragonHandle": "00277",
    "repeatingCrossbowVikingTip": "00278",
    "bluntLightMace": "00279",
    "largeCrossbowGoldenHandle": "00280",
    "largeCrossbowTacticalTip": "00281",
    "largeCrossbowTacticalHandle": "00282",
    "repeatingCrossbowGoldenHandle": "00283",
    "mediumBowAztecHandle": "00284",
    "bladedLightSai": "00285",
    "bladedHeavyButcherCleaverPointed": "00286",
    "smallBowGoldenHandle": "00287",
    "romanArmorBody": "00288",
    "gladiatorArmorUpperArms": "00289",
    "guardArrow": "00290",
    "ninjaUpperArm": "00291",
    "gateGuardDetailedBody": "00292",
    "templarKnightArms": "00293",
    "pokeLightGuardHalberd": "00294",
    "gateGuardDetailedLegs": "00295",
    "gateGuardCaptainLion": "00296",
    "anubisMaskHat": "00297",
    "largeCrossbowGoldenTip": "00298",
    "plagueDoctorHat": "00299",
    "gladiatorArmorLowerArms": "00300",
    "templarKnightBody": "00301",
    "plagueDoctorHatSimple": "00302",
    "smallBowOttomanHandle": "00303",
    "qingDynastyTrainingGearLegs": "00304",
    "flowerShirtLegs": "00305",
    "pumpkinHelmet": "00306",
    "mediumBowSimpleHandle": "00307",
    "ancientEgyptHatHat": "00308",
    "ancientEgyptArmorBody": "00309",
    "miscBigTeeth": "00310",
    "miscVampireTeeth": "00311",
    "miscLipsColored": "00312",
    "miscLipsBlack": "00313",
    "miscLipsRed": "00314",
    "bigBuckleShoe": "00315",
    "aztecOllamalitzliBody": "00316",
    "aztecExecutionerMask": "00317",
    "aztecExecutionerBody": "00318",
    "bowlHair": "00319",
    "vikingHair": "00320",
    "smallBowIvyHandle": "00321",
    "mediumBowIvyHandle": "00322",
    "largeCrossbowIvyTip": "00323",
    "repeatingCrossbowIvyTip": "00324",
    "largeBowArrowPointTip": "00325",
    "largeCrossbowArrowPointTip": "00326",
    "repeatingCrossbowArrowPointTip": "00327",
    "repeatingCrossbowJesterHandle": "00328",
    "largeCrossbowChineseDragonSimpleTip": "00329",
    "repeatingCrossbowChineseDragonSimpleTip": "00330",
    "qingDynastyEmperorHat": "00331",
    "hanDynastyWarriorHatSimpleHat": "00332",
    "qingDynastyTrainingGearHat": "00333",
    "greekZeusUpperArmBrace": "00334",
    "greekOakWreathHat": "00335",
    "greekZeusHairSimpleHat": "00336",
    "bluntLightOud": "00337",
    "desertMerchantAssistantShoe": "00338",
    "desertTurbanCoveringColor": "00339",
    "desertTurbanOpenColor": "00340",
    "bladedLightKunai": "00341",
    "bladedHeavyButcherCleaver": "00342",
    "gateGuardHelmet": "00343",
    "smallCrossbowGuardTip": "00344",
    "smallBowGuardTip": "00345",
    "repeatingCrossbowGuardTip": "00346",
    "largeCrossbowGuardTip": "00347",
    "bluntLightBroom": "00348",
    "mediumBowEasterEggsTip": "00349",
    "greekOakWreathHoodedDark": "00350",
    "smallBowTacticalTip": "00351",
    "monkHair": "00352",
    "mediumBowXmasTip": "00353",
    "mediumBowXmasHandle": "00354",
    "smallCrossbowJesterHandle": "00355",
    "smallCrossbowJesterTip": "00356",
    "repeatingCrossbowJesterTip": "00357",
    "bluntHeavyWoodSaw": "00358",
    "monkSandals": "00359",
    "bloodlustBarbarianArrow": "00360",
    "gladiatorArmorFeet": "00361",
    "thanksGivingTurkey": "00362",
    "happyNewYearChainHat": "00363",
    "happyNewYearBucketHat": "00364",
    "samuraiArmorHelmetHorned": "00365",
    "smallCrossbowGoldenTip": "00366",
    "smallBowFearlessHandle": "00367",
    "mediumBowJesterHandle": "00368",
    "repeatingCrossbowOttomanHandle": "00369",
    "bladedLightDagger": "00370",
    "spartanArmorHelmet": "00371",
    "pokeHeavySpear": "00372",
    "spartanArmorSandles": "00373",
    "spartanArmorLegs": "00374",
    "bluntHeavyTwoHandedVikingAxe": "00375",
    "bladedHeavyFalx": "00376",
    "kingCrown": "00377",
    "bluntLightSpikedMace": "00378",
    "hunterPants": "00379",
    "lostCrown": "00380",
    "commonerColorfulHat": "00381",
    "gateGuardDetailedGloves": "00382",
    "bloodlustBarbarianBody": "00383",
    "vikingArmorDetailedLegs": "00384",
    "desertMerchantArms": "00385",
    "bloodlustBarbarianQuiver": "00386",
    "baojianArrow": "00387",
    "bloodlustBarbarianArms": "00388",
    "bloodlustBarbarianLegs": "00389",
    "bloodlustBarbarianShoes": "00390",
    "largeCrossbowFearlessTip": "00391",
    "aztecWarriorWristGuard": "00392",
    "largeCrossbowFearlessHandle": "00393",
    "pokeHeavyBarbarianSpear": "00394",
    "smallBowFearlessTip": "00395",
    "nutCracker": "00396",
    "candyCaneArrow": "00397",
    "largeBowFearlessHandle": "00398",
    "smallCrossbowFearlessHandle": "00399",
    "smallCrossbowFearlessTip": "00400",
    "repeatingCrossbowFearlessHandle": "00401",
    "repeatingCrossbowFearlessTip": "00402",
    "bluntHeavyPickaxe": "00403",
    "bluntLightSpikedBat": "00404",
    "thinBoneArrow": "00405",
    "largeCrossbowSimpleHandle": "00406",
    "smallBowAztecTip": "00407",
    "crescentSpearHeadArrow": "00408",
    "bluntLightSmallMaul": "00409",
    "largeCrossbowOttomanHandle": "00410",
    "mediumBowFearlessHandle": "00411",
    "bluntHeavyBarbarianHammer": "00412",
    "bladedHeavyBarbarianSword": "00413",
    "largeBowFearlessTip": "00414",
    "mediumBowFearlessTip": "00415",
    "qingDynastyWarriorBody": "00416",
    "hanDynastyWarriorBody": "00417",
    "stripedArmorBody": "00418",
    "gateGuardBody": "00419",
    "desertMerchantBody": "00420",
    "vikingArmorDetailedBody": "00421",
    "greekOwlWarriorBody": "00422",
    "mediumBowJesterTip": "00423",
    "mediumBowDragonTip": "00424",
    "largeCrossbowVikingHandle": "00425",
    "largeCrossbowAztecHandle": "00426",
    "largeCrossbowAztecTip": "00427",
    "largeCrossbowOttomanTip": "00428",
    "largeCrossbowJesterTip": "00429",
    "largeCrossbowVikingTip": "00430",
    "largeCrossbowSimpleTip": "00431",
    "lightSharpPointArrow": "00432",
    "moonShapedTipArrow": "00433",
    "lightSharpHollowArrow": "00434",
    "gateGuardCaptainRaven": "00435",
    "commonerColorfulFeet": "00436",
    "qingDynastyWarriorLegs": "00437",
    "ottomanJanissaryShoes": "00438",
    "stripedArmorLegs": "00439",
    "smallBowSimpleHandle": "00440",
    "largeBowSimpleHandle": "00441",
    "repeatingCrossbowSimpleTip": "00442",
    "templarKnightFeet": "00443",
    "qingDynastyWarriorArms": "00444",
    "gladiatorArmorHands": "00445",
    "hanDynastyWarriorWrist": "00446",
    "desertMerchantFez": "00447",
    "hunterCap": "00448",
    "ottomanLadleBearerHat": "00449",
    "hanDynastyWarriorHat": "00450",
    "desertTurbanCoveringBlack": "00451",
    "desertTurbanOpenBlack": "00452",
    "desertTurbanCoveringBeige": "00453",
    "desertTurbanOpenBeige": "00454",
    "vikingHairSide": "00455",
    "slavicHelmet": "00456",
    "vikingHelmet": "00457",
    "romanArmorHelmet": "00458",
    "aztecOllamalitzliHat": "00459",
    "slavicFaceHelmet": "00460",
    "heavyArmorHelmet": "00461",
    "chainmailHelmetClosed": "00462",
    "gateGuardDetailedHelmet": "00463",
    "qingDynastyWarriorHat": "00464",
    "maximusHelmet": "00465",
    "ottomanJanissaryHat": "00466",
    "arabianKnightHelmet": "00467",
    "greekOwlWarriorHat": "00468",
    "greekWingedWarriorHat": "00469",
    "kingRing": "00470",
    "largeBowChineseDragonHeadHandle": "00471",
    "largeBowChineseDragonHandle": "00472",
    "largeBowVikingHandle": "00473",
    "largeBowDragonHandle": "00474",
    "largeBowJesterTip": "00475",
    "largeBowDragonTip": "00476",
    "largeBowOttomanTip": "00477",
    "largeBowMetalTip": "00478",
    "bluntLightVikingAxe": "00479",
    "bluntLightOttomanAxe": "00480",
    "bladedHeavyOttomanScimitar": "00481",
    "bluntHeavyTwoHandedOttomanAxe": "00482",
    "miscNoseBone": "00483",
    "bluntHeavyLongMace": "00484",
    "pokeHeavyGuardHalberd": "00485",
    "miscRings": "00486",
    "miscPaintHand": "00487",
    "bladedHeavyZweihander": "00488",
    "bladedHeavyFlamgberge": "00489",
    "smallBowDragonHandle": "00490",
    "smallBowTacticalHandle": "00491",
    "smallBowVikingHandle": "00492",
    "smallBowJesterTip": "00493",
    "smallBowDragonTip": "00494",
    "smallBowGoldenTip": "00495",
    "repeatingCrossbowVikingHandle": "00496",
    "repeatingCrossbowGoldenTip": "00497",
    "repeatingCrossbowAztecTip": "00498",
    "repeatingCrossbowTacticalHandle": "00499",
    "repeatingCrossbowAztecHandle": "00500",
    "repeatingCrossbowChineseDragonHandle": "00500",
    "repeatingCrossbowDragonHandle": "00501",
    "smallCrossbowVikingHandle": "00502",
    "smallCrossbowAztecHandle": "00503",
    "smallCrossbowMetalHandle": "00504",
    "smallCrossbowAztecTip": "00505",
    "smallCrossbowVikingTip": "00506",
    "smallCrossbowDragonTip": "00507",
    "smallCrossbowChineseDragonHeadTip": "00508",
    "mediumBowTournament2WinnerHandle": "00509",
    "tenguMaskHalf": "00510",
    "tenguMask": "00511",
    "bladedLightSica": "00512",
    "bladedLightGladius": "00513",
    "pokeLightRetiariusTrident": "00514",
    "pokeHeavyRetiariusTrident": "00515",
    "pokeHeavyBoatOar": "00516",
    "tridentArrow": "00517",
    "tridentGoldArrow": "00518",
    "mediumBowTridentTip": "00519",
    "smallBowTridentTip": "00520",
    "largeBowTridentTip": "00521",
    "smallCrossbowTridentTip": "00522",
    "repeatingCrossbowTridentTip": "00523",
    "largeCrossbowTridentTip": "00524",
    "venetianSpectaclesTactical": "00525",
    "largeBowTacticalProTip": "00526",
    "venetianSpectacles": "00527",
    "mediumBowTacticalProTip": "00528",
    "smallBowTacticalProTip": "00529",
    "chineseNewYearDragonHat": "00530",
    "carrotArrow": "00531",
    "largeBowSamuraiSimpleHandle": "00532",
    "largeCrossbowSamuraiHandle": "00533",
    "largeCrossbowSamuraiSimpleHandle": "00534",
    "largeBowSamuraiHandle": "00535",
    "kitsuneMaskBlack": "00536",
    "demonHeadwear": "00537",
    "tenguMaskBlackHalf": "00538",
    "tenguMaskBlack": "00539",
    "samuraiArmorDemonHelmetRed": "00540",
    "samuraiArmorDemonHelmetBlack": "00541",
    "bambooQuiver": "00542",
    "mediumBowSamuraiHandle": "00543",
    "mediumBowSamuraiTip": "00544",
    "yajiriSplitHeartArrow": "00545",
    "yajiriVHeartArrow": "00546",
    "yajiriVSharpHeartArrow": "00547",
    "demonArrow": "00548",
    "bluntHeavyKanabo": "00549",
    "pokeHeavyNaginata": "00550",
    "largeBowSamuraiTip": "00551",
    "smallBowSamuraiHandle": "00552",
    "smallBowSamuraiTip": "00553",
    "largeCrossbowSamuraiTip": "00554",
    "largeBowSamuraiSimpleTip": "00555",
    "repeatingCrossbowSamuraiHandle": "00556",
    "repeatingCrossbowSamuraiTip": "00557",
    "smallCrossbowSamuraiHandle": "00558",
    "smallCrossbowSamuraiTip": "00559",
    "kitsuneMaskWhite": "00560",
    "repeatingCrossbowSamuraiSimpleTip": "00561",
    "mediumBowSamuraiSimpleHandle": "00562",
    "largeCrossbowSamuraiSimpleTip": "00563",
    "mediumBowSamuraiSimpleTip": "00564",
    "smallBowSamuraiSimpleTip": "00565",
    "repeatingCrossbowSamuraiSimpleHandle": "00566",
    "smallBowSamuraiSimpleHandle": "00567",
    "smallCrossbowSamuraiSimpleHandle": "00568",
    "smallCrossbowSamuraiSimpleTip": "00569",
    "hounskullClosed": "00570",
    "hounskullOpen": "00571",
    "vikingArmorWolf": "00572",
    "vikingArmorWolfHelmet": "00573",
    "heavyVikingHelmetEmblem": "00574",
    "heavyVikingHelmetHorned": "00575",
    "vikingArmorWolfFur": "00576",
    "vikingArmorLowerArmBrace": "00577",
    "vikingArmorUpperArm": "00578",
    "vikingArmorGlove": "00579",
    "vikingArrowSharp": "00580",
    "mediumBowVikingDrekiHandle": "00581",
    "bluntLightVikingHammer": "00582",
    "vikingBackQuiver": "00583",
    "torsoVikingTattoo1": "00584",
    "torsoVikingTattoo2": "00585",
    "torsoVikingTattoo3": "00586",
    "torsoVikingTattoo4": "00587",
    "torsoVikingTattoo5": "00588",
    "torsoVikingTattoo6": "00589",
    "lowerArmVikingTattoo1": "00590",
    "lowerArmVikingTattoo2": "00591",
    "lowerArmVikingTattoo3": "00592",
    "upperArmVikingTattoo2": "00593",
    "upperArmVikingTattoo3": "00594",
    "upperArmVikingTattoo4": "00595",
    "upperArmVikingTattoo6": "00596",
    "upperArmVikingTattoo6Half": "00597",
    "upperArmVikingTattoo5": "00598",
    "lowerArmVikingTattoo1Half": "00599",
    "lowerArmVikingTattoo2Half": "00600",
    "lowerArmVikingTattoo3Half": "00601",
    "upperArmVikingTattoo1Half": "00602",
    "upperArmVikingTattoo2Half": "00603",
    "upperArmVikingTattoo3Half": "00604",
    "upperArmVikingTattoo5Half": "00605",
    "upperArmVikingTattoo4Half": "00606",
    "upperLegVikingTattoo1": "00607",
    "upperLegVikingTattoo2": "00608",
    "upperLegVikingTattoo3": "00609",
    "lowerLegVikingTattoo1": "00610",
    "lowerLegVikingTattoo3": "00611",
    "lowerLegVikingTattoo2": "00612",
    "lowerLegVikingTattoo1Half": "00613",
    "lowerLegVikingTattoo2Half": "00614",
    "upperLegVikingTattoo2Half": "00615",
    "upperLegVikingTattoo3Half": "00616",
    "upperLegVikingTattoo1Half": "00617",
    "lowerLegVikingTattoo3Half": "00618",
    "bluntHeavyVikingHammer": "00619",
    "smallBowVikingDrekiHandle": "00620",
    "smallCrossbowVikingDrekiTip": "00621",
    "largeBowVikingDrekiHandle": "00622",
    "repeatingCrossbowVikingDrekiTip": "00623",
    "largeCrossbowVikingDrekiTip": "00624",
    "pokeLightBarbarianSpear": "00625",
    "bladedLightBarbarianKnife": "00626",
    "bluntLightBarbarianHammer": "00627",
    "mediumBowTournament3WinnerHandle": "00628",
    "mediumBowTournament1WinnerHandle": "00629",
    "miscKohlEyes": "00630",
    "nefertitiHat": "00631",
    "pharaohMask": "00632",
    "horusHat": "00633",
    "ancientEgyptVoltureHat": "00634",
    "ancientEgyptPostiche": "00635",
    "pharaohArmor": "00636",
    "pharaohServantArmor": "00637",
    "pharaohQuiver": "00638",
    "pharaohBraceLowerArm": "00639",
    "pharaohBraceUpperArm": "00640",
    "mediumBowAncientEgyptianHandle": "00641",
    "pharaohArmorGlove": "00642",
    "mediumBowAncientEgyptianSimpleHandle": "00643",
    "mediumBowAncientEgyptianTip": "00644",
    "smallCrossbowAncientEgyptianHandle": "00645",
    "smallCrossbowAncientEgyptianTip": "00646",
    "smallCrossbowAncientEgyptianSimpleTip": "00647",
    "repeatingCrossbowAncientEgyptianHandle": "00648",
    "repeatingCrossbowAncientEgyptianTip": "00649",
    "repeatingCrossbowAncientEgyptianSimpleTip": "00650",
    "pokeHeavyAncientEgyptianFanAxe": "00651",
    "bluntHeavyAncientEgyptianAxe": "00652",
    "largeCrossbowAncientEgyptianHandle": "00653",
    "bluntLightEpsilonAxe": "00654",
    "bladedHeavyKhopesh": "00655",
    "bladedHeavyKhopeshGold": "00656",
    "largeCrossbowAncientEgyptianTip": "00657",
    "largeCrossbowAncientEgyptianSimpleTip": "00658",
    "smallBowAncientEgyptianHandle": "00659",
    "smallBowAncientEgyptianSimpleHandle": "00660",
    "smallBowAncientEgyptianTip": "00661",
    "largeBowAncientEgyptianHandle": "00662",
    "largeBowAncientEgyptianSimpleHandle": "00663",
    "largeBowAncientEgyptianTip": "00664",
    "bluntLightAncientEgyptianAxe": "00665",
    "ancientEgyptArrow": "00666",
    "pharaohBraceLowerLeg": "00667",
    "pharaohSandles": "00668",
    "torsoAncientEgyptTattoo2": "00669",
    "torsoAncientEgyptTattoo3": "00670",
    "torsoAncientEgyptTattoo4": "00671",
    "lowerArmAncientEgyptTattoo1": "00672",
    "lowerArmAncientEgyptTattoo2": "00673",
    "upperArmAncientEgyptTattoo1": "00674",
    "lowerLegAncientEgyptTattoo1": "00675",
    "lowerLegAncientEgyptTattoo2": "00676",
    "torsoAncientEgyptTattoo1": "00677",
    "upperLegAncientEgyptTattoo1": "00678",
    "halloweenButcherCleaver": "00679",
    "krampusHood": "00680",
    "bluntLightXmasPresentHammer": "00681",
    "santaLegs": "00682",
    "xmasSockQuiver": "00683",
    "xmasPresentArrow": "00684",
    "santaTorso": "00685",
    "santaHat": "00686",
    "chineseNewYearSnakeHat": "00687",
    "lostCrownTorso": "00688",
    "lostCrownWristGuard": "00689",
    "woodenLogQuiver": "00690",
    "bladedHeavyLostCrownSword": "00691",
    "bluntHeavyWoodenFlowerHammer": "00692",
    "lostCrownArrow": "00693",
    "mediumBowLostCrownHandle": "00694",
    "mediumBowLostCrownTip": "00695",
    "smallBowLostCrownHandle": "00696",
    "smallBowLostCrownTip": "00697",
    "largeBowLostCrownHandle": "00698",
    "largeBowLostCrownTip": "00699",
    "smallCrossbowLostCrownTip": "00700",
    "smallCrossbowLostCrownHandle": "00701",
    "repeatingCrossbowLostCrownHandle": "00702",
    "repeatingCrossbowLostCrownTip": "00703",
    "largeCrossbowLostCrownHandle": "00704",
    "largeCrossbowLostCrownTip": "00705",
    "flowerSandal": "00706",
    "flowerLegGuard": "00707",
    "lostCrownBoot": "00708",
    "flowerGlove": "00709"
    "holiFestival": "00710"
}
