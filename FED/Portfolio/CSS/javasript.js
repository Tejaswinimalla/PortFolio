document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3)
       {
        current = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current)
       {
        link.classList.add('active');
      }
    });
  });