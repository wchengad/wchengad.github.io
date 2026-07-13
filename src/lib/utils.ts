export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' }).format(date);
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, char => {
    switch (char) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return char;
    }
  });
}

export function renderInlineMarkdownLinks(text: string): string {
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let html = '';
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    html += escapeHtml(text.slice(lastIndex, match.index));
    html += `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" class="font-semibold underline decoration-2 underline-offset-2">${escapeHtml(label)}</a>`;
    lastIndex = match.index + fullMatch.length;
  }

  html += escapeHtml(text.slice(lastIndex));
  return html;
}

export function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  return items.reduce((groups, item) => {
    const group = key(item);
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

export function sortByDate<T extends { date: Date }>(items: T[], order: 'asc' | 'desc' = 'desc'): T[] {
  return [...items].sort((a, b) => {
    const diff = a.date.getTime() - b.date.getTime();
    return order === 'desc' ? -diff : diff;
  });
}
