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
    
    // Генератор изображений
    imageGenerator: document.getElementById('image-generator')
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
    // Настройка экрана
    showScreen(appState.currentScreen);
    
    // Установка обработчиков событий
    setupEventListeners();
    
    // Инициализация теста
    initTest();
}

// НАСТРОЙКА ОБРАБОТЧИКОВ СОБЫТИЙ
function setupEventListeners() {
    elements.startBtn.addEventListener('click', () => {
        showScreen('test');
        saveProgress();
    });
    
    elements.backBtn.addEventListener('click', handleBack);
    
    elements.shareImageBtn.addEventListener('click', shareAsImage);
    elements.shareTextBtn.addEventListener('click', shareAsText);
    elements.restartBtn.addEventListener('click', restartTest);
    
    // Обработка свайпов на мобильных
    setupSwipeGestures();
}

// ОБРАБОТКА НАЗАД
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
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Проверяем, что свайп горизонтальный и не вертикальный
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0 && appState.currentScreen === 'test') {
                // Свайп влево - следующий вопрос
                if (appState.answers[appState.currentQuestion] !== undefined) {
                    nextQuestion();
                }
            } else if (diffX < 0 && appState.currentScreen === 'test') {
                // Свайп вправо - предыдущий вопрос
                if (appState.currentQuestion > 0) {
                    appState.currentQuestion--;
                    loadQuestion();
                    saveProgress();
                }
            }
        }
        
        startX = 0;
        startY = 0;
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
    
    // Анимация появления
    if (screenName === 'result' && appState.resultProfile) {
        setTimeout(() => {
            displayResult();
            animateResult();
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
}

// АНИМАЦИЯ РЕЗУЛЬТАТА
function animateResult() {
    const shape = elements.resultShape;
    shape.style.animation = 'pulse 3s infinite';
}

// СОХРАНЕНИЕ ПРОГРЕССА
function saveProgress() {
    const progress = {
        currentQuestion: appState.currentQuestion,
        answers: appState.answers,
        scores: appState.scores
    };
    localStorage.setItem('cognitiveCompassProgress', JSON.stringify(progress));
}

// ЗАГРУЗКА ПРОГРЕССА
function loadProgress() {
    const saved = localStorage.getItem('cognitiveCompassProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.currentQuestion > 0 || Object.keys(data.answers).length > 0) {
                const shouldContinue = confirm('У вас есть незавершенный тест. Продолжить?');
                if (shouldContinue) {
                    appState.currentQuestion = data.currentQuestion;
                    appState.answers = data.answers;
                    appState.scores = data.scores;
                } else {
                    localStorage.removeItem('cognitiveCompassProgress');
                }
            }
        } catch (e) {
            console.error('Ошибка загрузки прогресса:', e);
        }
    }
}

// ПОДЕЛИТЬСЯ КАК ИЗОБРАЖЕНИЕ (ИСПРАВЛЕННЫЙ МЕТОД)
function shareAsImage() {
    const profile = appState.resultProfile;
    
    // Создаем HTML для картинки с более простыми стилями
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
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background: linear-gradient(90deg, ${profile.color}, ${profile.color}cc);
            "></div>
            
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
            
            <div style="
                font-size: 1.4rem;
                line-height: 1.6;
                margin-bottom: 30px;
                color: rgba(255, 255, 255, 0.9);
            ">
                ${profile.description}
            </div>
            
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
            
            <div style="
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin-bottom: 40px;
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
            
            <div style="
                text-align: center;
                padding-top: 25px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                color: rgba(255, 255, 255, 0.6);
                font-size: 1rem;
            ">
                Пройдите тест на cognitivecompass.github.io
                <div style="margin-top: 15px; font-weight: 600; color: #40a3dd;">
                    Ещё больше интересного в Telegram: @grehfacts
                </div>
            </div>
        </div>
    `;
    
    // Вставляем HTML в генератор
    elements.imageGenerator.innerHTML = imageHTML;
    
    // Загружаем Font Awesome для иконок
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    
    // Ждём загрузки шрифтов и иконок
    setTimeout(() => {
        // Используем html2canvas с исправленными параметрами
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
            // Удаляем временный элемент
            document.head.removeChild(link);
            
            // Создаем ссылку для скачивания
            const link = document.createElement('a');
            link.download = `cognitive-compass-${profile.name.replace(/\s+/g, '-').toLowerCase()}.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification('Картинка сохранена в галерею!');
        }).catch(error => {
            console.error('Ошибка создания изображения:', error);
            showNotification('Не удалось создать картинку. Попробуйте другой способ.');
            document.head.removeChild(link);
        });
    }, 1000);
}

// ПОДЕЛИТЬСЯ ТЕКСТОМ С ИНТЕГРАЦИЕЙ ТЕЛЕГРАМ
function shareAsText() {
    const profile = appState.resultProfile;
    
    const text = `🧠 Cognitive Compass

Мой когнитивный профиль: ${profile.name}
${profile.subtitle}

${profile.description}

Мои показатели:
${Object.entries(profile.metrics).map(([label, value]) => `• ${label}: ${value}`).join('\n')}

${profile.tags.map(tag => `#${tag}`).join(' ')} #CognitiveCompass

Ещё больше интересного о психологии в Telegram: @grehfacts

Пройти тест: https://cognitivecompass.github.io`;

    navigator.clipboard.writeText(text).then(() => {
        showNotification('Текст скопирован! Можешь поделиться в Telegram');
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
document.addEventListener('DOMContentLoaded', () => {
    // Сначала загружаем прогресс
    loadProgress();
    // Затем инициализируем приложение
    initApp();
});
