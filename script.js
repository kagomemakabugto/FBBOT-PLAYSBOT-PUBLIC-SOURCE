const _0x548229=_0x3134;(function(_0x31d348,_0x2642d4){const _0x81e767=_0x3134,_0x2fd053=_0x31d348();while(!![]){try{const _0x454582=-parseInt(_0x81e767(0x155))/0x1+-parseInt(_0x81e767(0x159))/0x2+-parseInt(_0x81e767(0x147))/0x3+-parseInt(_0x81e767(0x149))/0x4*(-parseInt(_0x81e767(0x144))/0x5)+-parseInt(_0x81e767(0x152))/0x6+parseInt(_0x81e767(0x153))/0x7+parseInt(_0x81e767(0x14f))/0x8;if(_0x454582===_0x2642d4)break;else _0x2fd053['push'](_0x2fd053['shift']());}catch(_0x5007e2){_0x2fd053['push'](_0x2fd053['shift']());}}}(_0x378f,0x95a4b));const API_URL=_0x548229(0x13e);function _0x3134(_0x337659,_0x5424a5){const _0x378f72=_0x378f();return _0x3134=function(_0x31346d,_0x39a91c){_0x31346d=_0x31346d-0x13e;let _0x17ed50=_0x378f72[_0x31346d];return _0x17ed50;},_0x3134(_0x337659,_0x5424a5);}let creditsData='';function _0x378f(){const _0x30ee62=['addEventListener','5395920SYbnBl','5488266hySYGW','getElementById','720834tuiQGP','credits.json','/get-session-count','sessionData','1156794SvdMiH','Error:','credits','sessionNumber','stringify','https://api.fbbot.playsbot.online','catch','success','message','textContent','Failed\x20to\x20add\x20session.\x20Please\x20try\x20again.','25RfBwBo','error','POST','2692896ozGXxZ','creditsData','261412bINAcE','value','pingTime','then','submit','click','20786552DPFqqT','json'];_0x378f=function(){return _0x30ee62;};return _0x378f();}const getCreditsData=()=>{const _0x371afe=_0x548229;fetch(_0x371afe(0x156))[_0x371afe(0x14c)](_0x27ca32=>_0x27ca32['json']())[_0x371afe(0x14c)](_0x3976d7=>{const _0x5df9f1=_0x371afe;creditsData=_0x3976d7[_0x5df9f1(0x15b)];})[_0x371afe(0x13f)](_0x2c9eab=>{const _0x18c854=_0x371afe;console[_0x18c854(0x145)](_0x18c854(0x15a),_0x2c9eab);});},updateSessionCounter=()=>{const _0x5bf6b4=_0x548229;fetch(API_URL+_0x5bf6b4(0x157))[_0x5bf6b4(0x14c)](_0x56643d=>_0x56643d[_0x5bf6b4(0x150)]())['then'](_0x4aa16e=>{const _0x4f4cd3=_0x5bf6b4;document[_0x4f4cd3(0x154)](_0x4f4cd3(0x15c))[_0x4f4cd3(0x142)]=_0x4aa16e['sessionCount'];})['catch'](_0x5ad280=>{const _0xfe9c5c=_0x5bf6b4;console[_0xfe9c5c(0x145)]('Error:',_0x5ad280);});},updatePingStatus=async()=>{const _0x5bb188=_0x548229;try{const _0x3f9bab=Date['now']();await fetch(API_URL+'/ping');const _0x4866b6=Date['now'](),_0x3c7f3c=_0x4866b6-_0x3f9bab;document[_0x5bb188(0x154)](_0x5bb188(0x14b))[_0x5bb188(0x142)]=_0x3c7f3c;}catch(_0x108396){console[_0x5bb188(0x145)](_0x5bb188(0x15a),_0x108396);}};document[_0x548229(0x154)](_0x548229(0x14d))[_0x548229(0x151)](_0x548229(0x14e),()=>{const _0x4c7344=_0x548229,_0x21a6b8=document[_0x4c7344(0x154)](_0x4c7344(0x158))[_0x4c7344(0x14a)];fetch(API_URL+'/add-session',{'method':_0x4c7344(0x146),'headers':{'Content-Type':'application/json'},'body':JSON[_0x4c7344(0x15d)]({'session':_0x21a6b8,'credits':creditsData})})[_0x4c7344(0x14c)](_0x5a274e=>_0x5a274e[_0x4c7344(0x150)]())[_0x4c7344(0x14c)](_0xf6a1aa=>{const _0x1b170b=_0x4c7344;alert(_0xf6a1aa[_0x1b170b(0x141)]),_0xf6a1aa[_0x1b170b(0x140)]&&(document[_0x1b170b(0x154)](_0x1b170b(0x158))[_0x1b170b(0x14a)]='',document[_0x1b170b(0x154)](_0x1b170b(0x148))[_0x1b170b(0x14a)]=creditsData,updateSessionCounter());})['catch'](_0x2e8fca=>{const _0x215d27=_0x4c7344;console[_0x215d27(0x145)]('Error:',_0x2e8fca),alert(_0x215d27(0x143));});}),getCreditsData(),updateSessionCounter(),setInterval(updatePingStatus,0x3e8);
