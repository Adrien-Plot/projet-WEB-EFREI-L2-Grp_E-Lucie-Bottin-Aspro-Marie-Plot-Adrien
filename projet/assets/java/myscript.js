function ajouter() {

  // titre
  var paragraphe = document.getElementById("titre2");
  var anInputElement = document.getElementById("Titre");
  console.log(anInputElement.value);
  paragraphe.textContent = anInputElement.value;

  // auteur
  paragraphe = document.getElementById("auteur2");
  anInputElement = document.getElementById("Auteur");
  console.log(anInputElement.value);
  paragraphe.textContent = anInputElement.value;

  // date
  paragraphe = document.getElementById("date2");
  anInputElement = document.getElementById("Date");
  console.log(anInputElement.value);
  paragraphe.textContent = anInputElement.value;

  // article
  paragraphe = document.getElementById("article");
  anInputElement = document.getElementById("txt");
  console.log(anInputElement.value);
  paragraphe.textContent = anInputElement.value;

  return (true);
}

function showForm(){
    document.getElementById("2").style.display = "none";
    document.getElementById("1").style.display = "block";
}

function showArticle(){
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
}

function initial(){
  document.getElementById('Titre').value = '';
  document.getElementById('Auteur').value = '';
  document.getElementById('Date').value = '';
  document.getElementById('txt').value = '';
}

showForm();
