// ДАННЫЕ ТЕСТА - НАУЧНО ОБОСНОВАННАЯ АРХИТЕКТУРА
// 4 шкалы, каждая измеряется 4 вопросами (2 прямых, 2 обратных)

const testData = {
    // 4 научно обоснованные шкалы когнитивных стилей
    scales: {
        analytic: {
            name: "Аналитичность",
            description: "Склонность к системному анализу и логическому мышлению",
            color: "#6366f1",
            lowLabel: "Интуитивный",
            highLabel: "Аналитический",
            questions: [1, 5, 9, 13] // ID вопросов для этой шкалы
        },
        tolerance: {
            name: "Толерантность к неопределённости",
            description: "Комфорт в ситуациях без чётких правил и предсказуемости",
            color: "#10b981",
            lowLabel: "Предсказуемость",
            highLabel: "Гибкость",
            questions: [2, 6, 10, 14]
        },
        structure: {
            name: "Потребность в структуре",
            description: "Предпочтение организованности и планирования",
            color: "#ec4899",
            lowLabel: "Спонтанность",
            highLabel: "Структура",
            questions: [3, 7, 11, 15]
        },
        decision: {
            name: "Стиль принятия решений",
            description: "Подход к выбору: быстрый или обдуманный",
            color: "#f59e0b",
            lowLabel: "Импульсивный",
            highLabel: "Обдуманный",
            questions: [4, 8, 12, 16]
        }
    },

    // 16 вопросов (4 шкалы × 4 вопроса)
    questions: [
        // Шкала 1: Аналитичность (1, 5, 9, 13)
        {
            id: 1,
            text: "При выборе фильма вы сначала читаете отзывы и рецензии?",
            scale: "analytic",
            direction: 1, // 1 = прямой, -1 = обратный
            weight: 1
        },
        {
            id: 5,
            text: "В споре вы больше полагаетесь на факты, чем на эмоции?",
            scale: "analytic",
            direction: 1,
            weight: 1
        },
        {
            id: 9,
            text: "Вы доверяете первому впечатлению больше, чем долгому анализу?",
            scale: "analytic",
            direction: -1, // обратный вопрос
            weight: 1
        },
        {
            id: 13,
            text: "При покупке техники вы сравниваете все технические характеристики?",
            scale: "analytic",
            direction: 1,
            weight: 1
        },

        // Шкала 2: Толерантность к неопределённости (2, 6, 10, 14)
        {
            id: 2,
            text: "Новая незнакомая работа вас скорее вдохновляет, чем пугает?",
            scale: "tolerance",
            direction: 1,
            weight: 1
        },
        {
            id: 6,
            text: "Вы предпочитаете чёткие инструкции, а не свободу действий?",
            scale: "tolerance",
            direction: -1,
            weight: 1
        },
        {
            id: 10,
            text: "В отпуске вам интереснее исследовать новые места, чем отдыхать в знакомых?",
            scale: "tolerance",
            direction: 1,
            weight: 1
        },
        {
            id: 14,
            text: "Неожиданные изменения планов вызывают у вас сильный дискомфорт?",
            scale: "tolerance",
            direction: -1,
            weight: 1
        },

        // Шкала 3: Потребность в структуре (3, 7, 11, 15)
        {
            id: 3,
            text: "Вы составляете списки дел и чётко их придерживаетесь?",
            scale: "structure",
            direction: 1,
            weight: 1
        },
        {
            id: 7,
            text: "Ваши вещи обычно лежат на своих местах?",
            scale: "structure",
            direction: 1,
            weight: 1
        },
        {
            id: 11,
            text: "Вам нравится менять планы в последний момент?",
            scale: "structure",
            direction: -1,
            weight: 1
        },
        {
            id: 15,
            text: "Работать в режиме многозадачности вам легко и комфортно?",
            scale: "structure",
            direction: -1,
            weight: 1
        },

        // Шкала 4: Стиль принятия решений (4, 8, 12, 16)
        {
            id: 4,
            text: "Вы предпочитаете быстро принимать решения, а не долго размышлять?",
            scale: "decision",
            direction: -1,
            weight: 1
        },
        {
            id: 8,
            text: "Вы часто меняете решение, если появляется новая информация?",
            scale: "decision",
            direction: -1,
            weight: 1
        },
        {
            id: 12,
            text: "Вы обдумываете важные решения несколько дней?",
            scale: "decision",
            direction: 1,
            weight: 1
        },
        {
            id: 16,
            text: "Сначала действовать, потом думать — это про вас?",
            scale: "decision",
            direction: -1,
            weight: 1
        }
    ],

    // Архетипы как интерпретация комбинации шкал
    archetypes: {
        analyst: {
            name: "Аналитик-Систематик",
            subtitle: "Логика, структура, глубина",
            icon: "fas fa-chess-board",
            color: "#6366f1",
            description: "Вы мыслите системно и последовательно. Для вас важны факты, логика и понимание того, как всё устроено. Вы преуспеваете в задачах, требующих анализа, планирования и внимания к деталям.",
            conditions: {
                analytic: "high",      // Высокая аналитичность
                structure: "medium",   // Средняя потребность в структуре
                tolerance: "low",      // Низкая толерантность к неопределённости
                decision: "high"       // Обдуманные решения
            },
            insights: [
                "Вы часто находите логические несоответствия в рассуждениях других",
                "Ваша любовь к деталям иногда мешает быстро принимать решения",
                "В неопределённых ситуациях вы стремитесь собрать максимум информации",
                "Вы предпочитаете проверенные методы новым рискованным подходам"
            ],
            telegramMessage: "🧠 Аналитик-Систематик: Мыслит логически и системно. Ценит факты и структуру. #CognitiveCompass"
        },
        explorer: {
            name: "Исследователь-Адаптер",
            subtitle: "Гибкость, любопытство, открытость",
            icon: "fas fa-compass",
            color: "#10b981",
            description: "Вы смотрите на мир как на пространство возможностей. Новизна и разнообразие вас вдохновляют. Вы быстро адаптируетесь к изменениям и находите нестандартные решения в неопределённых ситуациях.",
            conditions: {
                analytic: "medium",
                structure: "low",
                tolerance: "high",
                decision: "low"
            },
            insights: [
                "Вам быстро надоедает рутина — вы постоянно ищете новое",
                "Вы часто начинаете несколько проектов одновременно",
                "Неопределённость для вас — это возможность, а не угроза",
                "Вы легко меняете планы, когда появляется что-то интересное"
            ],
            telegramMessage: "🧭 Исследователь-Адаптер: Любит новое и адаптируется к изменениям. Видит возможности в неопределённости. #CognitiveCompass"
        },
        stabilizer: {
            name: "Стабилизатор-Планировщик",
            subtitle: "Надёжность, порядок, предсказуемость",
            icon: "fas fa-shield-alt",
            color: "#ec4899",
            description: "Вы создаёте стабильность и порядок вокруг себя. Предсказуемость и ясные правила помогают вам эффективно работать. Люди ценят вашу надёжность и способность доводить дела до конца.",
            conditions: {
                analytic: "medium",
                structure: "high",
                tolerance: "low",
                decision: "high"
            },
            insights: [
                "Вы испытываете дискомфорт, когда планы меняются в последний момент",
                "Ваша организованность помогает другим чувствовать себя в безопасности",
                "Вы предпочитаете делать всё по плану, а не импровизировать",
                "Ваша сила — в завершении начатого, а не в генерации новых идей"
            ],
            telegramMessage: "🛡️ Стабилизатор-Планировщик: Создает порядок и стабильность. Надежный и предсказуемый. #CognitiveCompass"
        },
        pioneer: {
            name: "Пионер-Решатель",
            subtitle: "Действие, скорость, практичность",
            icon: "fas fa-bolt",
            color: "#f59e0b",
            description: "Вы переходите от идеи к действию быстрее других. Практичность и результат для вас важнее идеального плана. Вы умеете быстро ориентироваться в changing условиях и принимать решения на ходу.",
            conditions: {
                analytic: "low",
                structure: "low",
                tolerance: "medium",
                decision: "low"
            },
            insights: [
                "Вы иногда действуете, не имея полной информации",
                "Долгое обсуждение без действий вас раздражает",
                "Вы быстро переключаетесь между задачами, когда это нужно",
                "Ваша энергия помогает двигать проекты вперёд"
            ],
            telegramMessage: "⚡ Пионер-Решатель: Быстро переходит от идеи к действию. Практичный и решительный. #CognitiveCompass"
        },
        diplomat: {
            name: "Дипломат-Балансир",
            subtitle: "Гармония, адаптивность, контекст",
            icon: "fas fa-handshake",
            color: "#06b6d4",
            description: "Вы чувствуете контекст и адаптируетесь к ситуации. Для вас важны отношения и гармония в коллективе. Вы умеете находить баланс между разными подходами и создавать комфортную атмосферу.",
            conditions: {
                analytic: "medium",
                structure: "medium",
                tolerance: "medium",
                decision: "medium"
            },
            insights: [
                "Вы учитываете чувства других при принятии решений",
                "Вам комфортно в разных ролях в зависимости от ситуации",
                "Вы сглаживаете конфликты и находите компромиссы",
                "Ваша гибкость позволяет работать с разными типами людей"
            ],
            telegramMessage: "🤝 Дипломат-Балансир: Чувствует контекст и создает гармонию. Адаптивный и гибкий. #CognitiveCompass"
        }
    }
};

// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
let appState = {
    currentScreen: 'welcome',
    currentQuestion: 0,
    answers: new Array(16).fill(null), // 16 вопросов
    scaleScores: {
        analytic: { raw: 0, normalized: 0 },
        tolerance: { raw: 0, normalized: 0 },
        structure: { raw: 0, normalized: 0 },
        decision: { raw: 0, normalized: 0 }
    },
    archetype: null,
    secondaryArchetype: null
};

// DOM ЭЛЕМЕНТЫ
const elements = {
    // Кнопки
    startBtn: document.getElementById('start-btn'),
    backBtn: document.getElementById('back-btn'),
    shareImageBtn: document.getElementById('share-image-btn'),
    shareTextBtn: document.getElementById('share-text-btn'),
    restartBtn: document.getElementById('restart-btn'),
    
    // Экраны
    screens: {
        welcome: document.getElementById('welcome-screen'),
        test: document.getElementById('test-screen'),
        result: document.getElementById('result-screen')
    },
    
    // Вопросы
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    currentQuestionEl: document.getElementById('current-question'),
    totalQuestionsEl: document.getElementById('total-questions'),
    progressIndicator: document.getElementById('progress-indicator'),
    
    // Результаты
    scalesContainer: document.getElementById('scales-container'),
    archetypeSection: document.getElementById('archetype-section'),
    
    // Уведомления
    notification: document.getElementById('notification'),
    notificationText: document.getElementById('notification-text'),
    
    // Генератор изображений
    imageGenerator: document.getElementById('image-generator')
};

// ОТВЕТЫ ПОЛЬЗОВАТЕЛЯ (5-балльная шкала Ликерта)
const answerOptions = [
    { text: "Совсем не про меня", value: 1 },
    { text: "Скорее нет", value: 2 },
    { text: "Иногда", value: 3 },
    { text: "Скорее да", value: 4 },
    { text: "Это абсолютно про меня", value: 5 }
];

// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
function initApp() {
    // Загружаем сохранённый прогресс
    loadProgress();
    
    // Настройка экрана
    showScreen(appState.currentScreen);
    
    // Установка обработчиков событий
    setupEventListeners();
    
    // Инициализация теста
    initTest();
}

// ЗАГРУЗКА СОХРАНЁННОГО ПРОГРЕССА
function loadProgress() {
    const saved = localStorage.getItem('cognitiveCompassProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            // Проверяем, есть ли незавершённый тест
            if (data.currentQuestion > 0 || data.answers.some(a => a !== null)) {
                const shouldContinue = confirm('У вас есть незавершённый тест. Продолжить?');
                if (shouldContinue) {
                    appState.currentQuestion = data.currentQuestion || 0;
                    appState.answers = data.answers || new Array(16).fill(null);
                    appState.scaleScores = data.scaleScores || {
                        analytic: { raw: 0, normalized: 0 },
                        tolerance: { raw: 0, normalized: 0 },
                        structure: { raw: 0, normalized: 0 },
                        decision: { raw: 0, normalized: 0 }
                    };
                    
                    // Если был рассчитан результат, показываем его
                    if (data.archetype) {
                        appState.archetype = data.archetype;
                        appState.secondaryArchetype = data.secondaryArchetype || null;
                        showScreen('result');
                        displayResult();
                    }
                } else {
                    // Удаляем сохранённый прогресс
                    localStorage.removeItem('cognitiveCompassProgress');
                }
            }
        } catch (e) {
            console.error('Ошибка загрузки прогресса:', e);
            localStorage.removeItem('cognitiveCompassProgress');
        }
    }
}

// СОХРАНЕНИЕ ПРОГРЕССА
function saveProgress() {
    const progress = {
        currentQuestion: appState.currentQuestion,
        answers: appState.answers,
        scaleScores: appState.scaleScores,
        archetype: appState.archetype,
        secondaryArchetype: appState.secondaryArchetype
    };
    localStorage.setItem('cognitiveCompassProgress', JSON.stringify(progress));
}

// НАСТРОЙКА ОБРАБОТЧИКОВ СОБЫТИЙ
function setupEventListeners() {
    elements.startBtn.addEventListener('click', startTest);
    elements.backBtn.addEventListener('click', handleBack);
    elements.shareImageBtn.addEventListener('click', shareAsImage);
    elements.shareTextBtn.addEventListener('click', shareAsText);
    elements.restartBtn.addEventListener('click', restartTest);
    
    // Поддержка свайпов на мобильных
    setupSwipeGestures();
}

// НАЧАЛО ТЕСТА
function startTest() {
    showScreen('test');
    saveProgress();
}

// ОБРАБОТКА КНОПКИ НАЗАД
function handleBack() {
    if (appState.currentQuestion > 0) {
        appState.currentQuestion--;
        loadQuestion();
        saveProgress();
    } else {
        showScreen('welcome');
    }
}

// НАСТРОЙКА СВАЙПОВ
function setupSwipeGestures() {
    let startX = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!startX) return;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        // Свайп влево (следующий вопрос)
        if (diffX > 50 && appState.currentScreen === 'test') {
            if (appState.answers[appState.currentQuestion] !== null) {
                nextQuestion();
            }
        }
        
        // Свайп вправо (предыдущий вопрос)
        if (diffX < -50 && appState.currentScreen === 'test') {
            if (appState.currentQuestion > 0) {
                appState.currentQuestion--;
                loadQuestion();
                saveProgress();
            }
        }
        
        startX = 0;
    });
}

// ПОКАЗ ЭКРАНА
function showScreen(screenName) {
    Object.values(elements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    elements.screens[screenName].classList.add('active');
    appState.currentScreen = screenName;
    
    // Прокрутка вверх при смене экрана
    window.scrollTo(0, 0);
    
    // Если показываем результат, отображаем его
    if (screenName === 'result' && appState.archetype) {
        setTimeout(() => {
            displayResult();
        }, 100);
    }
}

// ИНИЦИАЛИЗАЦИЯ ТЕСТА
function initTest() {
    elements.totalQuestionsEl.textContent = testData.questions.length;
    loadQuestion();
}

// ЗАГРУЗКА ВОПРОСА
function loadQuestion() {
    const question = testData.questions[appState.currentQuestion];
    
    // Обновляем текст вопроса
    elements.questionText.textContent = question.text;
    
    // Обновляем прогресс
    updateProgress();
    
    // Очищаем контейнер с вариантами
    elements.optionsContainer.innerHTML = '';
    
    // Создаём варианты ответов
    answerOptions.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        
        // Проверяем, выбран ли этот вариант ранее
        if (appState.answers[appState.currentQuestion] === option.value) {
            optionBtn.classList.add('selected');
        }
        
        optionBtn.innerHTML = `
            <span class="option-number">${index + 1}</span>
            <span class="option-text">${option.text}</span>
        `;
        
        // Обработчик выбора
        optionBtn.addEventListener('click', () => selectAnswer(option.value, optionBtn));
        
        elements.optionsContainer.appendChild(optionBtn);
    });
}

// ВЫБОР ОТВЕТА
function selectAnswer(value, element) {
    // Снимаем выделение со всех вариантов
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Выделяем выбранный
    element.classList.add('selected');
    
    // Сохраняем ответ
    appState.answers[appState.currentQuestion] = value;
    
    // Автопереход к следующему вопросу через 0.5с
    setTimeout(() => {
        nextQuestion();
    }, 500);
    
    saveProgress();
}

// ОБНОВЛЕНИЕ ПРОГРЕССА
function updateProgress() {
    const progress = ((appState.currentQuestion + 1) / testData.questions.length) * 100;
    elements.progressIndicator.style.width = `${progress}%`;
    elements.currentQuestionEl.textContent = appState.currentQuestion + 1;
}

// СЛЕДУЮЩИЙ ВОПРОС
function nextQuestion() {
    // Проверяем, есть ли ответ
    if (appState.answers[appState.currentQuestion] === null) {
        showNotification('Пожалуйста, выберите ответ');
        return;
    }
    
    // Если последний вопрос - показываем результат
    if (appState.currentQuestion === testData.questions.length - 1) {
        calculateResult();
        showScreen('result');
        // Очищаем сохранённый прогресс после завершения
        localStorage.removeItem('cognitiveCompassProgress');
        return;
    }
    
    // Переход к следующему вопросу
    appState.currentQuestion++;
    loadQuestion();
    saveProgress();
}

// РАСЧЁТ РЕЗУЛЬТАТА (НАУЧНЫЙ ПОДХОД)
function calculateResult() {
    // Сбрасываем баллы
    Object.keys(appState.scaleScores).forEach(scale => {
        appState.scaleScores[scale].raw = 0;
    });
    
    // 1. Считаем сырые баллы по шкалам
    testData.questions.forEach((question, index) => {
        const answerValue = appState.answers[index];
        
        // Пропущенные вопросы не учитываем
        if (answerValue === null) return;
        
        // Применяем направление вопроса
        let score = answerValue;
        if (question.direction === -1) {
            // Инвертируем для обратных вопросов
            score = 6 - answerValue;
        }
        
        // Умножаем на вес вопроса
        score *= question.weight;
        
        // Добавляем к соответствующей шкале
        appState.scaleScores[question.scale].raw += score;
    });
    
    // 2. Нормализуем баллы (0-100)
    // Каждая шкала имеет 4 вопроса, каждый вопрос 1-5 баллов
    // С учётом направления: мин = 4*1 = 4, макс = 4*5 = 20
    Object.keys(appState.scaleScores).forEach(scale => {
        const raw = appState.scaleScores[scale].raw;
        // Нормализуем к 0-100
        appState.scaleScores[scale].normalized = Math.round(((raw - 4) / 16) * 100);
        // Ограничиваем диапазон
        appState.scaleScores[scale].normalized = Math.max(0, Math.min(100, appState.scaleScores[scale].normalized));
    });
    
    // 3. Определяем архетип на основе комбинации шкал
    determineArchetype();
}

// ОПРЕДЕЛЕНИЕ АРХЕТИПА
function determineArchetype() {
    const scores = appState.scaleScores;
    
    // Преобразуем normalized scores в категории (low, medium, high)
    const categories = {};
    Object.keys(scores).forEach(scale => {
        const value = scores[scale].normalized;
        if (value < 40) categories[scale] = "low";
        else if (value < 60) categories[scale] = "medium";
        else categories[scale] = "high";
    });
    
    // Ищем подходящий архетип
    let bestMatch = null;
    let bestScore = -Infinity;
    let secondBest = null;
    let secondScore = -Infinity;
    
    Object.keys(testData.archetypes).forEach(archetypeKey => {
        const archetype = testData.archetypes[archetypeKey];
        let matchScore = 0;
        
        // Сравниваем условия архетипа с категориями пользователя
        Object.keys(archetype.conditions).forEach(scale => {
            const expected = archetype.conditions[scale];
            const actual = categories[scale];
            
            if (expected === actual) {
                matchScore += 3; // Полное совпадение
            } else if (
                (expected === "low" && actual === "medium") ||
                (expected === "high" && actual === "medium") ||
                (expected === "medium" && actual === "low") ||
                (expected === "medium" && actual === "high")
            ) {
                matchScore += 1; // Частичное совпадение
            }
            // Нет совпадения = 0
        });
        
        // Учитываем близость значений
        Object.keys(scores).forEach(scale => {
            if (archetype.conditions[scale]) {
                const expectedValue = archetype.conditions[scale] === "low" ? 25 :
                                    archetype.conditions[scale] === "medium" ? 50 : 75;
                const actualValue = scores[scale].normalized;
                const difference = Math.abs(expectedValue - actualValue);
                matchScore += Math.max(0, 10 - difference / 5);
            }
        });
        
        // Обновляем лучшие совпадения
        if (matchScore > bestScore) {
            secondBest = bestMatch;
            secondScore = bestScore;
            bestMatch = archetypeKey;
            bestScore = matchScore;
        } else if (matchScore > secondScore) {
            secondBest = archetypeKey;
            secondScore = matchScore;
        }
    });
    
    // Сохраняем основной и вторичный архетипы
    appState.archetype = testData.archetypes[bestMatch];
    if (secondBest && bestScore - secondScore < 5) { // Если разница небольшая
        appState.secondaryArchetype = testData.archetypes[secondBest];
    } else {
        appState.secondaryArchetype = null;
    }
}

// ПОКАЗ РЕЗУЛЬТАТА
function displayResult() {
    displayScales();
    displayArchetype();
}

// ОТОБРАЖЕНИЕ ШКАЛ
function displayScales() {
    elements.scalesContainer.innerHTML = '';
    
    Object.keys(testData.scales).forEach(scaleKey => {
        const scale = testData.scales[scaleKey];
        const score = appState.scaleScores[scaleKey].normalized;
        
        const scaleEl = document.createElement('div');
        scaleEl.className = 'scale-item';
        
        // Определяем цвет заполнения на основе значения
        let fillColor;
        if (score < 33) fillColor = '#ef4444'; // Красный для низких
        else if (score < 66) fillColor = '#f59e0b'; // Жёлтый для средних
        else fillColor = '#10b981'; // Зелёный для высоких
        
        scaleEl.innerHTML = `
            <div class="scale-header">
                <div class="scale-name">${scale.name}</div>
                <div class="scale-value">${score}%</div>
            </div>
            <div class="scale-bar">
                <div class="scale-fill" style="width: ${score}%; background: ${fillColor};"></div>
            </div>
            <div class="scale-labels">
                <span>${scale.lowLabel}</span>
                <span>${scale.highLabel}</span>
            </div>
        `;
        
        elements.scalesContainer.appendChild(scaleEl);
        
        // Анимация заполнения
        setTimeout(() => {
            const fill = scaleEl.querySelector('.scale-fill');
            fill.style.width = `${score}%`;
        }, 100);
    });
}

// ОТОБРАЖЕНИЕ АРХЕТИПА
function displayArchetype() {
    const archetype = appState.archetype;
    
    let archetypeHTML = `
        <div class="archetype-header">
            <div class="archetype-icon" style="background: linear-gradient(135deg, ${archetype.color}, ${archetype.color}dd)">
                <i class="${archetype.icon}"></i>
            </div>
            <div class="archetype-title">
                <h3>${archetype.name}</h3>
                <div class="archetype-subtitle">${archetype.subtitle}</div>
            </div>
        </div>
        
        <div class="archetype-description">
            ${archetype.description}
        </div>
    `;
    
    // Добавляем вторичный архетип, если есть
    if (appState.secondaryArchetype) {
        const secondary = appState.secondaryArchetype;
        archetypeHTML += `
            <div style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px; border-left: 4px solid ${secondary.color};">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <div style="width: 30px; height: 30px; border-radius: 50%; background: ${secondary.color}; display: flex; align-items: center; justify-content: center;">
                        <i class="${secondary.icon}" style="color: white; font-size: 0.9rem;"></i>
                    </div>
                    <div style="font-weight: 600; color: ${secondary.color}">Также близок к вам:</div>
                </div>
                <div style="font-size: 1rem; color: rgba(255,255,255,0.8);">
                    <strong>${secondary.name}</strong> — ${secondary.description}
                </div>
            </div>
        `;
    }
    
    // Добавляем инсайты
    archetypeHTML += `
        <div class="archetype-insights">
            ${archetype.insights.map((insight, index) => `
                <div class="archetype-insight" style="border-left-color: ${archetype.color}">
                    <i class="fas fa-lightbulb" style="color: ${archetype.color}"></i>
                    <div>${insight}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    elements.archetypeSection.innerHTML = archetypeHTML;
}

// ГЕНЕРАЦИЯ И СОХРАНЕНИЕ КАРТИНКИ
function shareAsImage() {
    const archetype = appState.archetype;
    const scores = appState.scaleScores;
    
    // Создаём HTML для картинки
    const imageHTML = `
        <div style="
            width: 800px;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            font-family: 'Inter', sans-serif;
            padding: 40px;
            border-radius: 24px;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
        ">
            <!-- Верхняя граница -->
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background: linear-gradient(90deg, ${archetype.color}, ${archetype.color}cc);
            "></div>
            
            <!-- Заголовок -->
            <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="
                    font-size: 2.8rem;
                    font-weight: 800;
                    margin: 0 0 10px 0;
                    background: linear-gradient(to right, #a5b4fc, ${archetype.color});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                ">
                    Cognitive Compass
                </h1>
                <p style="color: rgba(255,255,255,0.7); font-size: 1.2rem;">Результат теста мышления</p>
            </div>
            
            <!-- Архетип -->
            <div style="display: flex; align-items: center; gap: 25px; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <div style="
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, ${archetype.color}, ${archetype.color}dd);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                    color: white;
                    flex-shrink: 0;
                ">
                    <i class="${archetype.icon}"></i>
                </div>
                
                <div>
                    <h2 style="
                        font-size: 2.2rem;
                        font-weight: 800;
                        margin: 0 0 8px 0;
                        color: white;
                    ">
                        ${archetype.name}
                    </h2>
                    <p style="
                        color: ${archetype.color}cc;
                        font-size: 1.3rem;
                        font-weight: 500;
                        margin: 0 0 15px 0;
                    ">
                        ${archetype.subtitle}
                    </p>
                    <p style="font-size: 1.2rem; line-height: 1.5; color: rgba(255,255,255,0.9);">
                        ${archetype.description}
                    </p>
                </div>
            </div>
            
            <!-- Шкалы -->
            <div style="margin-bottom: 40px;">
                <h2 style="
                    font-size: 1.8rem;
                    color: white;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    <i class="fas fa-chart-bar" style="color: ${archetype.color}"></i> Показатели мышления
                </h2>
                
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    ${Object.keys(testData.scales).map(scaleKey => {
                        const scale = testData.scales[scaleKey];
                        const score = scores[scaleKey].normalized;
                        const fillColor = score < 33 ? '#ef4444' : score < 66 ? '#f59e0b' : '#10b981';
                        
                        return `
                            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                    <div style="font-weight: 600; color: white; font-size: 1.1rem;">${scale.name}</div>
                                    <div style="font-weight: 700; font-size: 1.2rem; color: ${fillColor}">${score}%</div>
                                </div>
                                <div style="height: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; overflow: hidden;">
                                    <div style="height: 100%; width: ${score}%; background: ${fillColor}; border-radius: 5px;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 0.9rem; color: rgba(255,255,255,0.6);">
                                    <span>${scale.lowLabel}</span>
                                    <span>${scale.highLabel}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <!-- Инсайты -->
            <div style="margin-bottom: 40px;">
                <h2 style="
                    font-size: 1.8rem;
                    color: white;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    <i class="fas fa-lightbulb" style="color: ${archetype.color}"></i> Инсайты
                </h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    ${archetype.insights.map(insight => `
                        <div style="
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                            padding: 15px;
                            background: rgba(255,255,255,0.03);
                            border-radius: 12px;
                            border-left: 4px solid ${archetype.color};
                        ">
                            <i class="fas fa-lightbulb" style="color: ${archetype.color}; font-size: 1.2rem; margin-top: 2px;"></i>
                            <div style="font-size: 1.2rem; line-height: 1.5;">${insight}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Водяной знак -->
            <div style="
                text-align: center;
                padding: 25px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 12px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            ">
                <div style="
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 1.1rem;
                    margin-bottom: 15px;
                ">
                    Ещё больше интересного о психологии в нашем Telegram-канале!
                </div>
                <div style="
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #40a3dd;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                ">
                    <i class="fab fa-telegram"></i> @grehfacts
                </div>
                <div style="
                    margin-top: 20px;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 1rem;
                ">
                    Пройдите тест на Cognitive Compass
                </div>
            </div>
        </div>
    `;
    
    // Вставляем HTML в генератор
    elements.imageGenerator.innerHTML = imageHTML;
    
    // Загружаем Font Awesome для иконок
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);
    
    // Загружаем шрифт Inter
    const googleFontLink = document.createElement('link');
    googleFontLink.rel = 'stylesheet';
    googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(googleFontLink);
    
    // Ждём загрузки ресурсов
    setTimeout(() => {
        html2canvas(elements.imageGenerator, {
            backgroundColor: '#0f172a',
            scale: 2,
            useCORS: true,
            logging: false,
            allowTaint: true,
            onclone: function(clonedDoc) {
                // Копируем стили в клонированный документ
                const style = clonedDoc.createElement('style');
                style.textContent = `
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                    * { font-family: 'Inter', sans-serif !important; }
                `;
                clonedDoc.head.appendChild(style);
            }
        }).then(canvas => {
            // Удаляем временные элементы
            document.head.removeChild(fontAwesomeLink);
            document.head.removeChild(googleFontLink);
            
            // Создаём ссылку для скачивания
            const downloadLink = document.createElement('a');
            const fileName = `cognitive-compass-${archetype.name.replace(/\s+/g, '-').toLowerCase()}.png`;
            downloadLink.download = fileName;
            downloadLink.href = canvas.toDataURL('image/png');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            showNotification('Карточка сохранена в галерею!');
        }).catch(error => {
            console.error('Ошибка создания изображения:', error);
            
            // Удаляем временные элементы при ошибке
            if (document.head.contains(fontAwesomeLink)) {
                document.head.removeChild(fontAwesomeLink);
            }
            if (document.head.contains(googleFontLink)) {
                document.head.removeChild(googleFontLink);
            }
            
            showNotification('Не удалось создать картинку. Скопируйте текст результата!');
        });
    }, 1500);
}

// ПОДЕЛИТЬСЯ ТЕКСТОМ
function shareAsText() {
    const archetype = appState.archetype;
    const scores = appState.scaleScores;
    
    const text = `🧠 Cognitive Compass | Результат теста мышления

Мой когнитивный профиль: ${archetype.name}
${archetype.subtitle}

${archetype.description}

📊 Мои показатели:
${Object.keys(testData.scales).map(scaleKey => {
    const scale = testData.scales[scaleKey];
    const score = scores[scaleKey].normalized;
    return `• ${scale.name}: ${score}%`;
}).join('\n')}

💡 Инсайты:
${archetype.insights.map((insight, i) => `${i + 1}. ${insight}`).join('\n')}

🔗 Ещё больше интересного о психологии в Telegram: @grehfacts

Пройти тест: https://cognitivecompass.github.io
#CognitiveCompass #${archetype.name.replace(/\s+/g, '')}`;

    navigator.clipboard.writeText(text).then(() => {
        showNotification('Результат скопирован! Можешь поделиться в Telegram');
    }).catch(() => {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Текст скопирован!');
    });
}

// НАЧАТЬ ТЕСТ ЗАНОВО
function restartTest() {
    if (confirm('Начать тест заново?')) {
        appState = {
            currentScreen: 'welcome',
            currentQuestion: 0,
            answers: new Array(16).fill(null),
            scaleScores: {
                analytic: { raw: 0, normalized: 0 },
                tolerance: { raw: 0, normalized: 0 },
                structure: { raw: 0, normalized: 0 },
                decision: { raw: 0, normalized: 0 }
            },
            archetype: null,
            secondaryArchetype: null
        };
        
        showScreen('welcome');
        initTest();
        localStorage.removeItem('cognitiveCompassProgress');
    }
}

// ПОКАЗАТЬ УВЕДОМЛЕНИЕ
function showNotification(message) {
    elements.notificationText.textContent = message;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
document.addEventListener('DOMContentLoaded', initApp);
