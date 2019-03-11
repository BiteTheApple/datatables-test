function salvaForm() {
	$("#form_message_box").slideDown(300, "linear").delay(3000).fadeOut(1000);
}

function possiedeSistemi() {
	if (document.getElementById('sistGestYes').checked) {
		document.getElementById('sistemiGestione').style.display = 'block';
	} else {
		document.getElementById('sistemiGestione').style.display = 'none';
	}
}

function tipoIscrizione() {
	if (document.getElementById('qualitaDi').checked) {
		document.getElementById('tipoIscrizione').style.display = 'block';
	} else {
		document.getElementById('tipoIscrizione').style.display = 'none';
	}
}

function gestSalute() {
	if (document.getElementById('salCertYes').checked) {
		document.getElementById('salCertificato').style.display = 'block';
	} else {
		document.getElementById('salCertificato').style.display = 'none';
	}
}

function salCert() {
	if (document.getElementById('sistemaSalute').checked) {
		document.getElementById('salCert').style.display = 'block';
	} else {
		document.getElementById('salCert').style.display = 'none';
	}
}

function gestEnergia() {
	if (document.getElementById('energiaCertYes').checked) {
		document.getElementById('energiaCertificato').style.display = 'block';
	} else {
		document.getElementById('energiaCertificato').style.display = 'none';
	}
}

function energiaCert() {
	if (document.getElementById('sistemaEnergia').checked) {
		document.getElementById('energiaAllega').style.display = 'block';
	} else {
		document.getElementById('energiaAllega').style.display = 'none';
	}
}

function gestAmbiente() {
	if (document.getElementById('ambCertYes').checked) {
		document.getElementById('ambCertificato').style.display = 'block';
	} else {
		document.getElementById('ambCertificato').style.display = 'none';
	}
}

function ambCert() {
	if (document.getElementById('sistemaAmbiente').checked) {
		document.getElementById('ambCert').style.display = 'block';
	} else {
		document.getElementById('ambCert').style.display = 'none';
	}
}

function gestQualita() {
	if (document.getElementById('qualCertYes').checked) {
		document.getElementById('qualCertificato').style.display = 'block';
	} else {
		document.getElementById('qualCertificato').style.display = 'none';
	}
}

function qualCert() {
	if (document.getElementById('sistemaQual').checked) {
		document.getElementById('allegaQualita').style.display = 'block';
	} else {
		document.getElementById('allegaQualita').style.display = 'none';
	}	
}

function gestAltro() {
	if (document.getElementById('altroCertYes').checked) {
		document.getElementById('altroCertificato').style.display = 'block';
	} else {
		document.getElementById('altroCertificato').style.display = 'none';
	}
}

function altroCert() {
	if (document.getElementById('sistemaAltro').checked) {
		document.getElementById('altroCert').style.display = 'block';
	} else {
		document.getElementById('altroCert').style.display = 'none';
	}
}

function serviziForniture() {
	if (document.getElementById('serviziForniture').checked) {
		document.getElementById('servForn').style.display = 'block';
	} else {
		document.getElementById('servForn').style.display = 'none';
	}
}

function lavori() {
	if (document.getElementById('lavori').checked) {
		document.getElementById('lavoriSelected').style.display = 'block';
	} else {
		document.getElementById('lavoriSelected').style.display = 'none';
	}
}

function noAttestazione() {
	if (document.getElementById('nonInPossesso').checked) {
		document.getElementById('noAttestazione').style.display = 'block';
		document.getElementById('lavoro1').style.display = 'none';
		document.getElementById('serviziForniture').checked = false;
	} else {
		document.getElementById('noAttestazione').style.display = 'none';
		document.getElementById('lavoro1').style.display = 'block';
		document.getElementById('lavori').checked = true;
	}
}

function deleteBilancio(){
	document.getElementById('uploadBilancio').innerHTML = "";
}

function deleteBuonEsito(){
	document.getElementById('uploadBuonEsito').innerHTML = "";
}

function deleteSOA(){
	document.getElementById('uploadCertSOA').innerHTML = "";
}

function deletePDFA(){
	document.getElementById('invioDomandaNF').innerHTML = "";
}

function deletePDF1(){
	document.getElementById('invioDomandaPF1').innerHTML = "";
}