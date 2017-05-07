/*
    **** BBTrello ****

    v0.5 - 05/08/2017
    By Breaking Bug - IBM

    Developers:
        Dante Martinelli
        Adriano Paladini

*/






//     // Inject Buttons
//     injectButtons = function() {
//         var windowHeader = getClassEl('window-header')[0];
//         if(windowHeader != undefined){
//             var buttonArea = getClassEl('scrummButtons',windowHeader);
//             if(buttonArea.length==0){

//                 var buttonArea = createEl('div','scrummButtons');
//                 windowHeader.appendChild(buttonArea);

//                 var buttonArea1 = createEl('div');
//                 buttonArea.appendChild(buttonArea1);
//                 var buttonArea2 = createEl('div');
//                 buttonArea.appendChild(buttonArea2);
//                 var buttonArea3 = createEl('div');
//                 buttonArea.appendChild(buttonArea3);

//                 var title = createEl('span','scrummButtonsTitle','Estimated');
//                 buttonArea1.appendChild(title);
//                 // var title = createEl('span','scrummButtonsTitle','Consumed');
//                 // buttonArea2.appendChild(title);

//                 var button = createEl('a','scrummButtonDel','X',function(){changeEstimatedPoint()});
//                 buttonArea1.appendChild(button);
//                 // var button = createEl('a','scrummButtonDel','X',function(){changeConsumedPoint()});
//                 // buttonArea2.appendChild(button);
                
//                 var validNumbers = [0,0.5,1,2,3,5,8,13,21,'?'];

//                 validNumbers.forEach(function(vn){
//                     var button = createEl('a','scrummButton',vn,function(){changeEstimatedPoint(vn)});
//                     buttonArea1.appendChild(button);
//                     // var button = createEl('a','scrummButton',vn,function(){changeConsumedPoint(vn)});
//                     // buttonArea2.appendChild(button);
//                 });

//                 var button = createEl('a','scrummButtonNew','New',function(){changeCardIntroduction()});
//                 buttonArea3.appendChild(button);
//                 // var button = createEl('a','scrummButtonNew','Normal',function(){changeCardPriority(0)});
//                 // buttonArea3.appendChild(button);
//                 // var button = createEl('a','scrummButtonNew','High',function(){changeCardPriority(1)});
//                 // buttonArea3.appendChild(button);
//                 // var button = createEl('a','scrummButtonNew','Critical',function(){changeCardPriority(2)});
//                 // buttonArea3.appendChild(button);
//             }
//         }
//     };

//     changeConsumedPoint = function(point) {
//         var text = document.getElementsByClassName('js-card-detail-title-input')[0];
//         if(text != undefined) {
//             var title = text.value;

//             rx = new RegExp("^\(\d{1,2}([.][\d])?\)","g");
//             title.replace(rx,"HUA");
//             text.value = title;

//             // var validNumbers = [0,0.5,1,2,3,5,8,13,21,'?'];
//             // validNumbers.forEach(function(vn){
//             //     if(title.startsWith('('+vn+') ')){
//             //         title = title.replace('('+vn+') ','');
//             //     }
//             //     if(title.startsWith('('+vn+')')){
//             //         title = title.replace('('+vn+')','');
//             //     }
//             // });
//             // if(point==null) {
//             //     text.value = title;
//             // }else{
//             //     text.value = '('+point+') '+title;
//             // }
//             text.click();
//             text.focus();
//         }
//     };

//     changeEstimatedPoint = function(point) {
//         var text = document.getElementsByClassName('js-card-detail-title-input')[0];
//         if(text != undefined) {
//             var title = text.value;
//             var validNumbers = [0,0.5,1,2,3,5,8,13,21,'?'];
//             validNumbers.forEach(function(vn){
//                 if(title.startsWith('('+vn+')')){
//                     title = title.replace('('+vn+')','');
//                 }
//             });
//             if(point==null) {
//                 text.value = title;
//             }else{
//                 text.value = '('+point+') '+title;
//             }
//             text.click();
//             text.focus();
//         }
//     };

//     //  ^\(\d{1,2}([.][\d])?\)
//     //  \[\d{1,2}([.][\d])?\]





//     changeCardIntroduction = function() {
//         var el = getClassEl('js-card-detail-title-input')[0];
//         if(el != undefined) {
//             var title = text.value;
//             if(title.endsWith(' (n)')){
//                 text.value = title.replace(' (n)','');
//             }else{
//                 text.value = title + ' (n)';
//             }
//             text.click();
//             text.focus();
//         }
//     };

//     changeCardPriority = function(type) {
//         var el = getClassEl('js-card-detail-title-input')[0];
//         if(el != undefined) {
//             var title = text.value;
//             if(title.endsWith('{1}') || title.endsWith('{2}') || title.endsWith('{3}')){
//                 text.value = title.replace('{}','');
//             }else{
//                 text.value = title + '{}';
//             }
//             text.click();
//             text.focus();
//         }
//     };

    




//   // Get Columns
  







// getCardsRef = function(col) {
//     return document.getElementsByClassName('list-card-title');
// };
// removePoint = function(){
//     var text = document.getElementsByClassName('js-card-detail-title-input')[0];
//     if(text != undefined) {
//       var title = text.value;
//       var validNumbers = [0,0.5,1,2,3,5,8,13,21,'?'];
//       validNumbers.forEach(function(vn){
//         if(title.startsWith('('+vn+') ')){
//           text.value = title.replace('('+vn+') ','');
//       }
//   });
//       var ref = window.location.href.split('-')[0];
//       var cards = getCardsRef();
//       Array.from(cards).forEach(function(card){
//         var href = card.href.split('-')[0];
//         if(href==ref){
//           card.removeAttribute('point');
//           var badge = card.parentNode.getElementsByClassName('scrummPoints')[0]
//           if(badge) {
//             badge.parentNode.removeChild(badge);
//         }
//     }
// });
//       text.click();
//       text.focus();
//   }
// };

// addBadgePoints = function(badge,point) {
//     bd = badge.getElementsByClassName('scrummPoints')[0];
//     if(bd == undefined){
//       var span = document.createElement('span');
//       span.className = 'scrummPoints';
//       span.innerText = point;
//       badge.insertBefore(span, badge.firstChild);
//   } else {
//       bd.innerText = point;
//   }
// };

// addBadgeStory = function(badge,point) {
//     bd = badge.getElementsByClassName('card-short-custom-id')[0];
//     if(bd == undefined){
//       var span = document.createElement('span');
//       span.className = 'card-short-custom-id';
//       span.innerText = point;

//       badge.parentNode.insertBefore(span, badge);

//       //badge.insertBefore(span, badge.parentNode);
//   } else {
//       bd.innerText = point;
//   }
// };

// renderCard = function(card,title){
//     var titleStr = title.innerHTML.split('</span>')[1];
//     var cardNumber = title.innerHTML.split('</span>')[0]+'</span>';
//     var point = null;
//     var story = null;
//     var validNumbers = [0,0.5,1,2,3,5,8,13,21,'?'];

//     validNumbers.forEach(function(vn){
//         if(titleStr.startsWith('('+vn+') ')){
//             titleStr = titleStr.replace('('+vn+') ','');
//             title.setAttribute('point',vn);
//         }
//     });

//     if(title.getAttribute('point')>0){
//         point = title.getAttribute('point');
//     }
//     if(titleStr.endsWith(' (n)')){
//         titleStr = titleStr.replace(' (n)','');
//         card.classList.add("newCard");
//     }
//     if(titleStr.match(/(#\d*\s-\s)/)){
//         story = titleStr.match(/(#\d*\s-\s)/)[1];
//         titleStr = titleStr.replace(story,'');
//         story = story.replace(' - ','');
//         story = story.replace('#',''); 
//     }
//     title.innerHTML = cardNumber + titleStr;
//     return [
//         (point==null) ? null : parseFloat(point),
//         story
//     ]
// };
// getTitle = function(card) {
//     return card.getElementsByClassName('list-card-title')[0];
// };
// getBadge = function(card) {
//     return card.getElementsByClassName('badges')[0];
// };
// getStoryNumberArea = function(card) {
//     return card.getElementsByClassName('list-card-title')[0];
// };
// getPoints = function(cards) {
//     var totalCol = 0;
//     Array.from(cards).forEach(function(card){
//         var title = getTitle(card);
//         var badge = getBadge(card);
//         var storyNumberArea = getStoryNumberArea(card);
//         var result = renderCard(card,title);
//         var point = result[0];
//         var story = result[1];
//         if(point!=null){
//             totalCol += point;
//             addBadgePoints(badge,point);
//         }
//         if(story!=null) {
//             addBadgeStory(storyNumberArea,story);
//         }
//     });
//     return totalCol;
// };
// getHeader = function(col) {
//     return col.getElementsByClassName('list-header-num-cards')[0];
// };
// getCards = function(col) {
//     return col.getElementsByClassName('list-card');
// };
// renderCols = function(cols) {
//     Array.from(cols).forEach(function(col){
//       var header = getHeader(col);
//       var cards = getCards(col);
//       var points = getPoints(cards);
//       header.innerHTML = cards.length+' cards<span class="headerPoints">'+points+' points</span>';
//   });
// };
// getCollumns = function() {
//     var board = document.getElementById('board');
//     if(board==null){ return null; }
//     return board.getElementsByClassName('js-list');
// };





















(function(){

    /****** Util functions ******/
        // Debug will print on console
        debug = function(str) { console.log(str) };
        // Delay a execution for 0.5 seconds
        delay = function(fn,time) { setTimeout(fn,time*1000) };
        // Execute a function on Return key event
        key = function(ev, fn) {if(ev.keyCode == 13){ fn() }};
        // Get Element By Class
        getClassEl = function(className,el) { if(el==undefined){ el=document }; return el.getElementsByClassName(className) };
        // Get Element By Id
        getIdEl = function(id,el) { if(el==undefined){ el=document }; return el.getElementById(id) };
        // Create Element
        createEl = function(type,params) {
            var el = document.createElement(type);
            for (var key in params) { if (params.hasOwnProperty(key)) { el[key] = params[key] } }
            return el;
        };
        // Get Element by Class name
        getElByClass = function(className, parent) { if(parent==undefined){ parent=document }; return parent.getElementsByClassName(className) };
        // Remove an element from DOM
        destroy = function(el) { if(el!=null) { el.parentNode.removeChild(el) } };
        // Convert String to hash
        String.prototype.hashCode = function() {
            var hash = 0, i, chr, len;
            if (this.length === 0) return hash;
            for (i = 0, len = this.length; i < len; i++) { chr = this.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
            return hash;
        };
        // storage 
        storage = {
            clear: function(){ window.localStorage.clear() },
            get: function(key, defaultValue){ var value = window.localStorage.getItem(key); if (value == null){ return (typeof(defaultValue)!="undefined") ? defaultValue : null } else { return JSON.parse(value) }},
            has: function( key ){ return (window.localStorage.getItem(key) != null) },
            remove: function( key ){ window.localStorage.removeItem(key) },
            set: function( key, value ){ window.localStorage.setItem(key, JSON.stringify(value)) }
        };
        // Get board id
        boardId = function() {
            if (window.location.href.indexOf('/b/') > 0) { return window.location.href.split('/b/')[1].split('/')[0] }
            return null;
        }
    /****** Util functions ******/

    /****** Create Settings menu ******/
        injectSettingsBBTrello = function() {
            if (getIdEl('BBTrelloSettings') != null) { return }
            area = getClassEl('header-user')[0];
            params = { id: 'BBTrelloSettings', className: 'header-btn', onclick: function(){ openBBTrelloSettings() } };
            button = createEl('a', params)
            params = { className: 'header-btn-icon icon-lg icon-gear light' };
            icon = createEl('span', params)
            button.appendChild(icon);
            area.appendChild(button);
        };
        injectSettingsPopupBBTrello = function(area) {
            el1 = createEl('div',{});
            el1.setAttribute('data-reactroot','');
            el2 = createEl('div',{className:'pop-over-header js-pop-over-header'});
            el3 = createEl('span',{className:'pop-over-header-title'});
            el3.innerHTML = 'BBTrello Settings';
            el4 = createEl('a',{className:'pop-over-header-close-btn icon-sm icon-close'});
            el4.href = '#';
            el4.onclick = openBBTrelloSettings;
            el2.appendChild(el3);
            el2.appendChild(el4);
            el1.appendChild(el2);
            el5 = createEl('div',{});
            el6 = createEl('div',{className:'pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent', style:'max-height: 444px;'});
            el7 = createEl('div',{className:'js-fill-tip'});
            el8 = createEl('ul',{});
            el8.appendChild(createSettingsItem('useColumnsHider','Show options to hide columns'));
            el8.appendChild(createSettingsItem('useLabels','Show title in labels'));
            el8.appendChild(createSettingsItem('useTotalCards','Show total cards in columns'));
            el8.appendChild(createSettingsItem('useProgress','Show progress of tasks in columns'));
            el8.appendChild(createSettingsItem('useSeparators','Show card separator'));
            el8.appendChild(createSettingsItem('userCardsId','Show card id'));
            el8.appendChild(createSettingsItem('useWIPLimit','Add WIP limit'));
            el8.appendChild(createSettingsItem('useStoryNumbers','Use story numbers'));
            el8.appendChild(createSettingsItem('useScrumm','Add scrumm capabilities'));
            el8.appendChild(createSettingsItem('useLeftLabels','Show label on left'));
            el8.appendChild(createSettingsItem('useTransparentBox','Use glass columns'));
            el8.appendChild(createSettingsItem('useDarkBox','Use dark columns'));
            el8.appendChild(createSettingsItem('useMarkdown','Use Markdown on Title'));
            el7.appendChild(el8);
            el6.appendChild(el7);
            el5.appendChild(el6);
            area.appendChild(el1);
            area.appendChild(el5);
        };
        createSettingsItem = function(key,title) {
            li = createEl('li',{});
            lb = createEl('label',{});
            ck = createEl('input',{type:'checkbox'});
            if (storage.get("BBTrello-"+key,false)) {
                ck.checked = 'checked';
            }
            ck.onchange = function(){ saveSettingsItem(this,key) };
            tx = createEl('span',{});
            tx.innerHTML = ' ' + title;
            lb.appendChild(ck);key
            lb.appendChild(tx);
            li.appendChild(lb);
            return li;
        };
        saveSettingsItem = function(input,key) {
            debug("BBTrello-"+key);
            debug(input.checked)
            BBTrelloOptions[key] = input.checked
            storage.set("BBTrello-"+key, input.checked);
        };
        openBBTrelloSettings = function() {
            popover = getClassEl('pop-over')[0];
            popover.innerHTML = '';
            if (popover.classList.contains('is-shown')) {
                popover.classList.remove('is-shown');
            } else {
                injectSettingsPopupBBTrello(popover);
                popover.style.width = '300px';
                popover.style.left = 'auto';
                popover.style.right = '4px';
                popover.style.top = '41px';
                popover.classList.add('is-shown');
            }
        };
    /****** Create Settings menu ******/

    /****** Make columns filter ******/
        columnsFilterToggleBBTrello = function(el) {
            id = el.id.split('#')[1];
            btn = getIdEl('BBTrelloCFButton#'+id);
            board = getIdEl('BBTrelloCFBoard#'+id);
            if (board.style.display == 'none') {
                board.style.display = 'inline-block';
                btn.className = 'show-list';
                storage.set('BBTrelloCF#'+boardId()+'-'+id, true);
            } else {
                board.style.display = 'none';
                btn.className = 'hide-list';
                storage.set('BBTrelloCF#'+boardId()+'-'+id, false);
            }
        };
        columnsFilterBBTrello = function() {
            if (getIdEl('BBTrelloCF') != null) { return }
            var board = getIdEl('board');
            if (board == null){ return }
            var columns = getClassEl('js-list list-wrapper');
            var injectArea = getClassEl('board-header-btns')[1];
            params = {
                id: 'BBTrelloCF'
            };
            var ul = createEl('ul',params);
            injectArea.parentNode.insertBefore(ul, injectArea);
            var showingAll = true;
            Array.from(columns).forEach(function(col){
                title = getClassEl('list-header-name-assist',col)[0].innerHTML;
                id = title.hashCode();
                col.setAttribute('id', 'BBTrelloCFBoard#'+id);
                show = storage.get('BBTrelloCF#'+boardId()+'-'+id, true);
                if (show) {
                    classN = 'show-list';
                } else {
                    showingAll = false;
                    classN = 'hide-list';
                    board = getIdEl('BBTrelloCFBoard#'+id);
                    board.style.display = 'none';
                }
                params = {
                    id: 'BBTrelloCFButton#'+id,
                    className: classN,
                    innerHTML: title,
                    onclick: function(){columnsFilterToggleBBTrello(this)}
                };
                li = createEl('li',params);
                ul.appendChild(li);
            });
        };
        columnsFilterRemoveBBTrello = function() {
            el = getIdEl('BBTrelloCF');
            destroy(el);
            var columns = getClassEl('js-list list-wrapper');
            Array.from(columns).forEach(function(col){
                col.style.display = 'inline-block';
            });
        };
    /****** Make columns filter ******/

    /****** Show title in labels ******/
        labelsBBTrello = function() {
            if(getIdEl('BBTrelloLB')!=null) { return }
            style = createEl('style',{id:'BBTrelloLB'});
            document.head.appendChild(style);
            style.sheet.insertRule(".card-label.mod-card-front { \
                height: auto !important; \
                font-size: 10px; \
                min-width: 1px !important; \
                max-width: 1000px; \
                width: auto !important; \
                line-height:14px !important; \
                padding-left: 4px !important; \
                padding-right: 4px !important; \
            }", 0);
        };
        labelsRemoveBBTrello = function() {
            el = getIdEl('BBTrelloLB');
            destroy(el);
        };
    /****** Show title in labels ******/

    /****** Show total cards in columns ******/
        totalCardsBBTrello = function() {
            if(getIdEl('BBTrelloTC')!=null) { return }
            style = createEl('style',{id:'BBTrelloTC'});
            document.head.appendChild(style);
            style.sheet.insertRule(".list-header-num-cards { \
                display: block !important; \
            }", 0);
        };
        totalCardsRemoveBBTrello = function() {
            el = getIdEl('BBTrelloTC');
            destroy(el);
        };
    /****** Show total cards in columns ******/

    /****** Show progress of tasks ******/
        progressBBTrello = function() {
            var columns = getClassEl('js-list list-wrapper');
            Array.from(columns).forEach(function(col){
                el = getClassEl('BBTrelloPR',col)[0];
                if(el!=undefined) {
                    destroy(el);
                }
                por = getTasksProgressBBTrello(col);
                if (por != null) {
                    progress = createEl('div',{className: 'BBTrelloPR'});
                    area = getClassEl('list-header-extras', col)[0];
                    area.parentNode.insertBefore(progress, area);
                    el = progress;
                    span = createEl('span');
                    span.innerHTML = 'Task '+por+'%';
                    progress.appendChild(span);
                    div = createEl('div',{className:'BBTrelloPR-progress'});
                    progress.appendChild(div);
                    if (por == 100) {
                        subdiv = createEl('div',{className:'BBTrelloPR-progress-active100'});
                    } else {
                        subdiv = createEl('div',{className:'BBTrelloPR-progress-active'});
                        subdiv.style.width = por+'%';
                    }
                    div.appendChild(subdiv);
                }
            });
        };
        getTasksProgressBBTrello = function(col) {
            total = 0;
            done = 0;
            cards = getClassEl('list-card',col);
            Array.from(cards).forEach(function(cd){
                badge = getClassEl('badges',cd);
                Array.from(badge).forEach(function(bg){
                    itens = getClassEl('badge',bg);
                    Array.from(itens).forEach(function(it){
                        if (it.title == 'Checklist items') {
                            val = getClassEl('badge-text',it)[0].innerHTML;
                            total += parseInt(val.split('/')[1]);
                            done += parseInt(val.split('/')[0]);
                        }
                    });
                });
            })
            if (total == 0) {
                return null;
            }
            return parseInt((done/total) * 100);
        };
        progressRemoveBBTrello = function() {
            els = getClassEl('BBTrelloPR');
            Array.from(els).forEach(function(el){
                destroy(el)
            });
        };
    /****** Show progress of tasks ******/
    
    /****** Show card separators ******/
        separatorsBBTrello = function() {
            cards = getClassEl('list-card');
            Array.from(cards).forEach(function(cd){            
                titleArea = getClassEl('list-card-title',cd)[0];
                if (titleArea != undefined) {
                    title = titleArea.innerText;
                    if (title.startsWith('***') && title.endsWith('***')) {
                        title = title.replace('***','<h1>').replace('***','</h1>').trim();
                        titleArea.innerHTML = title;
                        cd.setAttribute("BBBTrelloSP", "true");
                        cd.style = "background-color: transparent !important; border-bottom: 0 !important;";
                    }
                }
            });
        };
        separatorsRemoveBBTrello = function() {
            card = getClassEl('list-card');
            Array.from(card).forEach(function(cd){
                if (cd.getAttribute("BBBTrelloSP") == "true") {
                    cd.removeAttribute("BBBTrelloSP")
                    cd.removeAttribute("Style");
                    titleArea = getClassEl('list-card-title',cd)[0];
                    titleArea.innerHTML = titleArea.innerHTML.replace('<h1>','***').replace('</h1>','***');
                }
            });
        };
    /****** Show card separators ******/

    /****** Show card ids ******/
        cardsIdBBTrello = function() {
            if(getIdEl('BBTrelloCI')!=null) { return }
            style = createEl('style',{id:'BBTrelloCI'});
            document.head.appendChild(style);
            style.sheet.insertRule(".card-short-id { \
                    display: inline-block !important; \
                    color: rgb(115, 115, 115); \
                    cursor: default; \
                    float: left; \
                    font-size: 11px; \
                    line-height: 16px; \
                    height: 16px; \
                    margin-right: 4px; \
                    position: relative; \
                    text-decoration: none; \
                    border-width: 1px; \
                    border-style: solid; \
                    border-color: rgb(217, 217, 217) rgb(217, 217, 217) rgb(211, 211, 211); \
                    border-image: initial; \
                    border-radius: 2px; \
                    padding: 0px 4px; \
            }", 0);
        };
        cardsIdRemoveBBTrello = function() {
            el = getIdEl('BBTrelloCI');
            destroy(el);
        };

    /****** Show card ids ******/

    /****** Show WIP Limit ******/
        wipLimitBBTrello = function() {
            wipLimitRemoveBBTrello()
            var columns = getClassEl('js-list list-wrapper');
            Array.from(columns).forEach(function(col){
                titleArea = getClassEl('list-header-name-assist',col)[0];
                title = titleArea.innerText;
                wip = title.match(/\[[0-9]+\]/);
                if (wip != null) {
                    wip = wip[0];
                    title = title.replace(wip,'');
                    wip = wip.replace('[','').replace(']','');
                    col.setAttribute('wip', wip);
                    wipLimit = parseInt(wip);
                    totalCards = getClassEl('list-card',col).length;
                    if (totalCards==wipLimit) {
                        el = getClassEl('list-header', col)[0];
                        el.classList.add('BBTrelloWP-limit');
                    }
                    if (totalCards>wipLimit) {
                        el = getClassEl('list-header', col)[0];
                        el.classList.add('BBTrelloWP-over');
                    }
                }
            });
        };
        wipLimitRemoveBBTrello = function() {
            var columns = getClassEl('js-list list-wrapper');
            Array.from(columns).forEach(function(col){
                el = getClassEl('list-header', col)[0];
                el.classList.remove('BBTrelloWP-limit');
                el.classList.remove('BBTrelloWP-over');
            });
        };
    /****** Show WIP Limit ******/















    /****** Use Scrumm ******/
        filterTitleBBTrello = function(title) {
            cardNumber = new RegExp(/(<span[^>]*>)[^<]*(<\/span>)/,'g');
            cardParent = new RegExp(/#\d{1,2}([.][\d])?/,'g');
            estimated = new RegExp(/\(\d{1,2}([.][\d])?\)|\(\?\)/,'g');
            consumed = new RegExp(/\[\d{1,2}([.][\d])?\]|\[\?\]/,'g');
            separator = new RegExp(/^\s*-\s*/,'g');
            priority = new RegExp(/\{\d\}/,'g');
            newCard = new RegExp(/\([r|R]\)|\([n|N]\)/,'g');

            title = title.replace(cardNumber,'')
                .replace(cardParent,'')
                .replace(estimated,'')
                .replace(consumed,'')
                .replace(separator,'')
                .replace(priority,'')
                .replace(newCard,'');

            return title;
        };
     



        scrummBBTrello = function() {
            var cards = getClassEl('list-card');
            Array.from(cards).forEach(function(card){
                var title = getClassEl('list-card-title',card)[0];
                var fakeTitle = getClassEl('BBTrelloFakeTitle',card)[0];
                if (fakeTitle == undefined) {
                    var params = {
                        className: 'BBTrelloFakeTitle'
                    };
                    fakeTitle = createEl('a',params);
                    title.parentNode.insertBefore(fakeTitle, title);
                }
                title.style.display = 'none';
                //cardNumbers
                //cardParent
                //estimated
                //consumed
                //priority
                //newcard

                title = filterTitleBBTrello(title.innerHTML);
                fakeTitle.innerHTML = title;
            });
        };


    /****** Use Scrumm ******/





    /****** Use AlphaBox ******/
        alphaBoxBBTrello = function() {
            var board = getIdEl('board');
            if (board != null) {
                board.classList.add('BBTrelloAlpha');
            }
        };
        alphaBoxRemoveBBTrello = function() {
            var board = getIdEl('board');
            if (board != null) {
                board.classList.remove('BBTrelloAlpha');
            }
        };
    /****** Use AlphaBox ******/


    /****** Use DarkBox ******/
        darkBoxBBTrello = function() {
            var board = getIdEl('board');
            if (board != null) {
                board.classList.add('BBTrelloBlack');
            }
        };
        darkBoxRemoveBBTrello = function() {
            var board = getIdEl('board');
            if (board != null) {
                board.classList.remove('BBTrelloBlack');
            }
        };
    /****** Use DarkBox ******/

    /****** Use Markdown ******/
        filterMarkdownBBTrello = function(title) {
            bold1 = /\*\*(\S(.*?\S)?)\*\*/gm;
            bold2 = /\_\_(\S(.*?\S)?)\_\_/gm;
            italic1 = /\*(\S(.*?\S)?)\*/gm;
            italic2 = /\_(\S(.*?\S)?)\_/gm;
            strikethrough = /\~\~(.*)\~\~/gm;
            code = /\`(.*)\`/gm;
            h4 = /([\#]{4}\s.*)/gm;
            h3 = /([\#]{3}\s.*)/gm;
            h2 = /([\#]{2}\s.*)/gm;
            h1 = /([\#]{1}\s.*)/gm;
            title = title.replace(bold1,'<b>$1</b>')
                .replace(bold2,'<b>$1</b>')
                .replace(italic1,'<i>$1</i>')
                .replace(italic2,'<i>$1</i>')
                .replace(strikethrough,'<s>$1</s>')
                .replace(code,'<span class="BBTrelloCode">$1</span>')
                .replace(h4,'<h4>$1</h4>')
                .replace(h3,'<h3>$1</h3>')
                .replace(h2,'<h2>$1</h2>')
                .replace(h1,'<h1>$1</h1>');
            return title;
        };
        markdownBBTrello = function() {
            var title = getClassEl('mod-card-back-title');
            if (title.length == 0) {
                var cards = getClassEl('list-card');
                Array.from(cards).forEach(function(card){
                    var title = getClassEl('list-card-title',card)[0];
                    var fakeTitle = getClassEl('BBTrelloFakeTitle',card)[0];
                    if (fakeTitle == undefined) {
                        var params = {
                            className: 'BBTrelloFakeTitle'
                        };
                        fakeTitle = createEl('a',params);
                        title.style.display = 'none';
                        title.parentNode.insertBefore(fakeTitle, title);
                    }
                    fakeTitle.innerHTML = filterMarkdownBBTrello(title.innerHTML);
                });
            }
        };
        markdownRemoveBBTrello = function() {
            var cards = getClassEl('list-card');
            Array.from(cards).forEach(function(card){
                var title = getClassEl('list-card-title',card)[0];
                var fakeTitle = getClassEl('BBTrelloFakeTitle',card)[0];
                if (fakeTitle == undefined) {
                    var params = {
                        className: 'BBTrelloFakeTitle'
                    };
                    fakeTitle = createEl('a',params);
                    title.style.display = 'none';
                    title.parentNode.insertBefore(fakeTitle, title);
                }
                fakeTitle.innerHTML = title.innerHTML;
            });
        };
    /****** Use Markdown ******/




    /****** Variables ******/
        var BBTrelloOptions = {
            useColumnsHider:    false,
            useLabels:          false,
            useTotalCards:      false,
            useProgress:        false,
            useSeparators:      false,
            userCardsId:        false,
            useWIPLimit:        false,
            useStoryNumbers:    false,
            useScrumm:          false,
            useLeftLabels:      false,
            useTransparentBox:  false,
            useDarkBox:         false,
            useMarkdown:        false
        };
    /****** Variables ******/

    /****** Load Preferences from Storage ******/
        loadPreferencesBBtrello = function() {
            BBTrelloOptions.useColumnsHider     = storage.get("BBTrello-useColumnsHider",   false);
            BBTrelloOptions.useLabels           = storage.get("BBTrello-useLabels",         false);
            BBTrelloOptions.useTotalCards       = storage.get("BBTrello-useTotalCards",     false);
            BBTrelloOptions.useProgress         = storage.get("BBTrello-useProgress",       false);
            BBTrelloOptions.useSeparators       = storage.get("BBTrello-useSeparators",     false);
            BBTrelloOptions.userCardsId         = storage.get("BBTrello-userCardsId",       false);
            BBTrelloOptions.useWIPLimit         = storage.get("BBTrello-useWIPLimit",       false);
            BBTrelloOptions.useStoryNumbers     = storage.get("BBTrello-useStoryNumbers",   false);
            BBTrelloOptions.useScrumm           = storage.get("BBTrello-useScrumm",         false);
            BBTrelloOptions.useLeftLabels       = storage.get("BBTrello-useLeftLabels",     false);
            BBTrelloOptions.useTransparentBox   = storage.get("BBTrello-useTransparentBox", false);
            BBTrelloOptions.useDarkBox          = storage.get("BBTrello-useDarkBox",        false);
            BBTrelloOptions.useMarkdown         = storage.get("BBTrello-useMarkdown",       false);
        };
    /****** Load Preferences from Storage ******/

    /****** Start execution ******/
        startBBTrello = function() {
            
            injectSettingsBBTrello();
            loadPreferencesBBtrello();

            if (BBTrelloOptions.useColumnsHider)    { columnsFilterBBTrello()   } else { columnsFilterRemoveBBTrello() };
            if (BBTrelloOptions.useLabels)          { labelsBBTrello()          } else { labelsRemoveBBTrello() };
            if (BBTrelloOptions.useTotalCards)      { totalCardsBBTrello()      } else { totalCardsRemoveBBTrello() };
            if (BBTrelloOptions.useProgress)        { progressBBTrello()        } else { progressRemoveBBTrello() };
            if (BBTrelloOptions.useSeparators)      { separatorsBBTrello()      } else { separatorsRemoveBBTrello() };
            if (BBTrelloOptions.userCardsId)        { cardsIdBBTrello()         } else { cardsIdRemoveBBTrello() };
            if (BBTrelloOptions.useWIPLimit)        { wipLimitBBTrello()        } else { wipLimitRemoveBBTrello() };
            if (BBTrelloOptions.useStoryNumbers)    {                           } else {  };
            if (BBTrelloOptions.useScrumm)          { scrummBBTrello()          } else {  };
            if (BBTrelloOptions.useLeftLabels)      {                           } else {  };
            if (BBTrelloOptions.useTransparentBox)  { alphaBoxBBTrello()        } else { alphaBoxRemoveBBTrello() };
            if (BBTrelloOptions.useDarkBox)         { darkBoxBBTrello()         } else { darkBoxRemoveBBTrello() };
            if (BBTrelloOptions.useMarkdown)        { markdownBBTrello()        } else { markdownRemoveBBTrello() };          
        };
    /****** Start execution ******/

    /****** Prepare events ******/
        prepareEventsBBTrello = function() {
            window.addEventListener("mouseup",  function(){ delay(startBBTrello,0.5) }, true);
            window.addEventListener("keyup",    function(ev){ key(ev, function(){ delay(startBBTrello,0.5) }) }, true);
            window.addEventListener("load",     startBBTrello, false);
        }
    /****** Prepare events ******/

    /****** MAIN ******/
        prepareEventsBBTrello();
    /****** MAIN ******/

})();
/****** End Of File ******/