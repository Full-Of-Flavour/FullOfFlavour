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
        title: 'Independence Day',
        start: '2024-10-01',
        allDay: true
      },
      {
        title: 'National Day @ ICEL',
        start: '2024-10-02',
        allDay: true
      },
      {
        title: 'Monthly HSE Meeting',
        start: '2024-09-30T13:00:00',
        end: '2024-09-30T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting',
        start: '2024-10-28T13:00:00',
        end: '2024-10-28T14:00:00',
      },
      {
        title: 'Monthly HSE Meeting',
        start: '2024-11-25T13:00:00',
        end: '2024-11-25T14:00:00',
      },
      {
        title: 'End of the Year Gift Distribution',
        start: '2024-12-11',
        end: '2024-12-14',
      },
      {
        title: 'Monthly HSE Meeting',
        start: '2024-12-16T13:00:00',
        end: '2024-12-16T14:00:00',
      },
      {
        title: 'End of the Year Celebration/Official Close of business 2024',
        start: '2024-12-19',
        end: '2024-12-21',
      },
      {
        title: 'Christmas Holiday',
        start: '2024-12-23',
        end: '2024-12-27',
      },
      {
        title: "New Year's Holiday",
        start: '2024-12-31',
        end: '2025-01-02',
      }
    ]
  });

  calendar.render();
});