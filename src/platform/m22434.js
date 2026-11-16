import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import { createPortal } from 'react-dom'
import * as __m86297 from './m86297.js'
import * as __m59255 from './m59255.js'
import * as __m69872 from './m69872.js'
import { EVENTS } from '../data.js'
;('use strict')
let e, t, i, r
var n = __m43476,
  s = __m71645,
  o = __m86297,
  l = __m59255,
  c = __m69872
let d = 'ca5283ce-7783-4833-ab63-ebf34a66956c',
  h = '/images/sidharthan-prinna',
  p = {
    envelope: `${h}/envelope.webp`,
    reveal: `${h}/reveal.webp`,
    moments: [1, 2, 3, 4].map((q) => `${h}/moment${q}.webp`),
    foil: `${h}/foil.webp`,
    floral: `${h}/floral.webp`,
  },
  f = EVENTS.wedding.startISO,
  m = Date.parse(f),
  g = {
    title: 'Wedding — Sidharthan & Prinna',
    start: new Date(f),
    end: new Date(EVENTS.wedding.endISO),
    location: EVENTS.wedding.venue,
    details: 'The wedding of Sidharthan & Prinna. Sangeet on 28 November 2026 at Santhwanasparsam Mandapam, Tattamangalam. Reception on 29 November 2026 at Gowrisankar Kalyanamandapam, Vadavannur.',
    uid: `${d}-main@zetron.tech`,
  },
  u = '#33202b',
  y = '#4d2c3b',
  x = '#74294a',
  b = '#a05068',
  v = '#fff3f5',
  j = "'Cormorant Garamond', Georgia, serif",
  k = "'Pinyon Script', 'Cormorant Garamond', cursive",
  w = (a) => `calc(var(--u) * ${a})`,
  $ = (a) => ({ '--d': `${a}s` })
function z(a) {
  let e = a >>> 0
  return () => {
    let a = Math.imul((e = (e + 0x6d2b79f5) | 0) ^ (e >>> 15), 1 | e)
    return (((a = (a + Math.imul(a ^ (a >>> 7), 61 | a)) ^ a) ^ (a >>> 14)) >>> 0) / 0x100000000
  }
}
let N = (a) => Math.round(100 * a) / 100,
  S = [
    [0, 0],
    [100, 0],
    [100, 26.5],
    [56.2, 47.5],
    [53.2, 48.9],
    [50, 49.4],
    [46.8, 48.9],
    [43.8, 47.5],
    [0, 26.5],
  ],
  M = (a) => `polygon(${a.map(([a, e]) => `${a}% ${e}%`).join(', ')})`,
  C = M(S),
  T = M(S.map(([a, e]) => [a, 100 - e])),
  W = M([[0, 26.5], ...S.slice(3, 8), [100, 26.5], [100, 100], [0, 100]]),
  P = (() => {
    let a = z(5),
      e = Array.from({ length: 18 }, (e, t) => {
        let i = (t / 18) * Math.PI * 2,
          r = 44 + 4.5 * a()
        return [50 + Math.cos(i) * r, 50 + Math.sin(i) * r]
      }),
      t = (a, e) => [(a[0] + e[0]) / 2, (a[1] + e[1]) / 2],
      i = t(e[17], e[0]),
      r = `M${N(i[0])} ${N(i[1])}`
    for (let a = 0; a < 18; a++) {
      let i = e[a],
        n = t(i, e[(a + 1) % 18])
      r += ` Q${N(i[0])} ${N(i[1])} ${N(n[0])} ${N(n[1])}`
    }
    return r + 'Z'
  })(),
  F = [
    [50, 0],
    [46, 18],
    [54, 32],
    [47, 50],
    [55, 66],
    [48, 82],
    [52, 100],
  ],
  R = M([[0, 0], ...F, [0, 100]]),
  A = M([[100, 0], [100, 100], ...[...F].reverse()]),
  E =
    ((e = z(17)),
    Array.from({ length: 20 }, (a, t) => {
      let i = (t / 20) * Math.PI * 2 + 0.3 * e(),
        r = 34 + 46 * e()
      return { dx: N(Math.cos(i) * r), dy: N(Math.sin(i) * r), s: N(2.5 + 3.5 * e()), dl: N(0.12 * e()) }
    })),
  I = [
    ['#f7d6d1', '#e8aaa3'],
    ['#fcebe6', '#f0c5be'],
    ['#f4c9c3', '#dc9e97'],
    ['#ffeff2', '#f0d2cb'],
  ],
  D =
    ((t = z(11)),
    Array.from({ length: 16 }, (a, e) => ({
      left: Math.round(100 * t()),
      size: Math.round(11 + 10 * t()),
      t: N(11 + 8 * t()),
      delay: N(-(18 * t())),
      dx: Math.round((t() - 0.5) * 150),
      rz: Math.round(160 + 380 * t()) * (t() > 0.5 ? 1 : -1),
      sway: N(2.4 + 2.4 * t()),
      tone: e % I.length,
    }))),
  L = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Pinyon+Script&display=swap');
.aa-root,.aa-cover{--u:min(1vw,.4618vh)}
@supports (height:1svh){.aa-root,.aa-cover{--u:min(1vw,.4618svh)}}
.aa-root{background:${v};color:${u};overflow-x:hidden;-webkit-tap-highlight-color:transparent}
.aa-page{position:relative;height:100vh;height:100svh;overflow:hidden;background:${v}}
.aa-bg{display:none;position:absolute;inset:-60px;background-image:var(--bg);background-size:cover;background-position:center;filter:blur(26px) saturate(1.05);opacity:.9}
.aa-art{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100vw,calc(100vh*0.5628));height:max(100vh,calc(100vw/0.5628))}
@supports (height:1svh){.aa-art{width:max(100vw,calc(100svh*0.5628));height:max(100svh,calc(100vw/0.5628))}}
@media (min-aspect-ratio:3/5){
  .aa-bg{display:block}
  .aa-art{width:calc(100vh*0.5628);height:100vh;box-shadow:0 0 80px rgba(90,46,64,.22)}
  @supports (height:1svh){.aa-art{width:calc(100svh*0.5628);height:100svh}}
}
.aa-kb{position:absolute;inset:0;animation:aa-breathe 26s ease-in-out infinite alternate;transform-origin:50% 50%}
.aa-page:not(.aa-in) .aa-kb{animation-play-state:paused}
.aa-img{position:absolute;inset:0;width:100%;height:100%;display:block;user-select:none;-webkit-user-select:none;pointer-events:none}
.aa-fx{transform:scaleX(-1)}.aa-fy{transform:scaleY(-1)}.aa-fxy{transform:scale(-1,-1)}
.aa-copy{position:absolute;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.aa-wash::before{content:'';position:absolute;inset:-5% -9%;z-index:-1;pointer-events:none;background:radial-gradient(closest-side,rgba(253,235,239,.86),rgba(253,235,239,.6) 62%,rgba(253,235,239,0))}

/* Reveals — replayed each time a page comes back into view */
.aa-r,.aa-w,.aa-l,.aa-p,.aa-ch{opacity:0}
.aa-in .aa-r{animation:aa-rise 1.1s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.aa-in .aa-w{animation:aa-wipe 1.7s cubic-bezier(.45,.05,.25,1) var(--d,0s) both}
.aa-in .aa-l{animation:aa-draw 1.1s cubic-bezier(.65,0,.35,1) var(--d,0s) both}
.aa-in .aa-p{animation:aa-pop .95s cubic-bezier(.3,1.45,.5,1) var(--d,0s) both}
.aa-in .aa-ch{animation:aa-char .95s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.aa-path{stroke-dasharray:1;stroke-dashoffset:1}
.aa-in .aa-path{animation:aa-path 1.8s cubic-bezier(.45,.05,.3,1) var(--d,0s) both}
.aa-leaf{transform-box:fill-box;transform-origin:center;transform:scale(0)}
.aa-in .aa-leaf{animation:aa-leaf .7s cubic-bezier(.3,1.5,.5,1) var(--d,0s) both}
@keyframes aa-rise{from{opacity:0;transform:translateY(16px);filter:blur(5px)}to{opacity:1;transform:none;filter:blur(0)}}
@keyframes aa-wipe{from{opacity:1;clip-path:inset(-30% 100% -30% 0)}to{opacity:1;clip-path:inset(-30% -8% -30% 0)}}
@keyframes aa-flt{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--u)*-.9))}}
@keyframes aa-sweep{0%,55%{transform:translateX(-130%) skewX(-18deg)}100%{transform:translateX(330%) skewX(-18deg)}}
.aa-flt{animation:aa-flt 7s ease-in-out infinite;animation-delay:var(--fd,0s)}
.aa-shine{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.aa-shine::after{content:'';position:absolute;top:0;bottom:0;left:0;width:34%;background:linear-gradient(100deg,rgba(255,234,239,0),rgba(255,234,239,.5),rgba(255,234,239,0));animation:aa-sweep 7.5s ease-in-out infinite;animation-delay:var(--sd,2s)}
@keyframes aa-draw{from{opacity:1;transform:scaleX(0)}to{opacity:1;transform:scaleX(1)}}
@keyframes aa-pop{0%{opacity:0;transform:translateY(-26px) scale(.6)}60%{opacity:1;transform:translateY(3px) scale(1.06)}100%{opacity:1;transform:none}}
@keyframes aa-char{from{opacity:0;transform:translateY(.55em) rotateX(75deg);filter:blur(3px)}to{opacity:1;transform:none;filter:blur(0)}}
@keyframes aa-path{to{stroke-dashoffset:0}}
@keyframes aa-leaf{to{transform:scale(1)}}
@keyframes aa-breathe{from{transform:scale(1)}to{transform:scale(1.035)}}

/* Gold light — a sweep masked to the painted gold, plus a warm halo */
.aa-glint{position:absolute;pointer-events:none;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;background:linear-gradient(120deg,rgba(255,230,235,0) 42%,rgba(255,235,239,.95) 50%,rgba(255,230,235,0) 58%);background-size:320% 320%;background-position:100% 100%;mix-blend-mode:screen;animation:aa-glint 5.5s ease-in-out infinite}
.aa-halo{position:absolute;pointer-events:none;background:radial-gradient(closest-side,rgba(255,203,213,.6),rgba(255,203,213,0));animation:aa-halo 6s ease-in-out infinite}
.aa-spark{position:absolute;width:${w(2.6)};height:${w(2.6)};margin:${w(-1.3)} 0 0 ${w(-1.3)};pointer-events:none;animation:aa-spark 3.2s ease-in-out var(--d,0s) infinite;opacity:0}
.aa-page:not(.aa-in) .aa-glint,.aa-page:not(.aa-in) .aa-halo,.aa-page:not(.aa-in) .aa-spark,.aa-page:not(.aa-in) .aa-birdtrack{animation-play-state:paused}
@keyframes aa-glint{0%,30%{background-position:100% 100%}78%,100%{background-position:0 0}}
@keyframes aa-halo{0%,100%{opacity:.35}50%{opacity:.85}}
@keyframes aa-spark{0%,100%{opacity:0;transform:scale(.2) rotate(0)}45%{opacity:1;transform:scale(1) rotate(45deg)}60%{opacity:.9;transform:scale(.8) rotate(60deg)}}

/* Birds over the lake */
.aa-birdtrack{position:absolute;left:0;top:60%;width:100%;height:8%;animation:aa-fly 24s linear infinite;pointer-events:none}
.aa-bird{position:absolute}
.aa-bird svg{display:block;animation:aa-flap .42s ease-in-out infinite alternate;transform-origin:50% 60%}
@keyframes aa-fly{from{transform:translateX(-18%)}to{transform:translateX(112%)}}
@keyframes aa-flap{from{transform:scaleY(1)}to{transform:scaleY(.35)}}

/* Petals */
.aa-petals{position:fixed;inset:0;pointer-events:none;z-index:230;overflow:hidden}
.aa-petal{position:absolute;top:-6%;animation:aa-fall var(--t) linear var(--dl) infinite;will-change:transform}
.aa-sway{animation:aa-sway var(--sw) ease-in-out var(--dl) infinite alternate}
.aa-tumble{width:100%;height:100%;animation:aa-tumble calc(var(--sw) * 1.3) ease-in-out var(--dl) infinite alternate}
@keyframes aa-fall{from{transform:translate3d(0,0,0) rotate(0)}to{transform:translate3d(var(--dx),112vh,0) rotate(var(--rz))}}
@keyframes aa-sway{from{transform:translateX(-18px)}to{transform:translateX(18px)}}
@keyframes aa-tumble{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(58deg) rotateY(22deg)}100%{transform:perspective(120px) rotateX(-36deg) rotateY(68deg)}}

/* Envelope cover */
.aa-cover{position:fixed;left:0;top:0;width:100%;height:100vh;height:100svh;z-index:200;overflow:hidden;cursor:pointer;outline:none;background:${v};transition:background-color .9s ease}
.aa-cover.aa-zoom{background-color:transparent}
.aa-cover .aa-bg{transition:opacity .9s ease}
.aa-cover.aa-zoom .aa-bg{opacity:0}
.aa-env{position:absolute;inset:0;perspective:1600px;animation:aa-settle 1.4s cubic-bezier(.2,.7,.2,1) both}
.aa-interior{position:absolute;inset:0;background:linear-gradient(180deg,#dab2bf 0%,#eaced4 40%,#f3d6dc 100%)}
.aa-card{position:absolute;inset:0;z-index:2;transform-origin:50% 0;transform:translateY(53%) scale(.84);transition:transform 1.35s cubic-bezier(.22,1,.36,1)}
.aa-card img{position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:6px;box-shadow:0 -8px 28px rgba(90,46,64,.28),0 0 0 1px rgba(176,98,121,.4);transition:border-radius .9s,box-shadow .9s}
.aa-rise .aa-card{transform:translateY(7%) scale(.84)}
.aa-zoom .aa-card{transform:none;transition:transform 1s cubic-bezier(.65,0,.25,1)}
.aa-zoom .aa-card img{border-radius:0;box-shadow:none}
.aa-pocket,.aa-pocket-copy,.aa-seal{transition:opacity .6s ease}
.aa-pocket{position:absolute;inset:0;z-index:3}
.aa-zoom .aa-pocket,.aa-zoom .aa-pocket-copy{opacity:0}
.aa-flap{position:absolute;inset:0;z-index:5;transform-origin:50% 0;transform-style:preserve-3d;transition:transform 1.15s cubic-bezier(.5,0,.3,1)}
.aa-open .aa-flap{transform:rotateX(-172deg)}
.aa-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.aa-face-back{transform:rotateX(180deg);background:linear-gradient(0deg,#eed2d7,#d8aebb)}
.aa-lid-copy{position:absolute;left:50%;top:16.6%;transform:translateX(-50%);width:70%;text-align:center;transition:opacity .3s ease}
.aa-break .aa-lid-copy{opacity:0}
.aa-pocket-copy{position:absolute;left:50%;top:54.4%;transform:translateX(-50%);width:62%;z-index:4;text-align:center;pointer-events:none}
.aa-tap{transition:opacity .3s ease}
.aa-break .aa-tap{opacity:0}
.aa-cin{opacity:0;animation:aa-rise 1.1s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.aa-pulse{animation:aa-pulse 2.4s ease-in-out infinite}
@keyframes aa-settle{from{opacity:0;transform:scale(1.045)}to{opacity:1;transform:none}}
@keyframes aa-pulse{0%,100%{opacity:.5}50%{opacity:1}}
.aa-seal{position:absolute;left:50%;top:47.5%;width:${w(21)};height:${w(21)};transform:translate(-50%,-50%);z-index:6;filter:drop-shadow(0 3px 5px rgba(80,32,49,.38))}
.aa-seal-stamp{position:absolute;inset:0;animation:aa-stamp .95s cubic-bezier(.3,1.4,.5,1) .55s both}
.aa-seal-breathe{position:absolute;inset:0;animation:aa-sealb 3.2s ease-in-out 1.6s infinite}
.aa-break .aa-seal-breathe{animation:none}
.aa-half{position:absolute;inset:0;transition:transform 1s cubic-bezier(.5,0,.75,.45),opacity 1s ease}
.aa-half svg{display:block;width:100%;height:100%}
.aa-break .aa-half-l{transform:translate(-38%,80%) rotate(-30deg);opacity:0}
.aa-break .aa-half-r{transform:translate(40%,92%) rotate(26deg);opacity:0}
.aa-seal-ring{position:absolute;inset:-12%;border-radius:50%;border:1px solid rgba(160,80,104,.6);animation:aa-ring 2.6s ease-out 2s infinite;opacity:0}
.aa-break .aa-seal-ring{display:none}
.aa-dust i{position:absolute;left:50%;top:50%;border-radius:50%;background:radial-gradient(circle,#ffe0e7,#d4778d);opacity:0}
.aa-break .aa-dust i{animation:aa-dust 1.2s cubic-bezier(.2,.7,.3,1) var(--dl) forwards}
@keyframes aa-stamp{0%{opacity:0;transform:scale(1.7)}55%{opacity:1;transform:scale(.94)}100%{opacity:1;transform:scale(1)}}
@keyframes aa-sealb{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}
@keyframes aa-ring{0%{opacity:.9;transform:scale(.82)}100%{opacity:0;transform:scale(1.5)}}
@keyframes aa-dust{0%{opacity:1;transform:translate(-50%,-50%)}100%{opacity:0;transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy)))}}

/* Scratch-off date */
.aa-scratch:focus-visible{outline:1px dashed ${b};outline-offset:10px}
.aa-scratch{position:relative;width:${w(64)};height:${w(58)};margin:${w(1)} auto 0;outline:none}
.aa-dateblock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.aa-dateblock.on{animation:aa-datepop 1.5s cubic-bezier(.2,.8,.2,1) both}
@keyframes aa-datepop{0%{transform:scale(.94)}45%{transform:scale(1.03)}100%{transform:scale(1)}}
.aa-foilc{position:absolute;left:${w(-2.4)};top:${w(-2.4)};width:calc(100% + ${w(4.8)});height:calc(100% + ${w(4.8)});touch-action:none;cursor:grab;transition:opacity 1s ease,transform 1s ease,filter 1s ease;z-index:2}
.aa-foilc:active{cursor:grabbing}
.aa-foilc.gone{opacity:0;transform:scale(1.08);filter:blur(3px);pointer-events:none}
.aa-hint{position:absolute;inset:0;z-index:3;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .45s ease}
.aa-hint.off{opacity:0}
.aa-hint-sheen{position:absolute;inset:4%;border-radius:40% / 44%;overflow:hidden}
.aa-hint-sheen::after{content:'';position:absolute;top:-20%;bottom:-20%;width:34%;left:-40%;background:linear-gradient(100deg,rgba(255,230,235,0),rgba(255,232,236,.55),rgba(255,230,235,0));animation:aa-sheen 3.4s ease-in-out infinite}
@keyframes aa-sheen{0%{left:-40%}60%,100%{left:110%}}
.aa-finger{position:absolute;left:50%;top:62%;width:${w(9)};height:${w(9)};filter:drop-shadow(0 2px 3px rgba(60,20,34,.45));animation:aa-rub 2.6s ease-in-out infinite}
@keyframes aa-rub{0%,100%{transform:translate(-120%,0) rotate(-12deg)}25%{transform:translate(-10%,-38%) rotate(4deg)}50%{transform:translate(40%,6%) rotate(10deg)}75%{transform:translate(-40%,-20%) rotate(-4deg)}}
.aa-flakes{position:absolute;inset:0;pointer-events:none;z-index:6;overflow:visible}
.aa-flake{position:absolute;clip-path:polygon(0 18%,100% 0,72% 100%);background:linear-gradient(135deg,#f8bcc5,#c4637d 60%,#8f4259);animation:aa-flake 1.25s cubic-bezier(.2,.6,.4,1) forwards}
@keyframes aa-flake{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--rz))}}
.aa-foiltext{background:linear-gradient(100deg,#7d374b 0%,#b8657e 20%,#ecabb8 36%,#a8556e 52%,#7d374b 68%,#c9738a 84%,#8a4055 100%);background-size:240% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:aa-foilsh 5s linear infinite}
@keyframes aa-foilsh{from{background-position:120% 0}to{background-position:-110% 0}}

/* Countdown tab */
.aa-tab{display:flex;align-items:stretch;border:1px solid rgba(160,80,104,.5);border-radius:${w(3.2)};background:rgba(255,241,243,.8);box-shadow:0 8px 22px rgba(120,58,79,.13);padding:${w(2)} ${w(1.4)};animation:aa-tabin .9s cubic-bezier(.2,.8,.2,1) both}
.aa-tab>div{display:flex;flex-direction:column;align-items:center;min-width:${w(13.5)};padding:0 ${w(1)}}
.aa-tab>div+div{border-left:1px solid rgba(160,80,104,.3)}
.aa-tick{display:inline-block;animation:aa-tick .32s cubic-bezier(.2,.8,.2,1) both}
@keyframes aa-tabin{from{opacity:0;transform:translateY(22px) scale(.96)}to{opacity:1;transform:none}}
@keyframes aa-tick{from{opacity:.2;transform:translateY(-30%)}to{opacity:1;transform:none}}
.aa-fadein{animation:aa-rise 1s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}

/* Buttons */
.aa-pill{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:${w(2)};padding:${w(2.7)} ${w(6)};border:1px solid rgba(160,80,104,.75);border-radius:999px;background:rgba(255,239,242,.62);color:${u};font-family:${j};font-weight:700;font-size:${w(3)};letter-spacing:.26em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
.aa-pill:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(120,58,79,.18);background:rgba(255,242,244,.9)}
.aa-pill:active{transform:scale(.97)}
.aa-pill::after{content:'';position:absolute;top:0;bottom:0;width:40%;left:-60%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,234,239,.8),rgba(255,255,255,0));animation:aa-pillsheen 4.2s ease-in-out 1.5s infinite}
@keyframes aa-pillsheen{0%{left:-60%}45%,100%{left:130%}}
.aa-bob{animation:aa-bob 2.2s ease-in-out infinite}
@keyframes aa-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}

/* Our Moments: 3D carousel */
.aa-mo{position:relative;width:100%;height:${w(116)};perspective:${w(190)};perspective-origin:50% 42%;touch-action:pan-y;user-select:none;-webkit-user-select:none}
.aa-mo-card{position:absolute;left:50%;top:${w(2)};width:${w(74)};margin-left:${w(-37)};cursor:pointer;outline:none;transition:transform .85s cubic-bezier(.2,.8,.2,1),opacity .6s ease,filter .6s ease;will-change:transform,opacity}
.aa-mo-card.drag{transition:opacity .6s ease,filter .6s ease}
.aa-mo-frame{position:relative;padding:${w(0.9)};box-sizing:border-box;border-radius:${w(3.4)};background:linear-gradient(135deg,#a35a6c 0%,#f3cdd3 24%,#c98a96 48%,#fbe3e7 72%,#9c5668 100%);box-shadow:0 ${w(5)} ${w(8)} rgba(110,40,70,.38),0 ${w(0.6)} ${w(1.4)} rgba(110,40,70,.25);transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .18s ease-out}
.aa-mo-mat{background:#fff8f9;padding:${w(1.6)};border-radius:${w(2.5)};box-shadow:inset 0 0 0 1px rgba(214,134,152,.5)}
.aa-mo-mat img{display:block;width:100%;height:auto;border-radius:${w(1.4)};pointer-events:none}
.aa-mo-frame .aa-shine{border-radius:${w(3.4)}}
.aa-mo-floor{position:absolute;left:50%;bottom:${w(1)};width:${w(68)};height:${w(5)};margin-left:${w(-34)};background:radial-gradient(closest-side,rgba(110,40,70,.30),rgba(110,40,70,0));pointer-events:none}
.aa-dots{display:flex;justify-content:center;gap:${w(2.4)};margin-top:${w(1)}}
.aa-dot{width:${w(2.1)};height:${w(2.1)};min-width:10px;min-height:10px;border-radius:50%;border:1px solid #c9788a;background:transparent;padding:0;cursor:pointer;transition:transform .3s,background .3s}
.aa-dot.on{background:#c2506a;border-color:#c2506a;transform:scale(1.3)}
.aa-lb{position:fixed;inset:0;z-index:300;background:rgba(58,20,36,.86);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;animation:aa-lbin .3s ease both}
.aa-lb-stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
.aa-lb img{max-width:96vw;max-height:84vh;border-radius:14px;border:3px solid #fbe3e7;box-shadow:0 24px 60px rgba(0,0,0,.5);touch-action:none;user-select:none;-webkit-user-select:none;pointer-events:auto;transform-origin:50% 50%;animation:aa-lbpop .4s cubic-bezier(.2,.9,.3,1.2) backwards}
.aa-lb button{position:absolute;background:rgba(255,247,249,.16);border:1px solid rgba(255,255,255,.5);color:#fff;border-radius:50%;width:44px;height:44px;font-size:26px;line-height:1;cursor:pointer;display:grid;place-items:center;padding:0 0 3px}
.aa-lb-x{top:16px;right:16px;z-index:2}
.aa-lb-a{top:50%;margin-top:-22px;z-index:2}.aa-lb-l{left:10px}.aa-lb-r{right:10px}
.aa-lb-z{position:absolute;left:50%;bottom:calc(22px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);display:flex;align-items:center;gap:12px;z-index:2;background:rgba(58,20,36,.6);border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:6px 10px;color:#fff;font-family:${j};font-weight:700;font-size:16px;letter-spacing:.06em}
.aa-lb-z button{position:static;width:38px;height:38px;font-size:24px}
.aa-lb-z span{min-width:48px;text-align:center}
@keyframes aa-lbin{from{opacity:0}to{opacity:1}}
@keyframes aa-lbpop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}

/* Tall pages: art only at the top and bottom, flat paper between */
.aa-page.aa-tall{height:auto;min-height:100vh;min-height:100svh}
.aa-artt{position:relative;margin:0 auto;width:100%;min-height:100vh;overflow:hidden;container-type:inline-size;background:#f4eae2}
@supports (height:1svh){.aa-artt{min-height:100svh}}
@media (min-aspect-ratio:3/5){.aa-artt{width:calc(100vh*0.5628);box-shadow:0 0 80px rgba(90,64,40,.22)}@supports (height:1svh){.aa-artt{width:calc(100svh*0.5628)}}}
.aa-tcopy{position:relative;z-index:3;width:min(84%,calc(100vw - 36px));margin:0 auto;padding:calc(var(--u)*50) 0 calc(var(--u)*52);box-sizing:border-box;display:flex;flex-direction:column;align-items:center;text-align:center}
.aa-hdr{position:relative}
.aa-hdr::before{content:'';position:absolute;inset:-14% -14%;z-index:-1;pointer-events:none;background:radial-gradient(closest-side,rgba(255,246,248,.92),rgba(255,246,248,.65) 60%,rgba(255,246,248,0))}
.aa-sl{position:absolute;left:0;width:100%;overflow:hidden;height:calc(100cqw / .5628 * .52);pointer-events:none}
.aa-slimg{position:absolute;left:0;width:100%;height:auto;display:block}
.aa-sl-t{top:0;-webkit-mask-image:linear-gradient(#000 74%,transparent);mask-image:linear-gradient(#000 74%,transparent)}
.aa-sl-t .aa-slimg{top:0}
.aa-sl-b{bottom:0;-webkit-mask-image:linear-gradient(transparent,#000 26%);mask-image:linear-gradient(transparent,#000 26%)}
.aa-sl-b .aa-slimg{bottom:0}
/* Function cards (Sangeet / Wedding / Reception) */
.aa-fgrid{width:100%;display:grid;grid-template-columns:1fr;gap:${w(3.4)};margin-top:${w(0.6)}}
.aa-rvw{width:100%;display:block}
.aa-fgrid>.aa-rvw{display:block}
.aa-fc{position:relative;overflow:hidden;height:100%;box-sizing:border-box;border-radius:${w(3.6)};background:rgba(255,255,255,.74);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border:1px solid rgba(214,134,152,.4);padding:${w(4.2)} ${w(3)} ${w(4.6)};text-align:center;box-shadow:0 8px 22px rgba(176,84,110,.14);cursor:pointer;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease}
.aa-fc:hover{transform:translateY(${w(-0.8)});box-shadow:0 16px 32px rgba(196,80,112,.22)}
.aa-fc-ic{display:flex;justify-content:center;align-items:center;height:${w(15)};margin-bottom:${w(1.6)};transition:transform .4s cubic-bezier(.3,1.5,.5,1)}
.aa-fc:hover .aa-fc-ic{transform:scale(1.14) rotate(-3deg)}
.aa-fc-lbl{font-family:${j};font-weight:700;font-size:${w(6.2)};letter-spacing:.02em;color:${x};margin:0 0 ${w(1.2)};line-height:1.2}
.aa-fc-bar{position:absolute;left:50%;bottom:0;height:${w(0.45)};width:0;transform:translateX(-50%);background:linear-gradient(90deg,rgba(201,120,138,0),#c9788a,rgba(201,120,138,0));transition:width .45s ease}
.aa-fc:hover .aa-fc-bar{width:62%}
.aa-rip{position:absolute;border-radius:50%;background:rgba(255,255,255,.95);transform:scale(0);opacity:.9;pointer-events:none;animation:aa-rip .7s ease-out forwards}
@keyframes aa-rip{to{transform:scale(1);opacity:0}}
.aa-cal{width:${w(14)};border-radius:${w(1.3)};border:1px solid rgba(214,134,152,.7);background:#fff;overflow:hidden;box-shadow:0 2px 6px rgba(176,84,110,.15)}
.aa-cal-h{background:#c2506a;color:#fff;font-family:${j};font-weight:600;font-size:${w(2.2)};letter-spacing:.24em;padding:${w(0.6)} 0 ${w(0.6)} .24em;line-height:1.3}
.aa-cal-d{font-family:${j};font-weight:500;font-size:${w(7.4)};color:#3d2330;line-height:1.1;padding:${w(0.4)} 0 ${w(0.6)}}

.aa-root ::selection,.aa-cover ::selection{background:rgba(214,134,152,.35);color:inherit}
.aa-root :focus-visible{outline:2px solid #c9788a!important;outline-offset:3px}

@media (prefers-reduced-motion:reduce){
  .aa-r,.aa-w,.aa-l,.aa-p,.aa-ch,.aa-cin{opacity:1!important;animation:none!important;clip-path:none!important}
  .aa-path{stroke-dashoffset:0!important;animation:none!important}
  .aa-leaf{transform:none!important;animation:none!important}
  .aa-petals,.aa-birdtrack,.aa-glint,.aa-spark,.aa-finger{display:none}
  .aa-kb,.aa-env{animation:none!important}
}
`
function B({
  children: a,
  size: e = 2.9,
  track: t = 0.36,
  color: i = u,
  delay: r = 0,
  weight: s = 500,
  style: o,
}) {
  return (0, n.jsx)('p', {
    className: 'aa-r',
    style: {
      ...$(r),
      fontFamily: j,
      fontWeight: Math.max(s, 600),
      fontSize: w(e * 1.14),
      letterSpacing: `${t}em`,
      paddingLeft: `${t}em`,
      textTransform: 'uppercase',
      color: i,
      margin: 0,
      lineHeight: 1.55,
      ...o,
    },
    children: a,
  })
}
function H({
  text: a,
  size: e,
  delay: t = 0,
  step: i = 0.045,
  track: r = 0.14,
  color: s = u,
  weight: o = 500,
  caps: l = !0,
  style: c,
}) {
  return (0, n.jsx)('p', {
    'aria-label': a,
    style: {
      fontFamily: j,
      fontWeight: Math.max(o, 600),
      fontSize: w(e * 1.07),
      letterSpacing: `${r}em`,
      paddingLeft: `${r}em`,
      color: s,
      margin: 0,
      lineHeight: 1.2,
      textTransform: l ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      perspective: 500,
      ...c,
    },
    children: Array.from(a).map((a, e) =>
      (0, n.jsx)(
        'span',
        {
          'aria-hidden': !0,
          className: 'aa-ch',
          style: {
            ...$(t + e * i),
            display: 'inline-block',
            ...('&' === a ? { fontStyle: 'italic', fontWeight: 400, color: b } : null),
          },
          children: ' ' === a ? ' ' : a,
        },
        e,
      ),
    ),
  })
}
function Y({ text: a, size: e = 4.6, delay: t = 0, step: i = 0.12, color: r = y, style: s }) {
  return (0, n.jsx)('p', {
    'aria-label': a,
    style: {
      fontFamily: j,
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: w(e * 1.12),
      color: r,
      margin: 0,
      lineHeight: 1.55,
      ...s,
    },
    children: a
      .split(' ')
      .map((a, e) =>
        (0, n.jsx)(
          'span',
          {
            'aria-hidden': !0,
            className: 'aa-r',
            style: { ...$(t + e * i), display: 'inline-block', marginRight: '.26em' },
            children: a,
          },
          e,
        ),
      ),
  })
}
function X({ children: a, size: e = 8, delay: t = 0, color: i = b, style: r }) {
  return (0, n.jsx)('p', {
    className: 'aa-w',
    style: {
      ...$(t),
      fontFamily: k,
      fontWeight: 400,
      fontSize: w(e * 1.1),
      WebkitTextStroke: '.45px currentColor',
      color: i,
      margin: 0,
      lineHeight: 1.28,
      padding: '0 .35em',
      whiteSpace: 'nowrap',
      ...r,
    },
    children: a,
  })
}
function O({ children: a, size: e = 4.3, delay: t = 0, color: i = y, style: r }) {
  return (0, n.jsx)('p', {
    className: 'aa-r',
    style: {
      ...$(t),
      fontFamily: j,
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: w(e * 1.12),
      color: i,
      margin: 0,
      lineHeight: 1.55,
      ...r,
    },
    children: a,
  })
}
function G({ w: a = 16, delay: e = 0, gap: t = 2.6, animate: i = !0 }) {
  return (0, n.jsxs)('div', {
    'aria-hidden': !0,
    className: i ? 'aa-l' : void 0,
    style: {
      ...$(e),
      display: 'flex',
      alignItems: 'center',
      gap: w(1.5),
      width: w(a),
      margin: `${w(t)} auto`,
    },
    children: [
      (0, n.jsx)('span', {
        style: { flex: 1, height: 1, background: `linear-gradient(90deg, rgba(160,80,104,0), ${b})` },
      }),
      (0, n.jsx)('span', {
        style: {
          width: w(1.3),
          height: w(1.3),
          transform: 'rotate(45deg)',
          border: `1px solid ${b}`,
          flex: 'none',
        },
      }),
      (0, n.jsx)('span', {
        style: { flex: 1, height: 1, background: `linear-gradient(90deg, ${b}, rgba(160,80,104,0))` },
      }),
    ],
  })
}
function K({ x: a, y: e, delay: t = 0 }) {
  return (0, n.jsx)('svg', {
    className: 'aa-spark',
    viewBox: '0 0 10 10',
    style: { left: `${a}%`, top: `${e}%`, ...$(t) },
    'aria-hidden': !0,
    children: (0, n.jsx)('path', { d: 'M5 0L6 4 10 5 6 6 5 10 4 6 0 5 4 4Z', fill: '#ffeff2' }),
  })
}
function V({ size: a, color: e = x }) {
  return (0, n.jsx)('svg', {
    viewBox: '0 0 24 24',
    style: { width: a, height: a, display: 'block' },
    'aria-hidden': !0,
    children: (0, n.jsx)('path', {
      fill: e,
      d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
    }),
  })
}
function Z({ tone: a, id: e }) {
  let [t, i] = I[a]
  return (0, n.jsxs)('svg', {
    viewBox: '0 0 20 28',
    width: '100%',
    height: '100%',
    'aria-hidden': !0,
    style: { display: 'block' },
    children: [
      (0, n.jsx)('defs', {
        children: (0, n.jsxs)('linearGradient', {
          id: e,
          x1: '0',
          y1: '0',
          x2: '1',
          y2: '1',
          children: [
            (0, n.jsx)('stop', { offset: '0', stopColor: t }),
            (0, n.jsx)('stop', { offset: '1', stopColor: i }),
          ],
        }),
      }),
      (0, n.jsx)('path', {
        d: 'M10 3.2C8.4.6 5.2.8 3.6 4.6 1.2 10.6 3 18.6 10 27c7-8.4 8.8-16.4 6.4-22.4C14.8.8 11.6.6 10 3.2Z',
        fill: `url(#${e})`,
      }),
      (0, n.jsx)('path', {
        d: 'M10 5.6c.4 6.4.2 12.8-.1 18.8',
        stroke: 'rgba(186,116,108,.32)',
        strokeWidth: '.6',
        fill: 'none',
      }),
    ],
  })
}
function _() {
  return (0, n.jsx)('div', {
    className: 'aa-petals',
    'aria-hidden': !0,
    children: D.map((a, e) =>
      (0, n.jsx)(
        'div',
        {
          className: 'aa-petal',
          style: {
            left: `${a.left}%`,
            width: a.size,
            height: Math.round(1.4 * a.size),
            '--t': `${a.t}s`,
            '--dl': `${a.delay}s`,
            '--dx': `${a.dx}px`,
            '--rz': `${a.rz}deg`,
            '--sw': `${a.sway}s`,
          },
          children: (0, n.jsx)('div', {
            className: 'aa-sway',
            style: { width: '100%', height: '100%' },
            children: (0, n.jsx)('div', {
              className: 'aa-tumble',
              children: (0, n.jsx)(Z, { tone: a.tone, id: `aa-pt-${e}` }),
            }),
          }),
        },
        e,
      ),
    ),
  })
}
function q({ id: a, art: e, flip: t, overlays: i, label: r, eager: s, tall: th, children: o }) {
  if (th)
    return (0, n.jsxs)('section', {
      id: a,
      className: 'aa-page aa-tall',
      'aria-label': r,
      style: { '--bg': `url('${e}')` },
      children: [
        (0, n.jsx)('div', { className: 'aa-bg', 'aria-hidden': !0 }),
        (0, n.jsxs)('div', {
          className: 'aa-artt',
          children: [
            (0, n.jsx)('div', {
              className: 'aa-sl aa-sl-t',
              'aria-hidden': !0,
              children: (0, n.jsx)('img', { src: e, alt: '', className: `aa-slimg${t ? ` aa-f${t}` : ''}`, draggable: !1, loading: 'lazy', decoding: 'async' }),
            }),
            (0, n.jsx)('div', {
              className: 'aa-sl aa-sl-b',
              'aria-hidden': !0,
              children: (0, n.jsx)('img', { src: e, alt: '', className: `aa-slimg${t ? ` aa-f${t}` : ''}`, draggable: !1, loading: 'lazy', decoding: 'async' }),
            }),
            o,
          ],
        }),
      ],
    })
  return (0, n.jsxs)('section', {
    id: a,
    'data-aa-page': '',
    className: 'aa-page',
    'aria-label': r,
    style: { '--bg': `url('${e}')` },
    children: [
      (0, n.jsx)('div', { className: 'aa-bg', 'aria-hidden': !0 }),
      (0, n.jsxs)('div', {
        className: 'aa-art',
        children: [
          (0, n.jsxs)('div', {
            className: 'aa-kb',
            'aria-hidden': !0,
            children: [
              (0, n.jsx)('img', {
                src: e,
                alt: '',
                className: `aa-img${t ? ` aa-f${t}` : ''}`,
                draggable: !1,
                loading: s ? 'eager' : 'lazy',
                decoding: 'async',
              }),
              i,
            ],
          }),
          o,
        ],
      }),
    ],
  })
}
function J({ top: a, bottom: e, w: t = 84, wash: i, start: r, children: s }) {
  return (0, n.jsx)('div', {
    className: `aa-copy${i ? ' aa-wash' : ''}`,
    style: {
      top: `${a}%`,
      bottom: `${e}%`,
      width: `min(${t}%, calc(100vw - 36px))`,
      justifyContent: r ? 'flex-start' : 'center',
    },
    children: s,
  })
}
function U() {
  let a = `url('${h}/foil-mask.webp')`
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)('div', {
        className: 'aa-glint',
        style: { inset: 0, WebkitMaskImage: a, maskImage: a, animationDuration: '6.5s' },
      }),
      [
        [74, 11, 0],
        [84, 8, 1.1],
        [90, 18, 2.2],
        [80, 17, 0.6],
        [5, 58, 1.6],
        [11, 66, 0.3],
        [19, 73, 2.6],
        [27, 79, 1.3],
        [14, 37, 2],
      ].map(([a, e, t], i) => (0, n.jsx)(K, { x: a, y: e, delay: t }, i)),
    ],
  })
}
function at() {
  return (0, n.jsxs)('svg', {
    viewBox: '0 0 100 100',
    'aria-hidden': !0,
    children: [
      (0, n.jsxs)('defs', {
        children: [
          (0, n.jsxs)('radialGradient', {
            id: 'aa-wax',
            cx: '36%',
            cy: '30%',
            r: '78%',
            children: [
              (0, n.jsx)('stop', { offset: '0', stopColor: '#f7c0c9' }),
              (0, n.jsx)('stop', { offset: '.34', stopColor: '#db8699' }),
              (0, n.jsx)('stop', { offset: '.7', stopColor: '#b45772' }),
              (0, n.jsx)('stop', { offset: '1', stopColor: '#8a3b54' }),
            ],
          }),
          (0, n.jsxs)('radialGradient', {
            id: 'aa-wax-in',
            cx: '46%',
            cy: '40%',
            r: '62%',
            children: [
              (0, n.jsx)('stop', { offset: '0', stopColor: '#e8a2b1' }),
              (0, n.jsx)('stop', { offset: '1', stopColor: '#b55b75' }),
            ],
          }),
        ],
      }),
      (0, n.jsx)('path', { d: P, fill: 'url(#aa-wax)' }),
      (0, n.jsx)('circle', { cx: '50', cy: '50', r: '31', fill: 'url(#aa-wax-in)' }),
      (0, n.jsx)('circle', {
        cx: '50.6',
        cy: '50.8',
        r: '31',
        fill: 'none',
        stroke: '#ffe0e7',
        strokeOpacity: '.55',
        strokeWidth: '.9',
      }),
      (0, n.jsx)('circle', {
        cx: '50',
        cy: '50',
        r: '31',
        fill: 'none',
        stroke: '#7d3048',
        strokeOpacity: '.55',
        strokeWidth: '1.1',
      }),
      [
        ['#ffe0e7', 0.6, 0.8],
        ['#6f283d', 0, 0],
      ].map(([a, e, t], i) =>
        (0, n.jsxs)(
          'g',
          {
            transform: `translate(${e} ${t})`,
            fill: 'none',
            stroke: a,
            strokeOpacity: i ? 0.8 : 0.7,
            strokeWidth: '1.3',
            strokeLinecap: 'round',
            children: [
              (0, n.jsx)('path', { d: 'M50 73C48.8 62 51.2 47 50 31' }),
              (0, n.jsx)('path', {
                d: 'M49.6 63c-4-1-6.8-3.8-7.6-7.4 3.6.2 6.6 2.8 7.6 7.4ZM50.4 56.6c4-1 6.8-3.8 7.6-7.4-3.6.2-6.6 2.8-7.6 7.4ZM49.6 49.4c-3.6-1-6-3.6-6.8-6.8 3.2.2 6 2.6 6.8 6.8ZM50.4 42.8c3.4-1 5.6-3.4 6.2-6.2-3 .2-5.4 2.4-6.2 6.2Z',
                fill: a,
                fillOpacity: i ? 0.55 : 0.45,
              }),
              (0, n.jsx)('circle', { cx: '50', cy: '28.6', r: '2.3', fill: a, fillOpacity: i ? 0.6 : 0.5 }),
              (0, n.jsx)('circle', { cx: '45.4', cy: '32.6', r: '1.4', fill: a, fillOpacity: i ? 0.6 : 0.5 }),
              (0, n.jsx)('circle', { cx: '54.6', cy: '34.4', r: '1.4', fill: a, fillOpacity: i ? 0.6 : 0.5 }),
            ],
          },
          i,
        ),
      ),
    ],
  })
}
function ai({ onBegin: a, onDone: e }) {
  let [t, i] = (0, s.useState)(0),
    r = (0, s.useRef)(!1),
    o = (0, s.useRef)([])
  ;(0, s.useEffect)(() => () => o.current.forEach((a) => clearTimeout(a)), [])
  let l = (0, s.useCallback)(() => {
      if (r.current) return
      ;((r.current = !0), a())
      try {
        navigator.vibrate?.(16)
      } catch {}
      i(1)
      let t = (a, e) => {
        o.current.push(window.setTimeout(e, a))
      }
      ;(t(380, () => i(2)), t(1150, () => i(3)), t(2550, () => i(4)), t(3600, e))
    }, [a, e]),
    c = ['aa-cover', t >= 1 && 'aa-break', t >= 2 && 'aa-open', t >= 3 && 'aa-rise', t >= 4 && 'aa-zoom']
      .filter(Boolean)
      .join(' '),
    d = (a, e, t) => ({
      fontFamily: j,
      fontWeight: 500,
      fontSize: w(a),
      letterSpacing: `${e}em`,
      paddingLeft: `${e}em`,
      textTransform: 'uppercase',
      color: t,
      margin: 0,
      lineHeight: 1.9,
    })
  return (0, n.jsxs)('div', {
    className: c,
    role: 'button',
    tabIndex: 0,
    'aria-label': 'Tap to open the invitation',
    onClick: l,
    onKeyDown: (a) => {
      ;('Enter' === a.key || ' ' === a.key) && (a.preventDefault(), l())
    },
    style: { '--bg': `url('${p.envelope}')` },
    children: [
      (0, n.jsx)('div', { className: 'aa-bg', 'aria-hidden': !0 }),
      (0, n.jsx)('div', {
        className: 'aa-art',
        children: (0, n.jsxs)('div', {
          className: 'aa-env',
          children: [
            (0, n.jsx)('div', { className: 'aa-interior', 'aria-hidden': !0 }),
            (0, n.jsx)('div', {
              className: 'aa-card',
              'aria-hidden': !0,
              children: (0, n.jsx)('img', { src: p.reveal, alt: '', draggable: !1 }),
            }),
            (0, n.jsx)('div', {
              className: 'aa-pocket',
              'aria-hidden': !0,
              style: { clipPath: W, WebkitClipPath: W },
              children: (0, n.jsx)('img', { src: p.envelope, alt: '', className: 'aa-img', draggable: !1 }),
            }),
            (0, n.jsxs)('div', {
              className: 'aa-pocket-copy',
              children: [
                (0, n.jsxs)('p', {
                  className: 'aa-cin',
                  style: {
                    ...$(1.1),
                    fontFamily: j,
                    fontWeight: 300,
                    fontSize: w(15),
                    color: u,
                    margin: 0,
                    lineHeight: 1.05,
                    letterSpacing: '.04em',
                  },
                  children: [
                    'S',
                    (0, n.jsx)('span', {
                      style: {
                        fontStyle: 'italic',
                        fontSize: '.5em',
                        color: b,
                        margin: '0 .28em',
                        verticalAlign: '.32em',
                      },
                      children: '&',
                    }),
                    'P',
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'aa-cin',
                  style: $(1.35),
                  children: (0, n.jsx)(G, { w: 15, gap: 2.2, animate: !1 }),
                }),
                (0, n.jsx)('p', {
                  className: 'aa-cin',
                  style: { ...$(1.55), ...d(2.9, 0.34, y) },
                  children: '29 November 2026',
                }),
                (0, n.jsx)('div', {
                  className: 'aa-tap',
                  style: { marginTop: w(4.4) },
                  children: (0, n.jsxs)('div', {
                    className: 'aa-cin',
                    style: $(2.3),
                    children: [
                      (0, n.jsx)('p', {
                        className: 'aa-pulse',
                        style: d(2.6, 0.46, x),
                        children: 'Tap to open',
                      }),
                      (0, n.jsx)('div', {
                        className: 'aa-bob',
                        style: { fontSize: w(3), color: b, lineHeight: 1, marginTop: w(0.6) },
                        children: '✦',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'aa-flap',
              'aria-hidden': !0,
              children: [
                (0, n.jsxs)('div', {
                  className: 'aa-face',
                  style: { clipPath: C, WebkitClipPath: C },
                  children: [
                    (0, n.jsx)('img', { src: p.envelope, alt: '', className: 'aa-img', draggable: !1 }),
                    (0, n.jsxs)('div', {
                      className: 'aa-lid-copy',
                      children: [
                        (0, n.jsx)('p', {
                          className: 'aa-cin',
                          style: { ...$(0.8), ...d(3.1, 0.5, u) },
                          children: 'Wedding',
                        }),
                        (0, n.jsx)('p', {
                          className: 'aa-cin',
                          style: { ...$(0.95), ...d(3.1, 0.5, u) },
                          children: 'Invitation',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'aa-face aa-face-back',
                  style: { clipPath: T, WebkitClipPath: T },
                }),
              ],
            }),
            (0, n.jsx)('div', {
              className: 'aa-seal',
              'aria-hidden': !0,
              children: (0, n.jsxs)('div', {
                className: 'aa-seal-stamp',
                children: [
                  (0, n.jsx)('span', { className: 'aa-seal-ring' }),
                  (0, n.jsxs)('div', {
                    className: 'aa-seal-breathe',
                    children: [
                      (0, n.jsx)('div', {
                        className: 'aa-half aa-half-l',
                        style: { clipPath: R, WebkitClipPath: R },
                        children: (0, n.jsx)(at, {}),
                      }),
                      (0, n.jsx)('div', {
                        className: 'aa-half aa-half-r',
                        style: { clipPath: A, WebkitClipPath: A },
                        children: (0, n.jsx)(at, {}),
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'aa-dust',
                    children: E.map((a, e) =>
                      (0, n.jsx)(
                        'i',
                        {
                          style: {
                            width: a.s,
                            height: a.s,
                            '--dx': `${a.dx}px`,
                            '--dy': `${a.dy}px`,
                            '--dl': `${a.dl}s`,
                          },
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
function ar(a, e, t, i) {
  let r = z(29),
    n = Array.from({ length: 170 }, (a, e) => 0.988 - 0.01 * Math.sin(0.83 * e) - 0.018 * r()),
    s = e / 2,
    o = t / 2,
    l = e / 2 - i,
    c = t / 2 - i
  a.beginPath()
  for (let e = 0; e <= 170; e++) {
    let t = ((e % 170) / 170) * Math.PI * 2,
      i = Math.cos(t),
      r = Math.sin(t),
      d = n[e % 170],
      h = s + Math.sign(i) * Math.pow(Math.abs(i), 0.6060606060606061) * l * d,
      p = o + Math.sign(r) * Math.pow(Math.abs(r), 0.6060606060606061) * c * d
    0 === e ? a.moveTo(h, p) : a.lineTo(h, p)
  }
  a.closePath()
}
function an(a, e, t) {
  let i = a.getImageData(0, 0, e, t).data,
    r = 0
  for (let a = 0; a < t; a += 8) for (let t = 0; t < e; t += 8) i[(a * e + t) * 4 + 3] > 60 && r++
  return r
}
function as({ onReveal: a }) {
  let e = (0, s.useRef)(null),
    t = (0, s.useRef)(null),
    [i, r] = (0, s.useState)(!1),
    [o, l] = (0, s.useState)(!1),
    [c, d] = (0, s.useState)([]),
    h = (0, s.useRef)({ down: !1, last: null, total: 0, scratched: !1, check: 0, flake: 0, id: 0, done: !1 }),
    p = (0, s.useCallback)(() => {
      let a = t.current
      if (!a) return
      let e = a.getBoundingClientRect()
      if (e.width < 4 || e.height < 4) return
      let i = Math.min(window.devicePixelRatio || 1, 2)
      ;((a.width = Math.round(e.width * i)), (a.height = Math.round(e.height * i)))
      let r = a.getContext('2d', { willReadFrequently: !0 })
      r &&
        (!(function (a, e, t, i) {
          let r = 8 * i
          ;(a.clearRect(0, 0, e, t),
            (a.globalCompositeOperation = 'source-over'),
            a.save(),
            (a.shadowColor = 'rgba(90,32,51,.4)'),
            (a.shadowBlur = 7 * i),
            (a.shadowOffsetY = 2 * i),
            ar(a, e, t, r),
            (a.fillStyle = '#b85c75'),
            a.fill(),
            a.restore(),
            a.save(),
            ar(a, e, t, r),
            a.clip())
          let n = a.createLinearGradient(0, 0, e, t)
          ;([
            [0, '#7d374b'],
            [0.18, '#c9738a'],
            [0.32, '#f3b3be'],
            [0.46, '#b45873'],
            [0.6, '#8f4259'],
            [0.74, '#e295a5'],
            [0.88, '#a8526b'],
            [1, '#7a3449'],
          ].forEach(([a, e]) => n.addColorStop(a, e)),
            (a.fillStyle = n),
            a.fillRect(0, 0, e, t))
          let s = z(71)
          for (let r = 0; r < 560; r++) {
            let r = s() * e,
              n = s() * t,
              o = (6 + 20 * s()) * i
            ;(a.beginPath(),
              a.moveTo(r, n),
              a.lineTo(r + (s() - 0.2) * o, n + (s() - 0.5) * o * 0.7),
              a.lineTo(r + (s() - 0.6) * o, n + s() * o * 0.8),
              a.closePath(),
              (a.fillStyle =
                s() > 0.5
                  ? `rgba(255,224,231,${(0.05 + 0.2 * s()).toFixed(3)})`
                  : `rgba(92,29,49,${(0.05 + 0.15 * s()).toFixed(3)})`),
              a.fill())
          }
          a.lineCap = 'round'
          for (let r = 0; r < 150; r++) {
            let n = s() * e,
              o = s() * t,
              l = r >= 90
            ;(a.beginPath(), a.moveTo(n, o))
            let c = 2 + Math.floor(3 * s())
            for (let e = 0; e < c; e++)
              ((n += (s() - 0.5) * 28 * i), (o += (s() - 0.5) * 18 * i), a.lineTo(n, o))
            ;((a.strokeStyle = l
              ? `rgba(255,224,231,${(0.25 + 0.3 * s()).toFixed(3)})`
              : `rgba(96,33,53,${(0.16 + 0.22 * s()).toFixed(3)})`),
              (a.lineWidth = (0.5 + 0.7 * s()) * i),
              a.stroke())
          }
          let o = a.createLinearGradient(0.1 * e, 0, 0.9 * e, t)
          ;(o.addColorStop(0, 'rgba(255,230,235,0)'),
            o.addColorStop(0.42, 'rgba(255,230,235,0)'),
            o.addColorStop(0.5, 'rgba(255,230,235,.3)'),
            o.addColorStop(0.58, 'rgba(255,230,235,0)'),
            o.addColorStop(1, 'rgba(255,230,235,0)'),
            (a.fillStyle = o),
            a.fillRect(0, 0, e, t),
            a.restore(),
            a.save(),
            ar(a, e, t, r + 7 * i),
            (a.strokeStyle = 'rgba(255,208,217,.6)'),
            (a.lineWidth = +i),
            a.stroke(),
            ar(a, e, t, r + 9 * i),
            (a.strokeStyle = 'rgba(95,33,54,.38)'),
            (a.lineWidth = +i),
            a.stroke(),
            ar(a, e, t, r),
            (a.strokeStyle = 'rgba(255,229,234,.95)'),
            (a.lineWidth = 2.4 * i),
            a.stroke(),
            a.restore())
        })(r, a.width, a.height, i),
        (h.current.total = an(r, a.width, a.height)))
    }, [])
  ;(0, s.useEffect)(() => {
    p()
    let a = () => {
      h.current.scratched || h.current.done || p()
    }
    return (window.addEventListener('resize', a), () => window.removeEventListener('resize', a))
  }, [p])
  let f = (0, s.useCallback)((a, e, t, i, r, n) => {
      let s = Array.from({ length: t }, () => ({
        id: ++h.current.id,
        x: a,
        y: e,
        dx: Math.round((Math.random() - 0.5) * i),
        dy: Math.round(r + Math.random() * n),
        rz: Math.round((Math.random() - 0.5) * 720),
        s: Math.round(4 + 6 * Math.random()),
      }))
      d((a) => [...a.slice(-30), ...s])
      let o = new Set(s.map((a) => a.id))
      window.setTimeout(() => d((a) => a.filter((a) => !o.has(a.id))), 1300)
    }, []),
    m = (0, s.useCallback)(() => {
      if (h.current.done) return
      ;((h.current.done = !0), r(!0), l(!0))
      try {
        navigator.vibrate?.([18, 40, 24])
      } catch {}
      let t = e.current
      if (t) {
        let a = t.getBoundingClientRect()
        f(a.width / 2, a.height / 2, 34, 320, -130, 280)
      }
      window.setTimeout(a, 280)
    }, [f, a]),
    g = (0, s.useCallback)(() => {
      let a = t.current,
        e = a?.getContext('2d', { willReadFrequently: !0 })
      a && e && h.current.total && 1 - an(e, a.width, a.height) / h.current.total >= 0.5 && m()
    }, [m]),
    x = (a) => {
      let e = a.currentTarget,
        t = e.getBoundingClientRect()
      return [(a.clientX - t.left) * (e.width / t.width), (a.clientY - t.top) * (e.height / t.height)]
    },
    b = (a, e) => {
      let t = a.getContext('2d', { willReadFrequently: !0 })
      if (!t) return
      let i = a.width / a.getBoundingClientRect().width
      ;((t.globalCompositeOperation = 'destination-out'),
        (t.lineCap = 'round'),
        (t.lineJoin = 'round'),
        (t.lineWidth = Math.max(26, 0.13 * a.getBoundingClientRect().width) * i))
      let r = h.current.last ?? [e[0] - 0.5, e[1]]
      ;(t.beginPath(),
        t.moveTo(r[0], r[1]),
        t.lineTo(e[0], e[1]),
        t.stroke(),
        (h.current.last = e),
        (h.current.scratched = !0))
    },
    v = (a) => {
      let t = e.current
      if (!t) return
      let i = performance.now()
      if (i - h.current.flake < 55) return
      h.current.flake = i
      let r = t.getBoundingClientRect()
      f(a.clientX - r.left, a.clientY - r.top, 2, 90, 30, 90)
    },
    N = () => {
      h.current.down && ((h.current.down = !1), (h.current.last = null), g())
    },
    S = (a, e, t) => ({
      fontFamily: j,
      fontWeight: 500,
      fontSize: w(a),
      letterSpacing: `${e}em`,
      paddingLeft: `${e}em`,
      textTransform: 'uppercase',
      color: t,
      margin: 0,
      lineHeight: 1.45,
    })
  return (0, n.jsxs)('div', {
    ref: e,
    className: 'aa-scratch aa-r',
    style: $(0.7),
    role: 'button',
    tabIndex: 0,
    'aria-label': o
      ? 'Sunday, 29 November 2026 at 9:30 AM'
      : 'Scratch to reveal the date — or press Enter',
    onKeyDown: (a) => {
      o || ('Enter' !== a.key && ' ' !== a.key) || (a.preventDefault(), m())
    },
    children: [
      (0, n.jsxs)('div', {
        className: `aa-dateblock${o ? ' on' : ''}`,
        'aria-hidden': !o,
        children: [
          (0, n.jsx)('p', { style: S(3.7, 0.5, u), children: 'November' }),
          (0, n.jsx)('p', {
            className: 'aa-foiltext',
            style: {
              fontFamily: j,
              fontWeight: 500,
              fontSize: w(24),
              lineHeight: 0.95,
              margin: `${w(0.4)} 0 ${w(0.2)}`,
            },
            children: '29',
          }),
          (0, n.jsx)('p', { style: S(3.7, 0.5, u), children: '2026' }),
          (0, n.jsx)(G, { w: 11, gap: 1.8, animate: !1 }),
          (0, n.jsx)('p', { style: S(3, 0.42, y), children: 'Sunday' }),
          (0, n.jsx)('p', {
            style: {
              fontFamily: j,
              fontWeight: 500,
              fontSize: w(5.4),
              letterSpacing: '.14em',
              paddingLeft: '.14em',
              color: u,
              margin: `${w(0.4)} 0 0`,
            },
            children: '9:30 AM',
          }),
        ],
      }),
      (0, n.jsx)('canvas', {
        ref: t,
        className: `aa-foilc${o ? ' gone' : ''}`,
        'aria-hidden': !0,
        onPointerDown: (a) => {
          if (!h.current.done) {
            a.preventDefault()
            try {
              a.currentTarget.setPointerCapture(a.pointerId)
            } catch {}
            if (((h.current.down = !0), (h.current.last = null), !i)) {
              r(!0)
              try {
                navigator.vibrate?.(8)
              } catch {}
            }
            ;(b(a.currentTarget, x(a)), v(a))
          }
        },
        onPointerMove: (a) => {
          if (!h.current.down || h.current.done) return
          ;(b(a.currentTarget, x(a)), v(a))
          let e = performance.now()
          e - h.current.check > 140 && ((h.current.check = e), g())
        },
        onPointerUp: N,
        onPointerCancel: N,
        onLostPointerCapture: N,
      }),
      (0, n.jsxs)('div', {
        className: `aa-hint${i ? ' off' : ''}`,
        'aria-hidden': !0,
        children: [
          (0, n.jsx)('div', { className: 'aa-hint-sheen' }),
          (0, n.jsx)('p', {
            style: {
              ...S(2.8, 0.42, '#4a1a28'),
              position: 'relative',
              textShadow: '0 1px 0 rgba(255,203,213,.75)',
            },
            children: 'Scratch to reveal',
          }),
          (0, n.jsx)('p', {
            style: {
              fontFamily: k,
              fontSize: w(8),
              color: '#4a1a28',
              margin: `${w(-0.4)} 0 0`,
              lineHeight: 1.2,
              position: 'relative',
              textShadow: '0 1px 0 rgba(255,203,213,.7)',
            },
            children: 'our date',
          }),
          (0, n.jsx)('svg', {
            className: 'aa-finger',
            viewBox: '0 0 24 24',
            'aria-hidden': !0,
            children: (0, n.jsx)('path', {
              fill: '#ffeff2',
              stroke: '#7d374b',
              strokeWidth: '.6',
              d: 'M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z',
            }),
          }),
        ],
      }),
      (0, n.jsx)('div', {
        className: 'aa-flakes',
        'aria-hidden': !0,
        children: c.map((a) =>
          (0, n.jsx)(
            'i',
            {
              className: 'aa-flake',
              style: {
                left: a.x,
                top: a.y,
                width: a.s,
                height: a.s,
                '--dx': `${a.dx}px`,
                '--dy': `${a.dy}px`,
                '--rz': `${a.rz}deg`,
              },
            },
            a.id,
          ),
        ),
      }),
    ],
  })
}
let ao = (a) => String(a).padStart(2, '0')
function al({ target: tg = m, label: lb = 'Countdown to the wedding' } = {}) {
  let [a, e] = (0, s.useState)(null)
  ;(0, s.useEffect)(() => {
    e(Date.now())
    let a = window.setInterval(() => e(Date.now()), 1e3)
    return () => clearInterval(a)
  }, [])
  let t = null === a ? null : Math.max(0, tg - a)
  if (0 === t)
    return (0, n.jsx)(O, {
      size: 4.6,
      color: u,
      style: { opacity: 1, animation: 'none' },
      children: 'The day is here — thank you for celebrating with us.',
    })
  let i =
    null === t
      ? [
          ['--', 'Days'],
          ['--', 'Hours'],
          ['--', 'Mins'],
          ['--', 'Secs'],
        ]
      : [
          [String(Math.floor(t / 864e5)), 'Days'],
          [ao(Math.floor(t / 36e5) % 24), 'Hours'],
          [ao(Math.floor(t / 6e4) % 60), 'Mins'],
          [ao(Math.floor(t / 1e3) % 60), 'Secs'],
        ]
  return (0, n.jsx)('div', {
    className: 'aa-tab',
    role: 'timer',
    'aria-label': lb,
    children: i.map(([a, e]) =>
      (0, n.jsxs)(
        'div',
        {
          children: [
            (0, n.jsx)(
              'span',
              {
                className: 'aa-tick',
                style: { fontFamily: j, fontWeight: 600, fontSize: w(7.4), color: u, lineHeight: 1.1 },
                children: a,
              },
              a,
            ),
            (0, n.jsx)('span', {
              style: {
                fontFamily: j,
                fontWeight: 700,
                fontSize: w(2.4),
                letterSpacing: '.3em',
                paddingLeft: '.3em',
                textTransform: 'uppercase',
                color: x,
                marginTop: w(0.4),
              },
              children: e,
            }),
          ],
        },
        e,
      ),
    ),
  })
}
let ap =
  ((r = []),
  [
    [
      [60, 110],
      [28, 106],
      [12, 80],
      [15, 56],
    ],
    [
      [15, 56],
      [17, 38],
      [27, 25],
      [40, 18],
    ],
  ].forEach((a) =>
    [0.22, 0.5, 0.8].forEach((e, t) => {
      let i,
        n,
        s,
        o,
        l =
          ((n =
            (i = 1 - e) ** 3 * a[0][0] +
            3 * i * i * e * a[1][0] +
            3 * i * e * e * a[2][0] +
            e ** 3 * a[3][0]),
          (s = i ** 3 * a[0][1] + 3 * i * i * e * a[1][1] + 3 * i * e * e * a[2][1] + e ** 3 * a[3][1]),
          (o =
            3 * i * i * (a[1][0] - a[0][0]) +
            6 * i * e * (a[2][0] - a[1][0]) +
            3 * e * e * (a[3][0] - a[2][0])),
          {
            x: n,
            y: s,
            a:
              (180 *
                Math.atan2(
                  3 * i * i * (a[1][1] - a[0][1]) +
                    6 * i * e * (a[2][1] - a[1][1]) +
                    3 * e * e * (a[3][1] - a[2][1]),
                  o,
                )) /
              Math.PI,
          })
      r.push({ x: N(l.x), y: N(l.y), a: N(l.a + (t % 2 ? 42 : -42)) })
    }),
  ),
  r)
function af({ delay: a }) {
  let e = (e) =>
    (0, n.jsxs)('g', {
      transform: e ? 'translate(120 0) scale(-1 1)' : void 0,
      children: [
        (0, n.jsx)('path', {
          className: 'aa-path',
          pathLength: 1,
          style: $(a),
          d: 'M60 110C28 106 12 80 15 56C17 38 27 25 40 18',
          fill: 'none',
          stroke: b,
          strokeWidth: '1.1',
          strokeLinecap: 'round',
        }),
        ap.map((e, t) =>
          (0, n.jsx)(
            'g',
            {
              transform: `translate(${e.x} ${e.y}) rotate(${e.a})`,
              children: (0, n.jsx)('g', {
                className: 'aa-leaf',
                style: $(a + 0.5 + 0.12 * t),
                children: (0, n.jsx)('ellipse', {
                  rx: '5.4',
                  ry: '2.2',
                  fill: t % 2 ? '#b99195' : '#cfa6aa',
                }),
              }),
            },
            t,
          ),
        ),
        (0, n.jsx)('g', {
          transform: 'translate(40 18)',
          children: (0, n.jsxs)('g', {
            className: 'aa-leaf',
            style: $(a + 1.4),
            children: [
              (0, n.jsx)('circle', { r: '2.6', fill: '#ecc3bc' }),
              (0, n.jsx)('circle', { r: '1', fill: b }),
            ],
          }),
        }),
      ],
    })
  return (0, n.jsxs)('div', {
    className: 'aa-r',
    style: { ...$(a), position: 'relative', width: w(30), height: w(30) },
    children: [
      (0, n.jsxs)('svg', {
        viewBox: '0 0 120 120',
        style: { position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' },
        'aria-hidden': !0,
        children: [
          e(!1),
          e(!0),
          (0, n.jsx)('path', {
            className: 'aa-path',
            pathLength: 1,
            style: $(a + 1.2),
            d: 'M60 1.5L65 10L60 18.5L55 10Z',
            fill: 'none',
            stroke: b,
            strokeWidth: '1.1',
            strokeLinecap: 'round',
          }),
        ],
      }),
      (0, n.jsxs)('p', {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          paddingTop: w(2),
          fontFamily: j,
          fontWeight: 300,
          fontSize: w(8.4),
          color: u,
          letterSpacing: '.04em',
        },
        children: [
          'S',
          (0, n.jsx)('span', {
            style: { fontStyle: 'italic', fontSize: '.55em', color: b, margin: '0 .22em' },
            children: '&',
          }),
          'P',
        ],
      }),
    ],
  })
}

// 3D photo carousel for "Our Moments": swipe / drag / tap / dots, hover tilt, auto-advance, full-screen view.
function MO() {
  let cnt = p.moments.length,
    [act, setAct] = (0, s.useState)(0),
    [dx, setDx] = (0, s.useState)(0),
    [open, setOpen] = (0, s.useState)(null),
    st = (0, s.useRef)({ down: !1, x0: 0, moved: !1, last: 0, vis: 0 }),
    root = (0, s.useRef)(null),
    tilt = (0, s.useRef)(null),
    go = (dir) => {
      ;((st.current.last = Date.now()), setAct((a) => (a + dir + cnt) % cnt))
    }
  ;(0, s.useEffect)(() => {
    let t = window.setInterval(() => {
      let r = root.current?.getBoundingClientRect()
      if (!r || null !== open || st.current.down || document.hidden) return
      let seen = r.top < 0.7 * window.innerHeight && r.bottom > 0.3 * window.innerHeight
      seen ? st.current.vis || (st.current.vis = Date.now()) : (st.current.vis = 0)
      seen && Date.now() - Math.max(st.current.last, st.current.vis) > 4500 && setAct((a) => (a + 1) % cnt)
    }, 3800)
    return () => clearInterval(t)
  }, [open, cnt])
  ;(0, s.useEffect)(() => {
    if (null === open) return
    let k = (ev) => {
      'Escape' === ev.key
        ? setOpen(null)
        : 'ArrowRight' === ev.key
          ? setOpen((a) => (a + 1) % cnt)
          : 'ArrowLeft' === ev.key && setOpen((a) => (a - 1 + cnt) % cnt)
    }
    return (window.addEventListener('keydown', k), () => window.removeEventListener('keydown', k))
  }, [open, cnt])
  let setTilt = (rx, ry) => {
    let el = tilt.current
    el && (el.style.setProperty('--rx', `${rx}deg`), el.style.setProperty('--ry', `${ry}deg`))
  }
  let down = (ev) => {
      ;((st.current.down = !0), (st.current.x0 = ev.clientX), (st.current.moved = !1))
    },
    move = (ev) => {
      let S = st.current
      if (S.down) {
        let d = ev.clientX - S.x0
        ;(Math.abs(d) > 6 && (S.moved = !0), setDx(d), setTilt(0, 0))
      } else if ('mouse' === ev.pointerType) {
        let r = root.current.getBoundingClientRect()
        setTilt(
          Math.max(-1, Math.min(1, -((ev.clientY - (r.top + 0.5 * r.height)) / (0.5 * r.height)))) * 7,
          Math.max(-1, Math.min(1, (ev.clientX - (r.left + 0.5 * r.width)) / (0.5 * r.width))) * 11,
        )
      }
    },
    up = () => {
      let S = st.current
      S.down && ((S.down = !1), Math.abs(dx) > 45 && go(dx < 0 ? 1 : -1), setDx(0))
    },
    leave = () => {
      ;(setTilt(0, 0), st.current.down && ((st.current.down = !1), setDx(0)))
    }
  let card = (src, i) => {
    let o = (((i - act + cnt + cnt / 2) % cnt) - cnt / 2) | 0,
      ao = Math.abs(o),
      hid = ao > 1,
      on = 0 === o,
      drag = on && 0 !== dx,
      tf = hid
        ? `translateZ(calc(var(--u) * -46)) scale(.82)`
        : `${drag ? `translateX(${dx}px) rotateY(${dx * 0.1}deg) ` : ''}translateX(calc(var(--u) * ${o * 44})) translateZ(calc(var(--u) * ${-ao * 28})) rotateY(${-o * 40}deg) scale(${on ? 1 : 0.9})`
    return (0, n.jsx)(
      'div',
      {
        className: `aa-mo-card${drag ? ' drag' : ''}`,
        style: {
          transform: tf,
          opacity: hid ? 0 : 1,
          zIndex: 10 - 3 * ao,
          pointerEvents: hid ? 'none' : 'auto',
          filter: on ? 'none' : 'brightness(.93) saturate(.95)',
        },
        onClick: () => {
          st.current.moved || (on ? setOpen(i) : go(o))
        },
        role: 'button',
        tabIndex: on ? 0 : -1,
        'aria-label': on ? 'View photo full screen' : 'Show this photo',
        onKeyDown: (ev) => {
          ;('Enter' === ev.key || ' ' === ev.key) && (ev.preventDefault(), on ? setOpen(i) : go(o))
        },
        children: (0, n.jsx)('div', {
          className: on ? 'aa-flt' : void 0,
          style: { '--fd': `${i * 0.7}s` },
          children: (0, n.jsxs)('div', {
            className: 'aa-mo-frame',
            ref: on ? tilt : void 0,
            children: [
              (0, n.jsx)('div', {
                className: 'aa-mo-mat',
                children: (0, n.jsx)('img', {
                  src,
                  alt: 'Sidharthan and Prinna',
                  draggable: !1,
                  loading: 'lazy',
                  decoding: 'async',
                }),
              }),
              (0, n.jsx)('div', { className: 'aa-shine', 'aria-hidden': !0 }),
            ],
          }),
        }),
      },
      i,
    )
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsxs)('div', {
        className: 'aa-r',
        style: { ...$(0.7), width: '100%' },
        children: [
          (0, n.jsxs)('div', {
            ref: root,
            className: 'aa-mo',
            onPointerDown: down,
            onPointerMove: move,
            onPointerUp: up,
            onPointerCancel: leave,
            onPointerLeave: leave,
            children: [
              p.moments.map(card),
              (0, n.jsx)('div', { className: 'aa-mo-floor', 'aria-hidden': !0 }),
            ],
          }),
          (0, n.jsx)('div', {
            className: 'aa-dots',
            role: 'tablist',
            children: p.moments.map((_, i) =>
              (0, n.jsx)(
                'button',
                {
                  type: 'button',
                  className: `aa-dot${i === act ? ' on' : ''}`,
                  'aria-label': `Photo ${i + 1} of ${cnt}`,
                  onClick: () => ((st.current.last = Date.now()), setAct(i)),
                },
                i,
              ),
            ),
          }),
          (0, n.jsx)(B, { size: 2.3, track: 0.26, color: y, delay: 1.4, style: { marginTop: w(1.6) }, children: 'Swipe · Tap a photo to view & zoom' }),
        ],
      }),
      null !== open &&
        createPortal(
          (0, n.jsx)(LB, {
            i: open,
            cnt,
            onClose: () => setOpen(null),
            onNav: (d2) => setOpen((a) => (a + d2 + cnt) % cnt),
          }),
          document.body,
        ),
    ],
  })
}

// Full-screen photo viewer with zoom: pinch, wheel, double-tap, +/- buttons; drag to pan; swipe to change photo.
function LB({ i, cnt, onClose, onNav }) {
  let [z, setZ] = (0, s.useState)({ k: 1, x: 0, y: 0 }),
    [dragging, setDragging] = (0, s.useState)(!1),
    img = (0, s.useRef)(null),
    pts = (0, s.useRef)(new Map()),
    g = (0, s.useRef)({ d0: 0, k0: 1, sx: 0, sy: 0, x0: 0, y0: 0, moved: !1, tap: 0, swiped: !1 })
  ;(0, s.useEffect)(() => setZ({ k: 1, x: 0, y: 0 }), [i])
  let fit = (k, x, y) => {
      let el = img.current
      if (!el || k <= 1.001) return { k: 1, x: 0, y: 0 }
      let kk = Math.min(5, k),
        mx = (el.offsetWidth * (kk - 1)) / 2,
        my = (el.offsetHeight * (kk - 1)) / 2
      return { k: kk, x: Math.max(-mx, Math.min(mx, x)), y: Math.max(-my, Math.min(my, y)) }
    },
    zoomBy = (f) => setZ((c) => fit(c.k * f, c.x, c.y)),
    toggle = () => setZ((c) => (c.k > 1.05 ? { k: 1, x: 0, y: 0 } : fit(2.6, 0, 0))),
    dist = () => {
      let a = [...pts.current.values()]
      return Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y)
    }
  let down = (ev) => {
      pts.current.set(ev.pointerId, { x: ev.clientX, y: ev.clientY })
      let G2 = g.current
      ;((G2.moved = !1), (G2.swiped = !1), (G2.sx = ev.clientX), (G2.sy = ev.clientY), (G2.x0 = z.x), (G2.y0 = z.y))
      2 === pts.current.size && ((G2.d0 = dist()), (G2.k0 = z.k))
      setDragging(!0)
      try {
        ev.currentTarget.setPointerCapture(ev.pointerId)
      } catch {}
    },
    move = (ev) => {
      if (!pts.current.has(ev.pointerId)) return
      pts.current.set(ev.pointerId, { x: ev.clientX, y: ev.clientY })
      let G2 = g.current
      if (2 === pts.current.size) {
        ;((G2.moved = !0), setZ((c) => fit(G2.k0 * (dist() / (G2.d0 || 1)), c.x, c.y)))
        return
      }
      let dx = ev.clientX - G2.sx,
        dy = ev.clientY - G2.sy
      ;(Math.abs(dx) + Math.abs(dy) > 8 && (G2.moved = !0), z.k > 1.001 && setZ((c) => fit(c.k, G2.x0 + dx, G2.y0 + dy)))
    },
    up = (ev) => {
      let G2 = g.current,
        dx = ev.clientX - G2.sx,
        dy = ev.clientY - G2.sy,
        wasPinch = pts.current.size > 1
      pts.current.delete(ev.pointerId)
      pts.current.size || setDragging(!1)
      if (wasPinch) return
      if (!G2.moved) {
        let now = Date.now()
        ;(now - G2.tap < 320 ? (toggle(), (G2.tap = 0)) : (G2.tap = now))
      } else if (z.k <= 1.001 && Math.abs(dx) > 60 && Math.abs(dx) > 1.5 * Math.abs(dy)) {
        ;((G2.swiped = !0), onNav(dx < 0 ? 1 : -1))
      }
    }
  return (0, n.jsxs)('div', {
    className: 'aa-lb',
    role: 'dialog',
    'aria-label': 'Photo viewer',
    onClick: (ev) => ev.target === ev.currentTarget && onClose(),
    onWheel: (ev) => zoomBy(Math.exp(-0.0022 * ev.deltaY)),
    children: [
      (0, n.jsx)('div', {
        className: 'aa-lb-stage',
        onClick: (ev) => ev.target === ev.currentTarget && onClose(),
        children: (0, n.jsx)('img', {
          ref: img,
          src: p.moments[i],
          alt: 'Sidharthan and Prinna',
          draggable: !1,
          onPointerDown: down,
          onPointerMove: move,
          onPointerUp: up,
          onPointerCancel: up,
          style: {
            transform: `translate(${z.x}px, ${z.y}px) scale(${z.k})`,
            transition: dragging ? 'none' : 'transform .25s ease',
            cursor: z.k > 1.001 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
          },
        }),
      }),
      (0, n.jsx)('button', { type: 'button', className: 'aa-lb-x', 'aria-label': 'Close', onClick: onClose, children: '×' }),
      (0, n.jsx)('button', { type: 'button', className: 'aa-lb-a aa-lb-l', 'aria-label': 'Previous photo', onClick: () => onNav(-1), children: '‹' }),
      (0, n.jsx)('button', { type: 'button', className: 'aa-lb-a aa-lb-r', 'aria-label': 'Next photo', onClick: () => onNav(1), children: '›' }),
      (0, n.jsxs)('div', {
        className: 'aa-lb-z',
        children: [
          (0, n.jsx)('button', { type: 'button', 'aria-label': 'Zoom out', onClick: () => zoomBy(1 / 1.5), children: '−' }),
          (0, n.jsx)('span', { children: `${Math.round(100 * z.k)}%` }),
          (0, n.jsx)('button', { type: 'button', 'aria-label': 'Zoom in', onClick: () => zoomBy(1.5), children: '+' }),
        ],
      }),
    ],
  })
}
function FCal({ date }) {
  let mt = /(\d{1,2})\s+([A-Za-z]{3})/.exec(date) || ['', '', '']
  return (0, n.jsxs)('div', {
    className: 'aa-cal',
    'aria-hidden': !0,
    children: [
      (0, n.jsx)('div', { className: 'aa-cal-h', children: mt[2].toUpperCase() }),
      (0, n.jsx)('div', { className: 'aa-cal-d', children: mt[1] }),
    ],
  })
}
function FClock() {
  return (0, n.jsxs)('svg', {
    viewBox: '0 0 24 24',
    'aria-hidden': !0,
    style: { width: w(10.5), height: w(10.5), display: 'block' },
    fill: 'none',
    stroke: x,
    strokeWidth: '1.4',
    strokeLinecap: 'round',
    children: [
      (0, n.jsx)('circle', { cx: '12', cy: '12', r: '9' }),
      (0, n.jsx)('path', { d: 'M12 6.8V12l3.6 2.2' }),
    ],
  })
}
// A6-style function card: glass card, hover lift, growing underline, click ripple.
function FC({ icon, label, children: kids, delay = 0, span }) {
  let [rips, setRips] = (0, s.useState)([])
  let down = (ev) => {
    let r = ev.currentTarget.getBoundingClientRect(),
      id = Math.random(),
      sz = 1.6 * Math.max(r.width, r.height)
    setRips((a) => [...a.slice(-3), { id, x: ev.clientX - r.left - sz / 2, y: ev.clientY - r.top - sz / 2, sz }])
    window.setTimeout(() => setRips((a) => a.filter((q) => q.id !== id)), 700)
  }
  return (0, n.jsx)('div', {
    className: 'aa-r',
    style: { ...$(delay), gridColumn: span ? '1 / -1' : void 0 },
    children: (0, n.jsxs)('div', {
      className: 'aa-fc',
      onPointerDown: down,
      children: [
        rips.map((q) =>
          (0, n.jsx)('span', { className: 'aa-rip', style: { left: q.x, top: q.y, width: q.sz, height: q.sz } }, q.id),
        ),
        (0, n.jsx)('div', { className: 'aa-fc-ic', children: icon }),
        (0, n.jsx)('p', { className: 'aa-fc-lbl', children: label }),
        kids,
        (0, n.jsx)('span', { className: 'aa-fc-bar' }),
      ],
    }),
  })
}
// Reveals its children when this block scrolls into view (for pages taller than the screen).
function Rv({ children: kids, style: st2, cls: cl = '' }) {
  let ref = (0, s.useRef)(null)
  ;(0, s.useEffect)(() => {
    let el = ref.current
    if (!el) return
    let io = new IntersectionObserver(
      ([en]) => (en.isIntersecting ? el.classList.add('aa-in') : el.classList.remove('aa-in')),
      { threshold: 0.18 },
    )
    return (io.observe(el), () => io.disconnect())
  }, [])
  return (0, n.jsx)('div', { ref, className: `aa-rvw ${cl}`, style: st2, children: kids })
}
function EV({ ev, art, flip }) {
  let cal = {
      title: `${ev.label} — Sidharthan & Prinna`,
      start: new Date(ev.startISO),
      end: new Date(ev.endISO),
      location: ev.venue,
      details: `${ev.label} of Sidharthan & Prinna at ${ev.venue}.`,
      uid: `${d}-${ev.key}@zetron.tech`,
    },
    body = (sz = 4, wt = 600) => ({ fontFamily: j, fontWeight: wt, fontSize: w(sz), color: y, margin: 0, lineHeight: 1.4 })
  return (0, n.jsx)(q, {
    id: `aa-${ev.key}`,
    art,
    flip,
    label: ev.label,
    tall: !0,
    children: (0, n.jsxs)('div', {
      className: 'aa-tcopy',
      children: [
        (0, n.jsxs)(Rv, {
          cls: 'aa-hdr',
          children: [
            (0, n.jsx)(B, { size: 3.8, track: 0.5, color: '#5c1f35', weight: 700, delay: 0.1, children: ev.label }),
            (0, n.jsx)(X, {
              size: 10,
              delay: 0.4,
              color: '#8a3550',
              style: { WebkitTextStroke: '.6px #8a3550', textShadow: '0 0 14px rgba(255,247,249,.95), 0 0 5px rgba(255,247,249,.9)' },
              children: ev.script,
            }),
            (0, n.jsx)(G, { w: 16, delay: 1, gap: 2.2 }),
          ],
        }),
        (0, n.jsxs)('div', {
          className: 'aa-fgrid',
          children: [
            (0, n.jsx)(Rv, {
              children: (0, n.jsxs)(FC, {
                icon: (0, n.jsx)(FCal, { date: ev.dateText.split(' · ')[0] }),
                label: 'Date',
                children: [(0, n.jsx)('p', { style: body(), children: ev.dateText })],
              }),
            }),
            (0, n.jsx)(Rv, {
              children: (0, n.jsxs)(FC, {
                icon: (0, n.jsx)(FClock, {}),
                label: 'Time',
                children: [(0, n.jsx)('p', { style: body(), children: ev.timeText })],
              }),
            }),
            (0, n.jsx)(Rv, {
              children: (0, n.jsxs)(FC, {
                icon: (0, n.jsx)(V, { size: w(10) }),
                label: 'Venue',
                children: [
                  (0, n.jsx)('p', { style: { ...body(4.6, 700), color: u }, children: ev.venueName }),
                  ev.venueSub && (0, n.jsx)('p', { style: { ...body(3.6, 600), fontStyle: 'italic' }, children: ev.venueSub }),
                ],
              }),
            }),
          ],
        }),
        (0, n.jsxs)(Rv, {
          style: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: w(5) },
          children: [
            (0, n.jsxs)('a', {
              href: ev.mapUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'aa-pill aa-r',
              style: { ...$(0.1), padding: `${w(3.4)} ${w(7)}`, fontSize: w(3.2) },
              children: [(0, n.jsx)(V, { size: w(4) }), 'View Location'],
            }),
            (0, n.jsx)('div', {
              className: 'aa-r',
              style: { ...$(0.35), marginTop: w(4) },
              children: (0, n.jsx)(al, { target: Date.parse(ev.startISO), label: `Countdown to the ${ev.label}` }),
            }),
            (0, n.jsx)('div', {
              className: 'aa-r',
              style: { ...$(0.6), marginTop: w(3.4) },
              children: (0, n.jsx)(c.AddToCalendar, {
                event: cal,
                fileName: `${ev.key}-sidharthan-prinna`,
                accent: x,
                color: x,
                bg: 'rgba(255,247,249,.7)',
                label: 'Add to calendar',
                style: { fontFamily: j, fontWeight: 700, fontSize: w(3), letterSpacing: '.18em' },
              }),
            }),
          ],
        }),
      ],
    }),
  })
}
export const WEDDING_ID = d
export default function () {
  let [a, e] = (0, s.useState)(!1),
    [t, i] = (0, s.useState)(!1)
  ;((0, s.useEffect)(() => {
    if (a) return
    ;((document.body.scrollTop = 0), (document.documentElement.scrollTop = 0))
    let e = document.body.style.overflow,
      t = document.documentElement.style.overflow
    return (
      (document.body.style.overflow = 'hidden'),
      (document.documentElement.style.overflow = 'hidden'),
      () => {
        ;((document.body.style.overflow = e), (document.documentElement.style.overflow = t))
      }
    )
  }, [a]),
    (0, s.useEffect)(() => {
      if (!a) return
      let e = Array.from(document.querySelectorAll('[data-aa-page]')),
        t = new IntersectionObserver(
          (a) =>
            a.forEach((a) => {
              a.intersectionRatio >= 0.3
                ? a.target.classList.add('aa-in')
                : a.isIntersecting || a.target.classList.remove('aa-in')
            }),
          { threshold: [0, 0.3] },
        )
      return (e.forEach((a) => t.observe(a)), () => t.disconnect())
    }, [a]),
    (0, s.useEffect)(() => {
      if (!a) return
      let e = !1,
        t = () => {
          e = !0
        },
        i = ['wheel', 'touchstart', 'keydown', 'pointerdown']
      i.forEach((a) => window.addEventListener(a, t, { passive: !0, capture: !0 }))
      let r = window.setTimeout(() => {
        let a = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY
        !e &&
          a < 40 &&
          document.getElementById('aa-date')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 8500)
      return () => {
        ;(clearTimeout(r), i.forEach((a) => window.removeEventListener(a, t, { capture: !0 })))
      }
    }, [a]))
  let r = (0, s.useCallback)(() => {
      document.dispatchEvent(new CustomEvent('app:ready'))
    }, []),
    d = (0, s.useCallback)(() => e(!0), [])
  return (0, n.jsx)(o.default, {
    src: '/audio/wedding-song.mp3',
    children: (0, n.jsxs)('div', {
      className: 'aa-root',
      children: [
        (0, n.jsx)('style', { children: L }),
        (0, n.jsx)(l.default, { slug: 'sidharthan-prinna' }),
        !a && (0, n.jsx)(ai, { onBegin: r, onDone: d }),
        (0, n.jsx)(_, {}),
        (0, n.jsxs)('main', {
          children: [
            (0, n.jsx)(q, {
              id: 'aa-reveal',
              art: p.reveal,
              label: 'The invitation',
              eager: !0,
              children: (0, n.jsxs)(J, {
                top: 15,
                bottom: 8,
                children: [
                  (0, n.jsx)(Y, { text: '“Let us take these seven steps together', delay: 0.2 }),
                  (0, n.jsx)(Y, { text: 'and be friends for life…”', delay: 0.9 }),
                  (0, n.jsx)(G, { w: 18, delay: 1.9, gap: 3.4 }),
                  (0, n.jsx)(B, {
                    size: 2.7,
                    track: 0.32,
                    delay: 2.2,
                    children: 'Together with their family',
                  }),
                  (0, n.jsx)('div', { style: { height: w(3) } }),
                  (0, n.jsx)(H, { text: 'Sidharthan', size: 7.2, delay: 2.5 }),
                  (0, n.jsx)(X, { size: 9, delay: 3.2, style: { margin: `${w(0.2)} 0` }, children: 'and' }),
                  (0, n.jsx)(H, { text: 'Prinna', size: 7.2, delay: 3.6 }),
                  (0, n.jsx)('div', { style: { height: w(3.4) } }),
                  (0, n.jsxs)(B, {
                    size: 2.6,
                    track: 0.28,
                    color: y,
                    delay: 4.2,
                    style: { lineHeight: 1.95 },
                    children: ['Request the pleasure of', (0, n.jsx)('br', {}), 'your company at their'],
                  }),
                  (0, n.jsx)(B, {
                    size: 3.4,
                    track: 0.46,
                    color: x,
                    delay: 4.5,
                    style: { marginTop: w(0.8) },
                    children: 'Wedding',
                  }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-date',
              art: p.foil,
              overlays: (0, n.jsx)(U, {}),
              label: 'The wedding date',
              eager: !0,
              children: (0, n.jsxs)(J, {
                top: 20,
                bottom: 16,
                children: [
                  (0, n.jsx)(B, { size: 3, track: 0.46, color: x, delay: 0.1, children: 'The Wedding' }),
                  (0, n.jsx)(G, { w: 16, delay: 0.4, gap: 2.6 }),
                  (0, n.jsx)(as, { onReveal: () => i(!0) }),
                  (0, n.jsx)('div', {
                    style: {
                      minHeight: w(25),
                      marginTop: w(3.4),
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    },
                    children: t
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(al, {}),
                            (0, n.jsx)('div', {
                              className: 'aa-fadein',
                              style: { ...$(0.5), marginTop: w(2.6) },
                              children: (0, n.jsx)(c.AddToCalendar, {
                                event: g,
                                fileName: 'sidharthan-prinna-wedding',
                                accent: x,
                                color: x,
                                bg: 'rgba(255,239,242,.7)',
                                label: 'Add to calendar',
                                style: {
                                  fontFamily: j,
                                  fontWeight: 600,
                                  fontSize: w(2.9),
                                  letterSpacing: '.2em',
                                },
                              }),
                            }),
                          ],
                        })
                      : (0, n.jsx)(O, {
                          size: 4,
                          delay: 1.1,
                          children: 'Scratch to reveal our day',
                        }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-moments',
              art: p.floral,
              flip: 'x',
              label: 'Our moments',
              tall: !0,
              children: (0, n.jsxs)('div', {
                className: 'aa-tcopy',
                style: { paddingTop: 'calc(var(--u) * 46)', paddingBottom: 'calc(var(--u) * 54)' },
                children: [
                  (0, n.jsxs)(Rv, {
                    cls: 'aa-hdr',
                    children: [
                      (0, n.jsx)(B, { size: 3.8, track: 0.5, color: '#5c1f35', weight: 700, delay: 0.1, children: 'Our Moments' }),
                      (0, n.jsx)(G, { w: 16, delay: 0.4, gap: 2.2 }),
                    ],
                  }),
                  (0, n.jsx)(Rv, { children: (0, n.jsx)(MO, {}) }),
                  (0, n.jsx)(Rv, {
                    style: { marginTop: w(2) },
                    children: (0, n.jsx)(X, { size: 8.4, delay: 0.3, color: '#8a3550', children: 'Made for each other' }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-family',
              art: p.floral,
              label: 'With blessings and love',
              children: (0, n.jsxs)(J, {
                top: 15,
                bottom: 28,
                wash: !0,
                children: [
                  (0, n.jsx)(B, { size: 3, track: 0.5, delay: 0.2, children: 'With' }),
                  (0, n.jsx)(X, { size: 8.8, delay: 0.5, children: 'Blessings and Love' }),
                  (0, n.jsx)(G, { w: 16, delay: 1.6, gap: 2.8 }),
                  [
                    ['Groom’s Parents', 'Mr. E K Ravi & Mrs. Sundari', 1.9],
                    ['Bride’s Parents', 'Late Ponnumani & Pushpalatha', 3.6],
                  ].map(([a, e, i], r) =>
                    (0, n.jsxs)(
                      'div',
                      {
                        style: { marginTop: r ? w(3.4) : 0 },
                        children: [
                          (0, n.jsx)(B, { size: 2.5, track: 0.42, color: x, delay: i, children: a }),
                          (0, n.jsx)(H, {
                            text: e,
                            size: 4.8,
                            caps: !1,
                            track: 0,
                            delay: i + 0.3,
                            style: { margin: `${w(0.9)} 0 ${w(0.3)}`, lineHeight: 1.3 },
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                  (0, n.jsx)(G, { w: 10, delay: 5.6, gap: 3.2 }),
                  (0, n.jsxs)(O, {
                    size: 4,
                    delay: 5.9,
                    color: u,
                    children: [
                      'Your presence and blessings',
                      (0, n.jsx)('br', {}),
                      'will make our day complete.',
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)(EV, { ev: EVENTS.sangeet, art: p.floral, flip: 'x' }),
            (0, n.jsx)(EV, { ev: EVENTS.wedding, art: p.floral }),
            (0, n.jsx)(EV, { ev: EVENTS.reception, art: p.floral, flip: 'x' }),
            (0, n.jsx)(c.ScrollIndicatorMarker, {}),
            (0, n.jsx)(q, {
              id: 'aa-closing',
              art: p.floral,
              flip: 'y',
              label: 'With love',
              children: (0, n.jsxs)(J, {
                top: 13,
                bottom: 10,
                children: [
                  (0, n.jsx)(af, { delay: 0.8 }),
                  (0, n.jsxs)(O, {
                    size: 4.5,
                    delay: 1.3,
                    color: u,
                    style: { marginTop: w(3.4), lineHeight: 1.6 },
                    children: [
                      'We look forward to celebrating',
                      (0, n.jsx)('br', {}),
                      'our special day with you.',
                    ],
                  }),
                  (0, n.jsx)(G, { w: 14, delay: 1.9, gap: 3 }),
                  (0, n.jsx)(X, { size: 7, delay: 2.2, children: 'Sidharthan & Prinna' }),
                  (0, n.jsx)(B, {
                    size: 2.6,
                    track: 0.46,
                    color: x,
                    delay: 3,
                    style: { marginTop: w(1.2) },
                    children: '29 · 11 · 2026',
                  }),
                ],
              }),
            }),
          ],
        }),
        a && (0, n.jsx)(c.ScrollIndicator, { color: x, bottom: 18 }),
      ],
    }),
  })
}
