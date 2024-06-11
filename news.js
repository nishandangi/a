//Submitting forms.........

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(function(response) {
        console.log('Form submitted successfully!');
        // Clear the input fields
        var form = document.getElementById('myForm');
        form.reset();
    }).catch(function(error) {
        console.error('Error submitting form:', error);
    });
});




//for date and times.........
function displayTime() {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById('timeDisplay').innerHTML = time;
}
setInterval(displayTime, 1000);

let _mypatroDateFormat = 2; // Choose the format you prefer
let _mypatroResponseType = 'html'; // Response type
let script = document.createElement('script');
script.src = 'https://mypatro.com/resources/nepali_date/nepali_date.js'; // API script
document.head.appendChild(script);


// for detect holiday
let date = new Date();
let options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("current_date").innerHTML = date.toLocaleDateString("en-US", options);
let currentHour = date.getHours();
// List of specific dates
let specificDates = [
    new Date(2024, 0, 11), // Prithvi Jayanti
    new Date(2024, 0, 15), // Maghe Sankranti
    new Date(2024, 0, 30), // Martyrs' Day
    new Date(2024, 1, 10), // Sonam Losar
    new Date(2024, 1, 10), // Ghyalpo Losar
    new Date(2024, 1, 19), // Prajatantra Diwas
    new Date(2024, 2, 8),  // Maha Shivaratri
    new Date(2024, 2, 8),  // International Women's Day
    new Date(2024, 3, 8),  // Ghode Jatra
    new Date(2024, 3, 10), // Ramjan Edul Fikra
    new Date(2024, 3, 13), // Nepali New Year
    new Date(2024, 3, 16), // Ram Navami
    new Date(2024, 3, 24), // Loktantra Diwas
    new Date(2024, 4, 1),  // Labour Day
    new Date(2024, 4, 23), // Buddha Jayanti
    new Date(2024, 4, 29), // Ganatantra Diwas
    new Date(2024, 5, 17), // Edul Aajaha
    new Date(2024, 7, 19), // Raksha Bandhan
    new Date(2024, 7, 20), // Gai Jatra
    new Date(2024, 7, 26), // Shree Krishna Janmashtami
    new Date(2024, 7, 26), // Gaura Parba
    new Date(2024, 8, 6),  // Hartalika Teej
    new Date(2024, 8, 7),  // Nijamati Sewa Diwas
    new Date(2024, 8, 8),  // Rishi Panchami
    new Date(2024, 8, 17), // Indra Jatra
    new Date(2024, 8, 19), // Constitution Day
    new Date(2024, 9, 3),  // Ghatasthapana
    new Date(2024, 9, 10), // Fulpati
    new Date(2024, 9, 11), // Maha Ashtami
    new Date(2024, 9, 12), // Maha Navami
    new Date(2024, 9, 13), // Vijaya Dashami
    new Date(2024, 9, 14), // Ekadashi
    new Date(2024, 9, 15), // Dwadashi
    new Date(2024, 9, 17), // Kojagrat Purnima
    new Date(2024, 10, 1), // Laxmi Puja
    new Date(2024, 10, 2), // Govardhan Puja
    new Date(2024, 10, 3), // Bhai Tika
    new Date(2024, 10, 7), // Chhath Puja
    new Date(2024, 10, 15), // Guru Nanak Jayanti
    new Date(2024, 11, 15), // Udhauli Parva
    new Date(2024, 11, 25), // Christmas Day
    new Date(2024, 11, 30), // Tamu Losar
    new Date(2025, 0, 11),  // Prithvi Jayanti
    new Date(2025, 0, 14),  // Maghe Sankranti
    new Date(2025, 0, 29),  // Martyrs' Day
    new Date(2025, 0, 30),  // Sonam Losar
    new Date(2025, 1, 19),  // Prajatantra Diwas
    new Date(2025, 1, 26),  // Maha Shivaratri
    new Date(2025, 1, 28),  // International Women's Day
    new Date(2025, 2, 8),   // Ghode Jatra
    new Date(2025, 2, 13),  // Ramjan Edul Fikra
    new Date(2025, 2, 14),  // Nepali New Year
    new Date(2025, 2, 29)   // March 29, 2025
];

// Check if the current date is in the list of specific dates or a Friday or a Saturday
let dayOfWeek = date.getDay(); // getDay() returns the day of the week: 0 (Sunday) to 6 (Saturday)
let isSpecificDate = specificDates.some(d => 
    d.getFullYear() === date.getFullYear() && 
    d.getMonth() === date.getMonth() && 
    d.getDate() === date.getDate()
);

if(isSpecificDate || dayOfWeek === 5 || dayOfWeek === 6) {
    // If the current date is in the list of specific dates or a Friday or a Saturday, change the background color of the elements to red
    Array.from(document.getElementsByClassName("dropdown")).forEach(el => el.style.backgroundColor = "red");    
  document.getElementById("header").style.backgroundColor = "#9F0000";

}

else if (currentHour < 11 || currentHour >= 15) {
    // If the current time is before 11:00 or after 15:00, set the details to "OFF time"
 Array.from(document.getElementsByClassName("dropdown")).forEach(el => el.style.backgroundColor = "red");    
  document.getElementById("header").style.backgroundColor = "#9F0000";
}

else {
};





// Event listeners for buttons

//first dropdow 9 ()
document.getElementById('shareSansarBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.sharesansar.com/category/latest" allowfullscreen></iframe>';});

document.getElementById('meroLaganiBtn').addEventListener('click', () => document.getElementById('iframeContainer').innerHTML = '<iframe src="https://merolagani.com/NewsList.aspx" allowfullscreen></iframe>');


document.getElementById('NepsealphaBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://nepsealpha.com/all-news?cid=1" allowfullscreen></iframe>';});

document.getElementById('chukulBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://chukul.com/announcement" allowfullscreen></iframe>';});
document.getElementById('arthasarokarBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://arthasarokar.com/category/market-affairs" allowfullscreen></iframe>';});

document.getElementById('beemapostBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.beemapost.com/category/stock-market/" allowfullscreen></iframe>';});

document.getElementById('onlinekhabarBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.onlinekhabar.com/business/" allowfullscreen></iframe>';});
document.getElementById('investopaperBtn').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://nepali.investopaper.com/%e0%a4%b6%e0%a5%87%e0%a4%af%e0%a4%b0-%e0%a4%ac%e0%a4%9c%e0%a4%be%e0%a4%b0/" allowfullscreen></iframe>';});

document.getElementById('arthasansarBtn').addEventListener('click', function() {window.open('https://arthasansar.com/category/share-market/', '_blank');});


//second dropdown

document.getElementById('nepalipaisa').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.nepalipaisa.com/news" allowfullscreen></iframe>';});

document.getElementById('arthaplus').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://arthaplus.com/category/stak-market" allowfullscreen></iframe>';});

document.getElementById('arthakendra').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://arthakendra.com/category/stock-market" allowfullscreen></iframe>';});
document.getElementById('arthapath').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.arthapath.com/category/share-market/" allowfullscreen></iframe>';});
document.getElementById('insurancekhabar').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://insurancekhabar.com/category/news/" allowfullscreen></iframe>';});

document.getElementById('arthatantra').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.arthatantra.com/category/share-news/" allowfullscreen></iframe>';});

document.getElementById('corporatenepal').addEventListener('click', function() {window.open('https://www.corporatenepal.com/category/market', '_blank');});



// Nepal rastra Bank
document.getElementById('moniterypolicy').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.nrb.org.np/category/monetary-policy/" allowfullscreen></iframe>';});

document.getElementById('macroeconomics').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.nrb.org.np/category/current-macroeconomic-situation/?department=red" allowfullscreen></iframe>';});

document.getElementById('interestrate').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="https://www.nrb.org.np/cmfm_rates/lending_rates" allowfullscreen></iframe>';});

document.getElementById('pdfviewer').addEventListener('click', function() {
  document.getElementById('iframeContainer').innerHTML = '<iframe src="pdfviewer.html" allowfullscreen></iframe>';});



