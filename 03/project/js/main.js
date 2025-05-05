function formatDateTime(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${dayName}, ${monthName} ${day}, ${year}    ${hours}:${minutes}`;
}

function updateDateTime() {
    const now = new Date();
    const dateElement = document.querySelector('.date');
    if (dateElement) {
        dateElement.textContent = formatDateTime(now);
    }
}

function clearNews() {
    const newsContainer = document.querySelector('.col1');
    if (newsContainer) {
        const newsItems = newsContainer.querySelectorAll('div.wrapper');
        newsItems.forEach(item => {
            item.innerHTML = '';
        });
    }
}

function changeTitleText() {
    const titleElement = document.querySelector('.tittle');
    if (titleElement) {
        titleElement.innerHTML = 'Best <span>Professional Soft</span>';
    }
}

const dataSite = {
    proSoft: ["Firewall", "Antivirus", "VPN"],
    whyUs: ["High quality", "Reliable", "Fast"]
};

function renderSortedSoftware() {
    const proSoftList = dataSite.proSoft.sort();
    const listContainer = document.querySelector('.prof-soft-list');
    if (listContainer) {
        listContainer.innerHTML = '';
        proSoftList.forEach(software => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = "#";
            link.textContent = software;
            link.style.color = "white";
            listItem.appendChild(link);
            listContainer.appendChild(listItem);
        });
    }
}

function renderSortedWhyUs() {
    const sortedWhyUs = dataSite.whyUs.sort();
    const listContainer = document.querySelector('.list1');
    if (listContainer) {
        listContainer.innerHTML = '';
        sortedWhyUs.forEach(item => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = "#";
            link.textContent = item;
            listItem.appendChild(link);
            listContainer.appendChild(listItem);
        });
    }
}

function changeFirstImage() {
    const firstImg = document.querySelector('#myRoundabout li:first-child img');
    if (firstImg) {
        firstImg.src = 'images/bg-soft.png';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderSortedSoftware();
    renderSortedWhyUs();
    changeTitleText();
    clearNews();
    updateDateTime();
    changeFirstImage();
    setInterval(updateDateTime, 60000);
});
