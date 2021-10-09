function create(words) {
   const contentDiv = document.getElementById('content');

   for (const word of words) {
      const paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      
      const section = document.createElement('div');
      section.appendChild(paragraph);
      contentDiv.appendChild(section);
   }

   contentDiv.addEventListener('click', (ev) => {
      if (ev.target.tagName == 'DIV' && ev.target != contentDiv) {
         ev.target.querySelector('p').style.display = '';
      }
   })
}