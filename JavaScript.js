function addQuestionToQuiz() {
    const questionsBankSelect = document.getElementById('questionsBank');
    const selectedQuestionsContainer = document.getElementById('selectedQuestionsContainer');
    const selectedQuestionId = questionsBankSelect.value;
    const selectedQuestionText = questionsBankSelect.options[questionsBankSelect.selectedIndex].text;
  
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${selectedQuestionText}</h5>
        <button type="button" class="btn btn-danger" onclick="removeQuestionFromQuiz(${selectedQuestionId})">Remove</button>
      </div>
    `;
  
    // Append the card to the selectedQuestionsContainer
    selectedQuestionsContainer.appendChild(card);
  }
  
  function removeQuestionFromQuiz(questionId) {
    const selectedQuestionsContainer = document.getElementById('selectedQuestionsContainer');
    const cardToRemove = document.querySelector(`.card[data-question-id="${questionId}"]`);
    if (cardToRemove) {
      selectedQuestionsContainer.removeChild(cardToRemove);
    }
  }
  
  // Other functions and code for your quiz creation logic
  
  