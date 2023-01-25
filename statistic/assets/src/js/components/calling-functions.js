import {standings, topPlayers} from './filling-table';
import {fillMatches} from './matches';
import {fillingLeague} from './league';
import {calendar} from './calendar';

export const getLeague = async (url, e) => {
  //let response = await fetch(url);
  // if (response.ok) {
  //     let data = await response.json();
  //     return data;
  // }
  if (e.target.textContent == 'Euroleague') {
    let data = {
      league: {
        show: 'Euroleague',
        property: {
          name: 'Euroleague',
          img: 'static/img/pngegg.png',
          season: {
            start: '1 Oct',
            end: '3 May',
            today: '22 Jan',
            value: '40'
          },
          country: {
            name: 'Europe',
            img: 'static/img/pngegg.png'
          }
        },
        //select: ['NBA', 'Euroleague', 'VTB League']
      },
      standings: {
        east: [{
            position: '1',
            team: {
              imageUrl: 'static/img/pngegg.png',
              name: 'Indiana',
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
    return data;
  }
  if (e.target.textContent == 'VTB League') {
    let data = {
      league: {
        show: 'VTB League',
        property: {
          name: 'VTB League',
          img: 'static/img/pngegg.png',
          season: {
            start: '30 Nov',
            end: '1 Aug',
            today: '22 Jan',
            value: '20'
          },
          country: {
            name: 'Russia',
            img: 'static/img/pngegg.png'
          }
        },
        //select: ['NBA', 'Euroleague', 'VTB League']
      },
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
    return data;
  }
  if (e.target.textContent == 'NBA') {
    let data = {
      league: {
        show: 'NBA',
        property: {
          name: 'NBA',
          img: 'static/img/pngegg.png',
          season: {
            start: '19 Oct',
            end: '14 Jun',
            today: '18 Jan',
            value: '70'
          },
          country: {
            name: 'USA',
            img: 'static/img/pngegg.png'
          }
        },
        //select: ['NBA', 'Euroleague', 'VTB League']
      },
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
      topPlayers: {
        atribyte: '+/- per game',
        list: [
        {
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
      },
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
    return data;
  }
}

//json при загрузке страницы
let NBA = {
  league: {
    show: 'NBA',
    property: {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan',
        value: '70'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    select: ['NBA', 'Euroleague', 'VTB League']
  },
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
let Euroleague = {
  league: {
    show: 'NBA',
    property: {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan',
        value: '70'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    select: ['NBA', 'Euroleague', 'VTB League']
  },
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
let VTBLeague = {
  league: {
    show: 'NBA',
    property: {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan',
        value: '70'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    select: ['NBA', 'Euroleague', 'VTB League']
  },
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

let fillingAll = function (Json) {
  fillingLeague(Json.league);
  standings(Json.standings, 'east');
  topPlayers(Json.topPlayers);
  fillMatches(Json.matches);
  calendar();
  
  window.addEventListener('resize', () => {
    fillMatches(Json.matches);
  });
}

fillingAll(NBA);

let list = document.querySelector('.league-selection .select-list');
list.querySelectorAll('li').forEach((element) => {
  element.addEventListener('click', function(e) {
    getLeague('/asd', e).then((data) => {
      fillingAll(data);
    })
  })
})