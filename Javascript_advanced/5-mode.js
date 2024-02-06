function changeMode(size, weight, transform, background, color) {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
  
  function main() {
    const spooky = [9, 'bold', 'uppercase', 'pink', 'green'];
    const darkMode = [12, 'bold', 'capitalize', 'black', 'white'];
    const screamMode = [12, 'normal', 'lowercase', 'white', 'black'];
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', function() {
      changeMode(...spooky);
    });
    document.body.appendChild(spookyButton);
  
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', function() {
      changeMode(...darkMode);
    });
    document.body.appendChild(darkModeButton);
  
    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', function() {
      changeMode(...screamMode);
    });
    document.body.appendChild(screamModeButton);
  }
  
  main();
  