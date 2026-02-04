// ДАННЫЕ ТЕСТА
const testData = {
    questions: [
        {
            id: 1,
            text: "В незнакомой ситуации вы сначала действуете, а потом разбираетесь?",
            typeWeights: { explorer: 2, pioneer: 2, analyst: -1, stabilizer: -2 }
        },
        {
            id: 2,
            text: "Вам проще принимать решения на основе цифр и фактов, а не интуиции?",
            typeWeights: { analyst: 2, stabilizer: 1, explorer: -2, diplomat: -1 }
        },
        {
            id: 3,
            text: "В споре вы чаще ищете компромисс, чем отстаиваете свою позицию?",
            typeWeights: { diplomat: 2, stabilizer: 1, pioneer: -2, analyst: -1 }
        },
        {
            id: 4,
            text: "Новые идеи захватывают вас больше, чем доведение текущих дел до конца?",
            typeWeights: { explorer: 2, pioneer: 1, stabilizer: -2, analyst: -1 }
        },
        {
            id: 5,
            text: "Вы часто берете на себя лидерство, даже когда вас об этом не просят?",
            typeWeights: { pioneer: 2, analyst: 1, diplomat: -2, stabilizer: -1 }
        },
        {
            id: 6,
            text: "Вам важно, чтобы всё было на своих местах и по плану?",
            typeWeights: { stabilizer: 2, analyst: 1, explorer: -2, pioneer: -1 }
        },
        {
            id: 7,
            text: "Вы легко чувствуете, что переживают другие люди, даже если они этого не показывают?",
            typeWeights: { diplomat: 2, explorer: 1, analyst: -1, pioneer: -1 }
        },
        {
            id: 8,
            text: "Вы любите разбирать сложные задачи на части, чтобы понять их устройство?",
            typeWeights: { analyst: 2, pioneer: 1, diplomat: -1, stabilizer: 1 }
        }
    ],
    
    profiles: {
        analyst: {
            name: "Аналитик-Архитектор",
            subtitle: "Системное мышление, точность, глубина",
            icon: "fas fa-chess-board",
            color: "#6366f1",
            description: "Ваш разум — это точный инструмент. Вы видите структуру там, где другие видят хаос. Для вас важны детали, логика и понимание того, как всё устроено изнутри.",
            tags: ["Стратег", "Логик", "Системщик"],
            metrics: {
                "Анализ": "92%",
                "Планирование": "85%",
                "Структура": "78%"
            },
            insights: [
                "Вы часто находите ошибки в рассуждениях других, даже если не говорите об этом вслух",
                "Ваша любовь к деталям иногда мешает увидеть общую картину",
                "В стрессе вы не паникуете, а систематизируете информацию"
            ]
        },
        explorer: {
            name: "Исследователь-Проводник",
            subtitle: "Любопытство, адаптивность, видение возможностей",
            icon: "fas fa-compass",
            color: "#10b981",
            description: "Вы смотрите на мир как на бесконечное поле для открытий. Новые идеи, неожиданные связи и возможности — это ваша стихия. Вы быстро адаптируетесь и находите нестандартные пути.",
            tags: ["Новатор", "Адаптер", "Проводник"],
            metrics: {
                "Гибкость": "88%",
                "Креативность": "95%",
                "Адаптивность": "90%"
            },
            insights: [
                "Вам скучно делать одно и то же дважды — вы всегда ищете новые подходы",
                "Иногда вы начинаете больше проектов, чем можете завершить",
                "Вы видите возможности там, где другие видят проблемы"
            ]
        },
        diplomat: {
            name: "Дипломат-Эмпат",
            subtitle: "Гармония, понимание, эмоциональный интеллект",
            icon: "fas fa-handshake",
            color: "#ec4899",
            description: "Вы чувствуете людей и ситуации на тонком уровне. Для вас важны отношения, гармония и взаимопонимание. Вы умеете сглаживать конфликты и находить подход к разным людям.",
            tags: ["Миротворец", "Эмпат", "Коммуникатор"],
            metrics: {
                "Эмпатия": "96%",
                "Гармония": "89%",
                "Коммуникация": "82%"
            },
            insights: [
                "Вы часто ставите потребности других выше своих",
                "Вы чувствуете настроение в комнате, как только входите",
                "Вам тяжело принимать жесткие решения, которые могут кого-то расстроить"
            ]
        },
        stabilizer: {
            name: "Стабилизатор-Опекун",
            subtitle: "Надежность, забота, стабильность",
            icon: "fas fa-shield-alt",
            color: "#f59e0b",
            description: "Вы — человек, на которого можно положиться. Вы создаете порядок, стабильность и безопасность вокруг себя. Практичность и ответственность — ваши сильные стороны.",
            tags: ["Опекун", "Организатор", "Защитник"],
            metrics: {
                "Надежность": "94%",
                "Забота": "87%",
                "Стабильность": "91%"
            },
            insights: [
                "Вы часто беспокоитесь о том, чтобы всё было под контролем",
                "Люди instinctively тянутся к вам в трудные моменты",
                "Вы не любите неожиданных изменений, предпочитая проверенные пути"
            ]
        },
        pioneer: {
            name: "Пионер-Двигатель",
            subtitle: "Энергия, действие, влияние",
            icon: "fas fa-bolt",
            color: "#06b6d4",
            description: "Вы заряжаете энергией и ведете за собой. Решительность, инициатива и способность влиять на других — ваши ключевые качества. Вы не ждете возможностей, вы их создаете.",
            tags: ["Лидер", "Энерджайзер", "Мотиватор"],
            metrics: {
                "Инициатива": "93%",
                "Влияние": "88%",
                "Решительность": "90%"
            },
            insights: [
                "Вы иногда бываете нетерпеливы, когда другие не успевают за вашим темпом",
                "Вам сложно делегировать — кажется, что вы сделаете всё лучше и быстрее",
                "Вы превращаете любую ситуацию в возможность для роста"
            ]
        }
    }
};

// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
let appState = {
    currentScreen: 'welcome',
    currentQuestion: 0,
    answers: {},
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
    
    // Canvas
    resultCanvas: document.getElementById('result-canvas')
};

// ОТВЕТЫ ПОЛЬЗОВАТЕЛЯ (5-балльная шкала)
const answerOptions = [
    { text: "Совсем не про меня", value: 1 },
    { text: "Скорее нет", value: 2 },
    { text: "Затрудняюсь ответить", value: 3 },
    { text: "Скорее да", value: 4 },
    { text: "Это абсолютно про меня", value: 5 }
];

// ИНИЦИАЛИЗАЦИЯ
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
            if (data.currentQuestion > 0 || Object.keys(data.answers).length > 0) {
                if (confirm('У вас есть незавершенный тест. Продолжить?')) {
                    appState = data;
                } else {
                    localStorage.removeItem('cognitiveCompassProgress');
                }
            }
        } catch (e) {
            console.error('Ошибка загрузки прогресса:', e);
        }
    }
}

// СОХРАНЕНИЕ ПРОГРЕССА
function saveProgress() {
    localStorage.setItem('cognitiveCompassProgress', JSON.stringify(appState));
}

// НАСТРОЙКА ОБРАБОТЧИКОВ СОБЫТИЙ
function setupEventListeners() {
    elements.startBtn.addEventListener('click', () => {
        showScreen('test');
        saveProgress();
    });
    
    elements.backBtn.addEventListener('click', () => {
        if (appState.currentQuestion > 0) {
            appState.currentQuestion--;
            loadQuestion();
            saveProgress();
        } else {
            showScreen('welcome');
        }
    });
    
    elements.shareImageBtn.addEventListener('click', shareAsImage);
    elements.shareTextBtn.addEventListener('click', shareAsText);
    elements.restartBtn.addEventListener('click', restartTest);
}

// ПОКАЗ ЭКРАНА
function showScreen(screenName) {
    Object.values(elements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    elements.screens[screenName].classList.add('active');
    appState.currentScreen = screenName;
    
    // Анимация появления
    if (screenName === 'result' && appState.resultProfile) {
        displayResult();
        animateResult();
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
    
    // Анимация появления вопроса
    const questionCard = document.querySelector('.question-card');
    questionCard.classList.remove('animate__fadeInRight');
    void questionCard.offsetWidth; // Перезапуск анимации
    questionCard.classList.add('animate__fadeInRight');
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
    if (appState.answers[appState.currentQuestion] === undefined) {
        showNotification('Пожалуйста, выберите ответ');
        return;
    }
    
    // Если последний вопрос - показываем результат
    if (appState.currentQuestion === testData.questions.length - 1) {
        calculateResult();
        showScreen('result');
        localStorage.removeItem('cognitiveCompassProgress');
        return;
    }
    
    // Переход к следующему вопросу
    appState.currentQuestion++;
    loadQuestion();
    saveProgress();
}

// РАСЧЕТ РЕЗУЛЬТАТА
function calculateResult() {
    // Сбрасываем баллы
    appState.scores = {
        analyst: 0,
        explorer: 0,
        diplomat: 0,
        stabilizer: 0,
        pioneer: 0
    };
    
    // Считаем баллы для каждого типа
    testData.questions.forEach((question, index) => {
        const answerValue = appState.answers[index] || 3; // По умолчанию нейтральный ответ
        
        // Преобразуем ответ в множитель от -1 до 1
        const multiplier = (answerValue - 3) / 2;
        
        // Добавляем баллы для каждого типа
        Object.keys(question.typeWeights).forEach(type => {
            appState.scores[type] += question.typeWeights[type] * multiplier;
        });
    });
    
    // Находим тип с максимальным количеством баллов
    let maxScore = -Infinity;
    let resultType = 'analyst';
    
    Object.keys(appState.scores).forEach(type => {
        if (appState.scores[type] > maxScore) {
            maxScore = appState.scores[type];
            resultType = type;
        }
    });
    
    appState.resultProfile = testData.profiles[resultType];
}

// ПОКАЗ РЕЗУЛЬТАТА
function displayResult() {
    const profile = appState.resultProfile;
    
    // Заполняем основную карточку
    elements.resultMainCard.innerHTML = `
        <div class="profile-header">
            <div class="profile-icon">
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
    
    // Заполняем метрики
    elements.metricsContainer.innerHTML = '';
    Object.entries(profile.metrics).forEach(([label, value]) => {
        const metricEl = document.createElement('div');
        metricEl.className = 'metric';
        metricEl.innerHTML = `
            <div class="metric-value">${value}</div>
            <div class="metric-label">${label}</div>
        `;
        elements.metricsContainer.appendChild(metricEl);
    });
    
    // Заполняем инсайты
    elements.insightsContainer.innerHTML = '';
    profile.insights.forEach(insight => {
        const insightEl = document.createElement('div');
        insightEl.className = 'insight-item';
        insightEl.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <div>${insight}</div>
        `;
        elements.insightsContainer.appendChild(insightEl);
    });
    
    // Настраиваем форму результата
    elements.resultShape.innerHTML = `<i class="${profile.icon}"></i>`;
    elements.resultShape.style.background = `linear-gradient(135deg, ${profile.color}, ${profile.color}dd)`;
    
    // Анимация появления
    elements.resultMainCard.classList.remove('animate__fadeInUp');
    void elements.resultMainCard.offsetWidth;
    elements.resultMainCard.classList.add('animate__fadeInUp');
}

// АНИМАЦИЯ РЕЗУЛЬТАТА
function animateResult() {
    const shape = elements.resultShape;
    shape.classList.add('float-animation');
    
    // Создаем частицы
    createParticles();
}

// СОЗДАНИЕ ЧАСТИЦ
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = appState.resultProfile.color;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0.7';
        particle.style.animation = `float ${3 + Math.random() * 4}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// ПОДЕЛИТЬСЯ КАК ИЗОБРАЖЕНИЕ
function shareAsImage() {
    const card = elements.resultMainCard;
    
    // Временно меняем стили для скриншота
    const originalStyles = {
        margin: card.style.margin,
        boxShadow: card.style.boxShadow,
        transform: card.style.transform
    };
    
    card.style.margin = '0 auto';
    card.style.boxShadow = 'none';
    card.style.transform = 'none';
    
    // Используем html2canvas для создания скриншота
    html2canvas(card, {
        backgroundColor: '#0f172a',
        scale: 2,
        useCORS: true
    }).then(canvas => {
        // Восстанавливаем стили
        card.style.margin = originalStyles.margin;
        card.style.boxShadow = originalStyles.boxShadow;
        card.style.transform = originalStyles.transform;
        
        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.download = `cognitive-compass-${appState.resultProfile.name}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        showNotification('Карточка сохранена в галерею!');
    }).catch(error => {
        console.error('Ошибка создания изображения:', error);
        showNotification('Не удалось создать карточку. Попробуйте другой способ.');
        
        // Восстанавливаем стили при ошибке
        card.style.margin = originalStyles.margin;
        card.style.boxShadow = originalStyles.boxShadow;
        card.style.transform = originalStyles.transform;
    });
}

// ПОДЕЛИТЬСЯ ТЕКСТОМ
function shareAsText() {
    const profile = appState.resultProfile;
    
    const text = `🧠 Мой когнитивный профиль: ${profile.name}

${profile.description}

${profile.tags.map(tag => `#${tag}`).join(' ')}

Пройди тест Cognitive Compass и узнай свой тип мышления!`;

    navigator.clipboard.writeText(text).then(() => {
        showNotification('Текст скопирован! Можешь поделиться в соцсетях');
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
            answers: {},
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
