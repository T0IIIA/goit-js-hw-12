import{a as M,i as d,S as P}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const g=15;async function h(t,r){const a="https://pixabay.com/api/",i=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:g});return(await M(`${a}?${i}`)).data}function $({webformatURL:t,largeImageURL:r,tags:a,likes:i,views:e,comments:o,downloads:n}){return`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${t}" alt="${a}"/>
          </a>
          <ul class="info">
            <li class="info-item"> <b>Likes</b> ${i} </li>
            <li class="info-item"> <b>Views</b> ${e} </li>
            <li class="info-item"> <b>Comments</b> ${o} </li>
            <li class="info-item"> <b>Downloads</b> ${n} </li>
          </ul>
        </li>
    `}function b(t){return t.map($).join("")}const L=document.querySelector(".search-form"),l=document.querySelector(".gallery"),s=document.querySelector(".loader"),p=document.querySelector(".load-more");let c="",m=0;L.addEventListener("submit",q);function q(t){if(t.preventDefault(),c=L.inputSearch.value.trim(),u(),!!c)return B(),l.innerHTML="",h(c,m=1).then(r=>{if(r.hits.length===0)return l.innerHTML="",u(),d.error({...y,...O});const a=b(r.hits);l.insertAdjacentHTML("afterbegin",a),w.refresh(),S()}).catch(r=>{d.error({...y,message:r.message})}).finally(()=>{f()}),t.target.reset()}p.addEventListener("click",v);async function v(){u(),H();try{const t=await h(c,m+=1),r=b(t.hits);let a=m*g;l.insertAdjacentHTML("beforeend",r),w.refresh(),S(),a>=t.totalHits&&(u(),d.info({...y,...T}),f());const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:e,behavior:"smooth"})}catch(t){alert(t.message)}finally{f()}}function S(){p.style.display="block"}function u(){p.style.display="none"}function B(){s.style.position="absolute",s.style.display="inline-block"}function H(){s.style.position="relative",s.style.display="inline-block"}function f(){s.style.display="none"}const y={position:"topRight",timeout:1800,maxWidth:300,progressBar:!1},O={icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"},T={message:"We are sorry, but you have reached the end of search results."};let w=new P(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map