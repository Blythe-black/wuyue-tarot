const majors=[
["愚人","The Fool","自由,启程,信任","新的旅程邀请你轻装前行。答案不在万无一失，而在愿意迈出第一步。","冲动或迟疑正在消耗勇气。先看清风险，再决定是停留还是起身。","给未知留一点空间，做一个小而真实的尝试。","○","RWS_Tarot_00_Fool.jpg"],
["魔术师","The Magician","创造,意志,资源","你已经拥有让想法落地的工具，专注会让分散的能量聚拢。","能力没有消失，只是被怀疑或错误的目标分散了。","选定一件事，把现有资源真正用起来。","∞","RWS_Tarot_01_Magician.jpg"],
["女祭司","The High Priestess","直觉,静观,秘密","答案正在安静处浮现。此刻不必急于解释，先听见内在的感受。","你可能忽略了直觉，或把沉默误读为答案。","减少外界噪音，记录反复出现的感受。","☾","RWS_Tarot_02_High_Priestess.jpg"],
["皇后","The Empress","滋养,丰盛,感受","让事物生长需要耐心、照料与对身体感受的尊重。","过度付出或忽视自己，会让丰盛变成消耗。","先照顾好承载一切的你自己。","❀","RWS_Tarot_03_Empress.jpg"],
["皇帝","The Emperor","秩序,边界,担当","清晰的结构与边界，会把混乱变成可以承担的责任。","控制欲或僵硬的规则，正在阻碍真实的交流。","说清规则，也给变化留出余地。","山","RWS_Tarot_04_Emperor.jpg"],
["教皇","The Hierophant","传统,学习,信念","成熟的经验能够为你提供框架，向可信赖的人学习并非失去独立。","旧有规则可能已经不再适合你，需要理解后再选择偏离。","辨认哪些信念属于你，哪些只是习惯。","门","RWS_Tarot_05_Hierophant.jpg"],
["恋人","The Lovers","选择,联结,一致","真正的选择来自价值观的一致，而不只是眼前的吸引。","关系或决定中存在回避，先面对内在的分裂。","选择那个让你更完整、更诚实的方向。","结","RWS_Tarot_06_Lovers.jpg"],
["战车","The Chariot","前进,掌控,决心","方向已经出现，克制冲突的力量会带你穿过阻碍。","用力过猛或方向不一，会让前进变成内耗。","先校准方向，再坚定行动。","矢","RWS_Tarot_07_Chariot.jpg"],
["力量","Strength","勇气,温柔,耐性","真正的力量不是压制，而是温柔地容纳本能与恐惧。","自我怀疑让你低估了内在韧性。","用耐心而非强迫回应眼前的难题。","狮","RWS_Tarot_08_Strength.jpg"],
["隐士","The Hermit","独处,寻找,智慧","暂时离开喧嚣会让真正重要的事变得清晰。","孤立或过度思考，可能让独处失去滋养。","保留安静，也允许可信的人靠近。","灯","RWS_Tarot_09_Hermit.jpg"],
["命运之轮","Wheel of Fortune","转机,周期,变化","周期正在转动，接受变化会让你看见新的位置与机会。","对旧阶段的执着，让变化显得更剧烈。","分清可控与不可控，顺势调整。","轮","RWS_Tarot_10_Wheel_of_Fortune.jpg"],
["正义","Justice","平衡,真相,责任","事实与选择都有重量，诚实面对因果会带来清晰。","偏见或逃避责任正在影响判断。","回到事实，做经得起回看的决定。","衡","RWS_Tarot_11_Justice.jpg"],
["倒吊人","The Hanged Man","暂停,换位,臣服","暂停不是浪费，它让你从新的角度理解正在发生的事。","无意义的拖延或自我牺牲，需要被重新审视。","放下一个执念，看看视野如何改变。","水","RWS_Tarot_12_Hanged_Man.jpg"],
["死神","Death","结束,蜕变,新生","一个阶段需要完整结束，才能为新的生命腾出位置。","抗拒告别会延长已经结束的故事。","为离开之物致意，然后清理空间。","蝶","RWS_Tarot_13_Death.jpg"],
["节制","Temperance","调和,疗愈,流动","不同力量正在寻找新的比例，温和持续比极端更有效。","失衡与急迫让恢复难以发生。","把步伐放稳，找到可长期维持的节奏。","泉","RWS_Tarot_14_Temperance.jpg"],
["恶魔","The Devil","束缚,欲望,觉察","看见欲望与恐惧如何塑造选择，锁链才可能被松开。","你开始意识到束缚并非不可改变。","诚实说出你正在依赖或逃避什么。","锁","RWS_Tarot_15_Devil.jpg"],
["高塔","The Tower","震动,揭示,重建","不稳固的结构正在显露裂缝，真相虽然突然，却带来自由。","你可能在延迟必要的改变，内在震动仍在积累。","先确保安全，再从真实处重建。","雷","RWS_Tarot_16_Tower.jpg"],
["星星","The Star","希望,净化,指引","经历动荡后，希望以安静而真实的方式重新出现。","暂时的失望遮住了仍然存在的光。","做一件能恢复信任与生命力的小事。","星","RWS_Tarot_17_Star.jpg"],
["月亮","The Moon","潜意识,迷雾,感受","并非所有事都已清晰，梦、情绪和直觉正在提供线索。","迷雾开始散去，但仍需辨别恐惧与事实。","不要在情绪最浓时做最终判断。","月","RWS_Tarot_18_Moon.jpg"],
["太阳","The Sun","明朗,活力,喜悦","清晰、温暖与生命力正在回归，允许自己被看见。","快乐可能被疲惫或过高期待遮住。","走到光里，分享真实而简单的喜悦。","日","RWS_Tarot_19_Sun.jpg"],
["审判","Judgement","召唤,觉醒,回应","过去的经验正在汇成清晰的召唤，你被邀请作出回应。","自责或害怕评价，让你听不见真正的声音。","停止重复审判自己，回应已经清楚的事。","钟","RWS_Tarot_20_Judgement.jpg"],
["世界","The World","完成,整合,圆满","一个周期趋于完整，你拥有带着经验进入下一阶段的能力。","最后一步尚未完成，或你还不愿承认已经抵达。","庆祝完成，并明确下一段旅程的入口。","环","RWS_Tarot_21_World.jpg"]]
const suits=[["Wands","权杖","火","行动、热情与创造力","冲动、耗竭或方向分散"],["Cups","圣杯","水","情感、关系与直觉","情绪淤积、幻想或界限模糊"],["Swords","宝剑","风","思想、沟通与真相","焦虑、冲突或过度思考"],["Pentacles","星币","土","现实、身体与长期积累","匮乏感、停滞或过度执着结果"]]
const ranks=[["王牌","Ace","起点","纯粹的潜能正在出现"],["二","Two","选择","两股力量需要被看见与协调"],["三","Three","生长","合作与累积开始显出成果"],["四","Four","稳定","结构带来安全，也可能形成停滞"],["五","Five","挑战","摩擦揭示真正需要调整的地方"],["六","Six","过渡","经验正在带你走向较平衡的位置"],["七","Seven","考验","坚持与辨别需要同时存在"],["八","Eight","推进","能量正在加速，专注决定方向"],["九","Nine","成熟","接近完成之际更需要守住边界"],["十","Ten","完成","一个周期达到饱和，需要承接或放下"],["侍从","Page","讯息","好奇心带来新的学习与消息"],["骑士","Knight","追寻","目标召唤你行动，也提醒你留意节奏"],["王后","Queen","掌握","成熟的感受力让能量得到滋养"],["国王","King","担当","承担、决断与稳定影响力成为主题"]]
const img=f=>`https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(f)}`
const deck=majors.map((m,id)=>({id,name:m[0],en:m[1],keys:m[2].split(","),up:m[3],rev:m[4],advice:m[5],symbol:m[6],image:img(m[7])}))
suits.forEach((s,si)=>ranks.forEach((r,ri)=>deck.push({id:22+si*14+ri,name:s[1]+r[0],en:`${r[1]} of ${s[0]}`,keys:[r[2],s[1],s[3].split("、")[0]],up:`${r[3]}。在${s[3]}的领域里，你被邀请以更清醒的方式回应当下。`,rev:`${s[4]}可能正在显现。${r[3]}，但需要先处理失衡与迟疑。`,advice:"把感受落在一个小而真实的行动上，不必一次完成全部。",symbol:s[2],image:img(`${s[0]}${String(ri+1).padStart(2,"0")}.jpg`)})))
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)]
let spread="single",mode="touch",drawn=[],revealed=0,reading="",selectedQuestion="我未来一个月的爱情运势会如何发展？"
const pos=()=>spread==="single"?["此刻"]:["过去","现在","未来"]
function show(id){$$(".screen").forEach(x=>x.classList.remove("active"));$("#"+id).classList.add("active");if(id==="history")renderHistory();scrollTo(0,0)}
$$("[data-screen]").forEach(b=>b.onclick=()=>show(b.dataset.screen))
$("#question").oninput=e=>$("#counter").textContent=`${e.target.value.length} / 120`
$$("[data-question]").forEach(b=>b.onclick=()=>{$$("[data-question]").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedQuestion=b.dataset.question==="custom"?"":b.dataset.question;$("#custom-question-wrap").hidden=b.dataset.question!=="custom";if(b.dataset.question==="custom")$("#question").focus()})
function currentQuestion(){return $("#custom-question-wrap").hidden?selectedQuestion:$("#question").value.trim()}
$$("[data-spread]").forEach(b=>b.onclick=()=>{$$("[data-spread]").forEach(x=>x.classList.remove("active"));b.classList.add("active");spread=b.dataset.spread})
$$("[data-mode]").forEach(b=>b.onclick=()=>setMode(b.dataset.mode))
function setMode(next){mode=next;$$("[data-mode]").forEach(x=>x.classList.toggle("active",x.dataset.mode===mode));$("#switch-mode").textContent=mode==="touch"?"改用随机生成":"改用点击抽取";$("#draw-help").textContent=mode==="touch"?"横向浏览完整的 78 张牌，凭直觉点击一张":"让牌堆替你完成选择，结果仍使用安全随机数生成";$("#fan").classList.toggle("veiled",mode==="random");$("#random-draw").classList.toggle("hidden",mode!=="random")}
function rand(max){const a=new Uint32Array(1);crypto.getRandomValues(a);return Math.floor(a[0]/2**32*max)}
function makeDraw(){const pool=deck.map(c=>c.id);return pos().map(position=>{const i=rand(pool.length);return{id:pool.splice(i,1)[0],position,reversed:rand(2)===1}})}
$("#begin").onclick=()=>{drawn=makeDraw();revealed=0;renderSlots();$$("#fan button").forEach(b=>b.classList.remove("chosen"));$("#draw-title").textContent=spread==="single"?"选择一张牌":"选择第一张 · 过去";$("#spread-title").textContent=spread==="single"?"一张牌 · 今日指引":"三张牌 · 时光之流";setMode(mode);show("draw")}
function backHTML(){return`<div class="back"></div>`}
$("#fan").innerHTML=Array.from({length:78},(_,i)=>`<button style="--i:${i}" aria-label="选择第 ${i+1} 张牌">${backHTML()}</button>`).join("")
$("#fan").onclick=e=>{const b=e.target.closest("button");if(mode==="touch"&&b&&!b.classList.contains("chosen")){b.classList.add("chosen");choose()}}
function cardHTML(c,rev=false){return`<div class="card ${rev?"reversed":""}"><div class="card-inner"><img src="${c.image}" alt="${c.name}牌面"><div class="fallback" hidden>${c.symbol}</div><div class="caption"><b>${c.name}</b><small>${c.en}</small></div></div></div>`}
document.addEventListener("error",e=>{if(e.target.tagName==="IMG"){e.target.hidden=true;e.target.nextElementSibling.hidden=false}},true)
function renderSlots(){$("#slots").innerHTML=drawn.map((d,i)=>`<div class="slot"><small>${d.position}</small>${i<revealed?cardHTML(deck[d.id],d.reversed):`<span>${i+1}</span>`}</div>`).join("")}
function choose(){if(revealed>=drawn.length)return;revealed++;navigator.vibrate?.(35);renderSlots();if(revealed<drawn.length)$("#draw-title").textContent=`再抽一张 · ${pos()[revealed]}`;else{$("#draw-title").textContent="牌已经回应";setTimeout(renderResult,700)}}
$("#random-draw").onclick=()=>{if(revealed>=drawn.length)return;$("#random-draw").disabled=true;const timer=setInterval(()=>{choose();if(revealed>=drawn.length){clearInterval(timer);$("#random-draw").disabled=false}},480)}
const brightNames=new Set(["愚人","魔术师","皇后","恋人","战车","力量","命运之轮","正义","节制","星星","太阳","审判","世界"])
function isBright(d,c){return !d.reversed&&(brightNames.has(c.name)||["王牌","三","六","九","十"].some(r=>c.name.endsWith(r)))}
function cardParagraph(d,i){const c=deck[d.id],meaning=d.reversed?c.rev:c.up,place=["曾经发生的事并没有消失，它正从过去影响你此刻的判断。","眼下最值得留意的，是你正在如何回应这件事。","未来不是被写死的结局，而是当下选择逐渐形成的方向。"][i];if(isBright(d,c))return`${place}${c.name}${d.reversed?"逆位":"正位"}带来${c.keys.join("、")}的气息。${meaning}这是一张愿意为你保留希望的牌：相信已经出现的善意与机会，也请主动向前走一步，让好的可能真正落到生活里。`;return`${place}${c.name}${d.reversed?"逆位":"正位"}让${c.keys.join("、")}成为需要看清的主题。${meaning}它不是坏事必然发生的宣判，而是在提醒你放慢一点，辨认压力、边界和被忽略的事实；先保护好自己，再做一个可以承担的小决定。`}
function buildReading(){const q=currentQuestion(),ctx=q?`关于「${q}」`:"关于你此刻的生命状态";if(spread==="single"){const d=drawn[0],c=deck[d.id],warm=isBright(d,c);return`${ctx}，${c.name}以${d.reversed?"逆":"正"}位来到你面前。${d.reversed?c.rev:c.up}\n\n${warm?"这张牌肯定了你正在积累的力量，可以更相信自己的感受，并把握眼前真实可行的机会。":"这并不是对未来的惩罚或定论，而是一盏提醒你看清风险与内心需要的灯。"}${c.advice}`};const parts=drawn.map(cardParagraph);const bright=drawn.filter((d,i)=>isBright(d,deck[d.id])).length;const summary=bright>=2?`三张牌连在一起，像是在说：旧经验已经把你带到新的门口，现在的诚实与行动会让未来逐渐明朗。你不需要一次想通全部，只要珍惜已经出现的支持，保持边界，并完成下一件具体的小事，好转就会有可以落脚的位置。`:`三张牌没有要求你害怕未来，它们只是把容易被忽略的部分照亮：过去的惯性、当下的压力，以及仍可改变的方向。先别急着给自己下结论，留意事实和身体感受，守住边界，再选择一个最小而稳妥的行动；当你愿意照顾自己，迷雾就会一点点散开。`;return`${parts.join("\n\n")}\n\n${summary}`}
function renderResult(){reading=buildReading();const q=currentQuestion();$("#result-question").textContent=q?`关于「${q}」`:"";$("#reading-title").textContent=spread==="single"?"今日启示":"三牌共读";$("#result-cards").innerHTML=drawn.map((d,i)=>{const c=deck[d.id];return`<article class="result-card" style="--delay:${i*160}ms"><small>${d.position}</small>${cardHTML(c,d.reversed)}<h3>${c.name} <span>${d.reversed?"逆位":"正位"}</span></h3><p>${c.keys.join(" · ")}</p></article>`}).join("");$("#reading-text").innerHTML=reading.split("\n\n").map(p=>`<p>${p}</p>`).join("");$("#save").disabled=false;$("#save").textContent="保存本次占卜";show("result")}
$("#again").onclick=()=>show("prepare")
$("#copy").onclick=async()=>{await navigator.clipboard.writeText(reading);$("#copy").textContent="已复制";setTimeout(()=>$("#copy").textContent="复制解读",1200)}
const KEY="wuyue-tarot-history-v1"
function history(){try{const x=JSON.parse(localStorage.getItem(KEY)||"[]");return Array.isArray(x)?x:[]}catch{return[]}}
$("#save").onclick=()=>{const h=history();h.unshift({id:crypto.randomUUID(),date:new Date().toISOString(),question:currentQuestion(),spread,cards:drawn,reading});localStorage.setItem(KEY,JSON.stringify(h.slice(0,30)));$("#save").disabled=true;$("#save").textContent="已存入记录"}
function renderHistory(){const h=history(),el=$("#history-list");if(!h.length){el.innerHTML=`<div class="empty"><span class="sigil">☾</span><h3>尚无记录</h3><p>每一次抽牌，都是与当下的一次相遇。</p></div>`;return}el.innerHTML=h.map(r=>`<article class="record"><time>${new Date(r.date).toLocaleDateString("zh-CN",{month:"long",day:"numeric"})}</time><div><small>${r.spread==="single"?"今日指引":"过去 · 现在 · 未来"}</small><h3>${r.question||"未写下的问题"}</h3><p>${r.cards.map(d=>deck[d.id].name+(d.reversed?"（逆）":"")).join(" · ")}</p><details><summary>展开解读</summary>${r.reading.split("\n\n").map(x=>`<p>${x}</p>`).join("")}</details></div><button data-del="${r.id}" aria-label="删除">×</button></article>`).join("");$$("[data-del]").forEach(b=>b.onclick=()=>{localStorage.setItem(KEY,JSON.stringify(history().filter(x=>x.id!==b.dataset.del)));renderHistory()})}
$("#switch-mode").onclick=()=>setMode(mode==="touch"?"random":"touch")
