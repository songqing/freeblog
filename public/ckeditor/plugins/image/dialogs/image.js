﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){var a=function(b,c){var d=1,e=2,f=4,g=8,h=/^\s*(\d+)((px)|\%)?\s*$/i,i=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,j=/^\d+px$/,k=function(){var C=this.getValue(),D=this.getDialog(),E=C.match(h);if(E){if(E[2]=='%')p(D,false);C=E[1];}if(D.lockRatio){var F=D.originalElement;if(F.getCustomData('isReady')=='true')if(this.id=='txtHeight'){if(C&&C!='0')C=Math.round(F.$.width*(C/F.$.height));if(!isNaN(C))D.setValueOf('info','txtWidth',C);}else{if(C&&C!='0')C=Math.round(F.$.height*(C/F.$.width));if(!isNaN(C))D.setValueOf('info','txtHeight',C);}}l(D);},l=function(C){if(!C.originalElement||!C.preview)return 1;C.commitContent(f,C.preview);return 0;};function m(){var C=arguments,D=this.getContentElement('advanced','txtdlgGenStyle');D&&D.commit.apply(D,C);this.foreach(function(E){if(E.commit&&E.id!='txtdlgGenStyle')E.commit.apply(E,C);});};var n;function o(C){if(n)return;n=1;var D=this.getDialog(),E=D.imageElement;if(E){this.commit(d,E);C=[].concat(C);var F=C.length,G;for(var H=0;H<F;H++){G=D.getContentElement.apply(D,C[H].split(':'));G&&G.setup(d,E);}}n=0;};var p=function(C,D){var E=C.originalElement;if(!E)return null;var F=CKEDITOR.document.getById(w);if(E.getCustomData('isReady')=='true'){if(D=='check'){var G=C.getValueOf('info','txtWidth'),H=C.getValueOf('info','txtHeight'),I=E.$.width*1000/E.$.height,J=G*1000/H;C.lockRatio=false;if(!G&&!H)C.lockRatio=true;else if(!isNaN(I)&&!isNaN(J))if(Math.round(I)==Math.round(J))C.lockRatio=true;}else if(D!=undefined)C.lockRatio=D;else C.lockRatio=!C.lockRatio;}else if(D!='check')C.lockRatio=false;if(C.lockRatio)F.removeClass('cke_btn_unlocked');else F.addClass('cke_btn_unlocked');var K=C._.editor.lang.image,L=K[C.lockRatio?'unlockRatio':'lockRatio'];F.setAttribute('title',L);F.getFirst().setText(L);return C.lockRatio;},q=function(C){var D=C.originalElement;if(D.getCustomData('isReady')=='true'){C.setValueOf('info','txtWidth',D.$.width);C.setValueOf('info','txtHeight',D.$.height);}l(C);},r=function(C,D){if(C!=d)return;function E(J,K){var L=J.match(h);if(L){if(L[2]=='%'){L[1]+='%';p(F,false);}return L[1];}return K;};var F=this.getDialog(),G='',H=this.id=='txtWidth'?'width':'height',I=D.getAttribute(H);if(I)G=E(I,G);G=E(D.getStyle(H),G);this.setValue(G);},s,t=function(){var C=this.originalElement;C.setCustomData('isReady','true');C.removeListener('load',t);C.removeListener('error',u);C.removeListener('abort',u);CKEDITOR.document.getById(y).setStyle('display','none');if(!this.dontResetSize)q(this);if(this.firstLoad)CKEDITOR.tools.setTimeout(function(){p(this,'check');
},0,this);this.firstLoad=false;this.dontResetSize=false;},u=function(){var E=this;var C=E.originalElement;C.removeListener('load',t);C.removeListener('error',u);C.removeListener('abort',u);var D=CKEDITOR.getUrl(b.skinPath+'images/noimage.png');if(E.preview)E.preview.setAttribute('src',D);CKEDITOR.document.getById(y).setStyle('display','none');p(E,false);},v=function(C){return C+CKEDITOR.tools.getNextNumber();},w=v('btnLockSizes'),x=v('btnResetSize'),y=v('ImagePreviewLoader'),z=v('ImagePreviewBox'),A=v('previewLink'),B=v('previewImage');return{title:c=='image'?b.lang.image.title:b.lang.image.titleButton,minWidth:420,minHeight:310,onShow:function(){var I=this;I.imageElement=false;I.linkElement=false;I.imageEditMode=false;I.linkEditMode=false;I.lockRatio=true;I.dontResetSize=false;I.firstLoad=true;I.addLink=false;var C=I.getParentEditor(),D=I.getParentEditor().getSelection(),E=D.getSelectedElement(),F=E&&E.getAscendant('a');CKEDITOR.document.getById(y).setStyle('display','none');s=new CKEDITOR.dom.element('img',C.document);I.preview=CKEDITOR.document.getById(B);I.originalElement=C.document.createElement('img');I.originalElement.setAttribute('alt','');I.originalElement.setCustomData('isReady','false');if(F){I.linkElement=F;I.linkEditMode=true;var G=F.getChildren();if(G.count()==1){var H=G.getItem(0).getName();if(H=='img'||H=='input'){I.imageElement=G.getItem(0);if(I.imageElement.getName()=='img')I.imageEditMode='img';else if(I.imageElement.getName()=='input')I.imageEditMode='input';}}if(c=='image')I.setupContent(e,F);}if(E&&E.getName()=='img'&&!E.getAttribute('_cke_realelement')||E&&E.getName()=='input'&&E.getAttribute('type')=='image'){I.imageEditMode=E.getName();I.imageElement=E;}if(I.imageEditMode){I.cleanImageElement=I.imageElement;I.imageElement=I.cleanImageElement.clone(true,true);I.setupContent(d,I.imageElement);p(I,true);}else I.imageElement=C.document.createElement('img');if(!CKEDITOR.tools.trim(I.getValueOf('info','txtUrl'))){I.preview.removeAttribute('src');I.preview.setStyle('display','none');}},onOk:function(){var D=this;if(D.imageEditMode){var C=D.imageEditMode;if(c=='image'&&C=='input'&&confirm(b.lang.image.button2Img)){C='img';D.imageElement=b.document.createElement('img');D.imageElement.setAttribute('alt','');b.insertElement(D.imageElement);}else if(c!='image'&&C=='img'&&confirm(b.lang.image.img2Button)){C='input';D.imageElement=b.document.createElement('input');D.imageElement.setAttributes({type:'image',alt:''});b.insertElement(D.imageElement);
}else{D.imageElement=D.cleanImageElement;delete D.cleanImageElement;}}else{if(c=='image')D.imageElement=b.document.createElement('img');else{D.imageElement=b.document.createElement('input');D.imageElement.setAttribute('type','image');}D.imageElement.setAttribute('alt','');}if(!D.linkEditMode)D.linkElement=b.document.createElement('a');D.commitContent(d,D.imageElement);D.commitContent(e,D.linkElement);if(!D.imageElement.getAttribute('style'))D.imageElement.removeAttribute('style');if(!D.imageEditMode){if(D.addLink){if(!D.linkEditMode){b.insertElement(D.linkElement);D.linkElement.append(D.imageElement,false);}else b.insertElement(D.imageElement);}else b.insertElement(D.imageElement);}else if(!D.linkEditMode&&D.addLink){b.insertElement(D.linkElement);D.imageElement.appendTo(D.linkElement);}else if(D.linkEditMode&&!D.addLink){b.getSelection().selectElement(D.linkElement);b.insertElement(D.imageElement);}},onLoad:function(){var D=this;if(c!='image')D.hidePage('Link');var C=D._.element.getDocument();D.addFocusable(C.getById(x),5);D.addFocusable(C.getById(w),5);D.commitContent=m;},onHide:function(){var C=this;if(C.preview)C.commitContent(g,C.preview);if(C.originalElement){C.originalElement.removeListener('load',t);C.originalElement.removeListener('error',u);C.originalElement.removeListener('abort',u);C.originalElement.remove();C.originalElement=false;}delete C.imageElement;},contents:[{id:'info',label:b.lang.image.infoTab,accessKey:'I',elements:[{type:'vbox',padding:0,children:[{type:'hbox',widths:['280px','110px'],align:'right',children:[{id:'txtUrl',type:'text',label:b.lang.common.url,required:true,onChange:function(){var C=this.getDialog(),D=this.getValue();if(D.length>0){C=this.getDialog();var E=C.originalElement;C.preview.removeStyle('display');E.setCustomData('isReady','false');var F=CKEDITOR.document.getById(y);if(F)F.setStyle('display','');E.on('load',t,C);E.on('error',u,C);E.on('abort',u,C);E.setAttribute('src',D);s.setAttribute('src',D);C.preview.setAttribute('src',s.$.src);l(C);}else if(C.preview){C.preview.removeAttribute('src');C.preview.setStyle('display','none');}},setup:function(C,D){if(C==d){var E=D.getAttribute('_cke_saved_src')||D.getAttribute('src'),F=this;this.getDialog().dontResetSize=true;F.setValue(E);F.setInitValue();F.focus();}},commit:function(C,D){var E=this;if(C==d&&(E.getValue()||E.isChanged())){D.setAttribute('_cke_saved_src',decodeURI(E.getValue()));D.setAttribute('src',decodeURI(E.getValue()));}else if(C==g){D.setAttribute('src','');
D.removeAttribute('src');}},validate:CKEDITOR.dialog.validate.notEmpty(b.lang.image.urlMissing)},{type:'button',id:'browse',style:'display:inline-block;margin-top:10px;',align:'center',label:b.lang.common.browseServer,hidden:true,filebrowser:'info:txtUrl'}]}]},{id:'txtAlt',type:'text',label:b.lang.image.alt,accessKey:'A','default':'',onChange:function(){l(this.getDialog());},setup:function(C,D){if(C==d)this.setValue(D.getAttribute('alt'));},commit:function(C,D){var E=this;if(C==d){if(E.getValue()||E.isChanged())D.setAttribute('alt',E.getValue());}else if(C==f)D.setAttribute('alt',E.getValue());else if(C==g)D.removeAttribute('alt');}},{type:'hbox',widths:['140px','240px'],children:[{type:'vbox',padding:10,children:[{type:'hbox',widths:['70%','30%'],children:[{type:'vbox',padding:1,children:[{type:'text',width:'40px',id:'txtWidth',labelLayout:'horizontal',label:b.lang.image.width,onKeyUp:k,onChange:function(){o.call(this,'advanced:txtdlgGenStyle');},validate:function(){var C=this.getValue().match(i);if(!C)alert(b.lang.image.validateWidth);return!!C;},setup:r,commit:function(C,D,E){var F=this.getValue();if(C==d){if(F)D.setStyle('width',CKEDITOR.tools.cssLength(F));else if(!F&&this.isChanged())D.removeStyle('width');!E&&D.removeAttribute('width');}else if(C==f){var G=F.match(h);if(!G){var H=this.getDialog().originalElement;if(H.getCustomData('isReady')=='true')D.setStyle('width',H.$.width+'px');}else D.setStyle('width',F+'px');}else if(C==g){D.removeAttribute('width');D.removeStyle('width');}}},{type:'text',id:'txtHeight',width:'40px',labelLayout:'horizontal',label:b.lang.image.height,onKeyUp:k,onChange:function(){o.call(this,'advanced:txtdlgGenStyle');},validate:function(){var C=this.getValue().match(i);if(!C)alert(b.lang.image.validateHeight);return!!C;},setup:r,commit:function(C,D,E){var F=this.getValue();if(C==d){if(F)D.setStyle('height',CKEDITOR.tools.cssLength(F));else if(!F&&this.isChanged())D.removeStyle('height');if(!E&&C==d)D.removeAttribute('height');}else if(C==f){var G=F.match(h);if(!G){var H=this.getDialog().originalElement;if(H.getCustomData('isReady')=='true')D.setStyle('height',H.$.height+'px');}else D.setStyle('height',F+'px');}else if(C==g){D.removeAttribute('height');D.removeStyle('height');}}}]},{type:'html',style:'margin-top:10px;width:40px;height:40px;',onLoad:function(){var C=CKEDITOR.document.getById(x),D=CKEDITOR.document.getById(w);if(C){C.on('click',function(E){q(this);E.data.preventDefault();},this.getDialog());C.on('mouseover',function(){this.addClass('cke_btn_over');
},C);C.on('mouseout',function(){this.removeClass('cke_btn_over');},C);}if(D){D.on('click',function(E){var J=this;var F=p(J),G=J.originalElement,H=J.getValueOf('info','txtWidth');if(G.getCustomData('isReady')=='true'&&H){var I=G.$.height/G.$.width*H;if(!isNaN(I)){J.setValueOf('info','txtHeight',Math.round(I));l(J);}}E.data.preventDefault();},this.getDialog());D.on('mouseover',function(){this.addClass('cke_btn_over');},D);D.on('mouseout',function(){this.removeClass('cke_btn_over');},D);}},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+b.lang.image.unlockRatio+'" class="cke_btn_locked" id="'+w+'" role="button"><span class="cke_label">'+b.lang.image.unlockRatio+'</span></a>'+'<a href="javascript:void(0)" tabindex="-1" title="'+b.lang.image.resetSize+'" class="cke_btn_reset" id="'+x+'" role="button"><span class="cke_label">'+b.lang.image.resetSize+'</span></a>'+'</div>'}]},{type:'vbox',padding:1,children:[{type:'text',id:'txtBorder',width:'60px',labelLayout:'horizontal',label:b.lang.image.border,'default':'',onKeyUp:function(){l(this.getDialog());},onChange:function(){o.call(this,'advanced:txtdlgGenStyle');},validate:CKEDITOR.dialog.validate.integer(b.lang.image.validateBorder),setup:function(C,D){if(C==d){var E,F=D.getStyle('border-width');F=F&&F.match(/^(\d+px)(?: \1 \1 \1)?$/);E=F&&parseInt(F[1],10);isNaN(parseInt(E,10))&&(E=D.getAttribute('border'));this.setValue(E);}},commit:function(C,D,E){var F=parseInt(this.getValue(),10);if(C==d||C==f){if(!isNaN(F)){D.setStyle('border-width',CKEDITOR.tools.cssLength(F));D.setStyle('border-style','solid');}else if(!F&&this.isChanged()){D.removeStyle('border-width');D.removeStyle('border-style');D.removeStyle('border-color');}if(!E&&C==d)D.removeAttribute('border');}else if(C==g){D.removeAttribute('border');D.removeStyle('border-width');D.removeStyle('border-style');D.removeStyle('border-color');}}},{type:'text',id:'txtHSpace',width:'60px',labelLayout:'horizontal',label:b.lang.image.hSpace,'default':'',onKeyUp:function(){l(this.getDialog());},onChange:function(){o.call(this,'advanced:txtdlgGenStyle');},validate:CKEDITOR.dialog.validate.integer(b.lang.image.validateHSpace),setup:function(C,D){if(C==d){var E,F,G,H=D.getStyle('margin-left'),I=D.getStyle('margin-right');H=H&&H.match(j);I=I&&I.match(j);F=parseInt(H,10);G=parseInt(I,10);E=F==G&&F;isNaN(parseInt(E,10))&&(E=D.getAttribute('hspace'));this.setValue(E);}},commit:function(C,D,E){var F=parseInt(this.getValue(),10);if(C==d||C==f){if(!isNaN(F)){D.setStyle('margin-left',CKEDITOR.tools.cssLength(F));
D.setStyle('margin-right',CKEDITOR.tools.cssLength(F));}else if(!F&&this.isChanged()){D.removeStyle('margin-left');D.removeStyle('margin-right');}if(!E&&C==d)D.removeAttribute('hspace');}else if(C==g){D.removeAttribute('hspace');D.removeStyle('margin-left');D.removeStyle('margin-right');}}},{type:'text',id:'txtVSpace',width:'60px',labelLayout:'horizontal',label:b.lang.image.vSpace,'default':'',onKeyUp:function(){l(this.getDialog());},onChange:function(){o.call(this,'advanced:txtdlgGenStyle');},validate:CKEDITOR.dialog.validate.integer(b.lang.image.validateVSpace),setup:function(C,D){if(C==d){var E,F,G,H=D.getStyle('margin-top'),I=D.getStyle('margin-bottom');H=H&&H.match(j);I=I&&I.match(j);F=parseInt(H,10);G=parseInt(I,10);E=F==G&&F;isNaN(parseInt(E,10))&&(E=D.getAttribute('vspace'));this.setValue(E);}},commit:function(C,D,E){var F=parseInt(this.getValue(),10);if(C==d||C==f){if(!isNaN(F)){D.setStyle('margin-top',CKEDITOR.tools.cssLength(F));D.setStyle('margin-bottom',CKEDITOR.tools.cssLength(F));}else if(!F&&this.isChanged()){D.removeStyle('margin-top');D.removeStyle('margin-bottom');}if(!E&&C==d)D.removeAttribute('vspace');}else if(C==g){D.removeAttribute('vspace');D.removeStyle('margin-top');D.removeStyle('margin-bottom');}}},{id:'cmbAlign',type:'select',labelLayout:'horizontal',widths:['35%','65%'],style:'width:90px',label:b.lang.image.align,'default':'',items:[[b.lang.common.notSet,''],[b.lang.image.alignLeft,'left'],[b.lang.image.alignRight,'right']],onChange:function(){l(this.getDialog());o.call(this,'advanced:txtdlgGenStyle');},setup:function(C,D){if(C==d){var E=D.getStyle('float');switch(E){case 'inherit':case 'none':E='';}!E&&(E=(D.getAttribute('align')||'').toLowerCase());this.setValue(E);}},commit:function(C,D,E){var F=this.getValue();if(C==d||C==f){if(F)D.setStyle('float',F);else D.removeStyle('float');if(!E&&C==d){F=(D.getAttribute('align')||'').toLowerCase();switch(F){case 'left':case 'right':D.removeAttribute('align');}}}else if(C==g)D.removeStyle('float');}}]}]},{type:'vbox',height:'250px',children:[{type:'html',style:'width:95%;',html:'<div>'+CKEDITOR.tools.htmlEncode(b.lang.common.preview)+'<br>'+'<div id="'+y+'" class="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div>'+'<div id="'+z+'" class="ImagePreviewBox"><table><tr><td>'+'<a href="javascript:void(0)" target="_blank" onclick="return false;" id="'+A+'">'+'<img id="'+B+'" alt="" /></a>'+(b.config.image_previewText||'FreeBlog是/"疯狂的Blog小组(卫聪、闫海静)出品，欢迎使用！/"')+'</td></tr></table></div></div>'}]}]}]},{id:'Link',label:b.lang.link.title,padding:0,elements:[{id:'txtUrl',type:'text',label:b.lang.common.url,style:'width: 100%','default':'',setup:function(C,D){if(C==e){var E=D.getAttribute('_cke_saved_href');
if(!E)E=D.getAttribute('href');this.setValue(E);}},commit:function(C,D){var E=this;if(C==e)if(E.getValue()||E.isChanged()){D.setAttribute('_cke_saved_href',decodeURI(E.getValue()));D.setAttribute('href','javascript:void(0)/*'+CKEDITOR.tools.getNextNumber()+'*/');if(E.getValue()||!b.config.image_removeLinkByEmptyURL)E.getDialog().addLink=true;}}},{type:'button',id:'browse',filebrowser:{action:'Browse',target:'Link:txtUrl',url:b.config.filebrowserImageBrowseLinkUrl||b.config.filebrowserBrowseUrl},style:'float:right',hidden:true,label:b.lang.common.browseServer},{id:'cmbTarget',type:'select',label:b.lang.common.target,'default':'',items:[[b.lang.common.notSet,''],[b.lang.common.targetNew,'_blank'],[b.lang.common.targetTop,'_top'],[b.lang.common.targetSelf,'_self'],[b.lang.common.targetParent,'_parent']],setup:function(C,D){if(C==e)this.setValue(D.getAttribute('target'));},commit:function(C,D){if(C==e)if(this.getValue()||this.isChanged())D.setAttribute('target',this.getValue());}}]},{id:'Upload',hidden:true,filebrowser:'uploadButton',label:b.lang.image.upload,elements:[{type:'file',id:'upload',label:b.lang.image.btnUpload,style:'height:40px',size:38},{type:'fileButton',id:'uploadButton',filebrowser:'info:txtUrl',label:b.lang.image.btnUpload,'for':['Upload','upload']}]},{id:'advanced',label:b.lang.common.advancedTab,elements:[{type:'hbox',widths:['50%','25%','25%'],children:[{type:'text',id:'linkId',label:b.lang.common.id,setup:function(C,D){if(C==d)this.setValue(D.getAttribute('id'));},commit:function(C,D){if(C==d)if(this.getValue()||this.isChanged())D.setAttribute('id',this.getValue());}},{id:'cmbLangDir',type:'select',style:'width : 100px;',label:b.lang.common.langDir,'default':'',items:[[b.lang.common.notSet,''],[b.lang.common.langDirLtr,'ltr'],[b.lang.common.langDirRtl,'rtl']],setup:function(C,D){if(C==d)this.setValue(D.getAttribute('dir'));},commit:function(C,D){if(C==d)if(this.getValue()||this.isChanged())D.setAttribute('dir',this.getValue());}},{type:'text',id:'txtLangCode',label:b.lang.common.langCode,'default':'',setup:function(C,D){if(C==d)this.setValue(D.getAttribute('lang'));},commit:function(C,D){if(C==d)if(this.getValue()||this.isChanged())D.setAttribute('lang',this.getValue());}}]},{type:'text',id:'txtGenLongDescr',label:b.lang.common.longDescr,setup:function(C,D){if(C==d)this.setValue(D.getAttribute('longDesc'));},commit:function(C,D){if(C==d)if(this.getValue()||this.isChanged())D.setAttribute('longDesc',this.getValue());}},{type:'hbox',widths:['50%','50%'],children:[{type:'text',id:'txtGenClass',label:b.lang.common.cssClass,'default':'',setup:function(C,D){if(C==d)this.setValue(D.getAttribute('class'));
},commit:function(C,D){if(C==d)if(this.getValue()||this.isChanged())D.setAttribute('class',this.getValue());}},{type:'text',id:'txtGenTitle',label:b.lang.common.advisoryTitle,'default':'',onChange:function(){l(this.getDialog());},setup:function(C,D){if(C==d)this.setValue(D.getAttribute('title'));},commit:function(C,D){var E=this;if(C==d){if(E.getValue()||E.isChanged())D.setAttribute('title',E.getValue());}else if(C==f)D.setAttribute('title',E.getValue());else if(C==g)D.removeAttribute('title');}}]},{type:'text',id:'txtdlgGenStyle',label:b.lang.common.cssStyle,'default':'',setup:function(C,D){if(C==d){var E=D.getAttribute('style');if(!E&&D.$.style.cssText)E=D.$.style.cssText;this.setValue(E);var F=D.$.style.height,G=D.$.style.width,H=(F?F:'').match(h),I=(G?G:'').match(h);this.attributesInStyle={height:!!H,width:!!I};}},onChange:function(){o.call(this,['info:cmbFloat','info:cmbAlign','info:txtVSpace','info:txtHSpace','info:txtBorder','info:txtWidth','info:txtHeight']);l(this);},commit:function(C,D){if(C==d&&(this.getValue()||this.isChanged()))D.setAttribute('style',this.getValue());}}]}]};};CKEDITOR.dialog.add('image',function(b){return a(b,'image');});CKEDITOR.dialog.add('imagebutton',function(b){return a(b,'imagebutton');});})();
