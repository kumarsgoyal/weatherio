const toggleButton = document.querySelector('.hit_day_night_animation');

toggleButton.addEventListener('click', function () {
    const isNowDay = !document.body.classList.contains('day-mode'); 
    toggleTheme(isNowDay);
    clickToggleButton(isNowDay);
});


function toggleTheme(isNowDay) {
    document.body.classList.toggle('day-mode');
    updateWeatherIcons(isNowDay)
}


function updateWeatherIcons(isNowDay) {
    // Select all weather icons with data-icon-id
    const dataIcons = document.querySelectorAll("img.weather-icon[data-icon-id]");

    dataIcons.forEach((img) => {
        const iconId = img.getAttribute("data-icon-id");
        const newSrc = `./assest/images/weather_icons/${iconId}${isNowDay ? "" : "-1"}.png`;
        img.setAttribute("src", newSrc);
    });

    const weatherIcons = document.querySelectorAll("img.weather-icon[weather-icon-id]");

    weatherIcons.forEach((img) => {
        const iconId = img.getAttribute("weather-icon-id");
        const newSrc = `./assest/images/${iconId}${isNowDay ? "" : "-1"}.png`;
        img.setAttribute("src", newSrc);
    });

    const weatherSmallIcons = document.querySelectorAll("img.weather-small-icon[weather-icon-id]");

    weatherSmallIcons.forEach((img) => {
        const iconId = img.getAttribute("weather-icon-id");
        const newSrc = `./assest/images/${iconId}${isNowDay ? "" : "-1"}.png`;
        img.setAttribute("src", newSrc);
    });
}
