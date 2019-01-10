//Script sur toutes les pages----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Affiche effets de fumé sur l'image principale////////////////////////////////////////////////////////////////////////////////////////////////////////
// variable pour le navigateur de l'utilisateur
var isChrome = false;
var isSafari = false;
var isOpera = false;
	
// variables used in init()
var scene, camera, renderer, clock;

// Used in initParticles()
var emitter, particleGroup;

// Setup the scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 10000);	
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( window.innerWidth-17,window.innerHeight);/*1903x1080*/
    renderer.setClearColor(0x96a6aa,0);//0xffffff
    clock = new THREE.Clock();
    scene.fog = new THREE.Fog( renderer.getClearColor(), 10, 10 );
	document.getElementById("bann").appendChild(renderer.domElement);
	renderer.domElement.style.display="none";
	
}

// Create particle group and emitter
function initParticles() {
    particleGroup = new SPE.Group({
        texture: {
            value: THREE.ImageUtils.loadTexture('images/background/cloud.png')
        },
        blending: THREE.NormalBlending,
        fog: true
    });

    emitter = new SPE.Emitter({
        particleCount: 750,
        maxAge: {
            value: 3,
        },
        position: {
            value: new THREE.Vector3( 0, 2, 2 ),
            spread: new THREE.Vector3( 300,50, 100)
        },
        velocity: {
            value: new THREE.Vector3(6,0,0 )
        },
        wiggle: {
            spread: 10
        },
        size: {
            value: 75,
            spread: 50
        },
        opacity: {
            value: [ 0, 0.7, 0 ]
        },
        color: {
            value: new THREE.Color( 1, 1, 1 ),
            spread: new THREE.Color( 0.1, 0.1, 0.1 )
        },
        angle: {
            value: [ 0, Math.PI * 0.125 ]
        }
    });

    particleGroup.addEmitter( emitter );
    scene.add( particleGroup.mesh );
}

function animate() {
	renderer.domElement.style.display="block";
	renderer.domElement.style.position="absolute";
	renderer.domElement.style.top="0px";
    requestAnimationFrame( animate );
    render( clock.getDelta() );
    
}

function render( dt ) {
    particleGroup.tick( dt );
    renderer.render( scene, camera );
}

window.addEventListener( 'resize', function() {
    var w = window.innerWidth,
        h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize( w -17, h );
}, false );


function detectNav(){
	// Opera 8.0+
	isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;

	// Chrome 1+
	isChrome = !!window.chrome && !!window.chrome.webstore;
}
			
function smoke(){
	detectNav();
	if (isChrome == false && isSafari == false && isOpera == false ){
		init();
        initParticles();
        setTimeout(animate,5000); 
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Script sur accueil-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function afficheText(id){
	document.getElementById(id).style.display = "block";
	document.getElementById(id).style.animation ="animBlock 2s";	
	document.getElementById(id).style.WebkitAnimation ="animBlock 2s";
	document.getElementById(id).style.MozAnimation ="animBlock 2s";
	document.getElementById(id).style.OAnimation ="animBlock 2s";
}																																					 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//Script page classes------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Style du block par défaut///////////////////////////////////////////////////////////////////////////////////////////////////////
function razBlock(id){
	document.getElementById(id).style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Affichage d'un texte avec l'image du personnage choisis//////////////////////////////////////////////////////////////////////////////
function descr(imgClass,triangleClass,idChoisi,triangleChoisi,blockClass){
	
	var i;
	var img = document.getElementsByClassName(imgClass);
	var triangle = document.getElementsByClassName(triangleClass);
	var block = document.getElementsByClassName(blockClass);

	for (i = 0; i < img.length; i++) {
		triangle[i].style.display = "none";
		img[i].style.display = "none";	
	}
	
	for (i = 0; i < block.length; i++) {
		block[i].style.display = "block";
		block[i].style.background = "rgba(255, 255, 255, 0.4)";/* Opacité avec du noir*/
		block[i].style.animation ="anim 2s";
		block[i].style.WebkitAnimation  ="anim 2s";
		block[i].style.MozAnimation ="anim 2s";
		block[i].style.OAnimation ="anim 2s";
	}
	
	document.getElementById(idChoisi).style.float = "left";
	document.getElementById(idChoisi).style.display = "block";
	document.getElementById(idChoisi).style.marginTop = "1%";
	document.getElementById(idChoisi).style.animation ="animPerso 1s";
	document.getElementById(idChoisi).style.WebkitAnimation ="animPerso 1s";
	document.getElementById(idChoisi).style.MozAnimation ="animPerso 1s";
	document.getElementById(idChoisi).style.OAnimation ="animPerso 1s";

	if (idChoisi == 'img1'){
		textFleau();
	}
	if (idChoisi == 'img2'){
		textEmissaire();
	}
	if (idChoisi == 'img3'){
		textPaladin();
	}		
	if (idChoisi == 'img4'){
		textSentinelle();
	}	
	if (idChoisi == 'img5'){
		textOrochi();
	}
	
	if (idChoisi == 'img6'){
		textNobushi();
	}
	
	if (idChoisi == 'img7'){
		textShugoki();
	}	
	
	if (idChoisi == 'img8'){
		textKensei();
	}
	
	if (idChoisi == 'img9'){
		textJarl();
	}
	
	if (idChoisi == 'img10'){
		textValkyrie();
	}
	
	if (idChoisi == 'img11'){
		textBerserker();
	}	
	
	if (idChoisi == 'img12'){
		textHersir();
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Texte chevalier
function textFleau(){
	razBlock('blockTexteS');
	razBlock('blockTexteV');
	document.getElementById('blockTexteC').style.marginLeft = "auto";
	document.getElementById('titre1').innerHTML = "Le fléau";
	document.getElementById('texteAjoutC').innerHTML = "Les Fléaux sont d'anciens prisonniers et autres conscrits qui ont atteint le rang de soldat d'élite. Ceux qui survivent à leur service d'ost au titre de chair à canon sont promus et reçoivent une intense formation d'infanterie. Ce sont des guerriers en armure lourde qui privilégient la défense et manient un fléau pesant pour éliminer leurs ennemis à l'usure.";
	document.getElementById('texteAjout2C').innerHTML = "Partis du tout-venant pour atteindre ce rôle prestigieux dans les forces des Chevaliers, les Fléaux ont gagné le respect de leurs frères à force de détermination et de vaillance. Ces combattants en armure lourde doivent leur nom à l'arme qu'ils manient : le fléau. Ils déstabilisent et terrassent leurs adversaires grâce à de nombreuses capacités défensives et une infinité d'attaques.";
	document.getElementById('list1C').innerHTML = "Difficulté : moyenne";
	document.getElementById('list2C').innerHTML = "Combattant de type défensif";
	document.getElementById('list3C').innerHTML = "Mode défensif avec parades automatiques";
	document.getElementById('list4C').innerHTML = "Une parade standard interrompt les attaques";
	document.getElementById('list5C').innerHTML = "Mode défensif très efficace";
	document.getElementById('list6C').innerHTML = "Attaques de bouclier imparables";
	document.getElementById('triC').style.transform = "translateY(249%)";
	document.getElementById('triC').style.msTransform = "translateY(249%)";/* IE 9 */
	document.getElementById('triC').style.WebkitTransform = "translateY(249%)";/* Safari*/
	document.getElementsByClassName('ADroite')[0].style.width="40%";
	document.getElementsByClassName('AGauche')[0].style.width="40%";
	document.getElementsByClassName('listeClasse')[0].style.marginLeft="31%";
	document.getElementsByClassName('triangleRetour')[0].style.marginTop="2.15%";
}
function textEmissaire(){
	razBlock('blockTexteS');
	razBlock('blockTexteV');
	document.getElementById('titre1').innerHTML = "L'émissaire";
	document.getElementById('texteAjoutC').innerHTML = "Là où l'ordre s'effondre. Là où la cruauté et l'anarchie règnent. Les Émissaires représentent la justice. Ils sont envoyés là où règne la désolation. Et ils sont entraînés. Il n’y a pas meilleure armure que la leur. Sa fabrication est gardée secrète par leur ordre. Et leur hache de guerre est une des armes les plus polyvalentes de l’Histoire.";
	document.getElementById('texteAjout2C').innerHTML = "Priez pour ne pas avoir besoin d'eux. Et quand ils arrivent, priez pour ne pas avoir fauté. L'Émissaire allie les points forts d'un Tank et d'un Gardien : il est à la fois puissant et particulièrement redoutable en contre-attaque.";
	document.getElementById('list1C').innerHTML = "Difficulté : difficile";
	document.getElementById('list2C').innerHTML = "Excellent contre-attaquant";
	document.getElementById('list3C').innerHTML = "Capacités d’étourdissement";
	document.getElementById('list4C').innerHTML = "Coups difficiles à anticiper";
	document.getElementById('list5C').innerHTML = "Bonne défense";
	document.getElementById('list6C').innerHTML = "Lent mais puissant";
	document.getElementById('blockTexteC').style.marginLeft = "auto";
	document.getElementById('triC').style.transform = "translateY(269.5%)";
	document.getElementById('triC').style.msTransform = "translateY(269.5%)";/* IE 9 */
	document.getElementById('triC').style.WebkitTransform = "translateY(269.5%)";/* Safari*/
	document.getElementsByClassName('ADroite')[0].style.width="38.5%";
	document.getElementsByClassName('AGauche')[0].style.width="38.5%";
	document.getElementsByClassName('listeClasse')[0].style.marginLeft="32%";
	document.getElementsByClassName('triangleRetour')[0].style.marginTop="1.95%";
	
}
function textPaladin(){
	razBlock('blockTexteS');
	razBlock('blockTexteV');
	document.getElementById('titre1').innerHTML = "Le paladin";
	document.getElementById('texteAjoutC').innerHTML = "Vifs et mortels, les Paladins peuvent gagner une bataille sans que l'ennemi ne soupçonne leur présence. Rares sont les guerriers capables de se fondre ainsi dans l'ombre pour frapper en silence. Ceux-là n'ont que faire de la gloire : ils sont les instruments de la mort, qu'elle manie pour infléchir le cours des guerres.";
	document.getElementById('texteAjout2C').innerHTML = "Même ceux qui jamais ne croiseront leur route auront vent de leurs exploits macabres. Le Paladin est rapide, agile et mortel. Sa dague inflige des saignements à ses adversaires, mais manque de portée. Profitez de son agilité pour contrer l'ennemi ou vous replier en lieu sûr.";
	document.getElementById('list1C').innerHTML = "Difficulté : intermédiaire";
	document.getElementById('list2C').innerHTML = "Spécialiste de la contre-attaque";
	document.getElementById('list3C').innerHTML = "Courte portée mais grande agilité";
	document.getElementById('list4C').innerHTML = "Attaques très rapides";
	document.getElementById('list5C').innerHTML = "Effet de feinte ou dégât de saignement";
	document.getElementById('list6C').innerHTML = "Peut dévier les coups";
	document.getElementById('blockTexteC').style.marginLeft = "auto";
	document.getElementById('triC').style.transform = "translateY(269.5%)";
	document.getElementById('triC').style.msTransform = "translateY(269.5%)";/* IE 9 */
	document.getElementById('triC').style.WebkitTransform = "translateY(269.5%)";/* Safari*/
	document.getElementsByClassName('ADroite')[0].style.width="40%";
	document.getElementsByClassName('AGauche')[0].style.width="40%";
	document.getElementsByClassName('listeClasse')[0].style.marginLeft="33%";
	document.getElementsByClassName('triangleRetour')[0].style.marginTop="1.95%";
}
function textSentinelle(){
	razBlock('blockTexteS');
	razBlock('blockTexteV');
	document.getElementById('titre1').innerHTML = "La sentinelle";
	document.getElementById('texteAjoutC').innerHTML = "La Sentinelle est un guerrier noble et puissant qui a voué sa vie à défendre sa terre et son peuple. Redoutable en attaque comme en défense, il porte une armure de plates partielle avec cotte de mailles et cuir. La Sentinelle manie une lourde épée longue à deux mains qui lui permet à la fois d'attaquer et de parer. Non content d'être un combattant redoutable, c'est aussi un diplomate consommé qui incarne l'idéal chevaleresque. ";
	document.getElementById('texteAjout2C').innerHTML = "Les candidats sont nombreux, mais bien peu y parviennent. Très polyvalent, il est de tous les combats et manie une impressionnante épée longue. Son équilibre entre attaque et défense en fait une classe facile à jouer, idéale pour les débutants de par ses nombreuses capacités de base.";
	document.getElementById('list1C').innerHTML = "Difficulté : facile";
	document.getElementById('list2C').innerHTML = "Combattant polyvalent";
	document.getElementById('list3C').innerHTML = "Facile à manier";
	document.getElementById('list4C').innerHTML = "Coup d'épaule imparable";
	document.getElementById('list5C').innerHTML = "Projections redoutables";
	document.getElementById('list6C').innerHTML = "Interruptions puissantes";
	document.getElementById('blockTexteC').style.marginLeft = "auto";
	document.getElementById('triC').style.transform = "translateY(249%)";
	document.getElementById('triC').style.msTransform = "translateY(249%)";/* IE 9 */
	document.getElementById('triC').style.WebkitTransform = "translateY(249%)";/* Safari*/
	document.getElementsByClassName('ADroite')[0].style.width="38.2%";
	document.getElementsByClassName('AGauche')[0].style.width="38.2%";
	document.getElementsByClassName('listeClasse')[0].style.marginLeft="33%";
	document.getElementsByClassName('triangleRetour')[0].style.marginTop="1.05%";
}
//

//Texte samouraïs
function textOrochi(){
	razBlock('blockTexteC');
	razBlock('blockTexteV');
	document.getElementById('titre2').innerHTML = "L'orochi";
	document.getElementById('texteAjoutS').innerHTML = "Les Orochi sont les assassins impériaux des Samouraïs. Ils écument le champ de bataille comme des fantômes, répandant la terreur et la mort chez ceux qui ont le malheur de croiser leur chemin. Misant plus sur leur maîtrise de la furtivité et du subterfuge que sur leur armure, forcément légère, ils éliminent leurs ennemis à coups de katana, d'armes de jet ou encore de poison : ";
	document.getElementById('texteAjout2S').innerHTML = "l'Orochi connaît en effet d'innombrables moyens de tuer, car sa loyauté à toute épreuve en fait le dépositaire des plus sombres secrets de son clan. L'Orochi est un Samouraï très agile, muni d'un katana. Ses capacités mêlent efficacement harcèlement et contre-attaque, mais il nécessite beaucoup de finesse et de timing pour maîtriser sa défense.";
	document.getElementById('list1S').innerHTML = "Difficulté : difficile";
	document.getElementById('list2S').innerHTML = "Combattant de type assassin";
	document.getElementById('list3S').innerHTML = "Spécialiste de la contre-attaque";
	document.getElementById('list4S').innerHTML = "Attaques faibles très rapides";
	document.getElementById('list5S').innerHTML = "Attaques rapides après esquive";
	document.getElementById('list6S').innerHTML = "Peut dévier les coups";
	document.getElementById('blockTexteS').style.marginLeft = "auto";	
	document.getElementById('triS').style.transform = "translateY(228%)";
	document.getElementById('triS').style.msTransform = "translateY(228%)";/* IE 9 */
	document.getElementById('triS').style.WebkitTransform = "translateY(228%)";/* Safari*/
	document.getElementsByClassName('ADroite')[1].style.width="40%";
	document.getElementsByClassName('AGauche')[1].style.width="40%";
	document.getElementsByClassName('listeClasse')[1].style.marginLeft="32.5%";
	document.getElementsByClassName('triangleRetour')[1].style.marginTop="3.52%";	
}
function textNobushi(){
	razBlock('blockTexteC');
	razBlock('blockTexteV');
	document.getElementById('titre2').innerHTML = "Le nobushi";
	document.getElementById('texteAjoutS').innerHTML = "Les villages à l'extérieur de nos remparts ont besoin d'être protégés. Mais comment défendre le peuple s'il reste si peu de Samouraïs dans nos armées ? Les Nobushi, combattantes élégantes et agressives équipées de l'armure la plus légère qui soit et de l'arme la plus incroyable : le naginata. Elles ne semblent pas être faites pour le combat.";
	document.getElementById('texteAjout2S').innerHTML = "Mais, leur apparence est trompeuse. Elles maintiennent nos terres en sécurité. Et nous ne savons même pas qui elles sont. La Nobushi est un personnage de zone : elle tente de rester à distance tout en harcelant en permanence ses assaillants.";
	document.getElementById('list1S').innerHTML = "Difficulté : difficile";
	document.getElementById('list2S').innerHTML = "Spécialiste du contrôle de zone";
	document.getElementById('list3S').innerHTML = "Portée maximale";
	document.getElementById('list4S').innerHTML = "Réanimation rapide";
	document.getElementById('list5S').innerHTML = "Nombreuses Aptitudes de support";
	document.getElementById('list6S').innerHTML = "Combattant à distance";
	document.getElementById('blockTexteS').style.marginLeft = "auto";
	document.getElementById('triS').style.transform = "translateY(249%)";
	document.getElementById('triS').style.msTransform = "translateY(249%)";/* IE 9 */
	document.getElementById('triS').style.WebkitTransform = "translateY(249%)";/* Safari*/
	document.getElementsByClassName('ADroite')[1].style.width="38.5%";
	document.getElementsByClassName('AGauche')[1].style.width="38.5%";
	document.getElementsByClassName('listeClasse')[1].style.marginLeft="32%";
	document.getElementsByClassName('triangleRetour')[1].style.marginTop="2.2%";
}
function textShugoki(){
	razBlock('blockTexteC');
	razBlock('blockTexteV');
	document.getElementById('titre2').innerHTML = "Le shugoki";
	document.getElementById('texteAjoutS').innerHTML = "Ne vous laissez pas induire en erreur par son aspect lent et pesant : le Shugoki possède la force d'un démon et une volonté de fer. Ceux qui se veulent les gardiens de leur peuple doivent faire montre d'un courage exemplaire et savoir placer coûte que coûte les besoins d'autrui avant les leurs. Voilà qui n'a jamais posé problème aux Shugoki. Leur arme de prédilection paraît encombrante, mais ils savent lui imprimer la même précision qu'à la première lame venue.";
	document.getElementById('texteAjout2S').innerHTML = "Le Shugoki est un tank spécialisé dans l'interruption. Il peut encaisser un grand nombre de coups grâce à sa santé élevée ainsi qu'à sa Posture non interruptible qui lui donne un peu plus de marge de manœuvre en attaque. Son gigantesque kanabo lui permet de tenir des groupes entiers en respect, mais il est très lent dans ses déplacements comme dans ses attaques.";
	document.getElementById('list1S').innerHTML = "Difficulté : facile";
	document.getElementById('list2S').innerHTML = "Étourdissant";
	document.getElementById('list3S').innerHTML = "Coups puissants";
	document.getElementById('list4S').innerHTML = "Posture non interruptible";
	document.getElementById('list5S').innerHTML = "Attaques puissantes à charge";
	document.getElementById('list6S').innerHTML = "Attaques faibles non interruptibles";
	document.getElementById('blockTexteS').style.marginLeft = "auto";
	document.getElementById('triS').style.transform = "translateY(228.2%)";
	document.getElementById('triS').style.msTransform = "translateY(228.2%)";/* IE 9 */
	document.getElementById('triS').style.WebkitTransform = "translateY(228.2%)";/* Safari*/
	document.getElementsByClassName('ADroite')[1].style.width="40%";
	document.getElementsByClassName('AGauche')[1].style.width="40%";
	document.getElementsByClassName('listeClasse')[1].style.marginLeft="35%";
	document.getElementsByClassName('triangleRetour')[1].style.marginTop="2.35%";
}
function textKensei(){
	razBlock('blockTexteC');
	razBlock('blockTexteV');
	document.getElementById('titre2').innerHTML = "Le kensei";
	document.getElementById('texteAjoutS').innerHTML = "Le Kensei incarne – autant que faire se peut – le Bushido, le code moral des Samouraïs. Maître de nombreux arts martiaux, il est conditionné dès son plus jeune âge à se battre et à mourir pour son empereur ou son frère d'armes. Le Kensei porte une armure lourde et manie le nodachi, une version longue du katana capable de trancher l'ennemi de quelques coups aussi élégants que mortels.";
	document.getElementById('texteAjout2S').innerHTML = " Il passe sa vie à se battre et à s'entraîner pour atteindre un niveau de perfection que bien peu peuvent espérer égaler. Le Kensei est un Samouraï équilibré, armé d'un nodachi. Il est plus lent que les autres unités mais dispose d'une portée plus importante. À son intéressante palette de possibilités défensives s'ajoutent des attaques dévastatrices.";
	document.getElementById('list1S').innerHTML = "Difficulté : moyenne";
	document.getElementById('list2S').innerHTML = "Combattant polyvalent";
	document.getElementById('list3S').innerHTML = "Bonne portée de corps à corps";
	document.getElementById('list4S').innerHTML = "Les attaques hautes fortes sont imparables";
	document.getElementById('list5S').innerHTML = "Beaucoup de manœuvres";
	document.getElementById('list6S').innerHTML = "Attaques débouchent sur des enchaînements";
	document.getElementById('blockTexteS').style.marginLeft = "auto";
	document.getElementById('triS').style.transform = "translateY(228%)";
	document.getElementById('triS').style.msTransform = "translateY(228%)";/* IE 9 */
	document.getElementById('triS').style.WebkitTransform = "translateY(228%)";/* Safari*/
	document.getElementsByClassName('ADroite')[1].style.width="38.2%";
	document.getElementsByClassName('AGauche')[1].style.width="38.2%";
	document.getElementsByClassName('listeClasse')[1].style.marginLeft="30%";
	document.getElementsByClassName('triangleRetour')[1].style.marginTop="3.55%";
}
//

//Texte vikings

function textJarl(){
	razBlock('blockTexteC');
	razBlock('blockTexteS');
	document.getElementById('titre3').innerHTML = "Le jarl";
	document.getElementById('texteAjoutV').innerHTML = "C'est une chose que de naître fils de Jarl, une autre que de mériter ce titre par le sang, la sueur et l'acier. Être Jarl, c'est passer sa vie au service de son peuple, occire de son épée ceux qui veulent lui nuire, protéger de son bouclier ceux qui ne peuvent pas se battre. Leur style de combat, simple mais brutal, les propulse toujours au premier rang des hostilités.";
	document.getElementById('texteAjout2V').innerHTML = "Lent et robuste, le Jarl est un contre-attaquant qui frappe fort et peut encaisser de lourds dégâts. Ses coups ont une portée limitée, mais ils disposent de propriétés défensives idéales pour contrer les attaques adverses, quitte à les encaisser pour prendre l'avantage.";
	document.getElementById('list1V').innerHTML = "Difficulté : intermédiaire";
	document.getElementById('list2V').innerHTML = "Spécialiste de la contre-attaque";
	document.getElementById('list3V').innerHTML = "Courte portée";
	document.getElementById('list4V').innerHTML = "Attaques faibles et puissantes";
	document.getElementById('list5V').innerHTML = "Mode défensif";
	document.getElementById('list6V').innerHTML = "Coup de tête imblocable";
	document.getElementById('blockTexteV').style.marginLeft = "auto";
	document.getElementById('triV').style.transform = "translateY(249%)";
	document.getElementById('triV').style.msTransform = "translateY(249%)";/* IE 9 */
	document.getElementById('triV').style.WebkitTransform = "translateY(249%)";/* Safari*/
	document.getElementsByClassName('ADroite')[2].style.width="40%";
	document.getElementsByClassName('AGauche')[2].style.width="40%";
	document.getElementsByClassName('listeClasse')[2].style.marginLeft="33%";
	document.getElementsByClassName('triangleRetour')[2].style.marginTop="3.32%";
}
function textValkyrie(){
	razBlock('blockTexteC');
	razBlock('blockTexteS');
	document.getElementById('titre3').innerHTML = "La Valkyrie";
	document.getElementById('texteAjoutV').innerHTML = "Le Valhalla. Notre récompense pour être mort au combat. Mais qu'en est-il de ceux qui meurent ailleurs ? Les Valkyries. Un ordre de guerrières qui a fait un pacte avec les dieux. Chaque Valkyrie peut accéder à la gloire qui attend chaque Viking tombé au combat. Et en temps voulu, accorder une place aux plus méritants. Mais elles seules décident pour qui se battre. ";
	document.getElementById('texteAjout2V').innerHTML = "Ce sont des spécialistes de la lance et du bouclier. Des éclaireuses efficaces. Et, peut-être, votre seul espoir de délivrance. La Valkyrie est une héroïne riche et complexe, très polyvalente et idéale pour prendre l'ennemi à contre-pied.";
	document.getElementById('list1V').innerHTML = "Difficulté : moyenne";
	document.getElementById('list2V').innerHTML = "Maintient ses adversaires à distance";
	document.getElementById('list3V').innerHTML = "Combos complexes";
	document.getElementById('list4V').innerHTML = "Excelle dans les mises à terre";
	document.getElementById('list5V').innerHTML = "Peut attaquer avec son bouclier";
	document.getElementById('list6V').innerHTML = "Prends l'ennemi à revers";
	document.getElementById('blockTexteV').style.marginLeft = "auto";
	document.getElementById('triV').style.transform = "translateY(249%)";
	document.getElementById('triV').style.msTransform = "translateY(249%)";/* IE 9 */
	document.getElementById('triV').style.WebkitTransform = "translateY(249%)";/* Safari*/
	document.getElementsByClassName('ADroite')[2].style.width="38.5%";
	document.getElementsByClassName('AGauche')[2].style.width="38.5%";
	document.getElementsByClassName('listeClasse')[2].style.marginLeft="30%";
	document.getElementsByClassName('triangleRetour')[2].style.marginTop="2.2%";
}
function textBerserker(){
	razBlock('blockTexteC');
	razBlock('blockTexteS');
	document.getElementById('titre3').innerHTML = "Le berserker";
	document.getElementById('texteAjoutV').innerHTML = "Le Berserker est un Viking chaotique et brutal muni de deux haches. Son amour inconditionnel du combat en terrifie plus d'un, alliés comme ennemis. Il noie l'adversaire sous une pluie d'attaques sans lui laisser le temps de monter une défense digne de ce nom. Il se lance à corps perdu dans la bataille, au mépris de sa défense.";
	document.getElementById('texteAjout2V').innerHTML = "Seul compte son tableau de chasse. Le Berserker est une impressionnante machine à tuer viking. Il conjugue des capacités de harcèlement à courte portée et des enchaînements d'attaques infinis qu'il peut entamer de nombreuses façons différentes.";
	document.getElementById('list1V').innerHTML = "Difficulté : difficile";
	document.getElementById('list2V').innerHTML = "Combattant de type harcèlement";
	document.getElementById('list3V').innerHTML = "Attaques rapides à courte portée";
	document.getElementById('list4V').innerHTML = "Peut frapper plusieurs cibles en ligne";
	document.getElementById('list5V').innerHTML = "Charges pour harceler l'adversaire";
	document.getElementById('list6V').innerHTML = "Peut dévier les coups";
	document.getElementById('blockTexteV').style.marginLeft = "auto";
	document.getElementById('triV').style.transform = "translateY(269.5%)";
	document.getElementById('triV').style.msTransform = "translateY(269.5%)";/* IE 9 */
	document.getElementById('triV').style.WebkitTransform = "translateY(269.5%)";/* Safari*/
	document.getElementsByClassName('ADroite')[2].style.width="40%";
	document.getElementsByClassName('AGauche')[2].style.width="40%";
	document.getElementsByClassName('listeClasse')[2].style.marginLeft="33%";
	document.getElementsByClassName('triangleRetour')[2].style.marginTop="1.95%";
}
function textHersir(){
	razBlock('blockTexteC');
	razBlock('blockTexteS');
	document.getElementById('titre3').innerHTML = "Le hersir";
	document.getElementById('texteAjoutV').innerHTML = "Combattant avec de lourdes haches à deux mains, les hersirs se retrouvent toujours en première ligne de la horde Viking et découpent tous les ennemis suffisamment fous pour se mettre en travers de leur route. Ils sont vêtus de cuirs et d’anneaux de fer et arborent fièrement les tatouages recouvrant leur corps, en souvenir d’anciennes batailles. Ces guerriers redoutables incarnent l’idéal des vrais guerriers Vikings : immense bravoure, intégrité sans faille et passion démesurée.";
	document.getElementById('texteAjout2V').innerHTML = "Ils savent que l’heure de leur mort est déjà fixée à la naissance, ainsi, aucun Viking n’a peur de suivre sa destinée. Bien sûr, tous comptent emporter avec eux le plus d’ennemis possible. Archétype du guerrier viking, le Hersir charge au combat en brandissant une imposante hache danoise capable d'incapaciter ses ennemis et d'infliger de lourds dégâts.";
	document.getElementById('list1V').innerHTML = "Difficulté : facile";
	document.getElementById('list2V').innerHTML = "Combattant incapacitant";
	document.getElementById('list3V').innerHTML = "Attaques à dégâts élevés";
	document.getElementById('list4V').innerHTML = "Attaque de zone impossible à parer";
	document.getElementById('list5V').innerHTML = "Attaques étourdissantes et projections";
	document.getElementById('list6V').innerHTML = "Projections puissantes et polyvalentes";
	document.getElementById('blockTexteV').style.marginLeft = "auto";
	document.getElementById('triV').style.transform = "translateY(207%)";
	document.getElementById('triV').style.msTransform = "translateY(207%)";/* IE 9 */
	document.getElementById('triV').style.WebkitTransform = "translateY(207%)";/* Safari*/
	document.getElementsByClassName('ADroite')[2].style.width="38%";
	document.getElementsByClassName('AGauche')[2].style.width="38%";
	document.getElementsByClassName('listeClasse')[2].style.marginLeft="30%";
	document.getElementsByClassName('triangleRetour')[2].style.marginTop="3.78%";
}

//Les personnages à côte de celui qui est choisi ont leur opacité réduis///////////////////////////////////////////////////////////////////////////////////////////////////////////
function choixPerso(imgClass,idChoisi){
	var i;
	var img = document.getElementsByClassName(imgClass);
	for (i = 0; i < img.length; i++) {
		img[i].style.opacity = "0.5";
	}
	document.getElementById(idChoisi).style.backgroundImage = "url(images/background/1.jpg)";
	document.getElementById(idChoisi).style.opacity = "1";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Les personnages à côte de celui qui est choisi ont leur opacité par défaut////////////
function resetChoixPerso(imgClass,idChoisi){
	var i;
	var img = document.getElementsByClassName(imgClass);
	for (i = 0; i < img.length; i++) {
		img[i].style.opacity = "1";
	}
	document.getElementById(idChoisi).style.background ="-moz-linear-gradient(top,#919389,#a0b3b7,#a0b3b7,#a0b3b7,#919389)";
	document.getElementById(idChoisi).style.background ="-webkit-linear-gradient(top,#919389,#a0b3b7,#a0b3b7,#a0b3b7,#919389)"; /* Safari 5.1-6.0 */
    document.getElementById(idChoisi).style.background ="-o-linear-gradient(top,#919389,#a0b3b7,#a0b3b7,#a0b3b7,#919389)"; /* Opera 11.1-12.0 */
	document.getElementById(idChoisi).style.background ="linear-gradient(top,#919389,#a0b3b7,#a0b3b7,#a0b3b7,#919389)"; /* Standard syntax */
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Lors du clique sur le bloc de description visible//////////////////////////////////////////////////////////////////////////////////////////////////////////
function change(id){
	document.getElementById(id).style.animation ="anim2 2s";
	document.getElementById(id).style.WebkitAnimation ="anim2 2s";
	document.getElementById(id).style.MozAnimation ="anim2 2s";
	document.getElementById(id).style.OAnimation ="anim2 2s";
	setTimeout(raz, 1500);//Pour que l'animation au dessus se termine on utilise la fonction setTimeout
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function razImgTri(imgClass,triangleClass){
	var i;
	var img = document.getElementsByClassName(imgClass);
	var triangle = document.getElementsByClassName(triangleClass);
	for (i = 0; i < img.length; i++) {
		img[i].style.display = "initial";
		img[i].style.float = "initial";
		img[i].style.animation = "animPerso2 1s";
		img[i].style.Webkitanimation = "animPerso2 1s";
		img[i].style.MozAnimation = "animPerso2 1s";
		img[i].style.OAnimation = "animPerso2 1s";
		img[i].style.marginTop="0%";
		triangle[i].style.display = "initial";
		triangle[i].style.marginTop="26.3%";
		triangle[0].style.marginLeft="12.2%";
		triangle[1].style.marginLeft="15.21%";
		triangle[2].style.marginLeft="11.9%";
		triangle[3].style.marginLeft="15.79%";
	}
}
//On remet les valeurs par défaut////////////////////////////////////////////////////////////////////////////////////////////////////////
function raz(){
	document.getElementById('titre1').innerHTML = "Les chevaliers";
	document.getElementById('titre2').innerHTML = "Les samouraïs";
	document.getElementById('titre3').innerHTML = "Les vikings";
	razBlock('blockTexteC');
	razBlock('blockTexteS');
	razBlock('blockTexteV');
	razImgTri('persoChev','triangleDetailsChev');
	razImgTri('persoSam','triangleDetailsSam');
	razImgTri('persoVik','triangleDetailsVik');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//Remet le style par défaut pour tous les personnages sauf celui sélectionné//////////////////////////////////////////////////////////////////////////////////////////////////
function cleanF(imgClass1,imgClass2,block1,block2,titreClass,triangleClass1,triangleClass2){
	document.getElementsByClassName(titreClass)[0].innerHTML = "Les chevaliers";
	document.getElementsByClassName(titreClass)[1].innerHTML = "Les samouraïs";
	document.getElementsByClassName(titreClass)[2].innerHTML = "Les vikings";
	razBlock(block1);
	razBlock(block2);
	razImgTri(imgClass1,triangleClass1);
	razImgTri(imgClass2,triangleClass2);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

///////Script sur accueil et classes////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Change la couleur du menu buggg////////////////////////////////////////////////////////////////////////////////////////////////////////
function changeMenu(id1,id2,id3,idChange){
	document.getElementById(id1).style.color = "#adb1b4";
	document.getElementById(id2).style.color = "#adb1b4";
	document.getElementById(id3).style.color = "#adb1b4";
	document.getElementById(idChange).style.color = "white";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//Script sur equipement----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var slideImg = document.getElementsByClassName("slideshow");
	var slideTexte = document.getElementsByClassName("texteSlide");
    if (n > slideImg.length) {
		slideIndex = 1;
	}
    if (n < 1) {
		slideIndex = slideImg.length;
	} 
    for (i = 0; i < slideImg.length; i++){
        slideImg[i].style.display = "none";
		slideTexte[i].style.display = "none";
    }
    slideImg[slideIndex-1].style.display = "block";
	slideTexte[slideIndex-1].style.display = "block";
	slideImg[slideIndex-1].style.animation = "animBlock 2s";
	slideImg[slideIndex-1].style.Webkitanimation = "animBlock 2s";
	slideImg[slideIndex-1].style.MozAnimation = "animBlock 2s";
	slideImg[slideIndex-1].style.OAnimation = "animBlock 2s";
}		
																																		 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//page combos--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function reset(event){
	var touche = event.keyCode; 
	if (touche == "116"){
		document.getElementsByClassName('box')[0].checked = true;
	}
}

function changePerso(idChoisi,idchoisi2,classRadio){
	var i;
	var menu = document.getElementsByClassName("hoverMenu");
	for (i = 0; i < menu.length; i++) {
		menu[i].style.borderBottom = "none";
	}
	document.getElementById(idChoisi).style.borderBottom = "2px solid";
	
	var j;
	var nom = document.getElementsByClassName("descriptif");
	for (j = 0; j < menu.length; j++) {
		nom[j].style.display = "none";
	}
	document.getElementById(idchoisi2).style.display = "block";
	
	var choix = document.getElementById(idchoisi2).id;
	switch (choix){
		case "choix1":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/3.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			
			break;
		
		case "choix2":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix3":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix4":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix5":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix6":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix7":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix8":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix9":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix10":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix11":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
			
		case "choix12":
			document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/1.mp4");
			document.getElementsByClassName(classRadio)[0].checked = true;
			break;
	}
}

function changeVid(classRadio,idPerso){
	var i;
	var cpt = 0;
	var x = document.getElementsByClassName(classRadio);
	for (i = 0; i < x.length; i++) {
		if (x[i].checked){
			var cpt = i;
		}
	}
	
	var choix = document.getElementById(idPerso).id;
	switch (choix){
		case "choix1":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/3.mp4");/* manque vidéo*/
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/3.mp4");/* manque vidéo*/
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/7.mp4");/* manque vidéo*/
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/fleau/9.mp4");
					break;
			}
			break;
			
		case "choix2":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/sentinelle/7.mp4");
					break;
			}
			break;
			
		case "choix3":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/spadassin/9.mp4");
					break;
			}
			break;
		
		case "choix4":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/9.mp4");
					break;
				case 9:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/10.mp4");
					break;
				case 10:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/11.mp4");
					break;
				case 11:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/12.mp4");
					break;
				case 12:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/emissaire/13.mp4");
					break;
			}
			break;
			
		case "choix5":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/kensei/8.mp4");
					break;
			}
			break;
		
		case "choix6":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/9.mp4");
					break;
				case 9:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/orochi/10.mp4");
					break;
			}
			break;
		
		case "choix7":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/shugoki/8.mp4");
					break;
			}
			break;
			
		case "choix8":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/9.mp4");
					break;
				case 9:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/10.mp4");
					break;
				case 10:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/11.mp4");
					break;
				case 11:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/nobushi/12.mp4");
					break;
			}
			break;
			
		case "choix9":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/hersir/8.mp4");
					break;
			
			}
			break;
		
		case "choix10":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/3.mp4");/* manque vidéo*/
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/4.mp4");/* manque vidéo*/
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/berserker/7.mp4");
					break;
			}
			break;
		
		case "choix11":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/7.mp4");/* manque vidéo*/
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/9.mp4");/* manque vidéo*/
					break;
				case 9:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/10.mp4");
					break;
				case 10:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/11.mp4");/* manque vidéo*/
					break;
				case 11:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/12.mp4");
					break;
				case 12:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/13.mp4");
					break;
				case 13:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/jarl/14.mp4");/* manque vidéo*/
					break;
			}
			break;
		
		case "choix12":
			switch (cpt){
				case 0:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/1.mp4");
					break;
				case 1:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/2.mp4");
					break;
				case 2:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/3.mp4");
					break;
				case 3:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/4.mp4");
					break;
				case 4:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/5.mp4");
					break;
				case 5:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/6.mp4");
					break;
				case 6:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/7.mp4");
					break;
				case 7:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/8.mp4");
					break;
				case 8:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/9.mp4");/* manque vidéo*/
					break;
				case 9:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/10.mp4");
					break;
				case 10:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/11.mp4");
					break;
				case 11:
					document.getElementsByTagName("VIDEO")[0].setAttribute("src","videos/valkyrie/12.mp4");
					break;
			}
			break;
	}
}
//page combos--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//