import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, RotateCcw, Printer, ExternalLink } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { isLang } from '../i18n';

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS — zinc/black/teal palette
═══════════════════════════════════════════════════════════ */
const C = {
  bg:      '#09090B',
  bg2:     '#111113',
  bg3:     '#18181B',
  bg4:     '#27272A',
  border:  '#27272A',
  border2: '#3F3F46',
  white:   '#FAFAFA',
  muted:   '#71717A',
  muted2:  '#52525B',
  red:     '#4fe6d2',
  redDk:   '#2fc6b6',
  redLt:   'rgba(79,230,210,0.12)',
  green:   '#22C55E',
  amber:   '#F59E0B',
};

/* ═══════════════════════════════════════════════════════════
   DOMAIN + QUESTION DATA
═══════════════════════════════════════════════════════════ */
const DOMAINS = [
  {
    id: 'identify', name: 'Identify', nist: 'ID', short: 'Identify',
    desc: 'Asset management, risk identification, supply chain, and organizational context (NIST ID · CIS 1-3-15-18 · ISO A.5).',
    questions: [
      { t: 'Is there an up-to-date, complete inventory of all IT assets — hardware, software, data, and cloud services?', fw: ['NIST ID.AM-1', 'CIS Control 1-2', 'ISO A.5.9'] },
      { t: 'Are security risks formally identified, documented, and prioritized by business process?', fw: ['NIST ID.RA', 'ISO A.6.1', 'CIS Control 18'] },
      { t: 'Is there a data classification policy implemented, communicated, and actively monitored?', fw: ['NIST ID.AM-5', 'ISO A.5.12', 'CIS Control 3'] },
      { t: 'Are third-party suppliers and service providers assessed for security risks prior to and during engagement?', fw: ['NIST ID.SC', 'ISO A.5.19', 'CIS Control 15'] },
    ],
  },
  {
    id: 'protect', name: 'Protect', nist: 'PR', short: 'Protect',
    desc: 'Access control, MFA, encryption, patch management, and security awareness training (NIST PR · CIS 5-7-14 · ISO A.8).',
    questions: [
      { t: 'Is least-privilege access control implemented and periodically reviewed across all critical systems?', fw: ['NIST PR.AC', 'CIS Control 5-6', 'ISO A.5.15'] },
      { t: 'Is MFA active for all remote access, corporate email, and sensitive systems?', fw: ['NIST PR.AC-7', 'CIS Control 6.3', 'ISO A.8.5'] },
      { t: 'Are security patches applied within defined SLAs based on vulnerability criticality?', fw: ['NIST PR.IP-12', 'CIS Control 7', 'ISO A.8.8'] },
      { t: 'Is sensitive data encrypted in transit (TLS) and at rest, with formal key management?', fw: ['NIST PR.DS', 'CIS Control 3.11', 'ISO A.8.24'] },
      { t: 'Do all employees receive formal security awareness training at least once per year?', fw: ['NIST PR.AT', 'CIS Control 14', 'ISO A.6.3'] },
    ],
  },
  {
    id: 'detect', name: 'Detect', nist: 'DE', short: 'Detect',
    desc: 'Continuous monitoring, centralized logging, anomaly detection, and threat intelligence (NIST DE · CIS 8 · ISO A.8.15).',
    questions: [
      { t: 'Is there continuous security event monitoring with automated alerting — SIEM, EDR, or equivalent?', fw: ['NIST DE.CM', 'CIS Control 8', 'ISO A.8.16'] },
      { t: 'Are access and critical activity logs collected centrally, integrity-protected, and reviewed regularly?', fw: ['NIST DE.CM-3', 'CIS Control 8.2', 'ISO A.8.15'] },
      { t: 'Is there a formal process for anomaly detection, suspicious behavior analysis, and IoC identification?', fw: ['NIST DE.AE', 'CIS Control 8.11', 'ISO A.5.25'] },
    ],
  },
  {
    id: 'respond', name: 'Respond', nist: 'RS', short: 'Respond',
    desc: 'Incident response plan, designated team, communication procedures, and lessons learned (NIST RS · CIS 17 · ISO A.5.26).',
    questions: [
      { t: 'Is there a formal incident response plan — documented, leadership-approved, and tested in the past 12 months?', fw: ['NIST RS.RP', 'CIS Control 17', 'ISO A.5.26'] },
      { t: 'Is there a formally designated team or individual responsible for coordinating security incident response?', fw: ['NIST RS.CO', 'ISO A.5.24', 'CIS Control 17.3'] },
      { t: 'Are communication procedures to regulators, customers, and stakeholders mapped and tested for incidents?', fw: ['NIST RS.CO-3', 'ISO A.5.5', 'CIS Control 17.6'] },
    ],
  },
  {
    id: 'recover', name: 'Recover', nist: 'RC', short: 'Recover',
    desc: 'Backup integrity, business continuity, disaster recovery, and defined RTO/RPO targets (NIST RC · CIS 11 · ISO A.5.29).',
    questions: [
      { t: 'Are backups performed regularly, stored securely, and tested to verify actual recoverability?', fw: ['NIST RC.RP', 'CIS Control 11', 'ISO A.8.13'] },
      { t: 'Is there a BCP and DR plan — documented, approved by leadership, and tested in the past 12 months?', fw: ['NIST RC.RP-1', 'ISO A.5.29', 'CIS Control 11.4'] },
      { t: 'Are RTO and RPO formally defined and communicated for all critical business systems?', fw: ['NIST RC.RP', 'ISO A.8.14', 'CIS Control 11'] },
    ],
  },
] as const;

const SCALE = [
  { v: 0, n: '0', l: 'None' },
  { v: 1, n: '1', l: 'Initial' },
  { v: 2, n: '2', l: 'Repeatable' },
  { v: 3, n: '3', l: 'Defined' },
  { v: 4, n: '4', l: 'Managed' },
  { v: 5, n: '5', l: 'Optimized' },
] as const;

// UI-only loader message keys (resolved via t() at render). Count drives the
// loader sequence timing in runLoader().
const LOADER_KEYS = ['loader_0', 'loader_1', 'loader_2', 'loader_3', 'loader_4', 'loader_5'] as const;

/* ═══════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════ */
type Phase = 'hero' | 'assessment' | 'capture' | 'loading' | 'results';
type Answers = Record<string, number>;
interface LeadData { firstName: string; lastName: string; email: string; company: string; role: string; size: string; }

/* ═══════════════════════════════════════════════════════════
   SCORE HELPERS
═══════════════════════════════════════════════════════════ */
function domainScore(domainId: string, answers: Answers): number {
  const d = DOMAINS.find(x => x.id === domainId)!;
  const vals = d.questions.map((_, qi) => answers[`${domainId}_${qi}`] ?? 0);
  return vals.reduce((a, b) => a + b, 0) / d.questions.length;
}
function overallPct(answers: Answers): number {
  return Math.round(DOMAINS.reduce((s, d) => s + domainScore(d.id, answers), 0) / DOMAINS.length / 5 * 100);
}
function matLevel(p: number): { l: string; c: string } {
  if (p < 20) return { l: 'Initial',    c: C.red };
  if (p < 40) return { l: 'Repeatable', c: C.amber };
  if (p < 60) return { l: 'Defined',    c: '#EAB308' };
  if (p < 80) return { l: 'Managed',    c: C.green };
  return { l: 'Optimized', c: '#3B82F6' };
}
function getGaps(answers: Answers) {
  // `text`/`domain` stay in English — they feed the AI prompts (Lote 5b).
  // `domainId`/`qi` are added so the UI can resolve the translated question text.
  const g: { score: number; text: string; fw: readonly string[]; domain: string; domainId: string; qi: number }[] = [];
  DOMAINS.forEach(d => d.questions.forEach((q, qi) => {
    const v = answers[`${d.id}_${qi}`] ?? 0;
    if (v <= 2) g.push({ score: v, text: q.t, fw: q.fw, domain: d.name, domainId: d.id, qi });
  }));
  return g.sort((a, b) => a.score - b.score).slice(0, 6);
}
function totalQ(): number { return DOMAINS.reduce((s, d) => s + d.questions.length, 0); }
function answeredCount(answers: Answers): number { return Object.keys(answers).length; }

/* ═══════════════════════════════════════════════════════════
   AI PROMPTS
═══════════════════════════════════════════════════════════ */
function sysPrompt() {
  return `You are a senior cybersecurity consultant at Brandvakt Academy — a specialist firm in GRC, security awareness training, phishing simulation, and compliance, operating internationally.

Your role is to generate precise, executive-grade security assessments. Your output must be:
- Analytically rigorous, not generic
- Written in formal English, executive tone
- Dense with insight, devoid of filler phrases
- Specific to the data provided
- Commercially aware — connect technical gaps to business risk and Brandvakt's service portfolio

Never use bullet lists. Write in dense, structured paragraphs.`;
}

function diagnosisPrompt(pct: number, matLabel: string, gaps: ReturnType<typeof getGaps>, answers: Answers, lead: LeadData): string {
  const domainData = DOMAINS.map(d => {
    const p = Math.round(domainScore(d.id, answers) / 5 * 100);
    const scores = d.questions.map((q, qi) => `[${answers[`${d.id}_${qi}`] ?? 0}/5] ${q.t.substring(0, 55)}...`);
    return `${d.name} (${p}%): ${scores.join(' | ')}`;
  }).join('\n');
  const gapData = gaps.map(g => `[${g.score}/5] ${g.text.substring(0, 80)}... — ${g.fw[0]}`).join('\n');
  return `${sysPrompt()}\n\n---\n\nASSESSMENT DATA — ${lead.company || 'Client Organization'}\nContact: ${lead.firstName} ${lead.lastName}, ${lead.role || 'Security stakeholder'}\nCompany size: ${lead.size || 'Not specified'}\n\nOVERALL MATURITY SCORE: ${pct}% — ${matLabel} level (CMMI-based, 0–5 scale per control)\n\nDOMAIN SCORES:\n${domainData}\n\nCRITICAL AND PRIORITY GAPS (score ≤ 2/5):\n${gapData.length > 0 ? gapData : 'No critical gaps identified.'}\n\n---\n\nWrite a 4-paragraph executive security diagnosis (200–260 words total, NO bullet points, NO headers):\n\nParagraph 1 — MATURITY PROFILE: What this score pattern reveals about the organization's actual security posture.\nParagraph 2 — PRIMARY RISK EXPOSURE: Regulatory, operational, or reputational risk from the gaps. Reference LGPD/GDPR exposure, audit failure risk, incident probability.\nParagraph 3 — HIGHEST-LEVERAGE ACTIONS: The 2–3 specific controls that would produce the greatest maturity improvement. Be prescriptive.\nParagraph 4 — STRATEGIC OPPORTUNITY: How resolving these gaps creates measurable business value.`;
}

function roadmapPrompt(phase: number, pct: number, gaps: ReturnType<typeof getGaps>, lead: LeadData): string {
  const gapSummary = gaps.map(g => `[${g.score}/5] ${g.fw[0]}: ${g.text.substring(0, 70)}...`).join('\n');
  const instructions = [
    'Phase 1 (Months 1-3): Write 3-4 dense sentences on IMMEDIATE actions. Focus on critical gaps (score 0-1). Name specific controls from NIST/CIS/ISO. Be prescriptive.',
    'Phase 2 (Months 4-8): Write 3-4 dense sentences on FORMALIZATION and MONITORING. Focus on gaps scored 2-3. Address process documentation, testing, tool implementation, and governance. Connect to ISO 27001 readiness.',
    'Phase 3 (Months 9-12): Write 3-4 dense sentences on OPTIMIZATION and CERTIFICATION READINESS. Describe how the organization achieves Managed or Optimized posture. Reference ISO 27001 certification and measurable metrics.',
  ];
  return `${sysPrompt()}\n\nCompany: ${lead.company || 'Client'} · Overall maturity: ${pct}% · Gaps: ${gaps.length} priority controls\n\nGaps:\n${gapSummary}\n\n${instructions[phase]}\n\nWrite ONLY the paragraph. No preamble, no labels, no bullet points.`;
}

function proposalPrompt(pct: number, gaps: ReturnType<typeof getGaps>, lead: LeadData): string {
  return `${sysPrompt()}\n\nCompany: ${lead.company || 'Client'}\nContact: ${lead.firstName} ${lead.lastName}, ${lead.role || 'Stakeholder'}\nSize: ${lead.size || 'Not specified'}\nOverall maturity: ${pct}% · ${gaps.length} priority gaps · ${gaps.filter(g => g.score <= 1).length} critical\n\nWrite a tailored 4-paragraph commercial proposal (180-220 words, NO bullet points, NO headers) from Brandvakt Academy:\n\nParagraph 1 — SITUATION ACKNOWLEDGMENT: Acknowledge the client's maturity position and business risk.\nParagraph 2 — RECOMMENDED SOLUTION: Propose specific Brandvakt products (Security Awareness Training, PhishER, Compliance Suite) connecting each to specific gaps.\nParagraph 3 — EXPECTED OUTCOMES: What the client achieves 12 months after engaging Brandvakt Academy.\nParagraph 4 — NEXT STEP: A confident invitation to schedule a 30-minute architecture review call.`;
}

/* ═══════════════════════════════════════════════════════════
   SMART FALLBACKS (no API needed)
═══════════════════════════════════════════════════════════ */
function fallback(type: 'diagnosis' | 'phase0' | 'phase1' | 'phase2' | 'proposal', pct: number, gaps: ReturnType<typeof getGaps>, answers: Answers, lead: LeadData): string {
  const mat = matLevel(pct);
  const worst = [...DOMAINS].sort((a, b) => domainScore(a.id, answers) - domainScore(b.id, answers))[0];
  const critCount = gaps.filter(g => g.score <= 1).length;

  if (type === 'phase0') {
    return `The immediate priority is to address the ${critCount} controls currently at score 0–1. Begin with formalizing the asset inventory (CIS Control 1-2), implementing MFA across all administrative and remote access (CIS 6.3 / ISO A.8.5), and establishing a documented incident response procedure (NIST RS.RP). These three actions alone materially reduce the probability of a successful attack and are prerequisites for any subsequent compliance work.`;
  }
  if (type === 'phase1') {
    return `Months 4 through 8 should focus on elevating scores in the ${worst.name} domain from their current baseline to a minimum Defined level (3/5). This requires documented procedures with owner accountability, quarterly review cycles, and implementation of centralized logging with defined retention periods. Security awareness training must shift from ad-hoc to structured — scheduled, tracked, and tied to role-based risk profiles.`;
  }
  if (type === 'phase2') {
    return `The final quarter positions the organization for ISO 27001 certification readiness and a sustainable Managed maturity posture. This includes a formal management review cycle, internal audit capability, supplier risk assessment integration, and continuous improvement metrics tracked at the executive level. Achieving this state eliminates most due diligence objections in enterprise sales cycles and M&A processes.`;
  }
  if (type === 'proposal') {
    return `Your current security posture at ${pct}% reflects a transitional organization — one that has made initial investments in security but has not yet systematized its controls into a defensible, auditable framework. The ${gaps.length} priority gaps identified represent both operational risk and a missed opportunity to differentiate in regulated markets.\n\nBrandvakt Academy's Compliance Suite directly addresses your governance and framework gaps, providing automated controls mapping against ISO 27001, LGPD, and GDPR. Where human risk is a factor, our Security Awareness platform delivers role-specific training in 80+ languages with measurable behavioral change tracking. For organizations with phishing exposure, PhishER closes the loop between simulation and automated remediation training.\n\nOrganizations that complete a structured remediation cycle with Brandvakt Academy typically achieve a 25–40 percentage point maturity improvement within 12 months. This translates directly to ISO 27001 pre-audit readiness, LGPD compliance evidence packages, and the Human Risk Score documentation demanded by enterprise procurement and cyber insurers.\n\nOur next step is a 30-minute architecture review call — no sales pressure, just a Brandvakt specialist arriving with a pre-mapped remediation plan for your specific control profile. This call is complimentary and actionable regardless of whether you engage further.`;
  }
  // diagnosis
  return `With an overall score of ${pct}% (${mat.l} level), ${lead.company || 'this organization'} presents a security posture that reflects uneven control maturity across the five NIST CSF domains. The ${worst.name} domain — scoring lowest in this assessment — represents the most acute point of operational exposure, where informal or absent controls create systemic vulnerability to both opportunistic and targeted threats.\n\nThe ${critCount} critical gaps (score 0–1) represent immediate regulatory and operational risk. In jurisdictions subject to LGPD or GDPR, the absence of documented controls in these areas constitutes a compliance deficit that audit bodies can act upon without a triggering incident. The reputational and financial exposure in a breach scenario is compounded by the absence of a tested incident response capability.\n\nThe highest-leverage immediate actions are: formalizing the asset inventory and classification scheme, implementing MFA universally (the single highest-return security control per CISA and CIS data), and testing the incident response plan against a tabletop scenario. These three actions, executed within 90 days, would elevate the overall score by an estimated 8–12 percentage points.\n\nResolving the identified control gaps positions the organization not merely to reduce risk, but to compete for enterprise contracts, pass vendor security questionnaires, and qualify for preferred cyber insurance terms. For organizations pursuing ISO 27001 certification, this assessment represents the gap analysis that typically costs $15,000–$40,000 from a Big-4 advisory firm.`;
}

/* ═══════════════════════════════════════════════════════════
   STREAMING HELPER
═══════════════════════════════════════════════════════════ */
async function streamToState(
  prompt: string,
  onChunk: (text: string) => void,
  fallbackText: string
): Promise<void> {
  try {
    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 700,
        stream: true,
        system: sysPrompt(),
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!res.ok) throw new Error('API error');

    const reader = res.body!.getReader();
    const dec = new TextDecoder();
    let text = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = dec.decode(value);
      for (const line of chunk.split('\n')) {
        if (line.startsWith('data: ')) {
          const d = line.slice(6).trim();
          if (d === '[DONE]') continue;
          try {
            const parsed = JSON.parse(d);
            if (parsed.type === 'content_block_delta' && parsed.delta?.type === 'text_delta') {
              text += parsed.delta.text;
              onChunk(text);
            }
          } catch { /* skip malformed */ }
        }
      }
    }
    if (!text) onChunk(fallbackText);
  } catch {
    // Simulate typing for fallback
    let displayed = '';
    for (let i = 0; i < fallbackText.length; i += 6) {
      displayed += fallbackText.slice(i, i + 6);
      onChunk(displayed);
      await new Promise(r => setTimeout(r, 10));
    }
  }
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
/* Display-only map: English maturity level (kept for AI prompts / report) → i18n key. */
const LEVEL_KEY: Record<string, string> = {
  Initial: 'level_initial', Repeatable: 'level_repeatable', Defined: 'level_defined',
  Managed: 'level_managed', Optimized: 'level_optimized',
};
const DATE_LOCALE: Record<string, string> = { en: 'en-GB', pt: 'pt-BR', fr: 'fr-FR' };

export default function MaturityAssessment() {
  const { t, i18n } = useTranslation('csma');
  const lang = isLang(i18n.language) ? i18n.language : 'en';
  const tLevel = (en: string) => t(LEVEL_KEY[en] ?? 'level_initial');

  useMeta({
    title: 'Cybersecurity Maturity Assessment',
    description: t('meta_desc'),
  });

  const [phase,         setPhase]         = useState<Phase>('hero');
  const [answers,       setAnswers]       = useState<Answers>({});
  const [currentDomain, setCurrentDomain] = useState(0);
  const [loaderStep,    setLoaderStep]    = useState(-1);
  const [leadData,      setLeadData]      = useState<LeadData>({ firstName: '', lastName: '', email: '', company: '', role: '', size: '' });
  const [captureErr,    setCaptureErr]    = useState('');
  const [aiDiagnosis,   setAiDiagnosis]   = useState('');
  const [roadmapPhases, setRoadmapPhases] = useState(['', '', '']);
  const [aiProposal,    setAiProposal]    = useState('');
  const [streaming,     setStreaming]     = useState(false);
  const [reportStatus,  setReportStatus]  = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const topRef = useRef<HTMLDivElement>(null);

  function scrollTop() { topRef.current?.scrollIntoView({ behavior: 'smooth' }); }

  /* ── Email the full report to the lead (BCC Brandvakt). Best-effort. ── */
  async function sendReport() {
    setReportStatus('sending');
    try {
      const res = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: leadData.email,
          company: leadData.company,
          firstName: leadData.firstName,
          lastName: leadData.lastName,
          role: leadData.role,
          maturityScore: pct,
          maturityLevel: mat.l,
          diagnosis: aiDiagnosis,
          roadmap: roadmapPhases,
          proposal: aiProposal,
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setReportStatus('sent');
    } catch {
      setReportStatus('error');
    }
  }

  /* ── Answers ── */
  function setAns(key: string, val: number) {
    setAnswers(prev => ({ ...prev, [key]: val }));
  }

  /* ── Navigation ── */
  function navigate(dir: number) {
    const n = currentDomain + dir;
    if (n < 0 || n >= DOMAINS.length) return;
    setCurrentDomain(n);
    scrollTop();
  }

  function handleNext() {
    if (currentDomain < DOMAINS.length - 1) { navigate(1); } else { startCapture(); }
  }

  function startCapture() {
    setPhase('capture');
    scrollTop();
  }

  /* ── Capture submit ── */
  /* ── Lead capture (best-effort, never blocks the UI) ── */
  async function submitLead() {
    const payload = JSON.stringify({ ...leadData, maturityScore: pct, maturityLevel: mat.l });
    const post = () =>
      fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload });
    try {
      const r = await post();
      if (!r.ok) throw new Error('lead post failed');
    } catch {
      // single simple retry; swallow any error — lead capture is best-effort
      try { await post(); } catch { /* ignore */ }
    }
  }

  function handleCaptureSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!leadData.firstName || !leadData.email || !leadData.company) {
      setCaptureErr(t('cap_err'));
      return;
    }
    setCaptureErr('');
    void submitLead();   // fire-and-forget, in parallel with the report flow
    setPhase('loading');
    scrollTop();
    runLoader();
  }

  /* ── Loading sequence ── */
  function runLoader() {
    let step = 0;
    const interval = setInterval(() => {
      setLoaderStep(step);
      step++;
      if (step >= LOADER_KEYS.length) {
        clearInterval(interval);
        setTimeout(() => { setPhase('results'); scrollTop(); runAI(); }, 700);
      }
    }, 900);
  }

  /* ── AI generation ── */
  async function runAI() {
    setStreaming(true);
    setReportStatus('idle');
    const pct  = overallPct(answers);
    const mat  = matLevel(pct);
    const gaps = getGaps(answers);

    /* Diagnosis */
    await streamToState(
      diagnosisPrompt(pct, mat.l, gaps, answers, leadData),
      text => setAiDiagnosis(text),
      fallback('diagnosis', pct, gaps, answers, leadData)
    );

    /* Roadmap phases (sequential) */
    const phases: ['phase0', 'phase1', 'phase2'] = ['phase0', 'phase1', 'phase2'];
    for (let i = 0; i < 3; i++) {
      await new Promise(r => setTimeout(r, 300));
      const fb = fallback(phases[i], pct, gaps, answers, leadData);
      await streamToState(
        roadmapPrompt(i, pct, gaps, leadData),
        text => setRoadmapPhases(prev => { const next = [...prev]; next[i] = text; return next; }),
        fb
      );
    }

    /* Proposal */
    await new Promise(r => setTimeout(r, 300));
    await streamToState(
      proposalPrompt(pct, gaps, leadData),
      text => setAiProposal(text),
      fallback('proposal', pct, gaps, answers, leadData)
    );

    setStreaming(false);
  }

  /* ── Restart ── */
  function restart() {
    setAnswers({});
    setCurrentDomain(0);
    setLoaderStep(-1);
    setLeadData({ firstName: '', lastName: '', email: '', company: '', role: '', size: '' });
    setAiDiagnosis('');
    setRoadmapPhases(['', '', '']);
    setAiProposal('');
    setReportStatus('idle');
    setStreaming(false);
    setPhase('hero');
    scrollTop();
  }

  /* ── Computed ── */
  const pct     = overallPct(answers);
  const mat     = matLevel(pct);
  const gaps    = getGaps(answers);
  const progPct = Math.round(answeredCount(answers) / totalQ() * 100);
  const isLast  = currentDomain === DOMAINS.length - 1;
  const domain  = DOMAINS[currentDomain];

  /* ═══════════════════════════════════════════════════════
     RENDER
  ═══════════════════════════════════════════════════════ */
  return (
    <div ref={topRef} style={{ background: C.bg, minHeight: '100vh', fontFamily: 'var(--font-sans)', color: C.white }}>

      {/* ─── HERO ─────────────────────────────────────── */}
      {(phase === 'hero' || phase === 'assessment' || phase === 'capture' || phase === 'loading' || phase === 'results') && (
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(18px,4vw,48px) 48px', borderBottom: `1px solid ${C.border}` }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: C.red }}>
            <span style={{ width: 20, height: 1, background: C.red, display: 'inline-block' }} />
            {t('hero_badge')}
          </div>

          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(30px,5.5vw,58px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: C.white, marginBottom: 18, maxWidth: 760 }}>
            {t('hero_title_a')}{' '}
            <span style={{ color: C.red }}>{t('hero_title_em')}</span>{t('hero_title_b')}
          </h1>

          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.7, maxWidth: 540, marginBottom: 32, fontWeight: 300 }}>
            {t('hero_sub')}
          </p>

          {/* Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
            {[
              { label: 'NIST CSF 2.0',          red: true },
              { label: 'CIS Controls v8',        red: true },
              { label: 'ISO 27001:2022',         red: true },
              { label: t('pill_controls'),       red: false },
              { label: t('pill_time'),           red: false },
              { label: t('pill_free'),           red: false },
            ].map(p => (
              <span key={p.label} style={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.05em',
                padding: '5px 12px', borderRadius: 99,
                border: `1px solid ${p.red ? 'rgba(79,230,210,0.30)' : C.border2}`,
                color: p.red ? C.red : C.muted,
              }}>{p.label}</span>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', width: 'fit-content', borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.border}` }}>
            {[
              { num: '5',  lbl: t('stat1_lbl') },
              { num: '3',  lbl: t('stat2_lbl') },
              { num: 'AI', lbl: t('stat3_lbl') },
            ].map((s, i) => (
              <div key={s.num} style={{
                padding: '18px 28px', textAlign: 'center',
                background: C.bg2,
                borderLeft: i > 0 ? `1px solid ${C.border}` : 'none',
              }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 26, fontWeight: 700, color: C.white, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 4, letterSpacing: '0.03em' }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Hero CTA */}
          {phase === 'hero' && (
            <button
              onClick={() => { setPhase('assessment'); scrollTop(); }}
              style={{
                marginTop: 36, display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                color: '#000', background: C.red, border: `1px solid ${C.red}`,
                padding: '13px 28px', borderRadius: 8, cursor: 'pointer',
              }}
            >
              {t('hero_cta')} <ArrowRight size={16} />
            </button>
          )}
        </section>
      )}

      {/* ─── ASSESSMENT ───────────────────────────────── */}
      {phase === 'assessment' && (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(18px,4vw,48px) 80px' }}>

          {/* Step nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, borderBottom: `1px solid ${C.border}`, margin: '36px 0 32px', overflowX: 'auto' }}>
            {DOMAINS.map((d, i) => {
              const done = d.questions.every((_, qi) => answers[`${d.id}_${qi}`] !== undefined);
              const active = i === currentDomain;
              return (
                <button key={d.id}
                  onClick={() => { setCurrentDomain(i); scrollTop(); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '16px 20px 16px 0', cursor: 'pointer',
                    marginBottom: -1, background: 'none',
                    borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: 2,
                    borderBottomColor: active ? C.red : done ? 'rgba(34,197,94,0.6)' : 'transparent',
                    flexShrink: 0,
                  }}
                >
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 600,
                    background: active ? C.red : done ? 'rgba(34,197,94,0.15)' : 'none',
                    border: `1px solid ${active ? C.red : done ? 'rgba(34,197,94,0.4)' : C.border2}`,
                    color: active ? '#fff' : done ? C.green : C.muted,
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {done && !active ? '✓' : i + 1}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: active || done ? C.white : C.muted2, whiteSpace: 'nowrap' }}>{t(`dom_${d.id}_short`)}</span>
                </button>
              );
            })}
          </div>

          {/* Progress */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: C.muted, marginBottom: 8 }}>
              <span>{t('domain_counter', { n: currentDomain + 1, total: DOMAINS.length })}</span>
              <span>{t('progress_complete', { pct: progPct })}</span>
            </div>
            <div style={{ height: 2, background: C.bg4, borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progPct}%`, background: C.red, borderRadius: 2, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
            </div>
          </div>

          {/* Domain header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.red, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              {t('domain_counter', { n: currentDomain + 1, total: DOMAINS.length })} · NIST {domain.nist}
              <span style={{ flex: 1, height: 1, background: C.border, display: 'block' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: C.white, marginBottom: 6 }}>{t(`dom_${domain.id}_name`)}</h2>
            <p style={{ fontSize: 13, color: C.muted, maxWidth: 520 }}>{t(`dom_${domain.id}_desc`)}</p>
          </div>

          {/* Questions */}
          {domain.questions.map((q, qi) => {
            const key = `${domain.id}_${qi}`;
            const sel = answers[key];
            return (
              <div key={qi} style={{
                background: C.bg2, borderRadius: 16, padding: 24, marginBottom: 12,
                border: `1px solid ${sel !== undefined ? 'rgba(79,230,210,0.22)' : C.border}`,
                transition: 'border-color 0.2s',
              }}>
                {/* Framework tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                  {q.fw.map(f => (
                    <span key={f} style={{
                      fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '3px 8px', borderRadius: 99, background: 'rgba(79,230,210,0.06)', color: C.red, border: `1px solid rgba(79,230,210,0.30)`,
                    }}>{f}</span>
                  ))}
                </div>

                <div style={{ fontSize: 15, lineHeight: 1.65, color: C.white, marginBottom: 20 }}>{t(`q_${domain.id}_${qi}`)}</div>

                {/* CMMI Scale */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 6 }}>
                  {SCALE.map(s => {
                    const selected = sel === s.v;
                    return (
                      <button key={s.v}
                        onClick={() => setAns(key, s.v)}
                        style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                          padding: '12px 4px', borderRadius: 8, cursor: 'pointer',
                          background: selected ? 'rgba(79,230,210,0.10)' : C.bg3,
                          border: `1px solid ${selected ? C.red : C.border2}`,
                          transition: 'all 0.15s',
                          fontFamily: 'inherit',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: selected ? C.red : C.muted, lineHeight: 1 }}>{s.n}</span>
                        <span style={{ fontSize: 9, letterSpacing: '0.04em', textTransform: 'uppercase', color: selected ? 'rgba(79,230,210,0.7)' : C.muted2, textAlign: 'center', lineHeight: 1.2 }}>{t(`scale_${s.v}`)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Navigation buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
            <button
              onClick={() => navigate(-1)}
              disabled={currentDomain === 0}
              style={{
                fontFamily: 'inherit', fontSize: 14, fontWeight: 500,
                color: C.muted, background: 'none', border: `1px solid ${C.border2}`,
                padding: '12px 24px', borderRadius: 8, cursor: currentDomain === 0 ? 'not-allowed' : 'pointer',
                opacity: currentDomain === 0 ? 0.4 : 1, transition: 'all 0.2s',
              }}
            >
              ← {t('nav_prev')}
            </button>
            <button
              onClick={handleNext}
              style={{
                fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
                color: '#000', background: C.red, border: `1px solid ${C.red}`,
                padding: '12px 28px', borderRadius: 8, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s',
              }}
            >
              {isLast ? t('nav_getreport') : t('nav_next')} →
            </button>
          </div>
        </div>
      )}

      {/* ─── CAPTURE GATE ─────────────────────────────── */}
      {phase === 'capture' && (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px clamp(18px,4vw,48px) 80px' }}>
          <div style={{ maxWidth: 520, margin: '0 auto', background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 16, padding: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.red, marginBottom: 16 }}>{t('cap_badge')}</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: C.white, marginBottom: 10 }}>{t('cap_title')}</h2>
            <p style={{ fontSize: 14, color: C.muted, marginBottom: 28, lineHeight: 1.6 }}>{t('cap_sub')}</p>

            {captureErr && (
              <div style={{ background: 'rgba(79,230,210,0.08)', border: `1px solid rgba(79,230,210,0.2)`, borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 13, color: C.red }}>
                {captureErr}
              </div>
            )}

            <form onSubmit={handleCaptureSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <Field label={t('f_first')} value={leadData.firstName} onChange={v => setLeadData(p => ({ ...p, firstName: v }))} placeholder={t('ph_first')} />
                <Field label={t('f_last')}  value={leadData.lastName}  onChange={v => setLeadData(p => ({ ...p, lastName: v }))}  placeholder={t('ph_last')} />
              </div>
              <Field label={t('f_email')} type="email" value={leadData.email}   onChange={v => setLeadData(p => ({ ...p, email: v }))}   placeholder={t('ph_email')} mb={12} />
              <Field label={t('f_company')}         value={leadData.company} onChange={v => setLeadData(p => ({ ...p, company: v }))} placeholder={t('ph_company')} mb={12} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: C.muted, letterSpacing: '0.03em' }}>{t('f_role')}</label>
                <select value={leadData.role} onChange={e => setLeadData(p => ({ ...p, role: e.target.value }))}
                  style={{ background: C.bg3, border: `1px solid ${C.border2}`, borderRadius: 8, color: leadData.role ? C.white : C.muted2, fontFamily: 'inherit', fontSize: 14, padding: '10px 14px', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                  <option value="">{t('role_select')}</option>
                  {/* value stays English (feeds /api/lead + AI prompt); label is translated */}
                  {[
                    ['CISO / CSO', 'role_ciso'], ['CTO / CIO', 'role_cto'],
                    ['CEO / Managing Director', 'role_ceo'], ['IT Manager / IT Director', 'role_itmgr'],
                    ['Risk & Compliance Manager', 'role_risk'], ['Security Analyst', 'role_analyst'],
                    ['Consultant', 'role_consultant'], ['Other', 'role_other'],
                  ].map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: C.muted, letterSpacing: '0.03em' }}>{t('f_size')}</label>
                <select value={leadData.size} onChange={e => setLeadData(p => ({ ...p, size: e.target.value }))}
                  style={{ background: C.bg3, border: `1px solid ${C.border2}`, borderRadius: 8, color: leadData.size ? C.white : C.muted2, fontFamily: 'inherit', fontSize: 14, padding: '10px 14px', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                  <option value="">{t('size_select')}</option>
                  {/* value stays English (feeds /api/lead + AI prompt); label is translated */}
                  {[
                    ['1 – 50 employees', 'size_1'], ['50 – 200 employees', 'size_2'],
                    ['200 – 500 employees', 'size_3'], ['500 – 2,000 employees', 'size_4'],
                    ['2,000 – 10,000 employees', 'size_5'], ['10,000+ employees', 'size_6'],
                  ].map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
                </select>
              </div>

              <button type="submit"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', fontSize: 14, fontWeight: 600, color: '#000', background: C.red, border: `1px solid ${C.red}`, padding: '13px 28px', borderRadius: 8, cursor: 'pointer' }}>
                {t('cap_submit')} →
              </button>
            </form>

            <p style={{ fontSize: 11, color: C.muted2, marginTop: 14, lineHeight: 1.6 }}>
              {t('cap_consent')}{' '}
              <Link to="/privacy" style={{ color: C.muted, textDecoration: 'underline' }}>{t('cap_privacy_link')}</Link>.
            </p>
          </div>
        </div>
      )}

      {/* ─── LOADING ──────────────────────────────────── */}
      {phase === 'loading' && (
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          {/* Spinner */}
          <div style={{ width: 48, height: 48, border: `2px solid ${C.border2}`, borderTopColor: C.red, borderRadius: '50%', margin: '0 auto 28px', animation: 'csmaSpin 0.75s linear infinite' }} />

          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 8, letterSpacing: '-0.02em' }}>
            {t('loading_title')}
          </div>
          <div style={{ fontSize: 14, color: C.muted, marginBottom: 36 }}>
            {t('loading_sub')}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            {LOADER_KEYS.map((k, i) => (
              <div key={i} style={{
                fontSize: 13, color: C.muted, display: 'flex', alignItems: 'center', gap: 10,
                opacity: i <= loaderStep ? 1 : 0.1,
                transition: 'opacity 0.4s ease',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: i <= loaderStep ? C.red : C.muted2, flexShrink: 0 }} />
                {t(k)}
              </div>
            ))}
          </div>

          <style>{`@keyframes csmaSpin{to{transform:rotate(360deg)}}`}</style>
        </div>
      )}

      {/* ─── RESULTS ──────────────────────────────────── */}
      {phase === 'results' && (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px clamp(18px,4vw,48px) 80px' }}>

          {/* Result hero */}
          <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 16, padding: 32, marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, color: C.white, letterSpacing: '-0.02em', marginBottom: 4 }}>{leadData.company || t('res_org_fallback')}</h2>
              <p style={{ fontSize: 13, color: C.muted }}>
                {leadData.firstName} {leadData.lastName}{leadData.role ? ` · ${leadData.role}` : ''} · {t('res_generated_prefix')} {new Date().toLocaleDateString(DATE_LOCALE[lang], { day: '2-digit', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 52, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: mat.c }}>{pct}%</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: mat.c, marginTop: 4 }}>{tLevel(mat.l)}</div>
            </div>
          </div>

          {/* KPI grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 12, marginBottom: 20 }}>
            {[
              { label: t('kpi_overall'),   val: `${pct}%`,                    sub: t('kpi_overall_sub', { level: tLevel(mat.l) }), c: mat.c },
              { label: t('kpi_controls'),  val: String(totalQ()),              sub: 'NIST · CIS · ISO',    c: C.white },
              { label: t('kpi_critical'),  val: String(gaps.filter(g=>g.score<=1).length), sub: t('kpi_critical_sub'), c: C.red },
              { label: t('kpi_priority'),  val: String(gaps.length),          sub: t('kpi_priority_sub'), c: C.amber },
            ].map(k => (
              <div key={k.label} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.muted, marginBottom: 8 }}>{k.label}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 26, fontWeight: 700, color: k.c, lineHeight: 1, marginBottom: 4 }}>{k.val}</div>
                <div style={{ fontSize: 11, color: C.muted }}>{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Domain bars + Gaps (two columns) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, marginBottom: 20 }}>
            {/* Domain scores */}
            <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: C.white, marginBottom: 18 }}>{t('score_by_domain')}</div>
              {DOMAINS.map(d => {
                const sc = domainScore(d.id, answers);
                const p  = Math.round(sc / 5 * 100);
                const c  = p < 40 ? C.red : p < 70 ? C.amber : C.green;
                return (
                  <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.white, width: 80, flexShrink: 0 }}>{t(`dom_${d.id}_name`)}</div>
                    <div style={{ flex: 1, height: 4, background: C.bg4, borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${p}%`, background: c, borderRadius: 2, transition: 'width 1s cubic-bezier(0.4,0,0.2,1)' }} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, width: 36, textAlign: 'right', color: c, flexShrink: 0 }}>{p}%</div>
                  </div>
                );
              })}
            </div>

            {/* Gaps */}
            <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: C.white, marginBottom: 18 }}>
                {gaps.length === 0 ? t('gaps_none') : t('gaps_count', { n: gaps.length })}
              </div>
              {gaps.length === 0 ? (
                <p style={{ fontSize: 14, color: C.muted, padding: '8px 0' }}>{t('gaps_none_desc')}</p>
              ) : gaps.map((g, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: 12, borderRadius: 8, marginBottom: 8, background: C.bg3, border: `1px solid ${C.border}` }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 700,
                    background: g.score <= 1 ? 'rgba(79,230,210,0.10)' : 'rgba(245,158,11,0.10)',
                    color: g.score <= 1 ? C.red : C.amber,
                  }}>{g.score}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: C.white, lineHeight: 1.4, marginBottom: 3 }}>{t(`q_${g.domainId}_${g.qi}`).substring(0, 70)}...</div>
                    <div style={{ fontSize: 11, color: C.muted }}>{g.fw[0]} · {t('gap_score', { score: g.score })}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Diagnosis */}
          <AIBlock title={`Brandvakt AI · ${t('diag_title')}`} subtitle={t('diag_subtitle')} text={aiDiagnosis} streaming={streaming && !aiDiagnosis} />

          {/* Roadmap */}
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: C.white, marginBottom: 14, letterSpacing: '-0.01em' }}>
            {t('roadmap_title')}
          </div>
          {[
            { cls: C.red,   label: t('phase1_label'), period: t('phase1_period'), title: t('phase1_title'), idx: 0 },
            { cls: C.amber, label: t('phase2_label'), period: t('phase2_period'), title: t('phase2_title'), idx: 1 },
            { cls: C.green, label: t('phase3_label'), period: t('phase3_period'), title: t('phase3_title'), idx: 2 },
          ].map(ph => (
            <div key={ph.idx} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', borderBottom: `1px solid ${C.border}`, background: C.bg3 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 99, background: `${ph.cls}18`, color: ph.cls, border: `1px solid ${ph.cls}30` }}>{ph.label}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: C.white }}>{ph.title}</span>
                <span style={{ fontSize: 12, color: C.muted, marginLeft: 'auto' }}>{ph.period}</span>
              </div>
              <div style={{ padding: '18px 24px', fontSize: 13, lineHeight: 1.9, color: roadmapPhases[ph.idx] ? C.muted : C.muted2, whiteSpace: 'pre-wrap', minHeight: 80 }}>
                {roadmapPhases[ph.idx] || <BlinkCursor />}
              </div>
            </div>
          ))}

          {/* Commercial proposal */}
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: C.white, margin: '24px 0 14px', letterSpacing: '-0.01em' }}>
            {t('proposal_title')}
          </div>
          <div style={{ background: 'linear-gradient(135deg, #111113 0%, rgba(79,230,210,0.04) 100%)', border: '1px solid rgba(79,230,210,0.2)', borderRadius: 16, overflow: 'hidden', marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px', borderBottom: '1px solid rgba(79,230,210,0.15)', background: 'rgba(79,230,210,0.06)' }}>
              <PulseDot /><span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.red }}>Brandvakt AI · {t('proposal_badge')}</span>
            </div>
            <div style={{ padding: 28, fontSize: 14, lineHeight: 1.9, color: aiProposal ? C.white : C.muted2, whiteSpace: 'pre-wrap', minHeight: 120 }}>
              {aiProposal || <BlinkCursor />}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: C.white, borderRadius: 16, padding: '36px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, color: C.bg, letterSpacing: '-0.02em', marginBottom: 6 }}>{t('cta_title')}</h3>
              <p style={{ fontSize: 14, color: '#52525B' }}>{t('cta_sub')}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
              {!streaming && aiDiagnosis && (
                <button onClick={sendReport} disabled={reportStatus === 'sending'}
                  style={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 600, background: C.red, color: '#000', border: 'none', padding: '13px 24px', borderRadius: 8, cursor: reportStatus === 'sending' ? 'not-allowed' : 'pointer', opacity: reportStatus === 'sending' ? 0.7 : 1, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {reportStatus === 'sending' ? t('btn_email_sending')
                    : reportStatus === 'sent' ? t('btn_email_sent', { email: leadData.email })
                    : reportStatus === 'error' ? t('btn_email_error')
                    : t('btn_email_idle')}
                </button>
              )}
              <Link to="/contact"
                style={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 600, background: C.red, color: '#000', border: 'none', padding: '13px 24px', borderRadius: 8, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {t('btn_specialist')} <ExternalLink size={14} />
              </Link>
              <button onClick={() => window.print()}
                style={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 600, background: C.bg, color: '#fff', border: 'none', padding: '13px 24px', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Printer size={14} /> {t('btn_export')}
              </button>
              <Link to="/partners"
                style={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 500, background: 'none', color: '#52525B', border: '1px solid #D4D4D8', padding: '13px 20px', borderRadius: 8, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
                {t('btn_partner')}
              </Link>
            </div>
          </div>

          {/* Restart */}
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <button onClick={restart} style={{ fontSize: 13, color: C.muted, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <RotateCcw size={12} /> {t('btn_restart')}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '20px clamp(18px,4vw,48px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ fontSize: 12, color: C.muted }}>
          © {new Date().getFullYear()} <Link to="/" style={{ color: C.muted, textDecoration: 'none' }}>Brandvakt Academy</Link> · {t('footer_platform')}
        </p>
        <p style={{ fontSize: 12, color: C.muted }}>NIST CSF 2.0 · CIS Controls v8 · ISO/IEC 27001:2022</p>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SMALL REUSABLE SUBCOMPONENTS
═══════════════════════════════════════════════════════════ */
function Field({ label, value, onChange, placeholder, type = 'text', mb = 0 }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; mb?: number;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: mb || 0 }}>
      <label style={{ fontSize: 12, fontWeight: 500, color: C.muted, letterSpacing: '0.03em' }}>{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ background: C.bg3, border: `1px solid ${C.border2}`, borderRadius: 8, color: C.white, fontFamily: 'inherit', fontSize: 14, padding: '10px 14px', outline: 'none' }} />
    </div>
  );
}

function PulseDot() {
  return <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.red, display: 'inline-block', animation: 'csmaPulse 1.5s ease infinite' }} />;
}

function BlinkCursor() {
  return <span style={{ display: 'inline-block', width: 2, height: 16, background: C.red, verticalAlign: 'middle', marginLeft: 2, animation: 'csmaBlink 0.8s ease infinite' }} />;
}

function AIBlock({ title, subtitle, text, streaming }: { title: string; subtitle: string; text: string; streaming: boolean }) {
  return (
    <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: C.bg3, borderBottom: `1px solid ${C.border}` }}>
        <PulseDot />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted }}>{title}</span>
        <span style={{ fontSize: 13, fontWeight: 400, color: C.muted2, marginLeft: 'auto', fontStyle: 'italic' }}>{subtitle}</span>
      </div>
      <div style={{ padding: 28, fontSize: 14, lineHeight: 1.9, color: text ? C.white : C.muted2, whiteSpace: 'pre-wrap', minHeight: 120 }}>
        {text || <BlinkCursor />}
        {streaming && text && <BlinkCursor />}
      </div>
      <style>{`
        @keyframes csmaPulse{0%,100%{opacity:1}50%{opacity:0.4}}
        @keyframes csmaBlink{50%{opacity:0}}
      `}</style>
    </div>
  );
}
