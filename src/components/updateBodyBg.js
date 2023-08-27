export function updateBodyBgColor(pathname) {
    const body = document.body;
  
    switch (pathname) {
      case '/subReddit/Everything':
        body.style.backgroundColor = '#FFFFFF'; // Set the desired background color
        break;
      case '/subReddit/ProgrammerHumor/':
        body.style.backgroundColor = '#FOFOFO'; // Set the desired background color
        break;
      // Add more cases as needed
      default:
        body.style.backgroundColor = '#DAE0E6'; // Default background color
    }
  }