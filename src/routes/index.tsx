import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Music2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memories } from "@/data/memories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Veduu — A Little Love Letter" },
      { name: "description", content: "A little corner of the internet, made just for Veduu." },
      { property: "og:title", content: "For Veduu — A Little Love Letter" },
      { property: "og:description", content: "Some feelings are easier to build than to say." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VeduuPage,
});

const reasons = [
  { title: "Your smile", detail: "It has a way of making the whole day feel a little less ordinary." },
  { title: "Your little things", detail: "The tiny habits and passing comments you probably don't even notice — I do." },
  { title: "The way you pretend you don't care", detail: "You act like nothing affects you... but somehow I notice all the little things." },
  { title: "Your random moments", detail: "The unexpected jokes and thoughts that show up out of nowhere, and stay with me." },
  { title: "Your presence", detail: "Even a quiet moment feels different when you're somewhere in it." },
  { title: "Just... you", detail: "No grand reason. No list could quite get there. Just you, exactly as you are." },
];

const truths = [
  "You make ordinary days feel different.",
  "I notice more about you than I probably admit.",
  "Talking to you can completely change my mood.",
  "I like the little version of happiness that exists whenever you're around.",
  "And yes... I still smile when I see your name.",
];

const questions = [
  { question: "What's our perfect plan?", answers: ["A long drive and music", "Food, laughs, and no rush", "Anywhere, as long as it's us ♡"], reply: "That sounds exactly like us." },
  { question: "Who pretends not to care?", answers: ["You", "Also you", "Still you"], reply: "A very convincing performance, Veduu." },
  { question: "Who's smiling right now?", answers: ["Veduu", "Veduu", "Obviously Veduu ♡"], reply: "I had a feeling. Keep that smile." },
];

function SectionLabel({ letter, children }: { letter: string; children: ReactNode }) {
  return <div className="mb-10"><div className="mb-4 flex items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">({letter})</span><span className="h-px w-12 bg-gold/55" /><span className="text-gold/70">✦</span></div><h2 className="font-serif text-4xl leading-tight text-burgundy-deep sm:text-5xl">{children}</h2></div>;
}

function VeduuPage() {
  const [opened, setOpened] = useState(false);
  const [selectedReason, setSelectedReason] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [opened]);

  const openLetter = () => {
    setOpened(true);
    setAutoPlayMusic(true);
    window.setTimeout(() => document.getElementById("reasons")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="keepsake-drift absolute left-[7%] top-[12%] size-40 rounded-full bg-blush/40 blur-3xl" />
        <div className="keepsake-drift absolute right-[5%] top-[38%] size-56 rounded-full bg-lavender/40 blur-3xl [animation-delay:-5s]" />
        <div className="keepsake-drift absolute bottom-[10%] left-[20%] size-48 rounded-full bg-gold/15 blur-3xl [animation-delay:-9s]" />
        <div className="keepsake-drift absolute left-[55%] top-[65%] size-32 rounded-full bg-blush/30 blur-3xl [animation-delay:-3s]" />
        <span className="keepsake-star absolute left-[12%] top-[28%] font-serif text-xl text-gold/70">✦</span>
        <span className="keepsake-star absolute right-[14%] top-[18%] font-serif text-2xl text-burgundy/45 [animation-delay:-1.2s]">♡</span>
        <span className="keepsake-star absolute bottom-[18%] right-[11%] font-serif text-xl text-gold/65 [animation-delay:-2.1s]">✦</span>
      </div>

      {!opened ? (
        <section className="relative z-10 grid min-h-screen place-items-center px-6 py-16 text-center">
          <div className="keepsake-paper keepsake-rise relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-burgundy/15 px-7 py-14 sm:px-16 sm:py-18">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <span className="absolute left-7 top-7 font-serif text-2xl text-burgundy/25">♡</span>
            <span className="absolute bottom-7 right-8 font-serif text-xl text-gold/65">✦</span>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">A little note, just for you</p>
            <h1 className="font-serif text-6xl font-medium leading-[0.9] text-burgundy sm:text-8xl md:text-9xl">
              Hey, <span className="italic text-burgundy-deep">Veduu...</span>
            </h1>
            <p className="mx-auto mt-9 max-w-xl font-serif text-2xl italic leading-snug text-ink-soft sm:text-3xl">
              This little corner of the internet is just for you.
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Because some feelings are easier to build than to say.
            </p>
            <Button onClick={openLetter} className="mt-10 h-auto rounded-full border border-burgundy/30 bg-burgundy px-8 py-4 font-medium text-primary-foreground shadow-[0_12px_25px_oklch(0.39_0.105_8_/_25%)] transition-all hover:-translate-y-0.5 hover:bg-burgundy-deep hover:shadow-[0_18px_30px_oklch(0.39_0.105_8_/_32%)]">
              Open this <span aria-hidden="true">♡</span><ArrowDown className="size-4" />
            </Button>
            <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Take your time</p>
          </div>
        </section>
      ) : (
        <>
          {autoPlayMusic && <iframe
            aria-hidden="true"
            className="pointer-events-none absolute size-px opacity-0"
            src="https://www.youtube-nocookie.com/embed/y7tHZ3WeJAw?autoplay=1&playsinline=1&rel=0"
            width="1"
            height="1"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
            title="Dandelions by Ruth B. autoplay"
          />}
          <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
              <a href="#top" className="font-serif text-xl italic text-burgundy">Veduu</a>
              <nav aria-label="Page sections" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-ink-soft sm:gap-6 sm:text-[11px] sm:tracking-[0.18em]">
                <a href="#reasons" className="transition-colors hover:text-burgundy">Why you</a>
                <a href="#moments" className="transition-colors hover:text-burgundy">Moments</a>
                <a href="#letter" className="transition-colors hover:text-burgundy">Letter</a>
                <a href="#surprise" className="hidden transition-colors hover:text-burgundy sm:inline">Surprise</a>
              </nav>
              <div className="relative">
                <Button variant="ghost" size="icon" aria-label="Music options" aria-expanded={musicOpen} onClick={() => setMusicOpen((value) => !value)} className="size-9 rounded-full text-burgundy hover:bg-blush/40">
                  <Music2 className="size-4" />
                </Button>
                {musicOpen && <div className="absolute right-0 top-11 z-40 w-72 border border-border bg-cream-soft p-4 shadow-lg">
                  <p className="font-serif text-lg text-burgundy">Our little soundtrack</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Dandelions — Ruth B.</p>
                  <iframe
                    className="mt-3 rounded-xl"
                    src={`https://open.spotify.com/embed/track/2eAvDnpXP5W0cVtiI0PUxV?utm_source=generator${autoPlayMusic ? "&autoplay=1" : ""}`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Dandelions by Ruth B."
                  />
                </div>}
              </div>
            </div>
          </header>

          <section id="top" className="relative z-10 grid min-h-[84vh] place-items-center px-6 py-24 text-center">
            <div className="keepsake-rise mx-auto max-w-3xl">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">A keepsake, opened</p>
              <h1 className="font-serif text-7xl font-medium leading-[0.85] text-burgundy sm:text-8xl md:text-9xl">For<span className="mt-2 block italic text-burgundy-deep">Veduu,</span></h1>
              <p className="mt-8 font-serif text-2xl italic text-ink-soft sm:text-3xl">the girl who somehow became my favorite part of every day.</p>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">I don't know exactly when it happened... but somewhere between our conversations, your smile, your little reactions, and all those moments you probably didn't think mattered, you became someone incredibly special to me.</p>
              <a href="#reasons" className="mt-10 inline-flex items-center gap-3 rounded-full border border-burgundy/30 bg-cream-soft/60 px-6 py-3 text-sm text-burgundy backdrop-blur-md transition-colors hover:bg-burgundy hover:text-primary-foreground">There's something I want to tell you <ArrowDown className="size-4" /></a>
            </div>
          </section>

          <section id="reasons" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-24">
            <SectionLabel letter="a">Why you?</SectionLabel>
            <p className="-mt-5 mb-9 max-w-xl text-sm leading-relaxed text-muted-foreground">It's never just one thing. Here are a few of the little ones.</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {reasons.map((reason, index) => <button key={reason.title} type="button" onClick={() => setSelectedReason(selectedReason === index ? null : index)} aria-expanded={selectedReason === index} className="keepsake-card group min-h-48 rounded-2xl border border-foreground/10 bg-cream-soft/75 p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span className="font-mono text-[11px] text-gold">0{index + 1}</span>
                <span className="mt-3 block font-serif text-2xl italic text-burgundy">{reason.title}</span>
                <span className="mt-3 block text-sm leading-relaxed text-ink-soft">{selectedReason === index ? reason.detail : "Tap to unfold this thought."}</span>
              </button>)}
            </div>
          </section>

          <section className="relative z-10 border-y border-foreground/10 bg-cream-soft/40 px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="reveal-on-scroll"><SectionLabel letter="b">Things I probably don't say enough...</SectionLabel></div>
              <div className="space-y-7 sm:space-y-9">
                {truths.map((truth, index) => <p key={truth} style={{ transitionDelay: `${index * 90}ms` }} className="reveal-on-scroll max-w-3xl font-serif text-2xl leading-snug text-burgundy-deep sm:text-4xl">{truth}</p>)}
              </div>
            </div>
          </section>

          <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="reveal-on-scroll"><SectionLabel letter="c">Okay Veduu, let's see how well you know me...</SectionLabel></div>
            <div className="grid gap-4 md:grid-cols-3">
              {questions.map((item, questionIndex) => <div key={item.question} className="keepsake-card reveal-on-scroll rounded-2xl border border-foreground/10 bg-cream-soft/75 p-6 backdrop-blur-md">
                <h3 className="font-serif text-2xl text-burgundy-deep">{item.question}</h3>
                <div className="mt-5 flex flex-col gap-2">
                  {item.answers.map((answer, answerIndex) => <Button key={`${answer}-${answerIndex}`} variant="outline" onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: answerIndex }))} className={`h-auto min-h-10 justify-start whitespace-normal rounded-sm border-foreground/15 bg-background/60 px-3 py-2 text-left text-xs font-normal text-foreground shadow-none hover:border-burgundy/40 hover:bg-blush/25 ${answers[questionIndex] === answerIndex ? "border-burgundy/50 bg-blush/30" : ""}`}>
                    {answer}
                  </Button>)}
                </div>
                {answers[questionIndex] !== undefined && <p className="mt-4 font-serif text-lg italic text-burgundy">{item.reply}</p>}
              </div>)}
            </div>
          </section>

          <section id="moments" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-24">
            <div className="reveal-on-scroll"><SectionLabel letter="d">Little moments I keep</SectionLabel></div>
            <div className="relative grid gap-5 md:grid-cols-2">
              {memories.map((memory, index) => <article key={memory.title} className="keepsake-card reveal-on-scroll overflow-hidden rounded-2xl border border-foreground/10 bg-cream-soft/75 p-6 backdrop-blur-md" style={{ transitionDelay: `${index * 120}ms` }}>
                {memory.photo ? (
                  <>
                    <img
                      src={memory.photo}
                      alt={memory.title}
                      className="mb-5 aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
                      style={{ objectPosition: memory.photoPosition ?? "center" }}
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                        event.currentTarget.nextElementSibling?.removeAttribute("hidden");
                      }}
                    />
                    <MemoryPhotoFallback index={index} hidden />
                  </>
                ) : (
                  <MemoryPhotoFallback index={index} />
                )}
                <p className="font-mono text-[11px] text-gold">{memory.date}</p>
                <h3 className="mt-2 font-serif text-2xl italic text-burgundy">{memory.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{memory.description}</p>
              </article>)}
            </div>
          </section>

          <section id="letter" className="relative z-10 mx-auto max-w-3xl scroll-mt-20 px-6 py-20 sm:py-24">
            <div className="reveal-on-scroll"><SectionLabel letter="e">If I could say just one thing...</SectionLabel></div>
            <div className="keepsake-paper reveal-on-scroll rounded-2xl border border-foreground/10 p-7 backdrop-blur-md sm:p-12">
              <p className="font-serif text-2xl leading-snug text-burgundy-deep sm:text-3xl">Veduu,</p>
              <div className="mt-6 space-y-5 font-serif text-xl leading-relaxed text-ink-soft sm:text-2xl">
                <p>I don't know what the future looks like.<br />I don't know where this story goes.</p>
                <p>But I know that meeting you,<br />knowing you,<br />and having you somewhere in my life<br />has made my world a little more beautiful.</p>
                <p>I don't need a perfect answer from you.</p>
                <p>I just wanted you to know...</p>
              </div>
              <p className="mt-7 font-serif text-3xl italic text-burgundy sm:text-4xl">I love you.</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">And I hope you always know how special you are to me.</p>
            </div>
          </section>

          <section id="surprise" className="relative z-10 mx-auto max-w-3xl scroll-mt-20 px-6 py-20 pb-24 sm:py-24 sm:pb-28">
            <div className="reveal-on-scroll"><SectionLabel letter="f">One last thing...</SectionLabel></div>
            <div className="reveal-on-scroll relative overflow-hidden bg-burgundy-deep px-7 py-12 text-center text-primary-foreground sm:px-14 sm:py-16">
              <Sparkles className="keepsake-shimmer mx-auto size-5 text-gold" aria-hidden="true" />
              {!surpriseOpen ? <>
                <p className="mt-5 font-serif text-3xl italic sm:text-4xl">I have one more thing to say.</p>
                <Button onClick={() => setSurpriseOpen(true)} className="mt-8 h-auto rounded-full border border-gold/50 bg-gold/15 px-6 py-3 text-primary-foreground shadow-none hover:bg-gold/25">Open when you're ready</Button>
              </> : <div className="keepsake-rise">
                <p className="mt-5 font-serif text-2xl italic text-blush">Okay... I lied.</p>
                <p className="mt-2 font-serif text-4xl text-primary-foreground sm:text-5xl">Veduu <span aria-hidden="true">♡</span></p>
                <p className="mt-4 font-serif text-xl italic text-primary-foreground/80">You're my favorite notification.</p>
                <Button onClick={() => { setConfetti(true); window.setTimeout(() => setConfetti(false), 2200); }} className="mt-8 h-auto rounded-full bg-gold px-6 py-3 text-burgundy-deep shadow-none hover:bg-gold/90">Okay, now go smile</Button>
                {confetti && <>
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 overflow-hidden">
                    {[
                      "left-1/4 bottom-8 text-gold",
                      "left-1/3 bottom-4 text-blush [animation-delay:80ms]",
                      "left-1/2 bottom-6 text-gold [animation-delay:160ms]",
                      "left-2/3 bottom-3 text-blush [animation-delay:60ms]",
                      "left-3/4 bottom-8 text-gold [animation-delay:200ms]",
                    ].map((particle) => <span key={particle} className={`keepsake-confetti absolute font-serif text-2xl ${particle}`}>✦</span>)}
                  </div>
                  <p role="status" className="relative mt-5 font-serif text-xl text-blush" aria-live="polite">A little joy, just for you.</p>
                </>}
              </div>}
            </div>
          </section>

          <footer className="relative z-10 border-t border-foreground/10 px-6 py-10 text-center">
            <p className="font-serif text-xl italic text-ink-soft">Made with a little bit of code,<br />a lot of memories,<br />and way too much love.</p>
            <p className="mt-5 font-serif text-2xl italic text-burgundy">For Veduu ♡</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Some things are better felt than explained.</p>
          </footer>
        </>
      )}
    </main>
  );
}

function MemoryPhotoFallback({ index, hidden = false }: { index: number; hidden?: boolean }) {
  return (
    <div
      aria-hidden="true"
      hidden={hidden}
      className={`mb-5 grid aspect-[4/3] place-items-center ${index % 2 ? "bg-lavender/30" : "bg-blush/30"}`}
    >
      <span className="font-serif text-3xl italic text-burgundy/60">a moment, kept</span>
    </div>
  );
}
