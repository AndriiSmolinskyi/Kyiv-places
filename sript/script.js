let mymap = L.map('mapid').setView([50.4501, 30.5234], 13);

        // Зміна зуму
        mymap.setZoom(10.5);

        // Зміна теми на темно-сіру
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors'
        }).addTo(mymap);

        // Масив з координатами та URL для різних маркерів
        var markersData = [
          { coordinates: [50.4907, 30.4828], url: 'https://www.google.com/maps/place/%D0%90%D0%BD%D0%B4%D1%80%D1%96%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D1%83%D0%B7%D0%B2%D1%96%D0%B7,+13%D0%90,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4607215,30.5148751,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce423bb81c49:0x630df6747c094dca!8m2!3d50.4607215!4d30.5148751!16s%2Fg%2F1tdgnbqb?hl=uk-UA&entry=ttu', icon: 'img/bulgakov.png', iconSize: [100, 80] },
          { coordinates: [50.4588, 30.5233], url: 'https://maps.app.goo.gl/bY8HPMPFGHZFa11g9?g_st=ic', icon: 'img/gate2.png', iconSize: [90, 60] },
          { coordinates: [50.5162, 30.5396], url: 'https://maps.app.goo.gl/WSLKBPgMYn7iZjYu5?g_st=it', icon: 'img/minicity.png', iconSize: [85, 140] },
          { coordinates: [50.5254, 30.4601], url: 'https://maps.app.goo.gl/6euK7jtzaFFsqc6QA?g_st=ic', icon: 'img/qrcode.png', iconSize: [80, 150] },
          { coordinates: [50.4633, 30.4164], url: 'https://maps.app.goo.gl/QgCDF2aaMeNQLkoJ7', icon: 'img/starwars.png', iconSize: [100, 60] },
          { coordinates: [50.4534, 30.5994], url: 'https://maps.app.goo.gl/RPdsmcfPUdJrZ5x67?g_st=ic', icon: 'img/theater.png', iconSize: [115, 65] },
          { coordinates: [50.3533, 30.5040], url: 'https://maps.app.goo.gl/82GQEBVhRyWWEgur7?g_st=ic', icon: 'img/ukrhouse.png', iconSize: [90, 80] },
          { coordinates: [50.4326, 30.5415], url: 'https://maps.app.goo.gl/3xJbsUw2TFFByFPV9?g_st=ic', icon: 'img/what.png', iconSize: [90, 70] },
          { coordinates: [50.3891, 30.5577], url: 'https://www.google.com/maps/place/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9+%D1%96%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%97+%D0%9A%D0%B8%D1%94%D0%B2%D0%B0,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD%D0%B0+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,+7,+%D0%9A%D0%B8%D1%97%D0%B2,+01030/@50.445118,30.5177983,17z/data=!4m6!3m5!1s0x40d4ce581aafa16d:0xfc949d39ffbacfba!8m2!3d50.445118!4d30.5177983!16s%2Fg%2F121_c89c', icon: 'img/toy.png', iconSize: [100, 100] },
          { coordinates: [50.4190, 30.4365], url: 'https://maps.app.goo.gl/Hg6J4YUTGyDbvKfX6?g_st=ic', icon: 'img/station.png', iconSize: [120, 80] },
          { coordinates: [50.4487, 30.4924], url: 'https://maps.app.goo.gl/bWPcMA3DeurbLFWy6', icon: 'img/cat.png', iconSize: [80, 60] },
          { coordinates: [50.4018, 30.5111], url: 'https://maps.app.goo.gl/uDsF3FsTtBNzMz6u5', icon: 'img/dark.png', iconSize: [80, 60] },
          { coordinates: [50.4118, 30.6111], url: 'https://maps.app.goo.gl/dJ2LL49EFtDQw2m89?g_st=it', icon: 'img/readeat.png', iconSize: [60, 70] },
        ];

        // Додаємо кожен маркер до карти
        markersData.forEach(function(data) {
          var customIcon = L.icon({
            iconUrl: data.icon,
            iconSize: data.iconSize,
            iconAnchor: [25, 50], // змінено якщо центр зображення знаходиться внизу
            popupAnchor: [5, -30] // змінено для зміщення повідомлення під маркер
          });

          var marker = L.marker(data.coordinates, { icon: customIcon }).addTo(mymap);

          // // Обробник події click для кожного маркера
          marker.on('click', function() {
            if(data.url == 'https://maps.app.goo.gl/RPdsmcfPUdJrZ5x67?g_st=ic'){
              const posterBlock = document.querySelector('.posters');
              posterBlock.style.display = 'flex';
            } else{
              marker.bindPopup(`
                <a href="${data.url}" target="_blank">Детальніше</a>
            `).openPopup();
            }  
          });
});


const closeBtn = document.querySelector(".close")

const closePosters = () => {
    const posterBlock = document.querySelector('.posters');
    posterBlock.style.display = 'none';
}