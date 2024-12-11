// Seleciona os elementos que precisam da animação
const elements = document.querySelectorAll('.fade-in');

// Configura o Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 50% do elemento é visível
      entry.target.classList.add('fade-in-visible');
      // (Opcional) Interrompe a observação após a primeira vez
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Ativa quando 50% do elemento é visível
});

// Observa cada elemento
elements.forEach(element => observer.observe(element));

// Seleciona os elementos que precisam da animação
const elements2 = document.querySelectorAll('.fade-in2');

// Configura o Intersection Observer
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 50% do elemento é visível
      entry.target.classList.add('fade-in-visible2');
      // (Opcional) Interrompe a observação após a primeira vez
      observer2.unobserve(entry.target);
    }
  });
}, {
  threshold: 1 // Ativa quando 50% do elemento é visível
});

// Observa cada elemento
elements2.forEach(element => observer2.observe(element));


// Seleciona os elementos que precisam da animação
const elements3 = document.querySelectorAll('.fade-in3');

// Configura o Intersection Observer
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 50% do elemento é visível
      entry.target.classList.add('fade-in-visible3');
      // (Opcional) Interrompe a observação após a primeira vez
      observer3.unobserve(entry.target);
    }
  });
}, {
  threshold: 1 // Ativa quando 50% do elemento é visível
});

// Observa cada elemento
elements3.forEach(element => observer3.observe(element));



// Seleciona os elementos que precisam da animação
const elements4 = document.querySelectorAll('.fade-in4');

// Configura o Intersection Observer
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 50% do elemento é visível
      entry.target.classList.add('fade-in-visible4');
      // (Opcional) Interrompe a observação após a primeira vez
      observer4.unobserve(entry.target);
    }
  });
}, {
  threshold: 1 // Ativa quando 50% do elemento é visível
});

// Observa cada elemento
elements4.forEach(element => observer4.observe(element));

let isExecutingTeste = false;
let isOpen = false;

function teste(num) {
const elementos = document.querySelectorAll('.testee');
const elemento = document.querySelectorAll('.testee')[num];

elementos.forEach(elemento => console.log(elemento))

if(isExecutingTeste == false) {
  
  isExecutingTeste = true;

  elementos.forEach(elemento => {
    if (elemento.classList.contains('display-visible')) {
      elemento.classList.remove('display-visible');
      elemento.classList.add('display-none');
      setTimeout(() => elemento.classList.add('position-absolute'), 1600);
      setTimeout(() => isExecutingTeste = false, 2000);
    }
  })

  if (elemento) {
    if (elemento.classList.contains('position-absolute')) {
      setTimeout(() =>elemento.classList.remove('position-absolute'), 100);
      elemento.classList.add('display-visible');
      setTimeout(() => isExecutingTeste = false, 1000);
    } else {
      elemento.classList.remove('display-visible');
      elemento.classList.add('display-none');
      setTimeout(() => elemento.classList.add('position-absolute'), 1600);
      setTimeout(() => isExecutingTeste = false, 2000);
    }
  }
}

}


// Seleciona os elementos que precisam da animação
const elements5 = document.querySelectorAll('.fade-in5');

// Configura o Intersection Observer
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 50% do elemento é visível
      entry.target.classList.add('fade-in-visible5');
      // (Opcional) Interrompe a observação após a primeira vez
      observer5.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Ativa quando 50% do elemento é visível
});

// Observa cada elemento
elements5.forEach(element => observer5.observe(element));


// Seleciona os elementos que precisam da animação
const elements6 = document.querySelectorAll('.fade-in6');

// Configura o Intersection Observer
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 60% do elemento é visível
      entry.target.classList.add('fade-in-visible6');
      // (Opcional) Interrompe a observação após a primeira vez
      observer6.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05 // Ativa quando 60% do elemento é visível
});

// Observa cada elemento
elements6.forEach(element => observer6.observe(element));



// Seleciona os elementos que precisam da animação
const elements7 = document.querySelectorAll('.fade-in7');

// Configura o Intersection Observer
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe "visible" quando 50% do elemento é visível
      entry.target.classList.add('fade-in-visible7');
      // (Opcional) Interrompe a observação após a primeira vez
      observer7.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Ativa quando 50% do elemento é visível
});

// Observa cada elemento
elements7.forEach(element => observer7.observe(element));