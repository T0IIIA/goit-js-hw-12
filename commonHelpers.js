import{a as P,i as u,S as $}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function g(t,r){const i="https://pixabay.com/api/",a=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return(await P(`${i}?${a}`)).data}function q({webformatURL:t,largeImageURL:r,tags:i,likes:a,views:e,comments:o,downloads:s}){return`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${t}" alt="${i}"/>
          </a>
          <ul class="info">
            <li class="info-item"> <b>Likes</b> ${a} </li>
            <li class="info-item"> <b>Views</b> ${e} </li>
            <li class="info-item"> <b>Comments</b> ${o} </li>
            <li class="info-item"> <b>Downloads</b> ${s} </li>
          </ul>
        </li>
    `}function b(t){return t.map(q).join("")}const L=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=document.querySelector(".load-more");let n="",m=0,d=0,p="";L.addEventListener("submit",v);function v(t){if(t.preventDefault(),n=L.inputSearch.value.trim(),H(),!!n)return p!==n&&(m=0),c.innerHTML="",g(n,m+=1).then(r=>{if(r.hits.length===0)return c.innerHTML="",w(),u.error({...y,...T});const i=b(r.hits);c.insertAdjacentHTML("afterbegin",i),M.refresh(),d=r.hits.length,S(),p=n}).catch(r=>{u.error({...y,message:r.message})}).finally(()=>{f()}),t.target.reset()}h.addEventListener("click",B);async function B(){w(),O();try{const t=await g(n,m+=1),r=b(t.hits);if(d+=t.hits.length,d>=t.totalHits)return u.info({...y,...k});c.insertAdjacentHTML("beforeend",r),M.refresh(),S();const a=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:a,behavior:"smooth"})}catch(t){alert(t.message)}finally{f()}}function S(){h.style.display="block"}function w(){h.style.display="none"}function H(){l.style.position="absolute",l.style.display="inline-block"}function O(){l.style.position="relative",l.style.display="inline-block"}function f(){l.style.display="none"}const y={position:"topRight",timeout:1800,maxWidth:300,progressBar:!1},T={icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"},k={message:"We are sorry, but you have reached the end of search results."};let M=new $(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
