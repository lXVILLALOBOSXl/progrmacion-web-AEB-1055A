const toggleModeButton = document.createElement('button');
toggleModeButton.innerText = '🌜/🌚';
toggleModeButton.id = 'toggleModeButton';
document.body.appendChild(toggleModeButton);

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.content-section ul');
    const progressBars = document.querySelectorAll('.progress-bar');
    const skillsTop = skillsSection.offsetTop;
    
    if (window.scrollY + window.innerHeight > skillsTop) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-skill-level');
        });
    }
});

const introductionText = "Dedicated, hardworking, and committed to becoming a dependable and valuable team member.";
let currentIndex = 0;
const introParagraph = document.querySelector('.content-section p');

function typeWriterEffect() {
    if (currentIndex < introductionText.length) {
        introParagraph.textContent += introductionText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeWriterEffect, 100); 
    }
}
window.onload = typeWriterEffect;

document.querySelector('#contactForm').addEventListener('submit', function (e) {
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    
    if (!email.value.includes('@')) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
    
    if (message.value.trim() === '') {
        alert('Message field cannot be empty.');
        e.preventDefault();
    }
});

let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
document.querySelector('#nextProject').addEventListener('click', () => {
    projects[currentProjectIndex].classList.remove('active');
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    projects[currentProjectIndex].classList.add('active');
});
document.querySelector('#prevProject').addEventListener('click', () => {
    projects[currentProjectIndex].classList.remove('active');
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    projects[currentProjectIndex].classList.add('active');
});

function moveSidePanel() {
    const sidePanel = document.querySelector('.side-panel');
    const profileSection = document.querySelector('.profile');
    
    if (window.innerWidth <= 800) {
        if (!profileSection.nextElementSibling.classList.contains('side-panel')) {
            profileSection.after(sidePanel);
        }
    } else {
        const container = document.querySelector('.container');
        if (!container.lastElementChild.classList.contains('side-panel')) {
            container.appendChild(sidePanel);
        }
    }
}

window.addEventListener('load', moveSidePanel);
window.addEventListener('resize', moveSidePanel);

function checkAnswers() {
    // Get the values of the selected answers
    const q1 = document.getElementById('question1').value;
    const q2 = document.getElementById('question2').value;
    const q3 = document.getElementById('question3').value;

    // Check if all questions are answered
    if (!q1 || !q2 || !q3) {
        alert('Please answer all the questions.');
        return;
    }

    // Correct answers
    const correctAnswers = {
        question1: 'merge',
        question2: 'bubble',
        question3: 'quick'
    };

    // Validate answers
    if (q1 === correctAnswers.question1 && q2 === correctAnswers.question2 && q3 === correctAnswers.question3) {
        alert('Congratulations! You solved the puzzle.');
        window.location.href = "cv.html";
    } else {
        alert('Some answers are incorrect. Try again!');
    }
}
