// Данные теста
const testData = {
    // Вопросы основаны на сокращённой версии Big Five Inventory[citation:9] 
    // и исследованиях когнитивных стилей[citation:2]
    questions: [
        {
            id: 1,
            text: "Когда я сталкиваюсь с новой задачей, я сначала изучаю все детали и составляю план",
            trait: "conscientiousness",
            reverse: false
        },
        {
            id: 2,
            text: "Неопределённость меня скорее вдохновляет, чем пугает",
            trait: "openness",
            reverse: false
        },
        {
            id: 3,
            text: "В споре я скорее уступлю, чтобы сохранить отношения, чем буду доказывать свою правоту",
            trait: "agreeableness",
            reverse: false
        },
        {
            id: 4,
            text: "Я часто беспокоюсь о том, что что-то может пойти не так",
            trait: "neuroticism",
            reverse: false
        },
        {
            id: 5,
            text: "На вечеринке я обычно активно общаюсь с новыми людьми",
            trait: "extraversion",
            reverse: false
        },
        {
            id: 6,
            text: "Принимая важное решение, я больше доверяю своей интуиции, чем логическому анализу",
            trait: "openness",
            reverse: true
        },
        {
            id: 7,
            text: "Мне проще работать, когда у меня есть чёткие инструкции и понятные ожидания",
            trait: "conscientiousness",
            reverse: true
        },
        {
            id: 8,
            text: "В сложной ситуации я сначала пытаюсь успокоиться, а потом искать решение",
            trait: "neuroticism",
            reverse: true
        }
    ],
    
    // Варианты ответов (5-балльная шкала как в BFI-S[citation:9])
    options: [
        { text: "Полностью не согласен", value: 1 },
        { text: "Скорее не согласен", value: 2 },
        { text: "Затрудняюсь ответить", value: 3 },
        { text: "Скорее согласен", value: 4 },
        { text: "Полностью согласен", value: 5 }
    ],
    
    // Психологические профили
    profiles: [
        {
            id: "analyst",
            name: "Аналитик-Стратег",
            subtitle: "Системное мышление, планирование, точность",
            icon: "fas fa-chess-board",
            color: "#4361ee",
            description: "Вы мыслите структурированно и логично. Для вас важны детали, точность и системный подход к решению задач. Вы преуспеваете там, где нужен анализ и планирование.",
            strengths: ["Склонность к глубокому анализу", "Умение составлять эффективные планы", "Внимание к деталям", "Системное мышление"],
            risks: ["Можете упускать общую картину", "Склонность к чрезмерному анализу", "Трудности с импровизацией", "Неприятие неопределённости"],
            thinkingStyle: "Аналитический, последовательный, логичный. Вы разбиваете сложные задачи на части и решаете их системно.",
            stressReaction: "В стрессе вы стараетесь взять ситуацию под контроль через планирование. Можете стать более критичными и требовательными.",
            scores: {
                openness: "средняя",
                conscientiousness: "высокая",
                extraversion: "низкая",
                agreeableness: "средняя",
                neuroticism: "низкая"
            }
        },
        {
            id: "explorer",
            name: "Исследователь-Новатор",
            subtitle: "Креативность, адаптивность, любопытство",
            icon: "fas fa-compass",
            color: "#4cc9f0",
            description: "Вы открыты новому опыту и легко адаптируетесь к изменениям. Ваше мышление гибкое, а любопытство помогает находить нестандартные решения.",
            strengths: ["Высокая адаптивность", "Креативность", "Толерантность к неопределённости", "Любознательность"],
            risks: ["Можете быть непоследовательными", "Трудности с рутиной", "Склонность к рассеянности", "Импульсивность"],
            thinkingStyle: "Гибкий, интуитивный, холистический. Вы видите связи между разными идеями и создаёте новые комбинации.",
            stressReaction: "В стрессе вы ищете новые пути и альтернативы. Можете стать импульсивными или слишком быстро менять решения.",
            scores: {
                openness: "высокая",
                conscientiousness: "низкая",
                extraversion: "средняя",
                agreeableness: "средняя",
                neuroticism: "низкая"
            }
        },
        {
            id: "diplomat",
            name: "Дипломат-Эмпат",
            subtitle: "Эмоциональный интеллект, гармония, сотрудничество",
            icon: "fas fa-handshake",
            color: "#7209b7",
            description: "Вы тонко чувствуете эмоции других людей и стремитесь к гармонии в отношениях. Для вас важны сотрудничество и взаимопонимание.",
            strengths: ["Высокий эмоциональный интеллект", "Умение разрешать конфликты", "Эмпатия", "Навыки сотрудничества"],
            risks: ["Склонность к самопожертвованию", "Трудности с жёсткими решениями", "Чувствительность к критике", "Избегание конфликтов"],
            thinkingStyle: "Интуитивный, ориентированный на людей и контекст. Вы учитываете чувства и потребности других.",
            stressReaction: "В стрессе вы стараетесь восстановить гармонию. Можете избегать конфликтов или брать на себя слишком много.",
            scores: {
                openness: "средняя",
                conscientiousness: "средняя",
                extraversion: "средняя",
                agreeableness: "высокая",
                neuroticism: "средняя"
            }
        },
        {
            id: "stabilizer",
            name: "Стабилизатор-Опекун",
            subtitle: "Надёжность, практичность, забота",
            icon: "fas fa-shield-alt",
            color: "#4CAF50",
            description: "Вы обеспечиваете стабильность и надёжность. Практичный и ответственный подход помогает вам создавать безопасную среду для себя и других.",
            strengths: ["Надёжность", "Практичность", "Ответственность", "Заботливость"],
            risks: ["Сопротивление изменениям", "Излишняя осторожность", "Трудности с принятием рисков", "Консерватизм"],
            thinkingStyle: "Практичный, ориентированный на традиции и проверенные методы. Вы цените стабильность и предсказуемость.",
            stressReaction: "В стрессе вы цепляетесь за знакомое и предсказуемое. Можете стать более контролирующими или тревожными.",
            scores: {
                openness: "низкая",
                conscientiousness: "высокая",
                extraversion: "низкая",
                agreeableness: "высокая",
                neuroticism: "средняя"
            }
        },
        {
            id: "pioneer",
            name: "Пионер-Лидер",
            subtitle: "Энергия, инициатива, влияние",
            icon: "fas fa-fire",
            color: "#f72585",
            description: "Вы энергичны, уверены в себе и легко ведёте за собой других. Ваша инициативность и решительность помогают достигать целей.",
            strengths: ["Инициативность", "Уверенность", "Лидерские качества", "Решительность"],
            risks: ["Нетерпеливость", "Доминирование", "Импульсивность", "Недооценка рисков"],
            thinkingStyle: "Активный, ориентированный на действия и результаты. Вы быстро переходите от идеи к реализации.",
            stressReaction: "В стрессе вы пытаетесь взять ситуацию под контроль через активные действия. Можете стать авторитарными или нетерпеливыми.",
            scores: {
                openness: "средняя",
                conscientiousness: "средняя",
                extraversion: "высокая",
                agreeableness: "низкая",
                neuroticism: "низкая"
            }
        }
    ]
};

// Состояние приложения
let appState = {
    currentScreen: 'welcome',
    currentQuestion: 0,
    answers: [],
    selectedOption: null,
    resultProfile: null
};

// Элементы DOM
const screens = {
    welcome: document.getElementById('welcome-screen'),
    test: document.getElementById('test-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    resultCard: document.getElementById('result-card'),
    shareBtn: document.getElementById('share-btn'),
    restartBtn: document.getElementById('restart-btn'),
    notification: document.getElementById('notification'),
    notificationText: document.getElementById('notification-text')
};

// Инициализация приложения
function initApp() {
    // Показываем экран приветствия
    showScreen('welcome');
    
    // Инициализируем обработчики событий
    elements.startBtn.addEventListener('click', startTest);
    elements.prevBtn.addEventListener('click', prevQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.shareBtn.addEventListener('click', shareResult);
    elements.restartBtn.addEventListener('click', restartTest);
    
    // Инициализируем тест
    initTest();
}

// Показ экрана
function showScreen(screenName) {
    // Скрываем все экраны
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показываем выбранный экран
    screens[screenName].classList.add('active');
    appState.currentScreen = screenName;
}

// Инициализация теста
function initTest() {
    appState.currentQuestion = 0;
    appState.answers = [];
    appState.selectedOption = null;
    updateProgress();
    loadQuestion();
}

// Начало теста
function startTest() {
    showScreen('test');
    initTest();
}

// Загрузка вопроса
function loadQuestion() {
    const question = testData.questions[appState.currentQuestion];
    
    // Обновляем текст вопроса
    elements.questionText.textContent = question.text;
    
    // Очищаем контейнер с вариантами ответов
    elements.optionsContainer.innerHTML = '';
    
    // Создаём варианты ответов
    testData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // Проверяем, выбран ли этот вариант
        const isSelected = appState.answers[appState.currentQuestion] === option.value;
        if (isSelected) {
            optionElement.classList.add('selected');
            appState.selectedOption = option.value;
        }
        
        optionElement.innerHTML = `
            <span class="option-number">${index + 1}</span>
            <span class="option-text">${option.text}</span>
        `;
        
        // Обработчик выбора варианта
        optionElement.addEventListener('click', () => selectOption(option.value, optionElement));
        
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // Обновляем состояние кнопок
    updateButtons();
    updateProgress();
}

// Выбор варианта ответа
function selectOption(value, element) {
    // Снимаем выделение со всех вариантов
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Выделяем выбранный вариант
    element.classList.add('selected');
    
    // Сохраняем ответ
    appState.answers[appState.currentQuestion] = value;
    appState.selectedOption = value;
    
    // Обновляем состояние кнопок
    updateButtons();
}

// Обновление состояния кнопок
function updateButtons() {
    // Кнопка "Назад"
    elements.prevBtn.disabled = appState.currentQuestion === 0;
    
    // Кнопка "Далее"
    const hasAnswer = appState.answers[appState.currentQuestion] !== undefined;
    elements.nextBtn.disabled = !hasAnswer;
    
    // Текст кнопки "Далее"
    if (appState.currentQuestion === testData.questions.length - 1) {
        elements.nextBtn.innerHTML = 'Узнать результат <i class="fas fa-chart-bar"></i>';
    } else {
        elements.nextBtn.innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
    }
}

// Обновление прогресс-бара
function updateProgress() {
    const progress = ((appState.currentQuestion + 1) / testData.questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Вопрос ${appState.currentQuestion + 1} из ${testData.questions.length}`;
}

// Переход к предыдущему вопросу
function prevQuestion() {
    if (appState.currentQuestion > 0) {
        appState.currentQuestion--;
        appState.selectedOption = appState.answers[appState.currentQuestion];
        loadQuestion();
    }
}

// Переход к следующему вопросу
function nextQuestion() {
    // Проверяем, есть ли ответ на текущий вопрос
    if (appState.answers[appState.currentQuestion] === undefined) {
        return;
    }
    
    // Если это последний вопрос, показываем результат
    if (appState.currentQuestion === testData.questions.length - 1) {
        calculateResult();
        showScreen('result');
        displayResult();
        return;
    }
    
    // Переходим к следующему вопросу
    appState.currentQuestion++;
    appState.selectedOption = appState.answers[appState.currentQuestion];
    loadQuestion();
}

// Расчёт результата
function calculateResult() {
    // Считаем баллы по чертам личности (Big Five)[citation:1][citation:9]
    const scores = {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0
    };
    
    // Обработка ответов
    testData.questions.forEach((question, index) => {
        const answer = appState.answers[index];
        let value = answer;
        
        // Обработка обратных вопросов
        if (question.reverse) {
            value = 6 - answer; // Инвертируем значение (5-балльная шкала)
        }
        
        // Добавляем баллы к соответствующей черте
        scores[question.trait] += value;
    });
    
    // Определяем доминирующие черты
    const dominantTraits = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(item => item[0]);
    
    // Определяем профиль на основе доминирующих черт
    let profileId = 'analyst'; // По умолчанию
    
    if (dominantTraits.includes('openness') && dominantTraits.includes('extraversion')) {
        profileId = 'explorer';
    } else if (dominantTraits.includes('agreeableness') && dominantTraits.includes('extraversion')) {
        profileId = 'diplomat';
    } else if (dominantTraits.includes('conscientiousness') && dominantTraits.includes('agreeableness')) {
        profileId = 'stabilizer';
    } else if (dominantTraits.includes('extraversion') && dominantTraits.includes('conscientiousness')) {
        profileId = 'pioneer';
    } else if (dominantTraits.includes('neuroticism') && dominantTraits.includes('conscientiousness')) {
        profileId = 'stabilizer';
    }
    
    // Находим профиль
    appState.resultProfile = testData.profiles.find(p => p.id === profileId) || testData.profiles[0];
}

// Отображение результата
function displayResult() {
    const profile = appState.resultProfile;
    
    elements.resultCard.innerHTML = `
        <div class="profile-title">
            <div class="profile-icon" style="background: ${profile.color}">
                <i class="${profile.icon}"></i>
            </div>
            <div>
                <h2 class="profile-name">${profile.name}</h2>
                <p class="profile-subtitle">${profile.subtitle}</p>
            </div>
        </div>
        
        <div class="profile-description">
            <p>${profile.description}</p>
        </div>
        
        <div class="profile-details">
            <div class="detail-card">
                <h4><i class="fas fa-star"></i> Сильные стороны</h4>
                <ul>
                    ${profile.strengths.map(strength => `<li>${strength}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-card">
                <h4><i class="fas fa-exclamation-triangle"></i> Скрытые риски</h4>
                <ul>
                    ${profile.risks.map(risk => `<li>${risk}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-card">
                <h4><i class="fas fa-brain"></i> Стиль мышления</h4>
                <p>${profile.thinkingStyle}</p>
            </div>
            
            <div class="detail-card">
                <h4><i class="fas fa-fire"></i> В стрессовых ситуациях</h4>
                <p>${profile.stressReaction}</p>
            </div>
        </div>
        
        <div class="profile-scores">
            <h4><i class="fas fa-chart-bar"></i> Оценки по модели Big Five:</h4>
            <p>Открытость: <strong>${profile.scores.openness}</strong>, 
               Добросовестность: <strong>${profile.scores.conscientiousness}</strong>, 
               Экстраверсия: <strong>${profile.scores.extraversion}</strong>, 
               Доброжелательность: <strong>${profile.scores.agreeableness}</strong>, 
               Нейротизм: <strong>${profile.scores.neuroticism}</strong></p>
        </div>
    `;
}

// Поделиться результатом
function shareResult() {
    const profile = appState.resultProfile;
    
    // Формируем текст для копирования
    const shareText = `Мой когнитивный профиль: ${profile.name} - ${profile.subtitle}

${profile.description}

Сильные стороны:
${profile.strengths.map((s, i) => `${i+1}. ${s}`).join('\n')}

Скрытые риски:
${profile.risks.map((r, i) => `${i+1}. ${r}`).join('\n')}

Стиль мышления: ${profile.thinkingStyle}

В стрессовых ситуациях: ${profile.stressReaction}

Определите свой когнитивный профиль: [ссылка на тест]

#CognitiveCompass #Психология #BigFive`;

    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(shareText)
        .then(() => {
            showNotification('Результат скопирован! Можете поделиться в Telegram или соцсетях');
        })
        .catch(err => {
            console.error('Ошибка копирования: ', err);
            showNotification('Не удалось скопировать. Попробуйте выделить текст вручную.');
        });
}

// Показать уведомление
function showNotification(text) {
    elements.notificationText.textContent = text;
    elements.notification.classList.add('show');
    
    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// Начать тест заново
function restartTest() {
    showScreen('welcome');
    initTest();
}

// Запуск приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', initApp);
