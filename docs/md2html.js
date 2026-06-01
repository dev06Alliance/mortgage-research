const fs = require('fs');
const md = fs.readFileSync('..\step-3_who-on-the-load.md', 'utf8');
function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function inline(text) {
  return escapeHtml(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
const lines = md.split(/\r?\n/);
let html = '';
let inList = false;
let listType = 'ul';
let inBlockquote = false;
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (/^---\s*$/.test(line)) {
    if (inList) { html += '</' + listType + '>'; inList = false; }
    if (inBlockquote) { html += '</blockquote>'; inBlockquote = false; }
    html += '<hr />\n';
    continue;
  }
  let m;
  if (m = line.match(/^(#{1,4})\s*(.*)$/)) {
    if (inList) { html += '</' + listType + '>'; inList = false; }
    if (inBlockquote) { html += '</blockquote>'; inBlockquote = false; }
    const level = m[1].length;
    html += `<h${level}>${inline(m[2].trim())}</h${level}>\n`;
    continue;
  }
  if (m = line.match(/^>\s?(.*)$/)) {
    if (!inBlockquote) { if (inList) { html += '</' + listType + '>'; inList = false; } html += '<blockquote>\n'; inBlockquote = true; }
    html += `<p>${inline(m[1].trim())}</p>\n`;
    continue;
  }
  if (m = line.match(/^[*-]\s+(.*)$/)) {
    if (!inList) { if (inBlockquote) { html += '</blockquote>'; inBlockquote = false; } html += '<ul>\n'; inList = true; }
    html += `<li>${inline(m[1].trim())}</li>\n`;
    continue;
  }
  if (/^\s*$/.test(line)) {
    if (inList) { html += '</' + listType + '>'; inList = false; }
    if (inBlockquote) { html += '</blockquote>\n'; inBlockquote = false; }
    html += '\n';
    continue;
  }
  let paragraph = line;
  while (i + 1 < lines.length && lines[i + 1].trim() !== '' && !/^#{1,4}\s/.test(lines[i + 1]) && !/^[*-]\s+/.test(lines[i + 1]) && !/^>\s?/.test(lines[i + 1]) && !/^---/.test(lines[i + 1])) {
    i++;
    paragraph += ' ' + lines[i].trim();
  }
  if (inList) { html += '</' + listType + '>'; inList = false; }
  if (inBlockquote) { html += '</blockquote>\n'; inBlockquote = false; }
  html += `<p>${inline(paragraph.trim())}</p>\n`;
}
if (inList) html += '</' + listType + '>';
if (inBlockquote) html += '</blockquote>';
process.stdout.write(html);
