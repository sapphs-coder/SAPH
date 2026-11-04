import { useEffect, useMemo, useState } from 'react';

type Draft = { id: string; caption: string; platform: string; pillar: string; createdAt: string; status: 'Draft' | 'Ready' };
type Page = 'dashboard' | 'studio';
const pillars = ['Lifestyle', 'Beauty & fashion', 'Travel', 'Food & restaurants', 'Daily life & vlogs', 'Fitness & wellness', 'Personal development'];

function makeCaptions(topic: string, pillar: string, tone: string, platform: string) {
  const subject = topic.trim();
  const clean = subject.charAt(0).toLowerCase() + subject.slice(1);
  const endings = platform === 'TikTok'
    ? ['Would you try this? Tell me below.', 'Save this for your next scroll break.', 'Follow along for more little moments like this.']
    : ['What do you think? I’d love to know.', 'Save this for a little inspiration later.', 'Come back for more moments like this.'];
  const toneLine = tone === 'Playful' ? 'A little fun, a little spontaneity, and a lot to love.' : tone === 'Chic' ? 'Keeping it simple, considered and effortlessly me.' : tone === 'Chatty' ? 'You know those moments you just have to share? This is one of them.' : 'Making space for the moments that feel like me.';
  return [
    { title: 'The natural one', hook: 'A little moment worth sharing ✨', body: subject ? `Today’s post is all about ${clean}. ${toneLine}` : `A little ${pillar.toLowerCase()} inspiration for your day. ${toneLine}`, cta: endings[0] },
    { title: 'The story-led one', hook: 'Not every moment needs a big occasion.', body: subject ? `Just taking you along for ${clean}. The little details are sometimes the best part.` : `A reminder to notice the little things in ${pillar.toLowerCase()} — they often make the best stories.`, cta: endings[1] },
    { title: 'The short & confident one', hook: 'Current mood: ✨', body: subject ? `${subject}. Keeping the moments I want to remember.` : `A fresh little ${pillar.toLowerCase()} moment. More of this, please.`, cta: endings[2] }
  ];
}

export default function App() {
  const [page, setPage] = useState<Page>('dashboard');
  const [drafts, setDrafts] = useState<Draft[]>(() => {
    try { return JSON.parse(localStorage.getItem('saph-drafts') || '[]'); } catch { return []; }
  });
  const [topic, setTopic] = useState('');
  const [pillar, setPillar] = useState(pillars[0]);
  const [platform, setPlatform] = useState('Instagram');
  const [tone, setTone] = useState('Natural');
  const [results, setResults] = useState<ReturnType<typeof makeCaptions>>([]);
  const [notice, setNotice] = useState('');
  const [activeCaption, setActiveCaption] = useState(0);

  useEffect(() => { localStorage.setItem('saph-drafts', JSON.stringify(drafts)); }, [drafts]);
  const readyCount = drafts.filter(d => d.status === 'Ready').length;
  const recent = useMemo(() => [...drafts].reverse().slice(0, 3), [drafts]);

  function generate() {
    if (!topic.trim()) { setNotice('Add a few details about your post first.'); return; }
    setResults(makeCaptions(topic, pillar, tone, platform));
    setActiveCaption(0);
    setNotice('Demo suggestions created — review and make them your own.');
  }
  function saveDraft(caption: string) {
    const item: Draft = { id: crypto.randomUUID(), caption, platform, pillar, createdAt: new Date().toISOString(), status: 'Draft' };
    setDrafts(current => [...current, item]);
    setNotice('Saved to your drafts.');
  }
  async function copy(text: string) {
    try { await navigator.clipboard.writeText(text); setNotice('Caption copied.'); }
    catch { setNotice('Copy is unavailable in this browser. Select the caption to copy it.'); }
  }

  return <div className="app-shell">
    <aside className="sidebar">
      <button className="brand" onClick={() => setPage('dashboard')} aria-label="SAPH home"><span className="brand-mark">s.</span><span>SAPH<small>CREATOR STUDIO</small></span></button>
      <div className="nav-label">WORKSPACE</div>
      <button className={`nav-item ${page === 'dashboard' ? 'active' : ''}`} onClick={() => setPage('dashboard')}><span>⌂</span> Overview</button>
      <button className={`nav-item ${page === 'studio' ? 'active' : ''}`} onClick={() => setPage('studio')}><span>✳</span> Caption studio</button>
      <div className="sidebar-bottom"><div className="avatar">S</div><div><strong>Your creator space</strong><small>Personal workspace</small></div><span className="dots">···</span></div>
    </aside>
    <main className="main-content">
      <header className="topbar"><div className="mobile-brand">s. <b>SAPH</b></div><span className="breadcrumb">Workspace <span>/</span> {page === 'dashboard' ? 'Overview' : 'Caption studio'}</span><div className="top-right"><span className="status-dot"></span> Prototype</div></header>
      {page === 'dashboard' ? <section className="page">
        <div className="welcome-row"><div><div className="eyebrow">YOUR CREATOR SPACE</div><h1>Make your next move.</h1><p className="muted">Your ideas, your voice, your corner of the internet.</p></div><button className="primary" onClick={() => setPage('studio')}>＋ Create a caption</button></div>
        <div className="hero-card"><div><span className="hero-kicker">A LITTLE MORE YOU, EVERY DAY</span><h2>Show up with intention.<br/>Create with confidence.</h2><p>SAPH helps you shape your ideas into content that sounds like you.</p><button className="light-button" onClick={() => setPage('studio')}>Open caption studio <span>→</span></button></div><div className="hero-art"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="sparkle">✳</div><div className="hero-note">your story<br/><i>in your words.</i></div></div></div>
        <div className="section-heading"><div><h2>Your overview</h2><p className="muted">A snapshot of your creative workspace.</p></div><span className="date-label">YOUR STUDIO</span></div>
        <div className="stats-grid"><div className="stat-card"><span className="stat-icon">✎</span><span className="stat-label">Total drafts</span><strong>{drafts.length.toString().padStart(2,'0')}</strong><small>Ideas saved in your studio</small></div><div className="stat-card"><span className="stat-icon">✓</span><span className="stat-label">Ready to post</span><strong>{readyCount.toString().padStart(2,'0')}</strong><small>Approved by you</small></div><div className="stat-card"><span className="stat-icon">◎</span><span className="stat-label">Platforms</span><strong>02</strong><small>Instagram & TikTok</small></div></div>
        <div className="section-heading recent-heading"><div><h2>Recently saved</h2><p className="muted">Your latest caption ideas.</p></div><button className="text-button" onClick={() => setPage('studio')}>Create new <span>→</span></button></div>
        {recent.length ? <div className="draft-list">{recent.map(d => <div className="draft-row" key={d.id}><div className="draft-symbol">✎</div><div className="draft-info"><strong>{d.pillar}</strong><p>{d.caption}</p><small>{d.platform} · {new Date(d.createdAt).toLocaleDateString()}</small></div><span className={`pill ${d.status.toLowerCase()}`}>{d.status}</span></div>)}</div> : <div className="empty-state"><div className="empty-icon">✳</div><strong>Your creative space starts here.</strong><p>Your saved captions will appear here. Start with one idea and see where it takes you.</p><button className="secondary" onClick={() => setPage('studio')}>Create your first caption</button></div>}
        <div className="footnote">SAPH is in its early prototype stage. No posts are published or shared automatically.</div>
      </section> : <section className="page studio-page">
        <div className="eyebrow">YOUR WORDS, YOUR WAY</div><h1>Caption studio<span className="title-period">.</span></h1><p className="muted intro">Turn the idea in your head into a caption that feels like you.</p>
        <div className="studio-layout"><div className="form-card"><div className="card-heading"><div><h2>Tell us about your post</h2><p className="muted">A few details help shape your caption.</p></div><span className="step-tag">01 / CREATE</span></div>
          <label>What is your post about?</label><textarea value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. A slow Sunday morning, getting ready for dinner, a new place I discovered..." rows={5}/>
          <div className="field-grid"><div><label>Content pillar</label><select value={pillar} onChange={e => setPillar(e.target.value)}>{pillars.map(p => <option key={p}>{p}</option>)}</select></div><div><label>Platform</label><select value={platform} onChange={e => setPlatform(e.target.value)}><option>Instagram</option><option>TikTok</option></select></div></div>
          <label>Choose your tone</label><div className="tone-options">{['Natural','Chatty','Chic','Playful'].map(t => <button key={t} className={tone === t ? 'tone selected' : 'tone'} onClick={() => setTone(t)}>{t}</button>)}</div>
          <button className="primary generate-button" onClick={generate}>✳ Generate caption ideas <span>→</span></button><div className="demo-note">✳ Demo mode · Suggestions are examples, not AI-generated advice.</div>
        </div>
        <div className="results-column"><div className="results-heading"><div><span className="eyebrow">YOUR CREATIVE OPTIONS</span><h2>Made for your feed.</h2></div>{results.length > 0 && <span className="count-tag">03 OPTIONS</span>}</div>
          {results.length ? <><div className="result-tabs">{results.map((r,i) => <button key={r.title} className={activeCaption === i ? 'result-tab chosen' : 'result-tab'} onClick={() => setActiveCaption(i)}>{String(i+1).padStart(2,'0')} <span>{r.title}</span></button>)}</div><div className="caption-card"><div className="caption-top"><span className="eyebrow">OPTION 0{activeCaption+1}</span><span className="platform-tag">{platform}</span></div><h3>{results[activeCaption].hook}</h3><p className="caption-body">{results[activeCaption].body}</p><p className="caption-cta">{results[activeCaption].cta}</p><div className="caption-actions"><button className="secondary" onClick={() => copy([results[activeCaption].hook,results[activeCaption].body,results[activeCaption].cta].join('\n\n'))}>Copy caption</button><button className="primary small-primary" onClick={() => saveDraft([results[activeCaption].hook,results[activeCaption].body,results[activeCaption].cta].join('\n\n'))}>Save draft</button></div></div><div className="result-tip">A good starting point, not the final word. Edit anything that doesn't sound like you.</div></> : <div className="result-empty"><div className="paper-icon">✎</div><strong>Your ideas will appear here.</strong><p>Choose your post details, then generate three different caption directions to explore.</p><div className="mini-lines"><i></i><i></i><i></i></div></div>}
        </div></div>
        {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice('')} aria-label="Dismiss">×</button></div>}
        <div className="footnote">SAPH never posts on your behalf. You stay in control of every word and every post.</div>
      </section>}
    </main>
  </div>;
}