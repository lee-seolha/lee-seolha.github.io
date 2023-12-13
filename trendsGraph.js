const chart = Highcharts.chart('trendsGraph-container', {
  "chart": {
    "panning": {
      "enabled": true,
      "type": "x"
    },
    "zooming": {
      "pinchType": "x"
    },
    "animation": {
      "duration": 600
    },
    "panKey": "alt",
    "events": {},
    "type": "line",
    "inverted": false,
    "zoomType": "x"
  },
  "navigator": {
    "enabled": false
  },
  "scrollbar": {
    "enabled": false
  },
  "rangeSelector": {
    "enabled": false
  },
  "title": {
    "text": "Trends Graph",
    "style": {
      "color": "#25386F",
      "fontSize": "24px",
      "fontFamily": "Roboto, sans-serif"
    }
  },
  "tooltip": {
    "split": false,
    "crosshairs": true,
    "shared": true
  },
  "legend": {
    "enabled": true
  },
  "series": [{
      "data": [
        [
          1,
          0.0023947
        ],
        [
          2,
          0.0022321
        ],
        [
          3,
          0.0062664
        ],
        [
          4,
          0.0070588
        ],
        [
          5,
          0.0041237
        ],
        [
          6,
          0.0036433
        ],
        [
          7,
          0.0072035
        ],
        [
          8,
          0.0067828
        ],
        [
          9,
          0.0040457
        ],
        [
          10,
          0.0033644
        ],
        [
          11,
          0.0053963
        ],
        [
          12,
          0.0068247
        ],
        [
          13,
          0.0041966
        ]
      ],
      "name": "sight",
      "type": null,
      "dashStyle": "Dash",
      "color": "#ff0000",
      "sonification": {
        "tracks": [{
          "instrument": "piano",
          "roundToMusicalNotes": false
        }]
      }
    },
    {
      "data": [
        [
          1,
          0.0027939
        ],
        [
          2,
          0.0019531
        ],
        [
          3,
          0.0020214
        ],
        [
          4,
          0.0023529
        ],
        [
          5,
          0.0020619
        ],
        [
          6,
          0.0019175
        ],
        [
          7,
          0.0035094
        ],
        [
          8,
          0.0023123
        ],
        [
          9,
          0.0030342
        ],
        [
          10,
          0.003235
        ],
        [
          11,
          0.0016863
        ],
        [
          12,
          0.0032328
        ],
        [
          13,
          0.0035971
        ]
      ],
      "name": "hearing",
      "dashStyle": "ShortDash",
      "color": "#4c00ff",
      "sonification": {
        "tracks": [{
          "instrument": "flute",
          "roundToMusicalNotes": false
        }]
      }
    },
    {
      "data": [
        [
          1,
          0.0011974
        ],
        [
          2,
          0.0033482
        ],
        [
          3,
          0.0026279
        ],
        [
          4,
          0.0010458
        ],
        [
          5,
          0.002268
        ],
        [
          6,
          0.0019175
        ],
        [
          7,
          0.0016624
        ],
        [
          8,
          0.0032372
        ],
        [
          9,
          0.0011559
        ],
        [
          10,
          0.0028468
        ],
        [
          11,
          0.0026981
        ],
        [
          12,
          0.0057471
        ],
        [
          13,
          0.0038969
        ]
      ],
      "name": "nature",
      "dataLabels": {
        "enabled": false
      },
      "dashStyle": "",
      "color": "#000000",
      "type": null,
      "sonification": {
        "tracks": [{
          "instrument": "saxophone",
          "roundToMusicalNotes": false
        }]
      }
    }
  ],
  "xAxis": {
    "type": "category",
    "labels": {
      "style": {
        "color": "#666"
      }
    },
    "custom": {
      "allowNegativeLog": true
    },
    "crosshair": {
      "color": "#727ea1"
    },
    "title": {
      "text": "Books"
    },
    "visible": true,
    "min": null,
    "max": null
  },
  "lang": {
    "accessibility": {
      "chartTypes": {
        "splineSingle": "Smoothed line chart.",
        "splineMultiple": "Smoothed line chart.",
        "lineSingle": "Line chart.",
        "lineMultiple": "Line chart.",
        "pieSingle": "Pie chart.",
        "pieMultiple": "Pie chart.",
        "columnSingle": "Column chart.",
        "columnMultiple": "Column chart.",
        "scatterSingle": "Scatter chart.",
        "scatterMultiple": "Scatter chart.",
        "areasplineSingle": "Smoothed area chart.",
        "areasplineMultiple": "Smoothed area chart."
      }
    }
  },
  "exporting": {
    "enabled": false,
    "sourceWidth": 900,
    "chartOptions": {
      "title": {
        "style": {
          "fontFamily": "Verdana, sans-serif",
          "fontSize": "22px"
        }
      },
      "credits": {
        "enabled": true
      }
    }
  },
  "accessibility": {
    "screenReaderSection": {
      "afterChartFormat": ""
    },
    "landmarkVerbosity": "disabled",
    "series": {
      "pointDescriptionEnabledThreshold": 8000
    }
  },
  "sonification": {
    "afterSeriesWait": 600,
    "order": "sequential",
    "masterVolume": 1.3,
    "updateInterval": 50,
    "defaultInstrumentOptions": {
      "roundToMusicalNotes": false,
      "mapping": {
        "tremolo": {
          "speed": 0.55
        },
        "pitch": {
          "min": 30,
          "max": 90
        },
        "pan": {
          "mapTo": "x",
          "min": -1,
          "max": 1
        }
      },
      "pointGrouping": {
        "enabled": true,
        "groupTimespan": 5.552003873143576,
        "algorithm": "minmax",
        "prop": "y"
      }
    },
    "duration": 22332,
    "showCrosshair": true,
    "showTooltip": false,
    "globalContextTracks": []
  },
  "plotOptions": {
    "series": {
      "animation": false,
      "dataGrouping": {
        "enabled": true,
        "groupPixelWidth": 3,
        "approximation": null
      },
      "cropThreshold": 1,
      "label": {
        "enabled": true
      }
    },
    "pie": {
      "dataGrouping": {
        "enabled": false
      }
    },
    "scatter": {
      "marker": {
        "enabled": true
      }
    }
  },
  "yAxis": {
    "opposite": false,
    "labels": {
      "style": {
        "color": "#666"
      }
    },
    "custom": {
      "allowNegativeLog": true
    },
    "title": {
      "text": "Relative Frequency"
    },
    "type": "linear",
    "visible": true,
    "min": null,
    "max": null
  },
  "credits": {
    "enabled": false,
    "position": {
      "y": -2
    }
  },
  "subtitle": {
    "text": "William Wordsworth, The Prelude 1805"
  }
});

// Handle the keyboard navigation
document.getElementById('controls').onkeydown = function(e) {
  let lastPlayed;

  const speaker = new Highcharts.sonification.SonificationSpeaker({
    volume: 0.4,
    rate: 2
  });

  // Announce values + series name after playing individual points. We
  // just reuse the accessibility description for the point, for simplicity.
  // We use a single SonificationSpeaker for the announcement, since it makes
  // it easy to avoid multiple announcements overlapping.
  function onSinglePointPlayed(e) {
    const point = e.pointsPlayed && e.pointsPlayed[0];
    if (point) {
      speaker.sayAtTime(700, point.accessibility.valueDescription +
        ' ' + point.series.name);
    }
  }

  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    chart.sonification.playAdjacent(
      e.key === 'ArrowRight', onSinglePointPlayed);

  } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    const newSeries = chart.sonification
      .playAdjacentSeries(e.key === 'ArrowUp', 'x', onSinglePointPlayed);
    lastPlayed = chart.sonification.getLastPlayedPoint();
    if (lastPlayed.x && newSeries) {
      // Speak new series if not first point
      chart.sonification.speak(newSeries.name);
    }

  } else if (e.key === ' ') {
    chart.toggleSonify(false);

  } else if (e.key === 'Home' || e.key === 'End') {
    lastPlayed = chart.sonification.getLastPlayedPoint();
    if (lastPlayed) {
      lastPlayed.series.points[e.key === 'End' ?
        lastPlayed.series.points.length - 1 : 0
      ].sonify(onSinglePointPlayed);
    }

  } else {
    return; // Don't prevent default on unknown keys
  }
  speaker.cancel();
  e.preventDefault();
};


// Start sonification mode
document.getElementById('sonify').onclick = function() {
  // Show the help field and set keyboard focus to it
  const controls = document.getElementById('controls');
  controls.className = 'visible';

  setTimeout(function() {
    controls.focus();
  }, 10);

  // Notification sound to indicate something happened
  chart.sonification.playNote('vibraphone', {
    note: 'g6',
    volume: 0.2,
    noteDuration: 300
  });
};
