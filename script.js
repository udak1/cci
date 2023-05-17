window.addEventListener('scroll', function() {
    var paragraphs = document.querySelectorAll('.fade-in');
  
    paragraphs.forEach(function(paragraph) {
      var distanceFromTop = paragraph.getBoundingClientRect().top;
  
      if (distanceFromTop - window.innerHeight <= 0 && !paragraph.classList.contains('fade-in-active')) {
        var spans = paragraph.querySelectorAll('span');
  
        spans.forEach(function(span, index) {
          span.style.animationDelay = (index * 4.2) + 's';
        });
  
        paragraph.classList.add('fade-in-active');
      }
    });
  });
  
  