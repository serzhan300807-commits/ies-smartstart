/* =========================================
   IES SMARTSTART
   Main JavaScript
   EN / DE / RU
========================================= */

'use strict';


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    /* ================= ENGLISH ================= */

    en: {
        pageTitle: "IES SmartStart",

        navigation: "Main navigation",
        progress: "Self-check progress",
        conversation: "FAQ conversation",
        language: "Language",

        skip: "Skip to content",
        menu: "Menu",
        send: "Send question",
        you: "You",

        navHome: "Home",
        navDiscover: "Discover IES",
        navSelfCheck: "Self-Check",
        navAssistant: "FAQ Assistant",
        navCta: "Start now",

        heroTitle:
            "Your first step <span>towards IES.</span>",

        heroDesc:
            "Discover the International Excellence Scholarship, explore what you can contribute and find your next step.",

        heroBtn1:
            "Start Self-Check →",

        heroBtn2:
            "Discover IES",

        heroNote:
            "Independent student prototype · Not an official IES website",

        cardTopTitle:
            "International",

        cardTopSub:
            "Community",

        centerCardText:
            "Discover.<br>Contribute.<br>Connect.",

        orbitStudy:
            "🎓 Study",

        orbitConnect:
            "🤝 Connect",

        orbitContribute:
            "💡 Contribute",

        cardBotTitle:
            "Your skills",

        cardBotSub:
            "Your contribution",


        /* DISCOVER */

        discLabel:
            "01 — DISCOVER",

        discTitle:
            "More than an <span>exchange.</span>",

        discDesc:
            "The International Excellence Scholarship combines university study in Germany with community engagement at Copernicus Berlin.",

        feat1Title:
            "Explore",

        feat1Desc:
            "Discover an international academic environment and broaden your perspective.",

        feat2Title:
            "Connect",

        feat2Desc:
            "Become part of a community with different academic, professional and cultural backgrounds.",

        feat3Title:
            "Contribute",

        feat3Desc:
            "Share your knowledge, skills, ideas, creativity and commitment.",

        quoteText:
            "IES goes beyond a traditional exchange semester. Community engagement is an integral part of the programme.",

        quoteAuthor:
            "— Summary of the IES Skills Challenge brief",


        /* SKILLS */

        skillsLabel:
            "02 — CONTRIBUTE",

        skillsTitle:
            "Your skills can become <span>your contribution.</span>",

        skillsDesc:
            "There are many ways to participate in an international community.",

        skill1: "IT & Technology",
        skill2: "Research",
        skill3: "Data Analysis",
        skill4: "Design",
        skill5: "Communication",
        skill6: "Social Media",
        skill7: "Video Production",
        skill8: "Events",
        skill9: "Project Management",
        skill10: "Sustainability",
        skill11: "Partnerships",
        skill12: "Your own field",


        /* SELF-CHECK */

        checkLabel:
            "03 — SELF-CHECK",

        checkTitle:
            "Explore your <span>possible contribution.</span>",

        checkDesc:
            "A short orientation tool to help you reflect on your interests and possible contribution.",

        btnBack:
            "← Back",

        btnContinue:
            "Continue →",

        continue:
            "Continue →",

        seeProfile:
            "See my directions →",

        disclaimer:
            "This self-check is an orientation tool. It does not determine official IES eligibility.",

        storageNote:
            "Answers and language are saved only in this browser when storage is available. “Start again” clears your self-check answers.",

        selectError:
            "Please select at least one option.",

        questions: [
            {
                title: "What are you interested in?",
                subtitle:
                    "Select all areas that describe your interests.",

                options: [
                    "International study",
                    "Research",
                    "Technology",
                    "Communication",
                    "Design",
                    "Events",
                    "Data",
                    "Sustainability"
                ]
            },

            {
                title: "What would you like to contribute?",
                subtitle:
                    "Think about the skills you could bring to a community.",

                options: [
                    "Technical skills",
                    "Creative ideas",
                    "Research",
                    "Communication",
                    "Organisation",
                    "Digital projects",
                    "Event support",
                    "Social media"
                ]
            },

            {
                title: "What motivates you?",
                subtitle:
                    "Choose the motivations that matter most to you.",

                options: [
                    "International experience",
                    "Academic development",
                    "Meeting people from different backgrounds",
                    "Sharing my skills",
                    "Developing new projects",
                    "Learning new things",
                    "Community engagement",
                    "Making an impact"
                ]
            }
        ],

        counter:
            (current, total) =>
                `Question ${current} of ${total}`,


        /* RESULT */

        resLabel:
            "POSSIBLE DIRECTIONS",

        resultTitleText:
            "Possible directions to explore",

        resultIntro:
            "Based on your selections, you could explore:",

        mixed:
            "Explore different community projects before choosing a direction.",

        ideas: [
            "Technical or digital projects: a small tool, a clear data chart, or a workflow improvement.",

            "Research support: compare sources and communicate findings clearly.",

            "Communication and events: help explain ideas or organise a student session.",

            "Sustainability: propose a small project and discuss its relevance with the team.",

            "Creative work: turn an idea into a clear visual or communication material."
        ],

        resultBasis:
            "Suggestions use your selected interests and contributions. Motivations appear as reflection tags. This is not a skills assessment or an admission decision.",

        reset:
            "Start again",

        resNextSub:
            "SUGGESTED NEXT STEP",

        resNextTitle:
            "Explore how your skills could contribute to an international community.",

        resBtn:
            "Ask FAQ Assistant →",


        /* FAQ */

        aiLabel:
            "04 — FAQ ASSISTANT",

        aiTitle:
            "Ask. <span>Explore.</span>",

        aiDesc:
            "Get a starting point for your questions about IES and your possible contribution.",

        aiBadge:
            "PREWRITTEN ANSWERS",

        chatName:
            "IES FAQ Assistant",

        chatSub:
            "Local FAQ prototype · No AI model connected",

        chatDemo:
            "Demo",

        chatWelcome:
            "Hello! Ask about IES, possible contributions or next steps. I use a small set of prewritten answers. Please avoid entering personal data.",

        q1:
            "What is IES?",

        q2:
            "What can I contribute?",

        q3:
            "I'm an engineering student",

        q4:
            "What should I do next?",

        chatPlaceholder:
            "Ask something about IES...",


        /* RESPONSIBLE TECHNOLOGY */

        respLabel:
            "05 — RESPONSIBLE TECHNOLOGY",

        respTitle:
            "Responsible <span>by design.</span>",

        respDesc:
            "This prototype uses prewritten FAQ responses and browser-only storage. The same safeguards would matter in any future AI version.",

        risk1Title:
            "Incorrect information",

        risk1Desc:
            "A future AI version could provide outdated or inaccurate programme information.",

        solText:
            "Solution",

        risk1Sol:
            "Use verified IES information as the primary knowledge source.",

        risk2Title:
            "AI hallucinations",

        risk2Desc:
            "A future AI version could present suggestions as if they were official requirements.",

        risk2Sol:
            "Clearly distinguish guidance from official information.",

        risk3Title:
            "Privacy",

        risk3Desc:
            "Applicants may accidentally share unnecessary personal information.",

        risk3Sol:
            "Minimise data collection and avoid unnecessary personal data.",

        respStatement:
            "Technology should support the applicant — not replace reliable human communication.",


        /* ANALYSIS */

        analysisLabel:
            "06 — ANALYSIS",

        analysisTitle:
            "Understanding campaign performance",

        analysisDisclaimer:
            "Illustrative data only — not actual IES campaign results.",

        analysisFindingsTitle:
            "Key findings",

        analysisFindingsText:
            "In this sample, Instagram generates the most impressions (5,000), university email produces the most completed applications (27), and student communities achieve the highest click-to-application conversion (16%).",

        analysisMeaningTitle:
            "What this means",

        analysisMeaningText:
            "More impressions do not necessarily lead to more applications. A recruitment team should compare both application volume and conversion rates when evaluating communication channels.",

        analysisLimitText:
            "These illustrative results do not establish real channel performance. Campaign costs and applicant suitability would also be needed before making budget decisions.",

        analysisImageAlt:
            "Comparison of sample campaign impressions, click-through rates, applications and conversion rates across three channels.",

        analysisChartLabel:
            "Scrollable campaign analysis chart",

        analysisMobileHint:
            "On smaller screens, scroll sideways to inspect the chart in detail.",


        /* NEXT STEPS */

        nextLabel:
            "07 — NEXT STEPS",

        nextTitle:
            "Ready for your <span>next step?</span>",

        nextDesc:
            "SmartStart guides students from their first question towards reliable official information.",

        step1Title:
            "Discover IES",

        step1Sub:
            "Learn about the programme",

        step2Title:
            "Check information",

        step2Sub:
            "Review official requirements",

        step3Title:
            "Prepare",

        step3Sub:
            "Build your application",

        step4Title:
            "Apply",

        step4Sub:
            "Take the next step",

        finalCtaTitle:
            "Your journey starts with one question.",

        finalCtaBtn:
            "Visit official IES page ↗",


        /* FOOTER */

        footerDesc:
            "An independent student prototype introducing IES and Copernicus Berlin.",

        footerCol1Title:
            "Explore",

        footerCol2Title:
            "Project",

        footerProj1:
            "Concept",

        footerProj2:
            "Responsible technology",

        footerProj3:
            "Campaign analysis",

        sourceNote:
            "Overview based on the IES Skills Challenge brief. Check current application requirements on the official IES page. Examples of contributions are suggestions, not promised placements. Campaign charts use illustrative sample data.",

        footerConcept:
            "Not affiliated with or endorsed by Copernicus Berlin"
    },



    /* ================= GERMAN ================= */

    de: {
        pageTitle: "IES SmartStart",

        navigation: "Hauptnavigation",
        progress: "Fortschritt des Selbst-Checks",
        conversation: "FAQ-Gespräch",
        language: "Sprache",

        skip: "Zum Inhalt springen",
        menu: "Menü",
        send: "Frage senden",
        you: "Sie",

        navHome: "Startseite",
        navDiscover: "IES entdecken",
        navSelfCheck: "Selbst-Check",
        navAssistant: "FAQ-Assistent",
        navCta: "Jetzt starten",

        heroTitle:
            "Ihr erster Schritt <span>in Richtung IES.</span>",

        heroDesc:
            "Entdecken Sie das International Excellence Scholarship, erkunden Sie Ihren möglichen Beitrag und finden Sie Ihren nächsten Schritt.",

        heroBtn1:
            "Selbst-Check starten →",

        heroBtn2:
            "IES entdecken",

        heroNote:
            "Unabhängiger studentischer Prototyp · Keine offizielle IES-Website",

        cardTopTitle:
            "International",

        cardTopSub:
            "Gemeinschaft",

        centerCardText:
            "Entdecken.<br>Beitragen.<br>Vernetzen.",

        orbitStudy:
            "🎓 Studium",

        orbitConnect:
            "🤝 Vernetzen",

        orbitContribute:
            "💡 Beitragen",

        cardBotTitle:
            "Ihre Fähigkeiten",

        cardBotSub:
            "Ihr Beitrag",


        /* DISCOVER */

        discLabel:
            "01 — ENTDECKEN",

        discTitle:
            "Mehr als ein <span>Austausch.</span>",

        discDesc:
            "Das International Excellence Scholarship verbindet ein Universitätsstudium in Deutschland mit Engagement bei Copernicus Berlin.",

        feat1Title:
            "Entdecken",

        feat1Desc:
            "Entdecken Sie ein internationales akademisches Umfeld und erweitern Sie Ihre Perspektive.",

        feat2Title:
            "Vernetzen",

        feat2Desc:
            "Werden Sie Teil einer Gemeinschaft mit unterschiedlichen akademischen, beruflichen und kulturellen Hintergründen.",

        feat3Title:
            "Beitragen",

        feat3Desc:
            "Teilen Sie Ihr Wissen, Ihre Fähigkeiten, Ideen, Kreativität und Ihr Engagement.",

        quoteText:
            "IES geht über ein traditionelles Austauschsemester hinaus. Engagement in der Gemeinschaft ist ein wesentlicher Bestandteil des Programms.",

        quoteAuthor:
            "— Zusammenfassung der IES Skills Challenge",


        /* SKILLS */

        skillsLabel:
            "02 — BEITRAGEN",

        skillsTitle:
            "Ihre Fähigkeiten können <span>Ihr Beitrag werden.</span>",

        skillsDesc:
            "Es gibt viele Möglichkeiten, sich in einer internationalen Gemeinschaft einzubringen.",

        skill1: "IT & Technologie",
        skill2: "Forschung",
        skill3: "Datenanalyse",
        skill4: "Design",
        skill5: "Kommunikation",
        skill6: "Social Media",
        skill7: "Videoproduktion",
        skill8: "Veranstaltungen",
        skill9: "Projektmanagement",
        skill10: "Nachhaltigkeit",
        skill11: "Partnerschaften",
        skill12: "Ihr eigener Bereich",


        /* SELF-CHECK */

        checkLabel:
            "03 — SELBST-CHECK",

        checkTitle:
            "Entdecken Sie Ihren <span>möglichen Beitrag.</span>",

        checkDesc:
            "Ein kurzes Orientierungstool, mit dem Sie über Ihre Interessen und Ihren möglichen Beitrag nachdenken können.",

        btnBack:
            "← Zurück",

        btnContinue:
            "Weiter →",

        continue:
            "Weiter →",

        seeProfile:
            "Richtungen anzeigen →",

        disclaimer:
            "Dieser Selbst-Check dient nur zur Orientierung und bestimmt nicht die offizielle IES-Berechtigung.",

        storageNote:
            "Antworten und Sprache werden nur in diesem Browser gespeichert, sofern Speicher verfügbar ist. „Neu starten“ löscht die Antworten des Selbst-Checks.",

        selectError:
            "Bitte wählen Sie mindestens eine Option.",

        questions: [
            {
                title:
                    "Wofür interessieren Sie sich?",

                subtitle:
                    "Wählen Sie alle Bereiche aus, die Sie interessieren.",

                options: [
                    "Internationales Studium",
                    "Forschung",
                    "Technologie",
                    "Kommunikation",
                    "Design",
                    "Veranstaltungen",
                    "Daten",
                    "Nachhaltigkeit"
                ]
            },

            {
                title:
                    "Was möchten Sie beitragen?",

                subtitle:
                    "Denken Sie über die Fähigkeiten nach, die Sie in eine Gemeinschaft einbringen können.",

                options: [
                    "Technische Fähigkeiten",
                    "Kreative Ideen",
                    "Forschung",
                    "Kommunikation",
                    "Organisation",
                    "Digitale Projekte",
                    "Unterstützung bei Veranstaltungen",
                    "Social Media"
                ]
            },

            {
                title:
                    "Was motiviert Sie?",

                subtitle:
                    "Wählen Sie die Motivationen aus, die Ihnen wichtig sind.",

                options: [
                    "Internationale Erfahrung",
                    "Akademische Entwicklung",
                    "Menschen mit unterschiedlichen Hintergründen kennenlernen",
                    "Meine Fähigkeiten teilen",
                    "Neue Projekte entwickeln",
                    "Neue Dinge lernen",
                    "Engagement in der Gemeinschaft",
                    "Etwas bewirken"
                ]
            }
        ],

        counter:
            (current, total) =>
                `Frage ${current} von ${total}`,


        /* RESULT */

        resLabel:
            "MÖGLICHE RICHTUNGEN",

        resultTitleText:
            "Mögliche Richtungen",

        resultIntro:
            "Auf Grundlage Ihrer Auswahl könnten Sie Folgendes erkunden:",

        mixed:
            "Lernen Sie verschiedene Gemeinschaftsprojekte kennen, bevor Sie eine Richtung wählen.",

        ideas: [
            "Technische oder digitale Projekte: ein kleines Tool, ein verständliches Datendiagramm oder eine Verbesserung eines Arbeitsablaufs.",

            "Forschungsunterstützung: Quellen vergleichen und Ergebnisse verständlich kommunizieren.",

            "Kommunikation und Veranstaltungen: Ideen erklären oder eine studentische Veranstaltung organisieren.",

            "Nachhaltigkeit: ein kleines Projekt vorschlagen und seine Relevanz mit dem Team besprechen.",

            "Kreative Arbeit: eine Idee in verständliches visuelles oder kommunikatives Material umsetzen."
        ],

        resultBasis:
            "Die Vorschläge basieren auf Ihren ausgewählten Interessen und Beiträgen. Motivationen werden als Reflexionsstichwörter angezeigt. Dies ist keine Kompetenzprüfung und keine Zulassungsentscheidung.",

        reset:
            "Neu starten",

        resNextSub:
            "EMPFOHLENER NÄCHSTER SCHRITT",

        resNextTitle:
            "Entdecken Sie, wie Ihre Fähigkeiten zu einer internationalen Gemeinschaft beitragen könnten.",

        resBtn:
            "FAQ-Assistent fragen →",


        /* FAQ */

        aiLabel:
            "04 — FAQ-ASSISTENT",

        aiTitle:
            "Fragen. <span>Entdecken.</span>",

        aiDesc:
            "Erhalten Sie einen ersten Orientierungspunkt für Fragen zu IES und Ihrem möglichen Beitrag.",

        aiBadge:
            "VORFORMULIERTE ANTWORTEN",

        chatName:
            "IES FAQ-Assistent",

        chatSub:
            "Lokaler FAQ-Prototyp · Kein KI-Modell verbunden",

        chatDemo:
            "Demo",

        chatWelcome:
            "Hallo! Fragen Sie nach IES, möglichen Beiträgen oder nächsten Schritten. Ich verwende einen kleinen Satz vorformulierter Antworten. Bitte geben Sie keine persönlichen Daten ein.",

        q1:
            "Was ist IES?",

        q2:
            "Was kann ich beitragen?",

        q3:
            "Ich studiere Ingenieurwesen",

        q4:
            "Was soll ich als Nächstes tun?",

        chatPlaceholder:
            "Fragen Sie etwas über IES...",


        /* RESPONSIBLE TECHNOLOGY */

        respLabel:
            "05 — VERANTWORTUNGSVOLLE TECHNOLOGIE",

        respTitle:
            "Verantwortung <span>von Anfang an.</span>",

        respDesc:
            "Dieser Prototyp verwendet vorformulierte FAQ-Antworten und browserlokale Speicherung. Dieselben Schutzmaßnahmen wären auch für eine zukünftige KI-Version wichtig.",

        risk1Title:
            "Falsche Informationen",

        risk1Desc:
            "Eine zukünftige KI-Version könnte veraltete oder ungenaue Programminformationen liefern.",

        solText:
            "Lösung",

        risk1Sol:
            "Verifizierte IES-Informationen als primäre Wissensquelle verwenden.",

        risk2Title:
            "KI-Halluzinationen",

        risk2Desc:
            "Eine zukünftige KI-Version könnte Vorschläge so darstellen, als wären sie offizielle Anforderungen.",

        risk2Sol:
            "Orientierung klar von offiziellen Informationen unterscheiden.",

        risk3Title:
            "Datenschutz",

        risk3Desc:
            "Bewerberinnen und Bewerber könnten versehentlich unnötige persönliche Informationen weitergeben.",

        risk3Sol:
            "Datenerfassung minimieren und unnötige personenbezogene Daten vermeiden.",

        respStatement:
            "Technologie soll Bewerber unterstützen — nicht verlässliche menschliche Kommunikation ersetzen.",


        /* ANALYSIS */

        analysisLabel:
            "06 — ANALYSE",

        analysisTitle:
            "Kampagnenleistung verstehen",

        analysisDisclaimer:
            "Nur Beispieldaten — keine tatsächlichen Ergebnisse einer IES-Kampagne.",

        analysisFindingsTitle:
            "Wichtigste Ergebnisse",

        analysisFindingsText:
            "In diesem Beispiel erzielt Instagram die meisten Impressionen (5.000), Universitäts-E-Mails führen zu den meisten abgeschlossenen Bewerbungen (27) und studentische Communities erreichen die höchste Klick-zu-Bewerbung-Konversion (16 %).",

        analysisMeaningTitle:
            "Was bedeutet das?",

        analysisMeaningText:
            "Mehr Impressionen führen nicht automatisch zu mehr Bewerbungen. Ein Recruiting-Team sollte sowohl die Anzahl der Bewerbungen als auch die Konversionsraten vergleichen.",

        analysisLimitText:
            "Diese Beispieldaten belegen keine tatsächliche Leistung der Kanäle. Vor Budgetentscheidungen müssten zusätzlich Kosten und die Eignung der Bewerber berücksichtigt werden.",

        analysisImageAlt:
            "Vergleich beispielhafter Impressionen, Klickraten, Bewerbungen und Konversionsraten von drei Kommunikationskanälen.",

        analysisChartLabel:
            "Scrollbares Diagramm zur Kampagnenanalyse",

        analysisMobileHint:
            "Auf kleineren Bildschirmen können Sie seitlich scrollen, um das Diagramm im Detail anzusehen.",


        /* NEXT STEPS */

        nextLabel:
            "07 — NÄCHSTE SCHRITTE",

        nextTitle:
            "Bereit für Ihren <span>nächsten Schritt?</span>",

        nextDesc:
            "SmartStart führt Studierende von ihrer ersten Frage zu verlässlichen offiziellen Informationen.",

        step1Title:
            "IES entdecken",

        step1Sub:
            "Mehr über das Programm erfahren",

        step2Title:
            "Informationen prüfen",

        step2Sub:
            "Offizielle Anforderungen überprüfen",

        step3Title:
            "Vorbereiten",

        step3Sub:
            "Bewerbung vorbereiten",

        step4Title:
            "Bewerben",

        step4Sub:
            "Den nächsten Schritt machen",

        finalCtaTitle:
            "Ihre Reise beginnt mit einer Frage.",

        finalCtaBtn:
            "Offizielle IES-Seite besuchen ↗",


        /* FOOTER */

        footerDesc:
            "Ein unabhängiger studentischer Prototyp über IES und Copernicus Berlin.",

        footerCol1Title:
            "Entdecken",

        footerCol2Title:
            "Projekt",

        footerProj1:
            "Konzept",

        footerProj2:
            "Verantwortungsvolle Technologie",

        footerProj3:
            "Kampagnenanalyse",

        sourceNote:
            "Der Überblick basiert auf der IES Skills Challenge. Aktuelle Bewerbungsbedingungen finden Sie auf der offiziellen IES-Seite. Die Beitragsbeispiele sind Vorschläge und keine zugesagten Tätigkeiten. Die Kampagnendiagramme verwenden illustrative Beispieldaten.",

        footerConcept:
            "Nicht mit Copernicus Berlin verbunden oder von Copernicus Berlin bestätigt"
    },



    /* ================= RUSSIAN ================= */

    ru: {
        pageTitle: "IES SmartStart",

        navigation:
            "Основная навигация",

        progress:
            "Прогресс самопроверки",

        conversation:
            "Диалог FAQ",

        language:
            "Язык",

        skip:
            "Перейти к содержимому",

        menu:
            "Меню",

        send:
            "Отправить вопрос",

        you:
            "Вы",

        navHome:
            "Главная",

        navDiscover:
            "Об IES",

        navSelfCheck:
            "Самопроверка",

        navAssistant:
            "FAQ-помощник",

        navCta:
            "Начать",

        heroTitle:
            "Ваш первый шаг <span>к IES.</span>",

        heroDesc:
            "Узнайте об International Excellence Scholarship, подумайте, какой вклад вы можете внести, и найдите следующий шаг.",

        heroBtn1:
            "Начать самопроверку →",

        heroBtn2:
            "Узнать об IES",

        heroNote:
            "Независимый студенческий прототип · Не официальный сайт IES",

        cardTopTitle:
            "Международное",

        cardTopSub:
            "Сообщество",

        centerCardText:
            "Узнавай.<br>Вноси вклад.<br>Общайся.",

        orbitStudy:
            "🎓 Учёба",

        orbitConnect:
            "🤝 Общение",

        orbitContribute:
            "💡 Вклад",

        cardBotTitle:
            "Ваши навыки",

        cardBotSub:
            "Ваш вклад",


        /* DISCOVER */

        discLabel:
            "01 — ОБ IES",

        discTitle:
            "Больше, чем просто <span>обмен.</span>",

        discDesc:
            "International Excellence Scholarship сочетает учёбу в университете Германии с участием в жизни сообщества Copernicus Berlin.",

        feat1Title:
            "Исследуйте",

        feat1Desc:
            "Познакомьтесь с международной академической средой и расширьте свой кругозор.",

        feat2Title:
            "Общайтесь",

        feat2Desc:
            "Станьте частью сообщества людей с разным академическим, профессиональным и культурным опытом.",

        feat3Title:
            "Вносите вклад",

        feat3Desc:
            "Делитесь знаниями, навыками, идеями, творчеством и инициативой.",

        quoteText:
            "IES выходит за рамки обычного семестра обмена. Участие в жизни сообщества является важной частью программы.",

        quoteAuthor:
            "— По материалам IES Skills Challenge",


        /* SKILLS */

        skillsLabel:
            "02 — ВКЛАД",

        skillsTitle:
            "Ваши навыки могут стать <span>вашим вкладом.</span>",

        skillsDesc:
            "Есть много способов участвовать в жизни международного сообщества.",

        skill1: "ИТ и технологии",
        skill2: "Исследования",
        skill3: "Анализ данных",
        skill4: "Дизайн",
        skill5: "Коммуникации",
        skill6: "Социальные сети",
        skill7: "Создание видео",
        skill8: "Мероприятия",
        skill9: "Управление проектами",
        skill10: "Устойчивое развитие",
        skill11: "Партнёрства",
        skill12: "Ваша сфера",


        /* SELF-CHECK */

        checkLabel:
            "03 — САМОПРОВЕРКА",

        checkTitle:
            "Найдите направление <span>для своего вклада.</span>",

        checkDesc:
            "Короткий инструмент для размышления о ваших интересах и возможном вкладе.",

        btnBack:
            "← Назад",

        btnContinue:
            "Далее →",

        continue:
            "Далее →",

        seeProfile:
            "Посмотреть направления →",

        disclaimer:
            "Эта самопроверка служит только для ориентации и не определяет официальное соответствие требованиям IES.",

        storageNote:
            "Ответы и язык сохраняются только в этом браузере, если хранилище доступно. Кнопка «Начать заново» очищает ответы самопроверки.",

        selectError:
            "Выберите хотя бы один вариант.",

        questions: [
            {
                title:
                    "Что вас интересует?",

                subtitle:
                    "Выберите все интересующие вас направления.",

                options: [
                    "Международная учёба",
                    "Исследования",
                    "Технологии",
                    "Коммуникации",
                    "Дизайн",
                    "Мероприятия",
                    "Данные",
                    "Устойчивое развитие"
                ]
            },

            {
                title:
                    "Какой вклад вы хотели бы внести?",

                subtitle:
                    "Подумайте о навыках, которыми вы можете помочь сообществу.",

                options: [
                    "Технические навыки",
                    "Творческие идеи",
                    "Исследования",
                    "Коммуникации",
                    "Организация",
                    "Цифровые проекты",
                    "Помощь с мероприятиями",
                    "Социальные сети"
                ]
            },

            {
                title:
                    "Что вас мотивирует?",

                subtitle:
                    "Выберите наиболее важные для вас мотиваторы.",

                options: [
                    "Международный опыт",
                    "Академическое развитие",
                    "Знакомство с людьми из разных сфер",
                    "Делиться своими навыками",
                    "Создавать новые проекты",
                    "Учиться новому",
                    "Участвовать в жизни сообщества",
                    "Приносить пользу"
                ]
            }
        ],

        counter:
            (current, total) =>
                `Вопрос ${current} из ${total}`,


        /* RESULT */

        resLabel:
            "ВОЗМОЖНЫЕ НАПРАВЛЕНИЯ",

        resultTitleText:
            "Возможные направления",

        resultIntro:
            "На основе ваших ответов можно рассмотреть:",

        mixed:
            "Познакомьтесь с разными проектами сообщества, прежде чем выбирать направление.",

        ideas: [
            "Технические и цифровые проекты: небольшой инструмент, понятный график данных или улучшение рабочего процесса.",

            "Исследования: сравнение источников и понятное представление результатов.",

            "Коммуникации и мероприятия: помощь в объяснении идей или организации студенческого мероприятия.",

            "Устойчивое развитие: предложите небольшой проект и обсудите его актуальность с командой.",

            "Творческая работа: превратите идею в понятный визуальный или коммуникационный материал."
        ],

        resultBasis:
            "Подсказки основаны на выбранных интересах и вариантах вклада. Мотивации отображаются как теги для размышления. Это не оценка навыков и не решение о зачислении.",

        reset:
            "Начать заново",

        resNextSub:
            "РЕКОМЕНДУЕМЫЙ СЛЕДУЮЩИЙ ШАГ",

        resNextTitle:
            "Узнайте, как ваши навыки могут быть полезны международному сообществу.",

        resBtn:
            "Спросить FAQ-помощника →",


        /* FAQ */

        aiLabel:
            "04 — FAQ-ПОМОЩНИК",

        aiTitle:
            "Спрашивайте. <span>Исследуйте.</span>",

        aiDesc:
            "Получите отправную точку для вопросов об IES и вашем возможном вкладе.",

        aiBadge:
            "ГОТОВЫЕ ОТВЕТЫ",

        chatName:
            "IES FAQ-помощник",

        chatSub:
            "Локальный FAQ-прототип · Без подключения ИИ-модели",

        chatDemo:
            "Демо",

        chatWelcome:
            "Здравствуйте! Спросите об IES, возможном вкладе или следующих шагах. Я использую небольшой набор заранее подготовленных ответов. Не вводите личные данные.",

        q1:
            "Что такое IES?",

        q2:
            "Какой вклад я могу внести?",

        q3:
            "Я студент-инженер",

        q4:
            "Что мне делать дальше?",

        chatPlaceholder:
            "Спросите что-нибудь об IES...",


        /* RESPONSIBLE TECHNOLOGY */

        respLabel:
            "05 — ОТВЕТСТВЕННЫЕ ТЕХНОЛОГИИ",

        respTitle:
            "Ответственность <span>по замыслу.</span>",

        respDesc:
            "Этот прототип использует заранее подготовленные FAQ-ответы и хранение данных только в браузере. Те же меры были бы важны для будущей версии с ИИ.",

        risk1Title:
            "Неверная информация",

        risk1Desc:
            "Будущая версия с ИИ может предоставить устаревшую или неточную информацию о программе.",

        solText:
            "Решение",

        risk1Sol:
            "Использовать проверенную информацию IES как основной источник.",

        risk2Title:
            "Галлюцинации ИИ",

        risk2Desc:
            "Будущая версия с ИИ может представить рекомендации так, будто они являются официальными требованиями.",

        risk2Sol:
            "Чётко отделять рекомендации от официальной информации.",

        risk3Title:
            "Конфиденциальность",

        risk3Desc:
            "Кандидаты могут случайно предоставить лишнюю личную информацию.",

        risk3Sol:
            "Минимизировать сбор данных и не запрашивать ненужные личные данные.",

        respStatement:
            "Технологии должны помогать кандидату — а не заменять надёжное общение с людьми.",


        /* ANALYSIS */

        analysisLabel:
            "06 — АНАЛИЗ",

        analysisTitle:
            "Анализ эффективности кампании",

        analysisDisclaimer:
            "Только демонстрационные данные — это не реальные результаты кампании IES.",

        analysisFindingsTitle:
            "Основные результаты",

        analysisFindingsText:
            "В этом примере Instagram получает больше всего показов (5 000), университетская электронная рассылка приводит к наибольшему числу завершённых заявок (27), а студенческие сообщества показывают самую высокую конверсию из клика в заявку (16%).",

        analysisMeaningTitle:
            "Что это означает",

        analysisMeaningText:
            "Большое количество показов не обязательно приводит к большему количеству заявок. При оценке каналов коммуникации следует сравнивать как количество заявок, так и коэффициент конверсии.",

        analysisLimitText:
            "Эти демонстрационные результаты не доказывают реальную эффективность каналов. Для принятия решений о бюджете также потребовались бы данные о стоимости кампаний и качестве заявок.",

        analysisImageAlt:
            "Сравнение демонстрационных показов, кликабельности, количества заявок и конверсии трёх каналов коммуникации.",

        analysisChartLabel:
            "Прокручиваемый график анализа кампании",

        analysisMobileHint:
            "На небольшом экране прокрутите график по горизонтали, чтобы рассмотреть детали.",


        /* NEXT STEPS */

        nextLabel:
            "07 — СЛЕДУЮЩИЕ ШАГИ",

        nextTitle:
            "Готовы сделать <span>следующий шаг?</span>",

        nextDesc:
            "SmartStart помогает студенту перейти от первого вопроса к надёжной официальной информации.",

        step1Title:
            "Узнайте об IES",

        step1Sub:
            "Познакомьтесь с программой",

        step2Title:
            "Проверьте информацию",

        step2Sub:
            "Изучите официальные требования",

        step3Title:
            "Подготовьтесь",

        step3Sub:
            "Подготовьте заявку",

        step4Title:
            "Подайте заявку",

        step4Sub:
            "Сделайте следующий шаг",

        finalCtaTitle:
            "Ваш путь начинается с одного вопроса.",

        finalCtaBtn:
            "Открыть официальный сайт IES ↗",


        /* FOOTER */

        footerDesc:
            "Независимый студенческий прототип об IES и Copernicus Berlin.",

        footerCol1Title:
            "Навигация",

        footerCol2Title:
            "Проект",

        footerProj1:
            "Концепция",

        footerProj2:
            "Ответственные технологии",

        footerProj3:
            "Анализ кампании",

        sourceNote:
            "Обзор основан на задании IES Skills Challenge. Актуальные условия подачи необходимо проверять на официальной странице IES. Примеры возможного вклада являются предложениями, а не гарантированными ролями. Графики кампании используют демонстрационные данные.",

        footerConcept:
            "Не является официальным или одобренным сайтом Copernicus Berlin"
    }
};



/* =========================================
   STATE
========================================= */

/* Personal preparation checklist. Stable IDs are independent of language. */
const nextStepsCopy = {
  "en": {
    "title": "My next steps",
    "note": "A personal preparation list — not official programme requirements.",
    "saved": "Saved in this browser on this device.",
    "temporary": "Progress is available for this session only: browser storage is unavailable.",
    "count": "Completed: {n} of 3",
    "done": "All three steps are checked. You can revisit them at any time.",
    "multiple": "Choose one of the suggested directions for your first small project.",
    "generic": "Choose an interest you would like to explore through a small project.",
    "document": "Prepare a short description of your contribution and 2–3 screenshots or examples.",
    "official": "Check the current requirements and deadlines on the official IES website.",
    "tasks": [
      "Choose a small digital project, such as a web page, script or data analysis.",
      "Choose a research question and find a few reliable sources to explore it.",
      "Outline a small event or communication idea: audience, goal and format.",
      "Choose an environmental issue and outline a practical contribution.",
      "Choose a creative format and prepare a first sketch, visual or short video."
    ]
  },
  "de": {
    "title": "Meine nächsten Schritte",
    "note": "Eine persönliche Vorbereitungsliste — keine offiziellen Programmanforderungen.",
    "saved": "In diesem Browser auf diesem Gerät gespeichert.",
    "temporary": "Der Fortschritt bleibt nur für diese Sitzung erhalten: Der Browserspeicher ist nicht verfügbar.",
    "count": "Erledigt: {n} von 3",
    "done": "Alle drei Schritte sind abgehakt. Du kannst sie jederzeit erneut ansehen.",
    "multiple": "Wähle eine der vorgeschlagenen Richtungen für dein erstes kleines Projekt.",
    "generic": "Wähle ein Interesse, das du mit einem kleinen Projekt erkunden möchtest.",
    "document": "Bereite eine kurze Beschreibung deines Beitrags und 2–3 Screenshots oder Beispiele vor.",
    "official": "Prüfe die aktuellen Anforderungen und Fristen auf der offiziellen IES-Webseite.",
    "tasks": [
      "Wähle ein kleines digitales Projekt, zum Beispiel eine Webseite, ein Skript oder eine Datenanalyse.",
      "Wähle eine Forschungsfrage und suche einige zuverlässige Quellen dazu.",
      "Skizziere eine kleine Veranstaltung oder Kommunikationsidee: Zielgruppe, Ziel und Format.",
      "Wähle ein Umweltproblem und skizziere einen praktischen Beitrag.",
      "Wähle ein kreatives Format und erstelle eine erste Skizze, Grafik oder ein kurzes Video."
    ]
  },
  "ru": {
    "title": "Мои следующие шаги",
    "note": "Личный список подготовки — не официальные требования программы.",
    "saved": "Сохранено в этом браузере на этом устройстве.",
    "temporary": "Отметки доступны только в текущем сеансе: хранилище браузера недоступно.",
    "count": "Выполнено: {n} из 3",
    "done": "Все три шага отмечены. Ты можешь вернуться к ним в любое время.",
    "multiple": "Выбери одно из предложенных направлений для первого небольшого проекта.",
    "generic": "Выбери интерес, который хочешь изучить через небольшой проект.",
    "document": "Подготовь краткое описание своего вклада и 2–3 скриншота или примера.",
    "official": "Проверь актуальные требования и сроки на официальном сайте IES.",
    "tasks": [
      "Выбери небольшой цифровой проект: веб-страницу, скрипт или анализ данных.",
      "Выбери исследовательский вопрос и найди несколько надёжных источников по теме.",
      "Продумай небольшое мероприятие или коммуникационную идею: аудиторию, цель и формат.",
      "Выбери экологическую проблему и предложи практический вклад в её решение.",
      "Выбери творческий формат и подготовь первый эскиз, иллюстрацию или короткое видео."
    ]
  }
};
let nextStepsChecked = [false, false, false];
let storageAvailable = true;

function renderNextSteps(directions) {
    const host = $("personalSteps");
    if (!host) return;
    const copy = nextStepsCopy[currentLang];
    $("personalStepsTitle").textContent = copy.title;
    $("personalStepsNote").textContent = copy.note;
    const first = directions.length === 1 ? copy.tasks[directions[0]]
        : directions.length > 1 ? copy.multiple : copy.generic;
    const list = $("personalStepsList");
    list.replaceChildren();
    [first, copy.document, copy.official].forEach((text, index) => {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `personalStep${index}`;
        checkbox.checked = nextStepsChecked[index];
        const caption = document.createElement("span");
        caption.textContent = text;
        label.append(checkbox, caption);
        item.append(label);
        list.append(item);
        checkbox.addEventListener("change", () => {
            nextStepsChecked[index] = checkbox.checked;
            saveProgressToStorage();
            updateNextStepsStatus();
        });
    });
    updateNextStepsStatus();
}

function updateNextStepsStatus() {
    if (!$("personalStepsCount")) return;
    const copy = nextStepsCopy[currentLang];
    const count = nextStepsChecked.filter(Boolean).length;
    $("personalStepsCount").textContent = copy.count.replace("{n}", count);
    $("personalStepsProgress").value = count;
    $("personalStepsDone").textContent = count === 3 ? copy.done : "";
    $("personalStepsStorage").textContent = storageAvailable ? copy.saved : copy.temporary;
}

let currentLang =
    "en";

let currentQuestion =
    0;

let answers = [
    [],
    [],
    []
];

let completed =
    false;

const storageKey =
    "ies_smartstart_v2";

const chatHistory =
    [];

const $ =
    (id) =>
        document.getElementById(id);

const t =
    () =>
        translations[currentLang];



/* =========================================
   LOCAL STORAGE
========================================= */

function saveProgressToStorage() {

    try {

        localStorage.setItem(
            storageKey,
            JSON.stringify({
                lang:
                    currentLang,

                question:
                    currentQuestion,

                answers,

                nextStepsChecked,

                completed
            })
        );

        storageAvailable = true;
    } catch (error) {
        storageAvailable = false;

        /*
         Site continues to work
         when localStorage is unavailable.
        */
    }
}



function loadProgressFromStorage() {

    try {

        const raw =
            localStorage.getItem(
                storageKey
            );

        if (!raw) {
            return;
        }


        const state =
            JSON.parse(raw);


        if (
            !state ||
            !Object.hasOwn(
                translations,
                state.lang
            )
        ) {
            return;
        }


        currentLang =
            state.lang;


        if (
            Array.isArray(
                state.answers
            ) &&
            state.answers.length === 3
        ) {

            answers =
                state.answers.map(
                    (row) => {

                        if (
                            !Array.isArray(
                                row
                            )
                        ) {
                            return [];
                        }


                        return [
                            ...new Set(
                                row.filter(
                                    (value) =>
                                        Number.isInteger(
                                            value
                                        ) &&
                                        value >= 0 &&
                                        value < 8
                                )
                            )
                        ];
                    }
                );
        }


        const savedQuestion =
            Number.isInteger(
                state.question
            )
                ? Math.max(
                    0,
                    Math.min(
                        2,
                        state.question
                    )
                )
                : 0;


        const firstEmpty =
            answers.findIndex(
                (row) =>
                    row.length === 0
            );


        currentQuestion =
            firstEmpty < 0
                ? savedQuestion
                : Math.min(
                    savedQuestion,
                    firstEmpty
                );


        completed =
            state.completed === true &&
            answers.every(
                (row) =>
                    row.length > 0
            );

        nextStepsChecked = completed && Array.isArray(state.nextStepsChecked)
            && state.nextStepsChecked.length === 3
            ? state.nextStepsChecked.map(value => value === true)
            : [false, false, false];

    } catch (error) {

        /*
         Ignore broken JSON or
         unavailable storage.
        */
    }
}



/* =========================================
   CAMPAIGN IMAGE
========================================= */

function updateCampaignImage() {

    const image =
        $("analysisImage");

    if (!image) {
        return;
    }


    const images = {
        en:
            "IES_Campaign_Analysis_EN.png",

        de:
            "IES_Campaign_Analysis_DE.png",

        ru:
            "IES_Campaign_Analysis_RU.png"
    };


    image.src =
        images[currentLang] ||
        images.en;
}



/* =========================================
   LANGUAGE
========================================= */

function changeLanguage(
    lang
) {

    if (
        !Object.hasOwn(
            translations,
            lang
        )
    ) {
        return;
    }


    currentLang =
        lang;


    applyTranslations();

    renderQuestion();

    renderChat();


    if (completed) {
        showResult(false);
    }


    saveProgressToStorage();
}



/* =========================================
   APPLY TRANSLATIONS
========================================= */

function applyTranslations() {

    const translation =
        t();


    document.documentElement.lang =
        currentLang;


    updateCampaignImage();


    document.title =
        translation.pageTitle;



    /* Normal text */

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            (element) => {

                const key =
                    element.dataset.i18n;

                const value =
                    translation[key];


                if (
                    typeof value ===
                    "string"
                ) {

                    element.innerHTML =
                        value;
                }
            }
        );



    /* aria-label */

    document
        .querySelectorAll(
            "[data-i18n-aria]"
        )
        .forEach(
            (element) => {

                const key =
                    element.dataset
                        .i18nAria;

                const value =
                    translation[key];


                if (
                    typeof value ===
                    "string"
                ) {

                    element.setAttribute(
                        "aria-label",
                        value
                    );
                }
            }
        );



    /* placeholder */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(
            (element) => {

                const key =
                    element.dataset
                        .i18nPlaceholder;

                const value =
                    translation[key];


                if (
                    typeof value ===
                    "string"
                ) {

                    element.placeholder =
                        value;
                }
            }
        );



    /* Image ALT */

    document
        .querySelectorAll(
            "[data-i18n-alt]"
        )
        .forEach(
            (element) => {

                const key =
                    element.dataset
                        .i18nAlt;

                const value =
                    translation[key];


                if (
                    typeof value ===
                    "string"
                ) {

                    element.setAttribute(
                        "alt",
                        value
                    );
                }
            }
        );



    /* Language buttons */

    document
        .querySelectorAll(
            ".lang-btn"
        )
        .forEach(
            (button) => {

                const active =
                    button.dataset
                        .language ===
                    currentLang;


                button.setAttribute(
                    "aria-pressed",
                    String(active)
                );
            }
        );



    /* Chat input */

    const chatInput =
        $("chatInput");

    if (chatInput) {

        chatInput.setAttribute(
            "aria-label",
            translation.chatPlaceholder
        );
    }



    /* Send button */

    const sendButton =
        document.querySelector(
            ".chat-input button"
        );

    if (sendButton) {

        sendButton.setAttribute(
            "aria-label",
            translation.send
        );
    }



    /* Mobile menu */

    const mobileMenu =
        $("mobileMenu");

    if (mobileMenu) {

        mobileMenu.setAttribute(
            "aria-label",
            translation.menu
        );
    }
}



/* =========================================
   NAVIGATION
========================================= */

function scrollToSection(
    id
) {

    const section =
        $(id);

    if (!section) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    section.scrollIntoView({

        behavior:
            reducedMotion
                ? "auto"
                : "smooth",

        block:
            "start"
    });


    closeMenu();
}



function closeMenu() {

    const navigation =
        $("mainNav");

    const menu =
        $("mobileMenu");


    if (navigation) {

        navigation.classList.remove(
            "is-open"
        );
    }


    if (menu) {

        menu.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}



/* =========================================
   SELF-CHECK
========================================= */

function renderQuestion(
    focus = false
) {

    const notice =
        $("checkNotice");


    if (notice) {

        notice.textContent =
            "";
    }


    const question =
        t().questions[
            currentQuestion
        ];


    const container =
        $("questionContainer");


    if (!container) {
        return;
    }


    container.replaceChildren();



    /* Question title */

    const title =
        document.createElement(
            "h3"
        );

    title.className =
        "question-title";

    title.id =
        "questionTitle";

    title.tabIndex =
        -1;

    title.textContent =
        question.title;



    /* Question subtitle */

    const subtitle =
        document.createElement(
            "p"
        );

    subtitle.className =
        "question-subtitle";

    subtitle.textContent =
        question.subtitle;



    /* Options */

    const grid =
        document.createElement(
            "div"
        );

    grid.className =
        "option-grid";

    grid.setAttribute(
        "role",
        "group"
    );

    grid.setAttribute(
        "aria-labelledby",
        "questionTitle"
    );



    question.options.forEach(
        (
            label,
            optionId
        ) => {

            const selected =
                answers[
                    currentQuestion
                ].includes(
                    optionId
                );


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";

            button.className =
                "option";


            button.setAttribute(
                "aria-pressed",
                String(selected)
            );


            button.classList.toggle(
                "selected",
                selected
            );



            const check =
                document.createElement(
                    "span"
                );

            check.className =
                "option-check";


            check.setAttribute(
                "aria-hidden",
                "true"
            );


            check.textContent =
                selected
                    ? "✓"
                    : "";



            const text =
                document.createElement(
                    "span"
                );

            text.textContent =
                label;



            button.append(
                check,
                text
            );



            button.addEventListener(
                "click",
                () => {

                    const row =
                        answers[
                            currentQuestion
                        ];


                    const index =
                        row.indexOf(
                            optionId
                        );


                    if (
                        index < 0
                    ) {

                        row.push(
                            optionId
                        );

                    } else {

                        row.splice(
                            index,
                            1
                        );
                    }



                    const nowSelected =
                        row.includes(
                            optionId
                        );


                    button.classList.toggle(
                        "selected",
                        nowSelected
                    );


                    button.setAttribute(
                        "aria-pressed",
                        String(
                            nowSelected
                        )
                    );


                    check.textContent =
                        nowSelected
                            ? "✓"
                            : "";



                    if (notice) {

                        notice.textContent =
                            "";
                    }


                    /*
                     Any changed answer means
                     the previous result is outdated.
                    */

                    completed =
                        false;
                    nextStepsChecked = [false, false, false];


                    const result =
                        $("result");


                    if (result) {

                        result.classList.add(
                            "hidden"
                        );
                    }


                    saveProgressToStorage();
                }
            );


            grid.append(
                button
            );
        }
    );



    container.append(
        title,
        subtitle,
        grid
    );



    /* Progress counter */

    const counter =
        $("questionCounter");


    if (counter) {

        counter.textContent =
            t().counter(
                currentQuestion + 1,
                3
            );
    }



    /* Progress percentage */

    const percent =
        Math.round(
            (
                (
                    currentQuestion + 1
                ) /
                3
            ) *
            100
        );


    const percentLabel =
        $("progressPercent");


    if (percentLabel) {

        percentLabel.textContent =
            `${percent}%`;
    }



    const fill =
        $("progressFill");


    if (fill) {

        fill.style.width =
            `${percent}%`;
    }



    const progressBar =
        document.querySelector(
            '[role="progressbar"]'
        );


    if (progressBar) {

        progressBar.setAttribute(
            "aria-valuenow",
            String(percent)
        );
    }



    /* Previous button */

    const previousButton =
        $("previousBtn");


    if (previousButton) {

        previousButton.disabled =
            currentQuestion === 0;
    }



    /* Continue button */

    const nextButton =
        $("nextBtn");


    if (nextButton) {

        nextButton.textContent =
            currentQuestion === 2
                ? t().seeProfile
                : t().continue;
    }



    if (focus) {

        title.focus({
            preventScroll:
                true
        });
    }
}



/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (
        !answers[
            currentQuestion
        ].length
    ) {

        showNotification(
            t().selectError
        );

        return;
    }


    if (
        currentQuestion < 2
    ) {

        currentQuestion++;


        renderQuestion(
            true
        );


        saveProgressToStorage();

    } else {

        showResult();
    }
}



/* =========================================
   PREVIOUS QUESTION
========================================= */

function previousQuestion() {

    if (
        currentQuestion <= 0
    ) {
        return;
    }


    currentQuestion--;


    renderQuestion(
        true
    );


    saveProgressToStorage();
}



/* =========================================
   RESULT CALCULATION

   0 = Technical / Digital
   1 = Research
   2 = Communication / Events
   3 = Sustainability
   4 = Creative
========================================= */

const categoryMap = [

    /* Question 1 */

    [
        [],
        [1],
        [0],
        [2],
        [4],
        [2],
        [0],
        [3]
    ],


    /* Question 2 */

    [
        [0],
        [4],
        [1],
        [2],
        [2],
        [0],
        [2],
        [2]
    ]
];



function getDirections(
    rows
) {

    const scores = [
        0,
        0,
        0,
        0,
        0
    ];


    /*
     Only questions 1 and 2 determine
     suggested directions.

     Question 3 contains motivations
     and is used as reflection context.
    */

    rows
        .slice(
            0,
            2
        )
        .forEach(
            (
                row,
                questionIndex
            ) => {

                row.forEach(
                    (optionId) => {

                        const categories =
                            categoryMap[
                                questionIndex
                            ][
                                optionId
                            ];


                        categories.forEach(
                            (category) => {

                                scores[
                                    category
                                ]++;
                            }
                        );
                    }
                );
            }
        );


    const maximum =
        Math.max(
            ...scores
        );


    if (!maximum) {
        return [];
    }


    return scores.flatMap(
        (
            score,
            index
        ) =>
            score === maximum
                ? [index]
                : []
    );
}



/* =========================================
   SHOW RESULT
========================================= */

function showResult(
    focus = true
) {

    if (
        !answers.every(
            (row) =>
                row.length > 0
        )
    ) {
        return;
    }


    completed =
        true;



    /* Title */

    const title =
        $("resultTitle");


    if (title) {

        title.textContent =
            t().resultTitleText;
    }



    /* Directions */

    const directions =
        getDirections(
            answers
        );



    /* Description */

    const description =
        $("resultDescription");


    if (description) {

        description.textContent =
            directions.length
                ? t().resultIntro
                : t().mixed;
    }



    /* Suggested ideas */

    const list =
        $("resultIdeas");


    if (list) {

        list.replaceChildren();


        directions.forEach(
            (directionId) => {

                const item =
                    document.createElement(
                        "li"
                    );


                item.textContent =
                    t().ideas[
                        directionId
                    ];


                list.append(
                    item
                );
            }
        );
    }



    /* Reflection tags */

    const tags =
        $("resultTags");

const seenTags = new Set();

    if (tags) {

        tags.replaceChildren();
const seenTags = new Set();

        answers.forEach(
            (
                row,
                questionIndex
            ) => {

                row.forEach(
                    (optionId) => {

                        const tag =
                            document.createElement(
                                "span"
                            );


                        tag.className =
                            "result-tag";


                        tag.textContent =
                            t()
                                .questions[
                                    questionIndex
                                ]
                                .options[
                                    optionId
                                ];

if (seenTags.has(tag.textContent)) return;
seenTags.add(tag.textContent);

                        tags.append(
                            tag
                        );
                    }
                );
            }
        );
    }



    const result =
        $("result");


    if (result) {

        result.classList.remove(
            "hidden"
        );
    }



    saveProgressToStorage();
    renderNextSteps(directions);



    if (
        focus &&
        result
    ) {

        scrollToSection(
            "result"
        );


        if (title) {

            title.focus({
                preventScroll:
                    true
            });
        }
    }
}



/* =========================================
   RESET SELF-CHECK
========================================= */

function resetCheck() {

    nextStepsChecked = [false, false, false];

    answers = [
        [],
        [],
        []
    ];


    currentQuestion =
        0;


    completed =
        false;



    const result =
        $("result");


    if (result) {

        result.classList.add(
            "hidden"
        );
    }



    saveProgressToStorage();


    renderQuestion();


    scrollToSection(
        "self-check"
    );



    const questionTitle =
        $("questionTitle");


    if (questionTitle) {

        questionTitle.focus({
            preventScroll:
                true
        });
    }
}



/* =========================================
   SELF-CHECK NOTICE
========================================= */

function showNotification(
    text
) {

    const message =
        $("checkNotice");


    if (!message) {
        return;
    }


    message.textContent =
        text;
}



/* =========================================
   FAQ ANSWERS
========================================= */

const faq = {

    en: {

        overview:
            "IES stands for International Excellence Scholarship. The supplied programme brief describes university study in Germany together with active community engagement at Copernicus Berlin.",

        contribution:
            "The brief mentions areas such as IT, research, data analysis, communication, design and events. Think about one concrete task you could support with your own skills. Specific roles depend on the programme team.",

        engineering:
            "Possible ideas include using MATLAB to explain sample data, AutoCAD to present an event layout, or coding to improve applicant guidance. These are suggested contributions, not confirmed IES activities or admission criteria.",

        next:
            "Open the official IES page using the link below. Check the current programme information, eligibility, required documents and application process there. This prototype does not accept applications.",

        official:
            "I cannot verify current deadlines, funding, documents or your eligibility. Please check the official IES page and contact the programme team if anything is unclear.",

        unknown:
            "This small FAQ does not have a verified answer to that question. Try one of the suggested questions or check the official IES page below."
    },


    de: {

        overview:
            "IES bedeutet International Excellence Scholarship. Die bereitgestellte Programmbeschreibung verbindet ein Universitätsstudium in Deutschland mit aktivem Engagement bei Copernicus Berlin.",

        contribution:
            "Die Beschreibung nennt Bereiche wie IT, Forschung, Datenanalyse, Kommunikation, Design und Veranstaltungen. Überlegen Sie sich eine konkrete Aufgabe, bei der Sie Ihre Fähigkeiten einbringen könnten. Konkrete Tätigkeiten hängen vom Programmteam ab.",

        engineering:
            "Mögliche Ideen sind die Erklärung von Beispieldaten mit MATLAB, die Darstellung eines Veranstaltungsplans mit AutoCAD oder die Verbesserung der Bewerberorientierung durch Programmierung. Dies sind Vorschläge und keine bestätigten IES-Aktivitäten oder Zulassungskriterien.",

        next:
            "Öffnen Sie die offizielle IES-Seite über den Link unten. Prüfen Sie dort aktuelle Programminformationen, Voraussetzungen, Unterlagen und das Bewerbungsverfahren. Dieser Prototyp nimmt keine Bewerbungen an.",

        official:
            "Ich kann aktuelle Fristen, Finanzierung, Unterlagen oder Ihre Zulassungsberechtigung nicht bestätigen. Prüfen Sie bitte die offizielle IES-Seite und wenden Sie sich bei Unklarheiten an das Programmteam.",

        unknown:
            "Diese kleine FAQ hat keine verifizierte Antwort auf diese Frage. Probieren Sie eine vorgeschlagene Frage oder besuchen Sie die offizielle IES-Seite."
    },


    ru: {

        overview:
            "IES — International Excellence Scholarship. В предоставленном описании программа сочетает учёбу в университете Германии с активным участием в сообществе Copernicus Berlin.",

        contribution:
            "В задании упоминаются такие направления, как IT, исследования, анализ данных, коммуникации, дизайн и мероприятия. Подумайте об одной конкретной задаче, в которой вы могли бы использовать свои навыки. Конкретные роли определяет команда программы.",

        engineering:
            "Возможные идеи: использовать MATLAB для объяснения демонстрационных данных, AutoCAD для представления плана мероприятия или программирование для улучшения навигации кандидатов. Это предложения, а не подтверждённые мероприятия IES или критерии зачисления.",

        next:
            "Откройте официальную страницу IES по ссылке ниже. Там необходимо проверить актуальную информацию о программе, требования, документы и порядок подачи заявки. Этот прототип не принимает заявки.",

        official:
            "Я не могу подтвердить актуальные сроки, финансирование, список документов или ваше соответствие требованиям. Проверьте официальную страницу IES и при необходимости обратитесь к команде программы.",

        unknown:
            "В этом небольшом FAQ нет проверенного ответа на такой вопрос. Выберите один из готовых вопросов или откройте официальную страницу IES."
    }
};



/* =========================================
   DETECT FAQ TOPIC
========================================= */

function getTopic(
    question
) {

    const text =
        String(question)
            .toLocaleLowerCase();



    /*
     Current or sensitive programme facts
     must always be referred to
     the official IES source.
    */

    if (
        /deadline|fund|cost|fee|eligible|eligibility|requirement|document|visa|apply|application|stipend|дедлайн|срок|финанс|стоим|требован|документ|виз|подать|заявк|стипенд|frist|finanz|kosten|voraussetz|unterlag|bewerb|zulass/.test(
            text
        )
    ) {

        return "official";
    }



    if (
        /engineering|engineer|matlab|autocad|инженер|ingenieur|техник/.test(
            text
        )
    ) {

        return "engineering";
    }



    if (
        /contribut|skill|beitrag|beitragen|fähigkeit|вклад|навык/.test(
            text
        )
    ) {

        return "contribution";
    }



    if (
        /next|step|nächst|weiter|дальше|шаг/.test(
            text
        )
    ) {

        return "next";
    }



    if (
        /^(what is ies|about ies|ies overview|was ist ies|über ies|что такое ies|об ies|расскажи (об|про) ies)[?!. ]*$/.test(
            text
        )
    ) {

        return "overview";
    }



    return "unknown";
}



/* =========================================
   FAQ SUGGESTED QUESTION
========================================= */

function askQuestion(
    key
) {

    const topics = {
        q1:
            "overview",

        q2:
            "contribution",

        q3:
            "engineering",

        q4:
            "next"
    };


    sendQuestion(
        t()[key],
        topics[key]
    );
}



/* =========================================
   SEND FAQ QUESTION
========================================= */

function sendQuestion(
    question,
    topic
) {

    const text =
        String(
            question || ""
        )
            .trim()
            .slice(
                0,
                500
            );


    if (!text) {
        return false;
    }



    chatHistory.push({
        text,

        topic:
            topic ||
            getTopic(text)
    });



    /*
     Keep page memory small.
     Chat is not stored in localStorage.
    */

    if (
        chatHistory.length >
        30
    ) {

        chatHistory.shift();
    }



    renderChat(
        true
    );


    return true;
}



/* =========================================
   SEND MANUAL FAQ MESSAGE
========================================= */

function sendMessage() {

    const input =
        $("chatInput");


    if (!input) {
        return;
    }



    const sent =
        sendQuestion(
            input.value
        );


    if (!sent) {
        return;
    }



    input.value =
        "";


    input.focus();
}



/* =========================================
   RENDER FAQ CHAT
========================================= */

function renderChat(
    appendLatest = false
) {

    const log =
        $("chatMessages");


    if (!log) {
        return;
    }



    if (!appendLatest) {

        log.replaceChildren();
    }



    function createMessage(
        text,
        user = false
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "message " +
            (
                user
                    ? "user-message"
                    : "assistant-message"
            );



        const body =
            document.createElement(
                "div"
            );


        body.className =
            "message-content";



        const name =
            document.createElement(
                "span"
            );


        name.className =
            "message-name";


        name.textContent =
            user
                ? t().you
                : t().chatName;



        const content =
            document.createElement(
                "p"
            );


        content.textContent =
            text;



        body.append(
            name,
            content
        );


        item.append(
            body
        );


        log.append(
            item
        );
    }



    /*
     Welcome message.
    */

    if (!appendLatest) {

        createMessage(
            t().chatWelcome
        );
    }



    const rows =
        appendLatest
            ? chatHistory.slice(-1)
            : chatHistory;



    rows.forEach(
        (row) => {

            /*
             User's original message remains
             in the language they typed.
            */

            createMessage(
                row.text,
                true
            );



            const answer =
                faq[
                    currentLang
                ][
                    row.topic
                ] ||
                faq[
                    currentLang
                ].unknown;



            createMessage(
                answer
            );
        }
    );



    /*
     Maximum:
     welcome + 30 user messages
     + 30 responses.
    */

    while (
        log.children.length >
        61
    ) {

        if (
            log.children[1]
        ) {

            log.children[1].remove();

        } else {

            break;
        }
    }



    log.scrollTop =
        log.scrollHeight;
}



/* =========================================
   PAGE INITIALISATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* -------------------------
           Restore saved state
        -------------------------- */

        loadProgressFromStorage();


        /* -------------------------
           Initial render
        -------------------------- */

        applyTranslations();

        renderQuestion();

        renderChat();


        if (completed) {

            showResult(
                false
            );
        }



        /* =================================
           SCROLL BUTTONS
        ================================= */

        document
            .querySelectorAll(
                "[data-scroll]"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        () => {

                            scrollToSection(
                                button.dataset
                                    .scroll
                            );
                        }
                    );
                }
            );



        /* =================================
           LANGUAGE BUTTONS
        ================================= */

        document
            .querySelectorAll(
                "[data-language]"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        () => {

                            changeLanguage(
                                button.dataset
                                    .language
                            );
                        }
                    );
                }
            );



        /* =================================
           FAQ SUGGESTED QUESTIONS
        ================================= */

        document
            .querySelectorAll(
                "[data-question]"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        () => {

                            askQuestion(
                                button.dataset
                                    .question
                            );
                        }
                    );
                }
            );



        /* =================================
           SELF-CHECK ACTIONS
        ================================= */

        const actions = {
            previousQuestion,
            nextQuestion,
            resetCheck
        };


        document
            .querySelectorAll(
                "[data-action]"
            )
            .forEach(
                (button) => {

                    const action =
                        actions[
                            button.dataset
                                .action
                        ];


                    if (
                        typeof action ===
                        "function"
                    ) {

                        button.addEventListener(
                            "click",
                            action
                        );
                    }
                }
            );



        /* =================================
           CHAT FORM
        ================================= */

        const chatForm =
            $("chatForm");


        if (chatForm) {

            chatForm.addEventListener(
                "submit",
                (event) => {

                    event.preventDefault();


                    sendMessage();
                }
            );
        }



        /* =================================
           MOBILE MENU
        ================================= */

        const mobileMenu =
            $("mobileMenu");


        const mainNav =
            $("mainNav");


        if (
            mobileMenu &&
            mainNav
        ) {

            mobileMenu.addEventListener(
                "click",
                () => {

                    const open =
                        mainNav.classList.toggle(
                            "is-open"
                        );


                    mobileMenu.setAttribute(
                        "aria-expanded",
                        String(open)
                    );
                }
            );
        }



        /* =================================
           CLOSE MENU AFTER LINK CLICK
        ================================= */

        document
            .querySelectorAll(
                ".nav-link"
            )
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        closeMenu
                    );
                }
            );



        /* =================================
           ESCAPE CLOSES MOBILE MENU
        ================================= */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key !==
                    "Escape"
                ) {
                    return;
                }


                if (
                    mainNav &&
                    mainNav.classList.contains(
                        "is-open"
                    )
                ) {

                    closeMenu();


                    if (mobileMenu) {

                        mobileMenu.focus();
                    }
                }
            }
        );



        /* =================================
           DESKTOP RESIZE
        ================================= */

        const desktopQuery =
            window.matchMedia(
                "(min-width: 901px)"
            );


        if (
            typeof desktopQuery
                .addEventListener ===
            "function"
        ) {

            desktopQuery.addEventListener(
                "change",
                closeMenu
            );
        }



        /* =================================
           ACTIVE NAVIGATION LINK
        ================================= */

        if (
            "IntersectionObserver" in
            window
        ) {

            const observer =
                new IntersectionObserver(

                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    !entry.isIntersecting
                                ) {
                                    return;
                                }


                                document
                                    .querySelectorAll(
                                        ".nav-link"
                                    )
                                    .forEach(
                                        (link) => {

                                            const active =
                                                link.hash ===
                                                "#" +
                                                entry.target.id;


                                            link.classList.toggle(
                                                "active",
                                                active
                                            );


                                            if (active) {

                                                link.setAttribute(
                                                    "aria-current",
                                                    "location"
                                                );

                                            } else {

                                                link.removeAttribute(
                                                    "aria-current"
                                                );
                                            }
                                        }
                                    );
                            }
                        );
                    },


                    {
                        rootMargin:
                            "-15% 0px -65% 0px"
                    }
                );



            [
                "home",
                "discover",
                "self-check",
                "assistant"
            ].forEach(
                (id) => {

                    const section =
                        $(id);


                    if (section) {

                        observer.observe(
                            section
                        );
                    }
                }
            );
        }
    }
);