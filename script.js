(function () {
    var updateButton = document.getElementById("updateDetails");
    var cancelButton = document.getElementById("cancel");
    var favDialog = document.getElementById("favDialog");

    // O botão Update abre uma Dialog
    updateButton.addEventListener("click", function () {
        favDialog.showModal();
    });

    // O botão cancelButton fecha uma Dialog
    cancelButton.addEventListener("click", function () {
        favDialog.close();
    });

    // Enviar o formulário e fechar a dialog
    favDialog.querySelector('form').addEventListener("submit", function () {
        // Aqui você pode adicionar a lógica para o que acontece ao enviar o formulário
        favDialog.close();
    });
})();



document.getElementById('BtnHomeScroll').addEventListener('click', function() {
  document.querySelector('footer').scrollIntoView({
      behavior: 'smooth'
  });
});

document.getElementById('BtnSkillsScroll').addEventListener('click', function() {
  document.querySelector('.main').scrollIntoView({
      behavior: 'smooth'
  });
});

document.getElementById('BtnShelfScroll').addEventListener('click', function() {
  document.querySelector('article').scrollIntoView({
      behavior: 'smooth'
  });
});

document.getElementById('BtnServicesScroll').addEventListener('click', function() {
  document.querySelector('section').scrollIntoView({
      behavior: 'smooth'
  });
});

document.getElementById('BtnContactScroll').addEventListener('click', function() {
  document.querySelector('.nuvem1').scrollIntoView({
      behavior: 'smooth'
  });
});

