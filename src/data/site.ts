import coach from "@/assets/coach.jpg";
import hero from "@/assets/hero.jpg";
import whey from "@/assets/prod-whey.jpg";
import creatina from "@/assets/prod-creatina.jpg";
import pretreino from "@/assets/prod-pretreino.jpg";
import vitaminas from "@/assets/prod-vitaminas.jpg";

export const images = { coach, hero, whey, creatina, pretreino, vitaminas };

export const site = {
  name: "FORJA PERFORMANCE",
  coach: "Rafael Meireles",
  whatsapp: "5511998877665",
  whatsappLabel: "(11) 99887-7665",
  email: "contato@forjaperformance.com.br",
  address: "Rua das Palmeiras, 480 — Vila Madalena, São Paulo/SP",
  hours: "Seg a Sex 06h–22h · Sáb 08h–14h",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
};

export const whatsappLink = (msg = "Olá! Quero saber mais sobre os treinos.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const differentials = [
  {
    title: "Treino personalizado",
    text: "Periodização montada a partir de avaliação física, rotina e histórico de lesões.",
  },
  {
    title: "Acompanhamento real",
    text: "Ajustes semanais de carga e volume, com feedback por vídeo dos seus exercícios.",
  },
  {
    title: "Suplementação guiada",
    text: "Protocolo simples e honesto: só o que realmente faz diferença no seu objetivo.",
  },
  {
    title: "Resultados medidos",
    text: "Bioimpedância a cada 45 dias, relatórios de força e evolução de medidas.",
  },
];

export const testimonials = [
  {
    name: "Camila Duarte",
    result: "-14 kg em 6 meses",
    text: "Nunca consegui manter constância antes. O acompanhamento semanal mudou tudo — hoje treino sem depender de motivação.",
    initials: "CD",
  },
  {
    name: "Bruno Tavares",
    result: "+9 kg de massa magra",
    text: "Saí de 62 kg travado para 71 kg com definição. A periodização de hipertrofia é cirúrgica.",
    initials: "BT",
  },
  {
    name: "Patrícia Lemos",
    result: "Maratona concluída em 4h12",
    text: "Treino de condicionamento e força na medida. Cheguei na prova inteira, sem dor no joelho.",
    initials: "PL",
  },
];

export const gallery = [
  { name: "Camila, 34", result: "-14 kg · 24 semanas" },
  { name: "Bruno, 27", result: "+9 kg massa magra · 32 semanas" },
  { name: "Diego, 41", result: "-11% gordura · 20 semanas" },
  { name: "Marina, 30", result: "-8 kg · 16 semanas" },
];

export type Workout = {
  slug: string;
  title: string;
  category: string;
  short: string;
  duration: string;
  price: string;
  goal: string;
  plan: string[];
  includes: string[];
};

export const workouts: Workout[] = [
  {
    slug: "emagrecimento",
    title: "Projeto Queima",
    category: "Emagrecimento",
    short: "Metabólico com foco em déficit calórico sustentável e preservação de massa magra.",
    duration: "12 semanas · 4x por semana",
    price: "R$ 349/mês",
    goal: "Reduzir de 8 a 15 kg mantendo força e massa muscular.",
    plan: [
      "Semanas 1–4: adaptação, base aeróbica e treino full body",
      "Semanas 5–8: circuitos metabólicos + força em upper/lower",
      "Semanas 9–12: intensificação com HIIT curto e ajuste calórico",
    ],
    includes: ["Avaliação física inicial", "Plano alimentar de apoio", "Checkins semanais"],
  },
  {
    slug: "hipertrofia",
    title: "Massa Bruta",
    category: "Hipertrofia",
    short: "Periodização em blocos para ganho consistente de volume muscular e força.",
    duration: "16 semanas · 5x por semana",
    price: "R$ 389/mês",
    goal: "Ganhar de 5 a 10 kg de massa magra com progressão de cargas controlada.",
    plan: [
      "Bloco 1: acumulação com alto volume (push/pull/legs)",
      "Bloco 2: intensificação com séries pesadas 4–6 reps",
      "Bloco 3: realimentação, deload e teste de força",
    ],
    includes: ["Planilha de cargas", "Protocolo de suplementação", "Análise de execução por vídeo"],
  },
  {
    slug: "condicionamento",
    title: "Motor Aeróbico",
    category: "Condicionamento",
    short: "Resistência cardiorrespiratória, mobilidade e força funcional para o dia a dia.",
    duration: "10 semanas · 4x por semana",
    price: "R$ 299/mês",
    goal: "Melhorar VO2, fôlego e capacidade de recuperação entre esforços.",
    plan: [
      "Base aeróbica em zona 2 três vezes por semana",
      "Intervalados progressivos a partir da semana 4",
      "Força de sustentação e core em dois dias fixos",
    ],
    includes: ["Zonas de treino personalizadas", "Testes de performance", "Rotina de mobilidade"],
  },
  {
    slug: "online",
    title: "Consultoria Online",
    category: "Online",
    short: "Treine em qualquer academia com plano digital, vídeos e suporte direto no WhatsApp.",
    duration: "Renovação mensal · flexível",
    price: "R$ 199/mês",
    goal: "Ter direção técnica profissional com total liberdade de horário e local.",
    plan: [
      "Anamnese completa por formulário e vídeo-chamada",
      "Treino no app com vídeos de execução",
      "Revisão de planilha a cada 4 semanas",
    ],
    includes: ["Suporte no WhatsApp", "App de treinos", "Reavaliação mensal"],
  },
  {
    slug: "presencial",
    title: "Personal Presencial",
    category: "Presencial",
    short: "Atendimento individual no studio, com correção de execução em tempo real.",
    duration: "8 ou 12 sessões por mês",
    price: "R$ 749/mês",
    goal: "Máxima técnica e segurança, ideal para iniciantes e retorno de lesão.",
    plan: [
      "Sessões de 60 minutos com acompanhamento 1 a 1",
      "Correção postural e ativação específica",
      "Progressão registrada sessão por sessão",
    ],
    includes: ["Studio equipado", "Avaliação a cada 45 dias", "Plano complementar para casa"],
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  short: string;
  description: string;
  usage: string;
  rating: number;
  reviews: { name: string; stars: number; text: string }[];
};

export const productCategories = ["Todos", "Whey", "Creatina", "Pré-treino", "Vitaminas"];

export const products: Product[] = [
  {
    slug: "whey-concentrado-900g",
    name: "Whey Concentrado 900g",
    category: "Whey",
    price: 189.9,
    image: whey,
    short: "24 g de proteína por dose, sabor baunilha.",
    description:
      "Whey protein concentrado de alta solubilidade, com 24 g de proteína e 5,4 g de BCAA por dose. Ideal para o pós-treino e para completar a meta diária de proteína.",
    usage: "Misture 1 dose (30 g) em 200 ml de água ou leite, 1 a 2 vezes ao dia.",
    rating: 4.8,
    reviews: [
      { name: "Bruno T.", stars: 5, text: "Dissolve fácil e não pesa no estômago." },
      { name: "Camila D.", stars: 5, text: "Sabor bom sem ser doce demais. Já é meu terceiro pote." },
    ],
  },
  {
    slug: "whey-isolado-900g",
    name: "Whey Isolado 900g",
    category: "Whey",
    price: 259.9,
    image: whey,
    short: "27 g de proteína, zero lactose.",
    description:
      "Proteína isolada por microfiltração, praticamente sem lactose e gordura. Absorção rápida para quem tem sensibilidade digestiva.",
    usage: "1 dose (30 g) em 250 ml de água imediatamente após o treino.",
    rating: 4.9,
    reviews: [
      { name: "Patrícia L.", stars: 5, text: "Zero desconforto, mesmo com intolerância." },
      { name: "Diego R.", stars: 4, text: "Excelente qualidade, preço justo pelo isolado." },
    ],
  },
  {
    slug: "creatina-monohidratada-300g",
    name: "Creatina Monohidratada 300g",
    category: "Creatina",
    price: 149.9,
    image: creatina,
    short: "100% pura, micronizada.",
    description:
      "Creatina monohidratada micronizada, sem aditivos. O suplemento com maior respaldo científico para força e potência.",
    usage: "3 a 5 g por dia, todos os dias, em qualquer horário.",
    rating: 4.9,
    reviews: [
      { name: "Marina S.", stars: 5, text: "Senti diferença clara na força em 3 semanas." },
      { name: "Rafael M.", stars: 5, text: "Uso contínuo há 2 anos. Básico e indispensável." },
    ],
  },
  {
    slug: "creatina-creapure-150g",
    name: "Creatina Creapure 150g",
    category: "Creatina",
    price: 119.9,
    image: creatina,
    short: "Matéria-prima alemã certificada.",
    description:
      "Versão com matéria-prima Creapure, referência mundial em pureza e ausência de contaminantes.",
    usage: "5 g diários dissolvidos em água ou junto do shake.",
    rating: 4.7,
    reviews: [{ name: "Lucas F.", stars: 5, text: "Sem gosto residual, dissolve rápido." }],
  },
  {
    slug: "pre-treino-black-300g",
    name: "Pré-treino Black 300g",
    category: "Pré-treino",
    price: 169.9,
    image: pretreino,
    short: "Cafeína, beta-alanina e citrulina.",
    description:
      "Fórmula com 250 mg de cafeína, 3,2 g de beta-alanina e 6 g de citrulina malato por dose para foco, resistência e vasodilatação.",
    usage: "1 dose (10 g) em 300 ml de água, 30 minutos antes do treino.",
    rating: 4.6,
    reviews: [
      { name: "Bruno T.", stars: 5, text: "Foco absurdo nos treinos de perna." },
      { name: "Ana P.", stars: 4, text: "Forte — meia dose já resolve para mim." },
    ],
  },
  {
    slug: "pre-treino-sem-cafeina-250g",
    name: "Pré-treino Sem Cafeína 250g",
    category: "Pré-treino",
    price: 139.9,
    image: pretreino,
    short: "Pump sem estimulantes, ideal à noite.",
    description:
      "Blend de citrulina, arginina e taurina para performance sem cafeína — perfeito para treinos noturnos.",
    usage: "1 dose (8 g) em água, 20 minutos antes do treino.",
    rating: 4.5,
    reviews: [{ name: "Patrícia L.", stars: 5, text: "Treino às 21h e continuo dormindo bem." }],
  },
  {
    slug: "multivitaminico-90-caps",
    name: "Multivitamínico 90 cápsulas",
    category: "Vitaminas",
    price: 89.9,
    image: vitaminas,
    short: "26 vitaminas e minerais.",
    description:
      "Complexo completo para quem treina forte, com zinco, magnésio, vitaminas do complexo B e D3.",
    usage: "1 cápsula ao dia junto de uma refeição principal.",
    rating: 4.7,
    reviews: [{ name: "Diego R.", stars: 5, text: "Melhorou minha recuperação e disposição." }],
  },
  {
    slug: "omega-3-120-caps",
    name: "Ômega 3 TG 120 cápsulas",
    category: "Vitaminas",
    price: 109.9,
    image: vitaminas,
    short: "1000 mg com alta concentração de EPA/DHA.",
    description:
      "Óleo de peixe purificado em forma de triglicerídeo, com melhor absorção que as versões comuns.",
    usage: "2 cápsulas ao dia com as refeições.",
    rating: 4.8,
    reviews: [{ name: "Marina S.", stars: 5, text: "Sem gosto de peixe e sem refluxo." }],
  },
];

export const plans = [
  {
    name: "Mensal",
    price: "R$ 249",
    period: "/mês",
    note: "Sem fidelidade",
    highlight: false,
    features: [
      "Treino personalizado atualizado a cada 4 semanas",
      "Acesso ao app de treinos",
      "Suporte por WhatsApp em horário comercial",
      "1 avaliação física",
    ],
  },
  {
    name: "Trimestral",
    price: "R$ 199",
    period: "/mês",
    note: "Economize 20% · R$ 597 à vista",
    highlight: true,
    features: [
      "Tudo do plano Mensal",
      "Ajustes de treino a cada 2 semanas",
      "Plano alimentar de apoio",
      "Avaliação física a cada 45 dias",
      "10% de desconto na loja de suplementos",
    ],
  },
  {
    name: "Anual",
    price: "R$ 159",
    period: "/mês",
    note: "Economize 36% · R$ 1.908 no ano",
    highlight: false,
    features: [
      "Tudo do plano Trimestral",
      "2 sessões presenciais por mês",
      "Protocolo de suplementação individual",
      "Análise de execução por vídeo ilimitada",
      "15% de desconto na loja de suplementos",
    ],
  },
];

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
