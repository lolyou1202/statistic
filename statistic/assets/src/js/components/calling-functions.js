import {standings, fillingTopPlayers} from './filling-table';
import {fillMatches} from './matches';
import {fillingline, selectLeague} from './league';
import {calendar} from './calendar';

//json при загрузке страницы
let mainJson = {
  league: [{
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    {
      name: 'Euroleague',
      img: 'static/img/pngegg.png',
      season: {
        start: '2 Oct',
        end: '1 Jul',
        today: '18 Jan'
      },
      country: {
        name: 'Europe',
        img: 'static/img/pngegg.png'
      }
    },
    {
      name: 'VTB League',
      img: 'static/img/pngegg.png',
      season: {
        start: '2 Oct',
        end: '1 Jul',
        today: '18 Jan'
      },
      country: {
        name: 'Russia',
        img: 'static/img/pngegg.png'
      }
    }
  ],
  standings: {
    east: [{
        position: '1',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'Boston',
        },
        wins: '33',
        loses: '23',
        lastFive: 'WWWLL',
        percent: '0.58',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'Golden State',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLLLL',
        percent: '0.11',
      },
      {
        position: '3',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '4',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '5',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '6',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '7',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '8',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '9',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '10',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '11',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '12',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '13',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '14',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '15',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      }],
    west: [{
        position: '1',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'Milwaukee',
        },
        wins: '33',
        loses: '23',
        lastFive: 'WWWLL',
        percent: '0.58',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'Milwaukee',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '3',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      },
      {
        position: '2',
        team: {
          imageUrl: 'static/img/pngegg.png',
          name: 'GSW',
        },
        wins: '11',
        loses: '43',
        lastFive: 'LLWLW',
        percent: '0.23',
      }]
  },
  topPlayers: [{
      position: '1',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '2',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '3',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '4',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '5',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '6',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '7',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '8',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '9',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
    {
      position: '10',
      player: {
        team: 'static/img/pngegg.png',
        person: {
          img: 'static/img/pngegg.png',
          name: 'Stephen Curry',
          position: 'Guard'
        }
      },
      value: '0.58',
    },
  ],
  matches: [
    {
      time: '12:00',
      matches: {
        1: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        },
        2: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        }
      }
    },
    {
      time: '15:00',
      matches: {
        1: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        },
        2: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        },
        3: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        }
      }
    },
    {
      time: '16:00',
      matches: {
        1: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        },
        2: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        },
        3: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        }
      }
    },
    {
      time: '18:00',
      matches: {
        1: {
          comands: {
            1: {
              name: 'Golden State Warriors',
              standings: '2',
              place: 'Home',
              img: '../img/pngegg.png'
            },
            2: {
              name: 'Orlando Magick',
              standings: '10',
              place: 'Guests',
              img: '../img/pngegg.png'
            }
          }
        }
      }
    }
  ]
}

let fillingAll = function (mainJson) {
  //fillingLeague();
  standings(mainJson.standings, 'east');
  fillingTopPlayers(mainJson.topPlayers);
  fillMatches(mainJson.matches);
  calendar();
}

fillingAll(mainJson);


window.addEventListener('resize', () => {
  fillMatches(mainJson.matches);
});

fillingline(30, '19 Oct', '1 Jan', '14 Jun');