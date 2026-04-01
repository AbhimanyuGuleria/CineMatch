// ============================================
// CHART.JS VISUALIZATIONS FOR MOVIE RECOMMENDER
// ============================================

// Chart color palette
const chartColors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#4caf50',
    warning: '#ff9800',
    danger: '#f44336',
    info: '#2196f3',
    purple: '#9c27b0',
    teal: '#009688',
    pink: '#e91e63',
    indigo: '#3f51b5',
    gradient1: 'rgba(102, 126, 234, 0.8)',
    gradient2: 'rgba(118, 75, 162, 0.8)',
};

// Chart default options
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#666';
Chart.defaults.plugins.legend.labels.usePointStyle = true;

// ============================================
// 1. MODEL COMPARISON BAR CHART
// ============================================
function createModelComparisonChart() {
    const ctx = document.getElementById('modelComparisonChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['SVD', 'SVD++', 'NMF', 'KNN-User', 'KNN-Item', 'Baseline'],
            datasets: [{
                label: 'RMSE (Lower is Better)',
                data: [0.86, 0.85, 0.92, 0.94, 0.91, 1.02],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.9)',
                    'rgba(118, 75, 162, 0.9)',
                    'rgba(76, 175, 80, 0.9)',
                    'rgba(255, 152, 0, 0.9)',
                    'rgba(33, 150, 243, 0.9)',
                    'rgba(158, 158, 158, 0.9)'
                ],
                borderColor: [
                    '#667eea',
                    '#764ba2',
                    '#4caf50',
                    '#ff9800',
                    '#2196f3',
                    '#9e9e9e'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `RMSE: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 0.7,
                    max: 1.1,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: { weight: 600 }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { weight: 600 }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
}

// ============================================
// 2. USER PREFERENCE RADAR CHART
// ============================================
let userPreferenceChart = null;

function createUserPreferenceChart(userId = 1) {
    const ctx = document.getElementById('userPreferenceChart');
    if (!ctx) return;

    // User preference data for different profiles
    const userPreferences = {
        1: { // Action Lover
            data: [90, 85, 30, 75, 40, 20, 15, 60],
            color: '#667eea'
        },
        2: { // Drama Enthusiast
            data: [40, 95, 70, 25, 30, 45, 80, 55],
            color: '#764ba2'
        },
        3: { // Comedy Fan
            data: [45, 50, 95, 40, 25, 85, 60, 70],
            color: '#4caf50'
        },
        4: { // Sci-Fi Geek
            data: [80, 55, 35, 95, 75, 20, 40, 65],
            color: '#2196f3'
        },
        5: { // Romance Admirer
            data: [25, 85, 55, 30, 20, 40, 95, 70],
            color: '#e91e63'
        }
    };

    const userData = userPreferences[userId] || userPreferences[1];

    // Destroy existing chart if it exists
    if (userPreferenceChart) {
        userPreferenceChart.destroy();
    }

    userPreferenceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Thriller', 'Animation', 'Romance', 'Adventure'],
            datasets: [{
                label: 'Preference Score',
                data: userData.data,
                backgroundColor: `${userData.color}33`,
                borderColor: userData.color,
                borderWidth: 3,
                pointBackgroundColor: userData.color,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 8,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return `Interest: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 25,
                        backdropColor: 'transparent',
                        font: { size: 10 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.08)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 600
                        },
                        color: '#333'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// ============================================
// 3. GENRE DISTRIBUTION DOUGHNUT CHART
// ============================================
function createGenreDistributionChart() {
    const ctx = document.getElementById('genreDistributionChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Drama', 'Action', 'Comedy', 'Thriller', 'Sci-Fi', 'Romance', 'Animation', 'Other'],
            datasets: [{
                data: [28, 22, 15, 12, 10, 6, 4, 3],
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#4caf50',
                    '#ff9800',
                    '#2196f3',
                    '#e91e63',
                    '#9c27b0',
                    '#607d8b'
                ],
                borderColor: '#fff',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            weight: 500
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1500
            }
        }
    });
}

// ============================================
// 4. RATING DISTRIBUTION HISTOGRAM
// ============================================
function createRatingDistributionChart() {
    const ctx = document.getElementById('ratingDistributionChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1.0-1.5', '1.5-2.0', '2.0-2.5', '2.5-3.0', '3.0-3.5', '3.5-4.0', '4.0-4.5', '4.5-5.0'],
            datasets: [{
                label: 'Number of Ratings',
                data: [2, 5, 8, 15, 22, 28, 35, 25],
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return;

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(102, 126, 234, 0.6)');
                    gradient.addColorStop(1, 'rgba(118, 75, 162, 0.9)');
                    return gradient;
                },
                borderColor: '#667eea',
                borderWidth: 0,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        title: function(context) {
                            return `Rating: ${context[0].label}`;
                        },
                        label: function(context) {
                            return `Count: ${context.raw}K ratings`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + 'K';
                        },
                        font: { weight: 500 }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { weight: 500, size: 10 }
                    }
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeOutQuart'
            }
        }
    });
}

// ============================================
// 5. TRAINING PROGRESS LINE CHART
// ============================================
function createTrainingProgressChart() {
    const ctx = document.getElementById('trainingProgressChart');
    if (!ctx) return;

    // Generate training progress data
    const epochs = Array.from({length: 50}, (_, i) => i + 1);
    const trainRMSE = epochs.map(e => 1.5 * Math.exp(-0.08 * e) + 0.82 + Math.random() * 0.02);
    const valRMSE = epochs.map(e => 1.5 * Math.exp(-0.07 * e) + 0.85 + Math.random() * 0.03);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: epochs,
            datasets: [
                {
                    label: 'Training RMSE',
                    data: trainRMSE,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#667eea',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2
                },
                {
                    label: 'Validation RMSE',
                    data: valRMSE,
                    borderColor: '#e91e63',
                    backgroundColor: 'rgba(233, 30, 99, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#e91e63',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        padding: 20,
                        font: {
                            size: 13,
                            weight: 600
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 46, 0.95)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 15,
                    cornerRadius: 10,
                    callbacks: {
                        title: function(context) {
                            return `Epoch ${context[0].label}`;
                        },
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw.toFixed(4)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 0.8,
                    max: 1.6,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: { weight: 500 }
                    },
                    title: {
                        display: true,
                        text: 'RMSE',
                        font: { size: 13, weight: 600 }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 10,
                        font: { weight: 500 }
                    },
                    title: {
                        display: true,
                        text: 'Training Epochs',
                        font: { size: 13, weight: 600 }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// ============================================
// 6. SVD MATRIX VISUALIZATION
// ============================================
function createMatrixVisualization() {
    const matrices = ['matrix-r', 'matrix-u', 'matrix-sigma', 'matrix-v'];
    const sizes = [
        { rows: 8, cols: 12 },  // R matrix
        { rows: 8, cols: 4 },   // U matrix
        { rows: 4, cols: 4 },   // Sigma matrix
        { rows: 4, cols: 12 }   // V matrix
    ];

    matrices.forEach((id, index) => {
        const container = document.getElementById(id);
        if (!container) return;

        const { rows, cols } = sizes[index];
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.innerHTML = '';

        for (let i = 0; i < rows * cols; i++) {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';

            // Generate different patterns for each matrix
            let value;
            if (id === 'matrix-sigma') {
                // Diagonal matrix
                const row = Math.floor(i / cols);
                const col = i % cols;
                value = row === col ? Math.random() * 0.8 + 0.2 : 0;
            } else if (id === 'matrix-r') {
                // Sparse matrix (ratings)
                value = Math.random() > 0.7 ? Math.random() : 0;
            } else {
                // Dense factor matrices
                value = Math.random() * 0.8 + 0.1;
            }

            const intensity = Math.floor(value * 255);
            const hue = id === 'matrix-u' ? 260 : id === 'matrix-v' ? 120 : id === 'matrix-sigma' ? 45 : 220;
            cell.style.backgroundColor = value > 0.05
                ? `hsla(${hue}, 70%, ${50 + value * 30}%, ${0.3 + value * 0.7})`
                : 'rgba(200, 200, 200, 0.2)';

            cell.style.animationDelay = `${i * 20}ms`;
            container.appendChild(cell);
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all charts
    createModelComparisonChart();
    createUserPreferenceChart(1);
    createGenreDistributionChart();
    createRatingDistributionChart();
    createTrainingProgressChart();
    createMatrixVisualization();

    // Update radar chart when user changes
    const userSelect = document.getElementById('user-select');
    if (userSelect) {
        userSelect.addEventListener('change', (e) => {
            createUserPreferenceChart(parseInt(e.target.value));
        });
    }

    // Animate matrix cells with intersection observer
    const matrixObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                matrixObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const matrixContainer = document.querySelector('.matrix-visualization');
    if (matrixContainer) {
        matrixObserver.observe(matrixContainer);
    }
});

// Export for use in main script
window.updateUserPreferenceChart = createUserPreferenceChart;
