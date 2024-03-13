function submitQuiz() {
    var q1 = document.querySelector('input[name="question1"]:checked');
    var q2 = document.querySelector('input[name="question2"]:checked');
    var q3 = document.querySelector('input[name="question3"]:checked');
    var q4 = document.querySelector('input[name="question4"]:checked');

    if (!q1 || !q2 || !q3 || !q4) {
        alert("Please answer all questions.");
        return;
    }

    var result = document.getElementById('result');
    var method = determineStudyMethod(q1.value, q2.value, q3.value, q4.value);

    result.innerHTML = "Your recommended study method is: " + method;
}

function determineStudyMethod(q1, q2, q3, q4) {
    if (q1 === 'seeing' && q2 === 'flashcards' && q3 === 'videos/mind map' && q4 === 'phone notif') {
        return "Visual Learner";
    } else if (q1 === 'hearing' && q2 === 'listening' && q3 === 'discussion/explain' && q4 === 'noisy') {
        return "Auditory Learner";
    } else if (q1 === 'read/write' && q2 === 'rewriting' && q3 === 'rewrite in own words' && q4 === 'excessive notes') {
        return "Reader/Writer Learner";
    } else if (q1 === 'physical activtiy' && q2 === 'practice' && q3 === 'engage' && q4 === 'fidget') {
        return "Kinesthetic Learner: Engage in hands-on activities and create practical notes.";
    } else if (q1 === 'seeing' && q2 === 'flashcards' && q3 === 'engage' && q4 === 'fidget') {
        return "Kinesthetic Learner and Visual Learner";
    } else {
        return "It seems there was an error determining your study method. Please try again.";
    }
}