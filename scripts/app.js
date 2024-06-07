if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./scripts/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
  
  // Fetch and display water delivery schedule
  fetch('./data/schedule.json')
    .then(response => response.json())
    .then(data => {
      const scheduleList = document.getElementById('schedule');
      data.schedule.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.date}: ${item.location} - ${item.description}`;
        scheduleList.appendChild(listItem);
      });
    });