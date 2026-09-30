const FILES = 'abcdefgh';
// filled glyphs for both sides; colour comes from the classes. FE0E asks for text, not emoji.
const GLYPH = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };

function parseFen(fen) {
  return fen.split(' ')[0].split('/').map((rank) => {
    const row = [];
    for (const ch of rank) {
      if (/\d/.test(ch)) row.push(...Array(Number(ch)).fill(null));
      else row.push({ type: ch.toLowerCase(), white: ch === ch.toUpperCase() });
    }
    return row;
  });
}

const coordCls = 'grid place-items-center font-mono text-[10px] text-steel';

// Static chess diagram, drawn like a printed book figure.
export default function Board({ fen, highlight = [], coords = true }) {
  const rows = parseFen(fen);
  return (
    <div className={coords ? 'grid grid-cols-[16px_1fr] grid-rows-[1fr_18px] gap-1.5' : ''}>
      {coords && (
        <div className={`${coordCls} grid-rows-8`} aria-hidden="true">
          {[8, 7, 6, 5, 4, 3, 2, 1].map((r) => <span key={r}>{r}</span>)}
        </div>
      )}
      <div
        className="@container grid aspect-square grid-cols-8 outline outline-offset-[3px] outline-steel"
        role="img"
        aria-label="Chess position diagram"
      >
        {rows.map((row, r) => row.map((p, f) => {
          const sq = FILES[f] + (8 - r);
          return (
            <div
              key={sq}
              className={`relative grid place-items-center ${(r + f) % 2 ? 'bg-steel' : 'bg-silver-mid'}
                ${highlight.includes(sq) ? "before:absolute before:inset-0 before:bg-ink/20 before:content-['']" : ''}`}
            >
              {p && (
                // glyph drawn via ::before so it stays decoration, not page text
                <span
                  data-glyph={`${GLYPH[p.type]}︎`}
                  className={`relative font-chess text-[10cqw] leading-none before:content-[attr(data-glyph)]
                    ${p.white ? 'text-white [-webkit-text-stroke:1px_var(--color-ink)]' : 'text-ink'}`}
                />
              )}
            </div>
          );
        }))}
      </div>
      {coords && (
        <div className={`${coordCls} col-start-2 grid-cols-8`} aria-hidden="true">
          {FILES.split('').map((f) => <span key={f}>{f}</span>)}
        </div>
      )}
    </div>
  );
}
