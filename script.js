/* ========== DICTIONNAIRE DE TRADUCTIONS ========== */
const translations = {
    fr: {
        pageTitle: "IMC SMART — Calculateur Intelligent d'Indice de Masse Corporelle",
        siteName: "IMC SMART",
        mainTitle: "Calculez votre Indice de Masse Corporelle",
        mainSubtitle: "Obtenez instantanément une évaluation de votre corpulence et des conseils santé intelligents et personnalisés basés sur les recommandations de l'OMS.",
        weightLabel: "Poids (kg)",
        heightLabel: "Taille (cm)",
        weightError: "Veuillez entrer un poids valide (1 à 500 kg).",
        heightError: "Veuillez entrer une taille valide (50 à 250 cm).",
        calculateBtn: "Calculer mon IMC",
        bmiLabel: "Votre IMC",
        aboutTitle: "À propos de l'IMC",
        aboutText: "L'Indice de Masse Corporelle est un indicateur largement utilisé par l'Organisation Mondiale de la Santé pour évaluer la corpulence d'une personne adulte. Il constitue un outil de dépistage et ne remplace pas un avis médical professionnel.",
        disclaimer: "⚠️ Avertissement : Ce calculateur est fourni à titre informatif uniquement. Il ne constitue pas un avis médical. L'IMC ne prend pas en compte la masse musculaire, la densité osseuse ou la répartition des graisses. Consultez un professionnel de santé qualifié pour toute décision concernant votre santé.",
        footerText: "Tous droits réservés.",
        adviceTitle: "Conseils santé",
        categories: {
            underweight: { title: "Insuffisance pondérale", advice: "Il est recommandé de consulter un médecin ou un nutritionniste. Veillez à un apport calorique et nutritionnel suffisant et équilibré. Une prise de poids progressive sous supervision professionnelle peut être nécessaire." },
            normal: { title: "Poids normal", advice: "Félicitations, votre poids est dans la plage idéale. Maintenez une alimentation équilibrée, pratiquez une activité physique régulière (au moins 150 minutes par semaine) et assurez-vous de bien vous hydrater." },
            overweight: { title: "Surpoids", advice: "Il est conseillé de réévaluer vos habitudes alimentaires et d'augmenter votre activité physique quotidienne. Consultez un professionnel de santé pour obtenir des recommandations personnalisées et prévenir les risques cardiovasculaires." },
            obesity1: { title: "Obésité modérée (Classe I)", advice: "Un suivi médical est fortement recommandé. Une prise en charge globale incluant des conseils nutritionnels, un programme d'exercice adapté et un soutien psychologique si nécessaire, vous aidera à atteindre vos objectifs de santé." },
            obesity2: { title: "Obésité sévère (Classe II)", advice: "Consultez un médecin spécialiste. Un accompagnement multidisciplinaire (médecin, diététicien, psychologue, kinésithérapeute) est indispensable pour élaborer un plan de traitement sécurisé et efficace." },
            obesity3: { title: "Obésité morbide (Classe III)", advice: "Une consultation médicale spécialisée est urgente. Des options thérapeutiques avancées, incluant des traitements médicaux spécifiques ou une évaluation pour une chirurgie bariatrique, doivent être discutées avec votre équipe médicale." }
        }
    },
    en: {
        pageTitle: "IMC SMART — Smart Body Mass Index Calculator",
        siteName: "IMC SMART",
        mainTitle: "Calculate your Body Mass Index",
        mainSubtitle: "Instantly assess your body composition and receive smart, personalized health advice based on WHO recommendations.",
        weightLabel: "Weight (kg)",
        heightLabel: "Height (cm)",
        weightError: "Please enter a valid weight (1 to 500 kg).",
        heightError: "Please enter a valid height (50 to 250 cm).",
        calculateBtn: "Calculate my BMI",
        bmiLabel: "Your BMI",
        aboutTitle: "About BMI",
        aboutText: "The Body Mass Index is a widely used indicator by the World Health Organization to assess the body composition of adults. It serves as a screening tool and does not replace professional medical advice.",
        disclaimer: "⚠️ Disclaimer: This calculator is provided for informational purposes only. It does not constitute medical advice. BMI does not account for muscle mass, bone density, or fat distribution. Always consult a qualified healthcare professional for any health-related decisions.",
        footerText: "All rights reserved.",
        adviceTitle: "Health advice",
        categories: {
            underweight: { title: "Underweight", advice: "It is recommended to consult a doctor or a dietitian. Ensure adequate and balanced caloric and nutritional intake. Gradual weight gain under professional supervision may be necessary." },
            normal: { title: "Normal weight", advice: "Congratulations, your weight is in the ideal range. Maintain a balanced diet, engage in regular physical activity (at least 150 minutes per week), and ensure you stay properly hydrated." },
            overweight: { title: "Overweight", advice: "It is advisable to reassess your dietary habits and increase your daily physical activity. Consult a healthcare professional for personalized recommendations and to prevent cardiovascular risks." },
            obesity1: { title: "Moderate obesity (Class I)", advice: "Medical follow-up is highly recommended. A comprehensive approach including nutritional counseling, an adapted exercise program, and psychological support if necessary, will help you achieve your health goals." },
            obesity2: { title: "Severe obesity (Class II)", advice: "Consult a medical specialist. Multidisciplinary support (doctor, dietitian, psychologist, physical therapist) is essential to develop a safe and effective treatment plan." },
            obesity3: { title: "Morbid obesity (Class III)", advice: "An urgent specialized medical consultation is required. Advanced therapeutic options, including specific medical treatments or an evaluation for bariatric surgery, must be discussed with your medical team." }
        }
    }
};

/* ========== ÉTAT GLOBAL ========== */
let currentLang = localStorage.getItem('imc-smart-lang') || 'fr';
let currentTheme = localStorage.getItem('imc-smart-theme') || 'light';

/* ========== FONCTIONS DE TRADUCTION ========== */
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (typeof translation === 'string') {
            el.textContent = translation;
        }
    });
    document.getElementById('langLabel').textContent = currentLang === 'fr' ? 'EN' : 'FR';
    document.title = t('pageTitle');
}

/* ========== GESTION DU THÈME ========== */
function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.getElementById('themeIcon').textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('imc-smart-theme', currentTheme);
    applyTheme();
}

/* ========== GESTION DE LA LANGUE ========== */
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('imc-smart-lang', currentLang);
    applyTranslations();
    
    // Recalculer le résultat s'il est déjà affiché
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!isNaN(weight) && !isNaN(height) && !document.getElementById('resultContainer').classList.contains('hidden')) {
        calculateBMI(weight, height);
    }
}

/* ========== CLASSIFICATION ET CALCUL ========== */
function getCategory(bmi) {
    if (bmi < 18.5) return { key: 'underweight', class: 'category-underweight' };
    if (bmi < 25) return { key: 'normal', class: 'category-normal' };
    if (bmi < 30) return { key: 'overweight', class: 'category-overweight' };
    if (bmi < 35) return { key: 'obesity1', class: 'category-obesity-1' };
    if (bmi < 40) return { key: 'obesity2', class: 'category-obesity-2' };
    return { key: 'obesity3', class: 'category-obesity-3' };
}

function calculateBMI(weight, heightCm) {
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const category = getCategory(bmi);
    const categoryData = t('categories.' + category.key);
    
    // Note pédagogique intelligente ajoutée dynamiquement
    const smartNote = currentLang === 'fr' 
        ? "<br><br><em><strong>Note physiologique :</strong> À IMC égal, la composition corporelle diffère naturellement entre les hommes (plus de masse musculaire en moyenne) et les femmes (pourcentage de masse grasse essentiellement plus élevé). Cet indicateur reste un outil de dépistage général.</em>"
        : "<br><br><em><strong>Physiological note:</strong> At the same BMI, body composition naturally differs between men (higher average muscle mass) and women (naturally higher essential body fat percentage). This indicator remains a general screening tool.</em>";

    const resultHTML = `
        <div class="result-header">
            <div class="bmi-value">${bmi.toFixed(1)}</div>
            <div class="bmi-label">${t('bmiLabel')}</div>
            <div class="bmi-category ${category.class}">${categoryData.title}</div>
        </div>
        <div class="advice-box">
            <h3>${t('adviceTitle')}</h3>
            <p>${categoryData.advice}${smartNote}</p>
        </div>
    `;
    
    const container = document.getElementById('resultContainer');
    container.innerHTML = resultHTML;
    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ========== VALIDATION ET SOUMISSION ========== */
function validateInput(input, min, max) {
    const value = parseFloat(input.value);
    const errorEl = input.parentElement.querySelector('.input-error');
    const isValid = !isNaN(value) && value >= min && value <= max;
    
    if (input.value !== '' && !isValid) {
        input.classList.add('invalid');
        errorEl.classList.add('visible');
    } else {
        input.classList.remove('invalid');
        errorEl.classList.remove('visible');
    }
    
    return isValid;
}

/* ========== INITIALISATION ========== */
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyTranslations();
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    
    weightInput.addEventListener('input', () => validateInput(weightInput, 1, 500));
    heightInput.addEventListener('input', () => validateInput(heightInput, 50, 250));
    
    document.getElementById('bmiForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const weightValid = validateInput(weightInput, 1, 500);
        const heightValid = validateInput(heightInput, 50, 250);
        
        if (!weightValid || !heightValid) return;
        
        calculateBMI(parseFloat(weightInput.value), parseFloat(heightInput.value));
    });
});
