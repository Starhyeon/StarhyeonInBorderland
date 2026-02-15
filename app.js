// ==================== CURRICULUM DATA ====================
const GRADES = [
  {name:"Kindergarten",short:"K",icon:"🎨",cls:"grade-k",desc:"Building number sense, recognizing shapes, and comparing quantities.",topics:[
    {name:"Counting & Cardinality",summary:"Count to 100 by ones and tens. Write numbers 0-20.",concepts:["Count forward from any given number","Connect counting to cardinality","Compare two groups using matching"],examples:["Count: 1, 2, 3, ... 20","How many apples? 🍎🍎🍎🍎 = 4"],practice:[{q:"What comes after 7?",a:"8"},{q:"Count: ● ● ● ● ● ●",a:"6"}]},
    {name:"Basic Shapes",summary:"Identify 2D and 3D shapes by attributes.",concepts:["Name shapes: circle, square, triangle, rectangle","Describe by sides and corners","Identify in real world"],examples:["A square has 4 equal sides","A circle has 0 sides"],practice:[{q:"How many sides does a triangle have?",a:"3"}]},
    {name:"Comparing Numbers",summary:"Compare numbers 1-10 using greater/less/equal.",concepts:["Use matching to compare groups","More than, fewer than, same as","Compare numerals up to 10"],examples:["7 > 4","3 < 9","5 = 5"],practice:[{q:"Which is greater: 6 or 2?",a:"6"}]},
    {name:"Addition & Subtraction Intro",summary:"Add and subtract within 5 using objects and equations.",concepts:["Addition = putting together","Subtraction = taking apart","Decompose numbers to 5"],examples:["2 + 3 = 5","4 - 1 = 3"],practice:[{q:"3 + 2 = ?",a:"5"},{q:"5 - 3 = ?",a:"2"}]},
    {name:"Measurement & Sorting",summary:"Compare measurable attributes. Classify objects.",concepts:["Compare length, weight, height","Longer, shorter, heavier, lighter","Sort and count by category"],examples:["Pencil is longer than crayon","Apple is heavier than feather"],practice:[{q:"Which is taller: a lamp or a cup?",a:"A lamp"}]}
  ]},
  {name:"1st Grade",short:"1",icon:"✏️",cls:"grade-1",desc:"Addition/subtraction within 20, place value, measuring lengths.",topics:[
    {name:"Addition & Subtraction within 20",summary:"Fluently add and subtract within 20.",concepts:["Add within 20 using counting on and making 10","Subtract within 20","Relationship between addition and subtraction"],examples:["Making 10: 8+5 = 8+2+3 = 13","Doubles: 6+6=12, so 6+7=13"],practice:[{q:"9 + 7 = ?",a:"16"},{q:"14 - 6 = ?",a:"8"}]},
    {name:"Place Value (Tens & Ones)",summary:"Two-digit numbers are tens and ones.",concepts:["10 ones = 1 ten","Tens digit tells how many tens","Compare two-digit numbers"],examples:["42 = 4 tens + 2 ones","56 > 38"],practice:[{q:"How many tens in 73?",a:"7"}]},
    {name:"Measurement & Data",summary:"Measure lengths. Tell time to hour/half-hour.",concepts:["Measure by laying objects end-to-end","Order objects by length","Read analog clocks"],examples:["Desk is 6 crayons long","3:00 = hour hand on 3"],practice:[{q:"Hour hand on 7, minute on 12. Time?",a:"7:00"}]},
    {name:"Shapes & Geometry",summary:"Shape attributes. Partition into equal parts.",concepts:["Triangles: closed, 3 sides","Partition into halves and fourths","Terms: halves, fourths, quarters"],examples:["Rectangle cut in half = 2 equal pieces"],practice:[{q:"How many equal parts in fourths?",a:"4"}]}
  ]},
  {name:"2nd Grade",short:"2",icon:"📝",cls:"grade-2",desc:"Operations within 100, intro multiplication, time & money.",topics:[
    {name:"Addition & Subtraction within 100",summary:"Fluently add/subtract within 100.",concepts:["Add up to four two-digit numbers","Mentally add/subtract 10 or 100","Explain strategies with models"],examples:["36+47: 30+40=70, 6+7=13, total=83","82-25: 82-20=62, 62-5=57"],practice:[{q:"55 + 37 = ?",a:"92"},{q:"80 - 43 = ?",a:"37"}]},
    {name:"Intro to Multiplication",summary:"Equal groups build multiplication foundations.",concepts:["Arrays and repeated addition","Skip count by 2s, 5s, 10s","Equations for equal groups"],examples:["3 rows of 4 = 3×4 = 12","4 groups of 2 = 8"],practice:[{q:"5 groups of 3 = ?",a:"15"}]},
    {name:"Time & Money",summary:"Tell time to 5 minutes. Count coins.",concepts:["Read analog/digital clocks","Coin values: penny to quarter","Money word problems"],examples:["Quarter=25¢, Dime=10¢","2 quarters + 3 dimes = 80¢"],practice:[{q:"3 dimes and 2 nickels = ?",a:"40 cents"}]},
    {name:"Measurement",summary:"Measure in inches, feet, cm, meters.",concepts:["Select appropriate units/tools","Measure with two different units","Add/subtract lengths"],examples:["Book is about 10 inches","7in + 5in = 12in"],practice:[{q:"Which is longer: 1 foot or 1 inch?",a:"1 foot"}]},
    {name:"Place Value to 1,000",summary:"Three-digit numbers as hundreds, tens, ones.",concepts:["100 = 10 tens","Read/write/compare to 1,000","Skip count by 5s, 10s, 100s"],examples:["347 = 3 hundreds + 4 tens + 7 ones"],practice:[{q:"How many hundreds in 829?",a:"8"}]}
  ]},
  {name:"3rd Grade",short:"3",icon:"✖️",cls:"grade-3",desc:"Multiplication/division fluency, fractions, area & perimeter.",topics:[
    {name:"Multiplication & Division Facts",summary:"Fluently multiply and divide within 100.",concepts:["Know all single-digit products","Multiplication as groups, arrays, area","Multiplication ↔ division relationship"],examples:["7 × 8 = 56","56 ÷ 8 = 7","3 × 5 = 5 × 3 = 15"],practice:[{q:"6 × 9 = ?",a:"54"},{q:"42 ÷ 7 = ?",a:"6"}]},
    {name:"Fractions",summary:"Fractions as parts of a whole. Compare fractions.",concepts:["a/b = a parts of size 1/b","Fractions on a number line","Larger denominator = smaller pieces"],examples:["1/4 pizza = 1 out of 4 slices","2/3 > 2/5","3/3 = 1 whole"],practice:[{q:"Which is larger: 1/2 or 1/3?",a:"1/2"}]},
    {name:"Area & Perimeter",summary:"Area in square units. Perimeter as sum of sides.",concepts:["Area = length × width","Perimeter = sum of all sides","Same perimeter ≠ same area"],examples:["4×3 rect: Area=12, Perimeter=14"],practice:[{q:"Area of 5 × 4 rectangle?",a:"20 square units"}]},
    {name:"Patterns & Rounding",summary:"Arithmetic patterns. Round to nearest 10/100.",concepts:["Even × any = even","Round to nearest 10: check ones digit","Round to nearest 100: check tens digit"],examples:["473 → 470 (nearest 10)","473 → 500 (nearest 100)"],practice:[{q:"Round 68 to nearest 10.",a:"70"}]},
    {name:"Multi-Step Word Problems",summary:"Two-step problems with all four operations.",concepts:["Identify what's being asked","Break into simpler steps","Estimate to check"],examples:["3 bags × 8 marbles − 5 = 19"],practice:[{q:"4 boxes of 6 crayons, minus 3 broken = ?",a:"21"}]}
  ]},
  {name:"4th Grade",short:"4",icon:"📐",cls:"grade-4",desc:"Multi-digit arithmetic, equivalent fractions, decimals, angles.",topics:[
    {name:"Multi-Digit Multiplication",summary:"Multiply up to 4 digits by 1 digit, 2 by 2.",concepts:["Area models and partial products","Standard algorithm","Estimate for reasonableness"],examples:["23×4: (20×4)+(3×4)=92","15×13=195"],practice:[{q:"34 × 6 = ?",a:"204"}]},
    {name:"Long Division",summary:"Divide up to 4 digits by 1 digit with remainders.",concepts:["Division as equal groups","Place-value step-by-step","Interpret remainders"],examples:["96÷4=24","85÷6=14 R1"],practice:[{q:"72 ÷ 8 = ?",a:"9"}]},
    {name:"Equivalent Fractions",summary:"Generate and recognize equivalent fractions.",concepts:["Multiply num & denom by same number","Simplify by common factors","Benchmarks: 0, 1/2, 1"],examples:["1/2 = 2/4 = 3/6","3/4 > 2/3"],practice:[{q:"Fraction equivalent to 2/3?",a:"4/6"}]},
    {name:"Decimals Intro",summary:"Decimal notation for tenths and hundredths.",concepts:["1/10 = 0.1, 1/100 = 0.01","Compare decimals to hundredths","Decimals on number line"],examples:["0.3 = 3/10","0.25 < 0.3"],practice:[{q:"Write 7/10 as decimal.",a:"0.7"}]},
    {name:"Angles & Symmetry",summary:"Angle measurement. Lines of symmetry.",concepts:["Angles in degrees","Right=90°, straight=180°","Line symmetry = fold to match"],examples:["Square: 4 right angles = 360°"],practice:[{q:"Degrees in a right angle?",a:"90"}]}
  ]},
  {name:"5th Grade",short:"5",icon:"📊",cls:"grade-5",desc:"Decimals, fraction ops, volume, order of operations, coordinates.",topics:[
    {name:"Decimal Operations",summary:"Add, subtract, multiply, divide decimals.",concepts:["Line up decimal points for +/-","Multiply as whole numbers, place decimal","Divide decimals by whole numbers"],examples:["3.25+1.8=5.05","2.4×3=7.2"],practice:[{q:"4.5 + 2.75 = ?",a:"7.25"}]},
    {name:"Fraction Operations",summary:"Add, subtract, multiply fractions.",concepts:["Common denominators for unlike fractions","Multiply: num×num, denom×denom","a/b = a ÷ b"],examples:["1/3+1/4=7/12","2/3×3/5=2/5"],practice:[{q:"1/2 + 1/3 = ?",a:"5/6"}]},
    {name:"Volume",summary:"Volume of rectangular prisms.",concepts:["Volume = l × w × h","Cubic units (cm³, in³)","Additive volume of combined prisms"],examples:["4×3×2 = 24 cubic units"],practice:[{q:"Volume of 5×2×3?",a:"30 cubic units"}]},
    {name:"Order of Operations",summary:"PEMDAS: Parentheses, Exponents, Mult/Div, Add/Sub.",concepts:["Parentheses first","Mult/div left to right","Add/sub left to right"],examples:["3+4×2=11 (not 14)","(3+4)×2=14"],practice:[{q:"(6+2) × 3 = ?",a:"24"}]},
    {name:"Coordinate Plane",summary:"Graph points with ordered pairs (x,y).",concepts:["x-axis horizontal, y-axis vertical","(x,y) = horizontal then vertical","Origin = (0,0)"],examples:["(3,5) = right 3, up 5"],practice:[{q:"x-coordinate in (7,2)?",a:"7"}]}
  ]},
  {name:"6th Grade",short:"6",icon:"📈",cls:"grade-6",desc:"Ratios, expressions/equations, statistics, number system.",topics:[
    {name:"Ratios & Proportions",summary:"Ratio concepts and reasoning.",concepts:["Ratio compares two quantities (3:2)","Equivalent ratios: 3:2=6:4","Unit rates: per item, per hour"],examples:["3 apples=$6 → 1=$2","2:3 flour:sugar → 6:9"],practice:[{q:"Simplify 12:8.",a:"3:2"}]},
    {name:"Expressions & Equations",summary:"Write/evaluate expressions. Solve one-step equations.",concepts:["Variables = unknowns","Expressions from word problems","Solve x+5=12, 3y=18"],examples:["6 more than n → n+6","x+5=12 → x=7"],practice:[{q:"Solve: x - 4 = 9",a:"x = 13"}]},
    {name:"The Number System",summary:"Divide fractions. Negative numbers.",concepts:["Divide fractions: invert and multiply","Negative numbers on number line","Integer comparison"],examples:["2/3 ÷ 1/4 = 8/3","-3 < -1 < 0 < 2"],practice:[{q:"1/2 ÷ 1/3 = ?",a:"3/2 or 1½"}]},
    {name:"Statistics & Data",summary:"Measures of center. Statistical variability.",concepts:["Mean, median, mode","Data variability","Dot plots, histograms, box plots"],examples:["3,5,5,7,10 → Mean=6, Median=5, Mode=5"],practice:[{q:"Mean of 4,8,6,10,2?",a:"6"}]},
    {name:"Geometry: Area & Volume",summary:"Triangle area, complex shapes, prism volume.",concepts:["Triangle = ½×base×height","Decompose complex shapes","Prism volume = l×w×h"],examples:["Triangle: base=10, h=6 → 30 sq units"],practice:[{q:"Triangle area: base 8, height 5?",a:"20 square units"}]}
  ]}
];

const GAMES = [
  {id:"mental-math",name:"Mental Math Challenge",icon:"⚡",desc:"Race the clock! Solve as many problems as you can in 2 minutes.",tags:[{text:"Timed",cls:"badge-terra"},{text:"All Grades",cls:"badge-navy"},{text:"4 Operations",cls:"badge-gold"}],color:"var(--terracotta)"},
  {id:"mult-sprint",name:"Multiplication Sprint",icon:"💪",desc:"Flash-card style multiplication. How fast can you go?",tags:[{text:"Speed",cls:"badge-gold"},{text:"Grades 3-6",cls:"badge-navy"}],color:"var(--gold)"},
  {id:"fraction-match",name:"Fraction Match",icon:"🎲",desc:"Match fractions to their equivalent forms!",tags:[{text:"Matching",cls:"badge-sage"},{text:"Grades 3-5",cls:"badge-navy"}],color:"var(--sage)"},
  {id:"number-line",name:"Number Line Adventure",icon:"📏",desc:"Place numbers and decimals on a number line.",tags:[{text:"Visual",cls:"badge-navy"},{text:"Grades 2-6",cls:"badge-navy"}],color:"var(--navy)"},
  {id:"pattern-finder",name:"Pattern Finder",icon:"🔍",desc:"Find the missing number in each sequence.",tags:[{text:"Logic",cls:"badge-terra"},{text:"Grades 2-5",cls:"badge-navy"}],color:"var(--terracotta)"}
];

// ==================== RENDER ====================
function renderGrades() {
  document.getElementById('gradeGrid').innerHTML = GRADES.map((g,i) => 
    '<div class="grade-card '+g.cls+' anim" onclick="openGradeModal('+i+')" tabindex="0">' +
    '<div class="grade-card-icon">'+g.icon+'</div>' +
    '<h3>'+g.name+'</h3><p>'+g.desc+'</p>' +
    '<span class="topics-count">'+g.topics.length+' topics →</span></div>'
  ).join('');
}

function renderGames() {
  document.getElementById('gamesGrid').innerHTML = GAMES.map(g => 
    '<div class="game-card anim"><div class="game-card-header">' +
    '<div class="game-card-icon" style="background:'+g.color+'15;color:'+g.color+'">'+g.icon+'</div>' +
    '<div><h3>'+g.name+'</h3><p>'+g.desc+'</p></div></div>' +
    '<div class="game-card-body"><div class="game-card-tags">' +
    g.tags.map(t => '<span class="badge '+t.cls+'">'+t.text+'</span>').join('') +
    '</div><button class="btn btn-primary" onclick="openGame(\''+g.id+'\')">Play Now →</button></div></div>'
  ).join('');
}

// ==================== GRADE MODAL ====================
function openGradeModal(idx) {
  var g = GRADES[idx];
  var html = '<h2>'+g.name+'</h2>' +
    '<span class="grade-label">'+g.topics.length+' topics · Common Core & NYS aligned</span>' +
    '<div class="topic-list">' +
    g.topics.map(function(t,ti) {
      return '<div class="topic-item" onclick="showLesson('+idx+','+ti+')" tabindex="0">' +
        '<h4>'+t.name+'</h4><p>'+t.summary+'</p></div>';
    }).join('') + '</div>';
  document.getElementById('gradeModalBody').innerHTML = html;
  document.getElementById('gradeModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showLesson(gi, ti) {
  var g = GRADES[gi], t = g.topics[ti];
  var html = '<button class="lesson-back" onclick="openGradeModal('+gi+')">← Back to '+g.name+'</button>' +
    '<h2>'+t.name+'</h2><span class="grade-label">'+g.name+' · Common Core Aligned</span>' +
    '<div class="lesson-section"><h3>Overview</h3><p>'+t.summary+'</p></div>' +
    '<div class="lesson-section"><h3>Key Concepts</h3><ul>' +
    t.concepts.map(function(c){return '<li>'+c+'</li>';}).join('') + '</ul></div>' +
    '<div class="lesson-section"><h3>Examples</h3>' +
    t.examples.map(function(e){return '<div class="example-box"><code>'+e+'</code></div>';}).join('') + '</div>';
  if (t.practice && t.practice.length) {
    html += '<div class="lesson-section"><h3>Practice Problems</h3>' +
      t.practice.map(function(p) {
        return '<div class="practice-problem"><strong>Q: '+p.q+'</strong><br>' +
          '<button class="practice-answer" onclick="this.textContent=\'Answer: '+p.a.replace(/'/g,"\\'")+'\'">' +
          'Click to reveal answer</button></div>';
      }).join('') + '</div>';
  }
  document.getElementById('gradeModalBody').innerHTML = html;
}

function closeGradeModal() {
  document.getElementById('gradeModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ==================== GAME ENGINE ====================
var gameTimer = null, gameState = {};

function openGame(id) {
  document.getElementById('gameTitle').textContent = GAMES.find(function(g){return g.id===id;}).name;
  document.getElementById('gameModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  if (id === 'mental-math') setupMentalMath();
  else if (id === 'mult-sprint') setupMultSprint();
  else if (id === 'fraction-match') setupFractionMatch();
  else if (id === 'number-line') setupNumberLine();
  else if (id === 'pattern-finder') setupPatternFinder();
}

function closeGameModal() {
  document.getElementById('gameModal').classList.remove('active');
  document.body.style.overflow = '';
  if (gameTimer) { clearInterval(gameTimer); gameTimer = null; }
  gameState = {};
}

function fmtTime(s) { return Math.floor(s/60)+':'+(s%60<10?'0':'')+(s%60); }
function randInt(a,b) { return Math.floor(Math.random()*(b-a+1))+a; }

// ---- MENTAL MATH ----
function setupMentalMath() {
  gameState = {op:null, diff:null};
  document.getElementById('gameBody').innerHTML =
    '<div class="game-setup"><h3>⚡ Mental Math Challenge</h3>' +
    '<p>Choose an operation and difficulty, then solve as many as you can in 2 minutes!<br>Correct = +2 · Wrong = −1</p>' +
    '<p style="font-weight:600;color:var(--navy);margin-bottom:8px">Operation:</p>' +
    '<div class="game-options" id="opOpts">' +
    '<button class="game-option" onclick="pickOp(this,\'add\')">Addition</button>' +
    '<button class="game-option" onclick="pickOp(this,\'sub\')">Subtraction</button>' +
    '<button class="game-option" onclick="pickOp(this,\'mul\')">Multiplication</button>' +
    '<button class="game-option" onclick="pickOp(this,\'div\')">Division</button>' +
    '<button class="game-option" onclick="pickOp(this,\'mix\')">Mixed</button></div>' +
    '<p style="font-weight:600;color:var(--navy);margin:16px 0 8px">Difficulty:</p>' +
    '<div class="game-options" id="diffOpts">' +
    '<button class="game-option" onclick="pickDiff(this,\'easy\')">Easy</button>' +
    '<button class="game-option" onclick="pickDiff(this,\'medium\')">Medium</button>' +
    '<button class="game-option" onclick="pickDiff(this,\'hard\')">Hard</button></div>' +
    '<button class="btn btn-primary" style="margin-top:24px" onclick="startMM()" id="mmGo" disabled>Start Challenge →</button></div>';
}
function pickOp(el,op) {
  document.querySelectorAll('#opOpts .game-option').forEach(function(b){b.classList.remove('selected');});
  el.classList.add('selected'); gameState.op=op; mmReady();
}
function pickDiff(el,d) {
  document.querySelectorAll('#diffOpts .game-option').forEach(function(b){b.classList.remove('selected');});
  el.classList.add('selected'); gameState.diff=d; mmReady();
}
function mmReady() { document.getElementById('mmGo').disabled = !(gameState.op && gameState.diff); }

function genQ(op, diff) {
  var ranges = {easy:[1,10], medium:[1,20], hard:[10,50]};
  var lo = ranges[diff][0], hi = ranges[diff][1];
  var ops = op==='mix'?['add','sub','mul','div']:[op];
  var ch = ops[randInt(0,ops.length-1)];
  var a,b,ans,sym;
  if(ch==='add'){a=randInt(lo,hi);b=randInt(lo,hi);ans=a+b;sym='+';}
  else if(ch==='sub'){a=randInt(lo,hi);b=randInt(lo,Math.min(a,hi));ans=a-b;sym='−';}
  else if(ch==='mul'){a=randInt(Math.max(2,lo),Math.min(12,hi));b=randInt(2,Math.min(12,hi));ans=a*b;sym='×';}
  else{b=randInt(Math.max(1,lo),Math.min(12,hi));ans=randInt(1,Math.min(12,hi));a=b*ans;sym='÷';}
  return {text:a+' '+sym+' '+b, answer:ans};
}

function startMM() {
  var timeLeft=120, score=0, correct=0, wrong=0, total=0;
  var cur = genQ(gameState.op, gameState.diff);
  function render() {
    document.getElementById('gameBody').innerHTML =
      '<div class="game-play"><div class="game-hud">' +
      '<div class="game-hud-item"><div class="label">Time</div><div class="value timer" id="mmT">'+fmtTime(timeLeft)+'</div></div>' +
      '<div class="game-hud-item"><div class="label">Score</div><div class="value">'+score+'</div></div>' +
      '<div class="game-hud-item"><div class="label">Correct</div><div class="value" style="color:var(--sage)">'+correct+'</div></div>' +
      '<div class="game-hud-item"><div class="label">Wrong</div><div class="value" style="color:var(--terracotta)">'+wrong+'</div></div>' +
      '</div><div class="game-question"><div class="problem">'+cur.text+'</div>' +
      '<input type="number" id="mmIn" placeholder="?" inputmode="numeric">' +
      '<div class="game-feedback" id="mmFB"></div></div></div>';
    var inp = document.getElementById('mmIn'); if(inp) inp.focus();
    inp.onkeydown = function(e) {
      if(e.key==='Enter'){
        var v=parseInt(this.value); total++;
        if(v===cur.answer){score+=2;correct++;showFB('Correct! +2','correct');}
        else{score=Math.max(0,score-1);wrong++;showFB('Wrong! = '+cur.answer,'wrong');}
        cur=genQ(gameState.op,gameState.diff);
        setTimeout(render,350);
      }
    };
  }
  function showFB(msg,cls){var f=document.getElementById('mmFB');if(f){f.textContent=msg;f.className='game-feedback '+cls;}}
  render();
  if(gameTimer)clearInterval(gameTimer);
  gameTimer=setInterval(function(){
    timeLeft--;
    var el=document.getElementById('mmT'); if(el)el.textContent=fmtTime(timeLeft);
    if(timeLeft<=0){clearInterval(gameTimer);gameTimer=null;showMMEnd(score,correct,wrong,total);}
  },1000);
}
function showMMEnd(score,correct,wrong,total) {
  var pct=total?Math.round(correct/total*100):0;
  var msg=pct>=90?'Outstanding! 🌟':pct>=70?'Great job! 💪':pct>=50?'Nice effort! 👍':'Keep at it! 🚀';
  document.getElementById('gameBody').innerHTML =
    '<div class="game-results"><h3>Time\'s Up!</h3><p class="encouragement">'+msg+'</p>' +
    '<div class="results-grid">' +
    '<div class="result-card score"><div class="val">'+score+'</div><div class="lbl">Points</div></div>' +
    '<div class="result-card correct"><div class="val">'+correct+'</div><div class="lbl">Correct</div></div>' +
    '<div class="result-card wrong"><div class="val">'+wrong+'</div><div class="lbl">Wrong</div></div>' +
    '<div class="result-card acc"><div class="val">'+pct+'%</div><div class="lbl">Accuracy</div></div></div>' +
    '<button class="btn btn-primary" onclick="setupMentalMath()">Play Again</button>' +
    '<button class="btn btn-outline" style="margin-left:12px" onclick="closeGameModal()">Back</button></div>';
}

// ---- MULTIPLICATION SPRINT ----
function setupMultSprint() {
  gameState = {facts:[], idx:0, correct:0, wrong:0, startTime:null, times:[]};
  for(var i=0;i<20;i++){var a=randInt(2,12),b=randInt(2,12);gameState.facts.push({a:a,b:b,ans:a*b});}
  document.getElementById('gameBody').innerHTML =
    '<div class="game-setup"><h3>💪 Multiplication Sprint</h3>' +
    '<p>Answer 20 multiplication facts as fast as you can!</p>' +
    '<button class="btn btn-gold" style="margin-top:24px" onclick="goMultSprint()">Start Sprint →</button></div>';
}
function goMultSprint() {
  gameState.startTime = Date.now(); gameState.qStart = Date.now(); renderMSQ();
}
function renderMSQ() {
  var s=gameState, f=s.facts[s.idx];
  if(!f) return showMSEnd();
  document.getElementById('gameBody').innerHTML =
    '<div class="game-play"><div class="game-hud">' +
    '<div class="game-hud-item"><div class="label">Question</div><div class="value">'+(s.idx+1)+'/20</div></div>' +
    '<div class="game-hud-item"><div class="label">Correct</div><div class="value" style="color:var(--sage)">'+s.correct+'</div></div>' +
    '<div class="game-hud-item"><div class="label">Time</div><div class="value timer" id="msT">0:00</div></div>' +
    '</div><div class="game-question"><div class="problem">'+f.a+' × '+f.b+'</div>' +
    '<input type="number" id="msIn" placeholder="?" inputmode="numeric">' +
    '<div class="game-feedback" id="msFB"></div></div></div>';
  var inp=document.getElementById('msIn'); inp.focus();
  s.qStart=Date.now();
  if(gameTimer)clearInterval(gameTimer);
  gameTimer=setInterval(function(){
    var el=document.getElementById('msT');
    if(el){var e=Math.floor((Date.now()-s.startTime)/1000);el.textContent=fmtTime(e);}
  },200);
  inp.onkeydown=function(e){
    if(e.key==='Enter'){
      var v=parseInt(this.value), elapsed=((Date.now()-s.qStart)/1000).toFixed(1);
      s.times.push(+elapsed);
      if(v===f.ans)s.correct++; else s.wrong++;
      s.idx++; setTimeout(renderMSQ,200);
    }
  };
}
function showMSEnd() {
  if(gameTimer)clearInterval(gameTimer);
  var s=gameState, total=((Date.now()-s.startTime)/1000).toFixed(1);
  var avg=s.times.length?(s.times.reduce(function(a,b){return a+b;},0)/s.times.length).toFixed(1):0;
  var pct=Math.round(s.correct/20*100);
  var msg=pct>=90?'Lightning fast! 🌟':pct>=70?'Solid work! 💪':'Keep practicing! 🚀';
  document.getElementById('gameBody').innerHTML =
    '<div class="game-results"><h3>Sprint Complete!</h3><p class="encouragement">'+msg+'</p>' +
    '<div class="results-grid">' +
    '<div class="result-card score"><div class="val">'+total+'s</div><div class="lbl">Total Time</div></div>' +
    '<div class="result-card correct"><div class="val">'+s.correct+'</div><div class="lbl">Correct</div></div>' +
    '<div class="result-card wrong"><div class="val">'+s.wrong+'</div><div class="lbl">Wrong</div></div>' +
    '<div class="result-card acc"><div class="val">'+avg+'s</div><div class="lbl">Avg/Question</div></div></div>' +
    '<button class="btn btn-gold" onclick="setupMultSprint()">Try Again</button>' +
    '<button class="btn btn-outline" style="margin-left:12px" onclick="closeGameModal()">Back</button></div>';
}

// ---- FRACTION MATCH ----
function setupFractionMatch() {
  var pairs=[{f:"1/2",e:"2/4"},{f:"1/3",e:"2/6"},{f:"3/4",e:"6/8"},{f:"2/5",e:"4/10"},{f:"1/4",e:"3/12"},{f:"2/3",e:"4/6"}];
  var cards=[];
  pairs.forEach(function(p,i){
    cards.push({id:i*2,pid:i,display:p.f});
    cards.push({id:i*2+1,pid:i,display:p.e});
  });
  for(var i=cards.length-1;i>0;i--){var j=randInt(0,i);var tmp=cards[i];cards[i]=cards[j];cards[j]=tmp;}
  gameState={cards:cards,sel:null,matched:{},moves:0,matchCount:0,start:Date.now()};
  renderFM();
}
function renderFM() {
  var s=gameState;
  var html='<div style="text-align:center"><h3 style="font-size:1.5rem;color:var(--navy);margin-bottom:8px">🎲 Fraction Match</h3>' +
    '<p style="color:var(--text-mid);margin-bottom:8px">Find matching equivalent fraction pairs!</p>' +
    '<div class="game-hud" style="max-width:400px;margin:0 auto 24px">' +
    '<div class="game-hud-item"><div class="label">Matches</div><div class="value" style="color:var(--sage)">'+s.matchCount+'</div></div>' +
    '<div class="game-hud-item"><div class="label">Remaining</div><div class="value">'+(6-s.matchCount)+'</div></div>' +
    '<div class="game-hud-item"><div class="label">Moves</div><div class="value">'+s.moves+'</div></div></div>' +
    '<div class="fraction-grid" style="max-width:500px;margin:0 auto">';
  s.cards.forEach(function(c) {
    var cls='fraction-card-game';
    if(s.matched[c.pid])cls+=' matched';
    if(s.sel && s.sel.id===c.id)cls+=' selected';
    html+='<div class="'+cls+'" onclick="clickFM('+c.id+')" data-id="'+c.id+'"><span style="font-size:1.3rem">'+c.display+'</span></div>';
  });
  html+='</div></div>';
  document.getElementById('gameBody').innerHTML=html;
}
function clickFM(id) {
  var s=gameState;
  var card=s.cards.find(function(c){return c.id===id;});
  if(!card||s.matched[card.pid])return;
  if(s.sel && s.sel.id===id){s.sel=null;renderFM();return;}
  if(!s.sel){s.sel=card;renderFM();return;}
  s.moves++;
  if(s.sel.pid===card.pid) {
    s.matched[card.pid]=true; s.matchCount++; s.sel=null;
    renderFM();
    if(s.matchCount===6) {
      var time=((Date.now()-s.start)/1000).toFixed(1);
      setTimeout(function(){
        document.getElementById('gameBody').innerHTML=
          '<div class="game-results"><h3>All Matched! 🎉</h3>' +
          '<p class="encouragement">You matched all 6 fraction pairs!</p>' +
          '<div class="results-grid">' +
          '<div class="result-card score"><div class="val">'+time+'s</div><div class="lbl">Time</div></div>' +
          '<div class="result-card correct"><div class="val">'+s.moves+'</div><div class="lbl">Moves</div></div></div>' +
          '<button class="btn btn-sage" onclick="setupFractionMatch()">Play Again</button>' +
          '<button class="btn btn-outline" style="margin-left:12px" onclick="closeGameModal()">Back</button></div>';
      },500);
    }
  } else {
    var prevId=s.sel.id; s.sel=null;
    document.querySelectorAll('.fraction-card-game').forEach(function(el){
      var did=+el.dataset.id;
      if(did===id||did===prevId)el.classList.add('wrong-flash');
    });
    setTimeout(renderFM,600);
  }
}

// ---- NUMBER LINE ----
function setupNumberLine() {
  gameState={round:0,score:0,total:5,problems:[]};
  for(var i=0;i<5;i++){
    if(i%2===0){
      var lo=randInt(0,4)*10, hi=lo+10, target=lo+randInt(1,9);
      gameState.problems.push({lo:lo,hi:hi,target:target,label:''+target});
    } else {
      var lo2=randInt(0,4), hi2=lo2+1, t=lo2+randInt(1,9)/10;
      t=Math.round(t*10)/10;
      gameState.problems.push({lo:lo2,hi:hi2,target:t,label:t.toFixed(1)});
    }
  }
  renderNL();
}
function renderNL() {
  var s=gameState;
  if(s.round>=s.total){showNLEnd();return;}
  var p=s.problems[s.round];
  var ticks='';
  for(var k=0;k<=10;k++){
    var pct=k*10;
    var val=p.lo+(p.hi-p.lo)*k/10;
    var vLabel=Number.isInteger(val)?val:val.toFixed(1);
    ticks+='<div class="nl-tick" style="left:calc(40px + (100% - 80px)*'+pct+'/100)"></div>';
    if(k%5===0) ticks+='<div class="nl-tick-label" style="left:calc(40px + (100% - 80px)*'+pct+'/100)">'+vLabel+'</div>';
  }
  document.getElementById('gameBody').innerHTML=
    '<div style="text-align:center"><h3 style="font-size:1.5rem;color:var(--navy);margin-bottom:4px">📏 Number Line Adventure</h3>' +
    '<p style="color:var(--text-mid)">Question '+(s.round+1)+' of '+s.total+'</p>' +
    '<div class="game-hud" style="max-width:300px;margin:8px auto 16px">' +
    '<div class="game-hud-item"><div class="label">Score</div><div class="value">'+s.score+'/'+s.round+'</div></div>' +
    '<div class="game-hud-item"><div class="label">Round</div><div class="value">'+(s.round+1)+'/'+s.total+'</div></div></div>' +
    '<p style="font-size:1.2rem;font-family:var(--font-heading);color:var(--navy);margin:16px 0">Click where <strong style="color:var(--terracotta)">'+p.label+'</strong> belongs:</p>' +
    '<div class="nl-container"><div class="nl-line-wrap" id="nlWrap">' +
    '<div class="nl-line"></div>'+ticks+
    '<div class="nl-target-area" id="nlArea"></div>' +
    '</div></div><div id="nlFB" style="min-height:60px;margin-top:16px"></div></div>';
  
  document.getElementById('nlArea').onclick=function(e){
    if(this.dataset.done)return;
    this.dataset.done='1';
    var rect=this.getBoundingClientRect();
    var x=(e.clientX-rect.left)/rect.width;
    var clickedVal=p.lo+(p.hi-p.lo)*x;
    var correctX=(p.target-p.lo)/(p.hi-p.lo);
    var diff=Math.abs(clickedVal-p.target);
    var tol=(p.hi-p.lo)*0.08;
    var ok=diff<=tol;
    if(ok)s.score++;
    var wrap=document.getElementById('nlWrap');
    var m=document.createElement('div');
    m.className='nl-marker'+(ok?' correct-marker':'');
    m.style.left='calc(40px + (100% - 80px)*'+(x*100)+'/100)';
    m.textContent=ok?'✓ '+p.label:'Your guess';
    wrap.appendChild(m);
    if(!ok){
      var cm=document.createElement('div');
      cm.className='nl-correct-pos';
      cm.style.left='calc(40px + (100% - 80px)*'+(correctX*100)+'/100)';
      cm.textContent='✓ '+p.label;
      wrap.appendChild(cm);
    }
    document.getElementById('nlFB').innerHTML=
      (ok?'<p style="color:var(--sage);font-weight:700;font-size:1.1rem">Correct! 🎉</p>':
      '<p style="color:var(--terracotta);font-weight:700;font-size:1.1rem">Not quite! Correct position shown in green.</p>')+
      '<button class="btn btn-primary" style="margin-top:12px" onclick="gameState.round++;renderNL()">Next →</button>';
  };
}
function showNLEnd() {
  var s=gameState, pct=Math.round(s.score/s.total*100);
  var msg=pct>=80?'Excellent! 🌟':pct>=60?'Great work! 💪':'Keep practicing! 🚀';
  document.getElementById('gameBody').innerHTML=
    '<div class="game-results"><h3>Adventure Complete!</h3><p class="encouragement">'+msg+'</p>' +
    '<div class="results-grid">' +
    '<div class="result-card correct"><div class="val">'+s.score+'</div><div class="lbl">Correct</div></div>' +
    '<div class="result-card wrong"><div class="val">'+(s.total-s.score)+'</div><div class="lbl">Wrong</div></div>' +
    '<div class="result-card acc"><div class="val">'+pct+'%</div><div class="lbl">Accuracy</div></div></div>' +
    '<button class="btn btn-primary" onclick="setupNumberLine()">Play Again</button>' +
    '<button class="btn btn-outline" style="margin-left:12px" onclick="closeGameModal()">Back</button></div>';
}

// ---- PATTERN FINDER ----
function setupPatternFinder() {
  gameState={round:0,score:0,total:8,problems:[]};
  for(var i=0;i<8;i++){
    var type=i%3;
    var seq=[],blank,rule;
    if(type===0){
      var start=randInt(1,5),step=randInt(2,6);
      for(var j=0;j<6;j++)seq.push(start+step*j);
      blank=randInt(1,4); rule='Add '+step;
    } else if(type===1) {
      var start2=randInt(2,4),mult=randInt(2,3);
      seq=[start2];for(var j2=1;j2<6;j2++)seq.push(seq[j2-1]*mult);
      blank=randInt(1,4); rule='Multiply by '+mult;
    } else {
      var start3=randInt(30,60),step3=randInt(2,5);
      for(var j3=0;j3<6;j3++)seq.push(start3-step3*j3);
      blank=randInt(1,4); rule='Subtract '+step3;
    }
    gameState.problems.push({seq:seq,blank:blank,answer:seq[blank],rule:rule});
  }
  renderPF();
}
function renderPF() {
  var s=gameState;
  if(s.round>=s.total){showPFEnd();return;}
  var p=s.problems[s.round];
  var seqHTML='';
  for(var k=0;k<p.seq.length;k++){
    if(k>0)seqHTML+='<span class="pattern-arrow">→</span>';
    if(k===p.blank) seqHTML+='<div class="pattern-num blank">?</div>';
    else seqHTML+='<div class="pattern-num">'+p.seq[k]+'</div>';
  }
  document.getElementById('gameBody').innerHTML=
    '<div style="text-align:center"><h3 style="font-size:1.5rem;color:var(--navy);margin-bottom:4px">🔍 Pattern Finder</h3>' +
    '<p style="color:var(--text-mid)">Question '+(s.round+1)+' of '+s.total+'</p>' +
    '<div class="game-hud" style="max-width:300px;margin:8px auto 16px">' +
    '<div class="game-hud-item"><div class="label">Score</div><div class="value">'+s.score+'/'+s.round+'</div></div>' +
    '<div class="game-hud-item"><div class="label">Round</div><div class="value">'+(s.round+1)+'/'+s.total+'</div></div></div>' +
    '<p style="font-size:1.1rem;color:var(--navy);margin:16px 0">Find the missing number in the pattern:</p>' +
    '<div class="pattern-sequence">'+seqHTML+'</div>' +
    '<div class="game-question" style="margin-top:16px">' +
    '<input type="number" id="pfIn" placeholder="?" inputmode="numeric" style="width:120px;font-size:1.5rem">' +
    '<div class="game-feedback" id="pfFB"></div></div></div>';
  var inp=document.getElementById('pfIn'); inp.focus();
  inp.onkeydown=function(e){
    if(e.key==='Enter'){
      var v=parseInt(this.value), ok=v===p.answer;
      if(ok)s.score++;
      document.getElementById('pfFB').innerHTML=ok?
        '<p style="color:var(--sage);font-weight:700">Correct! The rule is: '+p.rule+'</p>':
        '<p style="color:var(--terracotta);font-weight:700">Not quite. The answer is '+p.answer+' ('+p.rule+')</p>';
      document.getElementById('pfFB').innerHTML+='<button class="btn btn-primary" style="margin-top:12px" onclick="gameState.round++;renderPF()">Next →</button>';
      this.disabled=true;
    }
  };
}
function showPFEnd() {
  var s=gameState, pct=Math.round(s.score/s.total*100);
  var msg=pct>=80?'Pattern master! 🌟':pct>=60?'Great eye! 💪':'Keep looking for patterns! 🚀';
  document.getElementById('gameBody').innerHTML=
    '<div class="game-results"><h3>Patterns Complete!</h3><p class="encouragement">'+msg+'</p>' +
    '<div class="results-grid">' +
    '<div class="result-card correct"><div class="val">'+s.score+'</div><div class="lbl">Correct</div></div>' +
    '<div class="result-card wrong"><div class="val">'+(s.total-s.score)+'</div><div class="lbl">Wrong</div></div>' +
    '<div class="result-card acc"><div class="val">'+pct+'%</div><div class="lbl">Accuracy</div></div></div>' +
    '<button class="btn btn-terra" onclick="setupPatternFinder()">Play Again</button>' +
    '<button class="btn btn-outline" style="margin-left:12px" onclick="closeGameModal()">Back</button></div>';
}

// ==================== REGISTRATION ====================
function handleRegistration(e) {
  e.preventDefault();
  document.getElementById('registrationForm').style.display='none';
  document.getElementById('formSuccess').classList.add('show');
}

// ==================== NAV & SCROLL ====================
document.addEventListener('DOMContentLoaded', function() {
  renderGrades();
  renderGames();

  // Scroll nav shadow
  window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu
  document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.addEventListener('click', function() {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Close modal on overlay click
  document.getElementById('gradeModal').addEventListener('click', function(e) {
    if(e.target === this) closeGradeModal();
  });

  // Scroll animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.1});
  document.querySelectorAll('.anim').forEach(function(el) { observer.observe(el); });

  // Active nav link
  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function(sec) {
      var top = sec.offsetTop, h = sec.offsetHeight, id = sec.getAttribute('id');
      var link = document.querySelector('.nav-links a[href="#'+id+'"]');
      if(link) {
        if(scrollY >= top && scrollY < top+h) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  });
});
