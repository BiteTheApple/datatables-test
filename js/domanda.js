function professionistaType() {
	var tipo = document.getElementById("tipoProfessionista");
	var valore = tipo.options[tipo.selectedIndex].value;
	  		
	if (valore == "11A" || valore == "11B") {
		document.getElementById('statoUE').style.display = 'block';
	}
	  						  			
  	if (valore == "1" || valore == "2" || valore == "11A") {
  		document.getElementById('domandaProfessionista1').style.display = 'block';
  		document.getElementById('lim12311A').style.display = 'block';
  		document.getElementById('lim411B').style.display = 'none';
		document.getElementById('lim5').style.display = 'none';				
		document.getElementById('lim67').style.display = 'none';
		document.getElementById('lim8910').style.display = 'none';
  		$($("#domandaProfessionista1").find("li")[0]).show();
  		$($("#domandaProfessionista1").find("li")[1]).hide();
  		$("#domandaProfessionista1").tabs("option", "active", 0);
    }
    		
    if (valore == "3") {
		document.getElementById('domandaProfessionista1').style.display = 'block';
  		document.getElementById('lim12311A').style.display = 'block';
  		document.getElementById('lim411B').style.display = 'none';
		document.getElementById('lim5').style.display = 'none';				
		document.getElementById('lim67').style.display = 'none';
		document.getElementById('lim8910').style.display = 'none';
  		$($("#domandaProfessionista1").find("li")[0]).hide();
  		$($("#domandaProfessionista1").find("li")[1]).show();
  		$("#domandaProfessionista1").tabs("option", "active", 1);
    }
    		
    if (valore == "4" || valore == "11B") {
		document.getElementById('domandaProfessionista1').style.display = 'block';
  		document.getElementById('lim12311A').style.display = 'none';
  		document.getElementById('lim411B').style.display = 'block';
		document.getElementById('lim5').style.display = 'none';				
		document.getElementById('lim67').style.display = 'none';
		document.getElementById('lim8910').style.display = 'none';
  		$($("#domandaProfessionista1").find("li")[0]).hide();
  		$($("#domandaProfessionista1").find("li")[1]).show();
  		$("#domandaProfessionista1").tabs("option", "active", 1);
    }
    		
    if (valore == "5") {
		document.getElementById('domandaProfessionista1').style.display = 'block';
  		document.getElementById('lim12311A').style.display = 'none';
  		document.getElementById('lim411B').style.display = 'none';
		document.getElementById('lim5').style.display = 'block';				
		document.getElementById('lim67').style.display = 'none';
		document.getElementById('lim8910').style.display = 'none';
  		$($("#domandaProfessionista1").find("li")[0]).hide();
  		$($("#domandaProfessionista1").find("li")[1]).show();
  		$("#domandaProfessionista1").tabs("option", "active", 1);
    }
    		
    if (valore == "6" || valore == "7") {
		document.getElementById('domandaProfessionista1').style.display = 'block';
  		document.getElementById('lim12311A').style.display = 'none';
  		document.getElementById('lim411B').style.display = 'none';
		document.getElementById('lim5').style.display = 'none';				
		document.getElementById('lim67').style.display = 'block';
		document.getElementById('lim8910').style.display = 'none';
  		$($("#domandaProfessionista1").find("li")[0]).hide();
  		$($("#domandaProfessionista1").find("li")[1]).show();
  		$("#domandaProfessionista1").tabs("option", "active", 1);
    }
    		
    if (valore == "8" || valore == "9" || valore == "10") {
		document.getElementById('domandaProfessionista1').style.display = 'block';
  		document.getElementById('lim12311A').style.display = 'none';
  		document.getElementById('lim411B').style.display = 'none';
		document.getElementById('lim5').style.display = 'none';				
		document.getElementById('lim67').style.display = 'none';
		document.getElementById('lim8910').style.display = 'block';
  		$($("#domandaProfessionista1").find("li")[0]).hide();
  		$($("#domandaProfessionista1").find("li")[1]).show();
  		$("#domandaProfessionista1").tabs("option", "active", 1);
    }
}

// OPERATORE ECONOMICO IN REGOLA LAVORO DISABILI
function lavDisabili() {
	if (document.getElementById('inRegola').checked) {
		document.getElementById('impresaInRegola').style.display = 'block';
   	} else {
		document.getElementById('impresaInRegola').style.display = 'none';
   	}
}

// OTTENIMENTO ID OPERE DA TABELLA
function test(){
	$("#sceltaOpere").on("click", "tr", function() {
		var cell = ($(this).children(":eq(1)").text());
		if (cell == "E.01"){
			sessionStorage.setItem("id", "E.01");
		} else if (cell == "E.02"){
			sessionStorage.setItem("id", "E.02");
		} else if (cell == "S.01"){
			sessionStorage.setItem("id", "S.01");
		}
	});	
}
		
// SELEZIONE FASI
function selezioneFasi(){
	var fasiScelte = $('input[name="fasi"]:checked').map(function () {
		return this.value;
	}).get();
	$("#riepilogoFasi").html(fasiScelte.join(", "));
}

// AGGIUNTA CATEGORIA DI OPERE
function chooseCat(){
	var categoriaOpera = document.getElementById("elencoCatOpere");
	var valore = categoriaOpera.options[categoriaOpera.selectedIndex].value;
	var tableCDO = $('#sceltaOpere').DataTable();
	var row = tableCDO.row(0);
	  		
	if (valore == 1){
		tableCDO.clear().draw();
		tableCDO.row.add(["Insediamenti Produttivi Agricoltura-Industria-Artigianato","E.01","Edifici rurali per l'attività agricola con corredi tecnici di tipo semplice (quali tettoie, depositi e ricoveri) - Edifici industriali o artigianali di importanza costruttiva corrente con corredi tecnici di base",""]).draw();
		tableCDO.row.add(["Insediamenti Produttivi Agricoltura-Industria-Artigianato","E.02","Edifici rurali per l'attività agricola con corredi tecnici di tipo complesso - Edifici industriali o artiginali con organizzazione e corredi tecnici di tipo complesso",""]).draw();
		tableCDO.row.add(["Industria Alberghiera, Turismo e Commercio e Servizi per la Mobilità","E.03","Ostelli, Pensioni, Case albergo - Ristoranti - Moel e stazioni di servizio - negozi - mercato coperti di tipo semplice",""]).draw();
		tableCDO.row.add(["Industria Alberghiera, Turismo e Commercio e Servizi per la Mobilità","E.04","Alberghi, Villaggi turistici - Mercati e Centri commerciali complessi",""]).draw();
	}
	if (valore == 2){
		tableCDO.clear().draw();
		tableCDO.row.add(["Strutture, Opere infrastrutturali puntuali, non soggette ad azioni sismiche, ai sensi delle Norme Tecniche per le Costruzioni","S.01","Strutture o parti di strutture in cemento armato, non soggetto ad azioni sismiche - riparazione o intervento locale - Verifiche strutturali relative - Ponteggi, centinature e strutture provvisionali di durata inferiore a due anni",""]).draw();
	}
}

// CERTIFICAZIONE DI QUALITÀ
function possessoCertQual() {
	if (document.getElementById('possessoCert').checked) {
		document.getElementById('certQual').style.display = 'block';
	} else {
		document.getElementById('certQual').style.display = 'none';
	}
}

// DUE INCARICHI
function incarichi2() {
	if (document.getElementById('dueIncarichiLess').checked) {
		document.getElementById('menoDi2Inc').style.display = 'block';
	} else {
		document.getElementById('menoDi2Inc').style.display = 'none';
	}
}