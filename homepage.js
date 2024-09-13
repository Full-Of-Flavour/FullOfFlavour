let toggleMenu = document.getElementById("navLinks")
function showMenu() {
  toggleMenu.style.top = "0"
}
function hideMenu() {
  toggleMenu.style.top = "-100vh"
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Month view by default
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'Eid-Malud Holiday',
        start: '2024-09-16',
        allDay: true
      },
      {
        title: 'Independence Day 💚🤍💚',
        start: '2024-10-01',
        allDay: true
      },
      {
        title: 'National Day @ ICEL',
        start: '2024-10-02',
        allDay: true
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-09-30T13:00:00',
        end: '2024-09-30T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-10-28T13:00:00',
        end: '2024-10-28T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-11-25T13:00:00',
        end: '2024-11-25T14:00:00',
      },
      {
        title: 'End of the Year Gift Distribution 🎁',
        start: '2024-12-11',
        end: '2024-12-14',
      },
      {
        title: 'Monthly HSE Meeting 📃',
        start: '2024-12-16T13:00:00',
        end: '2024-12-16T14:00:00',
      },
      {
        title: 'End of the Year Celebration/Official Close of business 2024',
        start: '2024-12-19',
        end: '2024-12-21',
      },
      {
        title: 'Christmas Holiday 🎄🎅🏽',
        start: '2024-12-23',
        end: '2024-12-27',
      },
      {
        title: "New Year's Holiday 🎆✨",
        start: '2024-12-31',
        end: '2025-01-02',
      },
      {
        title: "Valentine's Day 💝💘",
        start: '2025-02-14',
        allDay: true
      },
      {
        title: "Ash Wednesday",
        start: '2025-03-05',
        allDay: true
      },
      {
        title: "Women's Day",
        start: '2025-03-08',
        allDay: true
      },
      {
        title: "Good Friday",
        start: '2025-04-18',
        allDay: true
      },
      {
        title: "Holy Saturday",
        start: '2025-04-19',
        allDay: true
      },
      {
        title: "Easter Sunday",
        start: '2025-04-20',
        allDay: true
      },
      {
        title: "Easter Monday",
        start: '2025-04-21',
        allDay: true
      },
      {
        title: "Workers' Day 👨🏽‍🏭👮🏽‍♂️",
        start: '2025-05-01',
        allDay: true
      },
      {
        title: "Children's Day 👩‍👦",
        start: '2025-05-27',
        allDay: true
      },
      {
        title: "Father's Day 👔",
        start: '2025-06-15',
        allDay: true
      },
      {
        title: "Mr Adetola's Birthday 🎈🎉",
        start: '2025-01-20',
        allDay: true
      },
      {
        title: "Mr Timothy's Birthday 🎈🎉",
        start: '2025-02-03',
        allDay: true
      },
      {
        title: "Mr Dapo's Birthday 🎈🎉",
        start: '2025-06-13',
        allDay: true
      },
      {
        title: "Mr Ladi's Birthday 🎈🎉",
        start: '2025-04-17',
        allDay: true
      },
      {
        title: "Mr Chidi's Birthday 🎈🎉",
        start: '2024-10-31',
        allDay: true
      },
      {
        title: "Mr Chidi's Birthday 🎈🎉",
        start: '2025-10-31',
        allDay: true
      },
      {
        title: "Mr Gbemis's Birthday 🎈🎉",
        start: '2025-03-13',
        allDay: true
      },
      {
        title: "Miss Sandra's Birthday 🎈🎉",
        start: '2024-12-29',
        allDay: true
      },
      {
        title: "Miss Sandra's Birthday 🎈🎉",
        start: '2025-12-29',
        allDay: true
      },
      {
        title: "Mrs Onyinyechi's Birthday 🎈🎉",
        start: '2024-11-11',
        allDay: true
      },
      {
        title: "Mrs Onyinyechi's Birthday 🎈🎉",
        start: '2025-11-11',
        allDay: true
      },
      {
        title: "Miss Abosede's Birthday 🎈🎉",
        start: '2025-08-20',
        allDay: true
      },
      {
        title: "Miss Cecelia's Birthday 🎈🎉",
        start: '2025-05-06',
        allDay: true
      },
      {
        title: "Mr Benjamin's Birthday 🎈🎉",
        start: '2025-05-27',
        allDay: true
      },
      {
        title: "Mr Joel's Birthday 🎈🎉",
        start: '2025-01-21',
        allDay: true
      },
      {
        title: "Mr Henry's Birthday 🎈🎉",
        start: '2025-09-20',
        allDay: true
      },
      {
        title: "Democracy Day",
        start: '2025-06-12',
        allDay: true
      },
      {
        title: "Mr Henry's Birthday 🎈🎉",
        start: '2024-09-20',
        allDay: true
      },
      {
        title: "Mr Itoro's Birthday 🎈🎉",
        start: '2024-11-18',
        allDay: true
      },
      {
        title: "Mr Itoro's Birthday 🎈🎉",
        start: '2025-11-18',
        allDay: true
      },
      {
        title: "Mr Bamishaye's Birthday 🎈🎉",
        start: '2025-06-12',
        allDay: true
      },
      {
        title: "Mr Kevin's Birthday 🎈🎉",
        start: '2025-05-05',
        allDay: true
      },
      {
        title: "Mr Uche's Birthday 🎈🎉",
        start: '2025-04-02',
        allDay: true
      }
    ]
  });

  calendar.render();
});