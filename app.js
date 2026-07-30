const majors=[
["愚人","The Fool","自由,启程,信任","新的旅程邀请你轻装前行。答案不在万无一失，而在愿意迈出第一步。","冲动或迟疑正在消耗勇气。先看清风险，再决定是停留还是起身。","给未知留一点空间，做一个小而真实的尝试。","○","RWS Tarot 00 Fool.jpg"],
["魔术师","The Magician","创造,意志,资源","你已经拥有让想法落地的工具，专注会让分散的能量聚拢。","能力没有消失，只是被怀疑或错误的目标分散了。","选定一件事，把现有资源真正用起来。","∞","RWS Tarot 01 Magician.jpg"],
["女祭司","The High Priestess","直觉,静观,秘密","答案正在安静处浮现。此刻不必急于解释，先听见内在的感受。","你可能忽略了直觉，或把沉默误读为答案。","减少外界噪音，记录反复出现的感受。","☾","RWS Tarot 02 High Priestess.jpg"],
["皇后","The Empress","滋养,丰盛,感受","让事物生长需要耐心、照料与对身体感受的尊重。","过度付出或忽视自己，会让丰盛变成消耗。","先照顾好承载一切的你自己。","❀","RWS Tarot 03 Empress.jpg"],
["皇帝","The Emperor","秩序,边界,担当","清晰的结构与边界，会把混乱变成可以承担的责任。","控制欲或僵硬的规则，正在阻碍真实的交流。","说清规则，也给变化留出余地。","山","RWS Tarot 04 Emperor.jpg"],
["教皇","The Hierophant","传统,学习,信念","成熟的经验能够为你提供框架，向可信赖的人学习并非失去独立。","旧有规则可能已经不再适合你，需要理解后再选择偏离。","辨认哪些信念属于你，哪些只是习惯。","门","RWS Tarot 05 Hierophant.jpg"],
["恋人","The Lovers","选择,联结,一致","真正的选择来自价值观的一致，而不只是眼前的吸引。","关系或决定中存在回避，先面对内在的分裂。","选择那个让你更完整、更诚实的方向。","结","RWS Tarot 06 Lovers.jpg"],
["战车","The Chariot","前进,掌控,决心","方向已经出现，克制冲突的力量会带你穿过阻碍。","用力过猛或方向不一，会让前进变成内耗。","先校准方向，再坚定行动。","矢","RWS Tarot 07 Chariot.jpg"],
["力量","Strength","勇气,温柔,耐性","真正的力量不是压制，而是温柔地容纳本能与恐惧。","自我怀疑让你低估了内在韧性。","用耐心而非强迫回应眼前的难题。","狮","RWS Tarot 08 Strength.jpg"],
["隐士","The Hermit","独处,寻找,智慧","暂时离开喧嚣会让真正重要的事变得清晰。","孤立或过度思考，可能让独处失去滋养。","保留安静，也允许可信的人靠近。","灯","RWS Tarot 09 Hermit.jpg"],
["命运之轮","Wheel of Fortune","转机,周期,变化","周期正在转动，接受变化会让你看见新的位置与机会。","对旧阶段的执着，让变化显得更剧烈。","分清可控与不可控，顺势调整。","轮","RWS Tarot 10 Wheel of Fortune.jpg"],
["正义","Justice","平衡,真相,责任","事实与选择都有重量，诚实面对因果会带来清晰。","偏见或逃避责任正在影响判断。","回到事实，做经得起回看的决定。","衡","RWS Tarot 11 Justice.jpg"],
["倒吊人","The Hanged Man","暂停,换位,臣服","暂停不是浪费，它让你从新的角度理解正在发生的事。","无意义的拖延或自我牺牲，需要被重新审视。","放下一个执念，看看视野如何改变。","水","RWS Tarot 12 Hanged Man.jpg"],
["死神","Death","结束,蜕变,新生","一个阶段需要完整结束，才能为新的生命腾出位置。","抗拒告别会延长已经结束的故事。","为离开之物致意，然后清理空间。","蝶","RWS Tarot 13 Death.jpg"],
["节制","Temperance","调和,疗愈,流动","不同力量正在寻找新的比例，温和持续比极端更有效。","失衡与急迫让恢复难以发生。","把步伐放稳，找到可长期维持的节奏。","泉","RWS Tarot 14 Temperance.jpg"],
["恶魔","The Devil","束缚,欲望,觉察","看见欲望与恐惧如何塑造选择，锁链才可能被松开。","你开始意识到束缚并非不可改变。","诚实说出你正在依赖或逃避什么。","锁","RWS Tarot 15 Devil.jpg"],
["高塔","The Tower","震动,揭示,重建","不稳固的结构正在显露裂缝，真相虽然突然，却带来自由。","你可能在延迟必要的改变，内在震动仍在积累。","先确保安全，再从真实处重建。","雷","RWS Tarot 16 Tower.jpg"],
["星星","The Star","希望,净化,指引","经历动荡后，希望以安静而真实的方式重新出现。","暂时的失望遮住了仍然存在的光。","做一件能恢复信任与生命力的小事。","星","RWS Tarot 17 Star.jpg"],
["月亮","The Moon","潜意识,迷雾,感受","并非所有事都已清晰，梦、情绪和直觉正在提供线索。","迷雾开始散去，但仍需辨别恐惧与事实。","不要在情绪最浓时做最终判断。","月","RWS Tarot 18 Moon.jpg"],
["太阳","The Sun","明朗,活力,喜悦","清晰、温暖与生命力正在回归，允许自己被看见。","快乐可能被疲惫或过高期待遮住。","走到光里，分享真实而简单的喜悦。","日","RWS Tarot 19 Sun.jpg"],
["审判","Judgement","召唤,觉醒,回应","过去的经验正在汇成清晰的召唤，你被邀请作出回应。","自责或害怕评价，让你听不见真正的声音。","停止重复审判自己，回应已经清楚的事。","钟","RWS Tarot 20 Judgement.jpg"],
["世界","The World","完成,整合,圆满","一个周期趋于完整，你拥有带着经验进入下一阶段的能力。","最后一步尚未完成，或你还不愿承认已经抵达。","庆祝完成，并明确下一段旅程的入口。","环","RWS Tarot 21 World.jpg"]]
const suits=[["Wands","权杖","火","行动、热情与创造力","冲动、耗竭或方向分散"],["Cups","圣杯","水","情感、关系与直觉","情绪淤积、幻想或界限模糊"],["Swords","宝剑","风","思想、沟通与真相","焦虑、冲突或过度思考"],["Pentacles","星币","土","现实、身体与长期积累","匮乏感、停滞或过度执着结果"]]
const ranks=[["王牌","Ace","起点","纯粹的潜能正在出现"],["二","Two","选择","两股力量需要被看见与协调"],["三","Three","生长","合作与累积开始显出成果"],["四","Four","稳定","结构带来安全，也可能形成停滞"],["五","Five","挑战","摩擦揭示真正需要调整的地方"],["六","Six","过渡","经验正在带你走向较平衡的位置"],["七","Seven","考验","坚持与辨别需要同时存在"],["八","Eight","推进","能量正在加速，专注决定方向"],["九","Nine","成熟","接近完成之际更需要守住边界"],["十","Ten","完成","一个周期达到饱和，需要承接或放下"],["侍从","Page","讯息","好奇心带来新的学习与消息"],["骑士","Knight","追寻","目标召唤你行动，也提醒你留意节奏"],["王后","Queen","掌握","成熟的感受力让能量得到滋养"],["国王","King","担当","承担、决断与稳定影响力成为主题"]]
const img=f=>`https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(f)}?width=600`
const deck=majors.map((m,id)=>({id,name:m[0],en:m[1],keys:m[2].split(","),up:m[3],rev:m[4],advice:m[5],symbol:m[6],image:img(m[7])}))
suits.forEach((s,si)=>ranks.forEach((r,ri)=>deck.push({id:22+si*14+ri,name:s[1]+r[0],en:`${r[1]} of ${s[0]}`,keys:[r[2],s[1],s[3].split("、")[0]],up:`${r[3]}。在${s[3]}的领域里，你被邀请以更清醒的方式回应当下。`,rev:`${s[4]}可能正在显现。${r[3]}，但需要先处理失衡与迟疑。`,advice:"把感受落在一个小而真实的行动上，不必一次完成全部。",symbol:s[2],image:img(`${s[0]==="Pentacles"?"Pents":s[0]}${String(ri+1).padStart(2,"0")}.jpg`)})))
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)]
let spread="single",mode="touch",drawn=[],revealed=0,reading="",selectedQuestion="我未来一个月的爱情运势会如何发展？",selectedCategory="love"
const pos=()=>spread==="single"?["此刻"]:["过去","现在","未来"]
function show(id){$$(".screen").forEach(x=>x.classList.remove("active"));$("#"+id).classList.add("active");if(id==="history")renderHistory();scrollTo(0,0)}
$$("[data-screen]").forEach(b=>b.onclick=()=>show(b.dataset.screen))
$("#question").oninput=e=>$("#counter").textContent=`${e.target.value.length} / 120`
$$("[data-question]").forEach(b=>b.onclick=()=>{$$("[data-question]").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedQuestion=b.dataset.question==="custom"?"":b.dataset.question;selectedCategory=b.dataset.category;$("#custom-question-wrap").hidden=b.dataset.question!=="custom";if(b.dataset.question==="custom")$("#question").focus()})
function currentQuestion(){return $("#custom-question-wrap").hidden?selectedQuestion:$("#question").value.trim()}
$$("[data-spread]").forEach(b=>b.onclick=()=>{$$("[data-spread]").forEach(x=>x.classList.remove("active"));b.classList.add("active");spread=b.dataset.spread})
$$("[data-mode]").forEach(b=>b.onclick=()=>setMode(b.dataset.mode))
function setMode(next){mode=next;$$("[data-mode]").forEach(x=>x.classList.toggle("active",x.dataset.mode===mode));$("#switch-mode").textContent=mode==="touch"?"改用随机生成":"改用点击抽取";$("#draw-help").textContent=mode==="touch"?"让视线掠过推开的牌阵，凭直觉点击一张":"让牌堆替你完成选择，结果仍使用安全随机数生成";$("#fan").classList.toggle("veiled",mode==="random");$("#random-draw").classList.toggle("hidden",mode!=="random")}
function rand(max){const a=new Uint32Array(1);crypto.getRandomValues(a);return Math.floor(a[0]/2**32*max)}
function makeDraw(){const pool=deck.map(c=>c.id);return pos().map(position=>{const i=rand(pool.length);return{id:pool.splice(i,1)[0],position,reversed:rand(2)===1}})}
$("#begin").onclick=()=>{drawn=makeDraw();revealed=0;renderSlots();$$("#fan button").forEach(b=>b.classList.remove("chosen"));$("#draw-title").textContent=spread==="single"?"选择一张牌":"选择第一张 · 过去";$("#spread-title").textContent=spread==="single"?"一张牌 · 今日指引":"三张牌 · 时光之流";setMode(mode);show("draw")}
function backHTML(){return`<div class="back"></div>`}
$("#fan").innerHTML=Array.from({length:39},(_,i)=>{const x=(i-19)/19;return`<button style="--angle:${x*56}deg;--lift:${x*x*90}px;--z:${39-Math.abs(i-19)}" aria-label="选择第 ${i+1} 张牌">${backHTML()}</button>`}).join("")
$("#fan").onclick=e=>{const b=e.target.closest("button");if(mode==="touch"&&b&&!b.classList.contains("chosen")){b.classList.add("chosen");choose()}}
function cardHTML(c,rev=false){return`<div class="card ${rev?"reversed":""}"><div class="card-inner"><img src="${c.image}" alt="${c.name}牌面" decoding="async"><div class="fallback" hidden>${c.symbol}</div></div></div>`}
document.addEventListener("error",e=>{if(e.target.tagName!=="IMG")return;const image=e.target;if(!image.dataset.retried){image.dataset.retried="1";setTimeout(()=>{image.src=image.src.replace(/([?&])retry=\\d+/,"$1")+`${image.src.includes("?")?"&":"?"}retry=${Date.now()}`},900);return}image.hidden=true;image.nextElementSibling.hidden=false},true)
function renderSlots(){$("#slots").innerHTML=drawn.map((d,i)=>`<div class="slot"><small>${d.position}</small>${i<revealed?cardHTML(deck[d.id],d.reversed):`<span>${i+1}</span>`}</div>`).join("")}
function choose(){if(revealed>=drawn.length)return;revealed++;navigator.vibrate?.(35);renderSlots();if(revealed<drawn.length)$("#draw-title").textContent=`再抽一张 · ${pos()[revealed]}`;else{$("#draw-title").textContent="牌已经回应";setTimeout(renderResult,700)}}
$("#random-draw").onclick=()=>{if(revealed>=drawn.length)return;$("#random-draw").disabled=true;const timer=setInterval(()=>{choose();if(revealed>=drawn.length){clearInterval(timer);$("#random-draw").disabled=false}},480)}
const brightNames=new Set(["愚人","魔术师","皇后","恋人","战车","力量","命运之轮","正义","节制","星星","太阳","审判","世界"])
function isBright(d,c){return !d.reversed&&(brightNames.has(c.name)||["王牌","三","六","九","十"].some(r=>c.name.endsWith(r)))}
function readingCategory(){if(selectedCategory!=="custom")return selectedCategory;const q=currentQuestion();if(/爱|恋|感情|桃花|正缘|对象|复合|婚/.test(q))return"love";if(/财|钱|收入|赚钱|投资|消费/.test(q))return"wealth";if(/学|考试|升学|成绩|论文/.test(q))return"study";if(/事业|工作|职场|跳槽|升职|创业/.test(q))return"career";return"relationship"}
const categoryWords={
love:{bright:"感情里正在出现更鲜明的吸引力与靠近机会。单身者容易遇到愿意主动交流、让你产生好感的潜在对象；已有关注对象时，对方释放善意或关系升温的可能性较高。",hard:"感情中的信号并不完全一致，对方可能仍在观察、犹豫，或没有准备好给出明确承诺。先看行动而不是只听暧昧表达，避免因为渴望结果而过度投入。",summaryGood:"整体爱情走向偏积极，桃花与关系推进都具备现实可能。让自己出现在能够认识新人的场合，也给喜欢的人清晰但不过度的回应，真正适合你的关系会在稳定互动中变得明确。",summaryHard:"这组牌提醒你，爱情目前更需要筛选而不是追赶。模糊回应、忽冷忽热和反复消耗都值得警惕；守住标准，把注意力放回自己的生活，反而更容易为可靠的桃花腾出位置。"},
wealth:{bright:"财运中有较具体的赚钱机会正在形成，可能来自新项目、副业、合作资源或现有能力的变现。主动询问、展示能力并及时跟进，会比等待好运更容易增加收入。",hard:"近期财运容易受到冲动消费、回款延迟或判断过于乐观的影响。不要因为焦虑追逐高风险收益，先核对合同、成本和现金流，保住本金比短期翻倍更重要。",summaryGood:"整体财运具备上升空间，机会更偏向凭能力获得的收入，而非没有依据的横财。集中资源做最有把握的一件事，谈清价格与分配方式，收益会更容易落袋。",summaryHard:"这组牌不建议冒险求快，未来一段时间应优先控制支出、避免替人担保，并谨慎核实所谓轻松赚钱的机会。把现金流稳住之后，真正值得投入的方向才会显现。"},
career:{bright:"事业上正在出现被看见、承担更重要任务或进入新平台的机会。你的经验足以支撑下一步，主动表达方案、争取资源或投递更合适的岗位，会推动职位与影响力上升。",hard:"当前事业阻力多半来自职责不清、沟通错位或长期透支，而不是能力不足。不要继续默默承担所有问题，应明确优先级、留下沟通记录，并判断这份工作是否仍值得投入。",summaryGood:"整体事业趋势有推进和升级的迹象，关键是主动让成果被看见。把目标拆成可交付的结果，抓住近期出现的合作或岗位窗口，你会比想象中更接近下一阶段。",summaryHard:"事业暂时需要调整策略，硬撑只会延长消耗。先修正合作边界和工作节奏，同时准备作品、履历或新的选择；当退路变清楚，你就更有力量作出真正有利的决定。"},
study:{bright:"学习状态正在回升，理解力、专注度或考试发挥都有改善空间。建立固定复习节奏并及时输出练习，会让知识从“看懂”变成真正掌握，近期目标有望取得明显进展。",hard:"学业上的问题更像注意力分散、计划过满或基础环节存在缺口。不要用熬夜制造努力感，先找出最常失分的部分，以短时高频复习替代一次性的突击。",summaryGood:"整体学业趋势向好，努力能够转化为可见成绩。接下来最重要的是持续练习、主动求助和按时复盘，稳定执行会让你在考试或阶段目标上获得满意反馈。",summaryHard:"这组牌提醒你及时止住无效消耗。减少比较和自我否定，重新安排优先级，把每天能完成的小目标做扎实；基础补稳以后，成绩与信心会一起恢复。"},
relationship:{bright:"人际关系里存在和解、被理解或认识可靠伙伴的机会。真诚表达需求、主动释放善意，会吸引愿意互相支持的人，也有助于让原本疏远的关系重新建立信任。",hard:"目前的人际困扰与边界模糊、信息误解或一方付出过多有关。不要急于讨好或替别人承担情绪，先确认事实，并对让你不舒服的行为清楚说“不”。",summaryGood:"整体人际氛围会逐渐转暖，可靠关系来自双向回应而不是单方面维持。把时间留给尊重你、愿意沟通的人，新的合作与友谊会更自然地出现。",summaryHard:"这组牌要求你重新筛选关系。减少卷入流言、控制和情绪拉扯，对反复越界的人保持距离；当你不再用委屈换取和平，真正健康的人际连接才会留下。"}
}
function cardParagraph(d,i){const c=deck[d.id],tone=isBright(d,c),guide=categoryWords[readingCategory()],place=["过去的经历仍在影响这件事。","现在是局势最关键的转折处。","未来的走向将由接下来的选择推动。"][i];return`${place}${c.name}${d.reversed?"逆位":"正位"}呈现出${c.keys.join("、")}的能量。${d.reversed?c.rev:c.up}${tone?guide.bright:guide.hard}`}
function buildReading(){const q=currentQuestion(),ctx=q?`关于「${q}」`:"关于你此刻最在意的事情",guide=categoryWords[readingCategory()],reminder="牌面呈现的是当下能量的发展方向，并非不可改变的结论；你的选择与行动仍会推动结果变化。";if(spread==="single"){const d=drawn[0],c=deck[d.id],tone=isBright(d,c);return`${ctx}，${c.name}以${d.reversed?"逆":"正"}位出现。${d.reversed?c.rev:c.up}\n\n${tone?guide.bright:guide.hard}\n\n${tone?guide.summaryGood:guide.summaryHard}${reminder}`};const parts=drawn.map(cardParagraph),bright=drawn.filter(d=>isBright(d,deck[d.id])).length;return`${parts.join("\n\n")}\n\n${bright>=2?guide.summaryGood:guide.summaryHard}${reminder}`}
function renderResult(){reading=buildReading();const q=currentQuestion();$("#result-question").textContent=q?`关于「${q}」`:"";$("#reading-title").textContent=spread==="single"?"今日启示":"三牌共读";$("#result-cards").innerHTML=drawn.map((d,i)=>{const c=deck[d.id];return`<article class="result-card" style="--delay:${i*160}ms"><small>${d.position}</small>${cardHTML(c,d.reversed)}<h3>${c.name} <span>${d.reversed?"逆位":"正位"}</span></h3><p>${c.keys.join(" · ")}</p></article>`}).join("");$("#reading-text").innerHTML=reading.split("\n\n").map(p=>`<p>${p}</p>`).join("");$("#save").disabled=false;$("#save").textContent="保存本次占卜";show("result")}
$("#again").onclick=()=>show("prepare")
$("#copy").onclick=async()=>{await navigator.clipboard.writeText(reading);$("#copy").textContent="已复制";setTimeout(()=>$("#copy").textContent="复制解读",1200)}
const KEY="wuyue-tarot-history-v1"
function history(){try{const x=JSON.parse(localStorage.getItem(KEY)||"[]");return Array.isArray(x)?x:[]}catch{return[]}}
$("#save").onclick=()=>{const h=history();h.unshift({id:crypto.randomUUID(),date:new Date().toISOString(),question:currentQuestion(),spread,cards:drawn,reading});localStorage.setItem(KEY,JSON.stringify(h.slice(0,30)));$("#save").disabled=true;$("#save").textContent="已存入记录"}
function renderHistory(){const h=history(),el=$("#history-list");if(!h.length){el.innerHTML=`<div class="empty"><span class="sigil">☾</span><h3>尚无记录</h3><p>每一次抽牌，都是与当下的一次相遇。</p></div>`;return}el.innerHTML=h.map(r=>`<article class="record"><time>${new Date(r.date).toLocaleDateString("zh-CN",{month:"long",day:"numeric"})}</time><div><small>${r.spread==="single"?"今日指引":"过去 · 现在 · 未来"}</small><h3>${r.question||"未写下的问题"}</h3><p>${r.cards.map(d=>deck[d.id].name+(d.reversed?"（逆）":"")).join(" · ")}</p><details><summary>展开解读</summary>${r.reading.split("\n\n").map(x=>`<p>${x}</p>`).join("")}</details></div><button data-del="${r.id}" aria-label="删除">×</button></article>`).join("");$$("[data-del]").forEach(b=>b.onclick=()=>{localStorage.setItem(KEY,JSON.stringify(history().filter(x=>x.id!==b.dataset.del)));renderHistory()})}
$("#switch-mode").onclick=()=>setMode(mode==="touch"?"random":"touch")
