//Codígo creado por David Chian wa.me/5351524614

const _0x55a40d=_0x1fa8;(function(_0x1e9e04,_0x40465b){const _0x570ce1=_0x1fa8,_0x5ab98d=_0x1e9e04();while(!![]){try{const _0x44ba24=-parseInt(_0x570ce1(0xf7))/0x1*(parseInt(_0x570ce1(0xeb))/0x2)+parseInt(_0x570ce1(0xdb))/0x3+parseInt(_0x570ce1(0xe1))/0x4*(parseInt(_0x570ce1(0xf4))/0x5)+-parseInt(_0x570ce1(0xbf))/0x6+-parseInt(_0x570ce1(0xc9))/0x7+-parseInt(_0x570ce1(0xd2))/0x8*(-parseInt(_0x570ce1(0xb8))/0x9)+parseInt(_0x570ce1(0xf3))/0xa*(parseInt(_0x570ce1(0xd9))/0xb);if(_0x44ba24===_0x40465b)break;else _0x5ab98d['push'](_0x5ab98d['shift']());}catch(_0x49e143){_0x5ab98d['push'](_0x5ab98d['shift']());}}}(_0x2d22,0x2fc36));function _0x1fa8(_0x6d9f69,_0x1202ec){const _0x2d22b3=_0x2d22();return _0x1fa8=function(_0x1fa8f3,_0x22d7a7){_0x1fa8f3=_0x1fa8f3-0xb6;let _0x2c1648=_0x2d22b3[_0x1fa8f3];return _0x2c1648;},_0x1fa8(_0x6d9f69,_0x1202ec);}import _0x1c5ac3 from'fs';const obtenerDatos=()=>{const _0x2d0d32=_0x1fa8;return _0x1c5ac3['existsSync'](_0x2d0d32(0xe3))?JSON[_0x2d0d32(0xdc)](_0x1c5ac3[_0x2d0d32(0xd7)]('data.json','utf-8')):{'chats':{}};},guardarDatos=_0x3bf276=>{const _0x1e4faa=_0x1fa8;_0x1c5ac3[_0x1e4faa(0xed)](_0x1e4faa(0xe3),JSON[_0x1e4faa(0xd6)](_0x3bf276,null,0x2));},obtenerPersonajes=()=>{const _0x31aabe=_0x1fa8;if(_0x1c5ac3[_0x31aabe(0xe4)](_0x31aabe(0xce)))return JSON['parse'](_0x1c5ac3[_0x31aabe(0xd7)](_0x31aabe(0xce),_0x31aabe(0xee)));else throw new Error('No\x20se\x20encontró\x20el\x20archivo\x20de\x20personajes.');},verifi=()=>{const _0x311245=_0x1fa8,_0x570441=JSON[_0x311245(0xdc)](_0x1c5ac3[_0x311245(0xd7)](_0x311245(0xc0),_0x311245(0xee)));if(_0x570441[_0x311245(0xcd)]!==_0x311245(0xe7))return![];if(_0x570441[_0x311245(0xd8)][_0x311245(0xcc)]!==_0x311245(0xec))return![];const _0x16ef91=JSON[_0x311245(0xdc)](_0x1c5ac3['readFileSync']('./settings.js','utf-8')),_0x26d1ab=_0x311245(0xf5),_0x320e55=_0x16ef91[_0x311245(0xb6)][_0x311245(0xc3)][_0x311245(0xb9)](_0x3d2e28=>Array[_0x311245(0xea)](_0x3d2e28)&&_0x3d2e28[_0x311245(0xd5)](_0x26d1ab));if(!_0x320e55)return![];return!![];};let handler=async(_0x5ddb57,{conn:_0x223fdc,args:_0x2d16d7})=>{const _0x3c0b48=_0x1fa8;if(_0x2d16d7[_0x3c0b48(0xb7)]<0x2){_0x223fdc[_0x3c0b48(0xe0)](_0x5ddb57['chat'],_0x3c0b48(0xc4),_0x5ddb57,rcanal);return;}if(!verifi()){await _0x223fdc['reply'](_0x5ddb57[_0x3c0b48(0xc6)],_0x3c0b48(0xd4),_0x5ddb57,rcanal);return;}let _0x50ad92=_0x5ddb57[_0x3c0b48(0xde)][0x0];if(!_0x50ad92){_0x223fdc['reply'](_0x5ddb57[_0x3c0b48(0xc6)],_0x3c0b48(0xdf),_0x5ddb57,rcanal);return;}let _0x24b033=_0x2d16d7[_0x3c0b48(0xc8)](0x1)[_0x3c0b48(0xca)]('\x20')[_0x3c0b48(0xc2)]();const _0x13f07c=_0x5ddb57[_0x3c0b48(0xbc)],_0x4874ee=_0x5ddb57[_0x3c0b48(0xc6)],_0x3be0c1=obtenerDatos(),_0x381255=obtenerPersonajes();!_0x3be0c1[_0x3c0b48(0xbe)][_0x4874ee]&&(_0x3be0c1[_0x3c0b48(0xbe)][_0x4874ee]={'usuarios':{},'personajesReservados':[]});let _0xd29928=_0x3be0c1[_0x3c0b48(0xbe)][_0x4874ee][_0x3c0b48(0xda)][_0x13f07c];if(!_0xd29928||_0xd29928[_0x3c0b48(0xe6)][_0x3c0b48(0xb7)]===0x0){_0x223fdc['reply'](_0x5ddb57[_0x3c0b48(0xc6)],_0x3c0b48(0xbd),_0x5ddb57,rcanal);return;}let _0x4461f6=_0xd29928[_0x3c0b48(0xe6)][_0x3c0b48(0xf6)](_0x1025cc=>_0x1025cc['name'][_0x3c0b48(0xc2)]()===_0x24b033['toLowerCase']()[_0x3c0b48(0xf8)]());if(_0x4461f6===-0x1){_0x223fdc[_0x3c0b48(0xe0)](_0x5ddb57[_0x3c0b48(0xc6)],'𝑵𝒐\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20'+_0x24b033+_0x3c0b48(0xd3),_0x5ddb57,rcanal);return;}let _0x1c658e=_0x381255[_0x3c0b48(0xc5)](_0x2a8a89=>_0x2a8a89[_0x3c0b48(0xcd)][_0x3c0b48(0xc2)]()===_0x24b033[_0x3c0b48(0xc2)]()[_0x3c0b48(0xf8)]());if(!_0x1c658e){_0x223fdc[_0x3c0b48(0xe0)](_0x5ddb57['chat'],_0x3c0b48(0xef)+_0x24b033+_0x3c0b48(0xba),_0x5ddb57,rcanal);return;}let _0x43f76d={'name':_0xd29928[_0x3c0b48(0xe6)][_0x4461f6][_0x3c0b48(0xcd)],'value':_0x1c658e[_0x3c0b48(0xc7)],'url':_0x1c658e[_0x3c0b48(0xcc)]};!_0x3be0c1[_0x3c0b48(0xbe)][_0x4874ee][_0x3c0b48(0xda)][_0x50ad92]&&(_0x3be0c1[_0x3c0b48(0xbe)][_0x4874ee][_0x3c0b48(0xda)][_0x50ad92]={'characterCount':0x0,'totalRwcoins':0x0,'characters':[]});let _0x1a4210=_0x3be0c1['chats'][_0x4874ee][_0x3c0b48(0xda)][_0x50ad92];_0x1a4210[_0x3c0b48(0xe6)][_0x3c0b48(0xd0)]({'name':_0x43f76d[_0x3c0b48(0xcd)],'url':_0x43f76d[_0x3c0b48(0xcc)],'value':_0x43f76d[_0x3c0b48(0xc7)]}),_0x1a4210[_0x3c0b48(0xf9)]++,_0x1a4210[_0x3c0b48(0xcb)]+=_0x43f76d[_0x3c0b48(0xc7)],_0x3be0c1[_0x3c0b48(0xbe)][_0x4874ee]['usuarios'][_0x50ad92]=_0x1a4210,_0xd29928['characters'][_0x3c0b48(0xe9)](_0x4461f6,0x1),_0xd29928[_0x3c0b48(0xf9)]--,_0xd29928[_0x3c0b48(0xcb)]-=_0x43f76d[_0x3c0b48(0xc7)],_0x3be0c1['chats'][_0x4874ee][_0x3c0b48(0xda)][_0x13f07c]=_0xd29928,guardarDatos(_0x3be0c1);let _0x5f15dc=await _0x223fdc[_0x3c0b48(0xe8)](_0x50ad92),_0x385754=await _0x223fdc[_0x3c0b48(0xe8)](_0x13f07c),_0x4e5947=_0x3c0b48(0xc1)+_0x43f76d[_0x3c0b48(0xcd)]+_0x3c0b48(0xe5)+_0x13f07c[_0x3c0b48(0xdd)]('@')[0x0]+_0x3c0b48(0xf2)+_0x50ad92[_0x3c0b48(0xdd)]('@')[0x0]+_0x3c0b48(0xbb)+_0x43f76d[_0x3c0b48(0xc7)]+_0x3c0b48(0xe2);await _0x223fdc[_0x3c0b48(0xcf)](_0x5ddb57[_0x3c0b48(0xc6)],{'image':{'url':_0x43f76d[_0x3c0b48(0xcc)]},'caption':_0x4e5947,'mentions':[_0x50ad92,_0x13f07c]},{'quoted':_0x5ddb57});};handler['help']=[_0x55a40d(0xd1)],handler['tags']=['rollwaifu'],handler[_0x55a40d(0xf1)]=[_0x55a40d(0xf0)],handler['register']=!![],handler['group']=!![];export default handler;function _0x2d22(){const _0x4c2070=['𝑵𝒐\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔\x20𝒆𝒏\x20𝒕𝒖\x20𝒊𝒏𝒗𝒆𝒏𝒕𝒂𝒓𝒊𝒐.','chats','1673346LbkBZb','./package.json','𝑬𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x0a','toLowerCase','owner','𝑫𝒆𝒃𝒆𝒔\x20𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒂𝒓\x20𝒂\x20𝒖𝒏\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒚\x20𝒆𝒍\x20𝒏𝒐𝒎𝒃𝒓𝒆\x20𝒅𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆.\x0a\x20`/darrw\x20@usuario\x20Megumin`.','find','chat','value','slice','621593YoQNoG','join','totalRwcoins','url','name','./lib/characters.json','sendMessage','push','darrw\x20@usuario\x20<personaje>','1011032dfkchq','\x20𝒆𝒏\x20𝒕𝒖\x20𝒊𝒏𝒗𝒆𝒏𝒕𝒂𝒓𝒊𝒐.','𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝒀𝒖𝒆-𝑩𝒐𝒕.\x0a\x20🔥\x20https://github.com/Nimodo83/Yue-Bot','includes','stringify','readFileSync','repository','3476bcWkAq','usuarios','414633KmzKcO','parse','split','mentionedJid','𝑫𝒆𝒃𝒆𝒔\x20𝒎𝒆𝒏𝒄𝒊𝒐𝒏𝒂𝒓\x20𝒂\x20𝒖𝒏\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒗𝒂𝒍𝒊𝒅𝒐.','reply','1660bCazUK','\x20𝑹𝑾𝒄𝒐𝒊𝒏𝒔','data.json','existsSync','\x0a𝑫𝒆\x20@','characters','Yue-Bot','getName','splice','isArray','27006uTlYUO','git+https://github.com/Nimodo83/Yue-Bot.git','writeFileSync','utf-8','𝑵𝒐\x20𝒔𝒆\x20𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','darrw','command','\x0a𝑨𝒉𝒐𝒓𝒂\x20𝒆𝒔\x20𝒅𝒆\x20@','4540jGsdEo','1975SRgfZV','5351524614','findIndex','10JQSrlb','trim','characterCount','global','length','18iWxJGE','some','\x20𝒆𝒏\x20𝒍𝒂\x20𝒃𝒂𝒔𝒆\x20𝒅𝒆\x20𝒅𝒂𝒕𝒐𝒔.','\x0a𝑨𝒅𝒆𝒎𝒂𝒔,\x20𝒐𝒃𝒕𝒊𝒆𝒏𝒆𝒔\x20','sender'];_0x2d22=function(){return _0x4c2070;};return _0x2d22();}