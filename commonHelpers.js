(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".header-blur"),o=document.getElementById("search-button"),n=document.getElementById("search-container"),r=document.getElementById("close-button"),e=document.querySelector(".find");function t(){window.innerWidth>1279?(n.style.display="block",r.style.display="none",e.style.display="none"):n.style.display="none"}o.addEventListener("click",function(){window.innerWidth<=1280&&(i.style.filter="blur(5px)",n.style.display="block",searchInput.focus())}),r.addEventListener("click",function(){i.style.filter="none",n.style.display="none"}),t(),window.addEventListener("resize",t)});
//# sourceMappingURL=commonHelpers.js.map
