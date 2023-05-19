{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function generateCalendar() \{\
  var today = new Date();\
  var month = today.toLocaleString('default', \{ month: 'long' \});\
  var year = today.getFullYear();\
  var daysContainer = document.querySelector('.days');\
\
  document.querySelector('.month').textContent = month;\
  document.querySelector('.year').textContent = year;\
\
  var firstDayOfMonth = new Date(year, today.getMonth(), 1);\
  var lastDayOfMonth = new Date(year, today.getMonth() + 1, 0).getDate();\
\
  for (var i = 1; i <= lastDayOfMonth; i++) \{\
    var dayElement = document.createElement('div');\
    dayElement.textContent = i;\
    daysContainer.appendChild(dayElement);\
    if (i === today.getDate()) \{\
      dayElement.classList.add('current-day');\
    \}\
  \}\
\}\
\
generateCalendar();\
}