// ДАННЫЕ ТЕСТА - ПЕРЕПРОВЕРЕННЫЕ И СБАЛАНСИРОВАННЫЕ
const testData = {
    // Вопросы основаны на научных концепциях когнитивных стилей
    questions: [
        {
            id: 1,
            text: "Вы предпочитаете действовать по плану, а не импровизировать?",
            // Высокие баллы: Аналитик, Стабилизатор
            // Низкие баллы: Исследователь, Пионер
            weights: { analyst: 2, stabilizer: 2, explorer: -2, pioneer: -2, diplomat: 0 }
        },
        {
            id: 2,
            text: "Новые идеи и возможности вас скорее вдохновляют, чем пугают?",
            // Высокие баллы: Исследователь, Пионер
            // Низкие баллы: Стабилизатор, Аналитик
            weights: { explorer: 2, pioneer: 2, stabilizer: -2, analyst: -1, diplomat: 1 }
        },
        {
            id: 3,
            text: "В конфликте вы чаще ищете компромисс, чем отстаиваете свою позицию?",
            // Высокие баллы: Дипломат, Стабилизатор
            // Низкие баллы: Пионер, Аналитик
            weights: { diplomat: 2, stabilizer: 1, pioneer: -2, analyst: -1, explorer: 0 }
        },
        {
            id: 4,
            text: "Вы быстро загораетесь новыми проектами, но редко доводите их до конца?",
            // Высокие баллы: Исследователь, Пионер
            // Низкие баллы: Аналитик, Стабилизатор
            weights: { explorer: 2, pioneer: 1, analyst: -2, stabilizer: -2, diplomat: 0 }
        },
        {
            id: 5,
            text: "Вы легко берете на себя ответственность и руководите другими?",
            // Высокие баллы: Пионер, Аналитик
            // Низкие баллы: Дипломат, Стабилизатор
            weights: { pioneer: 2, analyst: 1, diplomat: -1, stabilizer: -1, explorer: 0 }
        },
        {
            id: 6,
            text: "Вам важно, чтобы всё было организовано и предсказуемо?",
            // Высокие баллы: Стабилизатор, Аналитик
            // Ниские баллы: Исследователь, Пионер
            weights: { stabilizer: 2, analyst: 1, explorer: -2, pioneer: -1, diplomat: 0 }
        },
        {
            id: 7,
            text: "Вы тонко чувствуете настроение и эмоции окружающих?",
            // Высокие баллы: Дипломат, Стабилизатор
            // Низкие баллы: Аналитик, Пионер
            weights: { diplomat: 2, stabilizer: 1, analyst: -1, pioneer: -1, explorer: 0 }
        },
        {
            id: 8,
            text: "Вы любите разбирать сложные задачи на части, чтобы понять их устройство?",
            // Высокие баллы: Аналитик, Исследователь
            // Низкие баллы: Пионер, Дипломат
            weights: { analyst: 2, explorer: 1, pioneer: -1, diplomat: -1, stabilizer: 0 }
        }
    ],
    
    // Психологические профили - научно обоснованные архетипы
    profiles: {
        analyst: {
            name: "Аналитик-Архитектор",
            subtitle: "Системное мышление, точность, глубина",
            icon: "fas fa-chess-board",
            color: "#6366f1",
            description: "Ваш разум — это точный инструмент. Вы видите структуру там, где другие видют хаос. Для вас важны детали, логика и понимание того, как всё устроено изнутри. Вы преуспеваете в задачах, требующих анализа, планирования и системного подхода.",
            tags: ["Стратег", "Логик", "Системщик"],
            metrics: {
                "Анализ": "92%",
                "Планирование": "85%",
                "Структура": "78%"
            },
            insights: [
                "Вы находите ошибки в рассуждениях других, даже если не говорите об этом вслух",
                "Ваша любовь к деталям иногда мешает увидеть общую картину",
                "В стрессе вы не паникуете, а систематизируете информацию",
                "Вы цените проверенные методы больше, чем новые подходы"
            ],
            telegramMessage: "🧠 Аналитик-Архитектор: Видит структуру в хаосе. Любит детали, логику и системный подход. #CognitiveCompass"
        },
        explorer: {
            name: "Исследователь-Проводник",
            subtitle: "Любопытство, адаптивность, видение возможностей",
            icon: "fas fa-compass",
            color: "#10b981",
            description: "Вы смотрите на мир как на бесконечное поле для открытий. Новые идеи, неожиданные связи и возможности — это ваша стихия. Вы быстро адаптируетесь и находите нестандартные пути там, где другие видят тупики.",
            tags: ["Новатор", "Адаптер", "Проводник"],
            metrics: {
                "Гибкость": "88%",
                "Креативность": "95%",
                "Адаптивность": "90%"
            },
            insights: [
                "Вам скучно делать одно и то же дважды — вы всегда ищете новые подходы",
                "Иногда вы начинаете больше проектов, чем можете завершить",
                "Вы видите возможности там, где другие видят проблемы",
                "Ваша открытость новому делает вас идеальным пионером"
            ],
            telegramMessage: "🧭 Исследователь-Проводник: Видит возможности в каждом повороте. Любит новое и нестандартные подходы. #CognitiveCompass"
        },
        diplomat: {
            name: "Дипломат-Эмпат",
            subtitle: "Гармония, понимание, эмоциональный интеллект",
            icon: "fas fa-handshake",
            color: "#ec4899",
            description: "Вы чувствуете людей и ситуации на тонком уровне. Для вас важны отношения, гармония и взаимопонимание. Вы умеете сглаживать конфликты и находить подход к разным людям, создавая атмосферу сотрудничества.",
            tags: ["Миротворец", "Эмпат", "Коммуникатор"],
            metrics: {
                "Эмпатия": "96%",
                "Гармония": "89%",
                "Коммуникация": "82%"
            },
            insights: [
                "Вы часто ставите потребности других выше своих",
                "Вы чувствуете настроение в комнате, как только входите",
                "Вам тяжело принимать жесткие решения, которые могут кого-то расстроить",
                "Вы создаете безопасное пространство для выражения эмоций"
            ],
            telegramMessage: "🤝 Дипломат-Эмпат: Чувствует эмоции других. Создает гармонию и взаимопонимание. #CognitiveCompass"
        },
        stabilizer: {
            name: "Стабилизатор-Опекун",
            subtitle: "Надежность, забота, стабильность",
            icon: "fas fa-shield-alt",
            color: "#f59e0b",
            description: "Вы — человек, на которого можно положиться. Вы создаете порядок, стабильность и безопасность вокруг себя. Практичность и ответственность — ваши сильные стороны. Люди тянутся к вам в трудные моменты.",
            tags: ["Опекун", "Организатор", "Защитник"],
            metrics: {
                "Надежность": "94%",
                "Забота": "87%",
                "Стабильность": "91%"
            },
            insights: [
                "Вы часто беспокоитесь о том, чтобы всё было под контролем",
                "Люди instinctively тянутся к вам в трудные моменты",
                "Вы не любите неожиданных изменений, предпочитая проверенные пути",
                "Ваша предсказуемость создает чувство безопасности для других"
            ],
            telegramMessage: "🛡️ Стабилизатор-Опекун: Создает порядок и безопасность. Надежный и практичный. #CognitiveCompass"
        },
        pioneer: {
            name: "Пионер-Двигатель",
            subtitle: "Энергия, действие, влияние",
            icon: "fas fa-bolt",
            color: "#06b6d4",
            description: "Вы заряжаете энергией и ведете за собой. Решительность, инициатива и способность влиять на других — ваши ключевые качества. Вы не ждете возможностей, вы их создаете. Быстро переходите от идеи к действию.",
            tags: ["Лидер", "Энерджайзер", "Мотиватор"],
            metrics: {
                "Инициатива": "93%",
                "Влияние": "88%",
                "Решительность": "90%"
            },
            insights: [
                "Вы иногда бываете нетерпеливы, когда другие не успевают за вашим темпом",
                "Вам сложно делегировать — кажется, что вы сделаете всё лучше и быстрее",
                "Вы превращаете любую ситуацию в возможность для роста",
                "Ваша энергия заразительна и мотивирует окружающих"
            ],
            telegramMessage: "⚡ Пионер-Двигатель: Заряжает энергией и ведет за собой. Быстрый переход от идеи к действию. #CognitiveCompass"
        }
    }
};

// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
let appState = {
    currentScreen: 'welcome',
    currentQuestion: 0,
    answers: new Array(8).fill(null),
    scores: {
        analyst: 0,
        explorer: 0,
        diplomat: 0,
        stabilizer: 0,
        pioneer: 0
    },
    resultProfile: null
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
    resultMainCard: document.getElementById('result-main-card'),
    resultShape: document.getElementById('result-shape'),
    metricsContainer: document.getElementById('metrics-container'),
    insightsContainer: document.getElementById('insights-container'),
    
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
    // Загружаем сохраненный прогресс
    loadProgress();
    
    // Настройка экрана
    showScreen(appState.currentScreen);
    
    // Установка обработчиков событий
    setupEventListeners();
    
    // Инициализация теста
    initTest();
}

// ЗАГРУЗКА СОХРАНЕННОГО ПРОГРЕССА
function loadProgress() {
    const saved = localStorage.getItem('cognitiveCompassProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            // Проверяем, есть ли незавершенный тест
            if (data.currentQuestion > 0 || data.answers.some(a => a !== null)) {
                const shouldContinue = confirm('У вас есть незавершенный тест. Продолжить?');
                if (shouldContinue) {
                    appState.currentQuestion = data.currentQuestion || 0;
                    appState.answers = data.answers || new Array(8).fill(null);
                    appState.scores = data.scores || {
                        analyst: 0, explorer: 0, diplomat: 0, stabilizer: 0, pioneer: 0
                    };
                    
                    // Если был рассчитан результат, показываем его
                    if (data.resultProfile) {
                        appState.resultProfile = data.resultProfile;
                        showScreen('result');
                        displayResult();
                    }
                } else {
                    // Удаляем сохраненный прогресс
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
        scores: appState.scores,
        resultProfile: appState.resultProfile
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
    if (screenName === 'result' && appState.resultProfile) {
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
    
    // Создаем варианты ответов
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
        // Очищаем сохраненный прогресс после завершения
        localStorage.removeItem('cognitiveCompassProgress');
        return;
    }
    
    // Переход к следующему вопросу
    appState.currentQuestion++;
    loadQuestion();
    saveProgress();
}

// РАСЧЕТ РЕЗУЛЬТАТА (УЛУЧШЕННАЯ ЛОГИКА)
function calculateResult() {
    // Сбрасываем баллы
    appState.scores = {
        analyst: 0,
        explorer: 0,
        diplomat: 0,
        stabilizer: 0,
        pioneer: 0
    };
    
    // Считаем баллы для каждого типа на основе ответов
    testData.questions.forEach((question, index) => {
        const answerValue = appState.answers[index] || 3; // По умолчанию нейтральный ответ (3)
        
        // Преобразуем ответ в множитель от -2 до 2
        const multiplier = answerValue - 3; // -2, -1, 0, 1, 2
        
        // Добавляем взвешенные баллы для каждого типа
        Object.keys(question.weights).forEach(type => {
            appState.scores[type] += question.weights[type] * multiplier;
        });
    });
    
    // Нормализуем баллы (приводим к диапазону 0-100 для отображения)
    const maxPossibleScore = 8 * 2 * 2; // 8 вопросов * макс вес 2 * макс множитель 2 = 32
    Object.keys(appState.scores).forEach(type => {
        // Преобразуем к диапазону 0-100 для метрик
        appState.scores[type] = Math.round(((appState.scores[type] + 32) / 64) * 100);
    });
    
    // Находим тип с максимальным количеством баллов
    let maxScore = -Infinity;
    let resultType = 'analyst'; // По умолчанию
    
    Object.keys(appState.scores).forEach(type => {
        if (appState.scores[type] > maxScore) {
            maxScore = appState.scores[type];
            resultType = type;
        }
    });
    
    appState.resultProfile = testData.profiles[resultType];
    
    // Для отладки - логируем результаты
    console.log('Баллы:', appState.scores);
    console.log('Результат:', resultType, appState.resultProfile.name);
}

// ПОКАЗ РЕЗУЛЬТАТА
function displayResult() {
    const profile = appState.resultProfile;
    
    // Устанавливаем цвет для всех элементов
    document.documentElement.style.setProperty('--profile-color', profile.color);
    
    // Заполняем основную карточку
    elements.resultMainCard.innerHTML = `
        <div class="profile-header">
            <div class="profile-icon" style="background: linear-gradient(135deg, ${profile.color}, ${profile.color}dd)">
                <i class="${profile.icon}"></i>
            </div>
            <div class="profile-title">
                <h3>${profile.name}</h3>
                <div class="profile-subtitle">${profile.subtitle}</div>
            </div>
        </div>
        
        <div class="profile-description">
            ${profile.description}
        </div>
        
        <div class="profile-tags">
            ${profile.tags.map(tag => `<span class="profile-tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // Заполняем метрики с цветом профиля
    elements.metricsContainer.innerHTML = '';
    Object.entries(profile.metrics).forEach(([label, value]) => {
        const metricEl = document.createElement('div');
        metricEl.className = 'metric';
        metricEl.innerHTML = `
            <div class="metric-value" style="color: ${profile.color}">${value}</div>
            <div class="metric-label">${label}</div>
        `;
        elements.metricsContainer.appendChild(metricEl);
    });
    
    // Заполняем инсайты с цветом профиля
    elements.insightsContainer.innerHTML = '';
    profile.insights.forEach(insight => {
        const insightEl = document.createElement('div');
        insightEl.className = 'insight-item';
        insightEl.style.borderLeftColor = profile.color;
        insightEl.innerHTML = `
            <i class="fas fa-lightbulb" style="color: ${profile.color}"></i>
            <div>${insight}</div>
        `;
        elements.insightsContainer.appendChild(insightEl);
    });
    
    // Настраиваем форму результата
    elements.resultShape.innerHTML = `<i class="${profile.icon}"></i>`;
    elements.resultShape.style.background = `linear-gradient(135deg, ${profile.color}, ${profile.color}dd)`;
    elements.resultShape.style.boxShadow = `0 15px 35px ${profile.color}40`;
}

// ГЕНЕРАЦИЯ И СОХРАНЕНИЕ КАРТИНКИ (ПОЛНАЯ ВЕРСИЯ)
// ГЕНЕРАЦИЯ И СОХРАНЕНИЕ КАРТИНКИ (ИСПРАВЛЕННАЯ ВЕРСИЯ)
function shareAsImage() {
    const profile = appState.resultProfile;
    
    // Создаем HTML для картинки с полной информацией
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
                background: linear-gradient(90deg, ${profile.color}, ${profile.color}cc);
            "></div>
            
            <!-- Заголовок профиля -->
            <div style="display: flex; align-items: center; gap: 25px; margin-bottom: 30px;">
                <div style="
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, ${profile.color}, ${profile.color}dd);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                    color: white;
                    flex-shrink: 0;
                ">
                    <i class="${profile.icon}"></i>
                </div>
                
                <div>
                    <h1 style="
                        font-size: 2.8rem;
                        font-weight: 800;
                        margin: 0 0 8px 0;
                        background: linear-gradient(to right, #a5b4fc, ${profile.color});
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    ">
                        ${profile.name}
                    </h1>
                    <p style="
                        color: ${profile.color}cc;
                        font-size: 1.2rem;
                        font-weight: 500;
                        margin: 0;
                    ">
                        ${profile.subtitle}
                    </p>
                </div>
            </div>
            
            <!-- Описание -->
            <div style="
                font-size: 1.4rem;
                line-height: 1.6;
                margin-bottom: 30px;
                color: rgba(255, 255, 255, 0.9);
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            ">
                ${profile.description}
            </div>
            
            <!-- Теги -->
            <div style="display: flex; gap: 15px; margin-bottom: 30px; flex-wrap: wrap;">
                ${profile.tags.map(tag => `
                    <span style="
                        background: rgba(255, 255, 255, 0.1);
                        color: ${profile.color}cc;
                        padding: 10px 20px;
                        border-radius: 50px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        border: 2px solid ${profile.color}66;
                    ">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            
            <!-- Метрики -->
            <div style="margin-bottom: 40px;">
                <h2 style="
                    font-size: 1.8rem;
                    color: white;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
                    <i class="fas fa-tachometer-alt" style="color: ${profile.color}"></i> Показатели
                </h2>
                <div style="
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                ">
                    ${Object.entries(profile.metrics).map(([label, value]) => `
                        <div style="
                            text-align: center;
                            padding: 20px;
                            background: rgba(255, 255, 255, 0.05);
                            border-radius: 16px;
                            border: 1px solid rgba(255, 255, 255, 0.1);
                        ">
                            <div style="
                                font-size: 2.5rem;
                                font-weight: 800;
                                color: ${profile.color};
                                margin-bottom: 8px;
                            ">
                                ${value}
                            </div>
                            <div style="
                                font-size: 1rem;
                                color: rgba(255, 255, 255, 0.7);
                            ">
                                ${label}
                            </div>
                        </div>
                    `).join('')}
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
                    <i class="fas fa-lightbulb" style="color: ${profile.color}"></i> Инсайты
                </h2>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    ${profile.insights.map(insight => `
                        <div style="
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                            padding: 15px;
                            background: rgba(255, 255, 255, 0.03);
                            border-radius: 12px;
                            border-left: 4px solid ${profile.color};
                        ">
                            <i class="fas fa-lightbulb" style="color: ${profile.color}; font-size: 1.2rem; margin-top: 2px;"></i>
                            <div style="font-size: 1.2rem; line-height: 1.5;">${insight}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Водяной знак с ссылкой на канал -->
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
            
            // Создаем ссылку для скачивания (ИЗМЕНЕНО: переименовали переменную)
            const downloadLink = document.createElement('a');
            const fileName = `cognitive-compass-${profile.name.replace(/\s+/g, '-').toLowerCase()}.png`;
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
            
            // Показываем альтернативный способ
            showNotification('Не удалось создать картинку. Скопируйте текст результата и поделитесь им!');
        });
    }, 1500);
}

// ПОДЕЛИТЬСЯ ТЕКСТОМ (С УПОМИНАНИЕМ КАНАЛА)
function shareAsText() {
    const profile = appState.resultProfile;
    
    const text = `🧠 Cognitive Compass | Мой когнитивный профиль

${profile.name}
${profile.subtitle}

${profile.description}

📊 Мои показатели:
${Object.entries(profile.metrics).map(([label, value]) => `• ${label}: ${value}`).join('\n')}

💡 Инсайты:
${profile.insights.map((insight, i) => `${i + 1}. ${insight}`).join('\n')}

${profile.tags.map(tag => `#${tag}`).join(' ')} #CognitiveCompass

🔗 Ещё больше интересного о психологии в Telegram: @grehfacts

Пройти тест: https://cognitivecompass.github.io`;

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
            answers: new Array(8).fill(null),
            scores: {
                analyst: 0,
                explorer: 0,
                diplomat: 0,
                stabilizer: 0,
                pioneer: 0
            },
            resultProfile: null
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
