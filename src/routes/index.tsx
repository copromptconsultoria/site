import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const logo = { url: "/co-prompt.png" };
const hero = { url: "/fundo-site-topo-completo-3.png" };
const felipe = { url: "/felipe-original.png" };
const question = { url: "/duvida.png" };
const impacto = { url: "/impacto.png" };
const conversao = { url: "/conversao.png" };
const cliente = { url: "/cliente.png" };
const radarIa = { url: "/radar-ia.jpg" };
const tudoIgual = { url: "/tudo-igual.jpg" };
const cidade = { url: "/cultura-original.png" };
const acelerar = { url: "/acelerar.png" };
const ia = { url: "/inteligencia-artificial.png" };
const diagnostico = { url: "/diagnostico.png" };
const planejamento = { url: "/planejamento.png" };
const equipe = { url: "/equipe-ia.png" };
const culturas = { url: "/equipe-ia.png" };
const partida = { url: "/ponto-partida-diagrama.png" };
const chart = { url: "/top-of-mind-transparent.png" };
import { ContactIcon } from "@/components/contact-icon";
const whatsapp = { url: "/whatsapp.png" };

const whatsappUrl = `https://wa.me/5551993544466?text=${encodeURIComponent("Olá, Felipe! Tenho interesse na consultoria Co-Prompt e quero conversar sobre os desafios de marketing da minha empresa.")}`;
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Consultoria Co-Prompt — Marketing e IA | Felipe Leduino" },
    { name: "description", content: "Conheça a consultoria Co-Prompt de Felipe Leduino: diagnóstico e análise de impacto, planejamento e estratégia, e fit de culturas equipe + IA. Converse pelo WhatsApp." },
    { property: "og:title", content: "Consultoria Co-Prompt | Felipe Leduino" },
    { property: "og:description", content: "Marketing e IA trabalhando juntos em busca de resultados. Conheça o método completo e converse diretamente com Felipe Leduino." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});
function ContactButton({ compact = false }: { compact?: boolean }) {
  return <Button variant="conversion" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><img src={whatsapp.url} alt="" />{compact ? "Vamos conversar" : "Vamos conversar no WhatsApp"}<ArrowUpRight /></a></Button>;
}
const steps = [
  { image: diagnostico, title: "DIAGNÓSTICO E ANÁLISE DE IMPACTO", text: "Etapa inicial para identificação de potencial e avaliação de cenários. A missão é identificar o ponto de partida." },
  { image: planejamento, title: "PLANEJAMENTO E ESTRATÉGIA", text: "Desenho de novos objetivos, KPIs e plano de monitoramento" },
  { image: culturas, title: "FIT DE CULTURAS EQUIPE + IA", text: "É hora de chamar o seu time para jogo para co-criarmos juntos a forma de usar a IA e a capacidade individual de cada um." },
];
const challenges = ["melhorias nas etapas de growth", "criação de pensamento de awareness dentro de um time mergulhado em conversão", "união de estratégias de marketing e endomarketing", "aplicação de uma campanha no relacionamento com o cliente", "implementação de metodologias ágeis na rotina do setor", "mudança de cultura organizacional", "start de projetos que precisam sair do papel", "treinamento de visão estratégica para times táticos e operacionais", "treinamento de metodologias de marketing para times que querem pensar", "implementação de boas práticas de uso de IA"];
function Index() {
  return <>
    <header className="site-header"><div className="page-width header-inner"><a className="personal-logo" href="#inicio">FELIPE LEDUINO<span>Marketing, brandformance & growth</span></a><nav className="header-links" aria-label="Navegação principal"><Button variant="navigation" asChild><a href="#metodo">A consultoria</a></Button><Button variant="navigation" asChild><a href="#resultados">Resultados</a></Button><ContactButton compact /></nav></div></header>
    <main>
      <section className="presentation-hero" id="inicio"><h1 className="sr-only">Co-Prompt Consultoria — Marketing e IA trabalhando juntos em busca de resultados</h1><img className="hero-image" src={hero.url} alt="Co-Prompt Consultoria. Marketing e IA trabalhando juntos em busca de resultados." fetchPriority="high" width={1535} height={610} /><div className="hero-action"><ContactButton /></div></section>
      <section className="presentation-section intro" id="sobre"><h2 className="page-width intro-heading">VAMOS COMEÇAR?</h2><div className="page-width intro-layout"><img className="portrait" src={felipe.url} alt="Felipe Leduino" /><div><p>Eu sou <strong>FELIPE LEDUINO</strong>, publicitário com anos de vivência no marketing, com passagens por inúmeras agências e clientes.</p><p>E independente da época, havia sempre uma certeza e uma dúvida onde eu estava.</p><p>A certeza: o marketing trabalha bastante.</p><h2 className="question-line"><img src={question.url} alt="" /><span>A dúvida: a empresa sente o impacto deste trabalho árduo?</span></h2></div></div></section>
      <section className="presentation-section"><div className="page-width"><h2 className="section-title centered">Ao mesmo tempo, brotam algumas incertezas<br />que acompanham esta dúvida.</h2><div className="uncertainty-grid">{[{ image: impacto, text: "Sinto que minha marca impacta pouco" }, { image: conversao, text: "Tenho potencial inexplorado de conversão digital" }, { image: cliente, text: "Não sei como meu cliente pensa sobre a minha empresa de verdade" }].map(x => <article key={x.text}><img src={x.image.url} alt="" loading="lazy" /><p>{x.text}</p></article>)}</div><p className="section-end centered">Ou ainda pensa sobre: alta dependência de canais terceiros, estratégia insegura, ações sem direção, comercial sem discurso, baixa retenção…</p></div></section>
      <section className="presentation-section ai-section"><div className="page-width centered"><p className="section-lead">E ainda surge outro desafio, ainda maior,<br />para encarar no dia a dia.</p><h2 className="section-title">SABER USAR INTELIGÊNCIA ARTIFICIAL.</h2><div className="examples-grid"><img src={radarIa.url} alt="Capa do podcast Radar Inovador: “Sua empresa sabe qual IA você usa?”" loading="lazy" /><img src={tudoIgual.url} alt="Flyer “Tudo Igual!!” gerado pelo ChatGPT? Claro que sim!!!" loading="lazy" /></div></div></section>
      <div className="culture-indecision"><section className="culture-section"><div className="page-width culture-layout"><img className="city-photo" src={cidade.url} alt="Fotografia da cidade utilizada na apresentação" loading="lazy" /><div><p className="section-lead">Para entender melhor, vamos analisar</p><h2 className="section-title">A CULTURA:</h2><div className="stat"><strong>78%</strong><p>das empresas brasileiras não tomam decisões de marketing baseadas em dados.<br /><span>(Beanalytic)</span></p></div><div className="stat"><strong>70%</strong><p>do valor percebido na IA só será alcançado através de treinamento em busca de mudança de cultura das equipes.<br /><span>(Exame)</span></p></div></div></div></section>
      <section className="presentation-section indecision"><div className="page-width centered"><p className="section-lead">E aqui vem a indecisão que faz você perder o sono:</p><div className="choice-layout"><div><img src={acelerar.url} alt="" loading="lazy" /><h2>Acelerar os resultados<br />do meu marketing</h2></div><span className="choice-x">X</span><div><img src={ia.url} alt="" loading="lazy" /><h2>Implementar uma cultura<br />de convergência com IA</h2></div></div></div></section>
      </div><section className="presentation-section method-intro" id="metodo"><div className="page-width centered"><p className="section-lead">A consultoria</p><h2><img className="original-logo" src={logo.url} alt="Co-Prompt" loading="lazy" /></h2><p className="section-lead">é feita para estes casos.</p><div className="method-overview">{[{ image: diagnostico, text: "DIAGNÓSTICO E ANÁLISE DE IMPACTO" }, { image: planejamento, text: "PLANEJAMENTO E ESTRATÉGIA" }, { image: equipe, text: "CO-PROMPT NA PRÁTICA: FIT DE CULTURAS EQUIPE + IA" }].map((x, i) => <div key={x.text}><img src={x.image.url} alt="" loading="lazy" /><p>{x.text}</p>{i < 2 && <span className="flow-arrow" aria-hidden="true">→</span>}</div>)}</div></div></section>
      <section className="presentation-section method-details"><div className="page-width">{steps.map((step, i) => <article className="method-detail" key={step.title}><img src={step.image.url} alt="" loading="lazy" /><h3>{step.title}</h3><p>{step.text}</p>{i < 2 && <span className="down-arrow" aria-hidden="true">↓</span>}</article>)}</div></section>
      <section className="presentation-section starting-section"><div className="page-width starting-layout"><div><h2 className="section-title">TUDO COMEÇA<br />PELO PONTO<br />DE PARTIDA</h2><p>Sua dor inicial é o gatilho que fará seu marketing inovar por inteiro.</p></div><div className="starting-diagram"><img className="starting-image" src={partida.url} alt="Ponto de partida: Estratégia; Branding ou campanha; IA como agente real de melhoria; Treinamento de discurso comercial; Construção de objetivos." loading="lazy" /></div></div></section>
      <section className="presentation-section levels-section"><div className="page-width"><h2 className="topic-title"><span aria-hidden="true">+</span>Quais são os níveis da consultoria?</h2><div className="level-grid"><article><h3>Diagnóstico</h3><p>Entrevista de abertura para compreensão do negócio e das dores da empresa.</p></article><article><h3>Planejamento</h3><p>Novos objetivos<br />Novos KPIs<br />Métodos de avaliação periódica</p></article><article><h3>CO-PROMPT</h3><p>Dinâmica com equipe de marketing e setores parceiros para definirmos responsabilidades individuais e implementarmos o uso responsável de IA nas rotinas.</p></article></div></div></section>
      <section className="presentation-section challenges-section"><div className="page-width"><h2 className="topic-title"><span aria-hidden="true">+</span>E quais desafios de marketing eu posso resolver com este método?</h2><ul className="challenge-list">{challenges.map(x => <li key={x}>{x}</li>)}</ul><p className="more-text">E muito mais.</p></div></section>
      <section className="presentation-section" id="resultados"><div className="page-width case-layout"><div><p className="section-lead">Case:</p><h2 className="section-title">Da marca cheia de desafios a dois Top of Mind seguidos</h2><p className="case-question">O que fazer quando a identidade visual muda, mas internamente a empresa não se renova?</p><h3 className="case-path">O caminho</h3><ul className="case-list">{["Cruzamento de indicadores de marketing, comerciais e de atendimento;", "Metodologia OKR", "Plano de mídia 360°", "Uso de IA no planejamento e na execução"].map(x => <li key={x}><span aria-hidden="true">★</span>{x}</li>)}</ul></div><figure><img className="original-chart" src={chart.url} alt="Gráfico original Top of Mind RS, com Guarida, Auxiliadora e Quinto Andar. Guarida: 17,1 em 2020; 18,1 em 2021 e 2022; 12,1 em 2023; 9 em 2024; 22,4 em 2025; 24,5 em 2026, com dois Top of Mind seguidos." loading="lazy" /></figure></div></section>
      <section className="presentation-section closing" id="contato"><div className="page-width"><h2>Algumas coisas a IA não consegue responder sozinha.<br /><strong>Marketing é uma delas.</strong></h2><div className="closing-action"><ContactButton /></div><div className="contact-layout"><div className="signature"><img className="portrait" src={felipe.url} alt="Felipe Leduino" loading="lazy" /><div><h3>FELIPE LEDUINO</h3><p>/Consultoria Co-Prompt<br />/Marketing, brandformance & growth</p></div></div><div className="contact-links"><a href="https://www.linkedin.com/in/felipeleduino" target="_blank" rel="noopener noreferrer"><ContactIcon type="linkedin" />linkedin.com/in/felipeleduino</a><a href="mailto:felipe.leduino@gmail.com"><ContactIcon type="email" />felipe.leduino@gmail.com</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><ContactIcon type="whatsapp" />51 99354 4466</a></div></div></div></section>
    </main><footer className="site-footer"><div className="page-width">© 2026 Felipe Leduino · Consultoria Co-Prompt</div></footer><Button variant="conversion" className="floating-whatsapp" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Felipe no WhatsApp" title="Conversar com Felipe no WhatsApp"><img src={whatsapp.url} alt="" /></a></Button>
  </>;
}
