/*! For license information please see dwains-dashboard.js.LICENSE.txt */
(()=>{var e={317:(e,t,i)=>{"use strict";i.d(t,{CbH:()=>a,SXi:()=>r,Shd:()=>o,ZKv:()=>c,an9:()=>n,qXi:()=>s,q_n:()=>d,uUi:()=>u,vFQ:()=>h,xRl:()=>l});var a="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",n="M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",o="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",r="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",s="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",l="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",d="M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13M14 4.5L19.5 10H14V4.5M23 18V20H20V23H18V20H15V18H18V15H20V18H23Z",c="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",h="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",u="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"},594:(e,t,i)=>{"use strict";i.d(t,{B:()=>n});var a=i(474);function n(e,t,i=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},i)i.dispatchEvent(e);else{var n=(0,a.mt)();n&&n.dispatchEvent(e)}}},474:(e,t,i)=>{"use strict";function a(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function n(e){return document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(e):document.querySelector("home-assistant")?document.querySelector("home-assistant").provideHass(e):void 0}function o(){var e=document.querySelector("hc-main");return e?(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("hc-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-view")||e.querySelector("hui-panel-view"):(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=document.querySelector("home-assistant"))&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))&&e.shadowRoot)&&e.querySelector("ha-app-layout"))&&e.querySelector("#view"))&&e.firstElementChild}async function r(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");if(e.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const t=document.createElement("ha-panel-lovelace");return t.hass=a(),void 0===t.hass&&(await new Promise((e=>{window.addEventListener("connection-status",(t=>{console.log(t),e()}),{once:!0})})),t.hass=a()),t.panel={config:{mode:null}},t._fetchConfig(),!0}i.d(t,{C:()=>a,mt:()=>o,qd:()=>n,rb:()=>r})},281:(e,t,i)=>{"use strict";async function a(e,t,i=!1){let a=e;"string"==typeof t&&(t=t.split(/(\$| )/)),""===t[t.length-1]&&t.pop();for(const[e,n]of t.entries())if(n.trim().length){if(!a)return null;a.localName&&a.localName.includes("-")&&await customElements.whenDefined(a.localName),a.updateComplete&&await a.updateComplete,a="$"===n?i&&e==t.length-1?[a.shadowRoot]:a.shadowRoot:i&&e==t.length-1?a.querySelectorAll(n):a.querySelector(n)}return a}async function n(e,t,i=!1,n=1e4){return Promise.race([a(e,t,i),new Promise(((e,t)=>setTimeout((()=>t(new Error("timeout"))),n)))]).catch((e=>{if(!e.message||"timeout"!==e.message)throw e;return null}))}i.d(t,{_:()=>n})},601:(e,t,i)=>{"use strict";i.d(t,{W:()=>o});var a=i(594),n=i(281);async function o(e,t=!1){const i=document.querySelector("hc-main")||document.querySelector("home-assistant");(0,a.B)("hass-more-info",{entityId:e},i);const o=await(0,n._)(i,"$ ha-more-info-dialog");return o&&(o.large=t),o}},557:(e,t,i)=>{"use strict";i.d(t,{G:()=>r});var a=i(474),n=i(281);let o=window.cardHelpers;async function r(e,t,i=!1,o={},s=!1){if(!customElements.get("card-tools-popup")){const e=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),t=e.prototype.html,i=e.prototype.css;class a extends e{static get properties(){return{open:{},large:{reflect:!0,type:Boolean},hass:{}}}updated(e){e.has("hass")&&this.card&&(this.card.hass=this.hass)}closeDialog(){this.open=!1}async _makeCard(){const e=await window.loadCardHelpers();this.card=await e.createCardElement(this._card),this.card.hass=this.hass,this.requestUpdate()}async _applyStyles(){let e=await(0,n._)(this,"$ ha-dialog");customElements.whenDefined("card-mod").then((async()=>{e&&customElements.get("card-mod").applyToElement(e,"more-info",this._style,{config:this._card},[],!1)}))}async showDialog(e,t,i=!1,a={},n=!1){this.title=e,this._card=t,this.large=i,this._style=a,this.fullscreen=!!n,this._makeCard(),await this.updateComplete,this.open=!0,await this._applyStyles()}_enlarge(){this.large=!this.large}render(){return this.open?t`
            <ha-dialog
              open
              @closed=${this.closeDialog}
              .heading=${!0}
              hideActions
              @ll-rebuild=${this._makeCard}
            >
            ${this.fullscreen?t`<div slot="heading"></div>`:t`
                <app-toolbar slot="heading">
                  <mwc-icon-button
                    .label=${"dismiss"}
                    dialogAction="cancel"
                  >
                    <ha-icon
                      .icon=${"mdi:close"}
                    ></ha-icon>
                  </mwc-icon-button>
                  <div class="main-title" @click=${this._enlarge}>
                    ${this.title}
                  </div>
                </app-toolbar>
              `}
              <div class="content">
                ${this.card}
              </div>
            </ha-dialog>
          `:t``}static get styles(){return i`
          ha-dialog {
            --mdc-dialog-min-width: 400px;
            --mdc-dialog-max-width: 600px;
            --mdc-dialog-heading-ink-color: var(--primary-text-color);
            --mdc-dialog-content-ink-color: var(--primary-text-color);
            --justify-action-buttons: space-between;
          }
          @media all and (max-width: 450px), all and (max-height: 500px) {
            ha-dialog {
              --mdc-dialog-min-width: 100vw;
              --mdc-dialog-max-width: 100vw;
              --mdc-dialog-min-height: 100%;
              --mdc-dialog-max-height: 100%;
              --mdc-shape-medium: 0px;
              --vertial-align-dialog: flex-end;
            }
          }

          app-toolbar {
            flex-shrink: 0;
            color: var(--primary-text-color);
            background-color: var(--secondary-background-color);
          }

          .main-title {
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
          .content {
            margin: -20px -24px;
          }

          @media all and (max-width: 450px), all and (max-height: 500px) {
            app-toolbar {
              background-color: var(--app-header-background-color);
              color: var(--app-header-text-color, white);
            }
          }

          @media all and (min-width: 451px) and (min-height: 501px) {
            ha-dialog {
              --mdc-dialog-max-width: 90vw;
            }

            .content {
              width: 400px;
            }
            :host([large]) .content {
              width: calc(90vw - 48px);
            }

            :host([large]) app-toolbar {
              max-width: calc(90vw - 32px);
            }
          }
          `}}customElements.define("card-tools-popup",a)}const l=document.querySelector("home-assistant")||document.querySelector("hc-root");if(!l)return;let d=await(0,n._)(l,"$ card-tools-popup");if(!d){d=document.createElement("card-tools-popup");const e=l.shadowRoot.querySelector("ha-more-info-dialog");e?l.shadowRoot.insertBefore(d,e):l.shadowRoot.appendChild(d),(0,a.qd)(d)}if(!window._moreInfoDialogListener){const e=async e=>{if(e.state&&"cardToolsPopup"in e.state)if(e.state.cardToolsPopup){const{title:t,card:i,large:a,style:n,fullscreen:o}=e.state.params;r(t,i,a,n,o)}else d.closeDialog()};window.addEventListener("popstate",e),window._moreInfoDialogListener=!0}history.replaceState({cardToolsPopup:!1},""),history.pushState({cardToolsPopup:!0,params:{title:e,card:t,large:i,style:o,fullscreen:s}},""),d.showDialog(e,t,i,o,s)}new Promise((async(e,t)=>{o&&e();const i=async()=>{o=await window.loadCardHelpers(),window.cardHelpers=o,e()};window.loadCardHelpers?i():window.addEventListener("load",(async()=>{(0,a.rb)(),window.loadCardHelpers&&i()}))}))},287:(e,t,i)=>{"use strict";i.d(t,{D1:()=>v,MS:()=>g,N5:()=>f,RC:()=>m,VC:()=>x,c4:()=>w});var a,n,o,r=function(e,t){return s(t).format(e)},s=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};(o=a||(a={})).language="language",o.system="system",o.comma_decimal="comma_decimal",o.decimal_comma="decimal_comma",o.space_comma="space_comma",o.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(n||(n={}));var l=function(e){if(e.time_format===n.language||e.time_format===n.system){var t=e.time_format===n.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===n.am_pm},d=function(e,t){return c(t).format(e)},c=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:l(e)?"numeric":"2-digit",minute:"2-digit",hour12:l(e)})},h=function(e,t){return u(t).format(e)},u=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:l(e)})};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var m=function(e,t,i,a){void 0===a&&(a=!1),e._themes||(e._themes={});var n=t.default_theme;("default"===i||i&&t.themes[i])&&(n=i);var o=p({},e._themes);if("default"!==n){var r=t.themes[n];Object.keys(r).forEach((function(t){var i="--"+t;e._themes[i]="",o[i]=r[t]}))}if(e.updateStyles?e.updateStyles(o):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,o),a){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=o["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}};function g(e){return e.substr(0,e.indexOf("."))}function f(e){return g(e.entity_id)}var _=function(e,t,i){var n=t?function(e){switch(e.number_format){case a.comma_decimal:return["en-US","en"];case a.decimal_comma:return["de","es","it"];case a.space_comma:return["fr","sv","cs"];case a.system:return;default:return e.language}}(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==a.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(n,b(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,b(e,i)).format(Number(e))}return"string"==typeof e?e:function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)}(e,null==i?void 0:i.maximumFractionDigits).toString()+("currency"===(null==i?void 0:i.style)?" "+i.currency:"")},b=function(e,t){var i=p({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var a=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=a,i.maximumFractionDigits=a}return i},v=function(e,t,i,a){var n=void 0!==a?a:t.state;if("unknown"===n||"unavailable"===n)return e("state.default."+n);if(function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class}(t)){if("monetary"===t.attributes.device_class)try{return _(n,i,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return _(n,i)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var o=f(t);if("input_datetime"===o){var s;if(void 0===a)return t.attributes.has_date&&t.attributes.has_time?(s=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),d(s,i)):t.attributes.has_date?(s=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),r(s,i)):t.attributes.has_time?((s=new Date).setHours(t.attributes.hour,t.attributes.minute),h(s,i)):t.state;try{var l=a.split(" ");if(2===l.length)return d(new Date(l.join("T")),i);if(1===l.length){if(a.includes("-"))return r(new Date(a+"T00:00"),i);if(a.includes(":")){var c=new Date;return h(new Date(c.toISOString().split("T")[0]+"T"+a),i)}}return a}catch(e){return a}}return"humidifier"===o&&"on"===n&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?_(n,i):t.attributes.device_class&&e("component."+o+".state."+t.attributes.device_class+"."+n)||e("component."+o+".state._."+n)||n},y=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(e,t,i,a){a=a||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,e.dispatchEvent(n),n});new Set(["call-service","divider","section","weblink","cast","select"]);var w=function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),y(window,"location-changed",{replace:i})},x=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}},408:(e,t,i)=>{"use strict";function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},s.apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function d(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}i.d(t,{Z:()=>yt});var c=d(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),h=d(/Edge/i),u=d(/firefox/i),p=d(/safari/i)&&!d(/chrome/i)&&!d(/android/i),m=d(/iP(ad|od|hone)/i),g=d(/chrome/i)&&d(/android/i),f={capture:!1,passive:!1};function _(e,t,i){e.addEventListener(t,i,!c&&f)}function b(e,t,i){e.removeEventListener(t,i,!c&&f)}function v(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function y(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function w(e,t,i,a){if(e){i=i||document;do{if(null!=t&&(">"===t[0]?e.parentNode===i&&v(e,t):v(e,t))||a&&e===i)return e;if(e===i)break}while(e=y(e))}return null}var x,$=/\s+/g;function k(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var a=(" "+e.className+" ").replace($," ").replace(" "+t+" "," ");e.className=(a+(i?" "+t:"")).replace($," ")}}function C(e,t,i){var a=e&&e.style;if(a){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),void 0===t?i:i[t];t in a||-1!==t.indexOf("webkit")||(t="-webkit-"+t),a[t]=i+("string"==typeof i?"":"px")}}function S(e,t){var i="";if("string"==typeof e)i=e;else do{var a=C(e,"transform");a&&"none"!==a&&(i=a+" "+i)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function E(e,t,i){if(e){var a=e.getElementsByTagName(t),n=0,o=a.length;if(i)for(;n<o;n++)i(a[n],n);return a}return[]}function D(){return document.scrollingElement||document.documentElement}function A(e,t,i,a,n){if(e.getBoundingClientRect||e===window){var o,r,s,l,d,h,u;if(e!==window&&e.parentNode&&e!==D()?(r=(o=e.getBoundingClientRect()).top,s=o.left,l=o.bottom,d=o.right,h=o.height,u=o.width):(r=0,s=0,l=window.innerHeight,d=window.innerWidth,h=window.innerHeight,u=window.innerWidth),(t||i)&&e!==window&&(n=n||e.parentNode,!c))do{if(n&&n.getBoundingClientRect&&("none"!==C(n,"transform")||i&&"static"!==C(n,"position"))){var p=n.getBoundingClientRect();r-=p.top+parseInt(C(n,"border-top-width")),s-=p.left+parseInt(C(n,"border-left-width")),l=r+o.height,d=s+o.width;break}}while(n=n.parentNode);if(a&&e!==window){var m=S(n||e),g=m&&m.a,f=m&&m.d;m&&(l=(r/=f)+(h/=f),d=(s/=g)+(u/=g))}return{top:r,left:s,bottom:l,right:d,width:u,height:h}}}function z(e,t,i){for(var a=N(e,!0),n=A(e)[t];a;){var o=A(a)[i];if(!("top"===i||"left"===i?n>=o:n<=o))return a;if(a===D())break;a=N(a,!1)}return!1}function M(e,t,i,a){for(var n=0,o=0,r=e.children;o<r.length;){if("none"!==r[o].style.display&&r[o]!==Ze.ghost&&(a||r[o]!==Ze.dragged)&&w(r[o],i.draggable,e,!1)){if(n===t)return r[o];n++}o++}return null}function T(e,t){for(var i=e.lastElementChild;i&&(i===Ze.ghost||"none"===C(i,"display")||t&&!v(i,t));)i=i.previousElementSibling;return i||null}function P(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===Ze.clone||t&&!v(e,t)||i++;return i}function j(e){var t=0,i=0,a=D();if(e)do{var n=S(e),o=n.a,r=n.d;t+=e.scrollLeft*o,i+=e.scrollTop*r}while(e!==a&&(e=e.parentNode));return[t,i]}function N(e,t){if(!e||!e.getBoundingClientRect)return D();var i=e,a=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=C(i);if(i.clientWidth<i.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!i.getBoundingClientRect||i===document.body)return D();if(a||t)return i;a=!0}}}while(i=i.parentNode);return D()}function B(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function L(e,t){return function(){if(!x){var i=arguments;1===i.length?e.call(this,i[0]):e.apply(this,i),x=setTimeout((function(){x=void 0}),t)}}}function I(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function O(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function Z(e,t){C(e,"position","absolute"),C(e,"top",t.top),C(e,"left",t.left),C(e,"width",t.width),C(e,"height",t.height)}function V(e){C(e,"position",""),C(e,"top",""),C(e,"left",""),C(e,"width",""),C(e,"height","")}var R="Sortable"+(new Date).getTime();var U=[],q={initializeByDefault:!0},H={mount:function(e){for(var t in q)q.hasOwnProperty(t)&&!(t in e)&&(e[t]=q[t]);U.forEach((function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")})),U.push(e)},pluginEvent:function(e,t,i){var a=this;this.eventCanceled=!1,i.cancel=function(){a.eventCanceled=!0};var o=e+"Global";U.forEach((function(a){t[a.pluginName]&&(t[a.pluginName][o]&&t[a.pluginName][o](n({sortable:t},i)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](n({sortable:t},i)))}))},initializePlugins:function(e,t,i,a){for(var n in U.forEach((function(a){var n=a.pluginName;if(e.options[n]||a.initializeByDefault){var o=new a(e,t,e.options);o.sortable=e,o.options=e.options,e[n]=o,s(i,o.defaults)}})),e.options)if(e.options.hasOwnProperty(n)){var o=this.modifyOption(e,n,e.options[n]);void 0!==o&&(e.options[n]=o)}},getEventProperties:function(e,t){var i={};return U.forEach((function(a){"function"==typeof a.eventProperties&&s(i,a.eventProperties.call(t[a.pluginName],e))})),i},modifyOption:function(e,t,i){var a;return U.forEach((function(n){e[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[t]&&(a=n.optionListeners[t].call(e[n.pluginName],i))})),a}};function W(e){var t=e.sortable,i=e.rootEl,a=e.name,o=e.targetEl,r=e.cloneEl,s=e.toEl,l=e.fromEl,d=e.oldIndex,u=e.newIndex,p=e.oldDraggableIndex,m=e.newDraggableIndex,g=e.originalEvent,f=e.putSortable,_=e.extraEventProperties;if(t=t||i&&i[R]){var b,v=t.options,y="on"+a.charAt(0).toUpperCase()+a.substr(1);!window.CustomEvent||c||h?(b=document.createEvent("Event")).initEvent(a,!0,!0):b=new CustomEvent(a,{bubbles:!0,cancelable:!0}),b.to=s||i,b.from=l||i,b.item=o||i,b.clone=r,b.oldIndex=d,b.newIndex=u,b.oldDraggableIndex=p,b.newDraggableIndex=m,b.originalEvent=g,b.pullMode=f?f.lastPutMode:void 0;var w=n(n({},_),H.getEventProperties(a,t));for(var x in w)b[x]=w[x];i&&i.dispatchEvent(b),v[y]&&v[y].call(t,b)}}var G=["evt"],F=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.evt,o=function(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}(i,G);H.pluginEvent.bind(Ze)(e,t,n({dragEl:Y,parentEl:K,ghostEl:J,rootEl:Q,nextEl:ee,lastDownEl:te,cloneEl:ie,cloneHidden:ae,dragStarted:fe,putSortable:de,activeSortable:Ze.active,originalEvent:a,oldIndex:ne,oldDraggableIndex:re,newIndex:oe,newDraggableIndex:se,hideGhostForTarget:Be,unhideGhostForTarget:Le,cloneNowHidden:function(){ae=!0},cloneNowShown:function(){ae=!1},dispatchSortableEvent:function(e){X({sortable:t,name:e,originalEvent:a})}},o))};function X(e){W(n({putSortable:de,cloneEl:ie,targetEl:Y,rootEl:Q,oldIndex:ne,oldDraggableIndex:re,newIndex:oe,newDraggableIndex:se},e))}var Y,K,J,Q,ee,te,ie,ae,ne,oe,re,se,le,de,ce,he,ue,pe,me,ge,fe,_e,be,ve,ye,we=!1,xe=!1,$e=[],ke=!1,Ce=!1,Se=[],Ee=!1,De=[],Ae="undefined"!=typeof document,ze=m,Me=h||c?"cssFloat":"float",Te=Ae&&!g&&!m&&"draggable"in document.createElement("div"),Pe=function(){if(Ae){if(c)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),je=function(e,t){var i=C(e),a=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=M(e,0,t),o=M(e,1,t),r=n&&C(n),s=o&&C(o),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+A(n).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+A(o).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&r.float&&"none"!==r.float){var c="left"===r.float?"left":"right";return!o||"both"!==s.clear&&s.clear!==c?"horizontal":"vertical"}return n&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=a&&"none"===i[Me]||o&&"none"===i[Me]&&l+d>a)?"vertical":"horizontal"},Ne=function(e){function t(e,i){return function(a,n,o,r){var s=a.options.group.name&&n.options.group.name&&a.options.group.name===n.options.group.name;if(null==e&&(i||s))return!0;if(null==e||!1===e)return!1;if(i&&"clone"===e)return e;if("function"==typeof e)return t(e(a,n,o,r),i)(a,n,o,r);var l=(i?a:n).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var i={},a=e.group;a&&"object"==o(a)||(a={name:a}),i.name=a.name,i.checkPull=t(a.pull,!0),i.checkPut=t(a.put),i.revertClone=a.revertClone,e.group=i},Be=function(){!Pe&&J&&C(J,"display","none")},Le=function(){!Pe&&J&&C(J,"display","")};Ae&&!g&&document.addEventListener("click",(function(e){if(xe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),xe=!1,!1}),!0);var Ie=function(e){if(Y){e=e.touches?e.touches[0]:e;var t=(n=e.clientX,o=e.clientY,$e.some((function(e){var t=e[R].options.emptyInsertThreshold;if(t&&!T(e)){var i=A(e),a=n>=i.left-t&&n<=i.right+t,s=o>=i.top-t&&o<=i.bottom+t;return a&&s?r=e:void 0}})),r);if(t){var i={};for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a]);i.target=i.rootEl=t,i.preventDefault=void 0,i.stopPropagation=void 0,t[R]._onDragOver(i)}}var n,o,r},Oe=function(e){Y&&Y.parentNode[R]._isOutsideThisEl(e.target)};function Ze(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=s({},t),e[R]=this;var i,a,o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return je(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Ze.supportPointer&&"PointerEvent"in window&&!p,emptyInsertThreshold:5};for(var r in H.initializePlugins(this,e,o),o)!(r in t)&&(t[r]=o[r]);for(var l in Ne(t),this)"_"===l.charAt(0)&&"function"==typeof this[l]&&(this[l]=this[l].bind(this));this.nativeDraggable=!t.forceFallback&&Te,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?_(e,"pointerdown",this._onTapStart):(_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),$e.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),s(this,(a=[],{captureAnimationState:function(){a=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(e){if("none"!==C(e,"display")&&e!==Ze.ghost){a.push({target:e,rect:A(e)});var t=n({},a[a.length-1].rect);if(e.thisAnimationDuration){var i=S(e,!0);i&&(t.top-=i.f,t.left-=i.e)}e.fromRect=t}}))},addAnimationState:function(e){a.push(e)},removeAnimationState:function(e){a.splice(function(e,t){for(var i in e)if(e.hasOwnProperty(i))for(var a in t)if(t.hasOwnProperty(a)&&t[a]===e[i][a])return Number(i);return-1}(a,{target:e}),1)},animateAll:function(e){var t=this;if(!this.options.animation)return clearTimeout(i),void("function"==typeof e&&e());var n=!1,o=0;a.forEach((function(e){var i=0,a=e.target,r=a.fromRect,s=A(a),l=a.prevFromRect,d=a.prevToRect,c=e.rect,h=S(a,!0);h&&(s.top-=h.f,s.left-=h.e),a.toRect=s,a.thisAnimationDuration&&B(l,s)&&!B(r,s)&&(c.top-s.top)/(c.left-s.left)==(r.top-s.top)/(r.left-s.left)&&(i=function(e,t,i,a){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*a.animation}(c,l,d,t.options)),B(s,r)||(a.prevFromRect=r,a.prevToRect=s,i||(i=t.options.animation),t.animate(a,c,s,i)),i&&(n=!0,o=Math.max(o,i),clearTimeout(a.animationResetTimer),a.animationResetTimer=setTimeout((function(){a.animationTime=0,a.prevFromRect=null,a.fromRect=null,a.prevToRect=null,a.thisAnimationDuration=null}),i),a.thisAnimationDuration=i)})),clearTimeout(i),n?i=setTimeout((function(){"function"==typeof e&&e()}),o):"function"==typeof e&&e(),a=[]},animate:function(e,t,i,a){if(a){C(e,"transition",""),C(e,"transform","");var n=S(this.el),o=n&&n.a,r=n&&n.d,s=(t.left-i.left)/(o||1),l=(t.top-i.top)/(r||1);e.animatingX=!!s,e.animatingY=!!l,C(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),C(e,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),C(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout((function(){C(e,"transition",""),C(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1}),a)}}}))}function Ve(e,t,i,a,n,o,r,s){var l,d,u=e[R],p=u.options.onMove;return!window.CustomEvent||c||h?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=i,l.draggedRect=a,l.related=n||t,l.relatedRect=o||A(t),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),p&&(d=p.call(u,l,r)),d}function Re(e){e.draggable=!1}function Ue(){Ee=!1}function qe(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,a=0;i--;)a+=t.charCodeAt(i);return a.toString(36)}function He(e){return setTimeout(e,0)}function We(e){return clearTimeout(e)}Ze.prototype={constructor:Ze,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(_e=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,Y):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,i=this.el,a=this.options,n=a.preventOnFilter,o=e.type,r=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(r||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=a.filter;if(function(e){De.length=0;for(var t=e.getElementsByTagName("input"),i=t.length;i--;){var a=t[i];a.checked&&De.push(a)}}(i),!Y&&!(/mousedown|pointerdown/.test(o)&&0!==e.button||a.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!p||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=w(s,a.draggable,i,!1))&&s.animated||te===s)){if(ne=P(s),re=P(s,a.draggable),"function"==typeof d){if(d.call(this,e,s,this))return X({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),F("filter",t,{evt:e}),void(n&&e.cancelable&&e.preventDefault())}else if(d&&(d=d.split(",").some((function(a){if(a=w(l,a.trim(),i,!1))return X({sortable:t,rootEl:a,name:"filter",targetEl:s,fromEl:i,toEl:i}),F("filter",t,{evt:e}),!0}))))return void(n&&e.cancelable&&e.preventDefault());a.handle&&!w(l,a.handle,i,!1)||this._prepareDragStart(e,r,s)}}},_prepareDragStart:function(e,t,i){var a,n=this,o=n.el,r=n.options,s=o.ownerDocument;if(i&&!Y&&i.parentNode===o){var l=A(i);if(Q=o,K=(Y=i).parentNode,ee=Y.nextSibling,te=i,le=r.group,Ze.dragged=Y,ce={target:Y,clientX:(t||e).clientX,clientY:(t||e).clientY},me=ce.clientX-l.left,ge=ce.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,Y.style["will-change"]="all",a=function(){F("delayEnded",n,{evt:e}),Ze.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!u&&n.nativeDraggable&&(Y.draggable=!0),n._triggerDragStart(e,t),X({sortable:n,name:"choose",originalEvent:e}),k(Y,r.chosenClass,!0))},r.ignore.split(",").forEach((function(e){E(Y,e.trim(),Re)})),_(s,"dragover",Ie),_(s,"mousemove",Ie),_(s,"touchmove",Ie),_(s,"mouseup",n._onDrop),_(s,"touchend",n._onDrop),_(s,"touchcancel",n._onDrop),u&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Y.draggable=!0),F("delayStart",this,{evt:e}),!r.delay||r.delayOnTouchOnly&&!t||this.nativeDraggable&&(h||c))a();else{if(Ze.eventCanceled)return void this._onDrop();_(s,"mouseup",n._disableDelayedDrag),_(s,"touchend",n._disableDelayedDrag),_(s,"touchcancel",n._disableDelayedDrag),_(s,"mousemove",n._delayedDragTouchMoveHandler),_(s,"touchmove",n._delayedDragTouchMoveHandler),r.supportPointer&&_(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(a,r.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Y&&Re(Y),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):_(document,t?"touchmove":"mousemove",this._onTouchMove):(_(Y,"dragend",this),_(Q,"dragstart",this._onDragStart));try{document.selection?He((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(we=!1,Q&&Y){F("dragStarted",this,{evt:t}),this.nativeDraggable&&_(document,"dragover",Oe);var i=this.options;!e&&k(Y,i.dragClass,!1),k(Y,i.ghostClass,!0),Ze.active=this,e&&this._appendGhost(),X({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(he){this._lastX=he.clientX,this._lastY=he.clientY,Be();for(var e=document.elementFromPoint(he.clientX,he.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(he.clientX,he.clientY))!==t;)t=e;if(Y.parentNode[R]._isOutsideThisEl(e),t)do{if(t[R]&&t[R]._onDragOver({clientX:he.clientX,clientY:he.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=t.parentNode);Le()}},_onTouchMove:function(e){if(ce){var t=this.options,i=t.fallbackTolerance,a=t.fallbackOffset,n=e.touches?e.touches[0]:e,o=J&&S(J,!0),r=J&&o&&o.a,s=J&&o&&o.d,l=ze&&ye&&j(ye),d=(n.clientX-ce.clientX+a.x)/(r||1)+(l?l[0]-Se[0]:0)/(r||1),c=(n.clientY-ce.clientY+a.y)/(s||1)+(l?l[1]-Se[1]:0)/(s||1);if(!Ze.active&&!we){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(J){o?(o.e+=d-(ue||0),o.f+=c-(pe||0)):o={a:1,b:0,c:0,d:1,e:d,f:c};var h="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");C(J,"webkitTransform",h),C(J,"mozTransform",h),C(J,"msTransform",h),C(J,"transform",h),ue=d,pe=c,he=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!J){var e=this.options.fallbackOnBody?document.body:Q,t=A(Y,!0,ze,!0,e),i=this.options;if(ze){for(ye=e;"static"===C(ye,"position")&&"none"===C(ye,"transform")&&ye!==document;)ye=ye.parentNode;ye!==document.body&&ye!==document.documentElement?(ye===document&&(ye=D()),t.top+=ye.scrollTop,t.left+=ye.scrollLeft):ye=D(),Se=j(ye)}k(J=Y.cloneNode(!0),i.ghostClass,!1),k(J,i.fallbackClass,!0),k(J,i.dragClass,!0),C(J,"transition",""),C(J,"transform",""),C(J,"box-sizing","border-box"),C(J,"margin",0),C(J,"top",t.top),C(J,"left",t.left),C(J,"width",t.width),C(J,"height",t.height),C(J,"opacity","0.8"),C(J,"position",ze?"absolute":"fixed"),C(J,"zIndex","100000"),C(J,"pointerEvents","none"),Ze.ghost=J,e.appendChild(J),C(J,"transform-origin",me/parseInt(J.style.width)*100+"% "+ge/parseInt(J.style.height)*100+"%")}},_onDragStart:function(e,t){var i=this,a=e.dataTransfer,n=i.options;F("dragStart",this,{evt:e}),Ze.eventCanceled?this._onDrop():(F("setupClone",this),Ze.eventCanceled||((ie=O(Y)).removeAttribute("id"),ie.draggable=!1,ie.style["will-change"]="",this._hideClone(),k(ie,this.options.chosenClass,!1),Ze.clone=ie),i.cloneId=He((function(){F("clone",i),Ze.eventCanceled||(i.options.removeCloneOnHide||Q.insertBefore(ie,Y),i._hideClone(),X({sortable:i,name:"clone"}))})),!t&&k(Y,n.dragClass,!0),t?(xe=!0,i._loopId=setInterval(i._emulateDragOver,50)):(b(document,"mouseup",i._onDrop),b(document,"touchend",i._onDrop),b(document,"touchcancel",i._onDrop),a&&(a.effectAllowed="move",n.setData&&n.setData.call(i,a,Y)),_(document,"drop",i),C(Y,"transform","translateZ(0)")),we=!0,i._dragStartId=He(i._dragStarted.bind(i,t,e)),_(document,"selectstart",i),fe=!0,p&&C(document.body,"user-select","none"))},_onDragOver:function(e){var t,i,a,o,r=this.el,s=e.target,l=this.options,d=l.group,c=Ze.active,h=le===d,u=l.sort,p=de||c,m=this,g=!1;if(!Ee){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),s=w(s,l.draggable,r,!0),O("dragOver"),Ze.eventCanceled)return g;if(Y.contains(e.target)||s.animated&&s.animatingX&&s.animatingY||m._ignoreWhileAnimating===s)return V(!1);if(xe=!1,c&&!l.disabled&&(h?u||(a=K!==Q):de===this||(this.lastPutMode=le.checkPull(this,c,Y,e))&&d.checkPut(this,c,Y,e))){if(o="vertical"===this._getDirection(e,s),t=A(Y),O("dragOverValid"),Ze.eventCanceled)return g;if(a)return K=Q,Z(),this._hideClone(),O("revert"),Ze.eventCanceled||(ee?Q.insertBefore(Y,ee):Q.appendChild(Y)),V(!0);var f=T(r,l.draggable);if(!f||function(e,t,i){var a=A(T(i.el,i.options.draggable));return t?e.clientX>a.right+10||e.clientX<=a.right&&e.clientY>a.bottom&&e.clientX>=a.left:e.clientX>a.right&&e.clientY>a.top||e.clientX<=a.right&&e.clientY>a.bottom+10}(e,o,this)&&!f.animated){if(f===Y)return V(!1);if(f&&r===e.target&&(s=f),s&&(i=A(s)),!1!==Ve(Q,r,Y,t,s,i,e,!!s))return Z(),f&&f.nextSibling?r.insertBefore(Y,f.nextSibling):r.appendChild(Y),K=r,U(),V(!0)}else if(f&&function(e,t,i){var a=A(M(i.el,0,i.options,!0));return t?e.clientX<a.left-10||e.clientY<a.top&&e.clientX<a.right:e.clientY<a.top-10||e.clientY<a.bottom&&e.clientX<a.left}(e,o,this)){var _=M(r,0,l,!0);if(_===Y)return V(!1);if(i=A(s=_),!1!==Ve(Q,r,Y,t,s,i,e,!1))return Z(),r.insertBefore(Y,_),K=r,U(),V(!0)}else if(s.parentNode===r){i=A(s);var b,v,y,x=Y.parentNode!==r,$=!function(e,t,i){var a=i?e.left:e.top,n=i?e.right:e.bottom,o=i?e.width:e.height,r=i?t.left:t.top,s=i?t.right:t.bottom,l=i?t.width:t.height;return a===r||n===s||a+o/2===r+l/2}(Y.animated&&Y.toRect||t,s.animated&&s.toRect||i,o),S=o?"top":"left",E=z(s,"top","top")||z(Y,"top","top"),D=E?E.scrollTop:void 0;if(_e!==s&&(v=i[S],ke=!1,Ce=!$&&l.invertSwap||x),b=function(e,t,i,a,n,o,r,s){var l=a?e.clientY:e.clientX,d=a?i.height:i.width,c=a?i.top:i.left,h=a?i.bottom:i.right,u=!1;if(!r)if(s&&ve<d*n){if(!ke&&(1===be?l>c+d*o/2:l<h-d*o/2)&&(ke=!0),ke)u=!0;else if(1===be?l<c+ve:l>h-ve)return-be}else if(l>c+d*(1-n)/2&&l<h-d*(1-n)/2)return function(e){return P(Y)<P(e)?1:-1}(t);return(u=u||r)&&(l<c+d*o/2||l>h-d*o/2)?l>c+d/2?1:-1:0}(e,s,i,o,$?1:l.swapThreshold,null==l.invertedSwapThreshold?l.swapThreshold:l.invertedSwapThreshold,Ce,_e===s),0!==b){var j=P(Y);do{j-=b,y=K.children[j]}while(y&&("none"===C(y,"display")||y===J))}if(0===b||y===s)return V(!1);_e=s,be=b;var N=s.nextElementSibling,B=!1,L=Ve(Q,r,Y,t,s,i,e,B=1===b);if(!1!==L)return 1!==L&&-1!==L||(B=1===L),Ee=!0,setTimeout(Ue,30),Z(),B&&!N?r.appendChild(Y):s.parentNode.insertBefore(Y,B?N:s),E&&I(E,0,D-E.scrollTop),K=Y.parentNode,void 0===v||Ce||(ve=Math.abs(v-A(s)[S])),U(),V(!0)}if(r.contains(Y))return V(!1)}return!1}function O(l,d){F(l,m,n({evt:e,isOwner:h,axis:o?"vertical":"horizontal",revert:a,dragRect:t,targetRect:i,canSort:u,fromSortable:p,target:s,completed:V,onMove:function(i,a){return Ve(Q,r,Y,t,i,A(i),e,a)},changed:U},d))}function Z(){O("dragOverAnimationCapture"),m.captureAnimationState(),m!==p&&p.captureAnimationState()}function V(t){return O("dragOverCompleted",{insertion:t}),t&&(h?c._hideClone():c._showClone(m),m!==p&&(k(Y,de?de.options.ghostClass:c.options.ghostClass,!1),k(Y,l.ghostClass,!0)),de!==m&&m!==Ze.active?de=m:m===Ze.active&&de&&(de=null),p===m&&(m._ignoreWhileAnimating=s),m.animateAll((function(){O("dragOverAnimationComplete"),m._ignoreWhileAnimating=null})),m!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(s===Y&&!Y.animated||s===r&&!s.animated)&&(_e=null),l.dragoverBubble||e.rootEl||s===document||(Y.parentNode[R]._isOutsideThisEl(e.target),!t&&Ie(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),g=!0}function U(){oe=P(Y),se=P(Y,l.draggable),X({sortable:m,name:"change",toEl:r,newIndex:oe,newDraggableIndex:se,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",Ie),b(document,"mousemove",Ie),b(document,"touchmove",Ie)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,i=this.options;oe=P(Y),se=P(Y,i.draggable),F("drop",this,{evt:e}),K=Y&&Y.parentNode,oe=P(Y),se=P(Y,i.draggable),Ze.eventCanceled||(we=!1,Ce=!1,ke=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),We(this.cloneId),We(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),p&&C(document.body,"user-select",""),C(Y,"transform",""),e&&(fe&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),J&&J.parentNode&&J.parentNode.removeChild(J),(Q===K||de&&"clone"!==de.lastPutMode)&&ie&&ie.parentNode&&ie.parentNode.removeChild(ie),Y&&(this.nativeDraggable&&b(Y,"dragend",this),Re(Y),Y.style["will-change"]="",fe&&!we&&k(Y,de?de.options.ghostClass:this.options.ghostClass,!1),k(Y,this.options.chosenClass,!1),X({sortable:this,name:"unchoose",toEl:K,newIndex:null,newDraggableIndex:null,originalEvent:e}),Q!==K?(oe>=0&&(X({rootEl:K,name:"add",toEl:K,fromEl:Q,originalEvent:e}),X({sortable:this,name:"remove",toEl:K,originalEvent:e}),X({rootEl:K,name:"sort",toEl:K,fromEl:Q,originalEvent:e}),X({sortable:this,name:"sort",toEl:K,originalEvent:e})),de&&de.save()):oe!==ne&&oe>=0&&(X({sortable:this,name:"update",toEl:K,originalEvent:e}),X({sortable:this,name:"sort",toEl:K,originalEvent:e})),Ze.active&&(null!=oe&&-1!==oe||(oe=ne,se=re),X({sortable:this,name:"end",toEl:K,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){F("nulling",this),Q=Y=K=J=ee=ie=te=ae=ce=he=fe=oe=se=ne=re=_e=be=de=le=Ze.dragged=Ze.ghost=Ze.clone=Ze.active=null,De.forEach((function(e){e.checked=!0})),De.length=ue=pe=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":Y&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],i=this.el.children,a=0,n=i.length,o=this.options;a<n;a++)w(e=i[a],o.draggable,this.el,!1)&&t.push(e.getAttribute(o.dataIdAttr)||qe(e));return t},sort:function(e,t){var i={},a=this.el;this.toArray().forEach((function(e,t){var n=a.children[t];w(n,this.options.draggable,a,!1)&&(i[e]=n)}),this),t&&this.captureAnimationState(),e.forEach((function(e){i[e]&&(a.removeChild(i[e]),a.appendChild(i[e]))})),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return w(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var i=this.options;if(void 0===t)return i[e];var a=H.modifyOption(this,e,t);i[e]=void 0!==a?a:t,"group"===e&&Ne(i)},destroy:function(){F("destroy",this);var e=this.el;e[R]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),(function(e){e.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),$e.splice($e.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ae){if(F("hideClone",this),Ze.eventCanceled)return;C(ie,"display","none"),this.options.removeCloneOnHide&&ie.parentNode&&ie.parentNode.removeChild(ie),ae=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(ae){if(F("showClone",this),Ze.eventCanceled)return;Y.parentNode!=Q||this.options.group.revertClone?ee?Q.insertBefore(ie,ee):Q.appendChild(ie):Q.insertBefore(ie,Y),this.options.group.revertClone&&this.animate(Y,ie),C(ie,"display",""),ae=!1}}else this._hideClone()}},Ae&&_(document,"touchmove",(function(e){(Ze.active||we)&&e.cancelable&&e.preventDefault()})),Ze.utils={on:_,off:b,css:C,find:E,is:function(e,t){return!!w(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},throttle:L,closest:w,toggleClass:k,clone:O,index:P,nextTick:He,cancelNextTick:We,detectDirection:je,getChild:M},Ze.get=function(e){return e[R]},Ze.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach((function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(Ze.utils=n(n({},Ze.utils),e.utils)),H.mount(e)}))},Ze.create=function(e,t){return new Ze(e,t)},Ze.version="1.15.0";var Ge,Fe,Xe,Ye,Ke,Je,Qe=[],et=!1;function tt(){Qe.forEach((function(e){clearInterval(e.pid)})),Qe=[]}function it(){clearInterval(Je)}var at,nt=L((function(e,t,i,a){if(t.scroll){var n,o=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,d=D(),c=!1;Fe!==i&&(Fe=i,tt(),Ge=t.scroll,n=t.scrollFn,!0===Ge&&(Ge=N(i,!0)));var h=0,u=Ge;do{var p=u,m=A(p),g=m.top,f=m.bottom,_=m.left,b=m.right,v=m.width,y=m.height,w=void 0,x=void 0,$=p.scrollWidth,k=p.scrollHeight,S=C(p),E=p.scrollLeft,z=p.scrollTop;p===d?(w=v<$&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),x=y<k&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=v<$&&("auto"===S.overflowX||"scroll"===S.overflowX),x=y<k&&("auto"===S.overflowY||"scroll"===S.overflowY));var M=w&&(Math.abs(b-o)<=s&&E+v<$)-(Math.abs(_-o)<=s&&!!E),T=x&&(Math.abs(f-r)<=s&&z+y<k)-(Math.abs(g-r)<=s&&!!z);if(!Qe[h])for(var P=0;P<=h;P++)Qe[P]||(Qe[P]={});Qe[h].vx==M&&Qe[h].vy==T&&Qe[h].el===p||(Qe[h].el=p,Qe[h].vx=M,Qe[h].vy=T,clearInterval(Qe[h].pid),0==M&&0==T||(c=!0,Qe[h].pid=setInterval(function(){a&&0===this.layer&&Ze.active._onTouchMove(Ke);var t=Qe[this.layer].vy?Qe[this.layer].vy*l:0,i=Qe[this.layer].vx?Qe[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(Ze.dragged.parentNode[R],i,t,e,Ke,Qe[this.layer].el)||I(Qe[this.layer].el,i,t)}.bind({layer:h}),24))),h++}while(t.bubbleScroll&&u!==d&&(u=N(u,!1)));et=c}}),30),ot=function(e){var t=e.originalEvent,i=e.putSortable,a=e.dragEl,n=e.activeSortable,o=e.dispatchSortableEvent,r=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=i||n;r();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),l&&!l.el.contains(c)&&(o("spill"),this.onSpill({dragEl:a,putSortable:i}))}};function rt(){}function st(){}rt.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var a=M(this.sortable.el,this.startIndex,this.options);a?this.sortable.el.insertBefore(t,a):this.sortable.el.appendChild(t),this.sortable.animateAll(),i&&i.animateAll()},drop:ot},s(rt,{pluginName:"revertOnSpill"}),st.prototype={onSpill:function(e){var t=e.dragEl,i=e.putSortable||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:ot},s(st,{pluginName:"removeOnSpill"});var lt,dt,ct,ht,ut,pt=[],mt=[],gt=!1,ft=!1,_t=!1;function bt(e,t){mt.forEach((function(i,a){var n=t.children[i.sortableIndex+(e?Number(a):0)];n?t.insertBefore(i,n):t.appendChild(i)}))}function vt(){pt.forEach((function(e){e!==ct&&e.parentNode&&e.parentNode.removeChild(e)}))}Ze.mount(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):t.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),it(),tt(),clearTimeout(x),x=void 0},nulling:function(){Ke=Fe=Ge=et=Je=Xe=Ye=null,Qe.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var i=this,a=(e.touches?e.touches[0]:e).clientX,n=(e.touches?e.touches[0]:e).clientY,o=document.elementFromPoint(a,n);if(Ke=e,t||this.options.forceAutoScrollFallback||h||c||p){nt(e,this.options,o,t);var r=N(o,!0);!et||Je&&a===Xe&&n===Ye||(Je&&it(),Je=setInterval((function(){var o=N(document.elementFromPoint(a,n),!0);o!==r&&(r=o,tt()),nt(e,i.options,o,t)}),10),Xe=a,Ye=n)}else{if(!this.options.bubbleScroll||N(o,!0)===D())return void tt();nt(e,this.options,N(o,!1),!1)}}},s(e,{pluginName:"scroll",initializeByDefault:!0})}),Ze.mount(st,rt),Ze.mount(new function(){function e(){this.defaults={swapClass:"sortable-swap-highlight"}}return e.prototype={dragStart:function(e){var t=e.dragEl;at=t},dragOverValid:function(e){var t=e.completed,i=e.target,a=e.onMove,n=e.activeSortable,o=e.changed,r=e.cancel;if(n.options.swap){var s=this.sortable.el,l=this.options;if(i&&i!==s){var d=at;!1!==a(i)?(k(i,l.swapClass,!0),at=i):at=null,d&&d!==at&&k(d,l.swapClass,!1)}o(),t(!0),r()}},drop:function(e){var t,i,a,n,o,r,s=e.activeSortable,l=e.putSortable,d=e.dragEl,c=l||this.sortable,h=this.options;at&&k(at,h.swapClass,!1),at&&(h.swap||l&&l.options.swap)&&d!==at&&(c.captureAnimationState(),c!==s&&s.captureAnimationState(),i=at,o=(t=d).parentNode,r=i.parentNode,o&&r&&!o.isEqualNode(i)&&!r.isEqualNode(t)&&(a=P(t),n=P(i),o.isEqualNode(r)&&a<n&&n++,o.insertBefore(i,o.children[a]),r.insertBefore(t,r.children[n])),c.animateAll(),c!==s&&s.animateAll())},nulling:function(){at=null}},s(e,{pluginName:"swap",eventProperties:function(){return{swapItem:at}}})}),Ze.mount(new function(){function e(e){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));e.options.avoidImplicitDeselect||(e.options.supportPointer?_(document,"pointerup",this._deselectMultiDrag):(_(document,"mouseup",this._deselectMultiDrag),_(document,"touchend",this._deselectMultiDrag))),_(document,"keydown",this._checkKeyDown),_(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,i){var a="";pt.length&&dt===e?pt.forEach((function(e,t){a+=(t?", ":"")+e.textContent})):a=i.textContent,t.setData("Text",a)}}}return e.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(e){var t=e.dragEl;ct=t},delayEnded:function(){this.isMultiDrag=~pt.indexOf(ct)},setupClone:function(e){var t=e.sortable,i=e.cancel;if(this.isMultiDrag){for(var a=0;a<pt.length;a++)mt.push(O(pt[a])),mt[a].sortableIndex=pt[a].sortableIndex,mt[a].draggable=!1,mt[a].style["will-change"]="",k(mt[a],this.options.selectedClass,!1),pt[a]===ct&&k(mt[a],this.options.chosenClass,!1);t._hideClone(),i()}},clone:function(e){var t=e.sortable,i=e.rootEl,a=e.dispatchSortableEvent,n=e.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||pt.length&&dt===t&&(bt(!0,i),a("clone"),n()))},showClone:function(e){var t=e.cloneNowShown,i=e.rootEl,a=e.cancel;this.isMultiDrag&&(bt(!1,i),mt.forEach((function(e){C(e,"display","")})),t(),ut=!1,a())},hideClone:function(e){var t=this,i=(e.sortable,e.cloneNowHidden),a=e.cancel;this.isMultiDrag&&(mt.forEach((function(e){C(e,"display","none"),t.options.removeCloneOnHide&&e.parentNode&&e.parentNode.removeChild(e)})),i(),ut=!0,a())},dragStartGlobal:function(e){e.sortable,!this.isMultiDrag&&dt&&dt.multiDrag._deselectMultiDrag(),pt.forEach((function(e){e.sortableIndex=P(e)})),pt=pt.sort((function(e,t){return e.sortableIndex-t.sortableIndex})),_t=!0},dragStarted:function(e){var t=this,i=e.sortable;if(this.isMultiDrag){if(this.options.sort&&(i.captureAnimationState(),this.options.animation)){pt.forEach((function(e){e!==ct&&C(e,"position","absolute")}));var a=A(ct,!1,!0,!0);pt.forEach((function(e){e!==ct&&Z(e,a)})),ft=!0,gt=!0}i.animateAll((function(){ft=!1,gt=!1,t.options.animation&&pt.forEach((function(e){V(e)})),t.options.sort&&vt()}))}},dragOver:function(e){var t=e.target,i=e.completed,a=e.cancel;ft&&~pt.indexOf(t)&&(i(!1),a())},revert:function(e){var t=e.fromSortable,i=e.rootEl,a=e.sortable,n=e.dragRect;pt.length>1&&(pt.forEach((function(e){a.addAnimationState({target:e,rect:ft?A(e):n}),V(e),e.fromRect=n,t.removeAnimationState(e)})),ft=!1,function(e,t){pt.forEach((function(i,a){var n=t.children[i.sortableIndex+(e?Number(a):0)];n?t.insertBefore(i,n):t.appendChild(i)}))}(!this.options.removeCloneOnHide,i))},dragOverCompleted:function(e){var t=e.sortable,i=e.isOwner,a=e.insertion,n=e.activeSortable,o=e.parentEl,r=e.putSortable,s=this.options;if(a){if(i&&n._hideClone(),gt=!1,s.animation&&pt.length>1&&(ft||!i&&!n.options.sort&&!r)){var l=A(ct,!1,!0,!0);pt.forEach((function(e){e!==ct&&(Z(e,l),o.appendChild(e))})),ft=!0}if(!i)if(ft||vt(),pt.length>1){var d=ut;n._showClone(t),n.options.animation&&!ut&&d&&mt.forEach((function(e){n.addAnimationState({target:e,rect:ht}),e.fromRect=ht,e.thisAnimationDuration=null}))}else n._showClone(t)}},dragOverAnimationCapture:function(e){var t=e.dragRect,i=e.isOwner,a=e.activeSortable;if(pt.forEach((function(e){e.thisAnimationDuration=null})),a.options.animation&&!i&&a.multiDrag.isMultiDrag){ht=s({},t);var n=S(ct,!0);ht.top-=n.f,ht.left-=n.e}},dragOverAnimationComplete:function(){ft&&(ft=!1,vt())},drop:function(e){var t=e.originalEvent,i=e.rootEl,a=e.parentEl,n=e.sortable,o=e.dispatchSortableEvent,r=e.oldIndex,s=e.putSortable,l=s||this.sortable;if(t){var d=this.options,c=a.children;if(!_t)if(d.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(ct,d.selectedClass,!~pt.indexOf(ct)),~pt.indexOf(ct))pt.splice(pt.indexOf(ct),1),lt=null,W({sortable:n,rootEl:i,name:"deselect",targetEl:ct,originalEvent:t});else{if(pt.push(ct),W({sortable:n,rootEl:i,name:"select",targetEl:ct,originalEvent:t}),t.shiftKey&&lt&&n.el.contains(lt)){var h,u,p=P(lt),m=P(ct);if(~p&&~m&&p!==m)for(m>p?(u=p,h=m):(u=m,h=p+1);u<h;u++)~pt.indexOf(c[u])||(k(c[u],d.selectedClass,!0),pt.push(c[u]),W({sortable:n,rootEl:i,name:"select",targetEl:c[u],originalEvent:t}))}else lt=ct;dt=l}if(_t&&this.isMultiDrag){if(ft=!1,(a[R].options.sort||a!==i)&&pt.length>1){var g=A(ct),f=P(ct,":not(."+this.options.selectedClass+")");if(!gt&&d.animation&&(ct.thisAnimationDuration=null),l.captureAnimationState(),!gt&&(d.animation&&(ct.fromRect=g,pt.forEach((function(e){if(e.thisAnimationDuration=null,e!==ct){var t=ft?A(e):g;e.fromRect=t,l.addAnimationState({target:e,rect:t})}}))),vt(),pt.forEach((function(e){c[f]?a.insertBefore(e,c[f]):a.appendChild(e),f++})),r===P(ct))){var _=!1;pt.forEach((function(e){e.sortableIndex===P(e)||(_=!0)})),_&&o("update")}pt.forEach((function(e){V(e)})),l.animateAll()}dt=l}(i===a||s&&"clone"!==s.lastPutMode)&&mt.forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)}))}},nullingGlobal:function(){this.isMultiDrag=_t=!1,mt.length=0},destroyGlobal:function(){this._deselectMultiDrag(),b(document,"pointerup",this._deselectMultiDrag),b(document,"mouseup",this._deselectMultiDrag),b(document,"touchend",this._deselectMultiDrag),b(document,"keydown",this._checkKeyDown),b(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(e){if(!(void 0!==_t&&_t||dt!==this.sortable||e&&w(e.target,this.options.draggable,this.sortable.el,!1)||e&&0!==e.button))for(;pt.length;){var t=pt[0];k(t,this.options.selectedClass,!1),pt.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:t,originalEvent:e})}},_checkKeyDown:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(e){e.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},s(e,{pluginName:"multiDrag",utils:{select:function(e){var t=e.parentNode[R];t&&t.options.multiDrag&&!~pt.indexOf(e)&&(dt&&dt!==t&&(dt.multiDrag._deselectMultiDrag(),dt=t),k(e,t.options.selectedClass,!0),pt.push(e))},deselect:function(e){var t=e.parentNode[R],i=pt.indexOf(e);t&&t.options.multiDrag&&~i&&(k(e,t.options.selectedClass,!1),pt.splice(i,1))}},eventProperties:function(){var e,t=this,i=[],a=[];return pt.forEach((function(e){var n;i.push({multiDragElement:e,index:e.sortableIndex}),n=ft&&e!==ct?-1:ft?P(e,":not(."+t.options.selectedClass+")"):P(e),a.push({multiDragElement:e,index:n})})),{items:(e=pt,function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),clones:[].concat(mt),oldIndicies:i,newIndicies:a}},optionListeners:{multiDragKey:function(e){return"ctrl"===(e=e.toLowerCase())?e="Control":e.length>1&&(e=e.charAt(0).toUpperCase()+e.substr(1)),e}}})});const yt=Ze},225:(e,t,i)=>{"use strict";i.d(t,{j:()=>n});var a=i(281);async function n(){const e=document.querySelector("home-assistant")||document.querySelector("hc-root"),t=await(0,a._)(e,"$ card-tools-popup");t&&t.closeDialog()}},152:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var a=i(69);const n=(e,t)=>t.split(".").reduce(((e,t)=>e&&e[t]||null),e),o=(e,t,i=void 0,o="unknown")=>{const r=e.selectedLanguage||e.language,s=r.split("-")[0];return a.Z[r]&&n(a.Z[r],t)||e.resources[r]&&e.resources[r][i]||a.Z[s]&&n(a.Z[s],t)||n(a.Z.zh,t)||o}},69:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});const a={en:{global:{dwains_dashboard_settings:"Dwains Dashboard Settings",enable_edit_mode:"Enable edit mode",disable_edit_mode:"Disable edit mode",version:"Version",disable_clock:"Disable clock",am_pm_clock:"AM/PM clock",disable_welcome_message:"Disable Welcome message",settings:"Global settings",dashboard_information:"Dashboard information",alarm_entity:"Alarm entity",weather_entity:"Weather entity",greeting_morning:"Good morning",greeting_afternoon:"Good afternoon",greeting_evening:"Good evening",v2_mode:"Enable Dwains Dashboard v2 mode (layout)"},editor:{lovelace_card:"Lovelace Card",create_lovelace_card:"Create a new lovelace card from scratch",dwains_dashboard_blueprint:"Dwains Dashboard Blueprint",use_dwains_dashboard_blueprint:"Use a Dwain Dashboard Blueprint to create a card",row_span:"Row span",row:"Row",rows:"Rows",col_span:"Col span",column:"Column",columns:"Columns",default_col_row:"Default col and row size",large_col_row:"Large screen col and row size",extra_large_col_row:"Extra large screen col and row size"},entity:{title:"Entity",title_plural:"entities",add_card_to:"Add card to ",edit_entity:"Edit entity",edit_entity_card:"Edit entity card",edit_entity_popup_card:"Edit entity popup card",add_to_favorites:"Add to favorites",remove_from_favorites:"Remove from favorites",popup_card:"Popup card",entity_card:"Entity card",settings:"Entity settings",group:"Group by devices",ungroup:"Ungroup by devices",enable:"Enable entity",disable:"Disable entity in DD",disable_all:"Disable all entities",hide_all:"Hide all entities",exclude:"Exclude entity in DD",hide:"Hide entity in DD",unhide:"Unhide entity",use_popup_card:"Use own popup card",use_entity_card:"Use own entity card",friendly_name:"Rename for DD",hidden:"The following entities are hidden:",disabled:"The following entities are disabled:",unavailable:"The following entities are unavailable:"},favorite:{title:"Favorite",title_plural:"Favorites",all_favorites:"All favorites"},home:{title:"Home"},area:{title:"Area",title_plural:"Areas",edit_area_button:"Edit area button",group_by_floor:"Group by floor",ungroup_by_floor:"Ungroup by floor",icon:"Area icon",floor:"Area floor",no_floor:"No floor",disable:"Disable area in DD",disabled:"The following areas are disabled:",enable:"Enable area"},device:{title:"Device",title_plural:"devices",edit_device_button:"Edit device button",edit_device_card:"Set custom entities card for domain ",edit_device_popup:"Set custom entities popup for domain ",current_blueprint_card:"You are currently using the following blueprint for all entities cards in the domain ",current_blueprint_popup:"You are currently using the following blueprint for all entities popups in the domain ",icon_required:"If you want to add it to navbar you must select an icon!",icon:"Device icon",show_in_navbar:"Add device page in main navbar",hide:"Hide device overview",unhide:"Unhide device overview",hidden:"The following device overviews are hidden",see_all:"See all",turn_all_off:"Turn all off",on:"on",open:"open",cover:"Cover",light:"Light",climate:"Climate",sensor:"Sensor",binary_sensor:"Binary Sensor",media_player:"Media player",remote:"Remote",scene:"Scene",number:"Number",switch:"Switch",button:"Button",water_heater:"Water heater",camera:"Camera",select:"Select",vacuum:"Vacuum",fan:"Fan",door:"Door",window:"Window",vibration:"Vibration",motion:"Motion",device_tracker:"Device tracker",lock:"Lock",input_boolean:"Input boolean",weather:"Weather",moisture:"Moisture",input_select:"Input select",carbon_monoxide:"Carbon monoxide",gas:"Gas",problem:"Problem",safety:"Safety",smoke:"Smoke",tamper:"Tamper",update:"Update",person:"Person",alarm_control_panel:"Alarm control panel",automation:"Automation",group:"Group by areas",ungroup:"Ungroup by areas"},more:{title:"More",title_plural:"More pages",pages:"pages",create:"Create new more page",edit:"Edit more page",name_required:"You must specify a name for the page",icon_required:"If you want to add it to navbar you must select an icon!",add_navbar:"Add this more page in main navbar",name:"More page name",icon:"More page icon"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"No YAML code entered!",installed:"Installed",no_blueprints_installed:"No blueprints installed",not_installed:"Not installed",installed_blueprints:"Installed blueprints",type:"Type blueprint",used_custom_cards:"Used custom cards",use:"Use this blueprint",install:"Install blueprint",yaml_code:"Blueprint YAML code",instruction:"Look for the blueprint you want to install in the Dwains Dashboard Community Blueprints Github and paste the blueprint yaml code below. After succesfull installation lovelace and this page will reload. Then you can use the installed blueprint."}},zh:{global:{dwains_dashboard_settings:"设置",enable_edit_mode:"编辑模式",disable_edit_mode:"关闭",version:"版本",disable_clock:"隐藏时间",am_pm_clock:"AM/PM",disable_welcome_message:"隐藏欢迎语",settings:"全局设置",dashboard_information:"面板信息",alarm_entity:"安防实体",weather_entity:"天气实体",greeting_morning:"早上好",greeting_afternoon:"下午好",greeting_evening:"晚上好",v2_mode:"切换V2布局"},editor:{lovelace_card:"Lovelace Card",create_lovelace_card:"使用系统卡片",dwains_dashboard_blueprint:"dwains蓝图模板",use_dwains_dashboard_blueprint:"使用blueprint创建卡片",row_span:"Row span",row:"行",rows:"行",col_span:"列宽",column:"列",columns:"列",default_col_row:"默认行列宽度",large_col_row:"大屏行列宽度",extra_large_col_row:"超大屏行列宽度"},entity:{title:"实体",title_plural:"实体",add_card_to:"添加卡片到",edit_entity:"编辑实体",edit_entity_card:"编辑实体卡片",edit_entity_popup_card:"编辑弹出卡片",add_to_favorites:"添加至便捷栏",remove_from_favorites:"移出便捷栏",popup_card:"弹出卡片",entity_card:"编辑卡片",settings:"设置",group:"按类型布局",ungroup:"取消类型布局",enable:"使用实体",disable:"禁用实体",disable_all:"禁用所有实体",hide_all:"隐藏所有实体",exclude:"排除实体",hide:"隐藏",unhide:"取消隐藏",use_popup_card:"使用弹出卡片",use_entity_card:"使用自定义卡片",friendly_name:"重命名实体",hidden:"以下实体已在面板中隐藏:",disabled:"以下实体在面板中禁用:",unavailable:"以下实体离线或不可用:"},favorite:{title:"快捷栏",title_plural:"快捷栏",all_favorites:"常用设备"},home:{title:"主页"},area:{title:"区域",title_plural:"区域",edit_area_button:"编辑区域按钮",group_by_floor:"按楼层布局",ungroup_by_floor:"取消楼层布局",icon:"区域图标",floor:"区域楼层",no_floor:"无楼层",disable:"禁用区域",disabled:"以下区域被禁用:",enable:"恢复区域"},device:{title:"设备",title_plural:"设备",edit_device_button:"编辑设备按钮",edit_device_card:"为此类型设备，创建自定义卡片 ",edit_device_popup:"为此类型设备，创建弹出卡片 ",current_blueprint_card:"当前blueprint卡片 ",current_blueprint_popup:"当前blueprint弹出卡片",icon_required:"添加至顶部快捷栏需设置图标!",icon:"图标",show_in_navbar:"添加设备类型到顶部快捷栏",hide:"隐藏",unhide:"取消隐藏",hidden:"以下设备类型已隐藏",see_all:"查看全部",turn_all_off:"全部关闭",on:"开启",open:"打开",cover:"窗帘",light:"灯光",climate:"空调",sensor:"传感器",binary_sensor:"布尔传感器",media_player:"媒体",remote:"遥控",scene:"场景",number:"数字",switch:"开关",button:"按钮",water_heater:"热水器",camera:"监控",select:"选择器",vacuum:"扫地机器人",fan:"风扇",door:"门",window:"窗户",vibration:"震动",motion:"人体移动",device_tracker:"设备跟踪",lock:"门锁",input_boolean:"布尔输入",weather:"天气",moisture:"潮湿",input_select:"输入选择器",carbon_monoxide:"一氧化碳",gas:"天然气",problem:"问题",safety:"安全 ",smoke:"烟雾",tamper:"防拆",update:"更新",person:"人员",alarm_control_panel:"安防面板",automation:"自动化",group:"分组",ungroup:"取消分组"},more:{title:"更多",title_plural:"更多页面",pages:"页面",create:"创建更多页面",edit:"编辑页面",name_required:"必须设置页面名称",icon_required:"需要设置页面图标!",add_navbar:"添加至顶部栏",name:"More page name",icon:"More page icon"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"没有输入yaml文件!",installed:"安装",no_blueprints_installed:"无blueprints安装",not_installed:"未安装",installed_blueprints:"已安装blueprints",type:"Type blueprint",used_custom_cards:"使用自定义卡片",use:"使用这个blueprint",install:"安装blueprint",yaml_code:"Blueprint代码",instruction:"点击下方链接，复制项目中blueprint文件下的yaml文件，粘贴到此处，可安装blueprint！"}},nl:{global:{dwains_dashboard_settings:"Dwains Dashboard Instellingen",enable_edit_mode:"Bewerkingsmodus inschakelen",disable_edit_mode:"Bewerkingsmodus uitschakelen",version:"Versie",disable_clock:"Klok uitzetten",am_pm_clock:"AM/PM klok",disable_welcome_message:"Welkom bericht uitzetten",settings:"Globale instellingen",dashboard_information:"Dashboard informatie",alarm_entity:"Alarm entiteit",weather_entity:"Weer entiteit",greeting_morning:"Goedemorgen",greeting_afternoon:"Goedemiddag",greeting_evening:"Goedenavond",v2_mode:"Dwains Dashboard v2-modus inschakelen (lay-out)"},editor:{lovelace_card:"Lovelace Kaart",create_lovelace_card:"Maak een nieuwe lovelace-kaart vanaf het begin",dwains_dashboard_blueprint:"Dwains Dashboard Blueprint",use_dwains_dashboard_blueprint:"Een Dwain Dashboard Blueprint gebruiken om een kaart te maken",row_span:"Rij span",row:"Rij",rows:"Rijen",col_span:"Kolom span",column:"Kolom",columns:"Kolommen",default_col_row:"Standaard col en rijgrootte",large_col_row:"Groot scherm kleur en rijgrootte",extra_large_col_row:"Extra grote schermkleur en rijgrootte"},entity:{title:"Entiteit",title_plural:"entiteiten",add_card_to:"Kaart toevoegen aan ",edit_entity:"Bewerk entiteit",edit_entity_card:"Bewerk entiteit kaart",edit_entity_popup_card:"Bewerk entiteit popup kaart",add_to_favorites:"Toevoegen aan favorieten",remove_from_favorites:"Verwijderen van favorieten",popup_card:"Popup kaart",entity_card:"Entiteit kaart",settings:"Entiteit instellingen",group:"Groep entiteiten",ungroup:"Groep entiteiten opheffen",enable:"Entiteit aanzetten",disable:"Entiteit uitschakelen in DD",disable_all:"Alle entiteiten uitschakelen",hide_all:"Alle entiteiten verbergen",exclude:"Entiteit uitsluiten in DD",hide:"Verberg entiteit in DD",unhide:"Entiteit zichtbaar maken",use_popup_card:"Eigen pop-upkaart gebruiken",use_entity_card:"Eigen entiteitskaart gebruiken",friendly_name:"Naam wijzigen voor DD",hidden:"De volgende entiteiten zijn verborgen:",disabled:"De volgende entiteiten zijn uitgeschakeld:",unavailable:"De volgende entiteiten zijn niet beschikbaar:"},favorite:{title:"Favoriet",title_plural:"Favorieten",all_favorites:"Alle favorieten"},home:{title:"Home"},area:{title:"Gebied",title_plural:"Gebieden",edit_area_button:"Bewerk gebied knop",group_by_floor:"Groeperen op verdieping",ungroup_by_floor:"Groepering opheffen op verdieping",icon:"Gebied icoon",floor:"Gebied verdieping",no_floor:"Geen verdieping",disable:"Schakel gebied uit in DD",disabled:"De volgende gebieden zijn uitgeschakeld:",enable:"Gebied inschakelen"},device:{title:"Apparaat",title_plural:"apparaten",edit_device_button:"Apparaatknop bewerken",edit_device_card:"Stel een custom entititeit kaart in voor domein ",edit_device_popup:"Stel een custom popup entiteiten in voor domein ",current_blueprint_card:"U gebruikt momenteel de volgende blueprint voor alle entiteitskaarten in het domein: ",current_blueprint_popup:"U gebruikt momenteel de volgende blueprint voor alle pop-ups van entiteiten in het domein: ",icon_required:"Als u het aan de navigatiebalk wilt toevoegen, moet u een icon selecteren!",icon:"Apparaat icon",show_in_navbar:"Apparaatpagina toevoegen in hoofdnavigatiebalk",hide:"Apparaatoverzicht verbergen",unhide:"Apparaatoverzicht zichtbaar maken",hidden:"De volgende apparaatoverzichten zijn verborgen",see_all:"Bekijk alle",turn_all_off:"Zet alle uit",on:"aan",open:"open",cover:"Rolluik",light:"Lamp",climate:"Thermostaat",sensor:"Sensor",binary_sensor:"Binaire sensor",media_player:"Media player",remote:"Afstandsbediening",scene:"Scène",number:"Nummer",switch:"Schakelaar",button:"Knop",water_heater:"Water verwarmer",camera:"Camera",select:"Selecteer",vacuum:"Stofzuiger",fan:"Ventilator",door:"Deur",window:"Raam",vibration:"Vibratie",motion:"Beweging",device_tracker:"Device tracker",lock:"Slot",input_boolean:"Input boolean",weather:"Weer",moisture:"Vochtigheid",input_select:"Input select",carbon_monoxide:"Koolmonoxide",gas:"Gas",problem:"Probleem",safety:"Veiligheid",smoke:"Rook",tamper:"Geknoeid",update:"Update",person:"Persoon",alarm_control_panel:"Alarm bedieningspaneel",automation:"Automatisering",group:"Groeperen op gebied",ungroup:"Groepering opheffen op gebied"},more:{title:"Meer",title_plural:"Meer pagina's",pages:"pagina's",create:"Nieuwe meer pagina maken",edit:"Meer pagina bewerken",name_required:"U moet een naam voor de pagina opgeven",icon_required:"Als u het aan de navigatiebalk wilt toevoegen, moet u een icoon selecteren!",add_navbar:"Voeg deze meer pagina toe in de hoofdnavigatiebalk",name:"Meer pagina naam",icon:"Meer pagina icoon"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"Geen YAML-code ingevoerd!",installed:"Geïnstalleerd",no_blueprints_installed:"Geen blueprints geïnstalleerd",not_installed:"Niet geïnstalleerd",installed_blueprints:"Installeer blueprints",type:"Type blueprint",used_custom_cards:"Gebruikte custom cards",use:"Gebruik deze blueprint",install:"Installeer blueprint",yaml_code:"Blueprint YAML-code",instruction:"Zoek de blueprint die u wilt installeren in de Dwains Dashboard Community Blueprints Github en plak de blueprint yaml-code hieronder. Na succesvolle installatie worden lovelace en deze pagina opnieuw geladen. Dan kunt u de geïnstalleerde blueprint gebruiken."}},fr:{global:{dwains_dashboard_settings:"Paramètres Dwains Dashboard",enable_edit_mode:"Activer le mode d'édition",disable_edit_mode:"Désactiver le mode d'édition",version:"Version",disable_clock:"Masquer l'horloge",am_pm_clock:"AM/PM l'horloge",disable_welcome_message:"Masquer le message de bienvenue",settings:"Paramètres globaux",dashboard_information:"Informations",alarm_entity:"Entité pour l'Alarme",weather_entity:"Entité pour la Météo",greeting_morning:"Bonjour",greeting_afternoon:"Bonne après-midi",greeting_evening:"Bonsoir",v2_mode:"Activer le mode Dwains Dashboard v2 (mise en page)"},editor:{lovelace_card:"Carte Lovelace",create_lovelace_card:"Créer une nouvelle carte Lovelace",dwains_dashboard_blueprint:"Dwains Dashboard Blueprint",use_dwains_dashboard_blueprint:"Utiliser un Blueprint pour créer une carte",row_span:"Nombre de rangée",row:"Rangée",rows:"Rangées",col_span:"Nombre de colonne",column:"Colonne",columns:"Colonnes",default_col_row:"Default : nombre de colonne et rangée",large_col_row:"Grand écran : nombre de colonne et rangée",extra_large_col_row:"Très grande écran : nombre de colonne et rangée"},entity:{title:"Entité",title_plural:"Entités",add_card_to:"Ajouter la carte à ",edit_entity:"Éditer l'entité",edit_entity_card:"Éditer une carte d'entité",edit_entity_popup_card:"Éditer une carte Pop-up",add_to_favorites:"Ajouter aux favoris",remove_from_favorites:"Retirer des favoris",popup_card:"Carte Pop-up",entity_card:"Carte de l'entité",settings:"Paramètres de l'entité",group:"Regrouper par entités",ungroup:"Dégrouper par entités",enable:"Activer l'entité",disable:"Désactiver l'entité dans DD",disable_all:"Désactiver toutes les entités",hide_all:"Masquer toutes les entités",exclude:"Exclure l'entité dans DD",hide:"Masquer l'entité dans DD",unhide:"Afficher l'entité",use_popup_card:"Utiliser une carte Pop-up",use_entity_card:"Utiliser une carte d'entité",friendly_name:"Renommer dans DD",hidden:"Les entités suivantes sont masqués:",disabled:"Les entités suivantes sont désactivés:",unavailable:"Les entités suivantes sont indisponibles:"},favorite:{title:"Favori",title_plural:"Favoris",all_favorites:"Tous les Favoris"},home:{title:"Accueil"},area:{title:"Pièce",title_plural:"Pièces",edit_area_button:"Édition d'une Pièce",group_by_floor:"Regrouper par étage",ungroup_by_floor:"Dégrouper par étage",icon:"Icône",floor:"Étage",no_floor:"Aucun n'étage",disable:"Désactiver l'aréa dans DD",disabled:"Les aréas suivantes sont désactivées:",enable:"Activer l'aréa"},device:{title:"Appareil",title_plural:"Appareils",edit_device_button:"Édition d'un appareil",edit_device_card:"Définir une carte d'entités personnalisées pour le domaine ",edit_device_popup:"Définir une carte Pop-up d'entités personnalisées pour le domaine ",current_blueprint_card:"Vous utilisez actuellement le Blueprint suivant pour toutes les cartes d'entités du domaine ",current_blueprint_popup:"Vous utilisez actuellement le Blueprint suivant pour tout les Pop-up d'entités du domaine ",icon_required:"Si vous voulez l'ajouter à la barre de navigation, vous devez choisir une icône!",icon:"icône de l'appareil",show_in_navbar:"Ajouter la page d'appareils à la barre de navigation",hide:"Masquer l'aperçu de l'appareil",unhide:"Afficher l'aperçu de l'appareil",see_all:"Voir tout",turn_all_off:"Tout désactiver",on:"Allumé",open:"Ouvert",cover:"Rideau",light:"Lumière",climate:"Thermostat",sensor:"Capteur",binary_sensor:"Binaire",media_player:"Multimédia",remote:"Télécommande",scene:"Scène",number:"Nombre",switch:"Interrupteur",button:"Bouton",water_heater:"Chauffe-eau",camera:"Caméra",select:"Sélection",vacuum:"Aspirateur",fan:"Ventilateur",door:"Porte",window:"Fenêtre",vibration:"Vibration",motion:"Mouvement",device_tracker:"Traqueur",lock:"Serrure",input_boolean:"Booléen",weather:"Temps",moisture:"Humidité",input_select:"Sélection",carbon_monoxide:"Monoxyde de carbone",gas:"Gaz",problem:"Problème",safety:"Sécurité",smoke:"Fumée",tamper:"Altérer",update:"Mise à jour",person:"Personne",alarm_control_panel:"Alarme",automation:"Automatisation",group:"Regrouper par aréas",ungroup:"Dégrouper par aréas"},more:{title:"Ajouter",title_plural:"Ajouter une page",pages:"Pages",create:"Créer une nouvelle page",edit:"Éditer une page",name_required:"Vous devez indiquer le nom de la page",icon_required:"Si vous voulez l'ajouter à la barre de navigation, vous devez choisir une icône!",add_navbar:"Ajouter à la barre de navigation",name:"Nom de la page",icon:"icône de la page"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"Pas de code YAML entré!",installed:"Installé",no_blueprints_installed:"Pas de Blueprints installés",not_installed:"N'est pas installé",installed_blueprints:"Blueprints installés",type:"Type de Blueprint",used_custom_cards:"Cartes personnalisées installées",use:"Ajouter",install:"Installer un Blueprint",yaml_code:"Code YAML du Blueprint",instruction:"Trouver le code du Blueprint que vous voulez installer dans le GitHub de la communauté de Dwains et collé le dans la section Code YAML du Blueprint plus basse. Après l’installation réussie, le tableau de bord va se recharger. Alors, vous pourrez utiliser le Blueprint."}},de:{global:{dwains_dashboard_settings:"Dwains Dashboard Einstellungen",enable_edit_mode:"Aktiviere Bearbeitungsmodus",disable_edit_mode:"Deaktiviere Bearbeitungsmodus",version:"Version",disable_clock:"Deaktiviere Uhr",am_pm_clock:"AM/PM Uhr",disable_welcome_message:"Deaktiviere Willkommensnachricht",settings:"Globale Einstellungen",dashboard_information:"Dashboard Informationen",alarm_entity:"Alarm Entität",weather_entity:"Wetter Entität",greeting_morning:"Guten Morgen",greeting_afternoon:"Guten Tag",greeting_evening:"Guten Abend",v2_mode:"Aktiviere Dwains Dashboard v2 Layout"},editor:{lovelace_card:"Lovelace Karte",create_lovelace_card:"Erstelle eine neue Lovelace Karte",dwains_dashboard_blueprint:"Dwains Dashboard Blueprint",use_dwains_dashboard_blueprint:"Nutze Dwains Dashboard Blueprint um eine Karte zu erstellen",row_span:"Anzahl Zeilen",row:"Zeile",rows:"Zeilen",col_span:"Anzahl Spalten",column:"Spalte",columns:"Spalten",default_col_row:"Standardgröße von Zeilen und Spalten",large_col_row:"Zeilen und Spaltengröße für große Bildschirme",extra_large_col_row:"Zeilen und Spaltengröße für extra große Bildschirme"},entity:{title:"Entität",title_plural:"Entitäten",add_card_to:"Füge Karte hinzu ",edit_entity:"Bearbeite Entität",edit_entity_card:"Bearbeite Entität-Karte",edit_entity_popup_card:"Bearbeite Pop-up-Karte",add_to_favorites:"Zu Favoriten hinzufügen",remove_from_favorites:"Entferne von Favoriten",popup_card:"Pop-up Karte",entity_card:"Enität-Karte",settings:"Entität Einstellungen",group:"Gruppierung nach Entitäten",ungroup:"Gruppierung nach Entitäten aufheben",enable:"Aktiviere Entität",disable:"Deaktiviere Entität in DD",disable_all:"Deaktiviere alle Entitäten",hide_all:"Blende alle Entitäten aus",exclude:"Schließe Entität in DD aus",hide:"Blende Entität in DD aus",unhide:"Blende Entität in DD ein",use_popup_card:"Nutze eigene Pop-up Karte",use_entity_card:"Nutze eigene Entität-Karte",friendly_name:"Nenne in DD um",hidden:"Folgende Entitäten sind ausgeblendet:",disabled:"Folgende Entitäten sind deaktiviert:",unavailable:"Folgende Entitäten sind nicht verfügbar:"},favorite:{title:"Favorit",title_plural:"Favoriten",all_favorites:"Alle Favoriten"},home:{title:"Home"},area:{title:"Bereich",title_plural:"Bereiche",edit_area_button:"Schaltfläche Bearbeite Bereiche",group_by_floor:"Gruppierung nach Etage",ungroup_by_floor:"Gruppierung nach Etage aufheben",icon:"Icon des Bereichs",floor:"Etage",no_floor:"Keine Etagen",disable:"Deaktiviere Bereich in DD",disabled:"Folgende Bereiche sind deaktiviert:",enable:"Aktiviere Bereich"},device:{title:"Gerät",title_plural:"Geräte",edit_device_button:"Schaltfläche Geräte bearbeiten",edit_device_card:"Nutze benutzerdefinierte Entität-Karte für Domäne ",edit_device_popup:"Nutze benutzerdefinierte Pop-Up-Karte der Domäne ",current_blueprint_card:"Derzeitige Nutzung des Blueprints für alle Entität-Karten der Domäne ",current_blueprint_popup:"Derzeitige Nutzung des Blueprints für alle Entität-Pop-Up-Karten der Domäne ",icon_required:"Es muss ein Icon gewählt werden, um dies der Navigationsleiste hinzuzufügen!",icon:"Icon des Geräts",show_in_navbar:"Füge Geräte Seite der Navigationsleiste hinzu.",hide:"Blende Geräteübersicht aus",unhide:"Blende Geräteübersicht ein",hidden:"Folgende Geräteübersichten sind ausgeblendet",see_all:"Zeige Alle",turn_all_off:"Schalte alle aus",on:"an",open:"offen",cover:"Beschattung",light:"Licht",climate:"Klima",sensor:"Sensor",binary_sensor:"Binärer Sensor",media_player:"Medien",remote:"Fernbedienung",scene:"Szene",number:"Nummer",switch:"Schalter",button:"Schaltfläche",water_heater:"Warmwassererzeuger",camera:"Kamera",select:"Auswahl",vacuum:"Staubsauger",fan:"Lüfter",door:"Tür",window:"Fenster",vibration:"Vibration",motion:"Bewegung",device_tracker:"Geräte-Tracker",lock:"Schloss",input_boolean:"Input Boolean",weather:"Wetter",moisture:"Feuchtigkeit",input_select:"Input Select",carbon_monoxide:"Kohlenstoffmonoxid",gas:"Gas",problem:"Problem",safety:"Sicherheit",smoke:"Rauch",tamper:"Manipulation",update:"Update",person:"Person",alarm_control_panel:"Alarmanlage",automation:"Automation",group:"Gruppierung nach Bereichen",ungroup:"Gruppierung nach Bereichen aufheben"},more:{title:"Weitere",title_plural:"Weitere Seiten",pages:"Seiten",create:"Erstelle neue Weitere Seite",edit:"Bearbeite Weitere Seite",name_required:"Wähle einen Namen für die Seite",icon_required:"Es muss ein Icon gewählt werden, um dies der Navigationsleiste hinzuzufügen!",add_navbar:"Füge die Weitere Seite zu Navigationsleiste hinzu",name:"Name der Weiteren Seite",icon:"Icon der Weiteren Seite"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"Kein YAML Code eingegeben!",installed:"Installiert",no_blueprints_installed:"Keine Blueprints installiert",not_installed:"Nicht installiert",installed_blueprints:"Installierte Blueprints",type:"Typ des Blueprints",used_custom_cards:"Verwendete benutzerdefinierte Karten",use:"Verwende diesen Blueprint",install:"Installiere Blueprint",yaml_code:"Blueprint YAML Code",instruction:"Suche im Dwains Dashboard Community Blueprints Github nach dem Blueprint die installiert werden soll und füge den   YAML Code unten ein. Nach erfolgreicher Installation wird die Seite neugeladen. Danach kann der Blueprint genutzt werden."}},pt:{global:{dwains_dashboard_settings:"Configurações do painel Dwains",enable_edit_mode:"Ativar o modo de edição",disable_edit_mode:"Desabilitar o modo de edição",version:"Versão",disable_clock:"Desativar relógio",am_pm_clock:"AM/PM clock",disable_welcome_message:"Desativar mensagem de boas vindas",settings:"Configurações globais",dashboard_information:"Informações do painel",alarm_entity:"Entidade de alarme",weather_entity:"Entidade meteorológica",greeting_morning:"Bom dia",greeting_afternoon:"Boa tarde",greeting_evening:"Boa noite",v2_mode:"Enable Dwains Dashboard v2 mode (layout)"},editor:{lovelace_card:"Cartão Lovelace",create_lovelace_card:"Crie um novo cartão lovelace do zero",dwains_dashboard_blueprint:"Planta do painel Dwains ",use_dwains_dashboard_blueprint:"Use uma planta do painel Dwains para criar um cartão",row_span:"Expansão de linha",row:"Linha",rows:"Linhas",col_span:"Extensão da coluna",column:"Coluna",columns:"Colunas",default_col_row:"Tamanho padrão de coluna e linha",large_col_row:"Tamanho de coluna e linha de tela grande",extra_large_col_row:"Tamanho de coluna e linha de tela extra grande"},entity:{title:"Entidade",title_plural:"Entidades",add_card_to:"Adicionar cartão a ",edit_entity:"Editar entidade",edit_entity_card:"Editar cartão de entidade",edit_entity_popup_card:"Editar cartão pop-up de entidade",add_to_favorites:"Adicionar aos favoritos",remove_from_favorites:"Remover dos favoritos",popup_card:"Cartão pop-up",entity_card:"Cartão de entidade",settings:"Configurações da entidade",group:"Agrupar por dispositivos",ungroup:"Desagrupar por dispositivos",enable:"Ativar entidade",disable:"Desativar entidade no DD",disable_all:"Disable all entities",hide_all:"Hide all entities",exclude:"Exclude entity in DD",hide:"Ocultar entidade no DD",unhide:"Reexibir entidade",use_popup_card:"Use o próprio cartão pop-up",use_entity_card:"Use o próprio cartão de entidade",friendly_name:"Renomear para DD",hidden:"As seguintes entidades estão ocultas:",disabled:"As seguintes entidades estão desabilitadas:",unavailable:"As seguintes entidades estão indisponíveis:"},favorite:{title:"Favorito",title_plural:"Favoritos",all_favorites:"Todos os favoritos"},home:{title:"Inicio"},area:{title:"Divisão",title_plural:"Divisões",edit_area_button:"Botão Editar divisão",group_by_floor:"Agrupar por andar",ungroup_by_floor:"Desagrupar por andar",icon:"Ícone da divisão",floor:"Piso da divisão",no_floor:"Sem piso",disable:"Disable area in DD",disabled:"The following areas are disabled:",enable:"Enable area"},device:{title:"Dispositivo",title_plural:"Dispositivos",edit_device_button:"Botão Editar dispositivo",edit_device_card:"Definir cartão de entidades personalizadas para domínio ",edit_device_popup:"Definir pop-up de entidades personalizadas para o domínio",current_blueprint_card:"Você está usando o seguinte esquema para todos os cartões de entidades no domínio",current_blueprint_popup:"Você está usando o seguinte esquema para todos os pop-ups de entidades no domínio",icon_required:"Se você quiser adicioná-lo à barra de navegação, você deve selecionar um ícone!",icon:"Ícone do dispositivo",show_in_navbar:"Adicionar página do dispositivo na barra de navegação principal",hide:"Hide device overview",unhide:"Unhide device overview",hidden:"The following device overviews are hidden",see_all:"Ver tudo",turn_all_off:"Turn all off",on:"ligado",open:"aberto",cover:"Persiana",light:"Luz",climate:"Clima",sensor:"Sensor",binary_sensor:"Sensor binário",media_player:"Reprodutor de mídia",remote:"Controlo remoto",scene:"Cena",number:"Número",switch:"Interruptor",button:"Botão",water_heater:"Aquecedor de água",camera:"Camera",select:"Select",vacuum:"Aspirador",fan:"Ventoinha",door:"Porta",window:"Janela",vibration:"Vibração",motion:"Movimento",device_tracker:"Rastreador de dispositivo",lock:"Fechadura",input_boolean:"Booleano de entrada",weather:"Clima",moisture:"Umidade",input_select:"Seleção de entrada",carbon_monoxide:"Monóxido de carbono",gas:"Gás",problem:"Problema",safety:"Segurança",smoke:"Fumo",tamper:"Adulterar",update:"Update"},more:{title:"Mais",title_plural:"Páginas adicionais",pages:"Páginas",create:"Criar mais uma página",edit:"Editar página adicional",name_required:"Você deve especificar um nome para a página",icon_required:"Se você quiser adicioná-lo à barra de navegação, você deve selecionar um ícone!",add_navbar:"Adicione mais esta página na barra de navegação principal",name:"Nome da página adicional",icon:"Ícone da página adicional"},blueprint:{title:"Esquema",title_plural:"Esquemas",yaml_required:"Nenhum código YAML inserido!",installed:"Instalado",no_blueprints_installed:"Nenhum esquema instalada",not_installed:"Não instalado",installed_blueprints:"Esquemas instalados",type:"Tipo de esquema",used_custom_cards:"Cartões personalizados usados",use:"Use este esquema",install:"Instalar esquema",yaml_code:"Código YAML do esquema",instruction:"Procure o esquema que deseja instalar em Dwains Dashboard Community Blueprints Github e cole o código yaml do mesmo abaixo. Após a instalação bem sucedida, o lovelace e esta página serão recarregadas. Então você pode usar o esquema instalado."}},sv:{global:{dwains_dashboard_settings:"Dwains Dashboardinställningar",enable_edit_mode:"Aktivera redigeringsläge",disable_edit_mode:"Inaktivera redigeringsläge",version:"Version",disable_clock:"Inaktivera klocka",am_pm_clock:"AM/PM clock",disable_welcome_message:"Inaktivera välkomstmeddelande",settings:"Globala inställningar",dashboard_information:"Dashboardinformation",alarm_entity:"Larmentitet",weather_entity:"Väderentitet",greeting_morning:"God morgon",greeting_afternoon:"God middag",greeting_evening:"God kväll",v2_mode:"Aktivera Dwains Dashboard v2-läge (layout)"},editor:{lovelace_card:"Lovelacekort",create_lovelace_card:"Skapa ett nytt lovelacekort från början",dwains_dashboard_blueprint:"Dwains Dashboard-blueprint",use_dwains_dashboard_blueprint:"Använd en Dwains Dashboard-blueprint för att skapa ett kort",row_span:"Radspann",row:"Rad",rows:"Rader",col_span:"Kolumnspann",column:"Kolumn",columns:"Kolumner",default_col_row:"Standardkolumn- och radstorlek",large_col_row:"Kolumn- och radstorlek för stora skärmar",extra_large_col_row:"Kolumn- och radstorlek för extra stora skärmar"},entity:{title:"Entitet",title_plural:"entiteter",add_card_to:"Lägg till kort till ",edit_entity:"Redigera entitet",edit_entity_card:"Redigera entitetskort",edit_entity_popup_card:"Redigera entitets-pop up-kort",add_to_favorites:"Lägg till i favoriter",remove_from_favorites:"Ta bort från favoriter",popup_card:"Pop up-kort",entity_card:"Entitetskort",settings:"Entitetsinställningar",group:"Gruppera efter enheter",ungroup:"Avgruppera efter enheter",enable:"Aktivera entitet",disable:"Inaktivera entitet i DD",disable_all:"Inaktivera alla entiteter",hide_all:"Göm alla entiteter",exclude:"Exkludera entitet i DD",hide:"Dölj entitet i DD",unhide:"Ta fram entitet",use_popup_card:"Använd eget pop up-kort",use_entity_card:"Använd eget entitetskort",friendly_name:"Byt namn för DD",hidden:"Följande entiteter är dolda:",disabled:"Följande entiteter är inaktiverade:",unavailable:"Följande entiteter är otillgängliga:"},favorite:{title:"Favorit",title_plural:"Favoriter",all_favorites:"Alla favoriter"},home:{title:"Hem"},area:{title:"Område",title_plural:"Områden",edit_area_button:"Redigera områdesknapp",group_by_floor:"Gruppera efter våningsplan",ungroup_by_floor:"Avgruppera efter våningsplan",icon:"Områdesikon",floor:"Våningsplan",no_floor:"Inget våningsplan",disable:"Inaktivera område i DD",disabled:"Följande områden är inaktiverade:",enable:"Aktivera område"},device:{title:"Enhet",title_plural:"enheter",edit_device_button:"Redigera enhetsknapp",edit_device_card:"Ställ in anpassade entitetskort för domän ",edit_device_popup:"Ställ in anpassade entitetspopups för domän ",current_blueprint_card:"Du använder för närvarande följande blueprint för alla entitetskort i domänen ",current_blueprint_popup:"Du använder för närvarande följande blueprint för alla entitetspopups i domänen ",icon_required:"Om du vill lägga till den till navigationslisten måste du välja en ikon!",icon:"Enhetsikon",show_in_navbar:"Lägg till enhetssida till huvudnavigationslisten",hide:"Dölj enhetsöversikt",unhide:"Ta fram enhetsöversikt",hidden:"Följande enhetsöversikter är dolda",see_all:"Se alla",turn_all_off:"Stäng av alla",on:"på",open:"öppen",cover:"Skydd",light:"Belysning",climate:"Klimat",sensor:"Sensorer",binary_sensor:"Binära sensorer",media_player:"Mediaspelare",remote:"Fjärrkontroll",scene:"Scener",number:"Nivåer",switch:"Kontakter",button:"Knappar",water_heater:"Varmvattenberedare",camera:"Kameror",select:"Flervalslistor",vacuum:"Dammsugare",fan:"Fläktar",door:"Dörr",window:"Fönster",vibration:"Vibration",motion:"Rörelse",device_tracker:"Enhetsspårare",lock:"Lås",input_boolean:"Växlare",weather:"Väder",moisture:"Fuktighet",input_select:"Inmatningsval",carbon_monoxide:"Kolmonoxid",gas:"Gas",problem:"Problem",safety:"Säkerhet",smoke:"Rök",tamper:"Manipulation",update:"Uppdatera",person:"Person",alarm_control_panel:"Larmkontrollpanel",automation:"Automation",group:"Gruppera efter områden",ungroup:"Avgruppera efter områden"},more:{title:"Mer",title_plural:"Mersidor",pages:"sidor",create:"Skapa ny mersida",edit:"Redigera mersida",name_required:"Du måste ange ett namn för sidan",icon_required:"Om du vill lägga till den till navigationslisten måste du välja en ikon!",add_navbar:"Lägg till denna mersida till huvudnavigationslisten",name:"Namn på mersida",icon:"Ikon för mersida"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"Ingen YAML-kod inmatad!",installed:"Installerad",no_blueprints_installed:"Inga blueprints installerade",not_installed:"Inte installerad",installed_blueprints:"Installerade blueprints",type:"Typ av blueprint",used_custom_cards:"Använda skräddarsydda kort",use:"Använd denna blueprint",install:"Installera blueprint",yaml_code:"Blueprint YAML-kod",instruction:"Leta upp den blueprint du vill installera på Dwains Dashboard Community Blueprints Github och klistra in blueprintens YAML-kod nedanför. Efter en lyckad installation kommer lovelace och denna sida att laddas om. Du kan sedan använda den installerade blueprinten."}},it:{global:{dwains_dashboard_settings:"Dwains Dashboard Impostazioni",enable_edit_mode:"Abilita la modalità di modifica",disable_edit_mode:"Disabilita la modalità di modifica",version:"Versione",disable_clock:"Disattiva orologio",am_pm_clock:"AM/PM clock",disable_welcome_message:"Disabilita il messaggio di Benvenuto",settings:"Impostazioni Globali",dashboard_information:"Inpostazioni Dashboard",alarm_entity:"Entità di allarme",weather_entity:"Entità meteorologica",greeting_morning:"Buon giorno",greeting_afternoon:"Buon pomeriggio",greeting_evening:"Buona serata",v2_mode:"Enable Dwains Dashboard v2 mode (layout)"},editor:{lovelace_card:"Lovelace Card",create_lovelace_card:"Crea una nuova card lovelace da zero",dwains_dashboard_blueprint:"Dwains Dashboard Blueprint",use_dwains_dashboard_blueprint:"Usa Dwain Dashboard Blueprint per creare una carta",row_span:"Intervallo di riga",row:"Riga",rows:"Righe",col_span:"Col span",column:"Colonna",columns:"Colonne",default_col_row:"Colore predefinito e dimensione della riga",large_col_row:"Dimensione colonna e riga a schermo grande",extra_large_col_row:"Dimensione colonna e riga a schermo intero"},entity:{title:"Entità",title_plural:"entità",add_card_to:"Aggiungi carta a",edit_entity:"Modifica entità",edit_entity_card:"Modifica scheda entità",edit_entity_popup_card:"Modifica scheda popup entità",add_to_favorites:"Aggiungi ai preferiti",remove_from_favorites:"Rimuovi dai preferiti",popup_card:"Scheda popup",entity_card:"Entità card",settings:"Entità Impostazioni",group:"Raggruppa per dispositivi",ungroup:"Separa per dispositivi",enable:"Abilita entità",disable:"Disabilita entità in DD",disable_all:"Disable all entities",hide_all:"Hide all entities",exclude:"Exclude entity in DD",hide:"Nascondi entità in DD",unhide:"Mostra entità",use_popup_card:"Usa la tua scheda popup",use_entity_card:"Usa la entity card",friendly_name:"Rinomina per DD",hidden:"Le seguenti entità sono nascoste:",disabled:"Le seguenti entità sono disabilitate:",unavailable:"Le seguenti entità non sono disponibili:"},favorite:{title:"Preferito",title_plural:"Preferiti",all_favorites:"Tutti i preferiti"},home:{title:"Home"},area:{title:"Zona",title_plural:"Zone",edit_area_button:"Modifica pulsante area",group_by_floor:"Raggruppa per piano",ungroup_by_floor:"Separa per piano",icon:"Icona della zona",floor:"Piano della zona",no_floor:"Nessun pavimento",disable:"Disable area in DD",disabled:"The following areas are disabled:",enable:"Enable area"},device:{title:"Dispositivo",title_plural:"Dispositivi",edit_device_button:"Pulsante Modifica dispositivo",edit_device_card:"Imposta la scheda entità personalizzate per il dominio ",edit_device_popup:"Imposta il popup di entità personalizzate per il dominio ",current_blueprint_card:"Attualmente stai utilizzando il seguente progetto per tutte le schede entità nel dominio ",current_blueprint_popup:"Attualmente stai utilizzando il seguente blueprint per tutti i popup di entità nel dominio ",icon_required:"Se vuoi aggiungerlo alla barra di navigazione devi selezionare una icona!",icon:"Icona del dispositivo",show_in_navbar:"Aggiungi la pagina del dispositivo nella barra di navigazione principale",hide:"Hide device overview",unhide:"Unhide device overview",hidden:"The following device overviews are hidden",see_all:"Vedi tutto",turn_all_off:"Turn all off",on:"su",open:"aprire",cover:"Coperchio",light:"Luce",climate:"Clima",sensor:"Sensore",binary_sensor:"Sensore binario",media_player:"Media player",remote:"A Distanza",scene:"Scena",number:"Numero",switch:"Interruttore",button:"Bottone",water_heater:"Scaldabagno",camera:"Camera",select:"Selezionato",vacuum:"Aspirapolvere",fan:"Ventilatore",door:"Porta",window:"Finestra",vibration:"Vibrazione",motion:"Movimento",device_tracker:"Localizzatore di dispositivi",lock:"Serratura",input_boolean:"Input booleano",weather:"Condizioni meteo",moisture:"Umidità",input_select:"Seleziona input",carbon_monoxide:"Monossido di carbonio",gas:"Gas",problem:"Problema",safety:"Sicurezza",smoke:"Fumo",tamper:"Manomettere",update:"Aggiornare",person:"Persona",alarm_control_panel:"Pannello di controllo allarme",automation:"Automation",group:"Group by areas",ungroup:"Ungroup by areas"},more:{title:"Di più",title_plural:"Più pagine",pages:"pagine",create:"Crea una nuova pagina",edit:"Modifica più pagina",name_required:"È necessario specificare un nome per la pagina",icon_required:"Se vuoi aggiungerlo alla barra di navigazione devi selezionare una icona!",add_navbar:"Aggiungi questa pagina in più nella barra di navigazione principale",name:"Altro nome di pagina",icon:"Icona della pagina più"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"Nessun codice YAML inserito!",installed:"Installato",no_blueprints_installed:"Nessun blueprints installato",not_installed:"Non installato",installed_blueprints:"Blueprints Installati",type:"Tipo blueprint",used_custom_cards:"Carte personalizzate usate",use:"Usa questo blueprint",install:"installa blueprint",yaml_code:"Blueprint YAML code",instruction:"Cerca il progetto che desideri installare in Dwains Dashboard Community Blueprints Github e incolla il codice yaml del progetto di seguito. Dopo una corretta installazione, lovelace e questa pagina si ricaricherà. Quindi puoi utilizzare il progetto installato."}},es:{global:{dwains_dashboard_settings:"Opciones de Dwains Dashboard",enable_edit_mode:"Habilitar modo edición",disable_edit_mode:"Deshabilitar modo edición",version:"Version",disable_clock:"Desactivar reloj",am_pm_clock:"AM/PM clock",disable_welcome_message:"Desabilitar mensaje de bienvenida",settings:"Configuración global",dashboard_information:"información del Dashboard",alarm_entity:"Entidad alarma",weather_entity:"Entidad tiempo",greeting_morning:"Buenos días",greeting_afternoon:"Buenas tardes",greeting_evening:"Buenas noches",v2_mode:"Enable Dwains Dashboard v2 mode (layout)"},editor:{lovelace_card:"Lovelace Card",create_lovelace_card:"Crea una nueva lovelace card desde cero",dwains_dashboard_blueprint:"Dwains Dashboard Blueprint",use_dwains_dashboard_blueprint:"Usar un Blueprint de Dwain Dashboard para crear una tarjeta",row_span:"Intervalo de filas",row:"Fila",rows:"Filas",col_span:"Intervalo de Columnas",column:"Columna",columns:"Columnas",default_col_row:"Tamaño predeterminado de columna y fila",large_col_row:"Tamaño de columna y fila grande",extra_large_col_row:"Tamaño de columna y fila extra grande"},entity:{title:"Entidad",title_plural:"Entidades",add_card_to:"Agregar tarjeta a ",edit_entity:"Editar entidad",edit_entity_card:"Editar tarjeta de entidad",edit_entity_popup_card:"Editar tarjeta emergente de entidad",add_to_favorites:"Agregar a favoritos",remove_from_favorites:"Quitar de favoritos",popup_card:"Tarjeta emergente",entity_card:"Tarjeta de entidad",settings:"Configuración de entidad",group:"Agrupar por dispositivos",ungroup:"Desagrupar por dispositivos",enable:"Habilitar entidad",disable:"Deshabilitar entidad en DD",disable_all:"Disable all entities",hide_all:"Hide all entities",exclude:"Exclude entity in DD",hide:"Ocultar entidad en DD",unhide:"Mostrar entidad",use_popup_card:"Utilizar su propia tarjeta emergente",use_entity_card:"Utilice su propia tarjeta de entidad",friendly_name:"Renombrar en DD",hidden:"Las siguientes entidades están ocultas:",disabled:"Las siguientes entidades estan deshabilitadas:",unavailable:"Las siguientes entidades no están disponibles:"},favorite:{title:"Favorito",title_plural:"Favoritos",all_favorites:"Todos los favoritos"},home:{title:"Home"},area:{title:"Habitación",title_plural:"Habitaciónes",edit_area_button:"Editar Habitación",group_by_floor:"Agrupar por piso",ungroup_by_floor:"Desagrupar por piso",icon:"Icono de Habitación",floor:"Piso de Habitación",no_floor:"Sin piso",disable:"Disable area in DD",disabled:"The following areas are disabled:",enable:"Enable area"},device:{title:"Dispositivo",title_plural:"Dispositivos",edit_device_button:"Editar dispositivo",edit_device_card:"Establecer tarjeta de entidades personalizadas para el dominio ",edit_device_popup:"Establecer una ventana emergente de entidades personalizadas para el dominio",current_blueprint_card:"Actualmente está utilizando el siguiente modelo para todas las tarjetas de entidades en el dominio",current_blueprint_popup:"Actualmente está utilizando el siguiente modelo para todas las ventanas emergentes de entidades en el dominio",icon_required:"Si desea agregarlo a la barra de navegación, debe seleccionar un icono.",icon:"Icono de dispositivo",show_in_navbar:"Agregar página de dispositivo en la barra de navegación principal",hide:"Hide device overview",unhide:"Unhide device overview",hidden:"The following device overviews are hidden",see_all:"Ver todos",turn_all_off:"Turn all off",on:"on",open:"Abierto",cover:"Cover",light:"Luz",climate:"Clima",sensor:"Sensor",binary_sensor:"Sensor binario",media_player:"Reproductor multimedia",remote:"Control remoto",scene:"Escena",number:"Número",switch:"Interruptor",button:"Botón",water_heater:"Calentador de agua",camera:"Cámara",select:"seleccione",vacuum:"Aspiradora",fan:"Ventilador",door:"Puerta",window:"Ventana",vibration:"Vibración",motion:"Movimiento",device_tracker:"Rastreador de dispositivo",lock:"Bloquear",input_boolean:"Entrada booleana",weather:"Clima",moisture:"Humedad",input_select:"Selección de entrada",carbon_monoxide:"Monoxido de carbono",gas:"Gas",problem:"Problema",safety:"Seguridad",smoke:"Humo",tamper:"Manipular",update:"Actualizar",person:"Persona",alarm_control_panel:"Panel de control de Alarma",automation:"Automation",group:"Group by areas",ungroup:"Ungroup by areas"},more:{title:"Más",title_plural:"Páginas extra ",pages:"páginas",create:"Crear nueva página extra",edit:"Editar página extra",name_required:"Debe especificar un nombre para la página.",icon_required:"Si desea agregarla a la barra de navegación, debe seleccionar un icono.",add_navbar:"Agregar esta página extra en la barra de navegación principal",name:"Nombre de la página extra",icon:"Icono de la página extra"},blueprint:{title:"Blueprint",title_plural:"Blueprints",yaml_required:"¡No se ingresó ningún código YAML!",installed:"Instalado",no_blueprints_installed:"No hay blueprints instalados",not_installed:"No instalado",installed_blueprints:"Blueprints instalados",type:"Tipo de blueprint",used_custom_cards:"Tarjetas personalizadas usadas",use:"Usar este blueprint",install:"Instalar blueprint",yaml_code:"Blueprint código YAML",instruction:"Busque el blueprint que desea instalar en Dwains Dashboard Community Blueprints Github y pegue el código yaml del blueprint a continuación. Después de una instalación exitosa, lovelace y esta página se volverá a cargar. Entonces podrás usar el plano instalado."}},pl:{global:{dwains_dashboard_settings:"Ustawenia Dwains Dashboard",enable_edit_mode:"Edytuj",disable_edit_mode:"Wyłącz edycję",version:"Wersja",disable_clock:"Wyłącz zegar",am_pm_clock:"AM/PM clock",disable_welcome_message:"Wyłącz wiadomość powitalną",settings:"Ustawienia ogólne",dashboard_information:"Informacje o Dashboard",alarm_entity:"Encja alarmu",weather_entity:"Encja pogody",greeting_morning:"Dzień Dobry",greeting_afternoon:"Miłego popołudnia",greeting_evening:"Dobry wieczór",v2_mode:"Włącz tryb Dwains Dashboard v2 (wygląd)"},editor:{lovelace_card:"Karta Lovelace",create_lovelace_card:"Utwórz nową kartę Lovelace",dwains_dashboard_blueprint:"Schemat Dwains Dashboard",use_dwains_dashboard_blueprint:"Użyj schematu Dwains Dashboard do stworzenia karty",row_span:"Szerokość wierszy",row:"Wiersz",rows:"Wiersze",col_span:"Szerokość kolumn",column:"Kolumna",columns:"Kolumny",default_col_row:"Domyślna szerokość kolumn i wierszy",large_col_row:"Duży ekran - szerokość kolumn i wierszy",extra_large_col_row:"Wielki ekran - szerokość kolumn i wierszy"},entity:{title:"Encja",title_plural:"Encje",add_card_to:"Dodaj kartę do: ",edit_entity:"Edytuj encję",edit_entity_card:"Edytuj kartę encji",edit_entity_popup_card:"Edytuj wyskakującą kartę",add_to_favorites:"Dodaj do Ulubionych",remove_from_favorites:"Usuń z Ulubionych",popup_card:"Wyskakująca karta",entity_card:"Karta encji",settings:"Ustawienia encji",group:"Grupuj według urządzeń",ungroup:"Rozgrupuj według urządzeń",enable:"Włącz encję",disable:"Wyłącz encję w DD",disable_all:"Wyłącz wszystkie encje",hide_all:"Ukryj wszystkie encje",exclude:"Wyłącz encje w DD",hide:"Ukryj encje w DD",unhide:"Odkryj encje",use_popup_card:"Użyj własnej wyskakującej karty",use_entity_card:"Użyj własnej karty encji",friendly_name:"Przyjazna nazwa DD:",hidden:"Ukryte encje:",disabled:"Wyłączone encje:",unavailable:"Niedostępne encje:"},favorite:{title:"Ulubione",title_plural:"Ulubione",all_favorites:"Wszystkie Ulubione"},home:{title:"Strona główna"},area:{title:"Obszar",title_plural:"Obszary",edit_area_button:"Edytuj przycisk obszaru",group_by_floor:"Grupuj według pięter",ungroup_by_floor:"Rozgrupuj według pięter",icon:"Ikony obszarów",floor:"Obszar pięter",no_floor:"Brak pięter",disable:"Wyłącz obszar",disabled:"Obszary wyłączone:",enable:"Włącz obszar"},device:{title:"Urządzenie",title_plural:"Urządzenia",edit_device_button:"Edytuj przycisk urządzenia",edit_device_card:"Edytuj własną encję karty dla domeny",edit_device_popup:"Edytuj własną wyskakującą encję dla domeny",current_blueprint_card:"Obecnie używany schemat dla wszystkich encji w domenie: ",current_blueprint_popup:"Obecnie używany schemat dla wszystkich wyskakujących encji w domenie: ",icon_required:"Jeśli chcesz dodać urządzenie do paska nawigacyjnego, wybierz jego ikonę!",icon:"Ikony urządzeń:",show_in_navbar:"Pokaż urządzenie w pasku nawigacyjnym",hide:"Ukryj przegląd urządzeń",unhide:"Pokaż przegląd urządzeń",hidden:"Urządzenia ukryte:",see_all:"Zobacz wszystkie",turn_all_off:"Wyłącz wszystkie",on:"Włączony",open:"Otwarty",cover:"Roleta",light:"Światło",climate:"Termostat",sensor:"Sensor",binary_sensor:"Sensor binarny",media_player:"Odtwarzacz multimediów",remote:"Zdalny",scene:"Scena",number:"Liczba",switch:"Przełącznik",button:"Przycisk",water_heater:"Podgrzewacz wody",camera:"Kamera",select:"Wybierz",vacuum:"Odkurzacz",fan:"Wentylator",door:"Drzwi",window:"Okno",vibration:"Wibracja",motion:"Ruch",device_tracker:"Śledzenie urządzeń",lock:"Zamek",input_boolean:"Wybór przełącznika",weather:"Pogoda",moisture:"Wilgoć",input_select:"Wybór wejścia",carbon_monoxide:"Tlenek węgla",gas:"Gaz",problem:"Problem",safety:"Bezpieczeństwo",smoke:"Dym",tamper:"Sabotaż",update:"Aktualizacja",person:"Osoba",alarm_control_panel:"Panel alarmu",automation:"Automatyka",group:"Grupuj wg obszarów",ungroup:"Rozgrupuj wg obszarów"},more:{title:"Więcej",title_plural:"Więcej stron",pages:"Strony",create:"Utwórz więcej nowych stron",edit:"Edytuj więcej stron",name_required:"Podaj nazwę strony:",icon_required:"Jeśli chcesz dodać stronę do paska nawigacyjnego, wybierz jej ikonę!",add_navbar:"Dodaj tę stronę do paska nawigacyjnego",name:"Więcej nazw stron",icon:"Więcej ikon strony"},blueprint:{title:"Schemat",title_plural:"Schematy",yaml_required:"Nie wprowadzono kodu YAML!",installed:"Zainstalowane",no_blueprints_installed:"Brak zainstalowanego schematu",not_installed:"Nie zainstalowano",installed_blueprints:"Zainstalowane schematy:",type:"Typ schematu",used_custom_cards:"Używane karty niestandardowe:",use:"Użyj tego schematu",install:"Zainstaluj schemat",yaml_code:"Kod YAML schematu",instruction:"Odszukaj żądany schemat na Dwains Dashboard Community Blueprints Github i wklej kod YAML. Po instalacji lovelace strona zostanie ponownie załadowana abyś mógł użyć zainstalowanego schematu. "}}}},49:(e,t,i)=>{"use strict";i.d(t,{NR:()=>h,ST:()=>u,VL:()=>m,V_:()=>s,Wf:()=>a,Xw:()=>p,ae:()=>d,hI:()=>c,iW:()=>g,nZ:()=>o,tj:()=>r,y7:()=>n,z:()=>l});const a={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",overcast:"mdi:weather-cloudy-arrow-right",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"},n={armed_away:"mdi:shield-lock",armed_vacation:"mdi:shield-airplane",armed_home:"mdi:shield-home",armed_night:"mdi:shield-moon",armed_custom_bypass:"mdi:security",pending:"mdi:shield-outline",triggered:"mdi:bell-ring",disarmed:"mdi:shield-off"},o="unavailable",r=["closed","locked","off","docked","idle","standby","paused","auto"],s=["unavailable","unknown"],l=["sensor"],d=["binary_sensor"],c=["light","switch","fan"],h=["climate"],u=["vacuum","media_player","lock"],p={sensor:["temperature","humidity"],binary_sensor:["motion","door","window","vibration","moisture","smoke"]},m={light:{on:"mdi:lightbulb-on",off:"mdi:lightbulb-outline"},switch:{on:"mdi:power-plug",off:"mdi:power-plug"},fan:{on:"mdi:fan",off:"mdi:fan-off"},sensor:{humidity:"mdi:water-percent",temperature:"mdi:thermometer"},binary_sensor:{motion:"mdi:motion-sensor",door:"mdi:door-open",window:"mdi:window-open-variant",vibration:"mdi:vibrate",moisture:"mdi:water-alert",smoke:"mdi:smoke-detector-variant-alert"},vacuum:{on:"mdi:robot-vacuum"},media_player:{on:"mdi:speaker"},lock:{on:"mdi:lock-open"},climate:{on:"mdi:thermostat"}},g=["button","calendar","entity","gauge","history-graph","light","media-control","picture-entity","sensor","thermostat","weather-forecast","custom:button-card","custom:mushroom-fan-card","custom:mushroom-cover-card","custom:mushroom-entity-card","custom:mushroom-light-card"]},148:(e,t,i)=>{"use strict";i.d(t,{oi:()=>D,iv:()=>S,dy:()=>h.dy});var a=i(105),n=i(714);function o(e,t){const{element:{content:i},parts:a}=e,n=document.createTreeWalker(i,133,null,!1);let o=s(a),r=a[o],l=-1,d=0;const c=[];let h=null;for(;n.nextNode();){l++;const e=n.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&d++;void 0!==r&&r.index===l;)r.index=null!==h?-1:r.index-d,o=s(a,o),r=a[o]}c.forEach((e=>e.parentNode.removeChild(e)))}const r=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},s=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if((0,n.pC)(t))return i}return-1};var l=i(952),d=i(630),c=i(622),h=i(971);const u=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const m=e=>t=>{const i=u(t.type,e);let a=d.r.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},d.r.set(i,a));let o=a.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n.Jw);if(o=a.keyString.get(r),void 0===o){const i=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(i,e),o=new n.YS(t,i),a.keyString.set(r,o)}return a.stringsArray.set(t.strings,o),o},g=["html","svg"],f=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const _={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},b=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b},y="finalized";class w extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const a=this._attributeNameForProperty(i,t);void 0!==a&&(this._attributeToPropertyMap.set(a,i),e.push(a))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=v){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const n=this[e];this[t]=a,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||v}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(y)||e.finalize(),this[y]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=b){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,a=t.converter||_,n="function"==typeof a?a:a.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,a=t.converter;return(a&&a.toAttribute||_.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=v){const a=this.constructor,n=a._attributeNameForProperty(e,i);if(void 0!==n){const e=a._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,a=i._attributeToPropertyMap.get(e);if(void 0!==a){const e=i.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let a=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):a=!1}!this._hasRequestedUpdate&&a&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}w[y]=!0;const x=Element.prototype;x.msMatchesSelector||x.webkitMatchesSelector;const $=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol();class C{constructor(e,t){if(t!==k)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&($?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const S=(e,...t)=>{const i=t.reduce(((t,i,a)=>t+(e=>{if(e instanceof C)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[a+1]),e[0]);return new C(i,k)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const E={};class D extends w{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),a=[];i.forEach((e=>a.unshift(e))),this._styles=a}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!$){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new C(String(t),k)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?$?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==E&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return E}}D.finalized=!0,D.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,h=l.L.has(t),_=p&&11===t.nodeType&&!!t.host,b=_&&!f.has(n),v=b?document.createDocumentFragment():t;if((0,l.s)(e,v,Object.assign({templateFactory:m(n)},i)),b){const e=l.L.get(v);l.L.delete(v);((e,t,i)=>{f.add(e);const a=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:l}=n;if(0===l)return void window.ShadyCSS.prepareTemplateStyles(a,e);const c=document.createElement("style");for(let e=0;e<l;e++){const t=n[e];t.parentNode.removeChild(t),c.textContent+=t.textContent}(e=>{g.forEach((t=>{const i=d.r.get(u(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),o(e,i)}))}))})(e);const h=a.content;i?function(e,t,i=null){const{element:{content:a},parts:n}=e;if(null==i)return void a.appendChild(t);const o=document.createTreeWalker(a,133,null,!1);let l=s(n),d=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===i&&(d=r(t),i.parentNode.insertBefore(t,i));-1!==l&&n[l].index===c;){if(d>0){for(;-1!==l;)n[l].index+=d,l=s(n,l);return}l=s(n,l)}}(i,c,h.firstChild):h.insertBefore(c,h.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const p=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(i){h.insertBefore(c,h.firstChild);const e=new Set;e.add(c),o(i,e)}})(n,v,e.value instanceof c.R?e.value.template:void 0),(0,a.r4)(t,t.firstChild),t.appendChild(v),l.L.set(t,e)}!h&&_&&window.ShadyCSS.styleElement(t.host)},D.shadowRootOptions={mode:"open"}},499:(e,t,i)=>{"use strict";i.d(t,{$:()=>r});var a=i(971);class n{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach((t=>e+=t+" ")),this.element.setAttribute("class",e)}}}const o=new WeakMap,r=(0,a.XM)((e=>t=>{if(!(t instanceof a._l)||t instanceof a.sL||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:r}=i;let s=o.get(t);void 0===s&&(r.setAttribute("class",i.strings.join(" ")),o.set(t,s=new Set));const l=r.classList||new n(r);s.forEach((t=>{t in e||(l.remove(t),s.delete(t))}));for(const t in e){const i=e[t];i!=s.has(t)&&(i?(l.add(t),s.add(t)):(l.remove(t),s.delete(t)))}"function"==typeof l.commit&&l.commit()}))},151:(e,t,i)=>{"use strict";i.d(t,{V:()=>o});var a=i(971);const n=new WeakMap,o=(0,a.XM)((e=>t=>{if(!(t instanceof a._l)||t instanceof a.sL||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:o}=i.element;let r=n.get(t);void 0===r&&(o.cssText=i.strings.join(" "),n.set(t,r=new Set)),r.forEach((t=>{t in e||(r.delete(t),-1===t.indexOf("-")?o[t]=null:o.removeProperty(t))}));for(const t in e)r.add(t),-1===t.indexOf("-")?o[t]=e[t]:o.setProperty(t,e[t])}))},229:(e,t,i)=>{"use strict";i.d(t,{X:()=>n,w:()=>o});const a=new WeakMap,n=e=>(...t)=>{const i=e(...t);return a.set(i,!0),i},o=e=>"function"==typeof e&&a.has(e)},105:(e,t,i)=>{"use strict";i.d(t,{eC:()=>a,r4:()=>n});const a="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}}},356:(e,t,i)=>{"use strict";i.d(t,{J:()=>a,L:()=>n});const a={},n={}},602:(e,t,i)=>{"use strict";i.d(t,{JG:()=>m,K1:()=>b,QG:()=>h,_l:()=>u,m:()=>g,nt:()=>p,sL:()=>f});var a=i(229),n=i(105),o=i(356),r=i(622),s=i(817),l=i(714);const d=e=>null===e||!("object"==typeof e||"function"==typeof e),c=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class h{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!c(e))return e}let a="";for(let n=0;n<t;n++){a+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(d(e)||!c(e))a+="string"==typeof e?e:String(e);else for(const t of e)a+="string"==typeof t?t:String(t)}}return a+=e[t],a}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.J||d(e)&&e===this.value||(this.value=e,(0,a.w)(e)||(this.committer.dirty=!0))}commit(){for(;(0,a.w)(this.value);){const e=this.value;this.value=o.J,e(this)}this.value!==o.J&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild((0,l.IW)()),this.endNode=e.appendChild((0,l.IW)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=(0,l.IW)()),e.__insert(this.endNode=(0,l.IW)())}insertAfterPart(e){e.__insert(this.startNode=(0,l.IW)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;(0,a.w)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.J,e(this)}const e=this.__pendingValue;e!==o.J&&(d(e)?e!==this.value&&this.__commitText(e):e instanceof s.j?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):c(e)?this.__commitIterable(e):e===o.L?(this.value=o.L,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof r.R&&this.value.template===t)this.value.update(e.values);else{const i=new r.R(t,e.processor,this.options),a=i._clone();i.update(e.values),this.__commitNode(a),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,a=0;for(const n of e)i=t[a],void 0===i&&(i=new p(this.options),t.push(i),0===a?i.appendIntoPart(this):i.insertAfterPart(t[a-1])),i.setValue(n),i.commit(),a++;a<t.length&&(t.length=a,this.clear(i&&i.endNode))}clear(e=this.startNode){(0,n.r4)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class m{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;(0,a.w)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.J,e(this)}if(this.__pendingValue===o.J)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.J}}class g extends h{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends u{}let _=!1;(()=>{try{const e={get capture(){return _=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class b{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;(0,a.w)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.J,e(this)}if(this.__pendingValue===o.J)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.J}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const v=e=>e&&(_?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},952:(e,t,i)=>{"use strict";i.d(t,{L:()=>r,s:()=>s});var a=i(105),n=i(602),o=i(630);const r=new WeakMap,s=(e,t,i)=>{let s=r.get(t);void 0===s&&((0,a.r4)(t,t.firstChild),r.set(t,s=new n.nt(Object.assign({templateFactory:o.t},i))),s.appendInto(t)),s.setValue(e),s.commit()}},630:(e,t,i)=>{"use strict";i.d(t,{r:()=>o,t:()=>n});var a=i(714);function n(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(a.Jw);return i=t.keyString.get(n),void 0===i&&(i=new a.YS(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const o=new Map},622:(e,t,i)=>{"use strict";i.d(t,{R:()=>o});var a=i(105),n=i(714);class o{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=a.eC?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,s=0,l=0,d=o.nextNode();for(;s<i.length;)if(r=i[s],(0,n.pC)(r)){for(;l<r.index;)l++,"TEMPLATE"===d.nodeName&&(t.push(d),o.currentNode=d.content),null===(d=o.nextNode())&&(o.currentNode=t.pop(),d=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return a.eC&&(document.adoptNode(e),customElements.upgrade(e)),e}}},817:(e,t,i)=>{"use strict";i.d(t,{j:()=>r}),i(105);var a=i(714);const n=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),o=` ${a.Jw} `;class r{constructor(e,t,i,a){this.strings=e,this.values=t,this.type=i,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const s=a.W5.exec(e);t+=null===s?e+(i?o:a.N):e.substr(0,s.index)+s[1]+s[2]+a.$E+s[3]+a.Jw}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==n&&(t=n.createHTML(t)),e.innerHTML=t,e}}},714:(e,t,i)=>{"use strict";i.d(t,{$E:()=>r,IW:()=>c,Jw:()=>a,N:()=>n,W5:()=>h,YS:()=>s,pC:()=>d});const a=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${a}--\x3e`,o=new RegExp(`${a}|${n}`),r="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let d=0,u=-1,p=0;const{strings:m,values:{length:g}}=e;for(;p<g;){const e=s.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let a=0;for(let e=0;e<i;e++)l(t[e].name,r)&&a++;for(;a-- >0;){const t=m[p],i=h.exec(t)[2],a=i.toLowerCase()+r,n=e.getAttribute(a);e.removeAttribute(a);const s=n.split(o);this.parts.push({type:"attribute",index:u,name:i,strings:s}),p+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const a=e.parentNode,n=t.split(o),s=n.length-1;for(let t=0;t<s;t++){let i,o=n[t];if(""===o)i=c();else{const e=h.exec(o);null!==e&&l(e[2],r)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-r.length)+e[3]),i=document.createTextNode(o)}a.insertBefore(i,e),this.parts.push({type:"node",index:++u})}""===n[s]?(a.insertBefore(c(),e),i.push(e)):e.data=n[s],p+=s}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&u!==d||(u++,t.insertBefore(c(),e)),d=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(i.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1}),p++}}else s.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const l=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},971:(e,t,i)=>{"use strict";i.d(t,{_l:()=>a._l,sL:()=>a.sL,XM:()=>r.X,dy:()=>s});var a=i(602);const n=new class{handleAttributeExpressions(e,t,i,n){const o=t[0];return"."===o?new a.m(e,t.slice(1),i).parts:"@"===o?[new a.K1(e,t.slice(1),n.eventContext)]:"?"===o?[new a.JG(e,t.slice(1),i)]:new a.QG(e,t,i).parts}handleTextExpression(e){return new a.nt(e)}};var o=i(817),r=i(229);i(105),i(356),i(952),i(630),i(622),i(714),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const s=(e,...t)=>new o.j(e,t,"html",n)},147:e=>{"use strict";e.exports=JSON.parse('{"name":"dwains-dashboard","private":true,"version":"3.5.0","description":"dwains-dashboard","scripts":{"build":"webpack --mode=production","watch":"webpack --watch --mode=development","update-card-tools":"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"},"keywords":[],"author":"Dwain Scheeren","license":"MIT","devDependencies":{"autoprefixer":"^10.2.5","css-loader":"^5.1.3","html-webpack-plugin":"^5.3.1","postcss":"^8.2.8","postcss-cli":"^8.3.1","postcss-loader":"^5.2.0","style-loader":"^2.0.0","tailwindcss":"^2.0.3","webpack":"^5.26.0","webpack-cli":"^4.10.0","webpack-dev-server":"^4.7.4","webpack-merge":"^5.7.3"},"dependencies":{"@mdi/js":"^6.5.95","card-tools":"github:thomasloven/lovelace-card-tools","custom-card-helpers":"^1.8.0","js-cookie":"^3.0.1","lit-element":"^2.2.1","lit-html":"^1.1.2","sortablejs":"^1.14.0"}}')}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(474),t=i(557),a=i(594),n=i(287),o=i(148),r=i(152);class s extends o.oi{static get styles(){return[o.iv`
            :host {
                width: 100%;
                display: flex;
                flex-direction: column;
                background-color: var( --ha-card-background, var(--card-background-color, white) );
                height: auto;
                top: 0;
                z-index: 99999;
                position: fixed;
            }
            .mainNavItems {
                flex-grow: 1;

                display: flex;
                align-items: stretch;
                padding: 0.25rem;
                justify-content: space-between;

                overflow-x: scroll;

                scrollbar-width: none;
            }
            .mainNavItems::-webkit-scrollbar {
                height: 0px;
            }
            .mainNavItems::before, .mainNavItems::after {
                content: ''; /* Insert space before the first item and after the last one */
            }
            
            .mainNavItems div {
                padding: 0.5rem;
                color: var(--primary-text-color);
                position: relative;
                text-align: center;
                display: grid;
                cursor: pointer;
            }
            .mainNavItems div span {
                text-transform: capitalize;
            }
            .mainNavItems div.active {
                color: var(--sidebar-selected-icon-color);
            }

            .dwains-dashboard-nav {
                display: flex;
            }
            .toggle-sidebar {
                padding: 1.35rem;
                background: var(--secondary-background-color);
                display: none;
                cursor: pointer;
            }
            .sidebar-always_hidden {
                /* User has the sidebar hidden so always show the button */
                display: block !important;
            }
            /* bottom: 0; */
            /* padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); */
            @media only screen and (max-width: 768px) {
                :host {
                    position: sticky;
                    bottom: 0;
                    top: auto;
                    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
                }
            }
            @media only screen and (max-width: 1800px) and (hover: none) {
                :host {
                    position: sticky;
                    bottom: 0;
                    top: auto;
                    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
                }
            }            
            @media (max-width: 871px) {
                .mainNavItems div span {
                    display: none;
                }
                .toggle-sidebar {
                    display: block;
                    padding: 0.75rem;
                }
            }
          `]}getRoot(){let e=document.querySelector("home-assistant");return e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e}static get properties(){return{hass:{},config:{},currentPath:{}}}setConfig(t){this.hass=(0,e.C)()}async connectedCallback(){super.connectedCallback(),await this._loadConfig(),this.currentPath=document.location.pathname,await this.hass.connection.subscribeEvents((()=>this._reloadCard()),"dwains_dashboard_navigation_card_reload")}async _reloadCard(){await this._loadConfig(),this.requestUpdate()}async _loadConfig(){this.configuration=await this.hass.callWS({type:"dwains_dashboard/configuration/get"})}_menuClick(e){const t=e.currentTarget.path;(0,n.c4)(window,t),this.currentPath=t}_toggleSidebarClick(e){(0,a.B)("hass-toggle-menu")}render(){if(!this.hass||null==this.currentPath||null==this.configuration||0===this.configuration.length)return o.dy``;const e=Object.entries(this.configuration.more_pages).sort((function(e,t){let i=e[1]&&e[1].sort_order?e[1].sort_order:99,a=t[1]&&t[1].sort_order?t[1].sort_order:99;return i==a?0:i>a?1:-1}));return o.dy`
            <div class="dwains-dashboard-nav">
                <div
                    @click=${this._toggleSidebarClick}
                    class="toggle-sidebar sidebar-${this.hass.dockedSidebar}"
                >
                    <ha-icon icon="${"mdi:menu"}"></ha-icon>
                </div>
                <div class="mainNavItems">
                    <div
                        class="${"/dwains-dashboard/home"==document.location.pathname?"active":""}" 
                        @click=${this._menuClick}
                        .path=${"/dwains-dashboard/home"}
                    >
                        <ha-icon icon="${"mdi:home"}"></ha-icon>
                        <span>${(0,r.Z)(this.hass,"home.title")}</span>
                    </div>
                    <div
                        class="${"/dwains-dashboard/devices"!=document.location.pathname||window.location.hash?"":"active"}" 
                        @click=${this._menuClick}
                        .path=${"/dwains-dashboard/devices"}
                    >
                        <ha-icon icon="${"mdi:format-list-bulleted-type"}"></ha-icon>
                        <span>${(0,r.Z)(this.hass,"device.title_plural")}</span>
                    </div>
                    ${Object.entries(this.configuration.devices).map((([e,t])=>o.dy`
                            ${t.show_in_navbar?o.dy`
                                <div
                                    class="${"/dwains-dashboard/devices"==document.location.pathname&&window.location.hash=="#"+e?"active":""}" 
                                    @click=${this._menuClick}
                                    .path=${"/dwains-dashboard/devices#"+e}
                                >
                                    <ha-icon icon="${t.icon}"></ha-icon>
                                    <span>${(0,r.Z)(this.hass,"device."+e)}</span>
                                </div>`:""}
                        `))}
                    ${Object.entries(e).map((([e,t])=>o.dy`
                            ${t[1].show_in_navbar?o.dy`
                                <div
                                    class="${document.location.pathname=="/dwains-dashboard/more_page_"+t[0].toLowerCase().replace("'","_").replace(" ","_")?"active":""}" 
                                    @click=${this._menuClick}
                                    .path=${"/dwains-dashboard/more_page_"+t[0].toLowerCase().replace("'","_").replace(" ","_")}
                                >
                                    <ha-icon icon="${t[1].icon}"></ha-icon>
                                    <span>${t[1].name}</span>
                                </div>`:""}
                        `))}
                    <div
                        class="${"/dwains-dashboard/more_page"==document.location.pathname?"active":""}" 
                        @click=${this._menuClick}
                        .path=${"/dwains-dashboard/more_page"}
                    >
                        <ha-icon icon="${"mdi:view-grid-outline"}"></ha-icon>
                        <span>${(0,r.Z)(this.hass,"more.title")}</span>
                    </div>
                </div>
            </div>
        `}}(async()=>{await Promise.race([customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main"),customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")]),customElements.get("dwainsboard-navigation-card")||customElements.define("dwainsboard-navigation-card",s)})();const l=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(l).then((()=>{window.dwains_dashboard=window.dwains_dashboard||new class{constructor(){this._start_dd();const t=this._locationChanged.bind(this);window.addEventListener("location-changed",t),window.addEventListener("popstate",t),(0,e.C)().connection.subscribeEvents((()=>this._reload()),"dwains_dashboard_reload")}async _loadData(){this.configuration=await(0,e.C)().callWS({type:"dwains_dashboard/configuration/get"})}_locationChanged(){let e=window.location.pathname;"dwains-dashboard"==e.substring(1,e.lastIndexOf("/"))&&(this._dwains_theme(),this._dwains_navbar(),document.querySelector("home-assistant").addEventListener("hass-more-info",this._popup_card.bind(this)))}_popup_card(i){if(!i.detail||!i.detail.entityId||!this.configuration)return;const o=(0,n.MS)(i.detail.entityId);if(this.configuration.entities_popup&&this.configuration.entities_popup[i.detail.entityId])if(this.configuration.entities[i.detail.entityId]&&!this.configuration.entities[i.detail.entityId].custom_popup)console.log("Please enable custom popup for this entity");else{const n=this.configuration.entities[i.detail.entityId]&&this.configuration.entities[i.detail.entityId].friendly_name?this.configuration.entities[i.detail.entityId].friendly_name:void 0===(0,e.C)().states[i.detail.entityId].attributes.friendly_name?i.detail.entityId.replace(/_/g," "):(0,e.C)().states[i.detail.entityId].attributes.friendly_name;window.setTimeout((()=>{(0,a.B)("hass-more-info",{entityId:""},document.querySelector("home-assistant")),(0,t.G)(n,{input_entity:i.detail.entityId,...this.configuration.entities_popup[i.detail.entityId]},!1,"")}),10)}else if(this.configuration.devices_popup&&this.configuration.devices_popup[o]){const n=this.configuration.entities[i.detail.entityId]&&this.configuration.entities[i.detail.entityId].friendly_name?this.configuration.entities[i.detail.entityId].friendly_name:void 0===(0,e.C)().states[i.detail.entityId].attributes.friendly_name?i.detail.entityId.replace(/_/g," "):(0,e.C)().states[i.detail.entityId].attributes.friendly_name;window.setTimeout((()=>{(0,a.B)("hass-more-info",{entityId:""},document.querySelector("home-assistant")),(0,t.G)(n,{input_entity:i.detail.entityId,...this.configuration.devices_popup[o]},!1,"")}),10)}}async _start_dd(){(await this._getLovelace()).config.dwains_dashboard&&(this._loadData(),document.querySelector("home-assistant").addEventListener("hass-more-info",this._popup_card.bind(this)),this._dwains_navbar(),this._dwains_theme())}async _dwains_theme(){const e=this._getRoot();(0,n.RC)(e.shadowRoot.querySelector("ha-app-layout").shadowRoot.querySelector("#wrapper"),{themes:{"dwains-theme":{"ha-card-border-radius":"0.75rem"}}},"dwains-theme",!0)}async _dwains_navbar(){const e=this._getRoot();e.shadowRoot.querySelector("app-header").querySelector("app-toolbar").style.display="none",e.shadowRoot.querySelector("ha-app-layout").shadowRoot.querySelector("#wrapper").querySelector("#contentContainer").style.paddingTop="1px",await this._buildDwainsNavigation(e)}_reload(){const t=(0,e.mt)();t&&(0,a.B)("config-refresh",{},t);let i=window.location.pathname;"dwains-dashboard"==i.substring(1,i.lastIndexOf("/"))&&setTimeout((function(){document.location.reload()}),1e3)}_sleep(e){return new Promise((t=>setTimeout(t,e)))}async _getLovelace(){let e;for(;!e;)e=(0,n.VC)(),e||await this._sleep(500);return e}_getRoot(){let e=document.querySelector("home-assistant");return e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e}async _buildDwainsNavigation(t){if(!t.shadowRoot.querySelector("ha-app-layout").querySelector("dwainsboard-navigation-card")){const i=document.createElement("dwainsboard-navigation-card");i.hass=(0,e.C)(),t.shadowRoot.querySelector("ha-app-layout").appendChild(i)}}}}))})(),(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new o(i,e,a)},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,a))(t)})(e):e;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m},f="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const a=this._$Ep(i,t);void 0!==a&&(this._$Ev.set(a,i),e.push(a))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const n=this[e];this[t]=a,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var i;const a=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,a)=>{t?i.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):a.forEach((t=>{const a=document.createElement("style"),n=e.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=t.cssText,i.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=g){var a;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(a=i.converter)||void 0===a?void 0:a.toAttribute)?i.converter:p).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var i;const a=this.constructor,n=a._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=a.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:p;this._$El=n,this[n]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let a=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var b;_[f]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const v=window,y=v.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,k="?"+$,C=`<${k}>`,S=document,E=()=>S.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,z="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,P=/>/g,j=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,I=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),O=I(1),Z=(I(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),R=new WeakMap,U=S.createTreeWalker(S,129,null,!1);function q(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}const H=(e,t)=>{const i=e.length-1,a=[];let n,o=2===t?"<svg>":"",r=M;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===M?"!--"===l[1]?r=T:void 0!==l[1]?r=P:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=null!=n?n:M,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?j:'"'===l[3]?B:N):r===B||r===N?r=j:r===T||r===P?r=M:(r=j,n=void 0);const h=r===j&&e[t+1].startsWith("/>")?" ":"";o+=r===M?i+C:d>=0?(a.push(s),i.slice(0,d)+x+i.slice(d)+$+h):i+$+(-2===d?(a.push(void 0),t):h)}return[q(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),a]};class W{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,o=0;const r=e.length-1,s=this.parts,[l,d]=H(e,t);if(this.el=W.createElement(l,i),U.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(a=U.nextNode())&&s.length<r;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const t of a.getAttributeNames())if(t.endsWith(x)||t.startsWith($)){const i=d[o++];if(e.push(t),void 0!==i){const e=a.getAttribute(i.toLowerCase()+x).split($),t=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Q:"@"===t[1]?ee:Y})}else s.push({type:6,index:n})}for(const t of e)a.removeAttribute(t)}if(L.test(a.tagName)){const e=a.textContent.split($),t=e.length-1;if(t>0){a.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],E()),U.nextNode(),s.push({type:2,index:++n});a.append(e[t],E())}}}else if(8===a.nodeType)if(a.data===k)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf($,e+1));)s.push({type:7,index:n}),e+=$.length-1}n++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,a){var n,o,r,s;if(t===Z)return t;let l=void 0!==a?null===(n=i._$Co)||void 0===n?void 0:n[a]:i._$Cl;const d=D(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,a)),void 0!==a?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[a]=l:i._$Cl=l),void 0!==l&&(t=G(e,l._$AS(e,t.values),l,a)),t}class F{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:a}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(i,!0);U.currentNode=n;let o=U.nextNode(),r=0,s=0,l=a[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new X(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new te(o,this,e)),this._$AV.push(t),l=a[++s]}r!==(null==l?void 0:l.index)&&(o=U.nextNode(),r++)}return U.currentNode=S,n}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{constructor(e,t,i,a){var n;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cp=null===(n=null==a?void 0:a.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),D(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==Z&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>A(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&D(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:a}=e,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=W.createElement(q(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(i);else{const e=new F(n,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new W(e)),t}T(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new X(this.k(E()),this.k(E()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,i,a,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const n=this.strings;let o=!1;if(void 0===n)e=G(this,e,t,0),o=!D(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{const a=e;let r,s;for(e=n[0],r=0;r<n.length-1;r++)s=G(this,a[i+r],t,r),s===Z&&(s=this._$AH[r]),o||(o=!D(s)||s!==this._$AH[r]),s===V?e=V:e!==V&&(e+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}o&&!a&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}const J=y?y.emptyScript:"";class Q extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class ee extends Y{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=G(this,e,t,0))&&void 0!==i?i:V)===Z)return;const a=this._$AH,n=e===V&&a!==V||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==V&&(a===V||n);n&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ie=v.litHtmlPolyfillSupport;var ae,ne;null==ie||ie(W,X),(null!==(b=v.litHtmlVersions)&&void 0!==b?b:v.litHtmlVersions=[]).push("2.8.0");class oe extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var a,n;const o=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t;let r=o._$litPart$;if(void 0===r){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new X(t.insertBefore(E(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Z}}oe.finalized=!0,oe._$litElement$=!0,null===(ae=globalThis.litElementHydrateSupport)||void 0===ae||ae.call(globalThis,{LitElement:oe});const re=globalThis.litElementPolyfillSupport;null==re||re({LitElement:oe}),(null!==(ne=globalThis.litElementVersions)&&void 0!==ne?ne:globalThis.litElementVersions=[]).push("3.3.3");class se extends oe{setConfig(e){}static get properties(){return{cards:{}}}static get styles(){return[r`
      #dwains_dashboard {
        nmax-width: 1465px;
        padding-bottom: 50px;
        margin: 0 auto;
        font-family: "Open Sans", sans-serif !important;
        padding-top: 9px;
      }
      @media only screen and (max-width: 768px) {
        #dwains_dashboard {
          padding-top: 1px;
          padding-bottom: 50px;
        }
      }
      @media only screen and (max-width: 1800px) and (hover: none) {
        #dwains_dashboard {
          padding-top: 1px;
          padding-bottom: 50px;
        }
      }
      `]}render(){return this.cards?O`
      <div id="dwains_dashboard" style="">
        ${this.cards.map((e=>O`${e}`))}
      </div>
    `:O``}}(async()=>{if(await Promise.race([customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main"),customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")]),!customElements.get("dwains-dashboard-layout")){customElements.define("dwains-dashboard-layout",se);const e=i(147);console.info(`%c DWAINS-DASHBOARD-JS \n%c    Version ${e.version}    `,"color: #2fbae5; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray")}})()})(),(()=>{"use strict";var e=i(474),t=i(601),a=i(557),n=i(317),o=i(148);function r(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)e[a]=i[a]}return e}var s=function e(t,i){function a(e,a,n){if("undefined"!=typeof document){"number"==typeof(n=r({},i,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in n)n[s]&&(o+="; "+s,!0!==n[s]&&(o+="="+n[s].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+o}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],a={},n=0;n<i.length;n++){var o=i[n].split("="),r=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(a[s]=t.read(r,s),e===s)break}catch(e){}}return e?a[e]:a}},remove:function(e,t){a(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),l=i(49),d=i(287),c=i(408),h=i(152),u=i(225);const p=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(p).then((()=>{const i=window.loadCardHelpers()?window.loadCardHelpers():void 0;class r extends o.oi{static get styles(){return[o.iv`
        .edit-element {
          padding: 20px;
        }
        .add-button {
          font-size: 16px;
          border: 2px solid #4591B8;
          padding: 5px;
          margin-bottom: 50px;
          background: #459CEE;
          border-radius: 20px;
          color: white;
        }
        .card-footer {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        .grid {
          display: grid;
          gap: 2rem;
        }
        @media (min-width: 768px){
          .grid-cols-2 {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }
        .pre-select {
          padding: 2.5rem;
        }
        .pre-select-option {
          padding: 2.5rem;
          border: 1px solid #4591B8;
          text-align: center;
          cursor: pointer;
        }
        .pre-selected-option:hover {
          border: 2px solid #4591B8;
        }
        .seperator {
          background-color: var(--secondary-background-color);
          width: 100%;
          height: 3px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        /*Start blueprint table*/
        .min-w-full {
          min-width: 100%;
        }
        table {
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse;
        }
        .bg-gray-50 {
          background-color: var(--secondary-background-color);
        }
        .tracking-wider {
            letter-spacing: .05em;
        }
        .text-sm {
          font-size: .875rem;
          line-height: 1.25rem;
        }
        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .uppercase {
            text-transform: uppercase;
        }
        .font-medium {
            font-weight: 500;
        }
        .text-xs {
            font-size: .75rem;
            line-height: 1rem;
        }
        .text-left {
            text-align: left;
        }
        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }
        .card-dd-settings {
          padding: 0.75rem;
          border: 2px solid grey;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 1rem;
        }
        ha-select, ha-textfield, mwc-formfield {
          width: 100%;
        }
        h2,h3 {
          margin: 0;
          font-size: 1rem;
        }
        `]}static get properties(){return{mode:{},blueprints:{}}}setConfig(t){if(this.hass=(0,e.C)(),this.mode=t.mode?t.mode:"pre-select",this.area_id=t.area?t.area:"",this.domain=t.domain?t.domain:"",this.position=t.position,this.page=t.page,t.cardConfig){const e=t.cardConfig;delete e.input_entity,delete e.input_name,this.cardConfig=e}else this.cardConfig="";this.filename=t.filename?t.filename.replace(".yaml",""):"",this.name=t.name?t.name:"Dwains Dashboard",this.rowSpan=t.rowSpan?t.rowSpan:"1",this.colSpan=t.colSpan?t.colSpan:"1",this.rowSpanLg=t.rowSpanLg?t.rowSpanLg:"1",this.colSpanLg=t.colSpanLg?t.colSpanLg:"1",this.rowSpanXl=t.rowSpanXl?t.rowSpanXl:"1",this.colSpanXl=t.colSpanXl?t.colSpanXl:"1";const i=document.createElement("hui-masonry-view");i.lovelace={editMode:!0},i.willUpdate(new Map)}async connectedCallback(){super.connectedCallback(),await this._loadBlueprints();const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"button"});await t.constructor.getConfigElement()}async _loadBlueprints(){this.blueprints=await this.hass.callWS({type:"dwains_dashboard/get_blueprints"})}magicStuff(e){this.cardConfig=e.detail.config,this.mode="editor-element",this.requestUpdate()}magicStuffSecond(e){}_sendCard(){const e=JSON.stringify(this.cardConfig);this.hass.connection.sendMessagePromise({type:"dwains_dashboard/add_card",card_data:e,area_id:this.area_id,domain:this.domain,position:this.position,filename:this.filename,page:this.page,rowSpan:this.rowSpan,colSpan:this.colSpan,rowSpanLg:this.rowSpanLg,colSpanLg:this.colSpanLg,rowSpanXl:this.rowSpanXl,colSpanXl:this.colSpanXl}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_removeCard(){this.hass.connection.sendMessagePromise({type:"dwains_dashboard/remove_card",area_id:this.area_id,domain:this.domain,filename:this.filename,page:this.page}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_switchMode(e){const t=e.currentTarget.mode;this.mode=t,this.requestUpdate()}_handleDeleteBlueprintClicked(e){const t=e.currentTarget.blueprint;this.hass.connection.sendMessagePromise({type:"dwains_dashboard/delete_blueprint",blueprint:t}).then((e=>{console.log(e),this._loadBlueprints(),this.requestUpdate()}),(e=>{console.error("Message failed!",e)}))}_handleUseBlueprintClicked(e){const t=e.currentTarget.blueprint;this.mode="editor-element",this.name=this.blueprints.blueprints[t].blueprint.name,this.cardConfig={type:"custom:dwains-blueprint-card",blueprint:t,card:this.blueprints.blueprints[t].card}}_installBlueprintYamlChanged(e){this.installBlueprintYaml=e.target.value}_handleInstallBlueprintClicked(e){this.installBlueprintYaml||alert("No YAML code entered!"),this.hass.connection.sendMessagePromise({type:"dwains_dashboard/install_blueprint",yamlCode:JSON.stringify(this.installBlueprintYaml)}).then((e=>{console.log(e),e.succesfull?(alert(this.hass.localize("ui.common.successfully_saved")),this._loadBlueprints(),this.requestUpdate()):alert(e.error)}),(e=>{console.error("Message failed!",e)}))}_haSelectChanged(e){e.stopPropagation(),this[e.target.type]=e.target.value}_stopPropagation(e){e.stopPropagation()}_checkCustomCard(e){const t=customElements.get(e);return o.dy`
        <div>
          ${t?o.dy`
            <ha-icon
              style="color: green;"
              .icon=${"mdi:check-bold"}
            ></ha-icon>`:o.dy`
            <ha-icon
              style="color: red;"
              .icon=${"mdi:close-thick"}
            ></ha-icon>
            `}
          ${e}
          ${t?o.dy`(${(0,h.Z)(this.hass,"blueprint.installed")})`:o.dy`(${(0,h.Z)(this.hass,"blueprint.not_installed")})`}
        </div>
      `}render(){if(null==this.blueprints||0===this.blueprints.length)return o.dy`Loading...`;if("pre-select"==this.mode)return o.dy`
          <mwc-list>
            <mwc-list-item twoline .mode=${"hui-card-picker"} @click=${this._switchMode}>
              ${(0,h.Z)(this.hass,"editor.lovelace_card")}
              <span slot="secondary">
                ${(0,h.Z)(this.hass,"editor.create_lovelace_card")}
              </span>
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item hasmeta twoline .mode=${"dwains-dashboard-blueprint-select"} @click=${this._switchMode}>
              ${(0,h.Z)(this.hass,"editor.dwains_dashboard_blueprint")}
              <span slot="secondary">
                ${(0,h.Z)(this.hass,"editor.use_dwains_dashboard_blueprint")}
              </span>
              <ha-icon-next slot="meta"></ha-icon-next
            ></mwc-list-item>
          </mwc-list>
        `;if("dwains-dashboard-blueprint-select"==this.mode){const e=Object.entries(this.blueprints.blueprints).sort((function(e,t){let i=e[1].blueprint.type,a=t[1].blueprint.type;return i==a?0:i>a?1:-1}));return o.dy`
        <div class="edit-element">

          <div style="margin-bottom: 20px;">
            <mwc-button .mode=${"pre-select"} @click=${this._switchMode}>< ${this.hass.localize("ui.common.previous")}</mwc-button>
          </div>

          <strong>${(0,h.Z)(this.hass,"blueprint.installed_blueprints")}:</strong>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.title")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"global.version")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.type")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.used_custom_cards")}</th>
                <th scope="col" class="relative px-6 py-3">
                </th>
              </tr>
            </thead>
            <tbody>
              ${0==Object.values(e).length?o.dy`
                <tr>
                  <td  class="px-6 py-4" colspan="5">${(0,h.Z)(this.hass,"blueprint.no_blueprints_installed")}</td>
                </tr>`:o.dy`
                ${Object.entries(e).map((([e,t])=>o.dy`
                        <tr class="bg-white">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <h3>${t[1].blueprint.name}</h3>
                            ${t[1].blueprint.description}
                          </td>
                          <td class="px-6 py-4">
                            ${t[1].blueprint.version}
                          </td>
                          <td class="px-6 py-4">
                            ${t[1].blueprint.type}
                          </td>
                          <td class="px-6 py-4">
                            ${t[1].blueprint.custom_cards&&0!==t[1].blueprint.custom_cards.length?o.dy`
                                ${t[1].blueprint.custom_cards.map((e=>this._checkCustomCard(e)))}
                              `:"None"}
                          </td>
                          <td>
                            ${"card"==t[1].blueprint.type?o.dy`
                              <mwc-button .blueprint=${t[0]} @click=${this._handleUseBlueprintClicked} unelevated>
                                ${(0,h.Z)(this.hass,"blueprint.use")}
                              </mwc-button>
                            `:""}
                            <mwc-button .blueprint=${t[0]} @click=${this._handleDeleteBlueprintClicked} unelevated>
                              <ha-icon
                                .icon=${"mdi:delete"}
                              ></ha-icon>
                            </mwc-button>
                          </td>
                        </tr>
                      `))}
                `}
            </tbody>
          </table>
          <div class="seperator"></div>
          <strong>${(0,h.Z)(this.hass,"blueprint.install")}</strong>
          <p>${(0,h.Z)(this.hass,"blueprint.instruction")}</p>
          <a href="https://github.com/dwainscheeren/dwains-dashboard-blueprints" target="_blank">Dwains Dashboard Blueprints Github</a>
          <ha-yaml-editor
            .label=${(0,h.Z)(this.hass,"blueprint.yaml_code")}
            name="description"
            @value-changed=${this._installBlueprintYamlChanged}
          ></ha-yaml-editor>
          <div style="margin-top: 15px; margin-bottom: 20px;">
            <mwc-button @click=${this._handleInstallBlueprintClicked} unelevated>
              ${(0,h.Z)(this.hass,"blueprint.install")}
            </mwc-button>
          </div>
        </div>`}return"hui-card-picker"==this.mode?o.dy`
          <div class="edit-element">
            <h1 style="font-size: 17px; font-weight: bold;">Select the card you want to add to ${this.name}</h1>
            <hui-card-picker
              @config-changed=${this.magicStuff}
              .hass=${this.hass}
              .lovelace=${{views:[]}}
            ></hui-card-picker>
            <div class="card-footer">
              <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
                ${this.hass.localize("ui.common.cancel")}
              </mwc-button>
            </div>
          </div>
        `:"editor-element"==this.mode?o.dy`
          <div class="edit-element">
            <div class="card-dd-settings">
              
            <h2>${(0,h.Z)(this.hass,"editor.default_col_row")}</h2>
            <div class="grid-2">
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.row_span")}
                .value=${this.rowSpan}
                .type=${"rowSpan"}
                name="rowSpan"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.row")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
              </ha-select>
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.col_span")}
                .value=${this.colSpan}
                .type=${"colSpan"}
                name="colSpan"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.column")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
              </ha-select>
            </div>

            <h2>${(0,h.Z)(this.hass,"editor.large_col_row")}</h2>
            <div class="grid-2">
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.row_span")}
                .value=${this.rowSpanLg}
                .type=${"rowSpanLg"}
                name="rowSpanLg"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.row")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
                <mwc-list-item value="3">3 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
              </ha-select>
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.col_span")}
                .value=${this.colSpanLg}
                .type=${"colSpanLg"}
                name="colSpanLg"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.column")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
                <mwc-list-item value="3">3 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
              </ha-select>
            </div>

            <h2>${(0,h.Z)(this.hass,"editor.extra_large_col_row")}</h2>
            <div class="grid-2">
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.row_span")}
                .value=${this.rowSpanXl}
                .type=${"rowSpanXl"}
                name="rowSpanXl"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.row")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
                <mwc-list-item value="4">3 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
                <mwc-list-item value="4">4 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
              </ha-select>
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.col_span")}
                .value=${this.colSpanXl}
                .type=${"colSpanXl"}
                name="colSpanXl"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.column")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
                <mwc-list-item value="3">3 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
                <mwc-list-item value="4">4 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
              </ha-select>
            </div>
            </div>
            <hui-card-element-editor
              @save-config=${this.magicStuffSecond}
              @config-changed=${this.magicStuff}
              .value=${this.cardConfig}
              .hass=${this.hass}
              lovelace=${{views:[]}}
            ></hui-card-element-editor>
            <hui-card-preview
              .hass=${this.hass}
              .config=${this.cardConfig}
            ></hui-card-preview>
            <div class="card-footer">
              ${this.filename?o.dy`<mwc-button @click=${this._removeCard}>${this.hass.localize("ui.common.remove")}</mwc-button>`:""}
              <mwc-button @click=${this._sendCard}>${this.hass.localize("ui.common.submit")}</mwc-button>
            </div>
          </div>
        `:void 0}}customElements.define("dwains-create-custom-card-card",r);class p extends o.oi{static get styles(){return[o.iv`
        .edit-element {
          padding: 20px;
        }
        h1, h2, h3, h4, h5, h6 {
          font-size: inherit;
        }
        blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
          margin: 0;
        }
        .add-button {
          font-size: 16px;
          border: 2px solid #4591B8;
          padding: 5px;
          margin-bottom: 50px;
          background: #459CEE;
          border-radius: 20px;
          color: white;
        }
        .card-footer {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        .grid {
          display: grid;
          gap: 2rem;
        }
        @media (min-width: 768px){
          .grid-cols-2 {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }
        .pre-select {
          padding: 2.5rem;
        }
        .pre-select-option {
          padding: 2.5rem;
          border: 1px solid #4591B8;
          text-align: center;
          cursor: pointer;
        }
        .pre-selected-option:hover {
          border: 2px solid #4591B8;
        }
        .more-page-settings {
          padding: 0.75rem;
          border: 2px solid grey;
        }
        .seperator {
          background-color: var(--secondary-background-color);
          width: 100%;
          height: 3px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        /*Start blueprint table*/
        .min-w-full {
          min-width: 100%;
        }
        table {
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse;
        }
        .bg-gray-50 {
          background-color: var(--secondary-background-color);
        }
        .tracking-wider {
            letter-spacing: .05em;
        }
        .text-sm {
          font-size: .875rem;
          line-height: 1.25rem;
        }
        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .uppercase {
            text-transform: uppercase;
        }
        .font-medium {
            font-weight: 500;
        }
        .text-xs {
            font-size: .75rem;
            line-height: 1rem;
        }
        .text-left {
            text-align: left;
        }
        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }
        .card-footer-multiple {
          display: flex;
          justify-content: space-between;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        `]}static get properties(){return{mode:{},blueprints:{}}}setConfig(t){if(this.hass=(0,e.C)(),this.mode=t.mode?t.mode:"pre-select",this.entity_id=t.entity_id,t.cardConfig){const e=t.cardConfig;delete e.input_entity,delete e.input_name,this.cardConfig=e}else this.cardConfig="";this.existingCardEdit=!!t.existingCardEdit&&t.existingCardEdit;const i=document.createElement("hui-masonry-view");i.lovelace={editMode:!0},i.willUpdate(new Map)}async connectedCallback(){super.connectedCallback(),await this._loadBlueprints();const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"button"});await t.constructor.getConfigElement()}async _loadBlueprints(){this.blueprints=await this.hass.callWS({type:"dwains_dashboard/get_blueprints"})}magicStuff(e){const t=e.detail.config.type;l.iW.includes(t)?this.cardConfig={...e.detail.config,entity:this.entity_id}:this.cardConfig=e.detail.config,this.mode="editor-element",this.requestUpdate()}magicStuffSecond(e){}_sendCard(){const e=JSON.stringify(this.cardConfig);this.hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entity_card",cardData:e,entityId:this.entity_id}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_switchMode(e){const t=e.currentTarget.mode;this.mode=t,this.requestUpdate()}_removeCard(){this.hass.connection.sendMessagePromise({type:"dwains_dashboard/remove_entity_card",entityId:this.entity_id}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_handleDeleteBlueprintClicked(e){const t=e.currentTarget.blueprint;this.hass.connection.sendMessagePromise({type:"dwains_dashboard/delete_blueprint",blueprint:t}).then((e=>{console.log(e),this._loadBlueprints(),this.requestUpdate()}),(e=>{console.error("Message failed!",e)}))}_handleUseBlueprintClicked(e){const t=e.currentTarget.blueprint;this.mode="editor-element",this.name=this.blueprints.blueprints[t].blueprint.name,this.cardConfig={type:"custom:dwains-blueprint-card",blueprint:t,input_entity:this.entity_id,card:this.blueprints.blueprints[t].card}}_installBlueprintYamlChanged(e){this.installBlueprintYaml=e.target.value}_handleInstallBlueprintClicked(e){this.hass.connection.sendMessagePromise({type:"dwains_dashboard/install_blueprint",yamlCode:JSON.stringify(this.installBlueprintYaml)}).then((e=>{console.log(e),e.succesfull?(alert(this.hass.localize("ui.common.successfully_saved")),this._loadBlueprints(),this.requestUpdate()):alert(e.error)}),(e=>{console.error("Message failed!",e)}))}_checkCustomCard(e){const t=customElements.get(e);return o.dy`
        <div>
          ${t?o.dy`
            <ha-icon
              style="color: green;"
              .icon=${"mdi:check-bold"}
            ></ha-icon>`:o.dy`
            <ha-icon
              style="color: red;"
              .icon=${"mdi:close-thick"}
            ></ha-icon>
            `}
          ${e}
          ${t?o.dy`(${(0,h.Z)(this.hass,"blueprint.installed")})`:o.dy`(${(0,h.Z)(this.hass,"blueprint.not_installed")})`}
        </div>
      `}render(){if(null==this.blueprints||0===this.blueprints.length)return o.dy`Loading...`;if("pre-select"==this.mode)return o.dy`
          <mwc-list>
            <mwc-list-item twoline .mode=${"hui-card-picker"} @click=${this._switchMode}>
              ${(0,h.Z)(this.hass,"editor.lovelace_card")}
              <span slot="secondary">
                ${(0,h.Z)(this.hass,"editor.create_lovelace_card")}
              </span>
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item hasmeta twoline .mode=${"dwains-dashboard-blueprint-select"} @click=${this._switchMode}>
              ${(0,h.Z)(this.hass,"editor.dwains_dashboard_blueprint")}
              <span slot="secondary">
                ${(0,h.Z)(this.hass,"editor.use_dwains_dashboard_blueprint")}
              </span>
              <ha-icon-next slot="meta"></ha-icon-next
            ></mwc-list-item>
          </mwc-list>
        `;if("dwains-dashboard-blueprint-select"==this.mode){const e=Object.entries(this.blueprints.blueprints).sort((function(e,t){let i=e[1].blueprint.type,a=t[1].blueprint.type;return i==a?0:i>a?1:-1}));return o.dy`
        <div class="edit-element">

          <div style="margin-bottom: 20px;">
            <mwc-button .mode=${"pre-select"} @click=${this._switchMode}>< ${this.hass.localize("ui.common.previous")}</mwc-button>
          </div>

          <strong>${(0,h.Z)(this.hass,"blueprint.installed_blueprints")}:</strong>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.title")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"global.version")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.type")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.used_custom_cards")}</th>
                <th scope="col" class="relative px-6 py-3">
                </th>
              </tr>
            </thead>
            <tbody>
              ${0==Object.values(this.blueprints.blueprints).length?o.dy`
                <tr>
                  <td  class="px-6 py-4" colspan="5">${(0,h.Z)(this.hass,"blueprint.no_blueprints_installed")}</td>
                </tr>`:o.dy`
                  ${Object.entries(e).map((([e,t])=>o.dy`
                          <tr class="bg-white">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <h3>${t[1].blueprint.name}</h3>
                              ${t[1].blueprint.description}
                            </td>
                            <td class="px-6 py-4">
                              ${t[1].blueprint.version}
                            </td>
                            <td class="px-6 py-4">
                              ${t[1].blueprint.type}
                            </td>
                            <td class="px-6 py-4">
                              ${t[1].blueprint.custom_cards&&0!==t[1].blueprint.custom_cards.length?o.dy`
                                  ${t[1].blueprint.custom_cards.map((e=>this._checkCustomCard(e)))}
                                `:"None"}
                            </td>
                            <td>
                              ${"card"==t[1].blueprint.type||"replace-card"==t[1].blueprint.type?o.dy`
                                <mwc-button .blueprint=${t[0]} @click=${this._handleUseBlueprintClicked} unelevated>
                                  ${(0,h.Z)(this.hass,"blueprint.use")}
                                </mwc-button>
                              `:""}
                              <mwc-button .blueprint=${t[0]} @click=${this._handleDeleteBlueprintClicked} unelevated>
                                <ha-icon
                                  .icon=${"mdi:delete"}
                                ></ha-icon>
                              </mwc-button>
                            </td>
                          </tr>
                        `))}
                `}
            </tbody>
          </table>
          <div class="seperator"></div>
          <strong>${(0,h.Z)(this.hass,"blueprint.install")}</strong>
          <p>${(0,h.Z)(this.hass,"blueprint.instruction")}</p>
          <a href="https://github.com/dwainscheeren/dwains-dashboard-blueprints" target="_blank">Dwains Dashboard Blueprints Github</a>
          <ha-yaml-editor
            .label=${(0,h.Z)(this.hass,"blueprint.yaml_code")}
            name="description"
            @value-changed=${this._installBlueprintYamlChanged}
          ></ha-yaml-editor>
          <div style="margin-top: 15px; margin-bottom: 20px;">
            <mwc-button @click=${this._handleInstallBlueprintClicked} unelevated>
              ${(0,h.Z)(this.hass,"blueprint.install")}
            </mwc-button>
          </div>
        </div>`}return"hui-card-picker"==this.mode?o.dy`
          <div class="edit-element">
            <h1 style="font-size: 17px; font-weight: bold;">Select the card you want to use for ${this.entity_id}</h1>
            <hui-card-picker
              @config-changed=${this.magicStuff}
              .hass=${this.hass}
              .lovelace=${{views:[]}}
            ></hui-card-picker>
            <div class="card-footer">
              <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
                ${this.hass.localize("ui.common.cancel")}
              </mwc-button>
            </div>
          </div>
        `:o.dy`
          <div class="edit-element">
            <hui-card-element-editor
              @save-config=${this.magicStuffSecond}
              @config-changed=${this.magicStuff}
              .value=${this.cardConfig}
              .hass=${this.hass}
              lovelace=${{views:[]}}
            ></hui-card-element-editor>
            <hui-card-preview
              .hass=${this.hass}
              .config=${this.cardConfig}
            ></hui-card-preview>
            <div class="card-footer-multiple">
              ${this.existingCardEdit?o.dy`
                  <div>
                    <mwc-button class="warning" @click=${this._removeCard}>${this.hass.localize("ui.common.remove")}</mwc-button>
                    <mwc-button class="warning" @click=${e=>this.mode="hui-card-picker"}}>${this.hass.localize("ui.common.previous")}</mwc-button>
                  </div>
                `:o.dy`<div></div>`}
              <div>
                <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
                  ${this.hass.localize("ui.common.cancel")}
                </mwc-button>
                <mwc-button slot="primaryAction" @click=${this._sendCard}>
                  ${this.hass.localize("ui.common.submit")}
                </mwc-button>
              </div>
            </div>
          </div>
        `}}customElements.define("dwains-edit-entity-card-card",p);class m extends o.oi{static get styles(){return[o.iv`
        .edit-element {
          padding: 20px;
        }
        h1, h2, h3, h4, h5, h6 {
          font-size: inherit;
        }
        blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
          margin: 0;
        }
        .add-button {
          font-size: 16px;
          border: 2px solid #4591B8;
          padding: 5px;
          margin-bottom: 50px;
          background: #459CEE;
          border-radius: 20px;
          color: white;
        }
        .card-footer {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        .grid {
          display: grid;
          gap: 2rem;
        }
        @media (min-width: 768px){
          .grid-cols-2 {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }
        .pre-select {
          padding: 2.5rem;
        }
        .pre-select-option {
          padding: 2.5rem;
          border: 1px solid #4591B8;
          text-align: center;
          cursor: pointer;
        }
        .pre-selected-option:hover {
          border: 2px solid #4591B8;
        }
        .more-page-settings {
          padding: 0.75rem;
          border: 2px solid grey;
        }
        .seperator {
          background-color: var(--secondary-background-color);
          width: 100%;
          height: 3px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        /*Start blueprint table*/
        .min-w-full {
          min-width: 100%;
        }
        table {
            text-indent: 0;
            border-color: inherit;
            border-collapse: collapse;
        }
        .bg-gray-50 {
          background-color: var(--secondary-background-color);
        }
        .tracking-wider {
            letter-spacing: .05em;
        }
        .text-sm {
          font-size: .875rem;
          line-height: 1.25rem;
        }
        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .uppercase {
            text-transform: uppercase;
        }
        .font-medium {
            font-weight: 500;
        }
        .text-xs {
            font-size: .75rem;
            line-height: 1rem;
        }
        .text-left {
            text-align: left;
        }
        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }
        .card-footer-multiple {
          display: flex;
          justify-content: space-between;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        `]}static get properties(){return{mode:{},blueprints:{}}}setConfig(t){if(this.hass=(0,e.C)(),this.mode=t.mode?t.mode:"pre-select",this.entity_id=t.entity_id,t.cardConfig){const e=t.cardConfig;delete e.input_entity,delete e.input_name,this.cardConfig=e}else this.cardConfig="";this.existingCardEdit=!!t.existingCardEdit&&t.existingCardEdit;const i=document.createElement("hui-masonry-view");i.lovelace={editMode:!0},i.willUpdate(new Map)}async connectedCallback(){super.connectedCallback(),await this._loadBlueprints();const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"button"});await t.constructor.getConfigElement()}async _loadBlueprints(){this.blueprints=await this.hass.callWS({type:"dwains_dashboard/get_blueprints"})}magicStuff(e){const t=e.detail.config.type;l.iW.includes(t)?this.cardConfig={...e.detail.config,entity:this.entity_id}:this.cardConfig=e.detail.config,this.mode="editor-element",this.requestUpdate()}magicStuffSecond(e){}_sendCard(){const e=JSON.stringify(this.cardConfig);this.hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entity_popup",cardData:e,entityId:this.entity_id}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_switchMode(e){const t=e.currentTarget.mode;this.mode=t,this.requestUpdate()}_removeCard(){this.hass.connection.sendMessagePromise({type:"dwains_dashboard/remove_entity_popup",entityId:this.entity_id}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_handleDeleteBlueprintClicked(e){const t=e.currentTarget.blueprint;this.hass.connection.sendMessagePromise({type:"dwains_dashboard/delete_blueprint",blueprint:t}).then((e=>{console.log(e),this._loadBlueprints(),this.requestUpdate()}),(e=>{console.error("Message failed!",e)}))}_handleUseBlueprintClicked(e){const t=e.currentTarget.blueprint;this.mode="editor-element",this.name=this.blueprints.blueprints[t].blueprint.name,this.cardConfig={type:"custom:dwains-blueprint-card",blueprint:t,input_entity:this.entity_id,card:this.blueprints.blueprints[t].card}}_installBlueprintYamlChanged(e){this.installBlueprintYaml=e.target.value}_handleInstallBlueprintClicked(e){this.hass.connection.sendMessagePromise({type:"dwains_dashboard/install_blueprint",yamlCode:JSON.stringify(this.installBlueprintYaml)}).then((e=>{console.log(e),e.succesfull?(alert(this.hass.localize("ui.common.successfully_saved")),this._loadBlueprints(),this.requestUpdate()):alert(e.error)}),(e=>{console.error("Message failed!",e)}))}_checkCustomCard(e){const t=customElements.get(e);return o.dy`
        <div>
          ${t?o.dy`
            <ha-icon
              style="color: green;"
              .icon=${"mdi:check-bold"}
            ></ha-icon>`:o.dy`
            <ha-icon
              style="color: red;"
              .icon=${"mdi:close-thick"}
            ></ha-icon>
            `}
          ${e}
          ${t?o.dy`(${(0,h.Z)(this.hass,"blueprint.installed")})`:o.dy`(${(0,h.Z)(this.hass,"blueprint.not_installed")})`}
        </div>
      `}render(){if(null==this.blueprints||0===this.blueprints.length)return o.dy`Loading...`;if("pre-select"==this.mode)return o.dy`
          <mwc-list>
            <mwc-list-item twoline .mode=${"hui-card-picker"} @click=${this._switchMode}>
              ${(0,h.Z)(this.hass,"editor.lovelace_card")}
              <span slot="secondary">
                ${(0,h.Z)(this.hass,"editor.create_lovelace_card")}
              </span>
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item hasmeta twoline .mode=${"dwains-dashboard-blueprint-select"} @click=${this._switchMode}>
              ${(0,h.Z)(this.hass,"editor.dwains_dashboard_blueprint")}
              <span slot="secondary">
                ${(0,h.Z)(this.hass,"editor.use_dwains_dashboard_blueprint")}
              </span>
              <ha-icon-next slot="meta"></ha-icon-next
            ></mwc-list-item>
          </mwc-list>
        `;if("dwains-dashboard-blueprint-select"==this.mode){const e=Object.entries(this.blueprints.blueprints).sort((function(e,t){let i=e[1].blueprint.type,a=t[1].blueprint.type;return i==a?0:i>a?1:-1}));return o.dy`
        <div class="edit-element">

          <div style="margin-bottom: 20px;">
            <mwc-button .mode=${"pre-select"} @click=${this._switchMode}>< ${this.hass.localize("ui.common.previous")}</mwc-button>
          </div>

          <strong>${(0,h.Z)(this.hass,"blueprint.installed_blueprints")}:</strong>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.title")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"global.version")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.type")}</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,h.Z)(this.hass,"blueprint.used_custom_cards")}</th>
                <th scope="col" class="relative px-6 py-3">
                </th>
              </tr>
            </thead>
            <tbody>
              ${0==Object.values(this.blueprints.blueprints).length?o.dy`
                <tr>
                  <td  class="px-6 py-4" colspan="5">${(0,h.Z)(this.hass,"blueprint.no_blueprints_installed")}</td>
                </tr>`:o.dy`
                ${Object.entries(e).map((([e,t])=>o.dy`
                        <tr class="bg-white">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <h3>${t[1].blueprint.name}</h3>
                            ${t[1].blueprint.description}
                          </td>
                          <td class="px-6 py-4">
                            ${t[1].blueprint.version}
                          </td>
                          <td class="px-6 py-4">
                            ${t[1].blueprint.type}
                          </td>
                          <td class="px-6 py-4">
                            ${t[1].blueprint.custom_cards&&0!==t[1].blueprint.custom_cards.length?o.dy`
                                ${t[1].blueprint.custom_cards.map((e=>this._checkCustomCard(e)))}
                              `:"None"}
                          </td>
                          <td>
                            ${"card"==t[1].blueprint.type||"replace-card"==t[1].blueprint.type?o.dy`
                              <mwc-button .blueprint=${t[0]} @click=${this._handleUseBlueprintClicked} unelevated>
                                ${(0,h.Z)(this.hass,"blueprint.use")}
                              </mwc-button>
                            `:""}
                            <mwc-button .blueprint=${t[0]} @click=${this._handleDeleteBlueprintClicked} unelevated>
                              <ha-icon
                                .icon=${"mdi:delete"}
                              ></ha-icon>
                            </mwc-button>
                          </td>
                        </tr>
                      `))}
                `}
            </tbody>
          </table>
          <div class="seperator"></div>
          <strong>${(0,h.Z)(this.hass,"blueprint.install")}</strong>
          <p>${(0,h.Z)(this.hass,"blueprint.instruction")}</p>
          <a href="https://github.com/dwainscheeren/dwains-dashboard-blueprints" target="_blank">Dwains Dashboard Blueprints Github</a>
          <ha-yaml-editor
            .label=${(0,h.Z)(this.hass,"blueprint.yaml_code")}
            name="description"
            @value-changed=${this._installBlueprintYamlChanged}
          ></ha-yaml-editor>
          <div style="margin-top: 15px; margin-bottom: 20px;">
            <mwc-button @click=${this._handleInstallBlueprintClicked} unelevated>
              ${(0,h.Z)(this.hass,"blueprint.install")}
            </mwc-button>
          </div>
        </div>`}return"hui-card-picker"==this.mode?o.dy`
          <div class="edit-element">
            <h1 style="font-size: 17px; font-weight: bold;">Select the popup card you want to use for ${this.entity_id}</h1>
            <hui-card-picker
              @config-changed=${this.magicStuff}
              .hass=${this.hass}
              .lovelace=${{views:[]}}
            ></hui-card-picker>
            <div class="card-footer">
              <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
                ${this.hass.localize("ui.common.cancel")}
              </mwc-button>
            </div>
          </div>
        `:o.dy`
          <div class="edit-element">
            <hui-card-element-editor
              @save-config=${this.magicStuffSecond}
              @config-changed=${this.magicStuff}
              .value=${this.cardConfig}
              .hass=${this.hass}
              lovelace=${{views:[]}}
            ></hui-card-element-editor>
            <hui-card-preview
              .hass=${this.hass}
              .config=${this.cardConfig}
            ></hui-card-preview>
            <div class="card-footer-multiple">
              ${this.existingCardEdit?o.dy`
                  <div>
                    <mwc-button class="warning" @click=${this._removeCard}>${this.hass.localize("ui.common.remove")}</mwc-button>
                    <mwc-button class="warning" @click=${e=>this.mode="hui-card-picker"}}>${this.hass.localize("ui.common.previous")}</mwc-button>
                  </div>
                `:o.dy`<div></div>`}
              <div>
                <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
                  ${this.hass.localize("ui.common.cancel")}
                </mwc-button>
                <mwc-button slot="primaryAction" @click=${this._sendCard}>
                  ${this.hass.localize("ui.common.submit")}
                </mwc-button>
              </div>
            </div>
          </div>
        `}}customElements.define("dwains-edit-entity-popup-card",m);class g extends o.oi{static get styles(){return[o.iv`
        h2 {
          margin: 0;
          font-size: 1rem;
        }
        .edit-element {
          padding: 20px;
        }
        .add-button {
          font-size: 16px;
          border: 2px solid #4591B8;
          padding: 5px;
          margin-bottom: 50px;
          background: #459CEE;
          border-radius: 20px;
          color: white;
        }
        .card-footer {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 1rem;
        }
        ha-select, ha-textfield, mwc-formfield {
          width: 100%;
        }
        `]}setConfig(t){this.hass=(0,e.C)(),this.entity=t.entity,this.friendlyName=t.friendlyName?t.friendlyName:"",this.hideEntity=!!t.hideEntity&&t.hideEntity,this.disableEntity=!!t.disableEntity&&t.disableEntity,this.excludeEntity=!!t.excludeEntity&&t.excludeEntity,this.rowSpan=t.rowSpan?t.rowSpan:"1",this.colSpan=t.colSpan?t.colSpan:"1",this.rowSpanLg=t.rowSpanLg?t.rowSpanLg:"1",this.colSpanLg=t.colSpanLg?t.colSpanLg:"1",this.rowSpanXl=t.rowSpanXl?t.rowSpanXl:"1",this.colSpanXl=t.colSpanXl?t.colSpanXl:"1",this.customCard=!!t.customCard&&t.customCard,this.customPopup=!!t.customPopup&&t.customPopup}_saveButton(e){e.stopPropagation(),this.hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entity",entity:this.entity,friendlyName:this.friendlyName,disableEntity:this.disableEntity,hideEntity:this.hideEntity,excludeEntity:this.excludeEntity,rowSpan:this.rowSpan,colSpan:this.colSpan,rowSpanLg:this.rowSpanLg,colSpanLg:this.colSpanLg,rowSpanXl:this.rowSpanXl,colSpanXl:this.colSpanXl,customCard:this.customCard,customPopup:this.customPopup}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_friendlyNameChanged(e){this.friendlyName=e.target.value}_disableValueChanged(e){this.disableEntity=e.target.checked}_hideValueChanged(e){this.hideEntity=e.target.checked}_excludeValueChanged(e){this.excludeEntity=e.target.checked}_customCardValueChanged(e){this.customCard=e.target.checked}_customPopupValueChanged(e){this.customPopup=e.target.checked}_haSelectChanged(e){e.stopPropagation(),this[e.target.type]=e.target.value}_stopPropagation(e){e.stopPropagation()}render(){return o.dy`
        <div class="edit-element">
            <h1 style="font-size: 15px; font-weight: bold;">${(0,h.Z)(this.hass,"entity.edit_entity")} "${this.entity}"</h1>

            <ha-textfield 
              .label=${(0,h.Z)(this.hass,"entity.friendly_name")}
              .value=${this.friendlyName}
              @input=${this._friendlyNameChanged}
            ></ha-textfield>

            <h2>${(0,h.Z)(this.hass,"editor.default_col_row")}</h2>
            <div class="grid-2">
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.row_span")}
                .value=${this.rowSpan}
                .type=${"rowSpan"}
                name="rowSpan"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.row")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
              </ha-select>
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.col_span")}
                .value=${this.colSpan}
                .type=${"colSpan"}
                name="colSpan"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.column")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
              </ha-select>
            </div>

            <h2>${(0,h.Z)(this.hass,"editor.large_col_row")}</h2>
            <div class="grid-2">
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.row_span")}
                .value=${this.rowSpanLg}
                .type=${"rowSpanLg"}
                name="rowSpanLg"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.row")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
                <mwc-list-item value="3">3 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
              </ha-select>
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.col_span")}
                .value=${this.colSpanLg}
                .type=${"colSpanLg"}
                name="colSpanLg"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.column")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
                <mwc-list-item value="3">3 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
              </ha-select>
            </div>

            <h2>${(0,h.Z)(this.hass,"editor.extra_large_col_row")}</h2>
            <div class="grid-2">
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.row_span")}
                .value=${this.rowSpanXl}
                .type=${(0,h.Z)(this.hass,"editor.row_span")}
                name="rowSpanXl"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.row")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
                <mwc-list-item value="4">3 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
                <mwc-list-item value="4">4 ${(0,h.Z)(this.hass,"editor.rows")}</mwc-list-item>
              </ha-select>
              <ha-select
                .label=${(0,h.Z)(this.hass,"editor.col_span")}
                .value=${this.colSpanXl}
                .type=${"colSpanXl"}
                name="colSpanXl"
                @selected=${this._haSelectChanged}
                @closed=${this._stopPropagation}
              >
                <mwc-list-item value="1">1 ${(0,h.Z)(this.hass,"editor.column")}</mwc-list-item>
                <mwc-list-item value="2">2 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
                <mwc-list-item value="3">3 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
                <mwc-list-item value="4">4 ${(0,h.Z)(this.hass,"editor.columns")}</mwc-list-item>
              </ha-select>
            </div>

            <mwc-formfield .label=${(0,h.Z)(this.hass,"entity.disable")}>
              <ha-checkbox
                @change=${this._disableValueChanged}
                .checked=${this.disableEntity}
              ></ha-checkbox>
            </mwc-formfield>
            <mwc-formfield .label=${(0,h.Z)(this.hass,"entity.hide")}>
              <ha-checkbox
                @change=${this._hideValueChanged}
                .checked=${this.hideEntity}
              ></ha-checkbox>
            </mwc-formfield>
            <mwc-formfield .label=${(0,h.Z)(this.hass,"entity.exclude")}>
              <ha-checkbox
                @change=${this._excludeValueChanged}
                .checked=${this.excludeEntity}
              ></ha-checkbox>
            </mwc-formfield>
            <mwc-formfield .label=${(0,h.Z)(this.hass,"entity.use_entity_card")}>
              <ha-checkbox
                @change=${this._customCardValueChanged}
                .checked=${this.customCard}
              ></ha-checkbox>
            </mwc-formfield>
            <mwc-formfield .label=${(0,h.Z)(this.hass,"entity.use_popup_card")}>
              <ha-checkbox
                @change=${this._customPopupValueChanged}
                .checked=${this.customPopup}
              ></ha-checkbox>
            </mwc-formfield>

            <div class="card-footer">
              <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
                ${this.hass.localize("ui.common.cancel")}
              </mwc-button>
              <mwc-button slot="primaryAction" @click=${this._saveButton}>
                ${this.hass.localize("ui.common.submit")}
              </mwc-button>
            </div>
        </div>
      `}}customElements.define("dwains-edit-entity-card",g);class f extends o.oi{static get styles(){return[o.iv`
        .edit-element {
          padding: 20px;
        }
        .add-button {
          font-size: 16px;
          border: 2px solid #4591B8;
          padding: 5px;
          margin-bottom: 50px;
          background: #459CEE;
          border-radius: 20px;
          color: white;
        }
        .card-footer {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        `]}setConfig(t){this.hass=(0,e.C)(),this.areaId=t.areaId,this.icon=t.icon?t.icon:"",this.floor=t.floor?t.floor:"",this.disableArea=!!t.disableArea&&t.disableArea}async connectedCallback(){super.connectedCallback();const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"button"});await t.constructor.getConfigElement()}_iconPickerChange(e){this.icon=e.detail.value}_floorChanged(e){this.floor=e.target.value}_disableValueChanged(e){this.disableArea=e.target.checked}_saveButton(e){e.stopPropagation(),this.hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_area_button",icon:this.icon,areaId:this.areaId,floor:this.floor,disableArea:this.disableArea}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}render(){return o.dy`
      <div class="edit-element">
          <ha-icon-picker
            .label=${(0,h.Z)(this.hass,"area.icon")}
            .value=${this.icon}
            .name=${(0,h.Z)(this.hass,"area.icon")}
            @value-changed=${this._iconPickerChange}
          ></ha-icon-picker>
          <ha-textfield
            .label=${(0,h.Z)(this.hass,"area.floor")}
            .name=${(0,h.Z)(this.hass,"area.floor")}
            .value=${this.floor}
            .style=${"width: 100%"}
            @input=${this._floorChanged}
          ></ha-textfield>
          <mwc-formfield .label=${(0,h.Z)(this.hass,"area.disable")}>
            <ha-checkbox
              @change=${this._disableValueChanged}
              .checked=${this.disableArea}
            ></ha-checkbox>
          </mwc-formfield>
          <div class="card-footer">
            <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
              ${this.hass.localize("ui.common.cancel")}
            </mwc-button>
            <mwc-button slot="primaryAction" @click=${this._saveButton}>
              ${this.hass.localize("ui.common.submit")}
            </mwc-button>
          </div>
      </div>
      `}}customElements.define("dwains-edit-area-button-card",f);class _ extends o.oi{static get styles(){return[o.iv`
        .w-full {
          width: 100%;
        }
        .edit-element {
          padding: 20px;
        }
        .add-button {
          font-size: 16px;
          border: 2px solid #4591B8;
          padding: 5px;
          margin-bottom: 50px;
          background: #459CEE;
          border-radius: 20px;
          color: white;
        }
        .card-footer {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          border-top: 1px solid var(--divider-color);
        }
        .block {
          display: block;
        }
        .hidden {
          display: none;
        }
        `]}static get properties(){return{configuration:{}}}setConfig(t){this.hass=(0,e.C)(),this.disableClock=!!t.disableClock&&t.disableClock,this.amPmClock=!!t.amPmClock&&t.amPmClock,this.disableWelcomeMessage=!!t.disableWelcomeMessage&&t.disableWelcomeMessage,this.v2Mode=!!t.v2Mode&&t.v2Mode,this.weatherEntity=t.weatherEntity?t.weatherEntity:"",this.alarmEntity=t.alarmEntity?t.alarmEntity:"",this.selectedTab=1}async connectedCallback(){super.connectedCallback();const e=await window.loadCardHelpers();(await e.createCardElement({type:"entities",entities:[]})).constructor.getConfigElement(),await this._loadConfiguration()}async _loadConfiguration(){this.configuration=await this.hass.callWS({type:"dwains_dashboard/configuration/get"})}_disableClockValueChanged(e){this.disableClock=e.target.checked}_amPmClockValueChanged(e){this.amPmClock=e.target.checked}_disableWelcomeMessageValueChanged(e){this.disableWelcomeMessage=e.target.checked}_v2ModeValueChanged(e){this.v2Mode=e.target.checked}_weatherEntityPicked(e){this.weatherEntity=e.detail.value}_alarmEntityPicked(e){this.alarmEntity=e.detail.value}_saveButton(e){e.stopPropagation(),this.hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_homepage_header",disableClock:this.disableClock,amPmClock:this.amPmClock,disableWelcomeMessage:this.disableWelcomeMessage,v2Mode:this.v2Mode,weatherEntity:this.weatherEntity?this.weatherEntity:"",alarmEntity:this.alarmEntity?this.alarmEntity:""}).then((e=>{console.log(e),(0,u.j)()}),(e=>{console.error("Message failed!",e)}))}_handleTabClick(e){const t=e.currentTarget.page;this.selectedTab=t,this.requestUpdate()}render(){return this.configuration&&0!==this.configuration.length?o.dy`
      <div class="edit-element">
        <paper-tabs selected="${this.selectedTab}">
            <paper-tab .page=${"1"} @click=${this._handleTabClick}">${(0,h.Z)(this.hass,"global.settings")}</paper-tab>
            <paper-tab .page=${"2"} @click=${this._handleTabClick}">${(0,h.Z)(this.hass,"global.dashboard_information")}</paper-tab>
        </paper-tabs>
        <div class=${1==this.selectedTab?"block":"hidden"}>
          <div class="w-full">
          <mwc-formfield .label=${(0,h.Z)(this.hass,"global.disable_clock")}>
            <ha-checkbox
              @change=${this._disableClockValueChanged}
              .checked=${this.disableClock}
            ></ha-checkbox>
          </mwc-formfield>
          </div>
          <div class="w-full">
          <mwc-formfield .label=${(0,h.Z)(this.hass,"global.am_pm_clock")}>
            <ha-checkbox
              @change=${this._amPmClockValueChanged}
              .checked=${this.amPmClock}
            ></ha-checkbox>
          </mwc-formfield>
          </div>
          <div class="w-full">
          <mwc-formfield .label=${(0,h.Z)(this.hass,"global.disable_welcome_message")}>
            <ha-checkbox
              @change=${this._disableWelcomeMessageValueChanged}
              .checked=${this.disableWelcomeMessage}
            ></ha-checkbox>
          </mwc-formfield>
          </div>
          <div class="w-full">
          <mwc-formfield .label=${(0,h.Z)(this.hass,"global.v2_mode")}>
            <ha-checkbox
              @change=${this._v2ModeValueChanged}
              .checked=${this.v2Mode}
            ></ha-checkbox>
          </mwc-formfield>
          </div>
          <ha-entity-picker 
            .hass=${this.hass}
            .label=${(0,h.Z)(this.hass,"global.weather_entity")}
            .value=${this.weatherEntity}
            .includeDomains=${["weather"]}
            @value-changed=${this._weatherEntityPicked}
          ></ha-entity-picker>
          <ha-entity-picker 
            .hass=${this.hass}
            .label=${(0,h.Z)(this.hass,"global.alarm_entity")}
            .includeDomains=${["alarm_control_panel"]}
            .value=${this.alarmEntity}
            @value-changed=${this._alarmEntityPicked}
          ></ha-entity-picker>
        </div>
        <div class=${2==this.selectedTab?"block":"hidden"}>
          <strong>Dwains Dashboard</strong><br>
          Created by Dwain Scheeren<br>
          Version ${this.configuration.installed_version}
        </div>
        <div class="card-footer">
          <mwc-button slot="secondaryAction" @click=${e=>(0,u.j)()}>
            ${this.hass.localize("ui.common.cancel")}
          </mwc-button>
          <mwc-button slot="primaryAction" @click=${this._saveButton}>
            ${this.hass.localize("ui.common.submit")}
          </mwc-button>
        </div>
      </div>
      `:o.dy``}}customElements.define("dwains-edit-homepage-header-card",_);class b extends o.oi{static get properties(){return{data:{},favorites:{},favoriteEditMode:{},selectedArea:{},areaEditMode:{},areaViewEditMode:{},areaViewDisplayGrouped:{},areaDisplayGrouped:{}}}set hass(e){this.startedUp&&this._update_hass(e)}_update_hass(e){this.timeout||(this.timeout=!0,window.setTimeout((()=>{this.timeout=!1}),100),null!=this.data&&0!==this.data.length&&(this.data.forEach((t=>{t.area.area_id==this.selectedArea&&(t.cards.forEach((t=>{t.card.hass=e})),t.customCardsTop.forEach((t=>{t.card.hass=e})),t.customCardsBottom.forEach((t=>{t.card.hass=e})))})),0!=this.favorites.length&&this.favorites.forEach((t=>{t.card.hass=e})),this._hass=e,this.badgesCard.hass=e,this.requestUpdate()))}setConfig(t){this.startedUp=!1,this.timeout=!1,this._hass=(0,e.C)(),this.selectedArea=window.location.hash.substring(1),this.areaEditMode=!1,this.favoriteEditMode=!1,this.areaViewEditMode=!1,this.areaViewDisplayGrouped=!!s.get("dwains_dashboard_areaViewDisplayGrouped")&&"false"!=s.get("dwains_dashboard_areaViewDisplayGrouped"),this.areaDisplayGrouped=!!s.get("dwains_dashboard_areaDisplayGrouped")&&"false"!=s.get("dwains_dashboard_areaDisplayGrouped"),this._config=t}async connectedCallback(){super.connectedCallback(),await this._loadData(),await this._hass.connection.subscribeEvents((()=>this._reloadCard()),"dwains_dashboard_homepage_card_reload")}async _reloadCard(){await this._loadData(),this.requestUpdate()}async _loadData(){this.startedUp=!1,this.areas=await this._hass.callWS({type:"config/area_registry/list"}),this.devices=await this._hass.callWS({type:"config/device_registry/list"}),this.entities=await this._hass.callWS({type:"config/entity_registry/list"}),this.configuration=await this._hass.callWS({type:"dwains_dashboard/configuration/get"});const e=[],t=[];if(null==this.areas||0===this.areas.length||null==this.devices||0===this.devices.length||null==this.entities||0===this.entities.length||null==this.configuration||0===this.configuration.length);else{const i=document.createElement("hui-masonry-view");if(i.lovelace={editMode:!0},i.willUpdate(new Map),this.notificationCard=await this.createCardElement2({type:"custom:dwains-notification-card",hass:this._hass}),this.badgesCard=await this.createCardElement2({type:"custom:dwains-house-information-card",hass:this._hass}),this.configuration.entities){const e=[];Object.entries(this.configuration.entities).map((async([t,i])=>{if(i.favorite){const i=(0,d.MS)(t),a=!!this.configuration.entities[t]&&!!this.configuration.entities[t].hidden,n=!!this.configuration.entities[t]&&!!this.configuration.entities[t].excluded,o=this.configuration.entities[t]?this.configuration.entities[t].friendly_name:"",r=!(!this.configuration.entities[t]||!this.configuration.entities[t].custom_card)&&this.configuration.entities[t].custom_card,s=!(!this.configuration.entities[t]||!this.configuration.entities[t].custom_popup)&&this.configuration.entities[t].custom_popup,l=!(!this.configuration.entities[t]||!this.configuration.entities[t].favorite)&&this.configuration.entities[t].favorite;let c={},h="1",u="1",p="1",m="1",g="1",f="1";if(r&&this.configuration.entity_cards&&this.configuration.entity_cards[t])c={input_name:o,input_entity:t,...this.configuration.entity_cards[t]};else if(this.configuration.devices_card[i])c={input_name:o,input_entity:t,...this.configuration.devices_card[i]};else{switch(i){default:c={type:"custom:dwains-button-card",friendly_name:o};break;case"camera":c={type:"picture-entity",camera_view:"live"},h="2",u="2",p="2",m="2",g="2",f="2";break;case"climate":c={type:"custom:dwains-thermostat-card",friendly_name:o};break;case"cover":c={type:"custom:dwains-cover-card",friendly_name:o};break;case"light":c={type:"custom:dwains-light-card",friendly_name:o}}c={entity:t,...c}}this.configuration.entities[t]&&this.configuration.entities[t].row_span&&(h=this.configuration.entities[t].row_span),this.configuration.entities[t]&&this.configuration.entities[t].col_span&&(u=this.configuration.entities[t].col_span),this.configuration.entities[t]&&this.configuration.entities[t].row_span_lg&&(p=this.configuration.entities[t].row_span_lg),this.configuration.entities[t]&&this.configuration.entities[t].col_span_lg&&(m=this.configuration.entities[t].col_span_lg),this.configuration.entities[t]&&this.configuration.entities[t].row_span_xl&&(g=this.configuration.entities[t].row_span_xl),this.configuration.entities[t]&&this.configuration.entities[t].col_span_xl&&(f=this.configuration.entities[t].col_span_xl),e.push({domain:i,entity:t,rowSpan:h,colSpan:u,rowSpanLg:p,colSpanLg:m,rowSpanXl:g,colSpanXl:f,friendlyName:o,hideEntity:a,excludeEntity:n,card:await this.createCardElement2(c),customCard:r,customPopup:s,isFavorite:l,favorite_sort_order:this.configuration.entities[t]&&this.configuration.entities[t].favorite_sort_order?this.configuration.entities[t].favorite_sort_order:99})}})),this.favorites=e}for(const i of this.areas)if(this.configuration.areas[i.area_id]&&this.configuration.areas[i.area_id].disabled)t.push(i);else{const t=new Set,a=new Set,n=[],o=[],r=[],s=[],l=[],d=[];for(const e of this.devices)e.area_id===i.area_id&&t.add(e.id);for(const e of this.entities)if(e.area_id?e.area_id===i.area_id:t.has(e.device_id)){if(e.hidden_by)continue;if(this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].disabled){s.push(e.entity_id);continue}const t=e.entity_id.substr(0,e.entity_id.indexOf("."));if(this._hass.states[e.entity_id]){const i=!!this.configuration.entities[e.entity_id]&&!!this.configuration.entities[e.entity_id].hidden,o=!!this.configuration.entities[e.entity_id]&&!!this.configuration.entities[e.entity_id].excluded,s=this.configuration.entities[e.entity_id]?this.configuration.entities[e.entity_id].friendly_name:"",l=!(!this.configuration.entities[e.entity_id]||!this.configuration.entities[e.entity_id].custom_card)&&this.configuration.entities[e.entity_id].custom_card,d=!(!this.configuration.entities[e.entity_id]||!this.configuration.entities[e.entity_id].custom_popup)&&this.configuration.entities[e.entity_id].custom_popup,c=!(!this.configuration.entities[e.entity_id]||!this.configuration.entities[e.entity_id].favorite)&&this.configuration.entities[e.entity_id].favorite;if(i)r.push(e.entity_id),a.add(e.entity_id);else{let r={},h="1",u="1",p="1",m="1",g="1",f="1";if(l&&this.configuration.entity_cards&&this.configuration.entity_cards[e.entity_id])r={input_name:s,input_entity:e.entity_id,...this.configuration.entity_cards[e.entity_id]};else if(this.configuration.devices_card[t])r={input_name:s,input_entity:e.entity_id,...this.configuration.devices_card[t]};else{switch(t){default:r={type:"custom:dwains-button-card",friendly_name:s};break;case"camera":r={type:"picture-entity",camera_view:"live"},h="2",u="2",p="2",m="2",g="2",f="2";break;case"climate":r={type:"custom:dwains-thermostat-card",friendly_name:s};break;case"cover":r={type:"custom:dwains-cover-card",friendly_name:s};break;case"light":r={type:"custom:dwains-light-card",friendly_name:s}}r={entity:e.entity_id,...r}}this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].row_span&&(h=this.configuration.entities[e.entity_id].row_span),this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].col_span&&(u=this.configuration.entities[e.entity_id].col_span),this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].row_span_lg&&(p=this.configuration.entities[e.entity_id].row_span_lg),this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].col_span_lg&&(m=this.configuration.entities[e.entity_id].col_span_lg),this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].row_span_xl&&(g=this.configuration.entities[e.entity_id].row_span_xl),this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].col_span_xl&&(f=this.configuration.entities[e.entity_id].col_span_xl),n.push({domain:t,entity:e.entity_id,rowSpan:h,colSpan:u,rowSpanLg:p,colSpanLg:m,rowSpanXl:g,colSpanXl:f,friendlyName:s,hideEntity:i,excludeEntity:o,card:await this.createCardElement2(r),customCard:l,customPopup:d,isFavorite:c,sort_order:this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].sort_order?this.configuration.entities[e.entity_id].sort_order:99,grouped_sort_order:this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].grouped_sort_order?this.configuration.entities[e.entity_id].grouped_sort_order:99}),a.add(e.entity_id)}}else o.push(e.entity_id)}0!==this.configuration.area_cards.length&&this.configuration.area_cards[i.area_id]&&Object.entries(this.configuration.area_cards[i.area_id]).map((async([e,t])=>{const a=await this.createCardElement2(t),n=t.row_span?t.row_span:"1",o=t.col_span?t.col_span:"1",r=t.row_span_lg?t.row_span_lg:"1",s=t.col_span_lg?t.col_span_lg:"1",c=t.row_span_xl?t.row_span_xl:"1",h=t.col_span_xl?t.col_span_xl:"1";"bottom"==t.position?d.push({card:a,filename:e,area_id:i.area_id,rowSpan:n,colSpan:o,rowSpanLg:r,colSpanLg:s,rowSpanXl:c,colSpanXl:h}):l.push({card:a,filename:e,area_id:i.area_id,rowSpan:n,colSpan:o,rowSpanLg:r,colSpanLg:s,rowSpanXl:c,colSpanXl:h})})),e.push({entitiesNoState:o,entitiesHidden:r,entitiesDisabled:s,entities:a,area:i,cards:n,customCardsTop:l,customCardsBottom:d,floor:this.configuration.areas[i.area_id]&&this.configuration.areas[i.area_id].floor?this.configuration.areas[i.area_id].floor:(0,h.Z)(this._hass,"area.no_floor"),sort_order:this.configuration.areas[i.area_id]&&this.configuration.areas[i.area_id].sort_order?this.configuration.areas[i.area_id].sort_order:99,grouped_sort_order:this.configuration.areas[i.area_id]&&this.configuration.areas[i.area_id].grouped_sort_order?this.configuration.areas[i.area_id].grouped_sort_order:99})}e.sort((function(e,t){let i=e.sort_order,a=t.sort_order;return i==a?0:i>a?1:-1})),0===this.selectedArea.length&&(this.selectedArea=e[0].area.area_id),this.data=e,this.disabledAreas=t,this.startedUp=!0}}_average(e,t,i){const a=e[t].filter((e=>!i||e.attributes.device_class===i));if(!a)return;let n;const o=a.filter((e=>!(!e.attributes.unit_of_measurement||isNaN(Number(e.state))||(n?e.attributes.unit_of_measurement!==n:(n=e.attributes.unit_of_measurement,0)))));if(!o.length)return;const r=o.reduce(((e,t)=>e+Number(t.state)),0);return`${Math.round(r/o.length*10)/10}${n}`}_isOn(e,t,i){const a=e[t];if(a)return(i?a.filter((e=>e.attributes.device_class===i)):a).filter((e=>!l.V_.includes(e.state)&&!l.tj.includes(e.state))).length}_climateState(e,t){const i=e[t];if(!i)return;const a=[];for(const e of i)if(e.attributes.hvac_action&&"idle"!=e.attributes.hvac_action){const t=e.attributes.temperature?" ("+e.attributes.temperature+this._hass.config.unit_system.temperature+")":"";a.push(this._hass.localize(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`)+t)}else if(!e.attributes.hvac_action&&!l.V_.includes(e.state)&&!l.tj.includes(e.state)){const t=e.attributes.temperature?" ("+e.attributes.temperature+this._hass.config.unit_system.temperature+")":"";a.push(this._hass.localize(`component.climate.state._.${e.state}`)+t)}return 0==a.length?"":a.join(", ")}_handleAreaDisableAllEntitiesClicked(e){const t=e.currentTarget.area,i=this.data.find((e=>e.area.area_id==t)),a=e.currentTarget.key,n=e.currentTarget.value;this._hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entities_bool_value",entities:JSON.stringify([...i.entities]),key:a,value:n}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleAreaClick(e){var t=e.currentTarget.dataset.areaId;window.location.hash=t,this.selectedArea=t,window.scrollTo(0,0),this._update_hass(this._hass)}_handleAreaDoubleClick(e){const t=e.currentTarget.dataset.areaId,i=e.currentTarget.lightState;this._hass.callService("light",i?"turn_off":"turn_on",void 0,{area_id:t})}_backButtonClick(){window.location.hash="",this._update_hass(this._hass)}_handleMoreInfo(e){(0,t.W)(e.currentTarget.entity)}_entitiesByDomain(e){const t={};for(const i of e){if(this.configuration.entities[i]&&this.configuration.entities[i].excluded)continue;const e=i.substr(0,i.indexOf("."));if(!(l.hI.includes(e)||l.z.includes(e)||l.ae.includes(e)||l.NR.includes(e)||l.ST.includes(e)))continue;const a=this._hass.states[i];a&&(!l.z.includes(e)&&!l.ae.includes(e)||l.Xw[e].includes(a.attributes.device_class||""))&&(e in t||(t[e]=[]),t[e].push(a))}return t}async createCardElement2(t){const a=await i,n=await a.createCardElement(t);return n.hass=(0,e.C)(),n}_toggle(e){e.stopPropagation();const t=e.currentTarget.domain;l.hI.includes(t)&&this._hass.callService(t,e.currentTarget.state?"turn_off":"turn_on",void 0,{area_id:e.currentTarget.area_id})}_addLovelaceCard(e){e.stopPropagation();const t=e.currentTarget.area,i=e.currentTarget.areaName,n=e.currentTarget.position;window.setTimeout((()=>{(0,a.G)((0,h.Z)(this._hass,"entity.add_card_to")+i,{type:"custom:dwains-create-custom-card-card",area:t,position:n,page:"areas",name:i},!0,"")}),50)}_handleAreaEditClick(e){e.stopPropagation();const t=e.currentTarget.area_id,i=e.currentTarget.area_icon,n=e.currentTarget.floor,o=e.currentTarget.disable_area;window.setTimeout((()=>{(0,a.G)((0,h.Z)(this._hass,"area.edit_area_button"),{type:"custom:dwains-edit-area-button-card",areaId:t,icon:i,floor:n,disableArea:o},!1,"")}),50)}_handleEntityEditClick(e){e.stopPropagation();const t=e.currentTarget.entity,i=e.currentTarget.friendlyName,n=e.currentTarget.hideEntity,o=e.currentTarget.disableEntity,r=e.currentTarget.excludeEntity,s=e.currentTarget.colSpan,l=e.currentTarget.rowSpan,d=e.currentTarget.colSpanLg,c=e.currentTarget.rowSpanLg,u=e.currentTarget.colSpanXl,p=e.currentTarget.rowSpanXl,m=e.currentTarget.customCard,g=e.currentTarget.customPopup;window.setTimeout((()=>{(0,a.G)((0,h.Z)(this._hass,"entity.edit_entity"),{type:"custom:dwains-edit-entity-card",entity:t,friendlyName:i,hideEntity:n,disableEntity:o,excludeEntity:r,colSpan:s,rowSpan:l,colSpanLg:d,rowSpanLg:c,colSpanXl:u,rowSpanXl:p,customCard:m,customPopup:g},!1,"")}),50)}_handleEntityEditBoolValueClick(e){e.stopPropagation();const t=e.currentTarget.entity,i=e.currentTarget.key,a=e.currentTarget.value;this._hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entity_bool_value",entityId:t,key:i,value:a}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleAreaEditBoolValueClick(e){e.stopPropagation();const t=e.currentTarget.areaId,i=e.currentTarget.key,a=e.currentTarget.value;this._hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_area_bool_value",areaId:t,key:i,value:a}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleEntityEditCardClick(e){e.stopPropagation();const t=e.currentTarget.entity;let i,n;if(this.configuration.entity_cards&&this.configuration.entity_cards[t]){const e=this.configuration.entities[t]?this.configuration.entities[t].friendly_name:"";i={input_name:e,input_entity:t,...this.configuration.entity_cards[t]},n="editor-element"}window.setTimeout((()=>{(0,a.G)((0,h.Z)(this._hass,"entity.edit_entity_card"),{type:"custom:dwains-edit-entity-card-card",entity_id:t,cardConfig:i,mode:n,existingCardEdit:!!i},!0,"")}),50)}_handleEntityEditPopupClick(e){e.stopPropagation();const t=e.currentTarget.entity;let i,n;if(this.configuration.entities_popup&&this.configuration.entities_popup[t]){const e=this.configuration.entities[t]?this.configuration.entities[t].friendly_name:"";i={input_name:e,input_entity:t,...this.configuration.entities_popup[t]},n="editor-element"}window.setTimeout((()=>{(0,a.G)((0,h.Z)(this._hass,"entity.edit_entity_popup_card"),{type:"custom:dwains-edit-entity-popup-card",entity_id:t,cardConfig:i,mode:n,existingCardEdit:!!i},!0,"")}),50)}_handleEntityAddToFavoritesClick(e){e.stopPropagation();const t=e.currentTarget.entity;this._hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entity_favorite",entityId:t,favorite:!0}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleEntityRemoveFromFavoritesClick(e){e.stopPropagation();const t=e.currentTarget.entity;this._hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_entity_favorite",entityId:t,favorite:!1}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleDwainsDashboardSettingsClick(e){e.stopPropagation();const t=e.currentTarget.disableClock,i=e.currentTarget.amPmClock,n=e.currentTarget.disableWelcomeMessage,o=e.currentTarget.v2Mode,r=e.currentTarget.weatherEntity,s=e.currentTarget.alarmEntity;window.setTimeout((()=>{(0,a.G)((0,h.Z)(this._hass,"global.dwains_dashboard_settings"),{type:"custom:dwains-edit-homepage-header-card",disableClock:t,amPmClock:i,disableWelcomeMessage:n,v2Mode:o,weatherEntity:r,alarmEntity:s},!1,"")}),50)}_handleAreaViewDisplayGroupedClicked(e){e.stopPropagation();const t=e.currentTarget.value;this.areaViewDisplayGrouped=t,s.set("dwains_dashboard_areaViewDisplayGrouped",t,{expires:365})}_handleAreaDisplayGroupedClicked(e){e.stopPropagation();const t=e.currentTarget.value;this.areaDisplayGrouped=t,s.set("dwains_dashboard_areaDisplayGrouped",t,{expires:365})}_handleFavoriteEditModeClicked(t){t.stopPropagation();const i=t.currentTarget.value;if(i){this._sortable=[];const t=this.shadowRoot.querySelectorAll(".sortable");for(var a=0;a<t.length;a++)this._sortable[a]=new c.Z(t[a],{forceFallback:!0,animation:150,dataIdAttr:"data-entity",handle:".sortable-move",onEnd:function(t){console.log(t),(0,e.C)().connection.sendMessagePromise({type:"dwains_dashboard/sort_entity",sortData:JSON.stringify(this.toArray()),sortType:"favorite_sort_order"}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}})}else this._sortable.forEach((e=>e.destroy())),this._sortable=void 0;this.favoriteEditMode=i}_handleAreaEditModeClicked(t){t.stopPropagation();const i=t.currentTarget.value;if(i){this._sortable=[];const t=this.shadowRoot.querySelectorAll(".sortable");for(var a=0;a<t.length;a++){const i=this.areaDisplayGrouped?"grouped_sort_order":"sort_order";this._sortable[a]=new c.Z(t[a],{forceFallback:!0,animation:150,dataIdAttr:"data-area-id",handle:".sortable-move",onEnd:function(t){console.log(t),(0,e.C)().connection.sendMessagePromise({type:"dwains_dashboard/sort_area_button",sortData:JSON.stringify(this.toArray()),sortType:i}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}})}}else this._sortable.forEach((e=>e.destroy())),this._sortable=void 0;this.areaEditMode=i}_handleAreaViewEditModeClicked(t){t.stopPropagation();const i=t.currentTarget.value;if(i){this._sortable=[];const t=this.shadowRoot.querySelectorAll(".sortable");for(var a=0;a<t.length;a++){const i=this.areaViewDisplayGrouped?"grouped_sort_order":"sort_order";this._sortable[a]=new c.Z(t[a],{forceFallback:!0,animation:150,dataIdAttr:"data-entity",handle:".sortable-move",onEnd:function(t){(0,e.C)().connection.sendMessagePromise({type:"dwains_dashboard/sort_entity",sortData:JSON.stringify(this.toArray()),sortType:i}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}})}}else this._sortable.forEach((e=>e.destroy())),this._sortable=void 0;this.areaViewEditMode=i}_handleCustomCardEditClick(e){e.stopPropagation();const t=e.currentTarget.area_id,i=e.currentTarget.filename,n=document.createElement("hui-masonry-view");n.lovelace={editMode:!0},n.willUpdate(new Map);const o=e.currentTarget.colSpan,r=e.currentTarget.rowSpan,s=e.currentTarget.colSpanLg,l=e.currentTarget.rowSpanLg,d=e.currentTarget.colSpanXl,c=e.currentTarget.rowSpanXl,h=this.configuration.area_cards[t][i];var u="top";h.position&&(u=h.position,delete h.position),delete h.col_span,delete h.row_span,delete h.col_span_lg,delete h.row_span_lg,delete h.col_span_xl,delete h.row_span_xl,window.setTimeout((()=>{(0,a.G)(this._hass.localize("ui.components.entity.entity-picker.edit"),{type:"custom:dwains-create-custom-card-card",area:t,mode:"editor-element",page:"areas",cardConfig:h,position:u,filename:i,colSpan:o,rowSpan:r,colSpanLg:s,rowSpanLg:l,colSpanXl:d,rowSpanXl:c},!0,"")}),50)}_renderAreaButtons(e){if(this.areaDisplayGrouped){e.sort((function(e,t){let i=e.floor,a=t.floor;return i==a?0:i>a?1:-1})),e.sort((function(e,t){let i=e.grouped_sort_order,a=t.grouped_sort_order;return i==a?0:i>a?1:-1}));let t=e.reduce(((e,t)=>(e[t.floor]=[...e[t.floor]||[],t],e)),{});return o.dy`
        <div>
        ${Object.keys(t).map((e=>o.dy`
            <div class="mb-5">
              <h3 class="font-semibold capitalize text-gray">${e.replace(/_/g," ")}</h3>
              <div class="grid grid-cols-2 md-grid-cols-3 ${this.configuration.homepage_header.v2_mode?"lg-grid-cols-4 xl-grid-cols-5":""} gap-4 sortable">
              ${Object.entries(t[e]).map((([e,t])=>o.dy`${this._renderAreaButton(t)}`))}
              </div>
            </div>
          `))}
        </div>
        `}return o.dy`
          <div class="grid grid-cols-2 md-grid-cols-3 ${this.configuration.homepage_header.v2_mode?"lg-grid-cols-4 xl-grid-cols-5":""} gap-4 sortable">
            ${e.map((e=>this._renderAreaButton(e)))}
          </div>`}_renderAreaButtonCard(e,t){return o.dy`
        <div>
          <ha-card class="p-2">
            ${(0,h.Z)(this._hass,"area.title")}:<br>
            <span class="break-words">
            ${e.name}
            </span>
          </ha-card>
          <ha-card>
            <div class="card-actions">
              <mwc-button 
                .areaId="${e.area_id}"
                .key=${"disabled"}
                .value=${!1}
                @click=${this._handleAreaEditBoolValueClick} 
              >
                ${(0,h.Z)(this._hass,"area.enable")}
              </mwc-button>
            </div>
          </ha-card>
        </div>
      `}_renderAreaButton(e){const t=this._entitiesByDomain(e.entities),i=[];return l.z.forEach((e=>{e in t&&l.Xw[e].forEach((a=>{t[e].some((e=>e.attributes.device_class===a))&&i.push(this._average(t,e,a))}))})),o.dy`
        <div class="relative" data-area-id='${e.area.area_id}'>
          <div 
            class="flex justify-between h-44 p-3 area-button ${this.selectedArea!=e.area.area_id||this.configuration.homepage_header.v2_mode?"":"current"}"
            data-area-id='${e.area.area_id}'
            @click=${this._handleAreaClick} 
            .lightState=${this._isOn(t,"light")} 
            @dblclick="${this._handleAreaDoubleClick}"
          >
            <div class="h-full flex flex-wrap content-between">
              <div class="w-full ha-icon">
                ${this.configuration.areas[e.area.area_id]?o.dy`
                  <ha-icon
                    class="h-14 w-14"
                    style="color: var(--primary-color);"
                    .icon=${this.configuration.areas[e.area.area_id].icon}
                  ></ha-icon>`:""}
              </div>
              <div class="w-full">
                <h3 class="font-semibold text-lg">${e.area.name}</h3>
                ${i.length?o.dy`
                    <div class="sensors text-gray">
                      ${i.join(" - ")}
                    </div>`:""}
                <span class="text-gray text-sm capitalize">${this._climateState(t,"climate")}</span>
              </div>
            </div>
            <div class="row-span-2 text-right space-y-0.5 info">
              ${l.hI.map((i=>{if(!(i in t))return"";const a=this._isOn(t,i);return"light"==i||"light"!=i&&a?l.hI.includes(i)?o.dy`
                      <span class="info-badge inline-flex items-center px-1 py-0.5 rounded text-xs font-medium">
                        <ha-icon
                          class="${a?"on":"off"} w-6 h-6 mr-0.5"
                          .icon=${l.VL[i][a?"on":"off"]}
                          .domain=${i}
                          .area_id=${e.area.area_id}
                          .state=${a}
                          @click=${this._toggle}
                        >
                        </ha-icon>
                        ${a}
                      </span><br>
                      `:"":void 0}))}
              ${l.ae.map((e=>e in t?l.Xw[e].map((i=>{const a=this._isOn(t,e,i);if(a)return o.dy`
                      ${l.VL[e][i]?o.dy`
                          <span class="info-badge inline-flex items-center px-1 py-0.5 rounded text-xs font-medium">
                            <ha-icon
                              class="w-6 h-6 mr-0.5"
                              .icon=${l.VL[e][i]}
                            ></ha-icon> ${a}
                          </span><br>`:""}
                    `})):""))}
              ${l.ST.map((e=>{if(!(e in t))return"";const i=this._isOn(t,e);return i?l.ST.includes(e)?o.dy`
                      <span class="info-badge inline-flex items-center px-1 py-0.5 rounded text-xs font-medium">
                        <ha-icon
                          class="${i?"on":"off"} w-6 h-6 mr-0.5"
                          .icon=${l.VL[e][i?"on":"off"]}
                        >
                        </ha-icon>
                        ${i}
                      </span><br>
                      `:"":void 0}))}
            </div>
          </div>
          ${this.areaEditMode?o.dy`
            <ha-card>
              <div class="card-actions-multiple">
                <div class="sortable-move">
                  <ha-icon
                    .icon=${"mdi:cursor-move"}
                  >
                  </ha-icon>
                </div>
                <mwc-button 
                  .area_id=${e.area.area_id}
                  .area_icon=${this.configuration.areas[e.area.area_id]&&this.configuration.areas[e.area.area_id].icon?this.configuration.areas[e.area.area_id].icon:""}
                  .floor=${this.configuration.areas[e.area.area_id]&&this.configuration.areas[e.area.area_id].floor?this.configuration.areas[e.area.area_id].floor:""}
                  .disable_area=${!(!this.configuration.areas[e.area.area_id]||!this.configuration.areas[e.area.area_id].disable_area)&&this.configuration.areas[e.area.area_id].disable_area}

                  @click=${this._handleAreaEditClick} 
                >
                  ${this._hass.localize("ui.components.entity.entity-picker.edit")}
                </mwc-button>
              </div>
            </ha-card>
            `:""}
        </div>
      `}_renderAreaViewCustomCards(e,t){return o.dy`
      <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 xl-grid-cols-4 gap-4 my-4">
        ${"bottom"==t?e.customCardsBottom.map((e=>o.dy`${this._renderAreaViewCustomCard(e)}`)):e.customCardsTop.map((e=>o.dy`${this._renderAreaViewCustomCard(e)}`))}
      </div>
      `}_renderAreaViewCustomCard(e){return o.dy`
      <div class="col-span-${e.colSpan} row-span-${e.rowSpan} lg-col-span-${e.colSpanLg} lg-row-span-${e.rowSpanLg} xl-col-span-${e.colSpanXl} xl-row-span-${e.rowSpanXl} relative">
        <div>
          ${e.card}
        </div>
        ${this.areaViewEditMode?o.dy`
        <ha-card>
          <div class="card-actions">
            <mwc-button 
              @click=${this._handleCustomCardEditClick} 
              .area_id=${e.area_id}
              .filename=${e.filename}
              .rowSpan=${e.rowSpan}
              .colSpan=${e.colSpan}
              .rowSpanLg=${e.rowSpanLg}
              .colSpanLg=${e.colSpanLg}
              .rowSpanXl=${e.rowSpanXl}
              .colSpanXl=${e.colSpanXl}
            >
            ${this._hass.localize("ui.components.entity.entity-picker.edit")}
            </mwc-button>
          </div>
        </ha-card>`:""}
      </div>
      `}_renderAreaViewCards(e){if(this.areaViewDisplayGrouped){let t=e.cards.reduce(((e,t)=>(e[t.domain]=[...e[t.domain]||[],t],e)),{}),i=Object.keys(t).sort(((e,t)=>{let i=this.configuration.devices[e]&&this.configuration.devices[e].sort_order?this.configuration.devices[e].sort_order:99,a=this.configuration.devices[t]&&this.configuration.devices[t].sort_order?this.configuration.devices[t].sort_order:99;return i==a?0:i>a?1:-1}));return e.cards.sort((function(e,t){let i=e.grouped_sort_order,a=t.grouped_sort_order;return i==a?0:i>a?1:-1})),o.dy`
        <div>
        ${i.map((e=>o.dy`
            <div class="mb-5">
              <h3 class="font-semibold capitalize text-gray">${(0,h.Z)(this._hass,"device."+e)}</h3>
              <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 xl-grid-cols-4 gap-4 sortable">
                ${Object.entries(t[e]).map((([e,t])=>o.dy`${this._renderAreaViewCard(t)}`))}
              </div>
            </div>
          `))}
        </div>
        `}return e.cards.sort((function(e,t){let i=e.sort_order,a=t.sort_order;return i==a?0:i>a?1:-1})),o.dy`
        <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 xl-grid-cols-4 gap-4 sortable">
          ${e.cards.map((e=>o.dy`${this._renderAreaViewCard(e)}`))}
        </div>
        `}_renderAreaViewCard(e){return o.dy`
      <div 
        data-entity='${e.entity}'
        class="col-span-${e.colSpan} row-span-${e.rowSpan} lg-col-span-${e.colSpanLg} lg-row-span-${e.rowSpanLg} xl-col-span-${e.colSpanXl} xl-row-span-${e.rowSpanXl} relative"
      >
        <div>
          ${e.card}
        </div>
        ${this.areaViewEditMode?o.dy`
        <ha-card>
          <div class="card-actions-multiple">
            <div class="sortable-move">
              <ha-icon
                .icon=${"mdi:cursor-move"}
              >
              </ha-icon>
            </div>
            <ha-button-menu
              class="ha-icon-overflow-menu-overflow"
              corner="BOTTOM_START"
              absolute
            >
              <ha-icon-button
                .label=${this._hass.localize("ui.common.overflow_menu")}
                .path=${n.SXi}
                slot="trigger"
              ></ha-icon-button>
                <mwc-list-item
                  graphic="icon"
                  .entity="${e.entity}"
                  .friendlyName="${e.friendlyName}"
                  .disableEntity=${e.disableEntity}
                  .hideEntity=${e.hideEntity}
                  .excludeEntity=${e.excludeEntity}
                  .rowSpan=${e.rowSpan}
                  .colSpan=${e.colSpan}
                  .rowSpanLg=${e.rowSpanLg}
                  .colSpanLg=${e.colSpanLg}
                  .rowSpanXl=${e.rowSpanXl}
                  .colSpanXl=${e.colSpanXl}
                  .customCard=${e.customCard}
                  .customPopup=${e.customPopup}
                  @click=${this._handleEntityEditClick} 
                >
                  <div slot="graphic">
                    <ha-icon .icon=${"mdi:cog"}></ha-icon>
                  </div>
                  ${(0,h.Z)(this._hass,"entity.settings")}
                </mwc-list-item>
                ${"t"!=e.entity?o.dy`
                  <mwc-list-item
                    graphic="icon"
                    .entity="${e.entity}"
                    @click="${this._handleEntityEditCardClick}"
                  >
                    <div slot="graphic">
                      <ha-icon .icon=${"mdi:pencil"}></ha-icon>
                    </div>
                    ${(0,h.Z)(this._hass,"entity.entity_card")}
                  </mwc-list-item>`:""}
                ${"t"!=e.entity?o.dy`
                  <mwc-list-item
                    graphic="icon"
                    .entity="${e.entity}"
                    @click="${this._handleEntityEditPopupClick}"
                  >
                    <div slot="graphic">
                      <ha-icon .icon=${"mdi:pencil-box-multiple"}></ha-icon>
                    </div>
                    ${(0,h.Z)(this._hass,"entity.popup_card")}
                  </mwc-list-item>`:""}
                ${e.isFavorite?"":o.dy`
                  <mwc-list-item
                    graphic="icon"
                    .entity="${e.entity}"
                    @click="${this._handleEntityAddToFavoritesClick}"
                  >
                    <div slot="graphic">
                      <ha-icon .icon=${"mdi:tag-heart"}></ha-icon>
                    </div>
                    ${(0,h.Z)(this._hass,"entity.add_to_favorites")}
                  </mwc-list-item>`}
                <mwc-list-item
                  graphic="icon"
                  .entity="${e.entity}"
                  .key=${"excluded"}
                  .value=${!0}
                  @click=${this._handleEntityEditBoolValueClick} 
                >
                  <div slot="graphic">
                    <ha-icon .icon=${"mdi:table-eye-off"}></ha-icon>
                  </div>
                  ${(0,h.Z)(this._hass,"entity.exclude")}
                </mwc-list-item>
                <mwc-list-item
                  graphic="icon"
                  .entity="${e.entity}"
                  .key=${"hidden"}
                  .value=${!0}
                  @click=${this._handleEntityEditBoolValueClick} 
                >
                  <div slot="graphic">
                    <ha-icon .icon=${"mdi:eye-off"}></ha-icon>
                  </div>
                  ${(0,h.Z)(this._hass,"entity.hide")}
                </mwc-list-item>
                <mwc-list-item
                  graphic="icon"
                  .entity="${e.entity}"
                  .key=${"disabled"}
                  .value=${!0}
                  @click=${this._handleEntityEditBoolValueClick} 
                >
                  <div slot="graphic">
                    <ha-icon .icon=${"mdi:tray-remove"}></ha-icon>
                  </div>
                  ${(0,h.Z)(this._hass,"entity.disable")}
                </mwc-list-item>
            </ha-button-menu>
          </div>
        </ha-card>`:""}
      </div>
      `}_renderAreaViewEntityCard(e,t){return o.dy`
        <div>
          <ha-card class="p-2">
            ${(0,h.Z)(this._hass,"entity.title")}:<br>
            <span class="break-words">
            ${e}
            </span>
          </ha-card>
          <ha-card>
            <div class="card-actions">
              ${"hidden"==t?o.dy`
              <mwc-button 
                .entity="${e}"
                .key=${"hidden"}
                .value=${!1}
                @click=${this._handleEntityEditBoolValueClick} 
              >
                ${(0,h.Z)(this._hass,"entity.unhide")}
              </mwc-button>`:""}
              ${"disabled"==t?o.dy`
              <mwc-button 
                .entity="${e}"
                .key=${"disabled"}
                .value=${!1}
                @click=${this._handleEntityEditBoolValueClick} 
              >
                ${(0,h.Z)(this._hass,"entity.enable")}
              </mwc-button>`:""}
            </div>
          </ha-card>
        </div>
      `}_renderAreaView(e){const t=this.selectedArea==e.area.area_id?"block":"hidden";return e.cards.sort((function(e,t){let i=e.domain,a=t.domain;return i==a?0:i>a?1:-1})),o.dy`
          <div class="w-full mb-12 ${t}" id="${e.area.area_id}">
            <div class="flex justify-between">
              <div class="sticky top-0">
                <h2 class="font-semibold text-lg">
                  ${e.area.name}
                </h2>
                <span class="text-gray">
                  ${e.cards.length} ${(0,h.Z)(this._hass,"entity.title_plural")}
                </span>
              </div>
              <div>
                <ha-button-menu
                  class="ha-icon-overflow-menu-overflow"
                  corner="BOTTOM_START"
                  absolute
                >
                  <ha-icon-button
                    .label=${this._hass.localize("ui.common.overflow_menu")}
                    .path=${n.SXi}
                    slot="trigger"
                  ></ha-icon-button>
                    ${this.areaViewDisplayGrouped?o.dy`
                      <mwc-list-item
                        graphic="icon"
                        .value=${!1}
                        @click=${this._handleAreaViewDisplayGroupedClicked}
                      >
                        <div slot="graphic">
                        <ha-icon .icon=${"mdi:grid"}></ha-icon>
                        </div>
                        ${(0,h.Z)(this._hass,"entity.ungroup")}
                      </mwc-list-item>
                      `:o.dy`
                      <mwc-list-item
                        graphic="icon"
                        .value=${!0}
                        @click=${this._handleAreaViewDisplayGroupedClicked}
                      >
                        <div slot="graphic">
                          <ha-icon .icon=${"mdi:format-list-group"}></ha-icon>
                        </div>
                        ${(0,h.Z)(this._hass,"entity.group")}
                      </mwc-list-item>`}
                    ${this._hass.user.is_admin?o.dy`
                      ${this.areaViewEditMode?o.dy`
                        <mwc-list-item
                          graphic="icon"
                          .value=${!1}
                          @click=${this._handleAreaViewEditModeClicked}
                        >
                          <div slot="graphic">
                            <ha-svg-icon .path=${n.Shd}></ha-svg-icon>
                          </div>
                          ${(0,h.Z)(this._hass,"global.disable_edit_mode")}
                        </mwc-list-item>`:o.dy`
                        <mwc-list-item
                          graphic="icon"
                          .value=${!0}
                          @click=${this._handleAreaViewEditModeClicked}
                        >
                          <div slot="graphic">
                            <ha-svg-icon .path=${n.Shd}></ha-svg-icon>
                          </div>
                          ${(0,h.Z)(this._hass,"global.enable_edit_mode")}
                        </mwc-list-item>
                        `}
                    `:""}
                </ha-button-menu>
              </div>
            </div>

            ${this.areaViewEditMode?o.dy`
            <ha-card class="card-actions-centered">
              <mwc-button 
                .area=${e.area.area_id} 
                .key=${"disabled"} 
                .value=${!0} 
                @click=${this._handleAreaDisableAllEntitiesClicked}
              >
                ${(0,h.Z)(this._hass,"entity.disable_all")}
              </mwc-button>
              <mwc-button 
                .area=${e.area.area_id} 
                .key=${"hidden"} 
                .value=${!0} 
                @click=${this._handleAreaDisableAllEntitiesClicked}
              >
                ${(0,h.Z)(this._hass,"entity.hide_all")}
              </mwc-button>
            </ha-card>

            <button type="button" 
              @click=${this._addLovelaceCard}
              .area=${e.area.area_id}
              .areaName=${e.area.name}
              .position=${"top"}
              class="cursor-pointer my-4 relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="mx-auto h-12 w-12 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <span class="mt-2 block text-sm font-medium text-gray">
                ${this._hass.localize("ui.panel.lovelace.editor.edit_card.add")}
              </span>
            </button>`:""}

            ${this._renderAreaViewCustomCards(e,"top")}

            ${this._renderAreaViewCards(e)}

            ${this._renderAreaViewCustomCards(e,"bottom")}

            ${this.areaViewEditMode?o.dy`
              ${e.entitiesNoState.length?o.dy`
                <div class="mb-5">
                  <h3 class="font-semibold capitalize text-gray">${(0,h.Z)(this._hass,"entity.unavailable")}</h3>
                  <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 gap-4">
                  ${e.entitiesNoState.map((e=>o.dy`${this._renderAreaViewEntityCard(e,"noState")}`))}
                  </div>
                </div>`:""}
              ${e.entitiesHidden.length?o.dy`
                <div class="mb-5">
                  <h3 class="font-semibold capitalize text-gray">${(0,h.Z)(this._hass,"entity.hidden")}</h3>
                  <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 gap-4">
                  ${e.entitiesHidden.map((e=>o.dy`${this._renderAreaViewEntityCard(e,"hidden")}`))}
                  </div>
                </div>`:""}
              ${e.entitiesDisabled.length?o.dy`
                <div class="mb-5">
                  <h3 class="font-semibold capitalize text-gray">${(0,h.Z)(this._hass,"entity.disabled")}</h3>
                  <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 gap-4">
                  ${e.entitiesDisabled.map((e=>o.dy`${this._renderAreaViewEntityCard(e,"disabled")}`))}
                  </div>
                </div>`:""}
            `:""}

            ${this.areaViewEditMode?o.dy`
            <button type="button" 
              @click=${this._addLovelaceCard}
              .area=${e.area.area_id}
              .areaName=${e.area.name}
              .position=${"bottom"}
              class="cursor-pointer my-4 relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="mx-auto h-12 w-12 text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <span class="mt-2 block text-sm font-medium text-gray">
                ${this._hass.localize("ui.panel.lovelace.editor.edit_card.add")}
              </span>
            </button>`:""}
          </div>`}_renderFavoriteViewCard(e){return o.dy`
      <div data-entity='${e.entity}' class="col-span-${e.colSpan} row-span-${e.rowSpan} lg-col-span-${e.colSpanLg} lg-row-span-${e.rowSpanLg}  relative">
        <div>
          ${e.card}
        </div>
        ${this.favoriteEditMode?o.dy`
        <ha-card>
          <div class="card-actions-multiple">
            <div class="sortable-move">
              <ha-icon
                .icon=${"mdi:cursor-move"}
              >
              </ha-icon>
            </div>
            <ha-button-menu
              class="ha-icon-overflow-menu-overflow"
              corner="BOTTOM_START"
              absolute
            >
              <ha-icon-button
                .label=${this._hass.localize("ui.common.overflow_menu")}
                .path=${n.SXi}
                slot="trigger"
              ></ha-icon-button>
                <mwc-list-item
                  graphic="icon"
                  .entity="${e.entity}"
                  .friendlyName="${e.friendlyName}"
                  .disableEntity=${e.disableEntity}
                  .hideEntity=${e.hideEntity}
                  .excludeEntity=${e.excludeEntity}
                  .rowSpan=${e.rowSpan}
                  .colSpan=${e.colSpan}
                  .rowSpanLg=${e.rowSpanLg}
                  .colSpanLg=${e.colSpanLg}
                  .rowSpanXl=${e.rowSpanXl}
                  .colSpanXl=${e.colSpanXl}
                  .customCard=${e.customCard}
                  .customPopup=${e.customPopup}
                  @click=${this._handleEntityEditClick} 
                >
                  <div slot="graphic">
                    <ha-icon .icon=${"mdi:cog"}></ha-icon>
                  </div>
                  ${(0,h.Z)(this._hass,"entity.settings")}
                </mwc-list-item>
                ${"t"!=e.entity?o.dy`
                  <mwc-list-item
                    graphic="icon"
                    .entity="${e.entity}"
                    @click="${this._handleEntityEditCardClick}"
                  >
                    <div slot="graphic">
                      <ha-icon .icon=${"mdi:pencil"}></ha-icon>
                    </div>
                    ${(0,h.Z)(this._hass,"entity.entity_card")}
                  </mwc-list-item>`:""}
                ${"t"!=e.entity?o.dy`
                  <mwc-list-item
                    graphic="icon"
                    .entity="${e.entity}"
                    @click="${this._handleEntityEditPopupClick}"
                  >
                    <div slot="graphic">
                      <ha-icon .icon=${"mdi:pencil-box-multiple"}></ha-icon>
                    </div>
                    ${(0,h.Z)(this._hass,"entity.popup_card")}
                  </mwc-list-item>`:""}
                <mwc-list-item
                  graphic="icon"
                  .entity="${e.entity}"
                  @click="${this._handleEntityRemoveFromFavoritesClick}"
                >
                  <div slot="graphic">
                    <ha-icon .icon=${"mdi:tag-heart"}></ha-icon>
                  </div>
                  ${(0,h.Z)(this._hass,"entity.remove_from_favorites")}
                </mwc-list-item>
            </ha-button-menu>
          </div>
        </ha-card>`:""}
      </div>
      `}_renderFavorites(){return 0==this.favorites.length?o.dy``:(this.favorites.sort((function(e,t){let i=e.favorite_sort_order,a=t.favorite_sort_order;return i==a?0:i>a?1:-1})),o.dy`
        <div id="favorites" class="mt-4">
          <div class="flex justify-between mb-2">
            <div>
              <h2 class="font-semibold text-lg">
                ${(0,h.Z)(this._hass,"favorite.title_plural")}
              </h2>
              <span class="text-gray">
                ${(0,h.Z)(this._hass,"favorite.all_favorites")}
              </span>
            </div>
            <div>
              ${this._hass.user.is_admin?o.dy`
              <ha-button-menu
                class="ha-icon-overflow-menu-overflow"
                corner="BOTTOM_END"
                absolute
              >
                <ha-icon-button
                  .label=${this._hass.localize("ui.common.overflow_menu")}
                  .path=${n.SXi}
                  slot="trigger"
                ></ha-icon-button>
                  ${this.favoriteEditMode?o.dy`
                    <mwc-list-item
                      graphic="icon"
                      .value=${!1}
                      @click=${this._handleFavoriteEditModeClicked}
                    >
                      <div slot="graphic">
                        <ha-svg-icon .path=${n.Shd}></ha-svg-icon>
                      </div>
                      ${(0,h.Z)(this._hass,"global.disable_edit_mode")}
                    </mwc-list-item>`:o.dy`
                    <mwc-list-item
                      graphic="icon"
                      .value=${!0}
                      @click=${this._handleFavoriteEditModeClicked}
                    >
                      <div slot="graphic">
                        <ha-svg-icon .path=${n.Shd}></ha-svg-icon>
                      </div>
                      ${(0,h.Z)(this._hass,"global.enable_edit_mode")}
                    </mwc-list-item>
                    `}
              </ha-button-menu>
              `:""}
            </div>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 gap-4 sortable">
            ${this.favorites.map((e=>o.dy`${this._renderFavoriteViewCard(e)}`))}
          </div>
        </div>
        `)}render(){if(null==this.data||0===this.data.length)return o.dy``;{var e,t=new Date,i=(t.getHours()<10?"0":"")+t.getHours(),a=(t.getMinutes()<10?"0":"")+t.getMinutes(),r=t.toLocaleDateString(this._hass.locale.language,{weekday:"long",month:"short",day:"numeric"}),s=i>=12?`${i-12}:${a} pm`:`${i}:${a} am`;let d,c,u,p,m,g,f,_,b;return e=t.getHours()<12?(0,h.Z)(this._hass,"global.greeting_morning"):t.getHours()<18?(0,h.Z)(this._hass,"global.greeting_afternoon"):(0,h.Z)(this._hass,"global.greeting_evening"),this.configuration.homepage_header.weather_entity&&(d=this.configuration.homepage_header.weather_entity,c=this._hass.states[d],c&&(u=l.Wf[c.state],p=this._hass.localize("component.weather.state._."+c.state),m=c.attributes.temperature+this._hass.config.unit_system.temperature)),this.configuration.homepage_header.alarm_entity&&(g=this.configuration.homepage_header.alarm_entity,f=this._hass.states[g].state,f&&(b=l.y7[f],_=this._hass.localize(`component.alarm_control_panel.state._.${f}`))),o.dy`
            <div class="flex flex-wrap">
              <div class="w-full ${this.configuration.homepage_header.v2_mode?"":"lg-w-1-2 xl-w-1-3"} ${window.location.hash?this.configuration.homepage_header.v2_mode?"hidden":"hidden lg-block":""} p-4">
                <div class="flex justify-between mb-2">
                  <div>
                    ${this.configuration.homepage_header.alarm_entity?o.dy`
                      <div class="area-button py-1 px-2" .entity=${this.configuration.homepage_header.alarm_entity} @click=${this._handleMoreInfo}>
                        <ha-icon icon="${b}"></ha-icon> ${_}
                      </div>`:""}
                  </div>
                  
                  <div id="weather">
                    ${this.configuration.homepage_header.weather_entity?o.dy`
                      <div class="area-button py-1 px-2" .entity=${this.configuration.homepage_header.weather_entity} @click=${this._handleMoreInfo}>
                        <ha-icon icon="${u}"></ha-icon> ${p}, ${m}
                      </div>`:""}
                  </div>

                  <div>
                    ${this._hass.user.is_admin?o.dy`
                      <div 
                        class="p-1 ha-icon cursor-pointer" 
                        .disableClock=${!!this.configuration.homepage_header.disable_clock}
                        .amPmClock=${!!this.configuration.homepage_header.am_pm_clock}
                        .disableWelcomeMessage=${!!this.configuration.homepage_header.disable_welcome_message}
                        .v2Mode=${!!this.configuration.homepage_header.v2_mode}
                        .weatherEntity=${this.configuration.homepage_header.weather_entity?this.configuration.homepage_header.weather_entity:""}
                        .alarmEntity=${this.configuration.homepage_header.alarm_entity?this.configuration.homepage_header.alarm_entity:""}
                        @click=${this._handleDwainsDashboardSettingsClick}
                      >
                        <ha-icon class="w-6 h-6" .icon=${"mdi:cog"}></ha-icon>
                      </div>
                    `:""}
                  </div>
                </div>
                <div class="mb-4 grid grid-cols-1 lg-grid-cols-2">
                  <div>
                    ${this.configuration.homepage_header.disable_welcome_message?"":o.dy`<h1 class="font-semibold text-xl">${e}, ${this._hass.user.name}</h1>`}
                    ${this.notificationCard}
                  </div>
                  ${this.configuration.homepage_header.disable_clock?"":o.dy`
                    <div class="text-right">
                      <div id="clock" class="mb-2 hidden lg-block">
                        <h2 class="font-semibold text-xl">${this.configuration.homepage_header.am_pm_clock?o.dy`${s}`:o.dy`${i}:${a}`}</h2>
                        <span class="text-gray capitalize">${r}</span>
                      </div>
                    </div>`}
                </div>

                ${this.badgesCard}

                ${this._renderFavorites()}

                <div id="areas" class="mt-4">
                  <div class="flex justify-between mb-2">
                    <div>
                      <h2 class="font-semibold text-lg capitalize">
                        ${(0,h.Z)(this._hass,"area.title_plural")}
                      </h2>
                      <span class="text-gray">
                        ${this.data.length} ${(0,h.Z)(this._hass,"area.title_plural")}
                      </span>
                    </div>
                    <div>
                      <ha-button-menu
                        class="ha-icon-overflow-menu-overflow"
                        corner="BOTTOM_END"
                        absolute
                      >
                        <ha-icon-button
                          .label=${this._hass.localize("ui.common.overflow_menu")}
                          .path=${n.SXi}
                          slot="trigger"
                        ></ha-icon-button>
                          ${this.areaDisplayGrouped?o.dy`
                            <mwc-list-item
                              graphic="icon"
                              .value=${!1}
                              @click=${this._handleAreaDisplayGroupedClicked}
                            >
                              <div slot="graphic">
                              <ha-icon .icon=${"mdi:grid"}></ha-icon>
                              </div>
                              ${(0,h.Z)(this._hass,"area.ungroup_by_floor")}
                            </mwc-list-item>
                            `:o.dy`
                            <mwc-list-item
                              graphic="icon"
                              .value=${!0}
                              @click=${this._handleAreaDisplayGroupedClicked}
                            >
                              <div slot="graphic">
                                <ha-icon .icon=${"mdi:format-list-group"}></ha-icon>
                              </div>
                              ${(0,h.Z)(this._hass,"area.group_by_floor")}
                            </mwc-list-item>`}
                          ${this._hass.user.is_admin?o.dy`
                            ${this.areaEditMode?o.dy`
                              <mwc-list-item
                                graphic="icon"
                                .value=${!1}
                                @click=${this._handleAreaEditModeClicked}
                              >
                                <div slot="graphic">
                                  <ha-svg-icon .path=${n.Shd}></ha-svg-icon>
                                </div>
                                ${(0,h.Z)(this._hass,"global.disable_edit_mode")}
                              </mwc-list-item>
                              `:o.dy`
                              <mwc-list-item
                                graphic="icon"
                                .value=${!0}
                                @click=${this._handleAreaEditModeClicked}
                              >
                                <div slot="graphic">
                                  <ha-svg-icon .path=${n.Shd}></ha-svg-icon>
                                </div>
                                ${(0,h.Z)(this._hass,"global.enable_edit_mode")}
                              </mwc-list-item>`}
                          `:""}
                      </ha-button-menu>
                    </div>
                  </div>

                  ${this._renderAreaButtons(this.data)}

                  ${this.areaEditMode?o.dy`
                    ${this.disabledAreas.length?o.dy`
                      <div class="mb-5">
                        <h3 class="font-semibold capitalize text-gray">${(0,h.Z)(this._hass,"area.disabled")}</h3>
                        <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 gap-4">
                        ${this.disabledAreas.map((e=>o.dy`${this._renderAreaButtonCard(e,"disabled")}`))}
                        </div>
                      </div>`:""}
                  `:""}
                </div>
              </div>
              <div class="w-full ${this.configuration.homepage_header.v2_mode?"":"lg-w-1-2 xl-w-2-3"} ${window.location.hash?"":this.configuration.homepage_header.v2_mode?"hidden":"hidden lg-block"} p-4">
                ${this.data.map((e=>this._renderAreaView(e)))}
              </div>
            </div>
            <div class="sticky z-30 bottom-0 ${window.location.hash?"":"hidden"} ${this.configuration.homepage_header.v2_mode?"":"lg-hidden"} text-right">
              <div @click=${this._backButtonClick} class="back-button">
                  <div class="button">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  </div>
              </div>
            </div>
        `}}static get styles(){return o.iv`
        .back-button {
          margin-right: 1rem;
          margin-bottom: 3.4rem;
          display: inline-block;
        }
        .back-button .button {
          background-color: var(--secondary-background-color);
          padding: 0.75rem;
          border-radius: 9999px;
          margin-bottom: env(safe-area-inset-bottom);
        }
        .card-actions {
          text-align: right;
        }
        .card-actions-centered {
          display: flex;
          justify-content: space-around;
          padding: 0.25rem 0.5rem;
        }
        .card-actions-multiple {
          display: flex;
          justify-content: space-between;
          padding: 0.25rem 0.5rem;
        }
        .sortable-move {
          cursor: -webkit-grabbing;
          cursor: grab;
          margin: auto 0;
        }
        .area-button .info ha-icon, .ha-icon ha-icon {
          display: inline-block;
          margin: auto;
          --mdc-icon-size: 100% !important;
          --iron-icon-width: 100% !important;
          --iron-icon-height: 100% !important;
        }
        #badges {
          cursor: pointer;
          background: var( --ha-card-background, var(--card-background-color, white) );
          box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
          color: var(--primary-text-color);
        } 
        .area-button {
          cursor: pointer;
          background: var( --ha-card-background, var(--card-background-color, white) );
          border-radius: 10px;
          box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
          color: var(--test-primary-text-color, var(--primary-text-color));
        }
        .info-badge {
          /*background-color: var(--sidebar-icon-color); */
          color: var( --dwains-info-badge-color, var(--primary-text-color) );
          background-color: var(--dwains-info-badge-background, var(--secondary-background-color));
        }
        @media (min-width: 1024px) {
          .area-button.current {
            background: transparent;
            z-index: 1;
            position: relative;
          }
          .area-button.current::before {
            content: "";
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%; 
            height: 100%;  
            opacity: .12; 
            z-index: -1;
            background: var(--sidebar-selected-icon-color);
            border-radius: var(--ha-card-border-radius, 4px);
          }
        }
        /*styling tailwind dwains version*/
        *, ::after, ::before {
          box-sizing: border-box;
        }
        h1,h2,h3 {
          margin: 0;
        }
        h3 {
          font-size: 1em;
        }
        .absolute {
          position: absolute
        }
        .break-words {
          overflow-wrap: break-word;
        }
        .relative {
            position: relative
        }
        .sticky {
            position: -webkit-sticky;
            position: sticky
        }
        .top-0 {
            top: 0px
        }
        .bottom-0 {
            bottom: 0px
        }
        .z-30 {
            z-index: 30
        }
        .col-span-1 {
            grid-column: span 1 / span 1
        }
        .col-span-2 {
            grid-column: span 2 / span 2
        }
        .row-span-1 {
            grid-row: span 1 / span 1
        }
        .row-span-2 {
            grid-row: span 2 / span 2
        }
        .my-4 {
            margin-top: 1rem;
            margin-bottom: 1rem
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto
        }
        .mb-2 {
            margin-bottom: 0.5rem
        }
        .mb-4 {
            margin-bottom: 1rem
        }
        .mt-4 {
            margin-top: 1rem
        }
        .mr-0\.5 {
            margin-right: 0.125rem
        }
        .mr-0 {
            margin-right: 0px
        }
        .mb-12 {
            margin-bottom: 3rem
        }
        .mb-5 {
            margin-bottom: 1.25rem
        }
        .mb-16 {
            margin-bottom: 4rem
        }
        .ml-4 {
            margin-left: 1rem
        }
        .block {
            display: block
        }
        .inline-block {
            display: inline-block
        }
        .flex {
            display: flex
        }
        .inline-flex {
            display: inline-flex
        }
        .grid {
            display: grid
        }
        .hidden {
            display: none
        }
        .h-6 {
            height: 1.5rem
        }
        .h-44 {
            height: 11rem
        }
        .h-full {
            height: 100%
        }
        .h-14 {
            height: 3.5rem
        }
        .h-8 {
            height: 2rem
        }
        .w-full {
            width: 100%
        }
        .w-6 {
            width: 1.5rem
        }
        .w-14 {
            width: 3.5rem
        }
        .w-8 {
            width: 2rem
        }
        .w-12 {
          width: 3rem
        }
        .cursor-pointer {
            cursor: pointer
        }
        .grid-flow-row-dense {
            grid-auto-flow: row dense
        }
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr))
        }
        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr))
        }
        .flex-wrap {
            flex-wrap: wrap
        }
        .content-between {
            align-content: space-between
        }
        .items-center {
            align-items: center
        }
        .justify-between {
            justify-content: space-between
        }
        .gap-4 {
            gap: 1rem
        }
        .space-y-0.5 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-y-reverse: 0;
            margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));
            margin-bottom: calc(0.125rem * var(--tw-space-y-reverse))
        }
        .space-y-0 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-y-reverse: 0;
            margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
            margin-bottom: calc(0px * var(--tw-space-y-reverse))
        }
        .rounded {
            border-radius: 0.25rem
        }
        .rounded-md {
            border-radius: 0.375rem
        }
        .bg-gray-800 {
            --tw-bg-opacity: 1;
            background-color: rgb(31 41 55 / var(--tw-bg-opacity))
        }
        .rounded-lg {
          border-radius: 0.5rem
        }
        .border-2 {
            border-width: 2px
        }
        .border-dashed {
            border-style: dashed
        }
        .border-gray-300 {
            --tw-border-opacity: 1;
            border-color: rgb(209 213 219 / var(--tw-border-opacity))
        }
        .bg-gray-800 {
            --tw-bg-opacity: 1;
            background-color: rgb(31 41 55 / var(--tw-bg-opacity))
        }
        .bg-opacity-50 {
            --tw-bg-opacity: 0.5
        }
        .p-2 {
          padding: 0.5rem;
        }
        .p-4 {
            padding: 1rem
        }
        .p-1 {
            padding: 0.25rem
        }
        .p-3 {
            padding: 0.75rem
        }
        .px-1 {
            padding-left: 0.25rem;
            padding-right: 0.25rem
        }
        .p-12 {
          padding: 3rem
        }
        .py-0\.5 {
            padding-top: 0.125rem;
            padding-bottom: 0.125rem
        }
        .py-0 {
            padding-top: 0px;
            padding-bottom: 0px
        }
        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem
        }
        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem
        }
        .text-center {
          text-align: center
        }
        .text-right {
            text-align: right
        }
        .text-xl {
            font-size: 1.5rem;
            line-height: 2rem
        }
        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem
        }
        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem
        }
        .text-xs {
            font-size: 0.75rem;
            line-height: 1rem
        }
        .font-semibold {
            font-weight: 600
        }
        .font-medium {
            font-weight: 500
        }
        .capitalize {
            text-transform: capitalize
        }
        .text-gray {
            color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
        }
        .text-white {
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity))
        }
        @media (min-width: 768px) {
            .md-grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr))
            }
        }
        @media (min-width: 1024px) {
            .lg-col-span-1 {
                grid-column: span 1 / span 1
            }
            .lg-col-span-3 {
                grid-column: span 3 / span 3
            }
            .lg-col-span-2 {
                grid-column: span 2 / span 2
            }
            .lg-row-span-1 {
                grid-row: span 1 / span 1
            }
            .lg-row-span-3 {
                grid-row: span 3 / span 3
            }
            .lg-row-span-2 {
                grid-row: span 2 / span 2
            }
            .lg-block {
                display: block
            }
            .lg-hidden {
                display: none
            }
            .lg-w-1-2 {
                width: 50%
            }
            .lg-grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr))
            }
            .lg-grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr))
            }
            .lg-grid-cols-4 {
              grid-template-columns: repeat(4, minmax(0, 1fr))
            }
        }
        @media (min-width: 1536px) {
          .xl-col-span-1 {
              grid-column: span 1 / span 1
          }
          .xl-col-span-4 {
              grid-column: span 4 / span 4
          }
          .xl-col-span-2 {
              grid-column: span 2 / span 2
          }
          .xl-row-span-1 {
              grid-row: span 1 / span 1
          }
          .xl-row-span-4 {
              grid-row: span 4 / span 4
          }
          .xl-row-span-2 {
              grid-row: span 2 / span 2
          }
          .xl-w-1-3 {
              width: 33.333333%
          }
          .xl-w-2-3 {
              width: 66.666667%
          }
          .xl-grid-cols-4 {
              grid-template-columns: repeat(4, minmax(0, 1fr))
          }
          .xl-grid-cols-5 {
            grid-template-columns: repeat(5, minmax(0, 1fr))
          }
      }
      `}}customElements.define("homepage-card",b)}))})(),(()=>{"use strict";var e=i(474),t=i(287),a=i(557),n=i(594),o=i(317),r=i(148),s=i(152),l=i(408),d=i(225);const c=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(c).then((()=>{window.loadCardHelpers()&&window.loadCardHelpers();class i extends r.oi{static get styles(){return[r.iv`
          .edit-element {
            padding: 20px;
          }
          h1, h2, h3, h4, h5, h6 {
            font-size: inherit;
          }
          blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
            margin: 0;
          }
          .add-button {
            font-size: 16px;
            border: 2px solid #4591B8;
            padding: 5px;
            margin-bottom: 50px;
            background: #459CEE;
            border-radius: 20px;
            color: white;
          }
          .card-footer {
            display: flex;
            justify-content: flex-end;
            padding: 8px;
            border-top: 1px solid var(--divider-color);
          }
          .grid {
            display: grid;
            gap: 2rem;
          }
          @media (min-width: 768px){
            .grid-cols-2 {
              grid-template-columns: repeat(2,minmax(0,1fr));
            }
          }
          .pre-select {
            padding: 2.5rem;
          }
          .pre-select-option {
            padding: 2.5rem;
            border: 1px solid #4591B8;
            text-align: center;
            cursor: pointer;
          }
          .pre-selected-option:hover {
            border: 2px solid #4591B8;
          }
          .more-page-settings {
            padding: 0.75rem;
            border: 2px solid grey;
          }
          .seperator {
            background-color: var(--secondary-background-color);
            width: 100%;
            height: 3px;
            margin-top: 15px;
            margin-bottom: 15px;
          }
          /*Start blueprint table*/
          .min-w-full {
            min-width: 100%;
          }
          table {
              text-indent: 0;
              border-color: inherit;
              border-collapse: collapse;
          }
          .bg-gray-50 {
            background-color: var(--secondary-background-color);
          }
          .tracking-wider {
              letter-spacing: .05em;
          }
          .text-sm {
            font-size: .875rem;
            line-height: 1.25rem;
          }
          .py-4 {
              padding-top: 1rem;
              padding-bottom: 1rem;
          }
          .uppercase {
              text-transform: uppercase;
          }
          .font-medium {
              font-weight: 500;
          }
          .text-xs {
              font-size: .75rem;
              line-height: 1rem;
          }
          .text-left {
              text-align: left;
          }
          .px-6 {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
          }
          .py-3 {
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
          }
          `]}static get properties(){return{mode:{},blueprints:{}}}setConfig(t){if(this.hass=(0,e.C)(),this.mode=t.mode?t.mode:"pre-select",this.foldername=t.foldername?t.foldername:"",t.cardConfig){const e=t.cardConfig;delete e.input_entity,delete e.input_name,this.cardConfig=e}else this.cardConfig="";this.name=t.name?t.name:"",this.icon=t.icon?t.icon:"",this.showInNavbar=!!t.showInNavbar&&t.showInNavbar;const i=document.createElement("hui-masonry-view");i.lovelace={editMode:!0},i.willUpdate(new Map)}async connectedCallback(){super.connectedCallback(),await this._loadBlueprints();const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"button"});await t.constructor.getConfigElement()}async _loadBlueprints(){this.blueprints=await this.hass.callWS({type:"dwains_dashboard/get_blueprints"})}magicStuff(e){this.cardConfig=e.detail.config,this.mode="editor-element",this.requestUpdate()}magicStuffSecond(e){}_sendCard(){const t=JSON.stringify(this.cardConfig);this.name?!this.showInNavbar||this.icon?this.hass.connection.sendMessagePromise({type:"dwains_dashboard/edit_more_page",card_data:t,foldername:this.foldername,name:this.name,icon:this.icon,showInNavbar:this.showInNavbar}).then((t=>{console.log(t);const i=(0,e.mt)();i&&(0,n.B)("config-refresh",{},i);let a=window.location.pathname;"dwains-dashboard"==a.substring(1,a.lastIndexOf("/"))&&setTimeout((function(){document.location.reload()}),1e3),(0,d.j)()}),(e=>{console.error("Message failed!",e)})):alert((0,s.Z)(this.hass,"more.icon_required")):alert((0,s.Z)(this.hass,"more.name_required"))}_switchMode(e){const t=e.currentTarget.mode;this.mode=t,this.requestUpdate()}_iconPickerChange(e){this.icon=e.detail.value}_showInMainNavbarValueChanged(e){this.showInNavbar=e.target.checked}_nameChanged(e){this.name=e.target.value}_removeMorePage(e){this.hass.connection.sendMessagePromise({type:"dwains_dashboard/remove_more_page",foldername:this.foldername}).then((e=>{console.log(e),(0,d.j)(),document.location="more_page"}),(e=>{console.error("Message failed!",e)}))}_handleDeleteBlueprintClicked(e){const t=e.currentTarget.blueprint;this.hass.connection.sendMessagePromise({type:"dwains_dashboard/delete_blueprint",blueprint:t}).then((e=>{console.log(e),this._loadBlueprints(),this.requestUpdate()}),(e=>{console.error("Message failed!",e)}))}_handleUseBlueprintClicked(e){const t=e.currentTarget.blueprint;this.mode="editor-element",this.name=this.blueprints.blueprints[t].blueprint.name,this.cardConfig={type:"custom:dwains-blueprint-card",blueprint:t,card:this.blueprints.blueprints[t].card}}_installBlueprintYamlChanged(e){this.installBlueprintYaml=e.target.value}_handleInstallBlueprintClicked(e){this.installBlueprintYaml||alert((0,s.Z)(this.hass,"blueprint.yaml_required")),this.hass.connection.sendMessagePromise({type:"dwains_dashboard/install_blueprint",yamlCode:JSON.stringify(this.installBlueprintYaml)}).then((e=>{console.log(e),e.succesfull?(alert(this.hass.localize("ui.common.successfully_saved")),this._loadBlueprints(),this.requestUpdate()):alert(e.error)}),(e=>{console.error("Message failed!",e)}))}_checkCustomCard(e){const t=customElements.get(e);return r.dy`
          <div>
            ${t?r.dy`
              <ha-icon
                style="color: green;"
                .icon=${"mdi:check-bold"}
              ></ha-icon>`:r.dy`
              <ha-icon
                style="color: red;"
                .icon=${"mdi:close-thick"}
              ></ha-icon>
              `}
            ${e}
            ${t?r.dy`(${(0,s.Z)(this.hass,"blueprint.installed")})`:r.dy`(${(0,s.Z)(this.hass,"blueprint.not_installed")})`}
          </div>
        `}render(){if(null==this.blueprints||0===this.blueprints.length)return r.dy``;if("pre-select"==this.mode)return r.dy`
            <mwc-list>
              <mwc-list-item twoline .mode=${"hui-card-picker"} @click=${this._switchMode}>
                ${(0,s.Z)(this.hass,"editor.lovelace_card")}
                <span slot="secondary">
                  ${(0,s.Z)(this.hass,"editor.create_lovelace_card")}
                </span>
              </mwc-list-item>
              <li divider role="separator"></li>
              <mwc-list-item hasmeta twoline .mode=${"dwains-dashboard-blueprint-select"} @click=${this._switchMode}>
                ${(0,s.Z)(this.hass,"editor.dwains_dashboard_blueprint")}
                <span slot="secondary">
                  ${(0,s.Z)(this.hass,"editor.use_dwains_dashboard_blueprint")}
                </span>
                <ha-icon-next slot="meta"></ha-icon-next
              ></mwc-list-item>
            </mwc-list>
          `;if("dwains-dashboard-blueprint-select"==this.mode){const e=Object.entries(this.blueprints.blueprints).sort((function(e,t){let i=e[1].blueprint.type,a=t[1].blueprint.type;return i==a?0:i>a?1:-1}));return r.dy`
          <div class="edit-element">

            <div style="margin-bottom: 20px;">
              <mwc-button .mode=${"pre-select"} @click=${this._switchMode}>< ${this.hass.localize("ui.common.previous")}</mwc-button>
            </div>

            <strong>${(0,s.Z)(this.hass,"blueprint.installed_blueprints")}:</strong>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,s.Z)(this.hass,"blueprint.title")}</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,s.Z)(this.hass,"global.version")}</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,s.Z)(this.hass,"blueprint.type")}</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${(0,s.Z)(this.hass,"blueprint.used_custom_cards")}</th>
                  <th scope="col" class="relative px-6 py-3">
                  </th>
                </tr>
              </thead>
              <tbody>
                ${0==Object.values(this.blueprints.blueprints).length?r.dy`
                  <tr>
                    <td  class="px-6 py-4" colspan="5">${(0,s.Z)(this.hass,"blueprint.no_blueprints_installed")}</td>
                  </tr>`:r.dy`
                  ${Object.entries(e).map((([e,t])=>r.dy`
                          <tr class="bg-white">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <h3>${t[1].blueprint.name}</h3>
                              ${t[1].blueprint.description}
                            </td>
                            <td class="px-6 py-4">
                              ${t[1].blueprint.version}
                            </td>
                            <td class="px-6 py-4">
                              ${t[1].blueprint.type}
                            </td>
                            <td class="px-6 py-4">
                              ${t[1].blueprint.custom_cards&&0!==t[1].blueprint.custom_cards.length?r.dy`
                                  ${t[1].blueprint.custom_cards.map((e=>this._checkCustomCard(e)))}
                                `:"None"}
                            </td>
                            <td>
                              ${"page"==t[1].blueprint.type?r.dy`
                                <mwc-button .blueprint=${t[0]} @click=${this._handleUseBlueprintClicked} unelevated>
                                  ${(0,s.Z)(this.hass,"blueprint.use")}
                                </mwc-button>
                              `:""}
                              <mwc-button .blueprint=${t[0]} @click=${this._handleDeleteBlueprintClicked} unelevated>
                                <ha-icon
                                  .icon=${"mdi:delete"}
                                ></ha-icon>
                              </mwc-button>
                            </td>
                          </tr>
                        `))}
                  `}
              </tbody>
            </table>
            <div class="seperator"></div>
            <strong>${(0,s.Z)(this.hass,"blueprint.install")}</strong>
            <p>${(0,s.Z)(this.hass,"blueprint.instruction")}</p>
            <a href="https://github.com/dwainscheeren/dwains-dashboard-blueprints" target="_blank">Dwains Dashboard Blueprints Github</a>
            <ha-yaml-editor
              .label=${(0,s.Z)(this.hass,"blueprint.yaml_code")}
              name="description"
              @value-changed=${this._installBlueprintYamlChanged}
            ></ha-yaml-editor>
            <div style="margin-top: 15px; margin-bottom: 20px;">
              <mwc-button @click=${this._handleInstallBlueprintClicked} unelevated>
                ${(0,s.Z)(this.hass,"blueprint.install")}
              </mwc-button>
            </div>
          </div>`}return"hui-card-picker"==this.mode?r.dy`
            <div class="edit-element">
              <h1 style="font-size: 17px; font-weight: bold;"></h1>
              <hui-card-picker
                @config-changed=${this.magicStuff}
                .hass=${this.hass}
                .lovelace=${{views:[]}}
              ></hui-card-picker>
            </div>
          `:"editor-element"==this.mode?r.dy`
            <div class="edit-element">
              <div class="more-page-settings">
                <paper-input 
                  .label=${(0,s.Z)(this.hass,"more.name")}
                  .value=${this.name}
                  @value-changed=${this._nameChanged}
                ></paper-input>
                <ha-icon-picker
                  .label=${(0,s.Z)(this.hass,"more.icon")}
                  .value=${this.icon}
                  @value-changed=${this._iconPickerChange}
                ></ha-icon-picker>
                <mwc-formfield .label=${(0,s.Z)(this.hass,"more.add_navbar")}>
                  <ha-checkbox
                    @change=${this._showInMainNavbarValueChanged}
                    .checked=${this.showInNavbar}
                  ></ha-checkbox>
                </mwc-formfield>
              </div>
              
              <hui-card-element-editor
                @save-config=${this.magicStuffSecond}
                @config-changed=${this.magicStuff}
                .value=${this.cardConfig}
                .hass=${this.hass}
                lovelace=${{views:[]}}
              ></hui-card-element-editor>
              <hui-card-preview
                .hass=${this.hass}
                .config=${this.cardConfig}
              ></hui-card-preview>
              <div class="card-footer">
                ${this.foldername?r.dy`<mwc-button @click=${this._removeMorePage}>${this.hass.localize("ui.common.remove")}</mwc-button>`:""}
                <mwc-button @click=${this._sendCard}>${this.hass.localize("ui.common.submit")}</mwc-button>
              </div>
            </div>
          `:void 0}}customElements.define("dwains-edit-more-page-card",i);class c extends r.oi{static get properties(){return{configuration:{},editMode:{}}}set hass(e){null!=this.data&&0!==this.data.length&&(Object.values(this.data).map((t=>{t.cards.forEach((t=>{t.card.hass=e})),t.customCardsTop.forEach((t=>{t.card.hass=e})),t.customCardsBottom.forEach((t=>{t.card.hass=e}))})),this._hass=e,this.requestUpdate())}setConfig(t){this._hass=(0,e.C)(),this.editMode=!1}async connectedCallback(){super.connectedCallback(),await this._loadData(),await this._hass.connection.subscribeEvents((()=>this._reloadCard()),"dwains_dashboard_more_pages_reload")}async _reloadCard(){await this._loadData(),this.requestUpdate()}async _loadData(){if(this.configuration=await this._hass.callWS({type:"dwains_dashboard/configuration/get"}),null==this.configuration||0===this.configuration.length);else{const e=document.createElement("hui-masonry-view");e.lovelace={editMode:!0},e.willUpdate(new Map)}}_handleMorePageClick(e){const i=e.currentTarget.path;(0,t.c4)(window,"/dwains-dashboard/more_page_"+i),this.requestUpdate()}_handleCreateMorePageClicked(e){e.stopPropagation(),window.setTimeout((()=>{(0,n.B)("hass-more-info",{entityId:""},document.querySelector("home-assistant")),(0,a.G)((0,s.Z)(this._hass,"more.create"),{type:"custom:dwains-edit-more-page-card"},!0,"")}),50)}_handleRemoveMorePageClicked(e){this._hass.connection.sendMessagePromise({type:"dwains_dashboard/remove_more_page",foldername:e.currentTarget.more_page}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleAddToNavbarClick(e){e.currentTarget.more_page,this._hass.connection.sendMessagePromise({type:"dwains_dashboard/remove_more_page",foldername:e.currentTarget.more_page}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}_handleEditModeClicked(t){t.stopPropagation();const i=t.currentTarget.value;if(i){this._sortable=[];const t=this.shadowRoot.querySelectorAll(".sortable");for(var a=0;a<t.length;a++)this._sortable[a]=new l.Z(t[a],{forceFallback:!0,animation:150,dataIdAttr:"data-more_page",handle:".sortable-move",onEnd:function(t){console.log(t),(0,e.C)().connection.sendMessagePromise({type:"dwains_dashboard/sort_more_page",sortData:JSON.stringify(this.toArray())}).then((e=>{console.log(e)}),(e=>{console.error("Message failed!",e)}))}})}else this._sortable.forEach((e=>e.destroy())),this._sortable=void 0;this.editMode=i}_renderPageButton(e,t){return t.name?r.dy`
            <div class="relative" data-more_page="${e}">
              <div class="flex justify-between h-44 p-3 more-page-button" .path=${e} @click=${this._handleMorePageClick}>
                <div class="h-full flex flex-wrap content-between">
                  <div class="w-full ha-icon">
                    ${this.configuration.more_pages[e]&&this.configuration.more_pages[e].icon?r.dy`
                      <ha-icon
                        class="h-14 w-14"
                        style="color: var(--primary-color);"
                        .icon=${this.configuration.more_pages[e].icon}
                      ></ha-icon>`:""}
                  </div>
                  <div class="w-full">
                    <h3 class="font-semibold text-lg capitalize">${t.name.replace(/_/g," ")}</h3>
                  </div>
                </div>
              </div>
            ${this.editMode?r.dy`
              <ha-card>
                <div class="card-actions-multiple">
                  <div class="sortable-move">
                    <ha-icon
                      .icon=${"mdi:cursor-move"}
                    >
                    </ha-icon>
                  </div>
                  <ha-button-menu
                    class="ha-icon-overflow-menu-overflow"
                    corner="BOTTOM_START"
                    absolute
                  >
                    <ha-icon-button
                      .label=${this._hass.localize("ui.common.overflow_menu")}
                      .path=${o.SXi}
                      slot="trigger"
                    ></ha-icon-button>
                      <mwc-list-item
                        graphic="icon"
                        .more_page=${e}
                        @click=${this._handleRemoveMorePageClicked}
                      >
                        <div slot="graphic">
                          <ha-icon .icon=${"mdi:trash-can"}></ha-icon>
                        </div>
                        ${this._hass.localize("ui.common.remove")}
                      </mwc-list-item>
                      ${9==!t.show_in_navbar?r.dy`
                        <mwc-list-item
                          graphic="icon"
                          .more_page="${e}"
                          @click="${this._handleAddToNavbarClick}"
                        >
                          <div slot="graphic">
                            <ha-icon .icon=${"mdi:tag-plus"}></ha-icon>
                          </div>
                          ${(0,s.Z)(this._hass,"more.add_navbar")}
                        </mwc-list-item>`:""}
                  </ha-button-menu>
                </div>
              </ha-card>`:""}
            </div>
          `:r.dy``}render(){if(null==this.configuration||0===this.configuration.length)return r.dy``;{const e=Object.entries(this.configuration.more_pages).sort((function(e,t){let i=e[1].sort_order,a=t[1].sort_order;return i==a?0:i>a?1:-1}));return r.dy`
                <div id="more_pages" class="p-4">
                    <div class="flex justify-between mb-2">
                    <div>
                        <h2 class="font-semibold text-lg capitalize">
                        ${(0,s.Z)(this._hass,"more.title_plural")}
                        </h2>
                        <span class="text-gray-700">
                        ${Object.keys(this.configuration.more_pages).length} ${(0,s.Z)(this._hass,"more.pages")}
                        </span>
                    </div>
                    <div>
                      ${this._hass.user.is_admin?r.dy`
                        <ha-button-menu
                        class="ha-icon-overflow-menu-overflow"
                        corner="BOTTOM_END"
                        absolute
                        >
                          <ha-icon-button
                              .label=${this._hass.localize("ui.common.overflow_menu")}
                              .path=${o.SXi}
                              slot="trigger"
                          ></ha-icon-button>
                            <mwc-list-item
                                graphic="icon"
                                @click="${this._handleCreateMorePageClicked}"
                            >
                                <div slot="graphic">
                                  <ha-svg-icon .path=${o.q_n}></ha-svg-icon>
                                </div>
                                ${(0,s.Z)(this._hass,"more.create")}
                            </mwc-list-item>
                            ${this.editMode?r.dy`
                            <mwc-list-item
                              graphic="icon"
                              .value=${!1}
                              @click=${this._handleEditModeClicked}
                            >
                              <div slot="graphic">
                                <ha-svg-icon .path=${o.Shd}></ha-svg-icon>
                              </div>
                              ${(0,s.Z)(this._hass,"global.disable_edit_mode")}
                            </mwc-list-item>`:r.dy`
                            <mwc-list-item
                              graphic="icon"
                              .value=${!0}
                              @click=${this._handleEditModeClicked}
                            >
                              <div slot="graphic">
                                <ha-svg-icon .path=${o.Shd}></ha-svg-icon>
                              </div>
                              ${(0,s.Z)(this._hass,"global.enable_edit_mode")}
                            </mwc-list-item>
                            `}
                        </ha-button-menu>
                        `:""}
                    </div>
                    </div>

                    <div class="grid grid-cols-2 md-grid-cols-3 xl-grid-cols-4 gap-4 sortable">
                      ${Object.entries(e).map((([e,t])=>this._renderPageButton(t[0],t[1])))}
                    </div>
                </div>
            `}}static get styles(){return r.iv`
            .sortable-move {
              cursor: -webkit-grabbing;
              cursor: grab;
              margin: auto 0;
            }
            .card-actions-multiple {
              display: flex;
              justify-content: space-between;
              padding: 0.25rem 0.5rem;
            }
            .more-page-button .info ha-icon, .ha-icon ha-icon {
              display: inline-block;
              margin: auto;
              --mdc-icon-size: 100% !important;
              --iron-icon-width: 100% !important;
              --iron-icon-height: 100% !important;
            }
            #badges {
              cursor: pointer;
              background: var( --ha-card-background, var(--card-background-color, white) );
              box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
              color: var(--primary-text-color);
            } 
            .more-page-button {
              cursor: pointer;
              background: var( --ha-card-background, var(--card-background-color, white) );
              border-radius: var(--ha-card-border-radius, 4px);
              box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
              color: var(--test-primary-text-color, var(--primary-text-color));
            }
            .info-badge {
              /*background-color: var(--sidebar-icon-color);
              color: var( --ha-card-background, var(--card-background-color, white) );*/
              background-color: var(--secondary-background-color);
            }
            /*styling tailwind dwains version*/
            *, ::after, ::before {
              box-sizing: border-box;
            }
            h1,h2,h3 {
              margin: 0;
            }
            h3 {
              font-size: 1em;
            }
            .absolute {
              position: absolute
            }
            .break-words {
              overflow-wrap: break-word;
            }
            .relative {
                position: relative
            }
            .sticky {
                position: -webkit-sticky;
                position: sticky
            }
            .top-0 {
                top: 0px
            }
            .bottom-0 {
                bottom: 0px
            }
            .z-30 {
                z-index: 30
            }
            .col-span-1 {
                grid-column: span 1 / span 1
            }
            .col-span-2 {
                grid-column: span 2 / span 2
            }
            .row-span-1 {
                grid-row: span 1 / span 1
            }
            .row-span-2 {
                grid-row: span 2 / span 2
            }
            .my-4 {
                margin-top: 1rem;
                margin-bottom: 1rem
            }
            .mx-auto {
              margin-left: auto;
              margin-right: auto
            }
            .mb-2 {
                margin-bottom: 0.5rem
            }
            .mb-4 {
                margin-bottom: 1rem
            }
            .mt-4 {
                margin-top: 1rem
            }
            .mr-0\.5 {
                margin-right: 0.125rem
            }
            .mr-0 {
                margin-right: 0px
            }
            .mb-12 {
                margin-bottom: 3rem
            }
            .mb-5 {
                margin-bottom: 1.25rem
            }
            .mb-16 {
                margin-bottom: 4rem
            }
            .ml-4 {
                margin-left: 1rem
            }
            .block {
                display: block
            }
            .inline-block {
                display: inline-block
            }
            .flex {
                display: flex
            }
            .inline-flex {
                display: inline-flex
            }
            .grid {
                display: grid
            }
            .hidden {
                display: none
            }
            .h-6 {
                height: 1.5rem
            }
            .h-44 {
                height: 11rem
            }
            .h-full {
                height: 100%
            }
            .h-14 {
                height: 3.5rem
            }
            .h-8 {
                height: 2rem
            }
            .w-full {
                width: 100%
            }
            .w-6 {
                width: 1.5rem
            }
            .w-14 {
                width: 3.5rem
            }
            .w-8 {
                width: 2rem
            }
            .w-12 {
              width: 3rem
            }
            .cursor-pointer {
                cursor: pointer
            }
            .grid-flow-row-dense {
                grid-auto-flow: row dense
            }
            .grid-cols-1 {
                grid-template-columns: repeat(1, minmax(0, 1fr))
            }
            .grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr))
            }
            .flex-wrap {
                flex-wrap: wrap
            }
            .content-between {
                align-content: space-between
            }
            .items-center {
                align-items: center
            }
            .justify-between {
                justify-content: space-between
            }
            .gap-4 {
                gap: 1rem
            }
            .space-y-0.5 > :not([hidden]) ~ :not([hidden]) {
                --tw-space-y-reverse: 0;
                margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));
                margin-bottom: calc(0.125rem * var(--tw-space-y-reverse))
            }
            .space-y-0 > :not([hidden]) ~ :not([hidden]) {
                --tw-space-y-reverse: 0;
                margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
                margin-bottom: calc(0px * var(--tw-space-y-reverse))
            }
            .rounded {
                border-radius: 0.25rem
            }
            .rounded-md {
                border-radius: 0.375rem
            }
            .bg-gray-800 {
                --tw-bg-opacity: 1;
                background-color: rgb(31 41 55 / var(--tw-bg-opacity))
            }
            .rounded-lg {
              border-radius: 0.5rem
            }
            .border-2 {
                border-width: 2px
            }
            .border-dashed {
                border-style: dashed
            }
            .border-gray-300 {
                --tw-border-opacity: 1;
                border-color: rgb(209 213 219 / var(--tw-border-opacity))
            }
            .bg-gray-800 {
                --tw-bg-opacity: 1;
                background-color: rgb(31 41 55 / var(--tw-bg-opacity))
            }
            .bg-opacity-50 {
                --tw-bg-opacity: 0.5
            }
            .p-2 {
              padding: 0.5rem;
            }
            .p-4 {
                padding: 1rem
            }
            .p-1 {
                padding: 0.25rem
            }
            .p-3 {
                padding: 0.75rem
            }
            .px-1 {
                padding-left: 0.25rem;
                padding-right: 0.25rem
            }
            .p-12 {
              padding: 3rem
            }
            .py-0\.5 {
                padding-top: 0.125rem;
                padding-bottom: 0.125rem
            }
            .py-0 {
                padding-top: 0px;
                padding-bottom: 0px
            }
            .py-1 {
              padding-top: 0.25rem;
              padding-bottom: 0.25rem
            }
            .px-2 {
              padding-left: 0.5rem;
              padding-right: 0.5rem
            }
            .text-center {
              text-align: center
            }
            .text-right {
                text-align: right
            }
            .text-xl {
                font-size: 1.5rem;
                line-height: 2rem
            }
            .text-lg {
                font-size: 1.125rem;
                line-height: 1.75rem
            }
            .text-sm {
                font-size: 0.875rem;
                line-height: 1.25rem
            }
            .text-xs {
                font-size: 0.75rem;
                line-height: 1rem
            }
            .font-semibold {
                font-weight: 600
            }
            .font-medium {
                font-weight: 500
            }
            .capitalize {
                text-transform: capitalize
            }
            .text-gray {
                color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
            }
            .text-white {
                --tw-text-opacity: 1;
                color: rgb(255 255 255 / var(--tw-text-opacity))
            }
            @media (min-width: 768px) {
                .md-grid-cols-3 {
                    grid-template-columns: repeat(3, minmax(0, 1fr))
                }
            }
            @media (min-width: 1024px) {
                .lg-col-span-1 {
                    grid-column: span 1 / span 1
                }
                .lg-col-span-3 {
                    grid-column: span 3 / span 3
                }
                .lg-col-span-2 {
                    grid-column: span 2 / span 2
                }
                .lg-row-span-1 {
                    grid-row: span 1 / span 1
                }
                .lg-row-span-3 {
                    grid-row: span 3 / span 3
                }
                .lg-row-span-2 {
                    grid-row: span 2 / span 2
                }
                .lg-block {
                    display: block
                }
                .lg-hidden {
                    display: none
                }
                .lg-w-1-2 {
                    width: 50%
                }
                .lg-grid-cols-2 {
                    grid-template-columns: repeat(2, minmax(0, 1fr))
                }
                .lg-grid-cols-3 {
                    grid-template-columns: repeat(3, minmax(0, 1fr))
                }
            }
            @media (min-width: 1536px) {
              .xl-col-span-1 {
                  grid-column: span 1 / span 1
              }
              .xl-col-span-4 {
                  grid-column: span 4 / span 4
              }
              .xl-col-span-2 {
                  grid-column: span 2 / span 2
              }
              .xl-row-span-1 {
                  grid-row: span 1 / span 1
              }
              .xl-row-span-4 {
                  grid-row: span 4 / span 4
              }
              .xl-row-span-2 {
                  grid-row: span 2 / span 2
              }
              .xl-w-1-3 {
                  width: 33.333333%
              }
              .xl-w-2-3 {
                  width: 66.666667%
              }
              .xl-grid-cols-4 {
                  grid-template-columns: repeat(4, minmax(0, 1fr))
              }
          }
          `}}customElements.define("more-pages-card",c)}))})(),(()=>{"use strict";var e=i(474),t=i(557),a=i(594),n=i(317),o=i(148);const r=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(r).then((()=>{const i=window.loadCardHelpers()?window.loadCardHelpers():void 0;class r extends o.oi{static get properties(){return{card:{},_hass:{},configuration:{}}}set hass(e){null!=this.card&&0!==this.card.length&&(this.card.hass=e)}async setConfig(t){this._hass=(0,e.C)(),this.name=t.name,this.foldername=t.foldername,this.icon=t.icon,this.showInNavbar=t.showInNavbar,this.cardConfig=t.card,Array.isArray(t.card)?this.card=await this.createCardElement2({type:"vertical-stack",cards:t.card}):this.card=await this.createCardElement2(t.card)}async connectedCallback(){super.connectedCallback(),await this._loadData(),await this._hass.connection.subscribeEvents((()=>this._reloadCard()),"dwains_dashboard_more_pages_reload")}async _reloadCard(){await this._loadData(),this.requestUpdate()}async _loadData(){if(this.configuration=await this._hass.callWS({type:"dwains_dashboard/configuration/get"}),null==this.configuration||0===this.configuration.length);else{const e=document.createElement("hui-masonry-view");e.lovelace={editMode:!0},e.willUpdate(new Map)}}async createCardElement2(t){const a=await i,n=await a.createCardElement(t);return n.hass=(0,e.C)(),n}_handleEditMorePageClicked(e){const i=this.foldername,n=this.configuration.more_pages[i]&&this.configuration.more_pages[i].name?this.configuration.more_pages[i].name:"",o=this.configuration.more_pages[i]&&this.configuration.more_pages[i].icon?this.configuration.more_pages[i].icon:"",r=!(!this.configuration.more_pages[i]||!this.configuration.more_pages[i].show_in_navbar)&&this.configuration.more_pages[i].show_in_navbar;window.setTimeout((()=>{(0,a.B)("hass-more-info",{entityId:""},document.querySelector("home-assistant")),(0,t.G)(this._hass.localize("ui.components.entity.entity-picker.edit"),{type:"custom:dwains-edit-more-page-card",more_page:i,name:n,icon:o,showInNavbar:r,foldername:i,mode:"editor-element",cardConfig:this.cardConfig},!0,"")}),50)}render(){return null==this.configuration||0===this.configuration.length?o.dy``:o.dy`
              <div id="more-page">
                <div class="flex justify-between mb-2">
                  <div>
                    <h2 class="font-semibold text-lg capitalize">
                      ${this.name}
                    </h2>
                  </div>
                  <div>
                    ${this._hass.user.is_admin?o.dy`
                    <ha-button-menu
                      class="ha-icon-overflow-menu-overflow"
                      corner="BOTTOM_END"
                      absolute
                    >
                      <ha-icon-button
                        .label=${this._hass.localize("ui.common.overflow_menu")}
                        .path=${n.SXi}
                        slot="trigger"
                      ></ha-icon-button>
                          <mwc-list-item
                            graphic="icon"
                            @click="${this._handleEditMorePageClicked}"
                          >
                            <div slot="graphic">
                              <ha-icon .icon=${"mdi:cog"}></ha-icon>
                            </div>
                            ${this._hass.localize("ui.components.entity.entity-picker.edit")}
                          </mwc-list-item>
                    </ha-button-menu>
                    `:""}
                  </div>
                </div>

                ${this.card}
              </div>
            `}static get styles(){return o.iv`
            #more-page {
              padding: 1rem;
            }
            .justify-between {
              justify-content: space-between;
            }
            .flex {
                display: flex;
            }
            .mb-2 {
                margin-bottom: 0.5rem;
            }
            .font-semibold {
              font-weight: 600;
            }
            .text-lg {
                font-size: 1.125rem;
                line-height: 1.75rem;
            }
            .capitalize {
              text-transform: capitalize;
            }
          `}}customElements.define("more-page-card",r)}))})(),(()=>{const e=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(e).then((()=>{const e=customElements.get("hui-masonry-view")?Object.getPrototypeOf(customElements.get("hui-masonry-view")):Object.getPrototypeOf(customElements.get("hc-lovelace")),t=e.prototype.html,i=e.prototype.css;customElements.get("dwains-notification-card")||customElements.define("dwains-notification-card",class extends e{static get styles(){return i`
      ha-card {
        box-shadow: none;
        background: transparent;
        color: var(--primary-text-color);
      }
      .notification-button ha-icon {
        display: inline-block;
        margin: auto;
        --mdc-icon-size: 100% !important;
        --iron-icon-width: 100% !important;
        --iron-icon-height: 100% !important;
        cursor: pointer;
        opacity: 0.8;
      }
      .notification-button ha-icon:hover {
        opacity: 1.0;
      }
      .w-6 {
        width: 1.5rem;
      }
      .h-6 {
        height: 1.5rem;
      }
      .notification-button {
        background: var( --ha-card-background, var(--card-background-color, white) );
        border-radius: var(--ha-card-border-radius, 4px);
        box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
        color: var(--primary-text-color);
        padding: 0.5rem;
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
        display: flex;
        justify-content: space-between;
      }
      `}static get properties(){return{hass:{},config:{}}}setConfig(e){this.config=e}async connectedCallback(){super.connectedCallback(),this._unsub||(this._subcribeNotifications(),this._notificationsUpdated())}async _subcribeNotifications(){this._unsub||(this._unsub=await this.hass.connection.subscribeEvents((()=>this._notificationsUpdated()),"dwains_dashboard_notifications_updated"))}disconnectedCallback(){super.disconnectedCallback(),this._unsub&&(this._unsub(),this._unsub=void 0)}async _notificationsUpdated(){this.notifications=await this.hass.callWS({type:"dwains_dashboard_notification/get"}),null==this.notifications||this.notifications.length,this.requestUpdate()}_handleDismiss(e){var t=e.target.notificationId;this.hass.callService("dwains_dashboard","notification_dismiss",{notification_id:t}),this._notificationsUpdated()}_evalTemplate(e){return new Function("states","user","hass","variables",`'use strict'; ${e}`).call(this,this.hass.states,this.hass.user,this.hass,this.config.variables)}_renderNotification(e){return t`
        <div class="notification-button flex justify-between">
          <div>
            ${e.message}
          </div>
          <div>
            <ha-icon 
              class="h-6 w-6"
              icon=${"mdi:close"} 
              .notificationId=${e.notification_id} 
              @click=${this._handleDismiss}
            >
            </ha-icon>
          </div>
        </div>
      `}render(){if(null!=this.notifications&&0!==this.notifications.length)return t`
        <ha-card>
          <div id="notifications">
            ${this.notifications.map((e=>this._renderNotification(e)))}
          </div>
        </ha-card>
        `}})}))})(),(()=>{"use strict";var e=i(474),t=i(601),a=i(557),n=i(594),o=i(287),r=i(148),s=i(49),l=i(152),d=i(225);const c=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(c).then((()=>{class i extends r.oi{static get styles(){return r.iv`
      .p-20px {
        padding: 20px;
      }
      .flex {
        display: flex;
      }
      .grid-flow-row-dense {
        grid-auto-flow: row dense
      
      }
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr))
      }
      .grid {
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 1024px) {
        .lg-grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr))
        }
      }
      @media (min-width: 1536px) {
        .xl-col-span-4 {
            grid-column: span 4 / span 4
        }
      }
      .font-semibold {
        font-weight: 600;
      }
      h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
      }
      blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .space-x-2>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
      }
      .capitalize {
          text-transform: capitalize;
      }
      .icon ha-state-icon {
        display: inline-block;
        margin: auto;
        --mdc-icon-size: 100% !important;
        --iron-icon-width: 100% !important;
        --iron-icon-height: 100% !important;

        width: 1.5rem;
        height: 1.5rem;
      }
      .icon {
        padding: 0.75rem;
        background-color: var(--secondary-background-color);
        border-radius: 999px;
      }
      .information {
        line-height: 1.10;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .information .state {
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
      }
      .handle-button {
        background-color: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 4px);
        color: var(--primary-text-color);
        display: block;
        text-align: center;
        padding: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        margin-top: 1rem;
      }
      .single-button {

      }
      .two-buttons {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2,minmax(0,1fr));
      }
      `}static get properties(){return{hass:{},configuration:{}}}setConfig(t){if(!t.domain||!t.entities)throw new Error("Specify an domain from within HA domains and specify entities list");this.hass=(0,e.C)(),this._config=t,this.domain=t.domain,this.deviceClass=t.deviceClass,this.entities=t.entities}async connectedCallback(){super.connectedCallback(),await this._loadData()}async _loadData(){this.configuration=await this.hass.callWS({type:"dwains_dashboard/configuration/get"})}_currentOn(){const e=[],t=this.deviceClass;for(const t of this.entities){const i=this.hass.states[t.entity_id];i&&e.push({area:t.area,stateObj:i})}if(e){if("climate"==this.domain){const t=[];for(const i of e)i.stateObj.attributes.hvac_action&&"idle"!=i.stateObj.attributes.hvac_action?s.V_.includes(i.stateObj.attributes.hvac_action)||s.tj.includes(i.stateObj.attributes.hvac_action)||t.push({area:i.area,stateObj:i.stateObj}):i.stateObj.attributes.hvac_action||s.V_.includes(i.stateObj.state)||s.tj.includes(i.stateObj.state)||t.push({area:i.area,stateObj:i.stateObj});return t}return(t?e.filter((e=>e.stateObj.attributes.device_class===t)):e).filter((e=>!s.V_.includes(e.stateObj.state)&&!s.tj.includes(e.stateObj.state)))}}_navigateToDevices(e){const t=e.currentTarget.domain;let i;(0,d.j)();let a=window.location.pathname,n=a.substring(0,a.lastIndexOf("/"))+"/devices#"+t;window.history.pushState(null,"",n),i=new Event("location-changed",{composed:!0}),i.detail={replace:!1},window.dispatchEvent(i)}_handleMoreInfo(e){const i=e.currentTarget.entity;(0,t.W)(i)}_toggleEntity(e){const i=e.currentTarget.entity,a=s.tj.includes(this.hass.states[i].state),n=(0,o.MS)(i);if("binary_sensor"!=n&&"sensor"!=n){const e="group"===n?"homeassistant":n;let t;switch(n){case"lock":t=a?"unlock":"lock";break;case"cover":t=a?"open_cover":"close_cover";break;default:t=a?"turn_on":"turn_off"}this.hass.callService(e,t,{entity_id:i})}else(0,t.W)(i)}_handleTurnAllOffClicked(e){const t=this._currentOn();0==t.length&&(0,d.j)(),t.map((e=>{const t=e.stateObj.entity_id,i=(0,o.MS)(t),a="group"===i?"homeassistant":i;let n;switch(i){case"lock":n="lock";break;case"cover":n="close_cover";break;default:n="turn_off"}this.hass.callService(a,n,{entity_id:t})}))}_renderEntityBadgeCard(e){const t=this.configuration.entities&&this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].friendly_name?this.configuration.entities[e.entity_id].friendly_name:void 0===e.attributes.friendly_name?e.entity_id.replace(/_/g," "):e.attributes.friendly_name;return r.dy`
      <entity-badge>
        <div class="flex space-x-2 p-2">
          <div>
            <div class="icon cursor-pointer">
              <ha-state-icon
                tabindex="-1"
                data-domain=${(0,o.N5)(e)}
                data-state=${e.state}
                .state=${e}
                .entity=${e.entity_id}
                @click=${this._toggleEntity}
              ></ha-state-icon>
            </div>
          </div>
          <div class="cursor-pointer information" .entity=${e.entity_id} @click=${this._handleMoreInfo}>
            <h1 class="font-semibold">${t}</h1>
            <span class="state">
              ${(0,o.D1)(this.hass.localize,e,this.hass.locale)}
            </span>
          </div>
        </div>
      </entity-badge>
      `}render(){if(!this.hass||!this._config||!this.configuration||0===this.configuration.length)return r.dy``;const e=this._currentOn();0==e.length&&(0,d.j)();let t=!1;"light"!=this.domain&&"switch"!=this.domain||(t=!0);let i=e.reduce(((e,t)=>(e[t.area.area_id]=[...e[t.area.area_id]||[],t],e)),{});return r.dy`
      <div class="p-20px">
        ${Object.keys(i).map((e=>r.dy`
            <div class="mb-5">
              <h3 class="font-semibold capitalize text-gray">${e}</div>
              <div class="grid grid-flow-row-dense grid-cols-2 lg-grid-cols-3 xl-grid-cols-4 gap-4">
                ${Object.entries(i[e]).map((([e,t])=>r.dy`${this._renderEntityBadgeCard(t.stateObj)}`))}
              </div>
            </div>
          `))}

        <div class="${t?"two-buttons":"single-button"}">
          ${t?r.dy`
          <div class="handle-button" @click=${this._handleTurnAllOffClicked}>
            ${(0,l.Z)(this.hass,"device.turn_all_off")}
          </div>
          `:""}
          <div class="handle-button" @click=${this._navigateToDevices} .domain=${this.domain}>
            ${(0,l.Z)(this.hass,"device.see_all")} 
            <ha-icon
              .icon=${"mdi:chevron-right"}
            ></ha-icon>
          </div>
        </div>
      </div>
      `}}customElements.define("dwains-house-information-more-info-card",i);class c extends r.oi{static get styles(){return r.iv`
      ha-card {
        overflow: hidden;
      }
      .flex {
        display: flex;
      }
      .justify-center {
        justify-content: center;
      }
      .items-center {
        align-items: center;
      }
      .font-semibold {
        font-weight: 600;
      }
      h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
      }
      blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .w-8 {
        width: 1.5rem;
      }
      .h-8 {
        height: 1.5rem;
      }
      .space-x-2>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
      }
      .text-gray-500 {
        --tw-text-opacity: 1;
        color: rgba(107,114,128,var(--tw-text-opacity));
      }
      .capitalize {
          text-transform: capitalize;
      }
      .ha-icon ha-icon {
        display: inline-block;
        margin: auto;
        --mdc-icon-size: 100% !important;
        --iron-icon-width: 100% !important;
        --iron-icon-height: 100% !important;
      }
      .text-center {
        text-align: center;
      }
      .rounded-full {
        border-radius: 9999px;
      }
      .not_home {
        filter: grayscale(100%);
      }
      .domain-badge-card h3 {
        margin-top: 0.4rem;
      }
      .m-auto {
        margin: 0 auto;
      }
      .round-badge {
        background-color: var(--dwains-house-information-badge-background, var(--sidebar-icon-color));
      }
      .badge-icon {
        color: var(--dwains-house-information-badge-color, var(--ha-card-background, var(--card-background-color, white) ) );
      }

      paper-tabs {
        height: 110px;
        margin: 0 0.25rem !important;
      }
      paper-tabs paper-tab {
        padding: 0 0.25rem !important;
      }
      .loading-component {
        height: 110px;
      }
      `}static get properties(){return{persons:{},domains:{},hass:{}}}setConfig(t){this.hass=(0,e.C)()}async connectedCallback(){super.connectedCallback(),await this._loadData()}async _reloadCard(){await this._loadData(),this.requestUpdate()}async _loadData(){if(this.areas=await this.hass.callWS({type:"config/area_registry/list"}),this.devices=await this.hass.callWS({type:"config/device_registry/list"}),this.entities=await this.hass.callWS({type:"config/entity_registry/list"}),this.configuration=await this.hass.callWS({type:"dwains_dashboard/configuration/get"}),null==this.areas||0===this.areas.length||null==this.devices||0===this.devices.length||null==this.entities||0===this.entities.length||null==this.configuration||0===this.configuration.length);else{const e=[],t=[];for(const e of this.entities)"person"==(0,o.MS)(e.entity_id)&&(this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].disabled||this.configuration.entities[e.entity_id]&&this.configuration.entities[e.entity_id].excluded||t.push(e.entity_id));for(const t of this.areas)if(!this.configuration.areas[t.area_id]||!this.configuration.areas[t.area_id].disabled){const i=new Set;new Set;for(const e of this.devices)e.area_id===t.area_id&&i.add(e.id);for(const a of this.entities)if(a.area_id?a.area_id===t.area_id:i.has(a.device_id)){const i=!!this.configuration.entities[a.entity_id]&&!!this.configuration.entities[a.entity_id].disabled,n=!!this.configuration.entities[a.entity_id]&&!!this.configuration.entities[a.entity_id].excluded;if(!i&&!n){const i=(0,o.MS)(a.entity_id);if(!(s.hI.includes(i)||s.ae.includes(i)||s.NR.includes(i)||s.ST.includes(i)))continue;i in e||(e[i]={domain:i,entities:[]}),e[i].entities.push({entity_id:a.entity_id,area:t})}}}this.domains=e,this.persons=t}}_handleMoreInfo(e){if(e.currentTarget.entity)(0,t.W)(e.currentTarget.entity);else{const t=e.currentTarget.domain,i=e.currentTarget.deviceClass;window.setTimeout((()=>{(0,n.B)("hass-more-info",{entityId:""},document.querySelector("home-assistant")),(0,a.G)((0,l.Z)(this.hass,"device."+t),{type:"custom:dwains-house-information-more-info-card",domain:t,entities:this.domains[t].entities,deviceClass:i},!0,"")}),50)}}_navigateToDevices(e){const t=e.currentTarget.domain;let i,a=window.location.pathname,n=a.substring(0,a.lastIndexOf("/"))+"/devices#"+t;window.history.pushState(null,"",n),i=new Event("location-changed",{composed:!0}),i.detail={replace:!1},window.dispatchEvent(i)}_isOn(e,t,i){if(e)return(i?e.filter((e=>e.attributes.device_class===i)):e).filter((e=>!s.V_.includes(e.state)&&!s.tj.includes(e.state))).length}_isOnClimate(e,t){if(!e)return;const i=[];for(const t of e)t.attributes.hvac_action&&"idle"!=t.attributes.hvac_action?s.V_.includes(t.attributes.hvac_action)||s.tj.includes(t.attributes.hvac_action)||i.push(t.entity_id):t.attributes.hvac_action||s.V_.includes(t.state)||s.tj.includes(t.state)||i.push(t.entity_id);return i.length}_renderDomain(e){const t=[];for(const i of e.entities){const e=this.hass.states[i.entity_id];e&&t.push(e)}if(s.hI.includes(e.domain)){const i=this._isOn(t,e);if(i)return this._renderDomainBadgeCard(e.domain,(0,l.Z)(this.hass,"device."+e.domain),s.VL[e.domain][i?"on":"off"],i,"")}else{if(s.ae.includes(e.domain))return s.Xw[e.domain].map((i=>{const a=this._isOn(t,e.domain,i);if(a)return this._renderDomainBadgeCard(e.domain,(0,l.Z)(this.hass,"device."+i),s.VL[e.domain][i],a,i)}));if(s.NR.includes(e.domain)){const i=this._isOnClimate(t,e.domain);if(i)return this._renderDomainBadgeCard(e.domain,(0,l.Z)(this.hass,"device."+e.domain),s.VL[e.domain][i?"on":"off"],i,"")}else if(s.ST.includes(e.domain)){const i=this._isOn(t,e);if(i)return this._renderDomainBadgeCard(e.domain,(0,l.Z)(this.hass,"device."+e.domain),s.VL[e.domain][i?"on":"off"],i,"")}}}_renderDomainBadgeCard(e,t,i,a,n){let o;return o="window"==n||"door"==n||"lock"==e?(0,l.Z)(this.hass,"device.open"):(0,l.Z)(this.hass,"device.on"),r.dy`
      <paper-tab>
        <div class="text-center cursor-pointer domain-badge-card" .domain=${e} .deviceClass=${n} @click=${this._handleMoreInfo}>
          <div class="rounded-full flex items-center justify-center m-auto round-badge" style="width: 50px; height: 50px;">
            <div class="">
              <ha-icon
                class="w-8 h-8 badge-icon"
                .icon=${this.configuration.devices[e]&&this.configuration.devices[e].icon?this.configuration.devices[e].icon:i}
              ></ha-icon>
            </div>
          </div>
          <h3 class="capitalize">${t}</h3>
          <span class="text-gray-500">
          ${a} ${o}
          </span>
        </div>
      </paper-tab>
      `}_renderPersonCard(e){const t=this.hass.states[e];if(t&&t.attributes){let i=t.attributes.entity_picture_local||t.attributes.entity_picture;i&&this.hass&&(i=this.hass.hassUrl(i));const a=void 0===t.attributes.friendly_name?t.entity_id.replace(/_/g," "):t.attributes.friendly_name;return r.dy`
        <paper-tab>
          <div class="text-center cursor-pointer" .entity=${e} @click=${this._handleMoreInfo}>
            ${i?r.dy`
              <img src="${i}" width="50" class="rounded-full m-auto ${t.state}">
            `:r.dy`
            <div class="rounded-full flex items-center justify-center m-auto round-badge" style="width: 50px; height: 50px; margin-bottom: 6px;">
              <div class="">
                <ha-icon
                  class="w-8 h-8 badge-icon"
                  .icon=${"mdi:account"}
                ></ha-icon>
              </div>
            </div>
            `}
            <h3 class="capitalize">${a.split(" ")[0]}</h3>
            <span class="text-gray-500">
            ${(0,o.D1)(this.hass.localize,t,this.hass.locale)}
            </span>
          </div>
        </paper-tab>`}}render(){return this.hass?null==this.domains||0===Object.keys(this.domains).length?r.dy`<ha-card><div class="loading-component"></div></ha-card>`:r.dy`
        <ha-card>
          <paper-tabs selected="0" scrollable hide-scroll-buttons>
            ${this.persons.map((e=>this._renderPersonCard(e)))}
            ${Object.values(this.domains).map((e=>this._renderDomain(e)))}
          </paper-tabs>
        </ha-card>
        `:r.dy`<ha-card><div class="loading-component"></div></ha-card>`}}customElements.define("dwains-house-information-card",c)}))})(),(()=>{"use strict";var e=i(474),t=i(148);const a=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(a).then((()=>{const i=window.loadCardHelpers()?window.loadCardHelpers():void 0;class a extends t.oi{static get properties(){return{card:{},_hass:{}}}static getConfigElement(){return document.createElement("dwains-blueprint-card-editor")}set hass(e){null!=this.card&&0!==this.card.length&&(this.card.hass=e)}async setConfig(t){this._hass=(0,e.C)();const i=t.data,a=t.input_entity?t.input_entity:"Error";let n;t.input_entity&&(n=t.input_name?t.input_name:(0,e.C)().states[t.input_entity].attributes&&void 0===(0,e.C)().states[t.input_entity].attributes.friendly_name?t.input_entity.replace(/_/g," "):(0,e.C)().states[t.input_entity].attributes.friendly_name),this.cardConfig=t.card;const o=JSON.stringify(t.card).replace(/\$([0-9]|[aA-zZ])*\$/g,(function(e,o){const r=e.slice(1,-1);return"replace_with_input_entity"==r?a:"replace_with_input_name"==r?n:t.data?i[r]:void 0})).replaceAll('"false"',"false").replaceAll('"true"',"true");this.card=await this.createCardElement2(JSON.parse(o))}async createCardElement2(t){const a=await i,n=await a.createCardElement(t);return n.hass=(0,e.C)(),n}render(){return t.dy`
              ${this.card}
            `}static get styles(){return t.iv`
          `}}customElements.define("dwains-blueprint-card",a);class n extends t.oi{static get styles(){return[t.iv`
            mwc-formfield, ha-textfield,.formfield {
              width: 100%;
            }
            .formfield {
              margin-bottom: 10px;
            }
            `]}static get properties(){return{inputs:{},blueprint:{}}}async connectedCallback(){super.connectedCallback(),await this._loadBlueprints()}async _loadBlueprints(){if(this.blueprints=await this.hass.callWS({type:"dwains_dashboard/get_blueprints"}),null!=this.blueprints||0!=this.blueprints.length){const e=this.blueprints.blueprints[this._config.blueprint];if(e){if(this.blueprint=e,e.blueprint.input&&(this.inputs=e.blueprint.input,!this._config.data||0===this._config.data.length)){const e={};Object.entries(this.inputs).map((([t,i])=>e[t]=t)),this._config.data=e}this._config.card=e.card;const t=new Event("config-changed",{bubbles:!0,composed:!0});t.detail={config:this._config},this.dispatchEvent(t)}}}setConfig(t){this._config=t,this.hass=(0,e.C)()}_inputChanged(e){const t=e.target.key,i=e.target.value,a=this._config;a.data[t]=i;const n=new Event("config-changed",{bubbles:!0,composed:!0});n.detail={config:a},this.dispatchEvent(n)}_checkboxChanged(e){const t=e.target.key,i=e.target.checked,a=this._config;a.data[t]=i;const n=new Event("config-changed",{bubbles:!0,composed:!0});n.detail={config:a},this.dispatchEvent(n)}_renderInput(e,i){let a,n="";return this._config.data&&this._config.data[e]&&this._config.data[e]!=e&&(n=this._config.data[e]),i.type&&"entity-picker"==i.type?a=t.dy`
            <ha-entity-picker
                .label=${i.name}
                .value=${n}
                .key=${e}
                .hass=${this.hass}
                @value-changed=${this._inputChanged}
            ></ha-entity-picker>`:i.type&&"icon-picker"==i.type?a=t.dy`
            <ha-icon-picker
              .label=${i.name}
              .value=${n}
              .key=${e}
              .name=${i.name}
              @value-changed=${this._inputChanged}
            ></ha-icon-picker>
            `:i.type&&"checkbox"==i.type?(n=!(n||!i.default_value)&&i.default_value,a=t.dy`
            <ha-formfield
                  style="display: block;"
                  .label=${i.name}
                >
                <ha-checkbox
                    @change=${this._checkboxChanged}
                    .checked=${n}
                    .key=${e}
                    .name=${i.name}
                  ></ha-checkbox>
            </ha-formfield>
            `):a=t.dy`
            <ha-textfield 
                .label=${i.name}
                .value=${n}
                .key=${e}
                @input=${this._inputChanged}
            ></ha-textfield>
            `,t.dy`
          <div class="formfield">
            <strong>${i.description}</strong>
            ${a}
          </div>
          `}render(){return null==this.blueprints||0===this.blueprints.length?t.dy``:this.blueprint?this.inputs&&0!==this.inputs.length?t.dy`
            ${Object.entries(this.inputs).map((([e,i])=>t.dy`${this._renderInput(e,i)}`))}
          `:t.dy``:t.dy`Blueprint not found!`}}customElements.define("dwains-blueprint-card-editor",n)}))})(),(()=>{"use strict";i(69)})(),(()=>{"use strict";var e=i(474),t=i(601),a=i(287),n=i(317),o=(i(151),i(499)),r=i(148);const s=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(s).then((()=>{const i={auto:n.an9,heat_cool:n.CbH,heat:n.xRl,cool:n.vFQ,off:n.ZKv,fan_only:n.qXi,dry:n.uUi};class s extends r.oi{static get styles(){return r.iv`
      .flex {
        display: flex;
      }
      .font-semibold {
        font-weight: 600;
      }
      h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
      }
      blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .space-x-2>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
      }
      .capitalize {
          text-transform: capitalize;
      }
      #modes {
        text-align: center;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.5rem;
        padding: 5px 0.5rem 5px 0.5rem;
      }
      #modes ha-icon-button {
        background-color: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 4px);
        --mdc-icon-size: 1.5rem;
        --mdc-icon-button-size: 41px;
      }

      .icon {
        padding: 0.75rem;
        background-color: var(--secondary-background-color);
        border-radius: 999px;
      }
      .icon ha-state-icon {
        display: inline-block;
        margin: auto;
        --mdc-icon-size: 100% !important;
        --iron-icon-width: 100% !important;
        --iron-icon-height: 100% !important;

        width: 1.5rem;
        height: 1.5rem;
      }
      .information {
        line-height: 1.10;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .information .state {
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
      }
      `}static get properties(){return{hass:{}}}async setConfig(t){if(!t.entity)throw new Error("Specify an entity");this.hass=(0,e.C)(),this._config=t,this.friendly_name=!!t.friendly_name&&t.friendly_name}_handleMoreInfo(e){(0,t.W)(this._config.entity)}_handleAction(e){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e.currentTarget.mode})}_renderIcon(e,t){return i[e]?r.dy`
          <ha-icon-button
            class=${(0,o.$)({"selected-icon":t===e})}
            .mode=${e}
            @click=${this._handleAction}
            tabindex="0"
            .path=${i[e]}
            .label=${this.hass.localize(`component.climate.state._.${e}`)}
          >
          </ha-icon-button>
      `:r.dy``}render(){if(!this.hass||!this._config)return r.dy``;const e=this.hass.states[this._config.entity];if(!e)return r.dy`
          <hui-warning>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]")}
          </hui-warning>
        `;const t=e.state in i?e.state:"unknown-mode",n=this.friendly_name?this.friendly_name:void 0===e.attributes.friendly_name?e.entity_id.replace(/_/g," "):e.attributes.friendly_name;return r.dy`
      <ha-card>
        <div class="flex space-x-2 p-2">
          <div>
            <div class="icon cursor-pointer">
              <ha-state-icon
                tabindex="-1"
                data-domain=${(0,a.N5)(e)}
                data-state=${e.state}
                .icon=${this._config.icon}
                .state=${e}
              ></ha-state-icon>
            </div>
          </div>
          <div class="cursor-pointer information" @click=${this._handleMoreInfo}>
            <h1 class="font-semibold">${n}</h1>
            <span class="state">
              ${(0,a.D1)(this.hass.localize,e,this.hass.locale)}
              ${null===e.attributes.current_temperature||isNaN(e.attributes.current_temperature)?"":r.dy`${e.attributes.current_temperature}
                      ${this.hass.config.unit_system.temperature}
                `}
            </span>
          </div>
        </div>
        <div id="modes">
          ${(e.attributes.hvac_modes||[]).concat().map((e=>this._renderIcon(e,t)))}
        </div>
      </ha-card>
      `}}customElements.define("dwains-thermostat-card",s)}))})(),(()=>{"use strict";var e=i(474),t=i(601),a=i(151),n=i(499),o=i(148),r=i(49);const s=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(s).then((()=>{window.loadCardHelpers()&&window.loadCardHelpers();class i extends o.oi{static get styles(){return o.iv`
        .flex {
          display: flex;
        }
        .font-semibold {
          font-weight: 600;
        }
        h1, h2, h3, h4, h5, h6 {
          font-size: inherit;
        }
        blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
          margin: 0;
        }
        .p-2 {
          padding: 0.5rem;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .space-x-2>:not([hidden])~:not([hidden]) {
          --tw-space-x-reverse: 0;
          margin-right: calc(0.5rem * var(--tw-space-x-reverse));
          margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
        }
        .capitalize {
            text-transform: capitalize;
        }
        .ha-icon ha-icon {
          display: inline-block;
          margin: auto;
          --mdc-icon-size: 100% !important;
          --iron-icon-width: 100% !important;
          --iron-icon-height: 100% !important;
        }
        .light-button {
          color: var(--paper-item-icon-color, #44739e);
          box-sizing: border-box;
          padding: 0.75rem;
          background-color: var(--secondary-background-color);
          border-radius: 999px;
        }
        .light-button ha-state-icon {
          display: inline-block;
          margin: auto;
          --mdc-icon-size: 100% !important;
          --iron-icon-width: 100% !important;
          --iron-icon-height: 100% !important;
          width: 1.5rem;
          height: 1.5rem;
        }
  
        .light-button.state-on {
          color: var(--paper-item-icon-active-color, #fdd835);
        }
  
        .light-button.state-unavailable {
          color: var(--state-icon-unavailable-color);
        }
        .information {
          line-height: 1.10;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .information .state {
          font-size: 0.9rem;
          line-height: 1.25rem;
          color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
        }
      `}static get properties(){return{hass:{}}}setConfig(t){if(!t.entity||"light"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the light domain");this.hass=(0,e.C)(),this._config=t,this.friendly_name=!!t.friendly_name&&t.friendly_name}_lightSupportsDimming(){return!0}_computeBrightness(e){return"off"!==e.state&&e.attributes.brightness?`brightness(${(e.attributes.brightness+245)/5}%)`:""}_computeColor(e){return"off"===e.state?"":e.attributes.rgb_color?`rgb(${e.attributes.rgb_color.join(",")})`:""}_setBrightness(e){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:e.detail.value})}_toggleLight(e){this.hass.callService("light","toggle",{entity_id:this._config.entity})}_handleMoreInfo(e){(0,t.W)(this._config.entity)}render(){if(!this.hass||!this._config)return o.dy``;const e=this.hass.states[this._config.entity];if(!e)return o.dy`
          <hui-warning>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]")}
          </hui-warning>
        `;const t=Math.round(e.attributes.brightness/255*100)||0,i=this.friendly_name?this.friendly_name:void 0===e.attributes.friendly_name?e.entity_id.replace(/_/g," "):e.attributes.friendly_name,s=0!=t?", "+t+"%":"",l="on"===e.state?this.hass.localize("state.default."+e.state)+s:this.hass.localize("state.default."+e.state);return o.dy`
      <ha-card class="p-2">
        <div class="flex space-x-2">
          <div>
            <div
              class="cursor-pointer light-button ${(0,n.$)({"state-on":"on"===e.state,"state-unavailable":e.state===r.nZ})}"
              .disabled=${r.V_.includes(e.state)}
              @click=${this._toggleLight}
              tabindex="0"
            >
              <ha-state-icon
                .icon=${this._config.icon}
                .state=${e}
                style=${(0,a.V)({filter:this._computeBrightness(e),color:this._computeColor(e)})}
              ></ha-state-icon>
            </div>
          </div>
          <div class="cursor-pointer information" @click=${this._handleMoreInfo}>
            <h1 class="font-semibold">${i}</h1>
            <span class="state">${l}</span>
          </div>
        </div>
      </ha-card>
      `}}customElements.define("dwains-light-card",i)}))})(),(()=>{"use strict";var e=i(474),t=i(601),a=i(148);const n=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(n).then((()=>{window.loadCardHelpers()&&window.loadCardHelpers();class i extends a.oi{static get styles(){return a.iv`
      .flex {
        display: flex;
        margin-bottom: 5px;
      }
      .font-semibold {
        font-weight: 600;
      }
      h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
      }
      blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .space-x-2>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
      }
      .capitalize {
          text-transform: capitalize;
      }
      .icon ha-state-icon {
        display: inline-block;
        margin: auto;
        --mdc-icon-size: 100% !important;
        --iron-icon-width: 100% !important;
        --iron-icon-height: 100% !important;

        width: 1.5rem;
        height: 1.5rem;
      }
      .icon {
        padding: 0.75rem;
        background-color: var(--secondary-background-color);
        border-radius: 999px;
      }
      .information {
        line-height: 1.10;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .information .state {
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
      }
      `}static get properties(){return{hass:{}}}setConfig(t){if(!t.entity||"cover"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the cover domain");this.hass=(0,e.C)(),this._config=t,this.friendly_name=!!t.friendly_name&&t.friendly_name}firstUpdated(){this.update_style()}async update_style(){await customElements.whenDefined("ha-cover-controls");const e=this.shadowRoot.querySelector("ha-cover-controls");await e.updateComplete,this.shadowRoot.querySelector("ha-cover-controls").shadowRoot.querySelector(".state").style.textAlign="center",this.shadowRoot.querySelector("ha-cover-controls").shadowRoot.querySelector(".state").style.display="grid",this.shadowRoot.querySelector("ha-cover-controls").shadowRoot.querySelector(".state").style.gridTemplateColumns="repeat(3, minmax(0, 1fr))",this.shadowRoot.querySelector("ha-cover-controls").shadowRoot.querySelector(".state").style.gap="0.5rem",this.shadowRoot.querySelector("ha-cover-controls").shadowRoot.querySelectorAll("ha-icon-button").forEach((function(e){e.style.backgroundColor="var(--secondary-background-color)",e.style.borderRadius="var(--ha-card-border-radius, 4px)",e.style.setProperty("--mdc-icon-size","1.5rem"),e.style.setProperty("--mdc-icon-button-size","41px")}))}_handleMoreInfo(e){(0,t.W)(this._config.entity)}render(){if(!this.hass||!this._config)return a.dy``;const e=this.hass.states[this._config.entity];if(!e)return a.dy`
          <hui-warning>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]")}
          </hui-warning>
        `;const t=this.friendly_name?this.friendly_name:void 0===e.attributes.friendly_name?e.entity_id.replace(/_/g," "):e.attributes.friendly_name;return a.dy`
      <ha-card class="p-2">
        <div class="flex space-x-2">
          <div>
            <div class="icon cursor-pointer">
              <ha-state-icon
                .icon=${this._config.icon}
                .state=${e}
              ></ha-state-icon>
            </div>
          </div>
          <div class="cursor-pointer information" @click=${this._handleMoreInfo}>
            <h1 class="font-semibold">${t}</h1>
            <span class="state">
            ${void 0!==e.attributes.current_position?`${this.hass.localize("ui.card.cover.position")}: ${e.attributes.current_position}`:""}
            </span>
          </div>
        </div>
        <div>
          <ha-cover-controls
            .hass=${this.hass}
            .stateObj=${e}
          ></ha-cover-controls>
        </div>
      </ha-card>
      `}}customElements.define("dwains-cover-card",i)}))})(),(()=>{"use strict";var e=i(474),t=i(601),a=i(594),n=i(287),o=i(151),r=i(148),s=i(49);const l=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(l).then((()=>{const i=window.loadCardHelpers()?window.loadCardHelpers():void 0;class l extends r.oi{static get styles(){return r.iv`
      .flex {
        display: flex;
      }
      .font-semibold {
        font-weight: 600;
      }
      h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
      }
      blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
        margin: 0;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .space-x-2>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
      }
      .capitalize {
          text-transform: capitalize;
      }
      .icon ha-state-icon {
        display: inline-block;
        margin: auto;
        --mdc-icon-size: 100% !important;
        --iron-icon-width: 100% !important;
        --iron-icon-height: 100% !important;

        width: 1.5rem;
        height: 1.5rem;
      }
      .icon {
        padding: 0.75rem;
        background-color: var(--secondary-background-color);
        border-radius: 999px;
      }
      .information {
        line-height: 1.10;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .information .state {
        font-size: 0.9rem;
        line-height: 1.25rem;
        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));
      }
      `}static get properties(){return{hass:{}}}async setConfig(t){if(!t.entity)throw new Error("Specify an entity");if(this.hass=(0,e.C)(),this._config=t,this.friendly_name=!!t.friendly_name&&t.friendly_name,"sensor"==(0,n.MS)(this._config.entity)&&this.hass.states[this._config.entity].attributes.unit_of_measurement){const e={type:"graph",entity:this._config.entity,detail:1,hours_to_show:24,limits:1},t=await i;this.card=await t.createHeaderFooterElement(e),this.card.hass=this.hass}}_handleMoreInfo(e){(0,t.W)(this._config.entity)}_computeBrightness(e){return e.attributes.brightness&&this._config.state_color?`brightness(${(e.attributes.brightness+245)/5}%)`:""}_computeColor(e){return this._config.state_color&&e.attributes.rgb_color?`rgb(${e.attributes.rgb_color.join(",")})`:""}_toggleEntity(e){const t=e.currentTarget.entity,i=s.tj.includes(this.hass.states[t].state),o=(0,n.MS)(t);if("binary_sensor"!=o&&"sensor"!=o&&"person"!=o&&"weather"!=o){const e="group"===o?"homeassistant":o;let n;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;case"scene":n="turn_on";break;default:n=i?"turn_on":"turn_off"}this.hass.callService(e,n,{entity_id:t}),(0,a.B)("haptic","success")}else this._handleMoreInfo()}render(){if(!this.hass||!this._config)return r.dy``;const e=this.hass.states[this._config.entity];if(!e)return r.dy`
          <hui-warning>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]")}
          </hui-warning>
        `;const t=this.friendly_name?this.friendly_name:void 0===e.attributes.friendly_name?e.entity_id.replace(/_/g," "):e.attributes.friendly_name;return this._config.entity,r.dy`
      <ha-card>
        <div class="flex space-x-2 p-2">
          <div>
            <div class="icon cursor-pointer">
              <ha-state-icon
                tabindex="-1"
                data-domain=${(0,n.N5)(e)}
                data-state=${e.state}
                .icon=${this._config.icon}
                .state=${e}
                .entity=${this._config.entity}
                @click=${this._toggleEntity}
                style=${(0,o.V)({filter:e?this._computeBrightness(e):"",color:e?this._computeColor(e):"",height:""})}
              ></ha-state-icon>
            </div>
          </div>
          <div class="cursor-pointer information" @click=${this._handleMoreInfo}>
            <h1 class="font-semibold">${t}</h1>
            <span class="state">
              ${"scene"==(0,n.MS)(e.entity_id)?r.dy`
              <ha-relative-time
                id="label"
                class="ellipsis"
                .hass="${this.hass}"
                .datetime="${e.last_changed}"
              ></ha-relative-time>
              `:r.dy`
              ${(0,n.D1)(this.hass.localize,e,this.hass.locale)}
              `}
            </span>
          </div>
        </div>
        ${"sensor"==(0,n.MS)(this._config.entity)&&this.card?r.dy`
            <div class="w-full">
              ${this.card}
            <div>
            `:""}
      </ha-card>
      `}}customElements.define("dwains-button-card",l)}))})(),(()=>{const e=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(e).then((()=>{const e=customElements.get("hui-masonry-view")?Object.getPrototypeOf(customElements.get("hui-masonry-view")):Object.getPrototypeOf(customElements.get("hc-lovelace")),t=e.prototype.html,i=e.prototype.css,a=window.loadCardHelpers()?window.loadCardHelpers():void 0,n=async(e,t)=>{if(a)return(await a).createCardElement(t);const i=document.createElement(e);try{i.setConfig(t)}catch(i){return console.error(e,i),((e,t)=>n("hui-error-card",{type:"error",error:e,config:t}))(i.message,t)}return i};customElements.get("dwains-flexbox-card")||customElements.define("dwains-flexbox-card",class extends e{constructor(){super()}static get properties(){return{_config:{},_refCards:{}}}set hass(e){this._hass=e,!this._refCards&&this._config&&this.renderCard(),this._refCards&&this._refCards.forEach((t=>{t.hass=e}))}setConfig(e){if(!(e||(e.cards||Array.isArray(e.cards))&&e.entities&&Array.isArray(e.entities)))throw new Error("Card config incorrect");this._config=e,this._hass&&this.renderCard()}renderCard(){const e=(this._config.entities||this._config.cards).map((e=>this.createCardElement(e)));Promise.all(e).then((e=>{this._refCards=e}))}async createCardElement(e){let t=e.type;t=t.startsWith("divider")?"hui-divider-row":t.startsWith("custom:")?t.substr(7):`hui-${t}-card`;const i=await n(t,e);return e.item_classes?i.className="item "+e.item_classes:this._config.items_classes?i.className="item "+this._config.items_classes:i.className="item",i.hass=this._hass,i.addEventListener("ll-rebuild",(t=>{t.stopPropagation(),this.createCardElement(e).then((()=>{this.renderCard()}))}),{once:!0}),i}render(){return this._config&&this._hass&&this._refCards?(this._config.padding&&(e="padding"),t`
      <div style="${this._config.css}">
        <div class="wrapper ${e}">
          <div class="row">
            ${this._refCards}
          </div>
        </div>
      </div>
      `):t``;var e}static get styles(){return[i`
          /* I used flexbox grid (http://flexboxgrid.com/) for now, not sure if it's good for all browsers */
          .container,
          .container-fluid {
            margin-right: auto;
            margin-left: auto;
          }
          .container-fluid {
            padding-right: 2rem;
            padding-left: 2rem;
          }
          .row {
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 0;
            -ms-flex: 0 1 auto;
            flex: 0 1 auto;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -0.25rem;
            margin-left: -0.25rem;
          }
          .row.reverse {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
          }
          .col.reverse {
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
          }
          .col-xs,
          .col-xs-1,
          .col-xs-10,
          .col-xs-11,
          .col-xs-12,
          .col-xs-2,
          .col-xs-3,
          .col-xs-4,
          .col-xs-5,
          .col-xs-6,
          .col-xs-7,
          .col-xs-8,
          .col-xs-9,
          .col-xs-offset-0,
          .col-xs-offset-1,
          .col-xs-offset-10,
          .col-xs-offset-11,
          .col-xs-offset-12,
          .col-xs-offset-2,
          .col-xs-offset-3,
          .col-xs-offset-4,
          .col-xs-offset-5,
          .col-xs-offset-6,
          .col-xs-offset-7,
          .col-xs-offset-8,
          .col-xs-offset-9 {
            box-sizing: border-box;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding-right: 0.25rem;
            padding-left: 0.25rem;
          }
          .col-xs {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            max-width: 100%;
          }
          .col-xs-1 {
            -ms-flex-preferred-size: 8.33333333%;
            flex-basis: 8.33333333%;
            max-width: 8.33333333%;
          }
          .col-xs-2 {
            -ms-flex-preferred-size: 16.66666667%;
            flex-basis: 16.66666667%;
            max-width: 16.66666667%;
          }
          .col-xs-3 {
            -ms-flex-preferred-size: 25%;
            flex-basis: 25%;
            max-width: 25%;
          }
          .col-xs-4 {
            -ms-flex-preferred-size: 33.33333333%;
            flex-basis: 33.33333333%;
            max-width: 33.33333333%;
          }
          .col-xs-5 {
            -ms-flex-preferred-size: 41.66666667%;
            flex-basis: 41.66666667%;
            max-width: 41.66666667%;
          }
          .col-xs-6 {
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            max-width: 50%;
          }
          .col-xs-7 {
            -ms-flex-preferred-size: 58.33333333%;
            flex-basis: 58.33333333%;
            max-width: 58.33333333%;
          }
          .col-xs-8 {
            -ms-flex-preferred-size: 66.66666667%;
            flex-basis: 66.66666667%;
            max-width: 66.66666667%;
          }
          .col-xs-9 {
            -ms-flex-preferred-size: 75%;
            flex-basis: 75%;
            max-width: 75%;
          }
          .col-xs-10 {
            -ms-flex-preferred-size: 83.33333333%;
            flex-basis: 83.33333333%;
            max-width: 83.33333333%;
          }
          .col-xs-11 {
            -ms-flex-preferred-size: 91.66666667%;
            flex-basis: 91.66666667%;
            max-width: 91.66666667%;
          }
          .col-xs-12 {
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            max-width: 100%;
          }
          .col-xs-offset-0 {
            margin-left: 0;
          }
          .col-xs-offset-1 {
            margin-left: 8.33333333%;
          }
          .col-xs-offset-2 {
            margin-left: 16.66666667%;
          }
          .col-xs-offset-3 {
            margin-left: 25%;
          }
          .col-xs-offset-4 {
            margin-left: 33.33333333%;
          }
          .col-xs-offset-5 {
            margin-left: 41.66666667%;
          }
          .col-xs-offset-6 {
            margin-left: 50%;
          }
          .col-xs-offset-7 {
            margin-left: 58.33333333%;
          }
          .col-xs-offset-8 {
            margin-left: 66.66666667%;
          }
          .col-xs-offset-9 {
            margin-left: 75%;
          }
          .col-xs-offset-10 {
            margin-left: 83.33333333%;
          }
          .col-xs-offset-11 {
            margin-left: 91.66666667%;
          }
          .start-xs {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            text-align: start;
          }
          .center-xs {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center;
          }
          .end-xs {
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            text-align: end;
          }
          .top-xs {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
          }
          .middle-xs {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .bottom-xs {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end;
          }
          .around-xs {
            -ms-flex-pack: distribute;
            justify-content: space-around;
          }
          .between-xs {
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
          .first-xs {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
          }
          .last-xs {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
          }
          @media only screen and (min-width: 48em) {
            .container {
              width: 49rem;
            }
            .col-sm,
            .col-sm-1,
            .col-sm-10,
            .col-sm-11,
            .col-sm-12,
            .col-sm-2,
            .col-sm-3,
            .col-sm-4,
            .col-sm-5,
            .col-sm-6,
            .col-sm-7,
            .col-sm-8,
            .col-sm-9,
            .col-sm-offset-0,
            .col-sm-offset-1,
            .col-sm-offset-10,
            .col-sm-offset-11,
            .col-sm-offset-12,
            .col-sm-offset-2,
            .col-sm-offset-3,
            .col-sm-offset-4,
            .col-sm-offset-5,
            .col-sm-offset-6,
            .col-sm-offset-7,
            .col-sm-offset-8,
            .col-sm-offset-9 {
              box-sizing: border-box;
              -webkit-box-flex: 0;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
            .col-sm {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              max-width: 100%;
            }
            .col-sm-1 {
              -ms-flex-preferred-size: 8.33333333%;
              flex-basis: 8.33333333%;
              max-width: 8.33333333%;
            }
            .col-sm-2 {
              -ms-flex-preferred-size: 16.66666667%;
              flex-basis: 16.66666667%;
              max-width: 16.66666667%;
            }
            .col-sm-3 {
              -ms-flex-preferred-size: 25%;
              flex-basis: 25%;
              max-width: 25%;
            }
            .col-sm-4 {
              -ms-flex-preferred-size: 33.33333333%;
              flex-basis: 33.33333333%;
              max-width: 33.33333333%;
            }
            .col-sm-5 {
              -ms-flex-preferred-size: 41.66666667%;
              flex-basis: 41.66666667%;
              max-width: 41.66666667%;
            }
            .col-sm-6 {
              -ms-flex-preferred-size: 50%;
              flex-basis: 50%;
              max-width: 50%;
            }
            .col-sm-7 {
              -ms-flex-preferred-size: 58.33333333%;
              flex-basis: 58.33333333%;
              max-width: 58.33333333%;
            }
            .col-sm-8 {
              -ms-flex-preferred-size: 66.66666667%;
              flex-basis: 66.66666667%;
              max-width: 66.66666667%;
            }
            .col-sm-9 {
              -ms-flex-preferred-size: 75%;
              flex-basis: 75%;
              max-width: 75%;
            }
            .col-sm-10 {
              -ms-flex-preferred-size: 83.33333333%;
              flex-basis: 83.33333333%;
              max-width: 83.33333333%;
            }
            .col-sm-11 {
              -ms-flex-preferred-size: 91.66666667%;
              flex-basis: 91.66666667%;
              max-width: 91.66666667%;
            }
            .col-sm-12 {
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
              max-width: 100%;
            }
            .col-sm-offset-0 {
              margin-left: 0;
            }
            .col-sm-offset-1 {
              margin-left: 8.33333333%;
            }
            .col-sm-offset-2 {
              margin-left: 16.66666667%;
            }
            .col-sm-offset-3 {
              margin-left: 25%;
            }
            .col-sm-offset-4 {
              margin-left: 33.33333333%;
            }
            .col-sm-offset-5 {
              margin-left: 41.66666667%;
            }
            .col-sm-offset-6 {
              margin-left: 50%;
            }
            .col-sm-offset-7 {
              margin-left: 58.33333333%;
            }
            .col-sm-offset-8 {
              margin-left: 66.66666667%;
            }
            .col-sm-offset-9 {
              margin-left: 75%;
            }
            .col-sm-offset-10 {
              margin-left: 83.33333333%;
            }
            .col-sm-offset-11 {
              margin-left: 91.66666667%;
            }
            .start-sm {
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              text-align: start;
            }
            .center-sm {
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center;
            }
            .end-sm {
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              text-align: end;
            }
            .top-sm {
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
            }
            .middle-sm {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .bottom-sm {
              -webkit-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
            }
            .around-sm {
              -ms-flex-pack: distribute;
              justify-content: space-around;
            }
            .between-sm {
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            .first-sm {
              -webkit-box-ordinal-group: 0;
              -ms-flex-order: -1;
              order: -1;
            }
            .last-sm {
              -webkit-box-ordinal-group: 2;
              -ms-flex-order: 1;
              order: 1;
            }
          }
          @media only screen and (min-width: 64em) {
            .container {
              width: 65rem;
            }
            .col-md,
            .col-md-1,
            .col-md-10,
            .col-md-11,
            .col-md-12,
            .col-md-2,
            .col-md-3,
            .col-md-4,
            .col-md-5,
            .col-md-6,
            .col-md-7,
            .col-md-8,
            .col-md-9,
            .col-md-offset-0,
            .col-md-offset-1,
            .col-md-offset-10,
            .col-md-offset-11,
            .col-md-offset-12,
            .col-md-offset-2,
            .col-md-offset-3,
            .col-md-offset-4,
            .col-md-offset-5,
            .col-md-offset-6,
            .col-md-offset-7,
            .col-md-offset-8,
            .col-md-offset-9 {
              box-sizing: border-box;
              -webkit-box-flex: 0;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
            .col-md {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              max-width: 100%;
            }
            .col-md-1 {
              -ms-flex-preferred-size: 8.33333333%;
              flex-basis: 8.33333333%;
              max-width: 8.33333333%;
            }
            .col-md-2 {
              -ms-flex-preferred-size: 16.66666667%;
              flex-basis: 16.66666667%;
              max-width: 16.66666667%;
            }
            .col-md-3 {
              -ms-flex-preferred-size: 25%;
              flex-basis: 25%;
              max-width: 25%;
            }
            .col-md-4 {
              -ms-flex-preferred-size: 33.33333333%;
              flex-basis: 33.33333333%;
              max-width: 33.33333333%;
            }
            .col-md-5 {
              -ms-flex-preferred-size: 41.66666667%;
              flex-basis: 41.66666667%;
              max-width: 41.66666667%;
            }
            .col-md-6 {
              -ms-flex-preferred-size: 50%;
              flex-basis: 50%;
              max-width: 50%;
            }
            .col-md-7 {
              -ms-flex-preferred-size: 58.33333333%;
              flex-basis: 58.33333333%;
              max-width: 58.33333333%;
            }
            .col-md-8 {
              -ms-flex-preferred-size: 66.66666667%;
              flex-basis: 66.66666667%;
              max-width: 66.66666667%;
            }
            .col-md-9 {
              -ms-flex-preferred-size: 75%;
              flex-basis: 75%;
              max-width: 75%;
            }
            .col-md-10 {
              -ms-flex-preferred-size: 83.33333333%;
              flex-basis: 83.33333333%;
              max-width: 83.33333333%;
            }
            .col-md-11 {
              -ms-flex-preferred-size: 91.66666667%;
              flex-basis: 91.66666667%;
              max-width: 91.66666667%;
            }
            .col-md-12 {
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
              max-width: 100%;
            }
            .col-md-offset-0 {
              margin-left: 0;
            }
            .col-md-offset-1 {
              margin-left: 8.33333333%;
            }
            .col-md-offset-2 {
              margin-left: 16.66666667%;
            }
            .col-md-offset-3 {
              margin-left: 25%;
            }
            .col-md-offset-4 {
              margin-left: 33.33333333%;
            }
            .col-md-offset-5 {
              margin-left: 41.66666667%;
            }
            .col-md-offset-6 {
              margin-left: 50%;
            }
            .col-md-offset-7 {
              margin-left: 58.33333333%;
            }
            .col-md-offset-8 {
              margin-left: 66.66666667%;
            }
            .col-md-offset-9 {
              margin-left: 75%;
            }
            .col-md-offset-10 {
              margin-left: 83.33333333%;
            }
            .col-md-offset-11 {
              margin-left: 91.66666667%;
            }
            .start-md {
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              text-align: start;
            }
            .center-md {
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center;
            }
            .end-md {
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              text-align: end;
            }
            .top-md {
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
            }
            .middle-md {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .bottom-md {
              -webkit-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
            }
            .around-md {
              -ms-flex-pack: distribute;
              justify-content: space-around;
            }
            .between-md {
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            .first-md {
              -webkit-box-ordinal-group: 0;
              -ms-flex-order: -1;
              order: -1;
            }
            .last-md {
              -webkit-box-ordinal-group: 2;
              -ms-flex-order: 1;
              order: 1;
            }
          }
          @media only screen and (min-width: 75em) {
            .container {
              width: 76rem;
            }
            .col-lg,
            .col-lg-1,
            .col-lg-10,
            .col-lg-11,
            .col-lg-12,
            .col-lg-2,
            .col-lg-3,
            .col-lg-4,
            .col-lg-5,
            .col-lg-6,
            .col-lg-7,
            .col-lg-8,
            .col-lg-9,
            .col-lg-offset-0,
            .col-lg-offset-1,
            .col-lg-offset-10,
            .col-lg-offset-11,
            .col-lg-offset-12,
            .col-lg-offset-2,
            .col-lg-offset-3,
            .col-lg-offset-4,
            .col-lg-offset-5,
            .col-lg-offset-6,
            .col-lg-offset-7,
            .col-lg-offset-8,
            .col-lg-offset-9 {
              box-sizing: border-box;
              -webkit-box-flex: 0;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
            .col-lg {
              -webkit-box-flex: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              max-width: 100%;
            }
            .col-lg-1 {
              -ms-flex-preferred-size: 8.33333333%;
              flex-basis: 8.33333333%;
              max-width: 8.33333333%;
            }
            .col-lg-2 {
              -ms-flex-preferred-size: 16.66666667%;
              flex-basis: 16.66666667%;
              max-width: 16.66666667%;
            }
            .col-lg-3 {
              -ms-flex-preferred-size: 25%;
              flex-basis: 25%;
              max-width: 25%;
            }
            .col-lg-4 {
              -ms-flex-preferred-size: 33.33333333%;
              flex-basis: 33.33333333%;
              max-width: 33.33333333%;
            }
            .col-lg-5 {
              -ms-flex-preferred-size: 41.66666667%;
              flex-basis: 41.66666667%;
              max-width: 41.66666667%;
            }
            .col-lg-6 {
              -ms-flex-preferred-size: 50%;
              flex-basis: 50%;
              max-width: 50%;
            }
            .col-lg-7 {
              -ms-flex-preferred-size: 58.33333333%;
              flex-basis: 58.33333333%;
              max-width: 58.33333333%;
            }
            .col-lg-8 {
              -ms-flex-preferred-size: 66.66666667%;
              flex-basis: 66.66666667%;
              max-width: 66.66666667%;
            }
            .col-lg-9 {
              -ms-flex-preferred-size: 75%;
              flex-basis: 75%;
              max-width: 75%;
            }
            .col-lg-10 {
              -ms-flex-preferred-size: 83.33333333%;
              flex-basis: 83.33333333%;
              max-width: 83.33333333%;
            }
            .col-lg-11 {
              -ms-flex-preferred-size: 91.66666667%;
              flex-basis: 91.66666667%;
              max-width: 91.66666667%;
            }
            .col-lg-12 {
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
              max-width: 100%;
            }
            .col-lg-offset-0 {
              margin-left: 0;
            }
            .col-lg-offset-1 {
              margin-left: 8.33333333%;
            }
            .col-lg-offset-2 {
              margin-left: 16.66666667%;
            }
            .col-lg-offset-3 {
              margin-left: 25%;
            }
            .col-lg-offset-4 {
              margin-left: 33.33333333%;
            }
            .col-lg-offset-5 {
              margin-left: 41.66666667%;
            }
            .col-lg-offset-6 {
              margin-left: 50%;
            }
            .col-lg-offset-7 {
              margin-left: 58.33333333%;
            }
            .col-lg-offset-8 {
              margin-left: 66.66666667%;
            }
            .col-lg-offset-9 {
              margin-left: 75%;
            }
            .col-lg-offset-10 {
              margin-left: 83.33333333%;
            }
            .col-lg-offset-11 {
              margin-left: 91.66666667%;
            }
            .start-lg {
              -webkit-box-pack: start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              text-align: start;
            }
            .center-lg {
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              text-align: center;
            }
            .end-lg {
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              text-align: end;
            }
            .top-lg {
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
            }
            .middle-lg {
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .bottom-lg {
              -webkit-box-align: end;
              -ms-flex-align: end;
              align-items: flex-end;
            }
            .around-lg {
              -ms-flex-pack: distribute;
              justify-content: space-around;
            }
            .between-lg {
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }
            .first-lg {
              -webkit-box-ordinal-group: 0;
              -ms-flex-order: -1;
              order: -1;
            }
            .last-lg {
              -webkit-box-ordinal-group: 2;
              -ms-flex-order: 1;
              order: 1;
            }
          }

          .item {
            margin-bottom: 0.5rem;
          }

          .wrapper {
            overflow: hidden;
            padding: 0px;
          }
          .wrapper.padding {
            padding: 11px;
          }
          .row {
            overflow: hidden;
            width: auto;
          }

          .d-none {
            display: none !important;
          }
          .d-inline {
            display: inline !important;
          }
          .d-inline-block {
            display: inline-block !important;
          }
          .d-block {
            display: block !important;
          }
          .d-table {
            display: table !important;
          }
          .d-table-row {
            display: table-row !important;
          }
          .d-table-cell {
            display: table-cell !important;
          }
          .d-flex {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
          }
          .d-inline-flex {
            display: -webkit-inline-box !important;
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
          }

          @media (min-width: 576px) {
            .d-sm-none {
              display: none !important;
            }
            .d-sm-inline {
              display: inline !important;
            }
            .d-sm-inline-block {
              display: inline-block !important;
            }
            .d-sm-block {
              display: block !important;
            }
            .d-sm-table {
              display: table !important;
            }
            .d-sm-table-row {
              display: table-row !important;
            }
            .d-sm-table-cell {
              display: table-cell !important;
            }
            .d-sm-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-sm-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }

          @media (min-width: 768px) {
            .d-md-none {
              display: none !important;
            }
            .d-md-inline {
              display: inline !important;
            }
            .d-md-inline-block {
              display: inline-block !important;
            }
            .d-md-block {
              display: block !important;
            }
            .d-md-table {
              display: table !important;
            }
            .d-md-table-row {
              display: table-row !important;
            }
            .d-md-table-cell {
              display: table-cell !important;
            }
            .d-md-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-md-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }

          @media (min-width: 992px) {
            .d-lg-none {
              display: none !important;
            }
            .d-lg-inline {
              display: inline !important;
            }
            .d-lg-inline-block {
              display: inline-block !important;
            }
            .d-lg-block {
              display: block !important;
            }
            .d-lg-table {
              display: table !important;
            }
            .d-lg-table-row {
              display: table-row !important;
            }
            .d-lg-table-cell {
              display: table-cell !important;
            }
            .d-lg-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-lg-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }

          @media (min-width: 1200px) {
            .d-xl-none {
              display: none !important;
            }
            .d-xl-inline {
              display: inline !important;
            }
            .d-xl-inline-block {
              display: inline-block !important;
            }
            .d-xl-block {
              display: block !important;
            }
            .d-xl-table {
              display: table !important;
            }
            .d-xl-table-row {
              display: table-row !important;
            }
            .d-xl-table-cell {
              display: table-cell !important;
            }
            .d-xl-flex {
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
            }
            .d-xl-inline-flex {
              display: -webkit-inline-box !important;
              display: -ms-inline-flexbox !important;
              display: inline-flex !important;
            }
          }
        `]}})}))})(),(()=>{const e=[customElements.whenDefined("hui-masonry-view"),customElements.whenDefined("hc-lovelace")];Promise.race(e).then((()=>{const e=customElements.get("hui-masonry-view")?Object.getPrototypeOf(customElements.get("hui-masonry-view")):Object.getPrototypeOf(customElements.get("hc-lovelace")),t=e.prototype.html;e.prototype.css;customElements.get("dwains-heading-card")||customElements.define("dwains-heading-card",class extends e{setConfig(e){this._config=JSON.parse(JSON.stringify(e))}render(){return t`
        <ha-card style="box-shadow: none;
        background: none;
        padding: 0px 16px 0px 0px !important;
        font-weight: bold;
        font-size: 14px;">
          ${this._config.title}
        </ha-card>
      `}getCardSize(){return 1}})}))})()})();
//# sourceMappingURL=dwains-dashboard.js.map
