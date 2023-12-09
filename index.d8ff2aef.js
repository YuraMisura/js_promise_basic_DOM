var e=document.body,n=document.querySelector(".logo");function r(n,r){e.insertAdjacentHTML("beforeend",'\n    <div class="message '.concat(n,'">').concat(r,"</div>\n  "))}var o=Promise.resolve("Promise was resolved!");new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)}).catch(function(e){r("error-message",e.message)}),n.addEventListener("click",function(){o.then(function(e){return r("success",e)}).catch(function(e){return r("error-message",e)})});//# sourceMappingURL=index.d8ff2aef.js.map

//# sourceMappingURL=index.d8ff2aef.js.map
