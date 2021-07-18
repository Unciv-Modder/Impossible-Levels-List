var lang = ["ENG", 0],
langs = ['ENG', 'ESP'],
language = {
  
  ENG:'Language',
  ESP:'Idioma'
  
},
welcomeText = {
  
  ENG:"Information stolen from the ILL. Unfinished",
  ESP:"informacion robada del ILL. No Terminada"
  
},
menu = {
  
  rulesENG:`<div arial><color lime>PLACEMENT GUIDELINES</color><br>
<br>The level must be considered either impossible or harder than any rated level at the time of its creation.
Levels that are released in easier states than when they were originally finished are allowed if their released versions would still have been harder than any rated level at the time (e.g. Kenos by Bianox). In these cases, the released versions will take precedence over unnerfed versions.
Two-player levels’ difficulty will always be judged on their difficulty to complete solo.
The level must be at least 30 seconds long in the editor.
If a level is found to be in violation of any of the List’s rules, it will be Marked for Removal. Levels that are Marked for Removal will have their entries on the List highlighted, and an explanation will be provided in the “Marked for Removal” section of the List. If the outstanding violations are not resolved 3 days after being Marked, the level will be removed from the List.
<br>
<br>

<color lime>QUALITY STANDARDS</color><br>
<br>At least 80% of the level’s gameplay and decoration must meet the quality standards of the List team. The quality of each level will be judged on a case-by-case basis.
<br>Sections that do not meet standards must either comprise 1% of the level’s length or be 19 blocks long to be counted in an assessment. The shortest of these two measurements will be used.
<br>The level can have “old-style” decoration, but it must have decoration and gameplay suitable for that time period. This rule is only effective when the level would otherwise violate Quality Standards rules (e.g. Sloom by HaydenDom and Knali2001).
<br>If the level is a remake or buffed version of an existing level, it must be buffed in a transformative way or have new decoration (e.g. Silent Clubstep by Maus999). The originality of each remake will be judged on a case-by-case basis.
<br>In 2-player sections, both players have to meet the gameplay quality rules.
<br>The level must be fully finished and decorated to be placed on the List. 
<br>If the level is significant to the List or impossible level history, exemptions from the Decoration and Gameplay Quality Standards rules can be made. The significance of each level will be judged on a case-by-case basis.
<br>If the level is rated, it is exempt from all Quality Standards rules.
<br>
<br>

<color lime>PHYSICAL POSSIBILITY</color><br>
<br>If the level has not been verified, it must be physically possible and able to be completed from the beginning in normal mode on at least one framerate.
<br>Changing the framerate during gameplay is not allowed.
<br>All levels that are submitted to the List require their possible framerate to be publicly stated.
<br>Levels that include swift clicks are allowed, but said swift clicks will not be factored into the level’s possibility.
<br>In the spirit of competition, triggers which count frames with the intent to force frame perfects are disallowed. This is due to the ease of <br>creating extreme difficulty and overall low effort required in both playtesting and creating.
<br>Timings that simulate randomness are allowed in levels, however the level’s placement will be based on optimal luck.
<br>
<br>

<color lime>SPAM SPEED LIMIT</color><br>
<br>The level must not include spam sections where any single player character would make more than 15 clicks across one second of gameplay.
<br>The minimum rate of clicks per second must not exceed 20 in any stint of more than 3 clicks, and not 18 in any section longer than 1/3 of a second.
<br>In two-player mode levels, each individual player is limited to 15 clicks per second.
<br>
<br>

<color lime>ALTERNATE VERSIONS</color><br>
<br>If a level is made impossible by bugs or changes introduced in updates after the level is created (e.g. Silent Machine by Saria), the level can be added with an asterisk as long as it was physically possible in the update it was created in. 
<br>An asterisk will also be used if the only published or available copies of the level would need to be fixed to play normally (forced secret ways, auto versions, bugged copies).
<br>If a level is uploaded with the intent to be public by its creator and is later deleted, overwritten, or otherwise lost, accurate reuploads will be credited (e.g. Silent clubstep by TheRealSailent, uploaded by Compendium). Levels that are uploaded but do not fit this criteria (leaks) will not be credited.
<br>If a creator specifically wants their levels or versions of their levels to be excluded from the List, they will be removed and no archival copy will be credited.
<br>If a level is fixed to fit the rules of the list, it can be added and marked as uploaded by the person who fixed the level (e.g. Silent Circles 15 by TheRealSailent and Cyrillic, uploaded by 070).
<br>If the original level qualifies for historical significance exemptions, only one fix will also qualify.
<br>
<br>

<color lime>WORLD RECORDS</color><br>
<br>World records have a minimum progress percentage that decreases as the level’s placement increases.
<br>Levels 1-50 have a minimum requirement of 5%.
<br>Levels 51-75 have a minimum requirement of 10%.
<br>Levels 76-100 have a minimum requirement of 15%.
<br>Levels on the Extended List have a minimum requirement of 20%.	
<br>World records are counted in increments of 1%, and only the first player to attain a tied world record will be added to the List.
<br>World records must be attained legitimately by the standard of the Pointercrate Demonlist (guidelines here) to be accepted.
<br>There are no restrictions on what framerate can be used with the FPS Bypass.
<br>World records must closely follow the intended path, secret ways do not count.
<br>Verifications or first completions of a level count as world records.
</div>`,

  rulesESP:`<div arial>En desarrollo</div><br>`,
  
  creditsENG:`<div big gold>Credits</div><br><div arial>Programmer: <color lime>UnfunnyCreator</color></div>
  
  <div arial>Past 100s: <color lime>Knali2001</color> <a href="https://youtu.be/6MW5sdqrttk"><color blue >(see more)</color></a></div>
  
  <div arial>Impossible Levels List: <a href="https://docs.google.com/document/d/1TNNkuLVUE4kUv6bCnh-RuXroLky8yyL-HdWJoYNbRlI/edit"><color blue >here</color></a></div>
  `,
  creditsESP:`<div big gold>Credits</div><br><div arial>Programador: <color lime>UnfunnyCreator</color></div>
  
  <div arial>Past 100s: <color lime>Knali2001</color> <a href="https://youtu.be/6MW5sdqrttk"><color blue >(see more)</color></a></div>
  
  <div arial>Lista de Niveles Imposibles: <a href="https://docs.google.com/document/d/1TNNkuLVUE4kUv6bCnh-RuXroLky8yyL-HdWJoYNbRlI/edit"><color blue >aqui</color></a></div>
  `
  
},
info = {
  
  ratedENG:"This level is currently rated",
  unratedENG:"This level currently isn't rated",
  tPlayerENG:"This level is two player",
  lostENG:"This level has no known copies",
  recoveredENG:"This level was lost but has been recovered",
  unreleasedENG:"This level is yet to be released or has an update coming",
  
  ratedESP:"Este nivel es Calificado",
  unratedESP:"Este nivel no es Calificado",
  tPlayerESP:"Este nivel es dos jugadoras",
  lostESP:"Este nivel no tiene copias",
  recoveredESP:"Este nivel estaba perdido pero ha sido recuperado",
  unreleasedESP:"Este nivel no es lanzado o tiene una actualizacion proxima",
  
  ENG:"English",
  ESP:"Espanol",
  
  creditsENG:"Credits",
  creditsESP:"Creditos",
  rulesENG:"Rules",
  rulesESP:"Reglas",
  
  errENG:'<div level><div big>Oops something went wrong...</div><div big>Please try again</div></div>',
  errESP:'<div level><div big>Oops algo salio mal...</div><div big>Por favor intentar otra vez</div></div>',
  loadingENG:'<div level><div big>Loading...</div></div>',
  loadingESP:'<div level><div big>Cargando...</div></div>'
  
};



var Alist = [
  
  {
    
    nameENG:'Top 100',
    nameESP:'Top 100',
    metaname:'ILL',
    content:[
      
      {
    
        name:"Schafs II",
        byENG:"by Ewe23 and more",
        byESP:"de Ewe23 y mas",
        link:"https://youtu.be/6ExHe3MO6dE",
        id:'',
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          unreleased:true,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'Balistic Wistfully',
        byENG:"by Eightos and TomScott",
        byESP:"de Eightos y TomScott",
        link:'https://youtu.be/9TZpJamsnRU',
        id:68374588,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          face:'Insane'
      
        }
    
      },
      {
    
        name:"joke submission",
        byENG:"by maxfs and Uploaded by 043",
        byESP:"de maxfs y Subido por 043",
        link:"https://youtu.be/yMyZxSNTBJE",
        id:67854544,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'Wistfully',
        byENG:'by TheBasil and Uploaded by KrXyt',
        byESP:'de TheBasil y Subido por KrXyT',
        link:'https://youtu.be/hiZXsKmg6jU',
        id:70473532,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'MINUStheory',
        byENG:"by HaydenDom and more, Uploaded by 043",
        byESP:"de HaydenDom y mas, Subido por 043",
        link:'https://youtu.be/FWJZM2Hlr4k',
        id:68374588,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'mute evasion',
        byENG:'by ILoveOMORI',
        byESP:'de ILoveOMORI',
        link:'https://youtu.be/ghaw05XX4BQ',
        id:67453735,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          face:'Insane'
      
        }
    
      },
      { name: 'Singularity ',
    byENG: 'by 070 \n',
    byESP: 'de 070 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'arcturus ',
    byENG: 'by maxfs, Uploaded by Wuro  \n',
    byESP: 'de maxfs, Subido por Wuro  \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Silent Circles 15 ',
    byENG: 'by TheRealSailent and Cyrillic, Uploaded by 070 \n',
    byESP: 'de TheRealSailent y Cyrillic, Subido por 070 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'RAIN ',
    byENG: 'by Skyyee, Uploaded by 043\n',
    byESP: 'de Skyyee, Subido por 043\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'MINUSclub ',
    byENG: 'by xVOLUMNIUS \n',
    byESP: 'de xVOLUMNIUS \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'The Hell Heaven ',
    byENG: 'by maus999\n',
    byESP: 'de maus999\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silentium Excelsus ',
    byENG: 'by AuraXalaiv \n',
    byESP: 'de AuraXalaiv \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'PISS ',
    byENG: 'by AuraXalaiv and Glitchi [Unreleased]\n',
    byESP: 'de AuraXalaiv y Glitchi \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: true } },
  { name: 'Hyperphobia ',
    byENG: 'by 2A0L0I3 \n',
    byESP: 'de 2A0L0I3 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'lastheory ',
    byENG: 'by maxfs, Uploaded by Akyse \n',
    byESP: 'de maxfs, Subido por Akyse \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'The Squall ',
    byENG: 'by Pieguy57 and RezerdPrime \n',
    byESP: 'de Pieguy57 y RezerdPrime \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'OYMYAKON ',
    byENG: 'by TiO2 and more\n',
    byESP: 'de TiO2 y mas\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Rampant Circles ',
    byENG: 'by NXISE, Uploaded by TomScott \n',
    byESP: 'de NXISE, Subido por TomScott \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'The Hell Conjuror ',
    byENG: 'by eightos & maus999\n',
    byESP: 'de eightos & maus999\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Sad Santa ',
    byENG: 'by 070 \n',
    byESP: 'de 070 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Kingdom Of Miracalis ',
    byENG: 'by GDMiracle and more, Uploaded by KrXyt\n',
    byESP: 'de GDMiracle y mas, Subido por KrXyt\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Blood in the Water ',
    byENG: 'by Skyyee\n',
    byESP: 'de Skyyee\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'La magicienne Rose ',
    byENG: 'by Glitchi\n',
    byESP: 'de Glitchi\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Six Paths of Pain ',
    byENG: 'by 070 and more\n',
    byESP: 'de 070 y mas\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'sloom ',
    byENG: 'by HaydenDom and Knali2001\n',
    byESP: 'de HaydenDom y Knali2001\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Call of the A',
    byENG: 'byss by Skyyee \n',
    byESP: 'dess by Skyyee \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Silent Skrillex v2 ',
    byENG: 'by DokiDokiWakuWak and more \n',
    byESP: 'de DokiDokiWakuWak y mas \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Realm Of Bloodshadow ',
    byENG: 'by GDMiracle and PrototypeHipo \n',
    byESP: 'de GDMiracle y PrototypeHipo \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Radiation Pressure ',
    byENG: 'by Convindix, Uploaded by KrXyt\n',
    byESP: 'de Convindix, Subido por KrXyt\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'The Descended ',
    byENG: 'by BoomBlox555, Uploaded by TomScott \n',
    byESP: 'de BoomBlox555, Subido por TomScott \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Akarin ',
    byENG: 'by Wuro and TheBasil \n',
    byESP: 'de Wuro y TheBasil \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'brokenworld ',
    byENG: 'by 1450\n',
    byESP: 'de 1450\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Lucidia ',
    byENG: 'by AuraXalaiv and 2A0L0I3 \n',
    byESP: 'de AuraXalaiv y 2A0L0I3 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'N2c70ph0b14 ',
    byENG: 'by muriday\n',
    byESP: 'de muriday\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Nierenbaum ',
    byENG: 'by glitchi\n',
    byESP: 'de glitchi\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Deathwish ',
    byENG: 'by Youmoples and Knali2001, Uploaded by 070\n',
    byESP: 'de Youmoples y Knali2001, Subido por 070\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'nyctophilia ',
    byENG: 'by maxfs, Uploaded by Ewoks\n',
    byESP: 'de maxfs, Subido por Ewoks\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'hypothermia ',
    byENG: 'by maxfs, Uploaded by Wuro\n',
    byESP: 'de maxfs, Subido por Wuro\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'glacial ',
    byENG: 'by spkgmd \n',
    byESP: 'de spkgmd \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Silentium Mortem ',
    byENG: 'by muriday, Uploaded by Oktavian\n',
    byESP: 'de muriday, Subido por Oktavian\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'lobotomy ',
    byENG: 'by maxfs, Uploaded by Wuro\n',
    byESP: 'de maxfs, Subido por Wuro\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'thdantmulcs ',
    byENG: 'by orbperson\n',
    byESP: 'de orbperson\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Liquid Shuffles ',
    byENG: 'by Eightos \n',
    byESP: 'de Eightos \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Checkmate ',
    byENG: 'by Izofdoors\n',
    byESP: 'de Izofdoors\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'sailent clubstar ',
    byENG: 'by Nautilus2k\n',
    byESP: 'de Nautilus2k\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'ocular paracosm ',
    byENG: 'by Starz879 \n',
    byESP: 'de Starz879 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'The Burn ',
    byENG: 'by TheGreatBird\n',
    byESP: 'de TheGreatBird\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'SHIT ',
    byENG: 'by AuraXalaiv and Glitchi [Unreleased]\n',
    byESP: 'de AuraXalaiv y Glitchi \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: true } },
  { name: 'Monodia ',
    byENG: 'by Armadeus, Uploaded by Relayne\n',
    byESP: 'de Armadeus, Subido por Relayne\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'C ir cles X ',
    byENG: 'by Knali2001 Uploaded by 059 \n',
    byESP: 'de Knali2001 Subido por 059 \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Ripple ',
    byENG: 'by Eightos\n',
    byESP: 'de Eightos\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Limitation ',
    byENG: 'by ImVition \n',
    byESP: 'de ImVition \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'End of Time ',
    byENG: 'by Izofdoors\n',
    byESP: 'de Izofdoors\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Deadly Knock ',
    byENG: 'by danmaster007, Uploaded by TomScott \n',
    byESP: 'de danmaster007, Subido por TomScott \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Silent Clubstep ',
    byENG: 'by maus999\n',
    byESP: 'de maus999\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Empyrean ',
    byENG: 'by 070\n',
    byESP: 'de 070\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silent Circles II ',
    byENG: 'by Cyrillic and more, Uploaded by NotAsumeh\n',
    byESP: 'de Cyrillic y mas, Subido por NotAsumeh\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Grandpa Demon ',
    byENG: 'by Skyyee, Uploaded by Pieguy57\n',
    byESP: 'de Skyyee, Subido por Pieguy57\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Ultra Silent Circles ',
    byENG: 'by AsumehRocks and 1CicL3, Uploaded by PrototypeHipo\n',
    byESP: 'de AsumehRocks y 1CicL3, Subido por PrototypeHipo\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Monoxide copy ',
    byENG: 'by Izofdoors\n',
    byESP: 'de Izofdoors\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'koreastep ',
    byENG: 'by naggings\n',
    byESP: 'de naggings\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Viridian ',
    byENG: 'by NitronicBlitz\n',
    byESP: 'de NitronicBlitz\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Ascension ',
    byENG: 'by ILoveOMORI, Uploaded by xHipo\n',
    byESP: 'de ILoveOMORI, Subido por xHipo\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Partys Over ',
    byENG: 'by Glitchi\n',
    byESP: 'de Glitchi\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Cant Let Go ',
    byENG: 'by muriday, Uploaded by Oktavian\n',
    byESP: 'de muriday, Subido por Oktavian\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Conjury ',
    byENG: 'by Visionari, Uploaded by KrXyt\n',
    byESP: 'de Visionari, Subido por KrXyt\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silent Adventures ',
    byENG: 'by maus999\n',
    byESP: 'de maus999\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'DECAYED  ',
    byENG: 'by TiO2\n',
    byESP: 'de TiO2\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Free WR level ',
    byENG: 'by realhutoew \n',
    byESP: 'de realhutoew \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Deadly Silent Circles ',
    byENG: 'by nOeTuKa, Uploaded by AsumehRocks \n',
    byESP: 'de nOeTuKa, Subido por AsumehRocks \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Eruption ',
    byENG: 'by hurmichael, Uploaded by 10daemon26\nFPS: 288 WR: N/A\n',
    byESP: 'de hurmichael, Subido por 10daemon26\nFPS: 288 WR: N/A\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Crimson World ',
    byENG: 'by Cyrillic\n',
    byESP: 'de Cyrillic\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silent La',
    byENG: 'byrinth by nhauqq\n',
    byESP: 'derinth by nhauqq\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Doomed Circles ',
    byENG: 'by TexTim, Uploaded by TomScott\n',
    byESP: 'de TexTim, Subido por TomScott\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Alternation ',
    byENG: 'by AuraXalaiv\n',
    byESP: 'de AuraXalaiv\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Hearthstricken ',
    byENG: 'by BlackCarbonGD\n',
    byESP: 'de BlackCarbonGD\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'ultimate sonic wave ',
    byENG: 'by danmaster007, Uploaded by Fokuto \n',
    byESP: 'de danmaster007, Subido por Fokuto \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Sakupen Circles v2 p ',
    byENG: 'by danmaster007, Uploaded by TheUnknownBacon\n',
    byESP: 'de danmaster007, Subido por TheUnknownBacon\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'H3770 ',
    byENG: 'by glitchi\n',
    byESP: 'de glitchi\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Opprobre ',
    byENG: 'by TiO2 and Fokuto\n',
    byESP: 'de TiO2 y Fokuto\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Brain Atrophy ',
    byENG: 'by RezerdPrime\n',
    byESP: 'de RezerdPrime\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silent Skrillex ',
    byENG: 'by Diosselmusic, Uploaded by Armadeus\n',
    byESP: 'de Diosselmusic, Subido por Armadeus\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'semicolon ',
    byENG: 'by HaydenDom\n',
    byESP: 'de HaydenDom\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Sweet Dreamzzz ',
    byENG: 'by glitchi\n',
    byESP: 'de glitchi\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Soul Demolisher ',
    byENG: 'by KidJolly, Uploaded by kJang\n',
    byESP: 'de KidJolly, Subido por kJang\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Rainstorm ',
    byENG: 'by Relayne\n',
    byESP: 'de Relayne\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'if buff this was lvl 1 ',
    byENG: 'by Skyee \n',
    byESP: 'de Skyee \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Solid Clubstep ',
    byENG: 'by CryptiaN, Uploaded by Xane88\n',
    byESP: 'de CryptiaN, Subido por Xane88\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silent AcropoliX ',
    byENG: 'by danmaster007\n',
    byESP: 'de danmaster007\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Omminous Clouds ',
    byENG: 'by LunarOmega238, Uploaded by TomScott\n',
    byESP: 'de LunarOmega238, Subido por TomScott\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Time Gear ',
    byENG: 'by AuraXalaiv\n',
    byESP: 'de AuraXalaiv\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Silent Machine ',
    byENG: 'by Saria, Uploaded by Diym\n',
    byESP: 'de Saria, Subido por Diym\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Chaoz Realm ',
    byENG: 'by Nimki  [Unreleased]\n',
    byESP: 'de Nimki  \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: true } },
  { name: 'Old Death Corridor ',
    byENG: 'by KaotikJumper and more, Uploaded by RefractionZero \n',
    byESP: 'de KaotikJumper y mas, Subido por RefractionZero \n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: true, unreleased: false } },
  { name: 'Dream Eater ',
    byENG: 'by AuraXalaiv\n',
    byESP: 'de AuraXalaiv\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'The Hell Sorcerer ',
    byENG: 'by eightos\n',
    byESP: 'de eightos\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Sleep Paralysis ',
    byENG: 'by Laph, Uploaded by Relayne\n',
    byESP: 'de Laph, Subido por Relayne\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
  { name: 'Subsuming Vortex ',
    byENG: 'by 070\n',
    byESP: 'de 070\n',
    link: '',
    ratingENG: 'Not Rated',
    ratingESP: 'No Calificado',
    attributes: { tPlayer: false, unreleased: false } },
      {
        
        name:'Numb',
        byENG:'by HaydenDom',
        byESP: 'de HaydenDom',
        link:'https://youtu.be/QAMt1zZ6v80',
        id:67090966,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false
          
        }
        
      }
      
    ]
    
  },
  
  
  
  {
    
    nameENG:'Past Top 1s',
    nameESP:'Pasado Top 1s',
    metaname:'PT1',
    content:[
      
      {
    
        name:"Unnerfed Silent Club",
        byENG:"by Sailent and Re-uploaded by Compendium",
        byESP:"de Sailent y Recargado por Compendium",
        link:"https://youtu.be/AzFWIryvAyo",
        id:38692301,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:false,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'Silent Acropolis',
        byENG:"by or Uploaded by danmaster007",
        byESP:"de o Subido danmaster007",
        link:'https://youtu.be/mezwJTZ0Sy4',
        id:13918016,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:false,
          face:'Insane'
      
        }
    
      },
      {
    
        name:"Subsuming Vortex",
        byENG:"by 070",
        byESP:"de 070",
        link:"https://youtu.be/gG8K_d3rg4w",
        id:66422816,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:false,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'Silent Machine',
        byENG:'by Saria',
        byESP:'de Saria',
        link:'https://youtu.be/bZYLfIb6raM',
        id:64403216,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:false,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'Silent Clubstep II',
        byENG:"by CalamityGD",
        byESP:"de CalamityGD",
        link:'https://youtu.be/FWJZM2Hlr4k',
        id:32460070,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:false,
          face:'Insane'
      
        }
    
      },
      {
    
        name:'Nerfed Silent Circles',
        byENG:'by Sailent and Cyrillic',
        byESP:'de Sailent y Cyrillic',
        link:'',
        id:33337988,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:false,
          face:'Insane'
      
        }
    
      },
      {
        
        name:'Crimson World',
        byENG:'by Cyrillic',
        byESP:'de Cyrrilic',
        link:'https://youtu.be/i-KpoYEbBRQ',
        id:8038902,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false,
          face:'Insane'
          
        }
        
      },
      {
        
        name:'Empyrean',
        byENG:'by 070',
        byESP:'de 070',
        link:'https://youtu.be/9qthRTv5BFI',
        id:66423298,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false,
          face:'Insane'
          
        }
        
      },
      {
        
        name:'Ice Carbon Destiny',
        byENG:'by Chicharito52',
        byESP:'de Chicharito52',
        link:'https://youtu.be/K1GEmVmW7vk',
        id:30283725,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false,
          face:'Insane'
          
        }
        
      },
      {
        
        name:'Monodia',
        byENG:'by Armadeus',
        byESP:'de Armadeus',
        link:'',
        id:57262123,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false,
          face:'Insane'
          
        }
        
      },
      {
        
        name:'MinusClub (Old)',
        byENG:'by xVolumnius',
        byESP:'de xVolumnius',
        link:'https://youtu.be/ufFjTOu6KC4',
        id:'',
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:true,
          lost:true
          
        }
        
      },
      {
        
        name:'Realm of Bloodshadow',
        byENG:'by GDMiracle and Armadeus',
        byESP:'de GDMiracle and Armadeus',
        link:'',
        id:63147223,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false
          
        }
        
      },
      {
        
        name:'MinusCLUB (KrX)',
        byENG:'by xVolumnius and KrX',
        byESP:'de xVolumnius y KrX',
        link:'',
        id:'',
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:true
          
        }
        
      },
      {
        
        name:'Kingdom of Miracalis',
        byENG:'by GDMiracle, KrX and Armadeus',
        byESP:'de GDMiracle, KrX and Armadeus',
        link:'',
        id:64171513,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false
          
        }
        
      },
      {
        
        name:'Onosecond',
        byENG:'by RefractionZero',
        byESP:'de RefractionZero',
        link:'',
        id:65112672,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false
          
        }
        
      },
      {
        
        name:'Nanosecond',
        byENG:'by ElliotIdk',
        byESP:'de ElliotIdk',
        link:'',
        id:65116209,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:false
          
        }
        
      },
      {
        
        name:'MinusCLUB (New)',
        byENG:'by xVolumnius',
        byESP:'de xVolumnius',
        link:'',
        id:65475277,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:true
          
        }
        
      },
      {
        
        name:'Silent Circles 15',
        byENG:'by 070',
        byESP:'de 070',
        link:'https://youtu.be/9c8gvURqgEM',
        id:66634469,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:true
          
        }
        
      },
      {
        
        name:'Wistfully (KrX Fix)',
        byENG:'by xViola',
        byESP:'de xViola',
        link:'',
        id:66634469,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:true
          
        }
        
      },
      { 
      
        name: 'Singularity ',
        byENG: 'by 070 \n',
        byESP: 'de 070 \n',
        link: '',
        ratingENG: 'Not Rated',
        ratingESP: 'No Calificado',
        attributes: {
        
          tPlayer: true, 
          unreleased: false 
          
        } 
        
      },
      {
        
        name:'Wistfully (Hipo Fix)',
        byENG:'by xViola',
        byESP:'de xViola',
        link:'',
        id:67168935,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
          
          tPlayer:true
          
        }
        
      },
      {
    
        name:'Balistic Wistfully',
        byENG:"by Eightos and TomScott",
        byESP:"de Eightos y TomScott",
        link:'https://youtu.be/9TZpJamsnRU',
        id:68374588,
        ratingENG:'Not Rated',
        ratingESP:'No Calificado',
        attributes:{
      
          tPlayer:true,
          face:'Insane'
      
        }
    
      },
      
    ]
    
  }
  
];
