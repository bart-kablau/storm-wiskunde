/* content.js — fout-uitleg per MC-optie toegevoegd (zie HOSTING.md / canonieke engine). */

window.VAK = {
  "id": "wiskunde_h8",
  "titel": "Wiskunde met Storm — H8 Herleiden en machten",
  "brand": "Wiskunde met Storm",
  "badge": "∑",
  "mascotEmoji": "🦦",
  "spiekTitel": "Wiskunde H8 — Herleiden en machten",
  "wiskunde": true,
  "spraak": {
    "vraagLang": "nl-NL",
    "antwoordLang": "nl-NL"
  },
  "matching": {
    "stripInfinitief": false,
    "accentTolerant": true,
    "lidwoordTolerant": false
  },
  "masteryHits": 2,
  "tegels": [
    "leerstof",
    "begrippen",
    "proeftoets",
    "spiekblad"
  ]
};

window.LEERSTOF = [
  {
    "id": "herleiden",
    "emoji": "➕",
    "titel": "8.1 Herleiden",
    "kort": "Gelijksoortige termen (zelfde letter) samennemen; eerst ×, dan +/−.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "<b>Herleiden</b> betekent: een som zo <b>kort mogelijk</b> schrijven.",
          "Dat doe je door <b>gelijksoortige termen</b> samen te nemen. Gelijksoortig = met <b>precies dezelfde letter</b>.",
          "Een los getal en een letter zijn <b>niet</b> gelijksoortig: <i>5x</i> en <i>3</i> kun je niet samennemen."
        ],
        "regel": "Tel alleen de getallen vóór dezelfde letter op. 2b + 3b = 5b.",
        "voorbeelden": [
          {
            "en": "2b + 3b = 5b",
            "let": "Allebei 'b' → tel 2 + 3 = 5, de b blijft staan."
          },
          {
            "en": "4a + a = 5a",
            "let": "a is hetzelfde als 1a, dus 4a + 1a = 5a."
          }
        ],
        "vragen": [
          {
            "t": "sleep",
            "opgave": "3a + 2b + 5a + b",
            "chips": [
              {
                "t": "3a",
                "bak": "a"
              },
              {
                "t": "2b",
                "bak": "b"
              },
              {
                "t": "5a",
                "bak": "a"
              },
              {
                "t": "b",
                "bak": "b"
              }
            ],
            "bakjes": [
              {
                "id": "a",
                "label": "a-termen",
                "som": "8a"
              },
              {
                "id": "b",
                "label": "b-termen",
                "som": "3b"
              }
            ],
            "resultaat": "8a + 3b",
            "w": "Termen met dezelfde letter horen in hetzelfde mandje."
          },
          {
            "t": "vb",
            "opgave": "3a + 5a",
            "waarom": {
              "q": "Waarom mag 3a + 5a samen tot 8a?",
              "o": [
                "Het zijn gelijksoortige termen (allebei a)",
                "Omdat optellen altijd mag",
                "Omdat 3 + 5 = 8"
              ],
              "a": "Het zijn gelijksoortige termen (allebei a)"
            },
            "fout": {
              "Omdat optellen altijd mag": "optellen mag níet zomaar — alleen als de termen gelijksoortig zijn (zelfde letter). 3a + 5b zou je bijvoorbeeld niet mogen samennemen.",
              "Omdat 3 + 5 = 8": "dat 3 + 5 = 8 klopt, maar dat is niet de réden dat het mag. Het mag omdat het allebei a's zijn. Bij 3a + 5b is óók 3 + 5 = 8, en daar mag het juist niet."
            },
            "stappen": [
              {
                "toon": "3a + 5a",
                "uitleg": "3a en 5a zijn gelijksoortig: allebei de letter a."
              },
              {
                "toon": "= (3 + 5)a",
                "uitleg": "Tel de getallen vóór de a op."
              },
              {
                "toon": "= 8a",
                "uitleg": "De a blijft gewoon staan."
              }
            ]
          },
          {
            "t": "mc",
            "q": "Welke twee termen zijn gelijksoortig?",
            "o": [
              "4x en 7x",
              "4x en 7y",
              "4x en 7"
            ],
            "a": "4x en 7x",
            "w": "Gelijksoortig = precies dezelfde letter.",
            "meer": "4x en 7x hebben allebei de letter x → gelijksoortig. 4x en 7y niet (x ≠ y); 4x en 7 niet (7 heeft geen letter).",
            "fout": {
              "4x en 7y": "je keek alleen of er een letter stond, maar x en y zijn verschillende letters — niet gelijksoortig.",
              "4x en 7": "de 7 heeft helemaal geen letter; een los getal en een x-term horen niet bij elkaar."
            }
          },
          {
            "t": "stap",
            "opgave": "2b + 3b",
            "vars": [
              "b"
            ],
            "w": "2 + 3 = 5, en de b blijft staan.",
            "meer": "2b betekent 2·b. 2b + 3b = (2 + 3)·b = 5b.",
            "stappen": [
              {
                "prompt": "Neem de gelijksoortige termen samen",
                "a": "5b",
                "hints": [
                  "2b en 3b zijn allebei 'b' → tel 2 + 3",
                  "2 + 3 = 5, dus 5b"
                ]
              }
            ]
          },
          {
            "t": "mc",
            "q": "Wat is 5x + 3? Let op!",
            "o": [
              "5x + 3 (kan niet korter)",
              "8x",
              "8"
            ],
            "a": "5x + 3 (kan niet korter)",
            "w": "x en een los getal zijn niet gelijksoortig.",
            "meer": "5x is '5 keer x', 3 is gewoon 3 — verschillende mandjes. Vul in x=2: 5·2+3=13, maar 8x=8·2=16. Niet gelijk, dus 5x+3 kan niet korter.",
            "fout": {
              "8": "je rekende 5 + 3 en liet de x weg, maar de x hoort bij de 5 en blijft staan.",
              "8x": "je telde de 5 en de 3 samen, maar de 3 heeft geen x — die mag je niet bij 5x optellen."
            }
          },
          {
            "t": "stap",
            "opgave": "4a + 2 + a",
            "vars": [
              "a"
            ],
            "w": "4a + a = 5a; de 2 blijft los.",
            "meer": "a is 1a, dus 4a + a = 5a. De 2 is geen a → die blijft staan: 5a + 2.",
            "stappen": [
              {
                "prompt": "Neem de a-termen samen (let op: a = 1a)",
                "a": "5a",
                "hints": [
                  "4a + a = 4a + 1a",
                  "4 + 1 = 5 → 5a"
                ]
              },
              {
                "prompt": "Schrijf nu de hele herleiding op",
                "a": "5a + 2",
                "hints": [
                  "De 2 hoort er los bij",
                  "5a + 2"
                ]
              }
            ]
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Soms staat er eerst een <b>vermenigvuldiging</b> in een term, zoals <i>−3·5x</i>.",
          "Werk dan de regel: <b>eerst keer, dan optellen/aftrekken</b>.",
          "Reken dus eerst elk product uit, en neem dáárna de gelijksoortige termen samen."
        ],
        "regel": "Eerst vermenigvuldigen, daarna gelijksoortige termen samennemen.",
        "voorbeelden": [
          {
            "en": "−3·5x + 8·2x = −15x + 16x = x",
            "let": "Eerst −15x en 16x, dán samen: 1x = x."
          }
        ],
        "vragen": [
          {
            "t": "stap",
            "opgave": "−3·5x + 8·2x",
            "vars": [
              "x"
            ],
            "w": "Eerst keer, dan samennemen.",
            "meer": "−3·5x = −15x en 8·2x = 16x. Dan −15x + 16x = 1x = x.",
            "stappen": [
              {
                "prompt": "Reken eerst de twee producten uit",
                "a": "-15x + 16x",
                "hints": [
                  "−3·5x = −15x",
                  "8·2x = 16x"
                ]
              },
              {
                "prompt": "Neem nu samen",
                "a": "x",
                "hints": [
                  "−15x + 16x = (−15 + 16)x",
                  "−15 + 16 = 1, dus 1x = x"
                ]
              }
            ]
          },
          {
            "t": "bouw",
            "q": "Herleid: 5x − 2y − 3y − 5x",
            "a": "-5y",
            "vars": [
              "x",
              "y"
            ],
            "w": "Neem de x'en samen en de y's samen.",
            "meer": "5x − 5x = 0. −2y − 3y = −5y. Samen blijft over: −5y."
          },
          {
            "t": "bouw",
            "q": "Herleid: 7a + 3b − 2a + b",
            "a": "5a + 4b",
            "vars": [
              "a",
              "b"
            ],
            "w": "a's bij a's, b's bij b's.",
            "meer": "7a − 2a = 5a en 3b + b = 4b → 5a + 4b."
          },
          {
            "t": "mc",
            "q": "Wat is 4a + 2 + a?",
            "o": [
              "5a + 2",
              "6a",
              "7a"
            ],
            "a": "5a + 2",
            "w": "4a + a = 5a; de 2 blijft los.",
            "meer": "a = 1a, dus 4a + a = 5a. De 2 is geen a → 5a + 2.",
            "fout": {
              "6a": "je trok de losse 2 ook bij de a's, maar de 2 heeft geen a en blijft apart staan.",
              "7a": "je telde alles op tot 7a, maar de 2 is geen a-term — alleen 4a + a = 5a mag samen."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Nu komen <b>meerdere letters</b> en <b>producten</b> door elkaar.",
          "Aanpak blijft: eerst keer uitrekenen, dan <b>per letter</b> de gelijksoortige termen samennemen.",
          "Let goed op de <b>mintekens</b>: het teken hoort bij de term die erachter staat."
        ],
        "regel": "Per letter apart samennemen; het minteken hoort bij de term erna.",
        "voorbeelden": [
          {
            "en": "5a − 2b − 3a + 5b = 2a + 3b",
            "let": "5a−3a=2a en −2b+5b=3b."
          }
        ],
        "vragen": [
          {
            "t": "stap",
            "opgave": "5a − 2b − 3a + 5b",
            "vars": [
              "a",
              "b"
            ],
            "w": "a's bij a's, b's bij b's.",
            "meer": "5a − 3a = 2a en −2b + 5b = 3b → 2a + 3b.",
            "stappen": [
              {
                "prompt": "Neem de a-termen samen",
                "a": "2a",
                "hints": [
                  "5a − 3a = 2a"
                ]
              },
              {
                "prompt": "Neem de b-termen samen",
                "a": "3b",
                "hints": [
                  "−2b + 5b = 3b"
                ]
              },
              {
                "prompt": "Schrijf het hele antwoord",
                "a": "2a + 3b",
                "hints": [
                  "Zet de a-term en b-term samen",
                  "2a + 3b"
                ]
              }
            ]
          },
          {
            "t": "bouw",
            "q": "Herleid: 2x · 3 − 4 · 2x",
            "a": "-2x",
            "vars": [
              "x"
            ],
            "w": "Eerst de producten: 2x·3 = 6x en 4·2x = 8x.",
            "meer": "2x·3 = 6x, 4·2x = 8x. Dan 6x − 8x = −2x."
          },
          {
            "t": "bouw",
            "q": "Herleid: 3p + 5q − p − 6q + 2p",
            "a": "4p - q",
            "vars": [
              "p",
              "q"
            ],
            "w": "p's: 3p − p + 2p; q's: 5q − 6q.",
            "meer": "3p − p + 2p = 4p en 5q − 6q = −q → 4p − q."
          },
          {
            "t": "mc",
            "q": "Welke herleiding klopt?",
            "o": [
              "6a − 2a = 4a",
              "6a − 2a = 4",
              "6a − 2a = 8a"
            ],
            "a": "6a − 2a = 4a",
            "w": "6 − 2 = 4, de a blijft staan.",
            "meer": "6a − 2a = (6 − 2)a = 4a. Niet 4 (de a blijft) en niet 8a (je telt niet op).",
            "fout": {
              "6a − 2a = 4": "je liet de a vallen, maar bij 6a − 2a blijft de a gewoon staan: 4a.",
              "6a − 2a = 8a": "je telde 6 en 2 op, maar er staat een min: 6 − 2 = 4, dus 4a."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "haakjes",
    "emoji": "📦",
    "titel": "8.2 Haakjes wegwerken",
    "kort": "Leer hoe je de haakjes uit een som haalt: het getal vóór de haak gaat netjes langs alle stukjes binnen de haak. Rustig aan, je doet het straks zo.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Een haakje zoals 3(a + 2) betekent: 3 keer alles wat binnen de haak staat.",
          "Je laat het getal vóór de haak langs <b>elk</b> stukje binnen de haak gaan.",
          "Dus 3(a + 2) = 3·a + 3·2 = 3a + 6. Niets vergeten!",
          "Let op het mintekentje: 3(a − 2) = 3a − 6. Het min blijft gewoon staan."
        ],
        "regel": "Het getal vóór de haak gaat langs ELK stukje binnen de haak.",
        "voorbeelden": [
          {
            "en": "3(a + 2) = 3a + 6",
            "let": "3 gaat langs de a én langs de 2."
          },
          {
            "en": "5(a − 2b) = 5a − 10b",
            "let": "5·a = 5a en 5·2b = 10b, met het min ervoor."
          }
        ],
        "vragen": [
          {
            "t": "vb",
            "opgave": "2(a + 4)",
            "stappen": [
              {
                "toon": "2(a + 4)",
                "uitleg": "De 2 staat vóór de haak. Die gaat zo langs allebei de stukjes binnen de haak."
              },
              {
                "toon": "= 2·a + 2·4",
                "uitleg": "De 2 gaat langs de a, en óók langs de 4. Allebei!"
              },
              {
                "toon": "= 2a + 8",
                "uitleg": "2·a = 2a en 2·4 = 8. Klaar."
              }
            ],
            "waarom": {
              "q": "Waarom moet de 2 óók langs de 4?",
              "o": [
                "Omdat de 2 langs elk stukje binnen de haak gaat",
                "Omdat 2·4 = 8 toevallig mooi uitkomt",
                "Omdat de 4 het grootste getal is"
              ],
              "a": "Omdat de 2 langs elk stukje binnen de haak gaat"
            },
            "fout": {
              "Omdat 2·4 = 8 toevallig mooi uitkomt": "niet omdat het mooi uitkomt — de 2 moet langs élke term binnen de haak, of het nu een mooi getal wordt of niet.",
              "Omdat de 4 het grootste getal is": "de grootte maakt niet uit. De 2 gaat langs álle termen in de haak, ook als de 4 juist het kleinste getal was."
            }
          },
          {
            "t": "vb",
            "opgave": "4(b − 3)",
            "stappen": [
              {
                "toon": "4(b − 3)",
                "uitleg": "Binnen de haak staat een min. Dat is niet erg, we houden het min gewoon vast."
              },
              {
                "toon": "= 4·b − 4·3",
                "uitleg": "De 4 gaat langs de b, en langs de 3. Het min blijft tussen de twee stukjes staan."
              },
              {
                "toon": "= 4b − 12",
                "uitleg": "4·b = 4b en 4·3 = 12."
              }
            ],
            "waarom": {
              "q": "Waarom blijft er een min staan tussen 4b en 12?",
              "o": [
                "Omdat er binnen de haak ook een min stond",
                "Omdat min altijd mooier is",
                "Omdat 4b groter is dan 12"
              ],
              "a": "Omdat er binnen de haak ook een min stond"
            },
            "fout": {
              "Omdat min altijd mooier is": "niet om mooi — het min komt doordat er binnen de haak een min stond (b − 3). De 4 langs −3 geeft −12.",
              "Omdat 4b groter is dan 12": "grootte heeft er niets mee te maken. Het min-teken komt van de − die al binnen de haak stond."
            }
          },
          {
            "t": "stap",
            "opgave": "5(a + 1)",
            "vars": [
              "a"
            ],
            "w": "5 gaat langs de a (= 5a) en langs de 1 (= 5).",
            "meer": "De 5 moet langs ALLE stukjes binnen de haak. 5·a = 5a en 5·1 = 5, dus 5a + 5. Check met a=2: 5·(2+1)=15 en 5·2+5=15. Gelijk!",
            "stappen": [
              {
                "prompt": "Werk de haakjes weg: 5(a + 1)",
                "a": "5a + 5",
                "hints": [
                  "Laat de 5 langs de a gaan, en daarna langs de 1.",
                  "5·a = 5a en 5·1 = 5, dus samen 5a + 5."
                ]
              }
            ]
          },
          {
            "t": "stap",
            "opgave": "3(2a + 4)",
            "vars": [
              "a"
            ],
            "w": "3·2a = 6a en 3·4 = 12.",
            "meer": "Pas op: 3·2a betekent 3 keer 2a, dat is 6a (niet 5a!). En 3·4 = 12. Dus 6a + 12. Check met a=1: 3·(2+4)=18 en 6·1+12=18. Gelijk!",
            "stappen": [
              {
                "prompt": "Werk de haakjes weg: 3(2a + 4)",
                "a": "6a + 12",
                "hints": [
                  "De 3 gaat langs 2a en langs 4.",
                  "3·2a = 6a en 3·4 = 12, dus 6a + 12."
                ]
              }
            ]
          },
          {
            "t": "mc",
            "q": "Wat is 4(a + 2)?",
            "o": [
              "4a + 8",
              "4a + 2",
              "4a + 6"
            ],
            "a": "4a + 8",
            "w": "De 4 gaat óók langs de 2: 4·2 = 8.",
            "meer": "De 4 moet langs ALLE stukjes. 4·a = 4a en 4·2 = 8, dus 4a + 8. Bij 4a + 2 vergat je de 4 langs de 2 te laten gaan. Check met a=1: 4·(1+2)=12 en 4·1+8=12. Gelijk!",
            "fout": {
              "4a + 2": "je liet de 4 alleen langs de a gaan; ze moet óók langs de 2: 4·2 = 8.",
              "4a + 6": "je deed 4 + 2 in plaats van 4 keer 2; voor de haak betekent keer, dus 4·2 = 8."
            }
          },
          {
            "t": "mc",
            "q": "Wat is 6(b − 1)?",
            "o": [
              "6b − 6",
              "6b − 1",
              "6b + 6"
            ],
            "a": "6b − 6",
            "w": "6·b = 6b en 6·1 = 6, met het min ervoor.",
            "meer": "De 6 gaat langs de b én langs de 1. 6·1 = 6, dus 6b − 6. Het min uit de haak blijft staan. Check met b=2: 6·(2−1)=6 en 6·2−6=6. Gelijk!",
            "fout": {
              "6b − 1": "je vergat de 6 langs de 1 te laten gaan; 6·1 = 6, dus 6b − 6.",
              "6b + 6": "je veranderde de min in een plus, maar het minteken uit de haak blijft gewoon staan."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Nu mag je het zelf doen. Soms staat er een getal én een letter vóór de haak, zoals 7a(8b + 7).",
          "Ook dan geldt: alles vóór de haak gaat langs elk stukje binnen de haak.",
          "7a(8b + 7) = 7a·8b + 7a·7 = 56ab + 49a. Reken het getal en de letters apart uit.",
          "Soms zijn er meer haakjes achter elkaar: doe ze één voor één en neem daarna gelijksoortige termen samen."
        ],
        "regel": "Alles vóór de haak (getal én letter) gaat langs elk stukje erin.",
        "voorbeelden": [
          {
            "en": "7a(8b + 7) = 56ab + 49a",
            "let": "7a·8b = 56ab en 7a·7 = 49a."
          },
          {
            "en": "6(2a + 3b) = 12a + 18b",
            "let": "6 gaat langs 2a en langs 3b."
          }
        ],
        "vragen": [
          {
            "t": "stap",
            "opgave": "2a(3b + 4)",
            "vars": [
              "a",
              "b"
            ],
            "w": "2a·3b = 6ab en 2a·4 = 8a.",
            "meer": "Vóór de haak staat 2a. Die gaat langs 3b én langs 4. 2a·3b = 6ab (getallen keer getallen, letters erbij) en 2a·4 = 8a. Dus 6ab + 8a. Check met a=1, b=1: 2·(3+4)=14 en 6+8=14. Gelijk!",
            "stappen": [
              {
                "prompt": "Wat is 2a · 3b?",
                "a": "6ab",
                "hints": [
                  "Vermenigvuldig eerst de getallen: 2·3.",
                  "2·3 = 6, en a·b = ab, dus 6ab."
                ]
              },
              {
                "prompt": "Wat is 2a · 4?",
                "a": "8a",
                "hints": [
                  "2·4 is het getal, de a blijft staan.",
                  "2·4 = 8, dus 8a."
                ]
              },
              {
                "prompt": "Zet nu het hele antwoord neer: 2a(3b + 4) = ...",
                "a": "6ab + 8a",
                "hints": [
                  "Plak je twee antwoorden achter elkaar met het + ertussen.",
                  "6ab + 8a."
                ]
              }
            ]
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg: 7a(8b + 7)",
            "a": "56ab + 49a",
            "vars": [
              "a",
              "b"
            ],
            "w": "7a·8b = 56ab en 7a·7 = 49a.",
            "meer": "7a gaat langs beide stukjes. 7·8 = 56 en a·b = ab, dus 56ab. En 7a·7 = 49a. Antwoord: 56ab + 49a. Check met a=1, b=1: 7·(8+7)=105 en 56+49=105. Gelijk!"
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg: 5(a − 2b)",
            "a": "5a - 10b",
            "vars": [
              "a",
              "b"
            ],
            "w": "5·a = 5a en 5·2b = 10b, met het min ertussen.",
            "meer": "De 5 gaat langs a en langs 2b. 5·2b = 10b, en het min uit de haak blijft staan. Dus 5a − 10b. Check met a=2, b=1: 5·(2−2)=0 en 5·2−10·1=0. Gelijk!"
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg en herleid: 3(4a + b) − 4(a − b)",
            "a": "8a + 7b",
            "vars": [
              "a",
              "b"
            ],
            "w": "3(4a+b)=12a+3b en −4(a−b)=−4a+4b; samen 8a+7b.",
            "meer": "Doe de haakjes één voor één. 3(4a+b)=12a+3b. Let op de tweede: −4 gaat langs a (=−4a) én langs −b, en min·min = plus, dus +4b. Samen: 12a+3b−4a+4b = 8a+7b. Check met a=1, b=1: 3·5−4·0=15 en 8+7=15. Gelijk!"
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg en herleid: 3(2p + 5q) + 4(p + 2q)",
            "a": "10p + 23q",
            "vars": [
              "p",
              "q"
            ],
            "w": "6p+15q + 4p+8q = 10p+23q.",
            "meer": "3(2p+5q)=6p+15q en 4(p+2q)=4p+8q. Neem nu gelijksoortig samen: 6p+4p=10p en 15q+8q=23q. Dus 10p+23q. Check met p=1, q=1: 3·7+4·3=33 en 10+23=33. Gelijk!"
          },
          {
            "t": "velden",
            "q": "Een rechthoek is a breed en (a + 2) hoog. Vul de oppervlakte en de omtrek in (haakjes weggewerkt).",
            "velden": [
              {
                "label": "Oppervlakte = a·(a + 2) =",
                "a": "a^2 + 2a"
              },
              {
                "label": "Omtrek = 2·a + 2·(a + 2) =",
                "a": "4a + 4"
              }
            ],
            "w": "a·a = a^2 en a·2 = 2a; voor de omtrek: 2a + 2a + 4 = 4a + 4.",
            "meer": "Oppervlakte = lengte·breedte = a·(a+2) = a·a + a·2 = a^2 + 2a. Omtrek = 2 keer breedte + 2 keer hoogte = 2a + 2(a+2) = 2a + 2a + 4 = 4a + 4. Check met a=3: oppervlakte 3·5=15 en 9+6=15; omtrek 2·3+2·5=16 en 4·3+4=16. Gelijk!"
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Nu de lastigste: een MIN vóór de haak, zoals −(p − q) of 18 − (a − 12).",
          "Een min vóór de haak draait <b>elk</b> teken binnen de haak om: − wordt + en + wordt −.",
          "Dus −(p − q) = −p + q, en 18 − (a − 12) = 18 − a + 12 = 30 − a.",
          "Pas ook op bij −5(p − q): de −5 gaat langs beide, en min·min = plus, dus −5p + 5q."
        ],
        "regel": "Een min vóór de haak draait ELK teken binnen de haak om.",
        "voorbeelden": [
          {
            "en": "18 − (a − 12) = 30 − a",
            "let": "De min draait −12 om naar +12, dus 18 + 12 = 30."
          },
          {
            "en": "−5(p − q) = −5p + 5q",
            "let": "−5·(−q) = +5q, want min·min = plus."
          }
        ],
        "vragen": [
          {
            "t": "vb",
            "opgave": "18 − (a − 12)",
            "stappen": [
              {
                "toon": "18 − (a − 12)",
                "uitleg": "Er staat een min vóór de haak. Die draait elk teken binnen de haak om."
              },
              {
                "toon": "= 18 − a + 12",
                "uitleg": "De a wordt −a, en de −12 wordt +12 (de min draait het om!)."
              },
              {
                "toon": "= 30 − a",
                "uitleg": "18 + 12 = 30, en de −a blijft staan. Antwoord: 30 − a."
              }
            ],
            "waarom": {
              "q": "Waarom wordt de −12 een +12?",
              "o": [
                "Omdat de min vóór de haak het teken omdraait: min·min = plus",
                "Omdat 12 een mooi getal is",
                "Omdat je 18 en 12 mag optellen"
              ],
              "a": "Omdat de min vóór de haak het teken omdraait: min·min = plus"
            },
            "fout": {
              "Omdat 12 een mooi getal is": "niet om mooi — de min vóór de haak draait elk teken binnen de haak om. Dus −(−12) wordt +12.",
              "Omdat je 18 en 12 mag optellen": "dat is niet de reden. De +12 ontstaat doordat min·min = plus, niet doordat je zomaar mag optellen."
            }
          },
          {
            "t": "mc",
            "q": "Wat is 18 − (a − 12)? Let goed op de min vóór de haak!",
            "o": [
              "30 − a",
              "18 − a − 12",
              "6 − a"
            ],
            "a": "30 − a",
            "w": "De min draait de −12 om naar +12, dus 18 + 12 = 30.",
            "meer": "Dit is de val! De min vóór de haak draait ALLE tekens om: −a blijft −a, maar −12 wordt +12. Dus 18 + 12 = 30 − a. Bij 18 − a − 12 vergat je de −12 om te draaien. Check met a=5: 18−(5−12)=18−(−7)=25 en 30−5=25. Gelijk!",
            "fout": {
              "18 − a − 12": "je vergat dat de min vóór de haak ook de −12 omdraait; die wordt +12, dus 18 + 12 = 30.",
              "6 − a": "je deed 18 − 12, maar de min draait de −12 om naar +12, dus juist 18 + 12 = 30."
            }
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg: −(p − q)",
            "a": "-p + q",
            "vars": [
              "p",
              "q"
            ],
            "w": "De min draait beide tekens om: p wordt −p, −q wordt +q.",
            "meer": "Een min vóór de haak draait elk teken om. p wordt −p en −q wordt +q. Dus −p + q. Check met p=3, q=1: −(3−1)=−2 en −3+1=−2. Gelijk!"
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg: −5(p − q)",
            "a": "-5p + 5q",
            "vars": [
              "p",
              "q"
            ],
            "w": "−5·p = −5p en −5·(−q) = +5q (min·min = plus).",
            "meer": "De −5 gaat langs beide stukjes. −5·p = −5p. En −5·(−q): min keer min is plus, dus +5q. Antwoord: −5p + 5q. Pas op: NIET −5p − 5q! Check met p=1, q=1: −5·(1−1)=0 en −5+5=0. Gelijk!"
          },
          {
            "t": "mc",
            "q": "Wat is −4(a − b)? Pas op het laatste teken!",
            "o": [
              "−4a + 4b",
              "−4a − 4b",
              "−4a − b"
            ],
            "a": "−4a + 4b",
            "w": "−4·(−b) = +4b, want min keer min is plus.",
            "meer": "De −4 gaat langs a (=−4a) en langs −b. En −4·(−b) = +4b, want min·min = plus. Dus −4a + 4b. De val −4a − 4b vergeet dat min·min plus wordt. Check met a=1, b=1: −4·(1−1)=0 en −4+4=0. Gelijk!",
            "fout": {
              "−4a − 4b": "je vergat dat min keer min plus wordt: −4·(−b) = +4b, dus geen − maar +.",
              "−4a − b": "je liet de 4 niet langs de b gaan en hield de min; het is −4·(−b) = +4b."
            }
          },
          {
            "t": "bouw",
            "q": "Werk de haakjes weg en herleid: −3(p − q) − 5(p − q)",
            "a": "-8p + 8q",
            "vars": [
              "p",
              "q"
            ],
            "w": "−3p+3q en −5p+5q samen: −8p+8q.",
            "meer": "Eerst los: −3(p−q)=−3p+3q (min·min=+3q) en −5(p−q)=−5p+5q. Neem samen: −3p−5p=−8p en 3q+5q=8q. Dus −8p+8q. Check met p=1, q=2: −3·(1−2)−5·(1−2)=3+5=8 en −8+16=8. Gelijk!"
          }
        ]
      }
    ]
  },
  {
    "id": "machten",
    "emoji": "🔢",
    "titel": "8.3 Machten en rekenvolgorde",
    "kort": "Een macht is gewoon hetzelfde getal een paar keer met elkaar vermenigvuldigen. We leren wat 5^3 betekent, hoe je met min-getallen omgaat, en in welke volgorde je een som uitrekent. Stap voor stap, jij kan dit!",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Een <b>macht</b> is hetzelfde getal een paar keer met elkaar <b>vermenigvuldigen</b>.",
          "Bij 5^3 is 5 het <b>grondtal</b> (welk getal) en 3 de <b>exponent</b> (hoe vaak).",
          "Dus 5^3 betekent: 5 · 5 · 5. Drie keer een 5, allemaal keer elkaar.",
          "Let op: de exponent is NIET keer doen! 5^3 is dus niet 5·3.",
          "Reken eerst de losse keer-sommen uit, en dan pas het eindgetal."
        ],
        "regel": "Bij a^n schrijf je het grondtal a precies n keer op met keer-tekens ertussen.",
        "voorbeelden": [
          {
            "en": "5^3 = 5·5·5 = 125",
            "let": "De exponent 3 telt hoe VAAK de 5 er staat, niet keer 3."
          },
          {
            "en": "2^4 = 2·2·2·2 = 16",
            "let": "Vier tweetjes achter elkaar keer elkaar."
          },
          {
            "en": "10^4 = 10·10·10·10 = 10000",
            "let": "Bij grondtal 10 komen er evenveel nullen als de exponent."
          }
        ],
        "vragen": [
          {
            "t": "vb",
            "opgave": "5^3",
            "stappen": [
              {
                "toon": "5^3",
                "uitleg": "Het grondtal is 5, de exponent is 3."
              },
              {
                "toon": "= 5·5·5",
                "uitleg": "Schrijf de 5 precies 3 keer op, met keer ertussen."
              },
              {
                "toon": "= 25·5",
                "uitleg": "Reken eerst 5·5 = 25 uit."
              },
              {
                "toon": "= 125",
                "uitleg": "En dan 25·5 = 125. Klaar!"
              }
            ],
            "waarom": {
              "q": "Waarom is 5^3 hetzelfde als 5·5·5?",
              "o": [
                "De exponent 3 zegt: schrijf de 5 drie keer keer elkaar",
                "Omdat je 5 keer 3 doet",
                "Omdat 5+3 = 8"
              ],
              "a": "De exponent 3 zegt: schrijf de 5 drie keer keer elkaar"
            },
            "fout": {
              "Omdat je 5 keer 3 doet": "dat zou 5·3 = 15 zijn. Maar een macht is herhaald vermenigvuldigen van de 5 zelf: 5·5·5 = 125.",
              "Omdat 5+3 = 8": "optellen hoort hier niet. De exponent 3 zegt hoe váák je de 5 met zichzelf vermenigvuldigt, niet wat je erbij optelt."
            }
          },
          {
            "t": "vb",
            "opgave": "2^4",
            "stappen": [
              {
                "toon": "2^4",
                "uitleg": "Grondtal 2, exponent 4: dus vier tweetjes."
              },
              {
                "toon": "= 2·2·2·2",
                "uitleg": "Schrijf de 2 precies 4 keer op."
              },
              {
                "toon": "= 4·2·2",
                "uitleg": "Eerst 2·2 = 4."
              },
              {
                "toon": "= 8·2",
                "uitleg": "Dan 4·2 = 8."
              },
              {
                "toon": "= 16",
                "uitleg": "En 8·2 = 16. Je bent er!"
              }
            ],
            "waarom": {
              "q": "Waarom is 2^4 niet 8?",
              "o": [
                "8 zou 2·4 zijn, maar je moet de 2 vier keer keer elkaar doen",
                "Omdat 2^4 altijd even is",
                "Omdat 2+4 = 6"
              ],
              "a": "8 zou 2·4 zijn, maar je moet de 2 vier keer keer elkaar doen"
            },
            "fout": {
              "Omdat 2^4 altijd even is": "even of oneven zegt niets over de waarde. 2^4 = 2·2·2·2 = 16, en 16 is toevallig wel even, maar dat is niet waarom het geen 8 is.",
              "Omdat 2+4 = 6": "je mag niet optellen. 2^4 betekent de 2 vier keer keer elkaar: 2·2·2·2 = 16."
            }
          },
          {
            "t": "stap",
            "opgave": "3^2",
            "vars": [],
            "w": "3^2 = 3·3 = 9.",
            "meer": "3^2 betekent twee drietjes keer elkaar: 3·3. Dat is 9, niet 6 (6 zou 3·2 zijn).",
            "stappen": [
              {
                "prompt": "Schrijf 3^2 als een keer-som en reken uit",
                "a": "9",
                "hints": [
                  "De exponent is 2, dus de 3 staat 2 keer: 3·3",
                  "3·3 = 9"
                ]
              }
            ]
          },
          {
            "t": "stap",
            "opgave": "4^3",
            "vars": [],
            "w": "4^3 = 4·4·4 = 64.",
            "meer": "Drie viertjes keer elkaar: 4·4 = 16, en 16·4 = 64.",
            "stappen": [
              {
                "prompt": "Reken eerst 4·4 uit",
                "a": "16",
                "hints": [
                  "4 keer 4",
                  "4·4 = 16"
                ]
              },
              {
                "prompt": "Doe nu het antwoord nog een keer keer 4",
                "a": "64",
                "hints": [
                  "16·4",
                  "16·4 = 64"
                ]
              }
            ]
          },
          {
            "t": "velden",
            "q": "Vul de macht in als keer-som en als eindgetal.",
            "velden": [
              {
                "label": "10^3 als keer-som (gebruik · tussen de getallen)",
                "a": "10·10·10"
              },
              {
                "label": "10^3 als eindgetal",
                "a": "1000"
              }
            ],
            "w": "Drie tientjes keer elkaar: 10·10·10 = 1000.",
            "meer": "Bij grondtal 10 komen er net zoveel nullen als de exponent. Exponent 3 → drie nullen → 1000."
          },
          {
            "t": "mc",
            "q": "Wat is 5^3? Let goed op de exponent!",
            "o": [
              "125",
              "15",
              "8"
            ],
            "a": "125",
            "w": "5^3 = 5·5·5, niet 5·3.",
            "meer": "De exponent is geen keer-som! 5·3 = 15 is fout. Reken na: 5·5·5 = 25·5 = 125.",
            "fout": {
              "8": "je telde 5 + 3 op, maar een macht is keer doen, niet optellen: 5·5·5 = 125.",
              "15": "je deed 5·3, maar de exponent is geen keer-som: 5^3 = 5·5·5."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Nu doen we machten met <b>min-getallen</b>. Schrijf altijd eerst het grondtal mét haakjes uit.",
          "(-3)^2 betekent (-3)·(-3). Min keer min wordt <b>plus</b>, dus (-3)^2 = 9.",
          "(-3)^3 betekent (-3)·(-3)·(-3) = -27. Een oneven aantal minnen geeft een <b>min</b>.",
          "Handige truc: <b>even</b> exponent → antwoord <b>plus</b>; <b>oneven</b> exponent → antwoord <b>min</b>.",
          "Daarom is (-1)^8 = 1 (even), en (-1)^7 = -1 (oneven)."
        ],
        "regel": "Bij een min-grondtal: even exponent geeft een plus-antwoord, oneven exponent geeft een min-antwoord.",
        "voorbeelden": [
          {
            "en": "(-3)^2 = (-3)·(-3) = 9",
            "let": "Min keer min = plus. Even exponent → plus."
          },
          {
            "en": "(-3)^3 = (-3)·(-3)·(-3) = -27",
            "let": "Drie minnen (oneven) → het antwoord wordt min."
          },
          {
            "en": "(-1)^8 = 1",
            "let": "Acht minnen vallen twee-aan-twee weg. Even → plus → 1, NIET -1."
          }
        ],
        "vragen": [
          {
            "t": "stap",
            "opgave": "(-3)^2",
            "vars": [],
            "w": "(-3)·(-3) = 9, want min keer min is plus.",
            "meer": "Schrijf het grondtal -3 mét haakjes twee keer: (-3)·(-3). Min keer min = plus, dus 9.",
            "stappen": [
              {
                "prompt": "Schrijf (-3)^2 als keer-som met haakjes",
                "a": "(-3)·(-3)",
                "hints": [
                  "Exponent 2: het grondtal -3 staat 2 keer",
                  "Zet om de -3 steeds haakjes: (-3)·(-3)"
                ]
              },
              {
                "prompt": "Reken (-3)·(-3) uit",
                "a": "9",
                "hints": [
                  "Min keer min wordt plus",
                  "3·3 = 9, en de tekens maken plus → 9"
                ]
              }
            ]
          },
          {
            "t": "stap",
            "opgave": "(-3)^3",
            "vars": [],
            "w": "Oneven aantal minnen, dus het antwoord is min: -27.",
            "meer": "(-3)·(-3) = 9, en 9·(-3) = -27. Drie minnen is oneven, dus min.",
            "stappen": [
              {
                "prompt": "Reken eerst (-3)·(-3) uit",
                "a": "9",
                "hints": [
                  "Min keer min",
                  "(-3)·(-3) = 9"
                ]
              },
              {
                "prompt": "Doe nu 9 keer (-3)",
                "a": "-27",
                "hints": [
                  "Plus keer min wordt min",
                  "9·(-3) = -27"
                ]
              }
            ]
          },
          {
            "t": "bouw",
            "q": "Bereken (-1)^8.",
            "a": "1",
            "vars": [],
            "w": "Even exponent bij grondtal -1 → antwoord +1.",
            "meer": "De minnen vallen twee-aan-twee weg. 8 is even, dus alles wordt plus: (-1)^8 = 1, NIET -1."
          },
          {
            "t": "bouw",
            "q": "Bereken (-4)^3.",
            "a": "-64",
            "vars": [],
            "w": "(-4)·(-4)·(-4): oneven aantal minnen → min.",
            "meer": "(-4)·(-4) = 16, en 16·(-4) = -64. Drie minnen (oneven) → het antwoord wordt min."
          },
          {
            "t": "mc",
            "q": "Wat is (-1)^10?",
            "o": [
              "1",
              "-1",
              "10"
            ],
            "a": "1",
            "w": "10 is even, dus (-1)^10 = +1.",
            "meer": "Tien minnen vallen twee-aan-twee weg, er blijft niets over → plus. Even exponent → +1. De val is dat je -1 denkt; even exponent geeft altijd plus.",
            "fout": {
              "10": "je gebruikte de exponent 10 als antwoord, maar je doet −1 tien keer keer zichzelf, niet keer 10.",
              "-1": "10 is even, dus alle minnen vallen twee-aan-twee weg; het antwoord wordt juist +1."
            }
          },
          {
            "t": "mc",
            "q": "Welk antwoord is goed bij een even exponent en een min-grondtal, zoals (-10)^2?",
            "o": [
              "Plus, want min keer min is plus: (-10)^2 = 100",
              "Min, want het grondtal is min: -100",
              "Het hangt van het getal af"
            ],
            "a": "Plus, want min keer min is plus: (-10)^2 = 100",
            "w": "(-10)·(-10) = 100.",
            "meer": "Even exponent → de minnen vallen weg → plus. (-10)·(-10) = 100, niet -100.",
            "fout": {
              "Min, want het grondtal is min: -100": "bij een even exponent vallen de minnen twee-aan-twee weg, dus het antwoord wordt juist plus.",
              "Het hangt van het getal af": "het hangt niet van het getal af maar van de exponent: even geeft altijd plus."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Het allerlastigste: het verschil tussen <b>-2^4</b> en <b>(-2)^4</b>. Kijk goed naar de haakjes!",
          "Bij (-2)^4 hoort de min BIJ het grondtal: (-2)·(-2)·(-2)·(-2) = 16.",
          "Bij -2^4 staan er GEEN haakjes. Dan doe je eerst de macht 2^4 = 16, en de min ervoor maakt -16.",
          "\"De vierde macht van -2\" betekent (-2)^4 = 16, dus mét haakjes.",
          "<b>Rekenvolgorde:</b> 1) haakjes, 2) machten, 3) keer en delen, 4) plus en min. Van links naar rechts.",
          "Voorbeeld: 6 - 3·4^3 = 6 - 3·64 = 6 - 192 = -186. Eerst de macht, dan keer, dán de min."
        ],
        "regel": "Volgorde: eerst haakjes, dan machten, dan keer/delen, dan plus/min. Een min telt alleen bij het grondtal als er haakjes omheen staan.",
        "voorbeelden": [
          {
            "en": "(-2)^4 = 16  maar  -2^4 = -16",
            "let": "Haakjes → de min hoort erbij (plus); geen haakjes → eerst macht, dan min ervoor."
          },
          {
            "en": "6 - 3·4^3 = 6 - 3·64 = 6 - 192 = -186",
            "let": "Eerst macht, dan keer, dan pas min. NIET (6-3) eerst!"
          },
          {
            "en": "5·4^3 : (8-6)^3 - 2 = 5·64 : 2^3 - 2 = 320 : 8 - 2 = 40 - 2 = 38",
            "let": "Eerst haakje (8-6=2), dan machten, dan keer/delen, dan min."
          }
        ],
        "vragen": [
          {
            "t": "vb",
            "opgave": "6 - 3·4^3",
            "stappen": [
              {
                "toon": "6 - 3·4^3",
                "uitleg": "Geen haakjes om te doen. Eerst de macht: 4^3."
              },
              {
                "toon": "= 6 - 3·64",
                "uitleg": "4^3 = 64. Nu de keer-som."
              },
              {
                "toon": "= 6 - 192",
                "uitleg": "3·64 = 192. Nu pas de min."
              },
              {
                "toon": "= -186",
                "uitleg": "6 - 192 = -186. Je trekt een groot getal van een klein getal af."
              }
            ],
            "waarom": {
              "q": "Waarom mag je hier NIET eerst 6 - 3 doen?",
              "o": [
                "Keer en machten gaan vóór plus en min",
                "Omdat 6-3 te makkelijk is",
                "Omdat de min vooraan staat"
              ],
              "a": "Keer en machten gaan vóór plus en min"
            },
            "fout": {
              "Omdat 6-3 te makkelijk is": "niet om moeilijkheid — de volgorde van bewerkingen ligt vast: eerst machten en keer, daarna pas plus en min.",
              "Omdat de min vooraan staat": "de plek van de min maakt niet uit. Je rekent altijd eerst de macht en de keer uit, en pas daarna trek je af."
            }
          },
          {
            "t": "bouw",
            "q": "Bereken (-2)^4. (Let op de haakjes!)",
            "a": "16",
            "vars": [],
            "w": "De min hoort bij het grondtal; even exponent → plus.",
            "meer": "Met haakjes: (-2)·(-2)·(-2)·(-2). Vier minnen (even) → plus → 16. Vergelijk met -2^4 = -16, dat is zonder haakjes!"
          },
          {
            "t": "bouw",
            "q": "Bereken -2^4. (Geen haakjes om de 2!)",
            "a": "-16",
            "vars": [],
            "w": "Eerst de macht 2^4 = 16, de min ervoor maakt -16.",
            "meer": "Zonder haakjes hoort de min NIET bij het grondtal. Je doet eerst 2^4 = 16 en zet dan de min ervoor: -16. Met haakjes (-2)^4 = 16, daar zit het verschil!"
          },
          {
            "t": "velden",
            "q": "Bereken: de vierde macht van -2, en daarna -2^4. Schrijf elk eindgetal.",
            "velden": [
              {
                "label": "de vierde macht van -2, dus (-2)^4 =",
                "a": "16"
              },
              {
                "label": "-2^4 (zonder haakjes) =",
                "a": "-16"
              }
            ],
            "w": "\"De vierde macht van -2\" is (-2)^4 = 16; zonder haakjes is -2^4 = -16.",
            "meer": "\"De vierde macht van -2\" betekent dat de -2 vier keer keer zichzelf gaat: (-2)^4 = 16. Bij -2^4 doe je eerst de macht en zet je de min ervoor: -16."
          },
          {
            "t": "bouw",
            "q": "Bereken 5·4^3 : (8-6)^3 - 2.",
            "a": "38",
            "vars": [],
            "w": "Haakjes, dan machten, dan keer/delen, dan min.",
            "meer": "Eerst haakje: 8-6 = 2. Dan machten: 4^3 = 64 en 2^3 = 8. Dan keer/delen van links naar rechts: 5·64 = 320, 320:8 = 40. Dan min: 40 - 2 = 38."
          },
          {
            "t": "mc",
            "q": "Iemand berekent 6 - 3·4^3 zo: (6 - 3)·4^3 = 3·64 = 192. Klopt dat?",
            "o": [
              "Nee, keer en machten gaan vóór de min, het is -186",
              "Ja, je rekent gewoon van links naar rechts",
              "Ja, want 6-3 staat vooraan"
            ],
            "a": "Nee, keer en machten gaan vóór de min, het is -186",
            "w": "Plus en min komen als laatste, niet van links naar rechts vooraan.",
            "meer": "De fout is dat de min vooraan eerst wordt gedaan. Volgorde: eerst 4^3 = 64, dan 3·64 = 192, en pas dán 6 - 192 = -186. Niet 192.",
            "fout": {
              "Ja, je rekent gewoon van links naar rechts": "plus en min komen pas als laatste, niet vooraan; eerst de macht en de keer, dan de min.",
              "Ja, want 6-3 staat vooraan": "vooraan staan betekent niet eerst aan de beurt; keer en machten gaan altijd vóór de min."
            }
          }
        ]
      }
    ]
  },
  {
    "id": "wetenschappelijk",
    "emoji": "🔬",
    "titel": "8.4 Wetenschappelijke notatie",
    "kort": "Hele grote en hele kleine getallen kort opschrijven als een getal tussen 1 en 10 keer een macht van 10. Plus: rekenen met groeifactoren.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Wetenschappelijke notatie schrijf je zo: <b>a·10^n</b>.",
          "Dat <b>a</b> is een getal van <b>1 tot 10</b> (1 mag, 10 niet).",
          "De <b>10^n</b> vertelt hoe groot het getal eigenlijk is.",
          "Je telt hoeveel <b>plaatsen de komma schuift</b>, niet hoeveel nullen er staan.",
          "Voorbeeld: 875000000000 = 8,75·10^11. De komma schuift 11 plaatsen naar links."
        ],
        "regel": "Schrijf als a·10^n: a tussen 1 en 10, en n = hoeveel plaatsen de komma schuift.",
        "voorbeelden": [
          {
            "en": "300 = 3·10^2",
            "let": "3 is tussen 1 en 10, en de komma schuift 2 plaatsen."
          },
          {
            "en": "4500 = 4,5·10^3",
            "let": "Zet de komma na het eerste cijfer: 4,5. Dan tel je 3 plaatsen."
          }
        ],
        "vragen": [
          {
            "t": "vb",
            "opgave": "Schrijf 800 in wetenschappelijke notatie",
            "stappen": [
              {
                "toon": "800",
                "uitleg": "We willen een getal tussen 1 en 10 keer een macht van 10."
              },
              {
                "toon": "Het getal tussen 1 en 10 is 8",
                "uitleg": "Zet de komma vlak na de 8, dus achter het eerste cijfer."
              },
              {
                "toon": "8 ... 8,0 ... van 8 naar 800 schuift de komma 2 plaatsen",
                "uitleg": "8 → 80 → 800, dat is 2 keer schuiven."
              },
              {
                "toon": "= 8·10^2",
                "uitleg": "Het getal is 8 en de macht van 10 is 2."
              }
            ],
            "waarom": {
              "q": "Waarom is de macht 10^2 en niet 10^3?",
              "o": [
                "Omdat de komma 2 plaatsen schuift (8 → 80 → 800)",
                "Omdat er 2 nullen in 800 staan",
                "Omdat 800 deelbaar is door 100"
              ],
              "a": "Omdat de komma 2 plaatsen schuift (8 → 80 → 800)"
            },
            "fout": {
              "Omdat er 2 nullen in 800 staan": "nullen tellen werkt hier toevallig, maar dat is niet de regel. Het gaat om hoeveel plaatsen de komma schuift (8 → 80 → 800 = 2 stappen). Bij bv. 250 klopt het tellen van nullen niet meer.",
              "Omdat 800 deelbaar is door 100": "deelbaarheid is niet de reden. De macht van 10 telt hoeveel plaatsen de komma opschuift, niet door welk getal je kunt delen."
            }
          },
          {
            "t": "vb",
            "opgave": "Schrijf 6000 in wetenschappelijke notatie",
            "stappen": [
              {
                "toon": "6000",
                "uitleg": "Eerst: welk getal tussen 1 en 10 zit hierin? Dat is 6."
              },
              {
                "toon": "6 → 60 → 600 → 6000",
                "uitleg": "Tel hoe vaak de komma schuift van 6 naar 6000: dat is 3 keer."
              },
              {
                "toon": "= 6·10^3",
                "uitleg": "Getal 6, en 3 keer schuiven geeft 10^3."
              }
            ],
            "waarom": {
              "q": "Waarom schrijven we 6 en niet 60?",
              "o": [
                "Omdat a tussen 1 en 10 moet liggen, en 60 is te groot",
                "Omdat 6 een mooier getal is",
                "Omdat 60 geen macht van 10 is"
              ],
              "a": "Omdat a tussen 1 en 10 moet liggen, en 60 is te groot"
            },
            "fout": {
              "Omdat 6 een mooier getal is": "niet om mooi — het getal vóór de ×10 moet altijd tussen 1 en 10 liggen. 6 mag wel, 60 is te groot.",
              "Omdat 60 geen macht van 10 is": "dat klopt op zich, maar dat is niet de reden. De regel is dat het eerste getal (a) tussen 1 en 10 moet liggen."
            }
          },
          {
            "t": "velden",
            "q": "Schrijf 500 in wetenschappelijke notatie. Vul de twee vakjes in.",
            "velden": [
              {
                "label": "getal tussen 1 en 10",
                "a": "5"
              },
              {
                "label": "macht van 10 (·10^...)",
                "a": "2"
              }
            ],
            "w": "5 staat tussen 1 en 10, en de komma schuift 2 plaatsen (5 → 50 → 500).",
            "meer": "Tel de plaatsen, niet de nullen (al klopt het hier toevallig allebei): 5 → 50 → 500 is 2 keer schuiven, dus 5·10^2. Check: 5·100 = 500."
          },
          {
            "t": "stap",
            "opgave": "Schrijf 70000 in wetenschappelijke notatie",
            "vars": [],
            "w": "Het getal tussen 1 en 10 is 7, en de komma schuift 4 plaatsen.",
            "meer": "7 → 70 → 700 → 7000 → 70000 is 4 keer schuiven, dus 7·10^4. Check: 7·10000 = 70000.",
            "stappen": [
              {
                "prompt": "Hoeveel plaatsen schuift de komma van 7 naar 70000?",
                "a": "4",
                "hints": [
                  "Tel mee: 7 → 70 → 700 → 7000 → 70000",
                  "Elke pijl is 1 plaats. Tel de pijlen: dat zijn er 4."
                ]
              }
            ]
          },
          {
            "t": "mc",
            "q": "Welke schrijfwijze is écht wetenschappelijke notatie?",
            "o": [
              "3,5·10^4",
              "35·10^3",
              "0,35·10^5"
            ],
            "a": "3,5·10^4",
            "w": "Het getal vooraan moet tussen 1 en 10 liggen. Alleen 3,5 voldoet.",
            "meer": "35 is te groot (groter dan 10) en 0,35 is te klein (kleiner dan 1). Het getal vooraan moet 1 t/m 9-komma-iets zijn. Ze stellen wel hetzelfde getal voor (35000), maar netjes is alleen 3,5·10^4.",
            "fout": {
              "35·10^3": "het getal vooraan moet tussen 1 en 10 liggen, en 35 is te groot.",
              "0,35·10^5": "0,35 is kleiner dan 1; het getal vooraan moet juist tussen 1 en 10 liggen."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Nu doe je het zelf, ook met getallen die meer cijfers hebben.",
          "Stap 1: zet de komma vlak achter het <b>eerste cijfer</b> → dat is je getal a.",
          "Stap 2: tel hoeveel plaatsen de komma <b>geschoven</b> is → dat is n.",
          "Let op: ook de cijfers ná het eerste cijfer mogen mee, zoals bij 380207 = 3,80207·10^5.",
          "Terugrekenen kan ook: 2,78·10^9 betekent komma 9 plaatsen naar rechts = 2780000000."
        ],
        "regel": "Eerste cijfer met komma = a; tel de plaatsen tot het oude getal = n.",
        "voorbeelden": [
          {
            "en": "52000 = 5,2·10^4",
            "let": "5,2 is het getal; van 5,2 naar 52000 schuift de komma 4 plaatsen."
          },
          {
            "en": "3,4·10^6 = 3400000",
            "let": "Terug naar gewone notatie: komma 6 plaatsen naar rechts."
          }
        ],
        "vragen": [
          {
            "t": "stap",
            "opgave": "Schrijf 48000 in wetenschappelijke notatie",
            "vars": [],
            "w": "a = 4,8 en de komma schuift 4 plaatsen.",
            "meer": "Zet de komma achter de 4: 4,8. Dan 4,8 → 48 → 480 → 4800 → 48000 is 4 keer schuiven, dus 4,8·10^4. Check: 4,8·10000 = 48000.",
            "stappen": [
              {
                "prompt": "Wat is het getal tussen 1 en 10 (de mantisse)?",
                "a": "4,8",
                "hints": [
                  "Zet de komma vlak achter het eerste cijfer (de 4).",
                  "Achter de 4 komt het cijfer 8, de rest is 0. Dus 4,8."
                ]
              },
              {
                "prompt": "Hoeveel plaatsen schuift de komma (de macht van 10)?",
                "a": "4",
                "hints": [
                  "Tel van 4,8 naar 48000.",
                  "4,8 → 48 → 480 → 4800 → 48000 = 4 plaatsen."
                ]
              }
            ]
          },
          {
            "t": "velden",
            "q": "Schrijf 380207 in wetenschappelijke notatie.",
            "velden": [
              {
                "label": "mantisse (1 t/m 10)",
                "a": "3,80207"
              },
              {
                "label": "macht van 10 (·10^...)",
                "a": "5"
              }
            ],
            "w": "Komma vlak achter het eerste cijfer: 3,80207; de komma schuift 5 plaatsen.",
            "meer": "Alle cijfers blijven staan, alleen de komma verspringt: 3,80207·10^5. Tel: 3 → 38 → 380 → 3802 → 38020 → 380207 is 5 plaatsen. Check: 3,80207·100000 = 380207."
          },
          {
            "t": "bouw",
            "q": "Schrijf 3720000000 in wetenschappelijke notatie",
            "a": "3,72·10^9",
            "vars": [],
            "w": "Mantisse 3,72 en de komma schuift 9 plaatsen.",
            "meer": "Komma achter de 3: 3,72. Tel de plaatsen tot 3720000000: dat zijn er 9. Dus 3,72·10^9. Check: 3,72·1000000000 = 3720000000. Tip: schrijf je antwoord met ^ , dus 3,72·10^9."
          },
          {
            "t": "bouw",
            "q": "Schrijf 380 in wetenschappelijke notatie",
            "a": "3,8·10^2",
            "vars": [],
            "w": "Mantisse 3,8 en de komma schuift 2 plaatsen.",
            "meer": "Pas op: niet álle nullen tellen! 380 = 3,8·10^2, want 3,8 → 38 → 380 is 2 keer schuiven. Check: 3,8·100 = 380."
          },
          {
            "t": "velden",
            "q": "Zet 2,78·10^9 terug in de gewone notatie. Hoeveel plaatsen schuift de komma, en wat is het hele getal?",
            "velden": [
              {
                "label": "komma schuift (plaatsen naar rechts)",
                "a": "9"
              },
              {
                "label": "het hele getal",
                "a": "2780000000"
              }
            ],
            "w": "10^9 betekent: komma 9 plaatsen naar rechts.",
            "meer": "2,78 → de komma 9 plaatsen naar rechts vullen we aan met nullen: 2780000000. Check: 2,78·1000000000 = 2780000000."
          },
          {
            "t": "mc",
            "q": "Een rekenmachine geeft 3^26 ≈ 2,54·10^12. Hoeveel cijfers vóór de komma heeft dit getal in gewone notatie?",
            "o": [
              "13 cijfers",
              "12 cijfers",
              "26 cijfers"
            ],
            "a": "13 cijfers",
            "w": "De komma schuift 12 plaatsen, dus achter het eerste cijfer komen er nog 12 bij: samen 13.",
            "meer": "2,54·10^12 = 2540000000000. Het eerste cijfer (de 2) plus 12 plaatsen erachter = 13 cijfers. De exponent 12 is dus 1 minder dan het aantal cijfers, niet gelijk eraan.",
            "fout": {
              "12 cijfers": "je nam de exponent 12 als aantal cijfers, maar het eerste cijfer telt er nog bij: 12 + 1 = 13.",
              "26 cijfers": "je verwarde de exponent van 3^26 met het aantal cijfers; je moet naar de 10^12 kijken."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Nu door elkaar: opschrijven, terugrekenen én groeifactoren.",
          "Groeifactor: <b>erbij</b> betekent <b>1 +</b> het percentage als kommagetal.",
          "+8% per jaar → ×1,08. +1% per jaar → ×1,01. (Niet ×0,08 en niet ×1,8!)",
          "Meerdere jaren? Dan keer de groeifactor zo vaak: n jaar → ×groeifactor^n.",
          "Voorbeeld: €390000 dat 3 jaar lang +8% groeit → 390000·1,08^3."
        ],
        "regel": "+p% per jaar = ×(1 + p/100); na n jaar keer je die groeifactor n keer (^n).",
        "voorbeelden": [
          {
            "en": "+8% per jaar → groeifactor 1,08",
            "let": "1 (het hele bedrag) + 0,08 (de 8% erbij) = 1,08."
          },
          {
            "en": "Na 3 jaar: ×1,08·1,08·1,08 = ×1,08^3",
            "let": "Elk jaar opnieuw keer 1,08."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Een huizenprijs stijgt elk jaar met 8%. Met welk getal vermenigvuldig je per jaar?",
            "o": [
              "×1,08",
              "×0,08",
              "×1,8"
            ],
            "a": "×1,08",
            "w": "Het hele bedrag (1) blijft, en daar komt 8% (0,08) bij: 1 + 0,08 = 1,08.",
            "meer": "×0,08 zou maken dat het huis bijna alles kwijtraakt, en ×1,8 is +80%, veel te veel. Erbij = 1 + het percentage als kommagetal. Probeer met €100: na +8% is het €108, en 100·1,08 = 108. Klopt!",
            "fout": {
              "×0,08": "×0,08 maakt het huis bijna alles kwijt; je houdt het hele bedrag (1) en doet er 0,08 bij.",
              "×1,8": "×1,8 is +80%, veel te veel; 8% erbij is 1 + 0,08 = 1,08."
            }
          },
          {
            "t": "bouw",
            "q": "Schrijf 91000000 in wetenschappelijke notatie",
            "a": "9,1·10^7",
            "vars": [],
            "w": "Mantisse 9,1 en de komma schuift 7 plaatsen.",
            "meer": "Komma achter de 9: 9,1. Tel naar 91000000: 9,1 → 91 → 910 → ... dat zijn 7 plaatsen. Dus 9,1·10^7. Check: 9,1·10000000 = 91000000."
          },
          {
            "t": "velden",
            "q": "Het leefgebied van de reuzenpanda was op 1 januari 2019 2710000 ha. Per jaar groeit het met 1%. Hoe reken je het leefgebied op 1 januari 2023 uit? (2019 → 2023 = 4 jaar)",
            "velden": [
              {
                "label": "groeifactor per jaar",
                "a": "1,01"
              },
              {
                "label": "aantal jaren (de macht)",
                "a": "4"
              }
            ],
            "w": "+1% per jaar = ×1,01, en van 2019 naar 2023 zijn 4 jaar.",
            "meer": "Je rekent 2710000·1,01^4. Let op: +1% is 1,01 (niet 0,01 en niet 1,1). En 2023 − 2019 = 4 jaar, dus de macht is 4. (Uitkomst ≈ 2820000 ha.)"
          },
          {
            "t": "bouw",
            "q": "Reken uit: de huizenprijs van €390000 groeit 3 jaar lang met 8% per jaar. Bereken 390000·1,08^3 en rond af op duizendtallen (alleen het getal, zonder euroteken)",
            "a": "491000",
            "vars": [],
            "w": "1,08^3 ≈ 1,259712, en 390000·1,259712 ≈ 491288, afgerond op duizendtallen 491000.",
            "meer": "Stap voor stap: 1,08·1,08·1,08 = 1,259712. Dan 390000·1,259712 = 491287,68. Afronden op duizendtallen geeft 491000. Pas op: niet 390000·1,24 (dat is 8% per jaar verkeerd opgeteld) maar écht 3 keer keer 1,08."
          },
          {
            "t": "mc",
            "q": "Welke schrijfwijze van het getal 87500000000 is fout (geen nette wetenschappelijke notatie)?",
            "o": [
              "87,5·10^9",
              "8,75·10^10",
              "Allebei goed"
            ],
            "a": "87,5·10^9",
            "w": "Het getal vooraan moet tussen 1 en 10 liggen; 87,5 is te groot.",
            "meer": "8,75·10^10 is correct (8,75 staat tussen 1 en 10). 87,5·10^9 stelt hetzelfde getal voor, maar 87,5 is groter dan 10, dus dat is geen nette wetenschappelijke notatie. Verschuif de komma één plek extra naar links: 87,5·10^9 = 8,75·10^10.",
            "fout": {
              "8,75·10^10": "deze is juist correct: 8,75 ligt netjes tussen 1 en 10, dus dit is geen fout.",
              "Allebei goed": "ze stellen wel hetzelfde getal voor, maar 87,5 is groter dan 10 en dus niet netjes."
            }
          },
          {
            "t": "velden",
            "q": "Schrijf het kleine getal 0,0042 in wetenschappelijke notatie. Tip: bij getallen kleiner dan 1 schuift de komma naar rechts, en dan wordt de macht negatief.",
            "velden": [
              {
                "label": "mantisse (1 t/m 10)",
                "a": "4,2"
              },
              {
                "label": "macht van 10 (·10^...)",
                "a": "-3"
              }
            ],
            "w": "0,0042 → 4,2 is de komma 3 plaatsen naar rechts, en naar rechts schuiven geeft een negatieve macht.",
            "meer": "0,0042 = 4,2·10^-3. Tel: 0,0042 → 0,042 → 0,42 → 4,2 is 3 plaatsen naar rechts. Bij getallen kleiner dan 1 wordt de macht negatief. Check: 4,2·0,001 = 0,0042."
          }
        ]
      }
    ]
  },
  {
    "id": "machtenletters",
    "emoji": "✖️",
    "titel": "8.5 Machten en letters",
    "kort": "x·x·x·x = x^4. Machten met hetzelfde grondtal vermenigvuldigen? Exponenten optellen. Plus en min mag alleen bij precies dezelfde letter én exponent.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Een macht is een korte schrijfwijze. <b>x·x·x·x = x^4</b>. Het getal bovenaan (de exponent) telt hoe vaak de x er staat.",
          "<b>x</b> in je eentje is eigenlijk <b>x^1</b>. Dat hoef je niet te schrijven, maar handig om te weten.",
          "Vermenigvuldig je machten met <b>hetzelfde grondtal</b> (allebei a, of allebei x)? Dan <b>tel je de exponenten op</b> en het grondtal blijft staan: a^3·a^4 = a^7.",
          "Rustig aan: bij keer-sommen tel je de exponenten op. Het grondtal verandert nooit."
        ],
        "regel": "x·x·x·x = x^4, en bij keer met hetzelfde grondtal tel je de exponenten op: a^3·a^4 = a^7.",
        "voorbeelden": [
          {
            "en": "x·x·x = x^3",
            "let": "Drie keer x onder elkaar is x^3. Tel hoe vaak de x er staat."
          },
          {
            "en": "a^3·a^4 = a^7",
            "let": "Zelfde grondtal a, dus exponenten optellen: 3+4 = 7."
          }
        ],
        "vragen": [
          {
            "t": "vb",
            "opgave": "x·x·x·x",
            "stappen": [
              {
                "toon": "x·x·x·x",
                "uitleg": "Hier staat 4 keer een x achter elkaar, allemaal keer."
              },
              {
                "toon": "= x^4",
                "uitleg": "Tel hoe vaak de x er staat: 4 keer. Dat schrijf je als x^4."
              }
            ],
            "waarom": {
              "q": "Waarom mag x·x·x·x = x^4?",
              "o": [
                "Omdat er 4 keer een x vermenigvuldigd wordt",
                "Omdat 4 een mooi getal is",
                "Omdat x altijd ^4 wordt"
              ],
              "a": "Omdat er 4 keer een x vermenigvuldigd wordt"
            },
            "fout": {
              "Omdat 4 een mooi getal is": "niet om mooi — je telt simpelweg hoe vaak de x er staat. Vier keer x → x^4.",
              "Omdat x altijd ^4 wordt": "x wordt niet altijd ^4. De exponent is precies het aantal x'en dat je vermenigvuldigt. Bij x·x is het x², bij x·x·x is het x³."
            }
          },
          {
            "t": "vb",
            "opgave": "a^3·a^4",
            "stappen": [
              {
                "toon": "a^3·a^4",
                "uitleg": "Allebei het grondtal a, en er staat keer (·) tussen."
              },
              {
                "toon": "= a^(3+4)",
                "uitleg": "Bij keer met hetzelfde grondtal tel je de exponenten op."
              },
              {
                "toon": "= a^7",
                "uitleg": "3+4 = 7, en de a blijft gewoon staan."
              }
            ],
            "waarom": {
              "q": "Waarom worden de exponenten 3 en 4 opgeteld?",
              "o": [
                "Omdat het keer is met hetzelfde grondtal a",
                "Omdat optellen altijd makkelijker is",
                "Omdat 3 en 4 naast elkaar liggen"
              ],
              "a": "Omdat het keer is met hetzelfde grondtal a"
            },
            "fout": {
              "Omdat optellen altijd makkelijker is": "niet om gemak — bij vermenigvuldigen met hetzelfde grondtal tel je de exponenten op (a³·a⁴ = a⁷). Bij delen zou je ze juist aftrekken.",
              "Omdat 3 en 4 naast elkaar liggen": "de plek van de getallen maakt niet uit. Je telt de exponenten op omdat het keer is met hetzelfde grondtal a."
            }
          },
          {
            "t": "stap",
            "opgave": "a·a·a·a·a",
            "vars": [
              "a"
            ],
            "w": "Tel hoe vaak de a er staat: 5 keer, dus a^5.",
            "meer": "a·a·a·a·a betekent 5 keer een a keer elkaar. Dat schrijf je als a^5. Tip: tel gewoon de a's.",
            "stappen": [
              {
                "prompt": "Schrijf als macht. Hoe vaak staat de a er?",
                "a": "a^5",
                "hints": [
                  "Tel rustig de a's één voor één.",
                  "Er staan 5 a's, dus a^5."
                ]
              }
            ]
          },
          {
            "t": "stap",
            "opgave": "a^3·a",
            "vars": [
              "a"
            ],
            "w": "Een losse a is a^1, dus 3+1 = 4: a^4.",
            "meer": "Die losse a is eigenlijk a^1. Tel dan op: 3+1 = 4. Dus a^3·a = a^4. Controle met a=2: 8·2 = 16 = 2^4.",
            "stappen": [
              {
                "prompt": "Zelfde grondtal, dus exponenten optellen. (denk: a = a^1)",
                "a": "a^4",
                "hints": [
                  "De losse a telt als a^1. Tel 3+1.",
                  "3+1 = 4, dus a^4."
                ]
              }
            ]
          },
          {
            "t": "stap",
            "opgave": "x^2·x^5",
            "vars": [
              "x"
            ],
            "w": "Zelfde grondtal x, dus 2+5 = 7: x^7.",
            "meer": "Bij keer met hetzelfde grondtal tel je de exponenten op: 2+5 = 7. Het grondtal x blijft staan. Dus x^7.",
            "stappen": [
              {
                "prompt": "Tel de exponenten op, grondtal blijft x",
                "a": "x^7",
                "hints": [
                  "Reken 2+5.",
                  "2+5 = 7, dus x^7."
                ]
              }
            ]
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Bij keer-machten met getallen ervoor: de <b>getallen vermenigvuldig je</b> en de <b>exponenten tel je op</b>. Bijvoorbeeld 5x^3·3x^7: 5·3 = 15 (keer) en 3+7 = 10 (optellen), dus 15x^10.",
          "Let goed op: getallen keer, exponenten plus. Twee verschillende dingen tegelijk!",
          "Plus en min mag <b>alleen</b> bij precies dezelfde letter én dezelfde exponent. Dan tel je alleen de getallen ervoor op: 5x^3 + 8x^3 = 13x^3. De exponent 3 blijft staan.",
          "Bij plus en min verandert de exponent dus niet. Alleen het getal vooraan."
        ],
        "regel": "Keer: getallen ×, exponenten +. Plus/min: alleen bij gelijke letter én exponent, en dan blijft de exponent staan.",
        "voorbeelden": [
          {
            "en": "5x^3·3x^7 = 15x^10",
            "let": "Getallen keer: 5·3 = 15. Exponenten plus: 3+7 = 10."
          },
          {
            "en": "5x^3 + 8x^3 = 13x^3",
            "let": "Zelfde letter én exponent, dus tel alleen 5+8 = 13. De ^3 blijft."
          }
        ],
        "vragen": [
          {
            "t": "stap",
            "opgave": "2a^3·5a^2",
            "vars": [
              "a"
            ],
            "w": "Getallen keer: 2·5 = 10. Exponenten plus: 3+2 = 5. Dus 10a^5.",
            "meer": "Twee dingen tegelijk: de getallen vermenigvuldigen (2·5 = 10) en de exponenten optellen (3+2 = 5). Antwoord 10a^5.",
            "stappen": [
              {
                "prompt": "Vermenigvuldig eerst de getallen: 2·5 = ?",
                "a": "10",
                "hints": [
                  "2 keer 5.",
                  "2·5 = 10."
                ]
              },
              {
                "prompt": "Tel nu de exponenten op en schrijf het hele antwoord (bv 10a^5)",
                "a": "10a^5",
                "hints": [
                  "Exponenten optellen: 3+2.",
                  "3+2 = 5, en het getal was 10, dus 10a^5."
                ]
              }
            ]
          },
          {
            "t": "bouw",
            "q": "Herleid: 5x^3·3x^7",
            "a": "15x^10",
            "vars": [
              "x"
            ],
            "w": "Getallen keer: 5·3 = 15. Exponenten plus: 3+7 = 10.",
            "meer": "Pas op dat je niet de getallen optelt. De getallen gaan keer (5·3 = 15), de exponenten gaan plus (3+7 = 10). Dus 15x^10, niet 8x^10."
          },
          {
            "t": "bouw",
            "q": "Herleid: 5x^3 + 8x^3",
            "a": "13x^3",
            "vars": [
              "x"
            ],
            "w": "Zelfde letter én exponent: tel alleen 5+8 = 13, de ^3 blijft staan.",
            "meer": "Bij plus tel je alleen de getallen vooraan op: 5+8 = 13. De exponent verandert NIET. Dus 13x^3, niet 13x^6. Controle met x=1: 5+8 = 13, en 13·1 = 13."
          },
          {
            "t": "bouw",
            "q": "Herleid: -3a^7 − 8a^7",
            "a": "-11a^7",
            "vars": [
              "a"
            ],
            "w": "Zelfde letter én exponent: -3 − 8 = -11, de ^7 blijft.",
            "meer": "Reken met de min: -3 − 8 = -11. De letter a^7 blijft hetzelfde. Antwoord -11a^7."
          },
          {
            "t": "bouw",
            "q": "Herleid: 8a^3 + 2a^3",
            "a": "10a^3",
            "vars": [
              "a"
            ],
            "w": "Gelijke termen: 8+2 = 10, exponent ^3 blijft.",
            "meer": "Allebei a^3, dus optellen mag: 8+2 = 10. De exponent 3 blijft gewoon staan. Antwoord 10a^3."
          },
          {
            "t": "stap",
            "opgave": "4x^3 − 6x^3",
            "vars": [
              "x"
            ],
            "w": "Gelijke termen: 4 − 6 = -2, de ^3 blijft. Dus -2x^3.",
            "meer": "4 − 6 wordt negatief: -2. De letter x^3 blijft staan. Antwoord -2x^3.",
            "stappen": [
              {
                "prompt": "Tel de getallen samen (let op de min) en schrijf het antwoord",
                "a": "-2x^3",
                "hints": [
                  "Reken 4 − 6.",
                  "4 − 6 = -2, en x^3 blijft: -2x^3."
                ]
              }
            ]
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Nu door elkaar. Kijk eerst goed: is het <b>keer</b> of <b>plus/min</b>? Dat bepaalt alles.",
          "Keer met zelfde grondtal: getallen ×, exponenten +. Ook met een minteken: -2x^3·5x^4 = -10x^7.",
          "Plus/min mag <b>alleen</b> bij gelijke letter én gelijke exponent. Anders kan het <b>niet korter</b>. Zo kun je 5x^3 + 3x^7 niet samennemen (verschillende exponent), en 8a^6 − a ook niet (a is a^1).",
          "Twijfel je of iets samen mag? Vul een getal in (bv x=2) en kijk of links en rechts gelijk zijn."
        ],
        "regel": "Eerst kijken: keer (getallen ×, exponenten +) of plus/min (alleen bij gelijke letter én exponent, anders kan het niet korter).",
        "voorbeelden": [
          {
            "en": "p^9·4p·p^6 = 4p^16",
            "let": "Alles keer, grondtal p: getal 4 blijft, exponenten 9+1+6 = 16."
          },
          {
            "en": "5x^3 + 3x^7 kan niet korter",
            "let": "Verschillende exponent (3 en 7), dus optellen mag niet."
          }
        ],
        "vragen": [
          {
            "t": "bouw",
            "q": "Herleid: 7x^2·x",
            "a": "7x^3",
            "vars": [
              "x"
            ],
            "w": "Keer met grondtal x: getal 7 blijft, exponenten 2+1 = 3.",
            "meer": "De losse x is x^1. Het getal 7 blijft staan, de exponenten optellen: 2+1 = 3. Antwoord 7x^3."
          },
          {
            "t": "bouw",
            "q": "Herleid: -2x^3·5x^4",
            "a": "-10x^7",
            "vars": [
              "x"
            ],
            "w": "Getallen keer: -2·5 = -10. Exponenten plus: 3+4 = 7.",
            "meer": "Let op het minteken: -2·5 = -10. Exponenten optellen: 3+4 = 7. Antwoord -10x^7."
          },
          {
            "t": "mc",
            "q": "Wat is a^3·a^4? Let goed op!",
            "o": [
              "a^7",
              "a^12",
              "a^3"
            ],
            "a": "a^7",
            "w": "Bij keer tel je de exponenten op (3+4 = 7), je vermenigvuldigt ze NIET.",
            "meer": "De valkuil is a^12 (3·4). Maar bij keer met hetzelfde grondtal tel je de exponenten OP: 3+4 = 7. Controle met a=2: 2^3·2^4 = 8·16 = 128 = 2^7. Klopt, a^7.",
            "fout": {
              "a^12": "je deed 3·4, maar bij keer met hetzelfde grondtal tel je de exponenten op: 3 + 4 = 7.",
              "a^3": "je hield één exponent en vergat de andere; bij keer tel je ze op: 3 + 4 = 7."
            }
          },
          {
            "t": "mc",
            "q": "Wat is 5x^3 + 3x^7?",
            "o": [
              "kan niet korter",
              "8x^10",
              "8x^21"
            ],
            "a": "kan niet korter",
            "w": "Verschillende exponenten (3 en 7), dus plus mag niet.",
            "meer": "Optellen mag alleen bij gelijke letter ÉN gelijke exponent. Hier zijn de exponenten 3 en 7 verschillend, dus het kan niet korter. Controle met x=2: 5·8 + 3·128 = 40 + 384 = 424, maar 8x^10 = 8·1024 = 8192. Niet gelijk!",
            "fout": {
              "8x^10": "je telde 5 + 3 én de exponenten op, maar bij plus moeten de exponenten gelijk zijn — 3 en 7 niet.",
              "8x^21": "je telde de getallen op en deed 3·7 met de exponenten; bij plus mag dit allebei niet, en gelijke exponent ontbreekt."
            }
          },
          {
            "t": "mc",
            "q": "Wat is 5x^3 + 8x^3? Let op de exponent!",
            "o": [
              "13x^3",
              "13x^6",
              "40x^3"
            ],
            "a": "13x^3",
            "w": "Bij plus blijft de exponent staan: 5+8 = 13, en de ^3 verandert niet.",
            "meer": "De valkuil is 13x^6 (exponenten ook optellen). Maar bij plus verandert de exponent NIET; je telt alleen de getallen vooraan op. Controle met x=1: 5+8 = 13, en 13·1 = 13. Antwoord 13x^3.",
            "fout": {
              "13x^6": "je telde ook de exponenten op, maar bij plus blijft de exponent staan: alleen 5 + 8 = 13.",
              "40x^3": "je deed 5·8 keer, maar er staat plus: tel de getallen op, 5 + 8 = 13."
            }
          },
          {
            "t": "velden",
            "q": "Vul in: 9a^2 · ___ = 18a^6. Welke factor hoort op de open plek?",
            "velden": [
              {
                "label": "Het getal vooraan (9·? = 18)",
                "a": "2"
              },
              {
                "label": "De hele ontbrekende factor (bv 2a^4)",
                "a": "2a^4"
              }
            ],
            "w": "Getal: 9·2 = 18. Exponent: 2 + 4 = 6, dus a^4. Samen 2a^4.",
            "meer": "Bij keer gaan getallen × en exponenten +. Het getal: 9·2 = 18. De exponent: 2 + 4 = 6, dus je mist a^4. Samen 2a^4. Controle: 9a^2·2a^4 = 18a^6."
          }
        ]
      }
    ]
  }
];

window.BEGRIPPEN = {
  "Begrippen": {
    "emoji": "📐",
    "titel": "Begrippen H8",
    "items": [
      [
        "het getal dat je keer zichzelf doet (bij 2⁵ is dit de 2)",
        "grondtal"
      ],
      [
        "het kleine getal bovenaan; zegt hoe vaak (bij 2⁵ is dit de 5)",
        "exponent"
      ],
      [
        "een grondtal met een exponent, zoals 2⁵",
        "macht"
      ],
      [
        "een los stukje van een som, gescheiden door + of −",
        "term"
      ],
      [
        "het getal vóór de letter (in 7a is dit de 7)",
        "coëfficiënt"
      ],
      [
        "termen met precies dezelfde letter(s); die mag je samennemen",
        "gelijksoortig"
      ],
      [
        "een som zo kort mogelijk schrijven",
        "herleiden"
      ],
      [
        "waarmee je keer doet om te groeien (×1,05 = 5% erbij)",
        "groeifactor"
      ]
    ]
  }
};

window.OPSTAP = {};

window.PROEFTOETS = [];

window.AANMOEDIGING = {
  "goed": [
    "Top!",
    "Goed bezig, Storm!",
    "Yes, gelukt!",
    "Knap hoor!",
    "Precies goed!",
    "Lekker!"
  ],
  "bijna": [
    "Bijna!",
    "Net niet — geeft niks.",
    "Dat hoort erbij, probeer 't nog eens.",
    "Bijna goed!"
  ],
  "levelup": [
    "Level omhoog! 🚀",
    "Je gaat naar een hoger niveau!",
    "Knap — door naar het volgende! ✨"
  ],
  "leveldown": [
    "We pakken het rustig aan 💛",
    "Even een stapje terug, samen oefenen we dit.",
    "Geen stress — we doen het rustig."
  ],
  "stapelklaar": [
    "Stapel klaar! 🎉",
    "Lekker gedaan, Storm! 🌟",
    "Helemaal af! 💪"
  ]
};

/* =========================================================================
   GENERATORS — parametrische vraag-sjablonen per onderwerp×niveau.
   Elke functie levert een VERS vraagobject (met willekeurige getallen binnen
   een vaste moeilijkheidsband). De engine mengt deze met roterende vaste
   vragen, zodat elke ronde anders is en Storm de antwoorden niet uit het
   hoofd kan leren. Reken-types (stap/bouw/velden) → math.js kijkt numeriek na.
   Elk object heeft w + meer, zodat een FOUT antwoord altijd uitleg geeft.
   ========================================================================= */
(function(){
  const ri  = (lo,hi)=> lo + Math.floor(Math.random()*(hi-lo+1));
  const pick= a => a[Math.floor(Math.random()*a.length)];
  const pe  = e => (e && e!==1) ? "^"+e : "";              // exponent-suffix (^1 = niets)
  // coëfficiënt·letter(^exp): 0→"0", ±1·x→±x, kale constante als L leeg is
  function co(c, L, e){
    if(c===0) return "0";
    const pw = (e && e>1) ? "^"+e : "";
    if(!L) return String(c);
    const mag = (Math.abs(c)===1) ? "" : Math.abs(c);
    return (c<0?"-":"") + mag + L + pw;
  }
  // polynoom uit termen [{c,v,e}], nette tekens, 0-termen weg
  function poly(terms){
    const t = terms.filter(x=>x && x.c!==0);
    if(!t.length) return "0";
    let s = co(t[0].c, t[0].v, t[0].e);
    for(let i=1;i<t.length;i++){ const x=t[i]; s += (x.c<0?" - ":" + ") + co(Math.abs(x.c), x.v, x.e); }
    return s;
  }
  const G = {};

  /* ---------- 8.1 HERLEIDEN ---------- */
  G.herleiden_n1 = [
    ()=>{ const L=pick(["a","b","x","y","p","q"]), a=ri(2,9), b=ri(2,9), s=a+b;
      return { t:"stap", opgave:`${a}${L} + ${b}${L}`, vars:[L],
        w:`${a} + ${b} = ${s}, en de ${L} blijft staan.`,
        meer:`${a}${L} + ${b}${L} = (${a} + ${b})${L} = ${s}${L}.`,
        stappen:[{ prompt:"Neem de gelijksoortige termen samen", a:`${s}${L}`,
          hints:[`${a}${L} en ${b}${L} zijn allebei '${L}' → tel ${a} + ${b}`, `${a} + ${b} = ${s}, dus ${s}${L}`] }] }; },
    ()=>{ const L=pick(["a","b","x","y"]), a=ri(2,7), b=ri(2,6), c=ri(2,9), s=a+b;
      return { t:"stap", opgave:`${co(a,L)} + ${c} + ${co(b,L)}`, vars:[L],
        w:`${a}${L} + ${b}${L} = ${s}${L}; de ${c} blijft los.`,
        meer:`Tel de ${L}-termen: ${a}${L} + ${b}${L} = ${s}${L}. De ${c} is geen ${L} → die blijft staan: ${s}${L} + ${c}.`,
        stappen:[
          { prompt:`Neem de ${L}-termen samen`, a:`${s}${L}`, hints:[`${a}${L} + ${b}${L}`, `${a} + ${b} = ${s} → ${s}${L}`] },
          { prompt:"Schrijf nu de hele herleiding op", a:`${s}${L} + ${c}`, hints:[`De ${c} hoort er los bij`, `${s}${L} + ${c}`] } ] }; }
  ];
  G.herleiden_n2 = [
    ()=>{ const L=pick(["x","a","y","p"]), A=ri(2,6), B=ri(2,6), C=ri(2,6), D=ri(2,5);
      const s1=pick([1,-1]), s2=pick([1,-1]), p1=s1*A*B, p2=s2*C*D, res=p1+p2;
      const opg = `${s1<0?"-":""}${A}·${B}${L} ${s2<0?"- ":"+ "}${C}·${D}${L}`;
      return { t:"stap", opgave:opg, vars:[L],
        w:"Eerst keer, dan samennemen.",
        meer:`${s1<0?"-":""}${A}·${B}${L} = ${p1}${L} en ${s2<0?"-":"+"}${C}·${D}${L} = ${s2<0?"-":""}${C*D}${L}. Samen: ${poly([{c:p1,v:L},{c:p2,v:L}])} = ${co(res,L)}.`,
        stappen:[
          { prompt:"Reken eerst de twee producten uit", a:poly([{c:p1,v:L},{c:p2,v:L}]),
            hints:[`${s1<0?"-":""}${A}·${B}${L} = ${p1}${L}`, `${s2<0?"-":"+"}${C}·${D}${L} = ${s2<0?"-":""}${C*D}${L}`] },
          { prompt:"Neem nu samen", a:co(res,L),
            hints:[`${poly([{c:p1,v:L},{c:p2,v:L}])} = (${p1} + ${p2})${L}`, `${p1} + ${p2} = ${res} → ${co(res,L)}`] } ] }; }
  ];
  G.herleiden_n3 = [
    ()=>{ const X=pick(["a","p","x"]), Y=pick(["b","q","y"]);
      const a=ri(3,8), b=ri(3,8), c=ri(1,a-1), d=ri(1,b-1), rx=a-c, ry=b-d;
      const terms=[{c:a,v:X},{c:b,v:Y},{c:-c,v:X},{c:-d,v:Y}];
      // schud de volgorde van de opgave een beetje (eerste term blijft positief)
      const rest=[terms[1],terms[2],terms[3]]; for(let i=rest.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[rest[i],rest[j]]=[rest[j],rest[i]];}
      const opg=poly([terms[0],...rest]);
      return { t:"bouw", q:`Herleid: ${opg}`, a:poly([{c:rx,v:X},{c:ry,v:Y}]), vars:[X,Y],
        w:`Neem de ${X}'en samen en de ${Y}'s samen.`,
        meer:`${X}-termen: ${a}${X} - ${c}${X} = ${co(rx,X)}. ${Y}-termen: ${b}${Y} - ${d}${Y} = ${co(ry,Y)}. Samen: ${poly([{c:rx,v:X},{c:ry,v:Y}])}.` }; }
  ];

  /* ---------- 8.2 HAAKJES ---------- */
  G.haakjes_n1 = [
    ()=>{ const L=pick(["a","x","p"]), k=ri(2,6), b=ri(1,9), s=pick([1,-1]);
      const opg=`${k}(${L} ${s<0?"-":"+"} ${b})`, ans=poly([{c:k,v:L},{c:s*k*b,v:""}]);
      return { t:"stap", opgave:opg, vars:[L],
        w:`De ${k} gaat langs de ${L} én langs de ${b}.`,
        meer:`${opg} = ${k}·${L} ${s<0?"-":"+"} ${k}·${b} = ${ans}.`,
        stappen:[{ prompt:"Werk de haakjes weg", a:ans,
          hints:[`${k}·${L} = ${co(k,L)}`, `${k}·${b} = ${k*b} (teken: ${s<0?"min":"plus"})`] }] }; },
    ()=>{ const L=pick(["a","x"]), j=ri(2,5), k=ri(2,5), b=ri(2,9), s=pick([1,-1]);
      const opg=`${j}(${co(k,L)} ${s<0?"-":"+"} ${b})`, ans=poly([{c:j*k,v:L},{c:s*j*b,v:""}]);
      return { t:"stap", opgave:opg, vars:[L],
        w:`De ${j} gaat langs ${co(k,L)} én langs de ${b}.`,
        meer:`${opg} = ${j}·${co(k,L)} ${s<0?"-":"+"} ${j}·${b} = ${ans}.`,
        stappen:[{ prompt:"Werk de haakjes weg", a:ans,
          hints:[`${j}·${k}${L} = ${j*k}${L}`, `${j}·${b} = ${j*b} (teken: ${s<0?"min":"plus"})`] }] }; }
  ];
  G.haakjes_n2 = [
    ()=>{ const L=pick(["a","x","p"]), M=pick(["b","y","q"]), j=ri(2,5), k=ri(2,5), m=ri(2,8), s=pick([1,-1]);
      const opg=`${j}${L}(${k}${M} ${s<0?"-":"+"} ${m})`;
      const ans=`${j*k}${L}${M} ${s<0?"- ":"+ "}${j*m}${L}`;
      return { t:"bouw", q:`Werk de haakjes weg: ${opg}`, a:ans, vars:[L,M],
        w:`Alles vóór de haak (${j}${L}) gaat langs elk stukje.`,
        meer:`${opg} = ${j}${L}·${k}${M} ${s<0?"-":"+"} ${j}${L}·${m} = ${j*k}${L}${M} ${s<0?"-":"+"} ${j*m}${L}.` }; }
  ];
  G.haakjes_n3 = [
    ()=>{ const L=pick(["p","a","x"]), M=pick(["q","b","y"]), k=ri(2,6), a=ri(1,5), b=ri(1,5);
      const opg=`-${k}(${co(a,L)} - ${co(b,M)})`, ans=poly([{c:-k*a,v:L},{c:k*b,v:M}]);
      return { t:"bouw", q:`Werk de haakjes weg: ${opg}`, a:ans, vars:[L,M],
        w:`Een min vóór de haak draait elk teken binnen de haak om.`,
        meer:`${opg} = -${k}·${co(a,L)} + ${k}·${co(b,M)} = ${ans}. (min·min = plus bij de tweede term.)` }; }
  ];

  /* ---------- 8.3 MACHTEN ---------- */
  G.machten_n1 = [
    ()=>{ const b=ri(2,6), e=pick([2,3]), val=Math.pow(b,e), prod=Array(e).fill(b).join("·");
      return { t:"stap", opgave:`${b}^${e}`, vars:[],
        w:`${b}^${e} = ${e} keer de ${b} keer elkaar.`,
        meer:`${b}^${e} = ${prod} = ${val}. (Niet ${b}·${e} = ${b*e}!)`,
        stappen:[
          { prompt:`Schrijf ${b}^${e} als keer-som`, a:prod, hints:[`De exponent ${e} zegt: schrijf de ${b} ${e} keer op`, `Met keer-tekens ertussen: ${prod}`] },
          { prompt:"Reken nu uit", a:String(val), hints:[`${prod}`, `= ${val}`] } ] }; }
  ];
  G.machten_n2 = [
    ()=>{ const b=ri(2,5), e=pick([2,3,4]), val=Math.pow(-b,e), prod=Array(e).fill(`(-${b})`).join("·");
      return { t:"stap", opgave:`(-${b})^${e}`, vars:[],
        w: e%2===0 ? `Even exponent → plus-antwoord.` : `Oneven exponent → min-antwoord.`,
        meer:`(-${b})^${e} = ${prod} = ${val}. ${e%2===0?"Even aantal minnen → plus.":"Oneven aantal minnen → min."}`,
        stappen:[{ prompt:`Bereken (-${b})^${e}`, a:String(val),
          hints:[`${e} is ${e%2===0?"even → plus":"oneven → min"}`, `${prod} = ${val}`] }] }; }
  ];
  G.machten_n3 = [
    ()=>{ const b=ri(2,5), e=pick([2,3,4]), val=Math.pow(-b,e);
      return { t:"stap", opgave:`(-${b})^${e}`, vars:[],
        w:`Mét haakjes telt de min mee in de macht.`,
        meer:`(-${b})^${e} = ${Array(e).fill(`(-${b})`).join("·")} = ${val}.`,
        stappen:[{ prompt:`Bereken (-${b})^${e} (let op de haakjes!)`, a:String(val),
          hints:[`De min zit ín de haakjes, dus telt mee`, `= ${val}`] }] }; },
    ()=>{ const b=ri(2,5), e=pick([2,3,4]), pw=Math.pow(b,e), val=-pw;
      return { t:"stap", opgave:`-${b}^${e}`, vars:[],
        w:`Geen haakjes om de basis → eerst de macht, het minteken blijft ervoor.`,
        meer:`Zonder haakjes telt de min niet mee in de macht: -${b}^${e} = -(${b}^${e}) = -${pw} = ${val}.`,
        stappen:[{ prompt:`Bereken -${b}^${e} (geen haakjes om de ${b}!)`, a:String(val),
          hints:[`Eerst ${b}^${e} = ${pw}`, `De min blijft ervoor: ${val}`] }] }; }
  ];

  /* ---------- 8.4 WETENSCHAPPELIJKE NOTATIE ---------- */
  G.wetenschappelijk_n1 = [
    ()=>{ const d=ri(2,9), n=ri(2,6), num=d*Math.pow(10,n);
      return { t:"velden", q:`Schrijf ${num} in wetenschappelijke notatie. Vul de twee delen in.`,
        velden:[ {label:"Het getal tussen 1 en 10 (a) =", a:String(d)}, {label:"De macht van 10 (n) =", a:String(n)} ],
        w:`a = ${d} en de komma schuift ${n} plaatsen.`,
        meer:`${num} = ${d}·10^${n}. Want de ${d} met ${n} nullen erachter is ${num}.` }; }
  ];
  G.wetenschappelijk_n2 = [
    ()=>{ const d1=ri(1,9), d2=ri(1,9), zeros=ri(2,7), numStr=`${d1}${d2}`+"0".repeat(zeros), num=Number(numStr), n=numStr.length-1, mant=`${d1},${d2}`;
      return { t:"stap", opgave:`Schrijf ${num} in wetenschappelijke notatie`, vars:[],
        w:`a = ${mant} en de komma schuift ${n} plaatsen.`,
        meer:`Zet de komma achter het eerste cijfer: ${mant}. Van ${mant} naar ${num} is ${n} keer schuiven, dus ${mant}·10^${n}.`,
        stappen:[
          { prompt:"Wat is het getal tussen 1 en 10 (de mantisse)?", a:mant, hints:[`Zet de komma vlak achter het eerste cijfer (${d1}).`, `Daarna komt ${d2}. Dus ${mant}.`] },
          { prompt:"Hoeveel plaatsen schuift de komma (de macht van 10)?", a:String(n), hints:[`Tel van ${mant} naar ${num}.`, `Dat zijn ${n} plaatsen.`] } ] }; }
  ];
  G.wetenschappelijk_n3 = [
    ()=>{ const d1=ri(1,9), d2=ri(1,9), d3=ri(1,9), zeros=ri(3,7), numStr=`${d1}${d2}${d3}`+"0".repeat(zeros), num=Number(numStr), n=numStr.length-1, mant=`${d1},${d2}${d3}`;
      return { t:"velden", q:`Schrijf het grote getal ${num} in wetenschappelijke notatie.`,
        velden:[ {label:"Het getal tussen 1 en 10 (a) =", a:mant}, {label:"De macht van 10 (n) =", a:String(n)} ],
        w:`a = ${mant} en de komma schuift ${n} plaatsen naar links.`,
        meer:`${num} = ${mant}·10^${n}. Tel de plaatsen van ${mant} terug naar ${num}: dat zijn er ${n}.` }; },
    ()=>{ const d1=ri(1,9), d2=ri(0,9), lead=ri(2,4), n=lead+1, mant=(d2===0?`${d1}`:`${d1},${d2}`), decStr=`0,${"0".repeat(lead)}${d1}${d2}`;
      return { t:"velden", q:`Schrijf het kleine getal ${decStr} in wetenschappelijke notatie.`,
        velden:[ {label:"Het getal tussen 1 en 10 (a) =", a:mant}, {label:"De macht van 10 (n) =", a:`-${n}`} ],
        w:`Klein getal → de macht is negatief: a = ${mant}, n = -${n}.`,
        meer:`Bij ${decStr} staat het eerste cijfer op de ${n}e plaats achter de komma → ${mant}·10^-${n}.` }; }
  ];

  /* ---------- 8.5 MACHTEN MET LETTERS ---------- */
  G.machtenletters_n1 = [
    ()=>{ const L=pick(["a","x","p","y"]), k=ri(3,6), prod=Array(k).fill(L).join("·");
      return { t:"stap", opgave:prod, vars:[L],
        w:`${k} keer ${L} keer elkaar = ${L}^${k}.`,
        meer:`Tel hoe vaak ${L} er staat: ${k} keer. Dus ${prod} = ${L}^${k}.`,
        stappen:[{ prompt:"Schrijf als macht", a:`${L}^${k}`, hints:[`Tel het aantal ${L}'en: ${k}`, `${L}^${k}`] }] }; },
    ()=>{ const L=pick(["a","x","p"]), p=ri(2,6), q=ri(1,5);
      return { t:"stap", opgave:`${L}${pe(p)}·${L}${pe(q)}`, vars:[L],
        w:`Keer met hetzelfde grondtal → exponenten optellen: ${p}+${q}=${p+q}.`,
        meer:`${L}${pe(p)}·${L}${pe(q)} = ${L}^(${p}+${q}) = ${L}^${p+q}.`,
        stappen:[{ prompt:"Herleid (tel de exponenten op)", a:`${L}^${p+q}`, hints:[`Zelfde grondtal ${L}, dus ${p} + ${q}`, `${L}^${p+q}`] }] }; }
  ];
  G.machtenletters_n2 = [
    ()=>{ const L=pick(["a","x"]), C=ri(2,6), D=ri(2,6), p=ri(2,5), q=ri(2,4);
      return { t:"bouw", q:`Herleid: ${C}${L}${pe(p)}·${D}${L}${pe(q)}`, a:`${C*D}${L}^${p+q}`, vars:[L],
        w:`Getallen keer: ${C}·${D}=${C*D}. Exponenten plus: ${p}+${q}=${p+q}.`,
        meer:`${C}${L}^${p}·${D}${L}^${q} = (${C}·${D})${L}^(${p}+${q}) = ${C*D}${L}^${p+q}.` }; },
    ()=>{ const L=pick(["a","x"]), p=ri(2,5), C=ri(2,9), D=ri(2,9), s=pick([1,-1]), res=C+s*D;
      const opg=`${C}${L}${pe(p)} ${s<0?"-":"+"} ${D}${L}${pe(p)}`;
      return { t:"bouw", q:`Herleid: ${opg}`, a:co(res,L,p), vars:[L],
        w:`Gelijke letter én exponent → tel de getallen: ${C} ${s<0?"-":"+"} ${D} = ${res}. De ${L}^${p} blijft staan.`,
        meer:`${opg} = (${C} ${s<0?"-":"+"} ${D})${L}^${p} = ${co(res,L,p)}.` }; }
  ];
  G.machtenletters_n3 = [
    ()=>{ const L=pick(["a","x"]), C=ri(2,7), D=pick([1,ri(2,6)]), p=ri(2,5), q=pick([1,ri(2,4)]), s=pick([1,-1]), res=s*C*D;
      const t1=`${s<0?"-":""}${C}${L}${pe(p)}`, t2=`${D===1?L:D+L}${pe(q)}`, opg=`${t1}·${t2}`;
      return { t:"bouw", q:`Herleid: ${opg}`, a:co(res,L,p+q), vars:[L],
        w:`Getallen keer (${s<0?"-":""}${C}·${D}=${res}), exponenten plus (${p}+${q}=${p+q}).`,
        meer:`${opg} = ${co(res,L,p+q)}.` }; }
  ];

  window.GENERATORS = G;
})();

