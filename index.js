var memberList = {
  members:[
    {id:'watamura', image:'./src/m-watamura.jpg', name:'綿村', point:0},
    {id:'fujino', image:'./src/m-fujino.jpg',   name:'藤野',    point:0},
    {id:'oguro', image:'./src/m-oguro.jpg',    name:'小黒',    point:0},
    {id:'mogi', image:'./src/m-mogi.jpg' ,    name:'茂木',    point:0},
    {id:'usami', image:'./src/m-usami.jpg' ,   name:'宇佐美',   point:0},
    {id:'atsumi', image:'./src/m-atsumi.jpg' ,  name:'あつみん', point:0},
    {id:'kenta', image:'./src/m-kenta.jpg' , name:'研太', point:0},
    {id:'yamako', image:'./src/m-yamako.jpg' , name:'やまこ', point:0},
    {id:'kani', image:'./src/m-kani.jpg' , name:'🦀', point:0},
    {id:'deek', image:'./src/m-deek.jpg' , name:'デレック', point:0},
    {id:'hamada', image:'./src/m-hamada.jpg' , name:'はまだ', point:0},
    {id:'ikehata', image:'./src/m-ikehata.jpg' , name:'いけはた', point:0},
    {id:'yoshida', image:'./src/m-yoshida.jpg' , name:'吉田', point:0},
    {id:'komada', image:'./src/m-komada.jpg' , name:'駒田', point:0},
    {id:'yuki', image:'./src/m-yuki.jpg' , name:'ゆき', point:0}
  ]
}

var vueMember = new Vue({
  el: '#memberList',
  data: memberList
});