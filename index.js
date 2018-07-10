var members = {
  watamura: {
    name: '綿村',
    image: './src/m-watamura.jpg',
    point: 0
  },
  fujino : {
    name: '藤野',
    image: './src/m-fujino.jpg',
    point: 0
  },
  oguro: {
    name: '小黒',
    image: './src/m-oguro.jpg',
    point: 0
  },
  mogi :{
    name: '茂木',
    image: './src/m-mogi.jpg',
    point: 0
  },
  usami: {
    name: '宇佐美',
    image: './src/m-usami.jpg',
    point: 0
  },
  atsumi: {
    name: 'あつみん',
    image: './src/m-atsumi.jpg',
    point: 0
  },
  kenta : {
    name: '研太',
    image: './src/m-kenta.jpg',
    point: 0
  },
  yamako : {
    name: 'やまこ',
    image: './src/m-yamako.jpg',
    point: 0
  },
  kani: {
    name: '🦀',
    image: './src/m-kani.jpg',
    point: 0
  },
  deek: {
    name: 'デレック',
    image: './src/m-deek.jpg',
    point: 0
  },
  hamada: {
    name: 'はまだ',
    image: './src/m-hamada.jpg',
    point: 0
  },
  ikehata: {
    name: 'いけはた',
    image: './src/m-ikehata.jpg',
    point: 0
  },
  yoshida: {
    name: '吉田',
    image: './src/m-yoshida.jpg',
    point: 0
  },
  komada :{
    name: '駒田',
    image: './src/m-komada.jpg',
    point: 0
  },
  yuki : {
    name:'ゆき',
    image: './src/m-yuki.jpg',
    point:0
  },
  nishida : {
    name:'にしだ',
    image: './src/m-nishida.jpg',
    point:0
  }
};

var pointInfo =  {
  game1 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game2 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game3 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game4 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game5 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game6 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game7 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game8 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game9 : {
    pitari: null,
    teamA : null,
    draw  : null,
    teamB : null
  },
  game10 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
  },
  game11 : {
      pitari: null,
      teamA : null,
      draw  : null,
      teamB : null
  },
  game12  : {
      pitari: null,
      teamA : null,
      draw  : null,
      teamB : null
  },
  game13 : {
      pitari: null,
      teamA : null,
      draw  : null,
      teamB : null
  },
    game14 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    },
    game15 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    },
    game16 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    },
    game17 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    },
    game18 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    },
    game19 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    },
    game20 : {
        pitari: null,
        teamA : null,
        draw  : null,
        teamB : null
    }
};

var voteInfo = {
  game1: [],
  game2: [],
  game3: [],
  game4: [],
  game5: [],
  game6: [],
  game7: [],
  game8: [],
  game9: [],
  game10: [],
  game11: [],
  game12: [],
  game13: [],
    game14: [],
    game15: [],
    game16: [],
    game17: [],
    game18: [],
    game19: [],
    game20: []
};


var games = {
    game1: {
        id: 1,
        status: '',
        date: '6/14 Thu. 24:00',
        teamA: 'ロシア',
        teamAFlag: '🇷🇺',
        teamB: 'サウジアラビア',
        teamBFlag: '🇸🇦',
        tv: 'NHK／NHK BS1',
        teamAResult: 5,
        teamBResult: 0,
        point: pointInfo.game1,
        votes: voteInfo.game1
    },
    game2: {
        id: 2,
        status: '',
        date: '6/15 Fri. 27:00',
        teamA: 'ポルトガル',
        teamAFlag: '🇵🇹',
        teamB: 'スペイン',
        teamBFlag: '🇪🇸',
        tv: 'NHK／NHK BS1',
        teamAResult: 3,
        teamBResult: 3,
        point: pointInfo.game2,
        votes: voteInfo.game2
    },
    game3: {
        id: 3,
        status: '',
        date: '6/16 Sat. 22:00',
        teamA: 'アルゼンチン',
        teamAFlag: '🇦🇷',
        teamB: 'アイスランド',
        teamBFlag: '🇮🇸',
        tv: 'NHK／NHK BS1',
        teamAResult: 1,
        teamBResult: 1,
        point: pointInfo.game3,
        votes: voteInfo.game3
    },
    game4: {
        id: 4,
        status: '',
        date: '6/18 Mon. 21:00',
        teamA: 'スウェーデン',
        teamAFlag: '🇸🇪',
        teamB: '韓国',
        teamBFlag: '🇰🇷',
        tv: 'NHK／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game4,
        votes: voteInfo.game4
    },
    game5: {
        id: 5,
        status: '',
        date: '6/19 Tue. 21:00',
        teamA: 'コロンビア',
        teamAFlag: '🇨🇴',
        teamB: '日本',
        teamBFlag: '🇯🇵',
        tv: 'NHK／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game5,
        votes: voteInfo.game5
    },
    game6: {
        id: 6,
        status: '',
        date: '6/20 Wed. 21:00',
        teamA: 'ポルトガル',
        teamAFlag: '🇵🇹',
        teamB: 'モロッコ',
        teamBFlag: '🇲🇦',
        tv: 'テレビ朝日系列／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game6,
        votes: voteInfo.game6
    },
    game7: {
        id: 7,
        status: 'notyet',
        date: '6/22 Fri. 21:00',
        teamA: 'ブラジル',
        teamAFlag: '🇧🇷',
        teamB: 'コスタリカ',
        teamBFlag: '🇨🇷',
        tv: 'テレビ朝日系列／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game7,
        votes: voteInfo.game7
    },
    game8: {
        id: 8,
        status: 'notyet',
        date: '6/24 Sun. 24:00',
        teamA: '日本',
        teamAFlag: '🇯🇵',
        teamB: 'セネガル',
        teamBFlag: '🇸🇳',
        tv: '日本テレビ系列／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game8,
        votes: voteInfo.game8
    },
    game9: {
        id: 9,
        status: 'notyet',
        date: '6/26 Tue. 23:00',
        teamA: 'デンマーク',
        teamAFlag: '🇩🇰',
        teamB: 'フランス',
        teamBFlag: '🇫🇷',
        tv: 'テレビ朝日系列／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game9,
        votes: voteInfo.game9
    },
    game10: {
        id: 10,
        status: 'notyet',
        date: '6/28 Thu. 23:00',
        teamA: '日本',
        teamAFlag: '🇯🇵',
        teamB: 'ポーランド',
        teamBFlag: '🇵🇱',
        tv: 'フジテレビ系列／NHK BS1',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game10,
        votes: voteInfo.game10
    },
    game11: {
        id: 11,
        status: 'notyet',
        date: '6/30 Sat. 23:00',
        teamA: 'フランス',
        teamAFlag: '🇯🇵',
        teamB: 'アルゼンチン',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game11,
        votes: voteInfo.game11
    },
    game12: {
        id: 12,
        status: 'notyet',
        date: '7/1 Sun. 23:00',
        teamA: 'スペイン',
        teamAFlag: '🇯🇵',
        teamB: 'ロシア',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game12,
        votes: voteInfo.game12
    },
    game13: {
        id: 13,
        status: 'notyet',
        date: '7/2 Mon. 27:00',
        teamA: 'ベルギー',
        teamAFlag: '🇯🇵',
        teamB: '日本',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game13,
        votes: voteInfo.game13
    },
    game14: {
        id: 14,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'スウェーデン',
        teamAFlag: '🇯🇵',
        teamB: 'スイス',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game14,
        votes: voteInfo.game14
    },
    game15: {
        id: 15,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'ブラジル',
        teamAFlag: '🇯🇵',
        teamB: 'ベルギー',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game15,
        votes: voteInfo.game15
    },
    game16: {
        id: 16,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'スウェーデン',
        teamAFlag: '🇯🇵',
        teamB: 'イングランド',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game16,
        votes: voteInfo.game16
    },
    game17: {
        id: 17,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'フランス',
        teamAFlag: '🇯🇵',
        teamB: 'ベルギー',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game17,
        votes: voteInfo.game17
    },
    game18: {
        id: 18,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'クロアチア',
        teamAFlag: '🇯🇵',
        teamB: 'イングランド',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game18,
        votes: voteInfo.game18
    },
    game19: {
        id: 19,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'xx',
        teamAFlag: '🇯🇵',
        teamB: 'xx',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game19,
        votes: voteInfo.game19
    },
    game20: {
        id: 20,
        status: 'notyet',
        date: '7/3 Sat. 23:00',
        teamA: 'xx',
        teamAFlag: '🇯🇵',
        teamB: 'xx',
        teamBFlag: '🇵🇱',
        tv: ' ',
        teamAResult: null,
        teamBResult: null,
        point: pointInfo.game20,
        votes: voteInfo.game20
    }
}

var vueMember = new Vue({
  el: '#memberList',
  data: {members: members}
});

var vueGame = new Vue({
  el: '#gameList',
  data: {games: games}
});



