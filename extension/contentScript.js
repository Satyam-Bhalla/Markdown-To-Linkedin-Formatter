// Converts regular text to Unicode bold sans-serif
function convertTextToUnicodeBold(text) {
  const boldMap = {
    A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝',
    K: '𝗞', L: '𝗟', M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥', S: '𝗦', T: '𝗧',
    U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭',
    a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷',
    k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁',
    u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇',
    0: '𝟬', 1: '𝟭', 2: '𝟮', 3: '𝟯', 4: '𝟰', 5: '𝟱', 6: '𝟲', 7: '𝟳', 8: '𝟴', 9: '𝟵'
  };
  return text.split('').map(c => boldMap[c] || c).join('');
}

// Converts regular text to Unicode italic sans-serif
function convertTextToUnicodeItalic(text) {
  const italicMap = {
    A: '𝘈', B: '𝘉', C: '𝘊', D: '𝘋', E: '𝘌', F: '𝘍', G: '𝘎', H: '𝘏', I: '𝘐', J: '𝘑',
    K: '𝘒', L: '𝘓', M: '𝘔', N: '𝘕', O: '𝘖', P: '𝘗', Q: '𝘘', R: '𝘙', S: '𝘚', T: '𝘛',
    U: '𝘜', V: '𝘝', W: '𝘞', X: '𝘟', Y: '𝘠', Z: '𝘡',
    a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫',
    k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵',
    u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻'
  };
  return text.split('').map(c => italicMap[c] || c).join('');
}

// Converts regular text to Unicode italic serif
function convertTextToUnicodeSerifItalic(text) {
  const italicSerifMap = {
    A: '𝐴', B: '𝐵', C: '𝐶', D: '𝐷', E: '𝐸', F: '𝐹', G: '𝐺', H: '𝐻', I: '𝐼', J: '𝐽',
    K: '𝐾', L: '𝐿', M: '𝑀', N: '𝑁', O: '𝑂', P: '𝑃', Q: '𝑄', R: '𝑅', S: '𝑆', T: '𝑇',
    U: '𝑈', V: '𝑉', W: '𝑊', X: '𝑋', Y: '𝑌', Z: '𝑍',
    a: '𝑎', b: '𝑏', c: '𝑐', d: '𝑑', e: '𝑒', f: '𝑓', g: '𝑔', h: 'ℎ', i: '𝑖', j: '𝑗',
    k: '𝑘', l: '𝑙', m: '𝑚', n: '𝑛', o: '𝑜', p: '𝑝', q: '𝑞', r: '𝑟', s: '𝑠', t: '𝑡',
    u: '𝑢', v: '𝑣', w: '𝑤', x: '𝑥', y: '𝑦', z: '𝑧'
  };
  return text.split('').map(c => italicSerifMap[c] || c).join('');
}

// Converts regular text to Unicode bold italic sans-serif
function convertTextToUnicodeBoldItalic(text) {
  const boldItalicMap = {
    A: '𝘼', B: '𝘽', C: '𝘾', D: '𝘿', E: '𝙀', F: '𝙁', G: '𝙂', H: '𝙃', I: '𝙄', J: '𝙅',
    K: '𝙆', L: '𝙇', M: '𝙈', N: '𝙉', O: '𝙊', P: '𝙋', Q: '𝙌', R: '𝙍', S: '𝙎', T: '𝙏',
    U: '𝙐', V: '𝙑', W: '𝙒', X: '𝙓', Y: '𝙔', Z: '𝙕',
    a: '𝙖', b: '𝙗', c: '𝙘', d: '𝙙', e: '𝙚', f: '𝙛', g: '𝙜', h: '𝙝', i: '𝙞', j: '𝙟',
    k: '𝙠', l: '𝙡', m: '𝙢', n: '𝙣', o: '𝙤', p: '𝙥', q: '𝙦', r: '𝙧', s: '𝙨', t: '𝙩',
    u: '𝙪', v: '𝙫', w: '𝙬', x: '𝙭', y: '𝙮', z: '𝙯'
  };
  return text.split('').map(c => boldItalicMap[c] || c).join('');
}

// Converts regular text to Unicode monospace
function convertTextToUnicodeMonospace(text) {
  const monospaceMap = {
    A: '𝙰', B: '𝙱', C: '𝙲', D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹',
    K: '𝙺', L: '𝙻', M: '𝙼', N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃',
    U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉',
    a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓',
    k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝',
    u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣',
    0: '𝟶', 1: '𝟷', 2: '𝟸', 3: '𝟹', 4: '𝟺', 5: '𝟻', 6: '𝟼', 7: '𝟽', 8: '𝟾', 9: '𝟿'
  };
  return text.split('').map(c => monospaceMap[c] || c).join('');
}

function convertMarkdownToLinkedIn(markdown) {
  let linkedin = markdown;
  // Remove images
  linkedin = linkedin.replace(/!\[.*?\]\(.*?\)/g, '');
  // Convert links to plain text
  linkedin = linkedin.replace(/\[(.*?)\]\(.*?\)/g, '$1');
  // Headers
  linkedin = linkedin.replace(/^# (.*)/gm, (_, m) => '💡 ' + convertTextToUnicodeBold(m));
  linkedin = linkedin.replace(/^## (.*)/gm, (_, m) => '🔹 ' + convertTextToUnicodeBold(m));
  linkedin = linkedin.replace(/^### (.*)/gm, (_, m) => '• ' + convertTextToUnicodeBoldItalic(m));
  // Bullet points
  linkedin = linkedin.replace(/^\s*[-*] (.*)/gm, '• $1');
  linkedin = linkedin.replace(/^\s{2,}[-*] (.*)/gm, '  ◦ $1');
  // Blockquotes
  linkedin = linkedin.replace(/^> (.*)/gm, (_, m) => '❝ ' + convertTextToUnicodeSerifItalic(m) + ' ❞');
  // Inline code
  linkedin = linkedin.replace(/`([^`]+)`/g, (_, m) => '❮' + convertTextToUnicodeMonospace(m) + '❯');
  // Formatting
  linkedin = linkedin.replace(/\*\*\*(.*?)\*\*\*/g, (_, m) => convertTextToUnicodeBoldItalic(m));
  linkedin = linkedin.replace(/___(.*?)___/g, (_, m) => convertTextToUnicodeBoldItalic(m));
  linkedin = linkedin.replace(/\*\*(.*?)\*\*/g, (_, m) => convertTextToUnicodeBold(m));
  linkedin = linkedin.replace(/__(.*?)__/g, (_, m) => convertTextToUnicodeBold(m));
  linkedin = linkedin.replace(/\*(.*?)\*/g, (_, m) => convertTextToUnicodeItalic(m));
  linkedin = linkedin.replace(/_(.*?)_/g, (_, m) => convertTextToUnicodeItalic(m));
  linkedin = linkedin.replace(/\n{3,}/g, '\n\n');
  linkedin = linkedin.replace(/^[ \t]+/gm, '');
  return linkedin.trim();
}

function handlePaste(event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  if (!clipboardData) return;
  const text = clipboardData.getData('text/plain');
  if (!text) return;
  const converted = convertMarkdownToLinkedIn(text);
  if (converted === text) return; // nothing to do
  event.preventDefault();
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  const range = selection.getRangeAt(0);
  range.insertNode(document.createTextNode(converted));
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

document.addEventListener('paste', handlePaste, true);
