var L=Object.defineProperty;var E=(n,t,e)=>t in n?L(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var i=(n,t,e)=>E(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const r of h.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(o){if(o.ep)return;o.ep=!0;const h=e(o);fetch(o.href,h)}})();function x(n){return Math.abs(Math.floor(n))}function d(n,t){return Math.random()*(t-n)+n}function a(n,t){return Math.floor(d(n,t+1))}function v(n,t,e,s){const o=Math.pow;return Math.sqrt(o(n-e,2)+o(t-s,2))}function y(n,t,e=1){if(n>360||n<0)throw new Error(`Expected hue 0-360 range, got \`${n}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(e>1||e<0)throw new Error(`Expected alpha 0-1 range, got \`${e}\``);return`hsla(${n}, 100%, ${t}%, ${e})`}const b=n=>{if(typeof n=="object"&&n!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(n);return t===Object.prototype||t===null}return Object.prototype.toString.call(n)==="[object Object]"}return!1},z=["__proto__","constructor","prototype"],S=(...n)=>n.reduce((t,e)=>(Object.keys(e).forEach(s=>{z.includes(s)||(Array.isArray(t[s])&&Array.isArray(e[s])?t[s]=e[s]:b(t[s])&&b(e[s])?t[s]=S(t[s],e[s]):t[s]=e[s])}),t),{});function M(n,t){let e;return(...s)=>{e&&clearTimeout(e),e=setTimeout(()=>n(...s),t)}}class P{constructor({x:t,y:e,ctx:s,hue:o,decay:h,gravity:r,friction:u,brightness:p,flickering:f,lineWidth:m,explosionLength:g}){i(this,"x");i(this,"y");i(this,"ctx");i(this,"hue");i(this,"friction");i(this,"gravity");i(this,"flickering");i(this,"lineWidth");i(this,"explosionLength");i(this,"angle");i(this,"speed");i(this,"brightness");i(this,"coordinates",[]);i(this,"decay");i(this,"alpha",1);for(this.x=t,this.y=e,this.ctx=s,this.hue=o,this.gravity=r,this.friction=u,this.flickering=f,this.lineWidth=m,this.explosionLength=g,this.angle=d(0,Math.PI*2),this.speed=a(1,10),this.brightness=a(p.min,p.max),this.decay=d(h.min,h.max);this.explosionLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=y(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=y(this.hue,this.flickering?d(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class C{constructor(t,e){i(this,"active",!1);i(this,"x");i(this,"y");this.options=t,this.canvas=e,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,e){const{click:s,move:o}=this.mouseOptions;(s||o)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=e)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class A{constructor(){i(this,"hue");i(this,"rocketsPoint");i(this,"opacity");i(this,"acceleration");i(this,"friction");i(this,"gravity");i(this,"particles");i(this,"explosion");i(this,"mouse");i(this,"boundaries");i(this,"sound");i(this,"delay");i(this,"brightness");i(this,"decay");i(this,"flickering");i(this,"intensity");i(this,"traceLength");i(this,"traceSpeed");i(this,"lineWidth");i(this,"lineStyle");i(this,"autoresize");this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,S(this,t))}}class T{constructor(t,e){i(this,"tick",0);i(this,"rafId",0);i(this,"fps",60);i(this,"tolerance",.1);i(this,"now");this.options=t,this.render=e}mount(){this.now=performance.now();const t=1e3/this.fps,e=s=>{this.rafId=requestAnimationFrame(e);const o=s-this.now;o>=t-this.tolerance&&(this.render(),this.now=s-o%t,this.tick+=o*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(e)}unmount(){cancelAnimationFrame(this.rafId)}}class W{constructor(t,e,s){i(this,"resizer");this.options=t,this.updateSize=e,this.container=s}mount(){if(!this.resizer){const t=M(()=>this.updateSize(),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class ${constructor(t){i(this,"buffers",[]);i(this,"audioContext");i(this,"onInit",!1);this.options=t,this.init()}get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const e=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(e).then(s=>{this.buffers.push(s)}).catch(s=>{throw s})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),e=this.buffers[a(0,this.buffers.length-1)],s=this.audioContext.createGain();t.buffer=e,s.gain.value=d(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),s.connect(this.audioContext.destination),t.connect(s),t.start(0)}else this.init()}}class D{constructor({x:t,y:e,dx:s,dy:o,ctx:h,hue:r,speed:u,traceLength:p,acceleration:f}){i(this,"x");i(this,"y");i(this,"sx");i(this,"sy");i(this,"dx");i(this,"dy");i(this,"ctx");i(this,"hue");i(this,"speed");i(this,"acceleration");i(this,"traceLength");i(this,"totalDistance");i(this,"angle");i(this,"brightness");i(this,"coordinates",[]);i(this,"currentDistance",0);for(this.x=t,this.y=e,this.sx=t,this.sy=e,this.dx=s,this.dy=o,this.ctx=h,this.hue=r,this.speed=u,this.traceLength=p,this.acceleration=f,this.totalDistance=v(t,e,s,o),this.angle=Math.atan2(o-e,s-t),this.brightness=a(50,70);this.traceLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const e=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.currentDistance=v(this.sx,this.sy,this.x+e,this.y+s),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=e,this.y+=s)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=y(this.hue,this.brightness),this.ctx.stroke()}}class R{constructor(t,e={}){i(this,"target");i(this,"container");i(this,"canvas");i(this,"ctx");i(this,"width");i(this,"height");i(this,"traces",[]);i(this,"explosions",[]);i(this,"waitStopRaf");i(this,"running",!1);i(this,"opts");i(this,"sound");i(this,"resize");i(this,"mouse");i(this,"raf");this.target=t,this.container=t,this.opts=new A,this.createCanvas(this.target),this.updateOptions(e),this.sound=new $(this.opts),this.resize=new W(this.opts,this.updateSize.bind(this),this.container),this.mouse=new C(this.opts,this.canvas),this.raf=new T(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.8"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){this.running&&(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(e=>{this.waitStopRaf=()=>{this.waitStopRaf&&(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),e()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){this.ctx&&(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let e=0;e<t;e++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:e=this.container.clientHeight}={}){this.width=t,this.height=e,this.canvas.width=t,this.canvas.height=e,this.updateBoundaries({...this.opts.boundaries,width:t,height:e})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:e,lineWidth:s}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=e,this.ctx.lineJoin="round",this.ctx.lineWidth=d(s.trace.min,s.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:e,boundaries:s,traceLength:o,traceSpeed:h,acceleration:r,mouse:u}=this.opts;this.traces.push(new D({x:this.width*a(e.min,e.max)/100,y:this.height,dx:this.mouse.x&&u.move||this.mouse.active?this.mouse.x:a(s.x,s.width-s.x*2),dy:this.mouse.y&&u.move||this.mouse.active?this.mouse.y:a(s.y,s.height*.5),ctx:this.ctx,hue:a(t.min,t.max),speed:h,acceleration:r,traceLength:x(o)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:e}=this.opts;(this.raf.tick>a(t.min,t.max)||this.mouse.active&&e.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((e,s,o)=>{this.initExplosion(e,s,o),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,e,s){const{particles:o,flickering:h,lineWidth:r,explosion:u,brightness:p,friction:f,gravity:m,decay:g}=this.opts;let k=x(o);for(;k--;)this.explosions.push(new P({x:t,y:e,ctx:this.ctx,hue:s,friction:f,gravity:m,flickering:a(0,100)<=h,lineWidth:d(r.explosion.min,r.explosion.max),explosionLength:x(u),brightness:p,decay:g}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}const w=document.querySelector("#combined"),O=document.querySelector("#wheel"),I=document.querySelector(".container");let l=45,c=0;(async()=>(await loadStarsPreset(tsParticles),await tsParticles.load({id:"tsparticles",options:{preset:"stars",background:{color:"#040418"},particles:{size:{value:{min:.5,max:1.1}},move:{direction:"top-right",random:!1,straight:!0,speed:.1},number:{value:1e3,limit:0,density:{enable:!0,area:1e3}}},fullScreen:{enable:!1}}})))();w.style.transform=`rotate(${l}deg)`;O.style.transform=`rotate(calc(${c}deg - ${l}deg)`;const j=new R(I,{sound:{enabled:!0,files:"/clap.wav",volume:{min:4,max:8}}});window.addEventListener("keydown",n=>{n.key===" "&&j.launch(1),n.key==="q"||n.key==="ArrowUp"&&l>=-70?l--:(n.key==="w"||n.key==="ArrowDown"&&l<=70)&&l++,n.key==="ArrowLeft"&&c>=-70?c-=2:n.key==="ArrowRight"&&c<=innerWidth-130&&(c+=2),c>innerWidth-130&&(c=innerWidth-130),w.style.transform=`rotate(${l}deg)`,w.style.left=`${c}px`,O.style.transform=`rotate(calc(${c*2}deg - ${l}deg)`});