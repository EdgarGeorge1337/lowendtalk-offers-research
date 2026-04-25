// Strip a LET discussion HTML to plain-text OP + first N comments + counts
const fs = require('fs');
const path = require('path');

const file = process.argv[2];
if (!file) { console.error('usage: node parse-let.js FILE'); process.exit(1); }
const html = fs.readFileSync(file, 'utf8');

function clean(s){ return s.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim(); }

// Title
const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
const title = titleMatch ? clean(titleMatch[1]) : '';

// All Comment blocks: data-userid + .Username and .Message
const re = /<li[^>]*class="[^"]*ItemComment[^"]*"[\s\S]*?<\/li>\s*(?=<li|<\/ul>)/g;
const blocks = html.match(re) || [];

// Better: parse posts (OP + comments) by div.Item-Body or .Message
const msgRe = /<div[^>]*class="Message[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>|<div class="Reactions)/g;
let msgs = [];
let m;
while ((m = msgRe.exec(html)) !== null) {
  msgs.push(clean(m[1]));
}

// Usernames in posts
const userRe = /<a[^>]*class="[^"]*Username[^"]*"[^>]*>([^<]+)<\/a>/g;
let users = [];
while ((m = userRe.exec(html)) !== null) users.push(m[1]);

// Date posted: title says count, but try DiscussionMeta
const cmtCountMatch = html.match(/(\d+)\s*Comments?/i);

// Posted date
const dateMatch = html.match(/datetime="([^"]+)"/);

// Try to extract OP author rank/posts: "X Posts" near username
const postsCountAll = html.match(/(\d[\d,]*)\s*Posts?\b/gi) || [];

// First message = OP
const op = msgs[0] || '';

console.log('=== TITLE ===');
console.log(title);
console.log('=== POSTED ===');
console.log(dateMatch ? dateMatch[1] : 'unknown');
console.log('=== COMMENT COUNT ===');
console.log(cmtCountMatch ? cmtCountMatch[1] : 'unknown');
console.log('=== USERS (first 15) ===');
console.log(users.slice(0,15).join(' | '));
console.log('=== POSTS-COUNT MENTIONS (first 10) ===');
console.log(postsCountAll.slice(0,10).join(' | '));
console.log('=== OP (truncated 4000) ===');
console.log('=== OP-BODY (msg 1 truncated 6000) ===');
console.log((msgs[1]||'').slice(0,6000));
console.log('=== COMMENTS (up to 30, 400 chars each) ===');
for (let i=2; i<msgs.length && i<32; i++) {
  console.log(`-- #${i-1} ${users[i] || users[i-1] || ''} --`);
  console.log(msgs[i].slice(0,400));
}
