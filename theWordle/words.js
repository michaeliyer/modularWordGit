
import { oldWords } from '../oldWords.js';
// prettier-ignore
  let newWords = [
        'ABBOT', 'ABHOR', 'ABLED', 'ABODE', 'ABORT', 'ABUSE', 'ACORN', 'ADEPT', 'ADMIN',
        'ADORN', 'AFIRE', 'AFOOT', 'AFOUL', 'AIDER', 'ALARM', 'ALERT', 'ALGAE',
        'ALIBI', 'ALIGN', 'ALLAY', 'ALLEY', 'ALLOT', 'ALLOY', 'ALONG', 'AMAZE', 'AMBLE', 'AMEND',
        'AMITY', 'AMONG', 'AMPLY', 'AMUSE', 'ANGLE', 'ANIME', 'ANKLE', 'ANNEX', 'ANNOY',
        'ANNUL', 'APING', 'APNEA', 'ARENA', 'ARISE', 'ARMOR', 'AROSE', 'ARRAY', 'ARROW',
        'ARSON', 'ARTSY', 'ASHEN', 'ASSAY', 'ATTIC', 'AUGUR', 'AUNTY', 'AVIAN', 'AVOID', 'AWARD',
        'AWARE', 'AWOKE', 'AXIAL', 'AXION', 'BAGGY', 'BALER', 'BALMY', 'BANJO', 'BARON',
        'BASAL', 'BASIL', 'BASIS', 'BASTE', 'BATCH', 'BEARD', 'BEECH', 'BEFIT',
        'BEGAN', 'BEGAT', 'BEGUN', 'BELLE', 'BERRY', 'BETEL', 'BEZEL', 'BIBLE', 'BICEP',
        'BIDDY', 'BIGOT', 'BILGE', 'BILLY', 'BINGO', 'BISON', 'BITTY', 'BLANK', 
        'BLAST', 'BLEAT', 'BLEND', 'BLESS', 'BLIND', 'BLINK', 'BLISS', 'BLITZ',
        'BLOAT', 'BLOOD', 'BLOOM', 'BLUER', 'BLUNT', 'BOARD', 'BOBBY', 'BONEY', 'BONGO', 
        'BOOTH', 'BOOTY', 'BORNE', 'BOSOM', 'BOTCH', 'BOULE', 'BOUND', 'BOWEL', 
        'BRAND', 'BRAWL', 'BRICK', 'BROIL', 'BROOD', 
        'BRUNT', 'BUDGE', 'BULGE', 'BUNNY', 'BURNT', 'BURST', 'BUSED', 'BUSHY', 'BUTCH', 
        'BUTTE', 'BUXOM', 'BUYER', 'BYLAW', 'CABAL', 'CABBY', 'CABIN', 'CACTI', 'CADDY', 'CAGEY', 
        'CAIRN', 'CANAL', 'CAPUT', 'CASTE', 'CATTY', 'CAVIL', 'CEASE', 'CELLO', 'CHAFF', 
        'CHAIR', 'CHASE', 'CHASM', 'CHECK', 'CHESS', 'CHICK', 'CHIDE', 'CHILI', 'CHINA',
        'CHIRP', 'CHUCK', 'CHUMP', 'CHURN', 'CIVIL', 'CLACK', 'CLAIM',
        'CLAMP', 'CLANG', 'CLANK', 'CLASH', 'CLASP', 'CLEAT', 'CLIFF', 'CLINK', 
        'CLOUT', 'CLOVE', 'CLUED', 'CLUMP', 'CLUNG', 'COBRA', 'COLOR', 'COMFY', 'COMIC', 'CONCH',
        'COPSE', 'CORAL', 'COUCH', 'COUGH', 'COUPE', 'COVEN', 'COVEY', 'CRACK', 'CRASH',
        'CREAM', 'CREED', 'CREEK', 'CREEP', 'CREME', 'CRESS', 'CREST', 'CRICK',
        'CRIED', 'CRIER', 'CROCK', 'CRONY', 'CROOK', 'CROUP', 'CRUDE',
        'CRUEL', 'CRUMP', 'CUBIC', 'CURIO', 'CURRY', 'CURSE', 'CURVE', 'CURVY',
        'CUTIE', 'CYCLE', 'DAILY', 'DAIRY', 'DALLY', 'DATUM', 'DAUNT', 'DEALT', 'DEBAR',
        'DECOR', 'DEFER', 'DEIGN', 'DEITY', 
        'DEMON', 'DEMUR', 'DENSE', 'DERBY', 'DETOX', 'DEUCE', 'DILLY', 'DIMLY',
        'DIODE', 'DIRGE', 'DIRTY', 'DITCH', 'DITTY', 'DIVER', 'DIZZY', 'DODGY',
        'DOPEY', 'DOUGH', 'DOWDY', 'DOWEL', 'DOWNY', 'DRAKE', 'DRAMA',
        'DRANK', 'DRAPE', 'DRAWL', 'DREAD', 'DRESS', 'DRIED', 'DRIER', 'DRIFT', 'DRILL',
        'DROIT', 'DRONE', 'DROSS', 'DROWN', 'DRUID', 'DRUNK', 'DRYER', 'DRYLY',
        'DULLY', 'DUMMY', 'DUMPY', 'DUNCE', 'DUSKY', 'DUSTY', 'DYING', 'EAGER',  
        'EATEN', 'EATER', 'ECLAT', 'EDIFY', 'EERIE', 'EIGHT', 'EKING', 'ELATE', 'ELBOW', 'ELECT',
        'ELEGY', 'ELFIN', 'ELIDE', 'ELITE', 'EMBED', 'EMCEE', 'ENEMY', 
        'ENTRY', 'ENVOY', 'ERASE', 'ERECT', 'ESTER', 'ETUDE', 'EVICT',
        'EXILE', 'EXTOL', 'EYING', 'FABLE', 'FACET', 'FAIRY', 
        'FANNY', 'FATAL', 'FATTY', 'FAUNA', 'FECAL', 'FELLA', 'FELON', 'FEMME', 'FEMUR', 'FENCE',
        'FETAL', 'FETCH', 'FETID', 'FETUS', 'FICUS', 'FIERY', 'FIFTH',
        'FIGHT', 'FILER', 'FILLY', 'FILMY', 'FILTH', 'FIZZY', 'FLACK', 'FLAKY',
        'FLECK', 'FLEET', 'FLIER', 'FLUID', 'FLUKE',
        'FLUSH', 'FLUTE', 'FOAMY', 'FOIST', 'FOLIO', 'FORUM', 'FRAUD',
        'FREAK', 'FREED', 'FREER', 'FRIAR', 'FRILL', 'FRISK', 'FRITZ', 'FRUIT', 'FUDGE',
        'FUGUE', 'FUROR', 'FURRY', 'FUSSY', 'FUZZY', 'GABLE', 'GAFFE', 'GAILY',
        'GASSY', 'GAUGE', 'GAVEL', 'GAYER', 'GAYLY', 'GAZER', 'GEEKY', 'GEESE', 'GENIE', 'GHOST',
        'GIPSY', 'GIRLY', 'GIVER', 'GLADE', 'GLAND', 'GLARE', 'GLINT', 'GLOSS', 'GNOME',
        'GODLY', 'GOLLY', 'GONAD', 'GOODY', 'GOOEY', 'GOURD', 'GRAFT', 
        'GRAPE', 'GRASS', 'GRAVE', 'GRAVY', 'GRAZE', 'GREED', 'GRILL', 'GROAN',
        'GROPE', 'GROSS', 'GROWN', 'GRUFF', 'GRUNT', 'GUAVA', 'GUESS', 'GUILT',
        'GUISE', 'GULCH', 'GUMBO', 'GUSTO', 'GYPSY', 'HABIT', 'HALAL', 
        'HARDY', 'HAREM', 'HARPY', 'HARRY', 'HASTE', 'HASTY', 'HAUNT', 'HAUTE', 'HAVEN',
        'HAZEL', 'HEDGE', 'HIPPY', 'HOIST', 'HOLLY',
        'HONOR', 'HORNY', 'HOTLY', 'HOVEL', 'HOVER', 'HUMUS', 'HUSKY', 'HUSSY', 'HYDRO',
        'HYMEN', 'ICILY', 'IDEAL', 'IDIOM', 'IDIOT', 'IDLER', 'IDYLL', 'ILIAC',
        'IMBUE', 'IMPLY', 'INBOX', 'INCUR', 'INGOT', 'INLET', 'ISSUE', 
        'JETTY', 'JEWEL', 'JOIST', 'JUICY', 'JUMBO', 'JUMPY', 'JUNTA',
        'JUNTO', 'JUROR', 'KAPPA', 'KINKY', 'KITTY', 'KNEED', 'KNIFE',
        'KNOWN', 'KRILL', 'LADEN', 'LADLE', 'LANCE', 'LASSO', 'LATCH', 'LATER',
        'LATHE', 'LAUGH', 'LEACH', 'LEANT', 'LEASE', 'LEAST', 'LEFTY', 'LEGAL',
        'LEPER', 'LEVEL', 'LEVER', 'LIEGE', 'LIKEN', 'LIMBO', 'LIPID', 'LIVID', 'LLAMA',
        'LOAMY', 'LOATH', 'LOBBY', 'LODGE', 'LOGIN', 'LOOSE', 'LORRY', 'LOUSY', 'LUMEN',
        'LUMPY', 'LUPUS', 'LURCH', 'LURID', 'LYMPH', 'LYRIC', 'MACHO', 'MACRO', 'MADLY',
        'MAFIA', 'MAKER', 'MAMMA', 'MAMMY', 'MANGE', 'MANGO', 'MANGY', 'MANIC',
        'MEATY', 'MECCA', 'MELEE', 'MIGHT', 'MILKY',
        'MINIM', 'MINOR', 'MINTY', 'MIRTH', 'MISER', 'MISSY', 'MOCHA', 'MODAL', 
        'MOGUL', 'MOLDY', 'MOODY', 'MORAL', 'MORON', 'MORPH', 'MOTEL', 'MOTIF', 'MOUND', 'MOUTH', 
        'MOVER', 'MOWER',
        'MUCUS', 'MUDDY', 'MUNCH', 'MURKY', 'MUSKY', 'MYRRH', 'NACHO', 'NADIR', 'NASAL',
        'NAVEL', 'NEWER', 'NEWLY', 'NIECE', 'NINNY',
        'NOBLY', 'NOISY', 'NOMAD', 'NOOSE', 'NOSEY', 'NOTCH', 'NOVEL', 'NUDGE', 'NURSE', 'NUTTY',
        'NYLON', 'OAKEN', 'OBESE', 'OCTAL', 'ODDER', 'ODDLY', 'OFFER', 'OLDEN', 'OMBRE',
        'OMEGA', 'OPINE', 'OPIUM', 'OPTIC', 'ORBIT', 'OTTER', 'OUTGO',
        'OVARY', 'OVATE', 'OVINE', 'OVOID', 'OWING', 'OZONE', 'PADDY', 'PAGAN', 
        'PALER', 'PALSY', 'PANSY', 'PARKA', 'PARSE', 'PASTE', 'PASTY', 'PATCH',
        'PATSY', 'PAYEE', 'PAYER', 'PECAN', 'PENAL', 'PENCE', 'PENNY',
        'PEONY', 'PERIL', 'PESTO', 'PETAL', 'PETTY', 'PIECE', 'PIGGY', 'PITCH', 'PIVOT', 'PIZZA',
        'PLAID', 'PLAIN', 'PLANE', 'PLEAD', 'PLIED', 'PLIER', 'PLUME', 'PLUMP', 'PLUSH',
        'POESY', 'POLAR', 'POOCH', 'POPPY', 'POSER', 'POSIT', 'POSSE', 'POUCH', 'POUTY',
        'PRANK', 'PRAWN', 'PREEN', 'PRIED', 'PRISM', 'PRIVY', 
        'PROOF', 'PRUDE', 'PUBIC', 'PUDGY', 'PUFFY', 'PULSE', 'PUNCH', 
        'PUPPY', 'PUREE', 'PURER', 'PURSE', 'PUSHY', 'PUTTY', 'PYGMY', 'QUACK', 'QUAIL', 'QUAKE',
        'QUARK', 'QUASH', 'QUASI', 'QUEER', 'QUELL', 'QUILL', 'QUILT', 'QUOTA', 'QUOTH',
        'RABBI', 'RABID', 'RACER', 'RADAR', 'RADII', 'RAJAH', 'RALLY', 'RALPH', 'RANDY', 
        'RARER', 'RASPY', 'RATTY', 'RAVEN', 'RAZOR', 'REARM', 'REBAR', 
        'RECUT', 'REEDY', 'REFIT', 'REHAB', 'REIGN', 'RELAY', 'REMIT',
        'RENAL', 'REPLY', 'RESET', 'REUSE', 'RICER', 'RIFLE', 'RIGID',
        'RIGOR', 'RINSE', 'RIPEN', 'RISER', 'RISKY', 'RIVER', 'ROACH', 'ROAST', 'ROGER',
        'ROOST', 'ROTOR', 'ROUGH', 'ROWDY', 'RUGBY', 'RULER', 'RUMOR', 'RURAL',
        'SADLY', 'SAFER', 'SALON', 'SALVE', 'SALVO', 'SANER', 'SAPPY', 'SATIN', 'SATYR', 
        'SAUCE', 'SAVOY', 'SAVVY', 'SCALP', 'SCALY', 'SCAMP', 'SCARY', 
        'SCENE', 'SCION', 'SCOOP', 'SCREE', 'SCREW', 'SCRUM',
        'SCUBA', 'SEGUE', 'SEIZE', 'SEMEN', 'SEPIA', 'SERIF', 'SETUP', 'SEWER', 'SHACK',
        'SHADY', 'SHALE', 'SHALT', 'SHARK', 'SHEAR',
        'SHEEN', 'SHEEP', 'SHEER', 'SHEET', 'SHEIK', 'SHELF', 'SHIED', 'SHINY', 'SHIRT',
        'SHOAL', 'SHOCK', 'SHONE', 'SHOOK', 'SHOOT', 'SHORT', 'SHREW',
        'SHUCK', 'SHUSH', 'SIEVE', 'SIGMA', 'SILKY', 'SINEW', 'SINGE', 'SIREN',
        'SIXTY', 'SKULK', 'SKULL', 'SLACK', 'SLAIN', 'SLANT', 'SLASH', 'SLAVE', 
        'SLEET', 'SLEPT', 'SLICK', 'SLIDE', 'SLIME', 'SLIMY', 'SLING', 'SLINK',
        'SLOOP', 'SLUNK', 'SLURP', 'SLUSH', 'SLYLY', 'SMACK', 'SMELL', 'SMOKY',
        'SMOTE', 'SNEER', 'SNIDE', 'SNIFF', 'SNIPE', 'SNORE', 'SNOWY', 'SNUCK', 'SNUFF',
        'SOAPY', 'SOBER', 'SONAR', 'SOOTH', 'SOOTY', 'SORRY', 'SOUTH', 'SPANK', 'SPARE', 'SPARK',
        'SPASM', 'SPAWN', 'SPEAR', 'SPEED', 'SPERM', 'SPIED', 'SPIKY', 'SPILT', 
        'SPINY', 'SPITE', 'SPLIT', 'SPOIL', 'SPOOF', 'SPOOK', 'SPOOL', 'SPORE', 'SPORT',
        'SPREE', 'SPUNK', 'SPURN', 'SQUIB', 'STACK', 'STALK', 'STAMP', 'STANK', 'STAVE', 'STEAK', 
        'STEAL', 'STEER', 'STILT', 'STOKE', 'STOOD', 'STOOP', 'STORK', 'STRIP', 'STRUT', 'STUCK', 
        'STUFF', 'STUMP', 'STUNK', 'STUNT', 'SUAVE', 'SUING',
        'SUITE', 'SULLY', 'SUMAC', 'SURGE', 'SWAMI', 'SWAMP', 'SWARM', 'SWASH',
        'SWEAR', 'SWEPT', 'SWIFT', 'SWING', 'SWOOP', 'SWORD', 'SWORE', 
        'SWORN', 'SYNOD', 'TABBY', 'TAFFY', 'TAINT', 'TAKER', 'TAMER',      
        'TANGO', 'TAROT', 'TATTY', 'TEDDY', 'TEETH', 'TENET', 'TENOR', 'TENSE', 'TEPEE', 
        'TERRA', 'TESTY', 'THEFT', 'THETA', 'THICK', 'THONG', 'THROB', 
        'THRUM', 'TIGHT', 'TIMER', 'TODDY', 'TOKEN', 'TONAL',
        'TONER', 'TONGA', 'TORUS', 'TOWER', 'TRACK', 'TRAIL',
        'TRAMP', 'TREAD', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIPE', 'TROOP', 'TROUT', 'TRUCE',
        'TRUCK', 'TRUER', 'TRUMP', 'TRUNK', 'TUBAL', 'TUBER', 'TULIP', 'TULLE', 'TUMOR',
        'TURBO', 'TWEET', 'TWIXT', 'TYING', 'UMBRA', 'UNCUT', 'UNDID',
        'UNION', 'UNITY', 'UNSET', 'UNWED', 'URINE', 'UTILE', 'VALOR', 'VALVE', 'VAPOR',
        'VAUNT', 'VEGAN', 'VENUE', 'VERSE', 'VERSO', 'VICAR', 'VIGIL', 'VILLA',
        'VIPER', 'VIRUS', 'VISIT', 'VISTA', 'VIXEN', 'VOCAL', 'VOGUE', 
        'VOMIT', 'VOWEL', 'WAGER', 'WAIST', 'WAIVE', 'WARTY', 'WATER',
        'WAVER', 'WAXEN', 'WEAVE', 'WEEDY', 'WEIGH', 'WELCH', 'WELSH', 'WHARF', 'WHEAT',
        'WHITE', 'WHOLE', 'WHOSE', 'WIDER', 'WIDOW', 'WIDTH', 'WIELD', 'WIGHT',
        'WILLY', 'WIMPY', 'WINCH', 'WISER', 'WISPY', 'WITTY', 'WOMEN', 'WOODY', 'WOOLY',
        'WOOZY', 'WORTH', 'WOUND', 'WRACK', 'WRECK', 'WREST', 'WRING', 'WRYLY', 'YEAST',
        'ZONAL'
      ];
    
  let filteredWords = [...newWords];
  let history = [];
  
  document.addEventListener("DOMContentLoaded", () => {
    const resetButton1 = document.getElementById("resetButton1");
    const resetButton2 = document.getElementById("resetButton2");
    const submitButton = document.getElementById("submitButton");
    const toggleGroupOne = document.getElementById("toggleGroupOne");
    const groupOneSection = document.querySelector(".group-one");
    const applyFilterButton = document.getElementById("applyFilterButton");
    const fieldOne = document.querySelector(".field-one");
    const groupTwoSection = document.querySelector(".group-two");
    const toggleGroupTwo = document.getElementById("toggleGroupTwo");
    const toggleInstructions = document.getElementById("toggleInstructions");
    const instructions = document.getElementById("instructions");
    const toggleLookupButton = document.getElementById("toggleLookupButton");
    const lookupSection = document.getElementById("lookupSection");
    const lookupWordNumberButton = document.getElementById("lookupWordNumberButton");
    const undoButton = document.getElementById("undoButton");
  
    resetButton1.addEventListener("click", resetGroupOne);
    resetButton2.addEventListener("click", resetFilteredWords);
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      handleWordInput();
    });
    toggleGroupOne.addEventListener("click", function () {
      groupOneSection.classList.toggle("hidden");
    });
    toggleGroupTwo.addEventListener("click", function () {
      groupTwoSection.classList.toggle("hidden");
    });
    toggleInstructions.addEventListener("click", function () {
      instructions.classList.toggle("hidden");
    });
    applyFilterButton.addEventListener("click", handleApplyFilter);
    toggleLookupButton.addEventListener("click", function () {
      lookupSection.classList.toggle("hidden");
    });
    lookupWordNumberButton.addEventListener("click", function () {
      lookupWordNumber();
    });
    undoButton.addEventListener("click", handleUndo);
  });
  
  function doesNotContainLetter(letter) {
    return filteredWords.filter((word) => !word.includes(letter.toUpperCase()));
  }
  
  function containsLetterAtPosition(letter, position) {
    return filteredWords.filter((word) => word[position - 1] === letter.toUpperCase());
  }
  
  function containsLetterNotAtPosition(letter, position) {
    return filteredWords.filter((word) => {
      const upperLetter = letter.toUpperCase();
      return word.includes(upperLetter) && word[position - 1] !== upperLetter;
    });
  }
  function handleWordInput() {
    const inputWord = document.getElementById("wordInput").value.toLowerCase();
    const foundWord = oldWords.find((wordObj) => wordObj.word.toLowerCase() === inputWord);
  
    if (foundWord) {
      const averageScoreUpToDate = calculateAverageScoreUpToDate(foundWord.gameDate);
      const resultString = `'${foundWord.word}' was already used by Wordle on ${foundWord.gameDate}.<br> It was word #${foundWord.wordNumber}, 
          and you had a score of '${foundWord.myScore}'.<br> Your average score up to this date: ${averageScoreUpToDate}.<br> Do NOT guess '${foundWord.word}'.`;
      document.querySelector(".field-one").innerHTML = resultString;
    } else {
      const notFoundString = `The word "${inputWord}" was not found....<br> Feel free to guess the word "${inputWord}"`;
      document.querySelector(".field-one").innerHTML = notFoundString;
    }
  }
  
  function displayResults(results) {
    const resultsDiv = document.getElementById("filteredWords");
    const wordsList = results.join(", ");
    const totalWords = results.length;
    const listWithTotal = `${wordsList} (There are ${totalWords} words in this list!!!)`;
    resultsDiv.innerHTML = listWithTotal;
  }
  
  function resetFilteredWords() {
    filteredWords = [...newWords];
    displayResults(filteredWords);
    document.getElementById("filteredWords").innerHTML = "";
  }
  
  function calculateAverageScoreUpToDate(date) {
    const scoresUpToDate = oldWords.filter((wordObj) => new Date(wordObj.gameDate) <= new Date(date) && wordObj.myScore !== 0).map((wordObj) => wordObj.myScore);
    const totalScore = scoresUpToDate.reduce((acc, score) => acc + score, 0);
    const averageScore = scoresUpToDate.length > 0 ? (totalScore / scoresUpToDate.length).toFixed(6) : 0;
    return averageScore;
  }
  
  function lookupWordNumber() {
    const wordNumber = parseInt(document.getElementById("wordNumberInput").value);
    const foundWord = oldWords.find((wordObj) => wordObj.wordNumber === wordNumber);
  
    const wordDetailsDiv = document.getElementById("wordDetails");
    if (foundWord) {
      const averageScore = calculateAverageScoreUpToDate(foundWord.gameDate);
      wordDetailsDiv.innerHTML = `Word: ${foundWord.word}, Date: ${foundWord.gameDate}, My Score:
           ${foundWord.myScore}, Average Score: ${averageScore}`;
    } else {
      wordDetailsDiv.innerHTML = `Word # ${wordNumber} not found.`;
    }
  }
  
  function applyFilter(selectedFunction, letter, position) {
    switch (selectedFunction) {
      case "doesNotContainLetter":
        filteredWords = doesNotContainLetter(letter);
        break;
      case "containsLetterAtPosition":
        if (!position || position < 1 || position > 5) {
          alert("Please enter a valid position (1-5).");
          return;
        }
        filteredWords = containsLetterAtPosition(letter, position);
        break;
      case "containsLetterNotAtPosition":
        if (!position || position < 1 || position > 5) {
          alert("Please enter a valid position (1-5).");
          return;
        }
        filteredWords = containsLetterNotAtPosition(letter, position);
        break;
      case "containsRepeatingConsecutiveLetters":
        filteredWords = containsRepeatingConsecutiveLetters();
        break;
      case "containsDuplicateLetters":
        filteredWords = containsDuplicateLetters();
        break;
      default:
        alert("Please select a valid function.");
        return;
    }
  }
  
  function handleApplyFilter() {
    const letter = document.getElementById("letterInput").value;
    const position = parseInt(document.getElementById("positionInput").value);
    const selectedFunction = document.getElementById("functionSelect").value;
  
    if (!letter) {
      alert("Please enter a letter.");
      return;
    }
  
    // Save the current state of filteredWords before applying the new filter
    history.push([...filteredWords]);
  
    applyFilter(selectedFunction, letter, position);
  
    displayResults(filteredWords);
  }
  
  function handleUndo() {
    if (history.length > 0) {
      filteredWords = history.pop(); // Restore the previous state
      displayResults(filteredWords);
    } else {
      alert("No more actions to undo.");
    }
  }
  
  function resetGroupOne() {
    document.getElementById("wordInput").value = "";
    fieldOne.innerHTML = "";
    if (!groupOneSection.classList.contains("hidden")) {
      groupOneSection.classList.add("hidden");
    }
  }
  
  const toggleAverageScoreButton = document.getElementById("toggleAverageScoreButton");
  const averageScoreSection = document.getElementById("averageScoreSection");
  const calculateAverageButton = document.getElementById("calculateAverageButton");
  const averageScoreResult = document.getElementById("averageScoreResult");
  
  toggleAverageScoreButton.addEventListener("click", () => {
    averageScoreSection.classList.toggle("hidden");
  });
  
  calculateAverageButton.addEventListener("click", () => {
    const wordNumber1 = parseInt(document.getElementById("wordNumber1").value);
    const wordNumber2 = parseInt(document.getElementById("wordNumber2").value);
  
    if (isNaN(wordNumber1) || isNaN(wordNumber2)) {
      averageScoreResult.textContent = "Please enter valid numbers.";
      return;
    }
  
    const start = Math.min(wordNumber1, wordNumber2);
    const end = Math.max(wordNumber1, wordNumber2);
  
    const filteredWords = oldWords.filter((word) => word.wordNumber >= start && word.wordNumber <= end && word.myScore > 0);
  
    if (filteredWords.length === 0) {
      averageScoreResult.textContent = "Invalid Entry Jerk!";
      return;
    }
  
    const totalScore = filteredWords.reduce((sum, word) => sum + word.myScore, 0);
    const averageScore = totalScore / filteredWords.length;
  
    averageScoreResult.textContent = `Your average score between words #${start} and #${end} is a crisp ${averageScore.toFixed(6)} !`;
  });




 
  document.getElementById("footerClocks").style.border = "1px solid #ccc"; // Example of targeting the new ID 
// Function to format time in the "HH:MM:SS" format
function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Function to calculate time remaining until midnight in the Eastern Time Zone
function getTimeUntilMidnightEastern() {
  const now = new Date();

  // Convert current time to Eastern Time Zone
  const easternNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const midnight = new Date(easternNow);
  midnight.setHours(24, 0, 0, 0); // Set to midnight

  const diff = midnight - easternNow; // Difference in milliseconds

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to update time display every second
function updateFooter() {
  const now = new Date();

  // Get current Eastern Time
  const easternNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  // Update current time display
  document.getElementById("currentTime").textContent = `Current Eastern Time: ${formatTime(
    easternNow
  )}`;

  // Update countdown to midnight
  document.getElementById("countdownToMidnight").textContent = `Countdown to Midnight: ${getTimeUntilMidnightEastern()}`;
}

// Start the clock
setInterval(updateFooter, 1000);
updateFooter(); // Initial call


