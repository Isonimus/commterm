window.onload=function(){
	
var hablamaquina=true;
var esperando_matrix=false;
var mates;
var foco=1;
var navegando = 0;
var esperando_login=false;
var esperando_pass=false;
var enter_control=true;
var current_username= 'Guest';
var logged=false;
var screencolor=0;



//BOOT

function arranque(){
		var e=document.getElementById('crt_escondido');
		e.id='crt';
	
		setTimeout(function(){ bla('&nbsp;_____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________________________________________&nbsp;'); }, 0);
		setTimeout(function(){ bla('|&nbsp;&nbsp;_&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|____________________&nbsp;&nbsp;&nbsp;___SpleenCorp&nbsp;Ind._|'); }, 100);
		setTimeout(function(){ bla('|&nbsp;|&nbsp;|_|&nbsp;___&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;|&nbsp;|&nbsp;___&nbsp;_&nbsp;__&nbsp;_&nbsp;__&nbsp;____'); }, 200);
		setTimeout(function(){ bla('|&nbsp;|&nbsp;&nbsp;_&nbsp;|&nbsp;_&nbsp;||&nbsp;\'_&nbsp;`&nbsp;_&nbsp;\'|&nbsp;\'_&nbsp;`&nbsp;_&nbsp;\'|&nbsp;||&nbsp;_&nbsp;|&nbsp;\'__|&nbsp;\'_&nbsp;`&nbsp;_&nbsp;\'|'); }, 300);
		setTimeout(function(){ bla('|&nbsp;|_|&nbsp;|||_|||&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;||&nbsp;__|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|'); }, 400);
		setTimeout(function(){ bla('|_____||___||_|&nbsp;|_|&nbsp;|_|_|&nbsp;|_|&nbsp;|_|_||___|_|&nbsp;&nbsp;|_|&nbsp;|_|&nbsp;|_|'); }, 500);
		setTimeout(function(){ bla('SPLEENCORP IND CommTerm V1.0 - 2016 ALL RIGHTS REVERSED'); }, 600);
		setTimeout(function(){ bla('-------------------------------------------------------'); }, 700);
		setTimeout(function(){ bla('Inicializando sistema...<br>'); }, 800);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 12% <br>'; }, 1200);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 26% <br>'; }, 1800);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 35% <br>'; }, 2000);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 41% <br>'; }, 2400);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 59% <br>'; }, 2700);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 73% <br>'; }, 2900);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 85% <br>'; }, 2900);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 94% <br>'; }, 3500);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 99% <br>'; }, 4400);
		setTimeout(function(){ base.lastChild.innerHTML ='Inicializando sistema... 100% <br>'; }, 4800);
		setTimeout(function(){ bla('Cargando subrutinas. <br>'); }, 5100);
		setTimeout(function(){ base.lastChild.innerHTML ='Cargando subrutinas.. <br>'; }, 5300);
		setTimeout(function(){ base.lastChild.innerHTML ='Cargando subrutinas... <br>'; }, 5500);
		setTimeout(function(){ base.lastChild.innerHTML ='Cargando subrutinas... 100%<br>'; }, 5800);
		setTimeout(function(){ bla('Cargando SkyNet.src... <br>'); }, 6300);
		setTimeout(function(){ base.lastChild.innerHTML ='Cargando SkyNet.src... 100% <br>'; }, 6650);
		setTimeout(function(){ bla('Conectando con la Tardis... <br>'); }, 7000);
		setTimeout(function(){ bla('Está fuera de cobertura :( <br>'); }, 9000);
		setTimeout(function(){ bla('Todos los sistemas en marcha. <br>'); }, 9500);
		setTimeout(function(){ bla('Bienvenido a la interfaz CommTerm V1.0 de SpleenCorp. <br>'); }, 10000);
		setTimeout(function(){ trick.id='trick';}, 10500);
		setTimeout(function(){ ajuste= 55-(current_folder.nombre.length*2);}, 10500);
		setTimeout(function(){ inputline.size=ajuste;}, 10500);
		setTimeout(function(){ trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';}, 10500);
		setTimeout(function(){ inputline.id='comando';}, 10500);
		setTimeout(function(){ inputline.focus();}, 10500);}
		
		
		
//Hablando por la consola

function bla(mensaje_consola){	
	
	var input = document.createElement('div');
		//input.className = 'input';
		input.id='input'
		input.className='input'
		input.innerHTML = mensaje_consola;
		input.onclick = function(){foco=2;}
		autoscroll();
		base.appendChild(input);
		foco = 1;
		
}

//Sistema de archivos
var system_accounts= [{user:'root', pass:'iamgod'},{user:'guest', pass:'letmein'},{user:'MrCrunch', pass:'whistle'}];
var passwd= {nombre: 'passwd', tipo:'sistema', contenido:[system_accounts]};
var deleteme= {nombre:'deleteme.txt', tipo:'texto', contenido:'Bórrame si tienes huevos.'};
var txt= {nombre:'txt', tipo:'carpeta', contenido:[deleteme]};
var bin= {nombre:'bin', tipo:'carpeta', contenido:[]};
var boot= {nombre:'boot', tipo:'carpeta', contenido:[]};
var dev= {nombre:'dev', tipo:'carpeta', contenido:[]};
var lib= {nombre:'lib', tipo:'carpeta', contenido:[]};
var media= {nombre:'media', tipo:'carpeta', contenido:[]};
var mnt= {nombre:'mnt', tipo:'carpeta', contenido:[]};
var proc= {nombre:'proc', tipo:'carpeta', contenido:[]};
var sbin= {nombre:'sbin', tipo:'carpeta', contenido:[]};
var tmp= {nombre:'tmp', tipo:'carpeta', contenido:[]};
var etc= {nombre:'etc', tipo:'carpeta', contenido:[passwd]};
var usr= {nombre:'usr', tipo:'carpeta', contenido:[bin, txt]};
var readme= {nombre:'readme.txt', tipo:'texto', contenido:'Soy un documento de texto lleno de información extremadamente valiosa. Muchos no saben cuántos secretos escondo entre el Lorem Ipsum y el Veloz Murciélago Hindú.'};

var root = {nombre:'root', tipo:'carpeta', contenido:[bin, boot, dev, etc, lib, media, mnt, proc, sbin, usr, readme]}
			
var filesys={nombre:'sistema', tipo: 'sistema',contenido:root};
var current_folder = usr;
var nombre_current_folder = current_folder.nombre;
var ruta_absoluta='/usr'


//interpretando los comandos

function interpretar(comando){
	
//CLS
	
	var cls = "cls";
	var str1 = comando;
	if (str1 === cls){
		while(base.firstChild){
			base.removeChild(base.firstChild);}
			memoria_pantalla_arriba=[''];
			memoria_pantalla_abajo=[''];
			scr_nav=0;
			bla('$>cls')
			return;
		}
		
//REBOOT
	
	var reboot = "reboot";
	var str1 = comando;
	if (str1 === reboot){
		setTimeout(function(){ bla('Cerrando procesos en segundo plano...'); }, 1000);
		setTimeout(function(){ bla('Borrando cachés...'); }, 2000);
		setTimeout(function(){ memoria_comandos=['']; }, 2500);
		setTimeout(function(){ nav=0; scr_nav=0; current_folder = usr; current_username= 'Guest'; logged=false;}, 2600);
		setTimeout(function(){ bla('Reiniciando el sistema.'); }, 4000);
		setTimeout(function()
		{while(base.firstChild){
			base.removeChild(base.firstChild);
			memoria_pantalla_arriba=[''];
			memoria_pantalla_abajo=['']; }},5000);
		setTimeout(function(){trick.id='trick-escondido';},5500);
		setTimeout(function(){inputline.id='comando-escondido';},5500);
		var e=document.getElementById('crt');
		setTimeout(function(){e.id='crt_escondido';},5800);
		setTimeout(function(){arranque();},6500);
		return;
		}
		
//VERSION

	var version = "version";
	var str1 = comando;
	if (str1 === version){

		setTimeout(function(){ bla('&nbsp;_____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________________________________________&nbsp;'); }, 0);
		setTimeout(function(){ bla('|&nbsp;&nbsp;_&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|____________________&nbsp;&nbsp;&nbsp;___SpleenCorp&nbsp;Ind._|'); }, 100);
		setTimeout(function(){ bla('|&nbsp;|&nbsp;|_|&nbsp;___&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;&nbsp;_&nbsp;__&nbsp;___&nbsp;|&nbsp;|&nbsp;___&nbsp;_&nbsp;__&nbsp;_&nbsp;__&nbsp;____'); }, 200);
		setTimeout(function(){ bla('|&nbsp;|&nbsp;&nbsp;_&nbsp;|&nbsp;_&nbsp;||&nbsp;\'_&nbsp;`&nbsp;_&nbsp;\'|&nbsp;\'_&nbsp;`&nbsp;_&nbsp;\'|&nbsp;||&nbsp;_&nbsp;|&nbsp;\'__|&nbsp;\'_&nbsp;`&nbsp;_&nbsp;\'|'); }, 300);
		setTimeout(function(){ bla('|&nbsp;|_|&nbsp;|||_|||&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;||&nbsp;__|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|'); }, 400);
		setTimeout(function(){ bla('|_____||___||_|&nbsp;|_|&nbsp;|_|_|&nbsp;|_|&nbsp;|_|_||___|_|&nbsp;&nbsp;|_|&nbsp;|_|&nbsp;|_|'); }, 500);
		setTimeout(function(){ bla('SPLEENCORP IND CommTerm V1.0 - 2016 ALL RIGHTS REVERSED'); }, 600);
		setTimeout(function(){ bla(''); }, 700);
		return;}
//HELP
		
	var help = "help";
	var str1 = comando;
	if (str1 === help){
		bla('Aquí nadie puede ayudarte.');
		return;
		}
		
//CMDLST
		
	var cmdlst = "cmdlst";
	var str1 = comando;
	if (str1 === cmdlst){
		setTimeout(function(){bla('');},20);
		setTimeout(function(){bla('Lista de comandos implementados:');},100);
		setTimeout(function(){bla('--------------------------------');},200);
		setTimeout(function(){bla('cls: <small> &nbsp;&nbsp;&nbsp;&nbsp;limpia la pantalla. </small>');},300);
		setTimeout(function(){bla('version: <small> muestra la versión del CommTerm. </small>');},400);
		setTimeout(function(){bla('cmdlst: <small>&nbsp;muestra todos los comandos. </small>');},500);
		setTimeout(function(){bla('help: <small>&nbsp;&nbsp; muestra las opciones de ayuda. </small>');},500);
		setTimeout(function(){bla('');},700);
		return;
		}
		
//NAVEGANDO POR EL SISTEMA DE ARCHIVOS:
//CD - Saltando al directorio raíz

	var cd = "cd";
	var str1 = comando;
	if (str1 === cd){
		if(current_username!=='root'){
			current_folder=usr;
			ruta_absoluta='/usr'
			ajuste= 50-(current_folder.nombre.length*2);
			inputline.size=ajuste;
			trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
			return;
			}
		current_folder=root;
		ruta_absoluta='/root'
		//bla('/'+current_folder.nombre);
		ajuste= 50-(current_folder.nombre.length*2);
		inputline.size=ajuste;
		trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
		return;
		}
		
//CD dir - cambiando de directorio (profundidad ilimitada):

	var cdir = "cd "
	var str1 = comando;
	var referencia = current_folder;
	if (comando.lastIndexOf(cdir,2)==0){
		ruta= comando.split('cd ').pop();
		niveles=ruta.split('/');
		//alert(niveles)
		var profundidad=niveles.length;
		var i=0;
		var inception='.contenido';
		var exitos=0;
		//sólo podemos cambiar a directorios absolutos(desde /root) <--LOL MENTIRA
		while (i<profundidad){
			var ruta_test=[];
			ruta_test.push(referencia.nombre.toString());
			ruta_test.push(inception);
			ruta_test = ruta_test.join('');
			//alert('buscando en '+ruta_test);
			//alert(niveles[i]);
			
			for (ii=0, l=referencia.contenido.length; ii<l; ii++){
				var test = referencia.contenido[ii].nombre;
				//alert('Comparando '+test+ niveles[i]);
				if (test === niveles[i]){
					ruta_absoluta= ruta_absoluta+=('/'+niveles[i]);
					exitos++;
					//alert('Match!');
					var buffer=referencia.contenido[ii];
					referencia=buffer;
					//alert('Cambio de ref! '+ referencia.nombre)
					//alert('Profundidad: '+profundidad+' exitos: '+exitos);
					//alert('contenido '+referencia.contenido[0].nombre)
					if (exitos == profundidad && referencia.tipo==='carpeta'){
						current_folder = referencia;
						ajuste= 50-(current_folder.nombre.length*2);
						inputline.size=ajuste;
						trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
						bla('Cambiado a '+current_folder.nombre);
					}else{
						if(referencia.tipo!='carpeta'){
						
							bla(referencia.nombre+' no es una carpeta.')
						}	
					}
					break;
				}
			}i++
		}if(exitos < profundidad){bla('Ruta incorrecta.');}

	return;
	}
		
//LS - listando los archivos dentro del directorio actual

	var ls = "ls";
	var str1 = comando;
	if (str1 === ls){
		var i=0;
		while(i<current_folder.contenido.length){
			if(current_folder.contenido[i].tipo=== 'carpeta'){
				bla('/'+current_folder.contenido[i].nombre);
				i++;
			}else{
				bla(current_folder.contenido[i].nombre);
				i++;
				}
			}
		return;
		}

//PWD - Print Working Directory

	var pwd = "pwd";
	var str1 = comando;
	if (str1 === pwd){
		bla(ruta_absoluta);
		return;
		}

//MKDIR - creando nuevos directorios (dentro del directorio actual)

	var mkdir = "mkdir ";
	var str1 = comando;
	if(comando.lastIndexOf(mkdir,7)==0){
		if(current_username!=='root'){
			bla('No tienes privilegios para hacer eso.');
			return;
			}
		nombre_nuevo_directorio = comando.split(' ').pop();
		var i=0;
		while(i<current_folder.contenido.length){
			if(current_folder.contenido[i].nombre=== nombre_nuevo_directorio && current_folder.contenido[i].tipo === 'carpeta'){
				bla('Ya existe un directorio con ese nombre :(');
				return;
			}else{
				//bla(current_folder.contenido[i].nombre);
				i++;
			}
		}
		current_folder.contenido.push(nombre_nuevo_directorio= {nombre:nombre_nuevo_directorio, tipo:'carpeta', contenido:[]});
		bla('Creado nuevo directorio '+nombre_nuevo_directorio.nombre+'.')
		
	return;
	}
		
//MORE - Leyendo archivos de texto:
//Troceando...
function trocear_texto(texto, long){
	if(texto.length <= long){return texto;}
	var texto_troceado = texto.split(' ');
	var control_long = texto_troceado[0].length;
	for (var i=1; i< texto_troceado.length; i++){
		if(control_long == long || control_long+texto_troceado[i].length+1>long)break;
		control_long+=texto_troceado[i].length+1;
		}
	return texto_troceado.slice(0,i).join(' ')
}

//...y escribiendo en pantalla.
function fasciculear(texto, long){
	var texto_por_procesar = texto;
	var long_total = texto_por_procesar.length;
	while (long_total > long){
		var fasciculo = trocear_texto(texto_por_procesar, long);
		var buffer=texto_por_procesar.replace(fasciculo, '');
		texto_por_procesar=buffer;
		long_total = buffer.length;
		bla(fasciculo);
		
		}
	bla(texto_por_procesar);
	}

//Buscando y abriendo el archivo seleccionado

	var more = "more ";
	var str1 = comando;
	if(comando.lastIndexOf(more,6)==0){
		nombre_archivo_a_leer = comando.split(' ').pop();
		var i=0;
		var encontrado=0;
		while(i<current_folder.contenido.length){
			if(current_folder.contenido[i].nombre=== nombre_archivo_a_leer && current_folder.contenido[i].tipo === 'texto'){
				bla('Descodificando documento...');
				setTimeout(function(){fasciculear(current_folder.contenido[i].contenido, 60);},1000);
				encontrado=1;
				return;
				
			}else if(current_folder.contenido[i].nombre=== nombre_archivo_a_leer && current_folder.contenido[i].tipo !== 'texto'){
				bla(current_folder.contenido[i].nombre+' no es un tipo válido de documento.');
				encontrado=1;
				return;
				
			}else{
				i++;
			}
		}
		if(encontrado ===0){
			bla('No se encuentra el documento.')
			}
		
	return;
	}
	
	
//RM FILE - Eliminando archivos de texto


	var rm = "rm ";
	var str1 = comando;
	if(comando.lastIndexOf(rm,4)==0){
		if(current_username!=='root'){
			bla('No tienes privilegios para hacer eso.');
			return;
			}
		nombre_archivo_a_eliminar = comando.split(' ').pop();
		var i=0;
		var encontrado=0;
		while(i<current_folder.contenido.length){
			if(current_folder.contenido[i].nombre=== nombre_archivo_a_eliminar && current_folder.contenido[i].tipo !== 'carpeta'){
				bla('Eliminando documento...');
				setTimeout(function(){current_folder.contenido.splice(i,1)},1000);
				setTimeout(function(){bla('Documento eliminado.')},1000);
				encontrado=1;
				return;
			}else if(current_folder.contenido[i].nombre=== nombre_archivo_a_eliminar && current_folder.contenido[i].tipo === 'carpeta'){
				bla(current_folder.contenido[i].nombre+' no es un tipo válido de documento.');
				encontrado=1;
				return;
				
				
			}else{
				i++;
			}
		}
		if(encontrado ===0){
			bla('No se encuentra el documento.')
			}
		
	return;
	}


		
//CALC - UTILIDAD DE CÁLCULO MATEMÁTICO
//Depurando los comandos (eliminando el comando 'math' de la operación)
var operacion;
function depurar(comando){
	operacion= comando.split(' ').pop();
	}

//DETECTANDO MATES

	if (comando.lastIndexOf('math ',4)==0){
	depurar(comando);
	var operadores = '+-*/%'
	comando = operacion;
	for(var i=0, l=operadores.length; i<l; i++){
		if (comando.indexOf(operadores.charAt(i)) > -1){
			var re= new RegExp(/[a-zA-Z]/);
			if(re.test(comando)){
				bla('Operación incorrecta. Prueba con números.');
				return;
				
			}else{
				var re2= new RegExp(/[0-9]/);
				if(!re2.test(comando)){
					bla('Operación incorrecta. Prueba con números.');
					return;}
				if(!isNaN(eval(comando))){
					bla(eval(comando));
					return;
				}else{
					bla('NaN');
					return;
					}
				}	
			}
		}		
	}
//WHOAMI
		
	var amialone = "am I alone?";
	var str1 = comando;
	if (str1 === amialone){
		setTimeout(function(){ bla('You are not alone.'); }, 1200);
		setTimeout(function(){ bla('What\'s your name?'); }, 2800);
		setTimeout(function(){ esperando_matrix=true; }, 2000);
		inputline.addEventListener('keyup', function(e) {
			if(e.keyCode == 13 && esperando_matrix == true){
				hablamaquina=false;
				bla('$>'+ inputline.value);
				setTimeout(function(){ bla('Knock, knock, '+inputline.value+'.'); }, 1200);
				setTimeout(function(){ bla('The Matrix has you.'); }, 2200);
				setTimeout(function(){ inputline.value=''; }, 1200);
				hablamaquina=true;
				esperando_matrix=false;
				}
				})
		return;}
		

//LOGIN - identificando al usuario:
		
	var login = "login";
	var str1 = comando;
	if (str1 === login){
		ajuste= 35;
		inputline.size=ajuste;
		trick.innerHTML = '&nbsp;Nombre de usuario:';
		esperando_login=true;
		return;
		}

//LOGOUT - cerrando la sesión:

	var logout = "logout";
	var str1 = comando;
	if (str1 === logout){
		bla('Has cerrado tu sesión como '+current_username+'.')
		current_username= 'Guest';
		logged=false;
		return;
		}

//SET - customizando el Terminal:

		
	var set = "set ";
	var str1 = comando;
	if (comando.lastIndexOf(set,3 )==0){
		maqueo = comando.split('set ').pop();
		parametros=maqueo.split(' ');
		if (parametros[0] === 'screen'){
			if (parametros[1]==='blue'){
				contenedor.id='contenedor_azul';
				bla('Semper Caelureus.');
				return;
				
			}else if(parametros[1]==='green'){
				contenedor_azul.id='contenedor';
				bla('There is no spoon.');
				return;
				
			}else if(parametros[1]==='white'){
				contenedor_azul.id='contenedor_blanco';
				bla('Run, DOS, Run!.');
				return;
				
			}else{
				bla('Parámetros no reconocidos');
				return;
				}
			
		}else{
			bla(parametros[0]+' no es un parámetro válido.');
			return;
			}
		}




		
//UNKNOWN

	else {bla('Comando desconocido.'); return;}
	
		
}

//Memoria de pantalla (200 líneas)
var memoria_pantalla_arriba=[''];
var memoria_pantalla_abajo=[''];
function recordar_pantalla(input){
	if (memoria_pantalla_arriba.length == 200){
		memoria_pantalla_arriba.pop(memoria_pantalla_arriba[199]);
		memoria_pantalla_arriba.unshift(input);
		return;
	}else{
		memoria_pantalla_arriba.unshift(input);
		return;}
	}
	
		
//Emulando el autoscroll

function autoscroll(){
	
	var e=document.getElementById('fondo');
	var enpantalla= e.getElementsByClassName('input');
	var contar = enpantalla.length;
	if (contar == 15) {
		recordar_pantalla(enpantalla[0]);
		base.removeChild(enpantalla[0]);}
		
}

//Memoria de comandos (23 slots)

var memoria_comandos=[''];
function recordar(comando){
	if (memoria_comandos.length == 23){
		memoria_comandos.pop(memoria_comandos[22]);
		memoria_comandos.unshift(comando);
		//alert('Borrando y paentro');
		return;
		
	}else{
		memoria_comandos.unshift(comando);
		//alert('Paentro');
		return;}
	}

//Navegando por las memorias

var nav=0;
var scr_nav=0;
document.onkeydown=checkKey;
function checkKey(tecla){
	e=tecla||window.event;
	if(e.keyCode==38 && inputline === document.activeElement){  //arriba en el input
		if(nav+2 <= memoria_comandos.length){
			inputline.value=memoria_comandos[nav]; 
			nav++;
		}else{inputline.value=inputline.value;}
		
		
	}else if(e.keyCode==40 && inputline === document.activeElement){//abajo en el input
		if(nav-1 >= 0){
		nav--;
		inputline.value=memoria_comandos[nav]; 
		if (nav < 0){nav =0};
		}else{inputline.value=inputline.value;}
		
		
	}else if(e.keyCode==38 && foco === 2){ //arriba en la pantalla
		if(scr_nav+2 <= memoria_pantalla_arriba.length){
			navegando = 1;
			base.insertBefore(memoria_pantalla_arriba[scr_nav],base.firstChild);
			//memoria_pantalla_arriba.splice(-1,1);
			memoria_pantalla_abajo.unshift(base.lastChild);	
			base.removeChild(base.lastChild); 
			scr_nav++;
		}//else{alert('Has llegado arriba pavo' + scr_nav)}
	
	
	}else if(e.keyCode==40 && foco === 2){ //abajo en la pantalla
		if(scr_nav-1 >= 0){
			navegando = 1;
			base.appendChild(memoria_pantalla_abajo[0]);
			memoria_pantalla_abajo.splice(0,1);
			//memoria_pantalla_arriba.unshift(base.firstChild);
			base.removeChild(base.firstChild); 
			scr_nav--;
		}//else{alert('Has llegado abajo pavo')}
		
	}else if(e.keyCode==13 && navegando ===1){ //Enter durante la navegación
		if(scr_nav-1 >= 0){
			hablamaquina=true;
			//alert ('hasta aquí sí')
			var i=1;
			while(i<memoria_pantalla_abajo.length){
				base.appendChild(memoria_pantalla_abajo[0]);
				memoria_pantalla_abajo.splice(0,1);
				base.removeChild(base.firstChild);
				}
			
			hablamaquina=false;
			bla('$>'+ inputline.value);
			recordar(inputline.value);
			interpretar(inputline.value);
			inputline.value='';
			scr_nav=0;
		}else{
			hablamaquina=false;
			bla('$>'+ inputline.value);
			recordar(inputline.value);
			interpretar(inputline.value);
			inputline.value='';
			hablamaquina=true;
			scr_nav=0;
			//alert ('nav off')
		}
		setTimeout(function(){navegando=0;}, 1000);
		
	
	}else if(e.keyCode==13 && esperando_login ==true){ //Enter al introducir login
		test_username=inputline.value;
		bla('User: '+test_username)
		var usuario_existe=false;
		var cuenta_a_verificar;
		for (var account in system_accounts){
			//alert(system_accounts[account].user);
			if (system_accounts[account].user === test_username){
				//alert('match!');
				usuario_existe=true;
				pass_a_verificar=system_accounts[account].pass;
			}
		}
		if (usuario_existe===true){
			inputline.value='';
			ajuste= 40;
			inputline.size=ajuste;
			inputline.setAttribute('type', 'password');
			trick.innerHTML = '&nbsp;Contraseña:';
			esperando_pass=true;
			
		}else{
			bla('El usuario no existe.')
			inputline.value='';
			ajuste= 55-(current_folder.nombre.length*2);
			inputline.size=ajuste;
			trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
		
			
		}
		setTimeout(function(){esperando_login=false;}, 1000);
	
	}else if(e.keyCode==13 && esperando_pass ==true){ //Enter al introducir password
		test_pass=inputline.value;
		var logueado=false;
		if (pass_a_verificar === test_pass){
			//alert("I'm in!");
			current_username= test_username;
			bla('Identificado como '+current_username+'.')
			logged=true;
			inputline.value='';
			ajuste= 55-(current_folder.nombre.length*2);
			inputline.size=ajuste;
			inputline.setAttribute('type', 'text');
			trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
		
	
			
		}else{
			bla('Contraseña incorrecta.')
			inputline.value='';
			ajuste= 55-(current_folder.nombre.length*2);
			inputline.size=ajuste;
			inputline.setAttribute('type', 'text');
			trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
		
		}
		setTimeout(function(){esperando_pass=false;}, 1000);
		
	}else if(e.keyCode==37){  //izquierda
	}else if(e.keyCode==39){}  //derecha
}

		
//Génesis y arranque	

	var base = document.createElement('div');
		base.id = 'fondo';
		base.className = 'fondo';
		base.tabIndex='-1'
		var e= document.getElementById('contenedor');
		e.appendChild(base);
		var trick =document.createElement('span');
		trick.id= 'trick-escondido';
		trick.innerHTML = '&nbsp;/'+current_folder.nombre+'$>';
		e.appendChild(trick);
		var inputline = document.createElement('INPUT');
		inputline.setAttribute('type', 'text');
		inputline.setAttribute('width', '100%');
		inputline.id = 'comando-escondido';
		inputline.className ='comando';
		inputline.onclick = function(){foco=1;}
		var ajuste= 55-(current_folder.nombre.length*2);
		inputline.size=ajuste;
		//inputline.autofocus= true;
		inputline.addEventListener('keyup', function(e) {
			if(e.keyCode == 13 && esperando_matrix == false && navegando == 0 && esperando_login ==false && esperando_pass ==false){
				hablamaquina=false;
				bla('$>'+ inputline.value);
				recordar(inputline.value);
				interpretar(inputline.value);
				inputline.value='';
				hablamaquina=true;
				}
				})
			
		e.appendChild(inputline);
		var remate = document.createElement('div');
		remate.id='remate'
		e.appendChild(remate);
		arranque();
		

}
