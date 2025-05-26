
const quizData = {
  "variants": [
    [
      {
        "question": "Kako se kaže gužva u gradu na sarajevski način?",
        "options": [
          "Zastoj",
          "Katastrofa",
          "Haos",
          "Makar nema snijega"
        ],
        "correct": 2
      },
      {
        "question": "Koja igra je najčešća na sarajevskom igralištu?",
        "options": [
          "Šah s golubovima",
          "Lov na čevape",
          "Fudbal",
          "Trampolin curling"
        ],
        "correct": 2
      },
      {
        "question": "Šta NIJE sarajevski specijalitet?",
        "options": [
          "Burek",
          "Ćevapi",
          "Krofna s nutellom",
          "Sushi s ajvarom"
        ],
        "correct": 3
      }
    ],
    [
      {
        "question": "Kako se zna da si pravi Sarajlija u saobraćaju?",
        "options": [
          "Imaš tri telefona u ruci",
          "Voziš autom, ali ideš 100 metara",
          "Daješ zmigavac kao savjestan građanin",
          "Trubiš čim ti se promijene misli"
        ],
        "correct": 3
      },
      {
        "question": "Šta golubovi najviše vole na Baščaršiji?",
        "options": [
          "Pjevati",
          "Selfie s turistima",
          "Letiti oko Sebilja",
          "Igrati šah"
        ],
        "correct": 2
      },
      {
        "question": "Koji sarajevski simbol ima više slika na Instagramu nego Eiffelov toranj?",
        "options": [
          "Sebilj",
          "Vijećnica",
          "Žuta tabija",
          "Mrtva trka sa ćevapima"
        ],
        "correct": 0
      }
    ],
    [
      {
        "question": "Koja je najpoznatija sarajevska ptica?",
        "options": [
          "Orao s planine",
          "Golub s Baščaršije",
          "Flamingos iz Ilidže",
          "Vrabac Rambo"
        ],
        "correct": 1
      },
      {
        "question": "Koja rijeka prolazi kroz Sarajevo?",
        "options": [
          "Amazon",
          "Miljacka",
          "Coca-Cola",
          "Dunav"
        ],
        "correct": 1
      },
      {
        "question": "Koje životinje možeš vidjeti u sarajevskoj Pionirskoj dolini?",
        "options": [
          "Dinosaure",
          "Mačke na rolerima",
          "Pony konjiće i zečeve",
          "Leteće medvjede"
        ],
        "correct": 2
      }
    ],
    [
      {
        "question": "Koje godišnje doba u Sarajevu miriše na roštilj?",
        "options": [
          "Zima",
          "Ljeto",
          "Proljeće",
          "Jesen, kad se lišće začini"
        ],
        "correct": 1
      },
      {
        "question": "Šta nikad ne ide uz somun?",
        "options": [
          "Ćevapi",
          "Luk",
          "Nutella",
          "Jogurt"
        ],
        "correct": 2
      },
      {
        "question": "Koja je univerzalna valuta u Sarajevu osim KM?",
        "options": [
          "Somuni",
          "Keš",
          "Usputne kafe",
          "Gajba od piva"
        ],
        "correct": 2
      }
    ],
    [
      {
        "question": "Šta ćeš reći kad naručuješ pitu sa sirom?",
        "options": [
          "Burek sa sirom",
          "Sirnica",
          "Burek",
          "Sirni burek"
        ],
        "correct": 1
      },
      {
        "question": "Kako Sarajlije određuju pravac u gradu?",
        "options": [
          "Po GPS-u",
          "Po rijeci Miljacki",
          "Po kafanama",
          "Po uzbrdicama i nizbrdicama"
        ],
        "correct": 2
      },
      {
        "question": "Šta je najgora greška koju možeš napraviti na Baščaršiji?",
        "options": [
          "Tražiti kečap uz ćevape",
          "Ne hraniti golubove",
          "Reći da si iz Zagreba",
          "Pokušati platiti karticom"
        ],
        "correct": 0
      }
    ],
    [
      {
        "question": "Kako se najbrže hoda po Ferhadiji?",
        "options": [
          "Sporim korakom",
          "Brzim hodom",
          "Zmijastim putem kroz turiste",
          "Na rolama"
        ],
        "correct": 2
      },
      {
        "question": "Kako se zove tradicionalni bosanski napitak koji djeca mogu piti?",
        "options": [
          "Kahva",
          "Rakija",
          "Boza (sok)",
          "Energetski sok od pite"
        ],
        "correct": 2
      },
      {
        "question": "Koja pjesma ti automatski pušta suzu kad si van Sarajeva?",
        "options": [
          "Jutros mi je ruža procvjetala",
          "Despacito",
          "Smells Like Teen Spirit",
          "Gangnam Style"
        ],
        "correct": 0
      }
    ],
    [
      {
        "question": "Kako znaš da si blizu ćevabdžinice?",
        "options": [
          "Po mirisu",
          "Po golubima koji te prate",
          "Po ljudima koji pjevaju",
          "Po škripavim vratima"
        ],
        "correct": 0
      },
      {
        "question": "Kako znaš da si u sarajevskom kafiću?",
        "options": [
          "Imaš meni na engleskom",
          "Na TV-u je utakmica",
          "Svi gledaju Formulu 1",
          "Konobar zna tvoju narudžbu napamet"
        ],
        "correct": 3
      },
      {
        "question": "Koja sarajevska hrana ima supermoći da nestane s tanjira za 3 sekunde?",
        "options": [
          "Sarma",
          "Palačinke",
          "Ćevapi",
          "Brokoli"
        ],
        "correct": 2
      }
    ],
    [
      {
        "question": "Koja je neizgovorena pravila kod ćevapa?",
        "options": [
          "Ne jedeš viljuškom",
          "Jedeš viljuškom",
          "Piješ fanta exotic",
          "Sipaš ajvar"
        ],
        "correct": 0
      },
      {
        "question": "Koji je najpouzdaniji način da saznaš sve gradske tračeve?",
        "options": [
          "Radio",
          "Facebook grupa",
          "Taksi vozač",
          "Teta na trafici"
        ],
        "correct": 2
      },
      {
        "question": "Koji je najbrži način da se posvađaš s nekim iz Sarajeva?",
        "options": [
          "Kažeš da su banjalučki ćevapi bolji",
          "Ne nosiš masku",
          "Hodaš sporo",
          "Parkiraš ispravno"
        ],
        "correct": 0
      }
    ],
    [
      {
        "question": "Koji je najbrži način da se izgubiš u Sarajevu?",
        "options": [
          "Uđeš u tramvaj i zaspeš",
          "Igraš skrivača u Vijećnici",
          "Letiš na metli iznad Miljacke",
          "Pošalješ goluba da te vodi"
        ],
        "correct": 0
      },
      {
        "question": "Kako se zove sarajevska “kućica” za ptice koja je kao fontana?",
        "options": [
          "Vodovod tower",
          "Sebilj",
          "Golubator",
          "Hidrantski kafić"
        ],
        "correct": 1
      },
      {
        "question": "Šta nikako ne smiješ reći u Sarajevu?",
        "options": [
          "Da je burek sa sirom",
          "Da ne voliš kahvu",
          "Da ne znaš ko je Hanka",
          "Sve od navedenog"
        ],
        "correct": 3
      }
    ],
    [
      {
        "question": "Šta najčešće učenik kaže kad treba učiti?",
        "options": [
          "Naučio sam",
          "Kad otkuca puni sat",
          "Evo za 5 minuta",
          "Sve navedeno"
        ],
        "correct": 3
      },
      {
        "question": "Šta djeca najčešće piju dok odrasli piju kahvu?",
        "options": [
          "Mlijeko s okusom bureka",
          "Jogurt",
          "Energetski sok",
          "Čaj od ćevapa"
        ],
        "correct": 1
      },
      {
        "question": "Šta je obavezno kad ideš na Trebević?",
        "options": [
          "Planinarske cipele",
          "Kamera",
          "Selfie iz žičare",
          "Kompas"
        ],
        "correct": 2
      }
    ]
  ]
};

let currentQuestionIndex = 0;
let currentQuiz = [];

function renderButtons(variants) {
  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";
  variants.forEach((quiz, index) => {
    const btn = document.createElement("button");
    btn.textContent = `Kviz ${index + 1}`;
    btn.onclick = () => {
      document.getElementById('quiz-selector').classList.add('hidden');
      document.getElementById('quiz-tab').classList.remove('hidden');
      document.getElementById('quiz-title').textContent = btn.textContent;
      currentQuestionIndex = 0;
      currentQuiz = quiz.map(q => Object.assign({}, q));
      showQuestion();
    };
    buttonsDiv.appendChild(btn);
  });
}

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  quizDiv.innerHTML = "";
  resultDiv.classList.add("hidden");

  const q = currentQuiz[currentQuestionIndex];
  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<p>${q.question}</p>`;

  // Feedback message placeholder
  const feedback = document.createElement("div");
  feedback.id = "feedback-message";
  feedback.style.color = "red";
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";

  q.options.forEach((opt, j) => {
    const label = document.createElement("label");
    label.className = "option-card";
    label.innerHTML = `<input type="radio" name="q" value="${j}" /> ${String.fromCharCode(65 + j)}. ${opt}`;
    label.onclick = () => {
      document.querySelectorAll(".option-card").forEach(el => el.classList.remove("selected"));
      label.classList.add("selected");
      feedback.textContent = ""; // Clear feedback when new option selected
    };
    qDiv.appendChild(label);
    qDiv.appendChild(document.createElement("br"));
  });

  qDiv.appendChild(feedback); // Add feedback div here

  const nextBtn = document.createElement("button");
  nextBtn.textContent = currentQuestionIndex < currentQuiz.length - 1 ? "Dalje" : "Završi";
  nextBtn.onclick = () => {
    const selected = document.querySelector('input[name="q"]:checked');
    if (!selected) {
      feedback.textContent = "Odaberi odgovor!";
      return;
    }
    const answer = parseInt(selected.value);
    currentQuiz[currentQuestionIndex].userAnswer = answer;

    if (answer === q.correct) {
      launchConfetti();
      currentQuestionIndex++;
      if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
      } else {
        showResult();
      }
    } else {
      feedback.textContent = "Netačan odgovor! Pokušaj ponovo.";
    }
  };

  quizDiv.appendChild(qDiv);
  quizDiv.appendChild(nextBtn);
}


function showResult() {
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  quizDiv.innerHTML = "";
  let correctCount = 0;
  currentQuiz.forEach(q => {
    if (q.userAnswer === q.correct) correctCount++;
  });
  resultDiv.textContent = `Tačnih odgovora: ${correctCount} od ${currentQuiz.length}`;
  resultDiv.classList.remove("hidden");
}

function launchConfetti() {
  const duration = 1 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 30 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0.2, 0.8),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
}

document.getElementById("back-btn").onclick = () => {
  document.getElementById("quiz-tab").classList.add("hidden");
  document.getElementById("quiz-selector").classList.remove("hidden");
};

renderButtons(quizData.variants);
