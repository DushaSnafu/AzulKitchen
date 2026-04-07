export interface BlogPost {
    slug: string;
    title: string;
    category: string;
    readTime: string;
    image: string;
    author: string;
    date: string;
    excerpt: string;
    content: string;
    faqs?: { question: string; answer: string }[];
}

export const posts: BlogPost[] = [
    {
        slug: "5-mythes-sur-le-jeune-intermittent",
        title: "5 Mythes sur le Jeûne Intermittent",
        category: "Science & Nutrition",
        readTime: "4 min read",
        image: "/blog_intermittent_fasting_1771764528571.png",
        author: "AzulKitchen Expert",
        date: "2026-04-05",
        excerpt: "Le jeûne intermittent est devenu viral, mais de nombreuses idées reçues persistent. Déconstruisons 5 mythes courants avec les dernières données scientifiques.",
        faqs: [
            {
                question: "Est-ce que le jeûne intermittent fait perdre du muscle ?",
                answer: "Non, s'il est pratiqué correctement avec un apport protéique adéquat lors des fenêtres de repas, le jeûne intermittent préserve la masse musculaire. Le corps puise principalement dans les réserves de graisse."
            },
            {
                question: "Puis-je boire du café pendant mon jeûne ?",
                answer: "Oui, le café noir (sans sucre ni lait), l'eau et le thé non sucrés ne rompent pas le jeûne. Ils peuvent même aider à réduire la sensation de faim."
            }
        ],
        content: `
<div class="mb-8 p-6 bg-[var(--color-brand-blue)]/5 rounded-3xl border border-[var(--color-brand-blue)]/10">
    <h3 class="text-xl font-bold mb-4 font-[family-name:var(--font-seasons)]">Points Clés (Ce que dit la science)</h3>
    <ul class="list-disc pl-5 space-y-2 opacity-90">
        <li>Le jeûne ne "ralentit" pas le métabolisme, il peut au contraire légèrement l'accélérer à court terme.</li>
        <li>Un jeûne court (16h) ne cause pas de fonte musculaire si l'apport en protéines est respecté.</li>
        <li>Sauter le petit-déjeuner n'est pas "dangereux", c'est une question de rythme circadien personnel.</li>
        <li>Boire du café noir ou du thé ne rompt pas votre état de jeûne.</li>
    </ul>
</div>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Introduction au Jeûne Intermittent</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Le jeûne intermittent (surtout la méthode 16/8) a séduit des millions de personnes cherchant à optimiser leur métabolisme et leur composition corporelle. Cependant, entre affirmations non prouvées et craintes infondées, le monde de la diététique se divise. En tant qu'architecte nutritionnel, il est de mon devoir de rétablir la vérité scientifique.
</p>

<blockquote>
    <p class="text-xl italic font-serif text-[var(--color-brand-blue)] opacity-80 border-l-4 border-[var(--color-brand-gold)] pl-4 my-8">
        "Le jeûne n'est pas un régime, c'est une horloge nutritionnelle. Ce n'est pas tant ce que vous mangez, mais quand vous le mangez qui informe vos gènes."
    </p>
</blockquote>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Mythe 1 : Le jeûne intermittent brûle le muscle</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    C’est l'une des plus grandes peurs des sportifs. La réalité biologique est que notre corps est programmé pour survivre. Lors d'un jeûne court (12 à 24 heures), le métabolisme puise son énergie en lipolysant les acides gras (le tissu adipeux) et en produisant des cétones, épargnant ainsi les acides aminés musculaires. 
    Les études cliniques démontrent que la préservation musculaire est équivalente entre une diète classique et le jeûne intermittent, <strong>à condition</strong> de consommer suffisamment de protéines lors de votre fenêtre de repas.
</p>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Mythe 2 : Ça ralentit votre métabolisme ("Mode Famine")</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    C'est faux. Le fameux "mode famine" (ou thermogenèse adaptative) survient après des <em>semaines</em> de restriction calorique sévère. Au contraire, les études montrent qu'un jeûne de 48 heures ou moins augmente le taux métabolique de 3,6 à 14%, grâce à une hausse de l'adrénaline et de la noradrénaline.
</p>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Mythe 3 : Le cerveau a absolument besoin de sucre le matin</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Le cerveau consomme effectivement du glucose, mais grâce à la gluconéogenèse, le foie est capable d'en produire à partir de substrats non-glucidiques après l'épuisement du glycogène. De plus, lors d'un jeûne prolongé, les corps cétoniques deviennent une "super-carburant" pour le cerveau, expliquant la fameuse sensation de clarté mentale rapportée par les jeûneurs.
</p>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Conclusion : Une optimisation pure, pas de magie</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Le jeûne intermittent s'avère être un excellent outil d'encadrement calorique et de longévité (grâce à l'autophagie). Toutefois, lors de vos repas, la qualité de vos aliments reste primordiale. On ne construit pas un corps de champion avec des mauvaises calories, même consommées pendant une fenêtre de 8 heures.
</p>
        `
    },
    {
        slug: "l-importance-du-sommeil-dans-la-perte-de-masse-grasse",
        title: "L'importance du sommeil dans la perte de masse grasse",
        category: "Mode de Vie",
        readTime: "6 min read",
        image: "/blog_sleep_1771764548023.png",
        author: "AzulKitchen Expert",
        date: "2026-03-20",
        excerpt: "Découvrez pourquoi sacrifier vos heures de sommeil nuit gravement à vos objectifs sportifs et à votre récupération métabolique.",
        faqs: [
            {
                question: "Combien d'heures de sommeil sont nécessaires pour perdre du poids ?",
                answer: "Pour une optimisation hormonale (leptine et ghréline), la science recommande entre 7 et 9 heures de sommeil de qualité ininterrompue par nuit."
            },
            {
                question: "Comment le manque de sommeil affecte-t-il l'appétit ?",
                answer: "Le manque de sommeil augmente la ghréline (hormone de la faim) et abaisse la leptine (hormone de la satiété), ce qui entraîne des envies irrésistibles de sucre et d'aliments denses en calories."
            }
        ],
        content: `
<div class="mb-8 p-6 bg-[var(--color-brand-blue)]/5 rounded-3xl border border-[var(--color-brand-blue)]/10">
    <h3 class="text-xl font-bold mb-4 font-[family-name:var(--font-seasons)]">Points Clés (Ce que dit la science)</h3>
    <ul class="list-disc pl-5 space-y-2 opacity-90">
        <li>Une nuit de 5h réduit la sensibilité à l'insuline, augmentant le stockage des graisses.</li>
        <li>Le déficit de sommeil sabote le ratio de perte : vous perdez plus de muscle que de graisse lors d'un régime.</li>
        <li>Le pic d'hormone de croissance (GH), essentiel pour la récupération, se produit pendant le sommeil profond.</li>
    </ul>
</div>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Le Saboteur Silencieux de votre Diète</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Vous pesez vos aliments, vous vous entraînez cinq fois par semaine, votre déficit calorique est millimétré, mais la balance refuse obstinément de bouger ? Pis encore, vous vous sentez flasque et épuisé. Le coupable numéro un est souvent négligé : votre taie d'oreiller. Sacrifier le sommeil sur l'autel de la productivité est l'erreur métabolique la plus coûteuse.
</p>

<blockquote>
    <p class="text-xl italic font-serif text-[var(--color-brand-blue)] opacity-80 border-l-4 border-[var(--color-brand-gold)] pl-4 my-8">
        "Le sommeil n'est pas un luxe inactif. C'est le moment de maintenance intensive où l'architecture même de notre métabolisme est reconstruite."
    </p>
</blockquote>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Le Câblage Hormonal (Ghréline vs Leptine)</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Le métabolisme n'est pas qu'une simple équation mathématique. C'est un terrain miné par vos hormones. Lorsque votre sommeil passe sous la barre critique des 7 heures, votre corps panique : il déclenche une surproduction de cortisol (l'hormone du stress qui favorise le stockage adipeux abdominal), augmente la ghréline (qui vous donne faim) et étouffe la leptine (qui vous dit que vous avez assez mangé). Le résultat biochimique ? Une attirance irrésistible de +300 à 400 kcal pour de la "junk food" dès le lendemain.
</p>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Le Vol de Masse Musculaire</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Une étude clé de l'Université de Chicago a séparé deux groupes soumis au même déficit calorique. L'un dormait 8,5 heures, l'autre 5,5 heures. Le groupe en privation de sommeil a perdu autant de poids, mais <strong>70% de ce poids était de la masse musculaire</strong>, contre seulement 50% de graisse pour l'autre groupe. Moins vous dormez, plus votre organisme dégrade vos muscles pour se nourrir, protégeant précairement ses réserves de graisse protectrice.
</p>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Conclusion : Vos Plans d'Actions</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Commencez à considérer le sommeil comme la troisième et plus vitale pilier de votre transformation physique. Installez un "couvre-feu des écrans" (plus d'écrans 1 heure avant le coucher) et maintenez votre chambre autour de 18°C pour favoriser la sécrétion de mélatonine et un sommeil profond restaurateur.
</p>
        `
    },
    {
        slug: "recette-bowl-energetique-post-entrainement",
        title: "Recette : Bowl énergétique post-entraînement",
        category: "Recettes",
        readTime: "2 min read",
        image: "/blog_bowl_1771764569572.png",
        author: "AzulKitchen Chef",
        date: "2026-03-10",
        excerpt: "Le repas post-workout ultime pour recharger vos réserves de glycogène et stimuler la synthèse protéique musculaire.",
        faqs: [
            {
                question: "Est-il nécessaire de consommer ce bowl immédiatement après l'entraînement ?",
                answer: "Bien que la fameuse 'fenêtre anabolique' de 30 minutes soit un mythe, il reste optimal de consommer une source de protéines et glucides dans les 2 à 3 heures post-entraînement pour maximiser la récupération."
            },
            {
                question: "Puis-je remplacer la whey protéine ?",
                answer: "Absolument. Une source de protéines végétales comme le tofu soyeux, ou des œufs, peuvent remplacer la protéine en poudre, bien qu'ils offrent une texture différente au bowl."
            }
        ],
        content: `
<div class="mb-8 p-6 bg-[var(--color-brand-blue)]/5 rounded-3xl border border-[var(--color-brand-blue)]/10">
    <h3 class="text-xl font-bold mb-4 font-[family-name:var(--font-seasons)]">Macros par Portion</h3>
    <ul class="flex flex-wrap gap-4 font-bold text-sm">
        <li class="bg-white px-4 py-2 rounded-full shadow-sm text-blue-900 border border-[var(--color-brand-blue)]/10">Énergie : 450 kcal</li>
        <li class="bg-white px-4 py-2 rounded-full shadow-sm text-green-700 border border-[var(--color-brand-green)]/30">Protéines : 35g</li>
        <li class="bg-white px-4 py-2 rounded-full shadow-sm text-yellow-600 border border-[var(--color-brand-gold)]/50">Glucides : 52g</li>
        <li class="bg-white px-4 py-2 rounded-full shadow-sm text-gray-600">Lipides : 14g</li>
    </ul>
</div>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">La Science du Repas de Récupération</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    L'entraînement déchire les fibres musculaires et épuise le glycogène hépatique et musculaire. La récupération n'est rien d'autre qu'un réassemblage. Ce Bowl a été conçu par notre équipe diététique pour apporter le parfait ratio 3:1 (Glucides:Protéines) nécessaire à une resynthèse accélérée, réduisant drastiquement les courbatures du lendemain.
</p>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Ingrédients (1 Portion)</h2>
<ul class="list-none space-y-3 mb-8 opacity-90">
    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span> 1 Banane (idéalement légèrement tachetée pour des sucres rapides)</li>
    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span> 100g de Fromage Blanc 0% (ou Skyr islandais)</li>
    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span> 1 Scoop (30g) de Whey Isolate (Saveur Vanille ou Neutre)</li>
    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span> 40g de Flocons d'Avoine entiers</li>
    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span> 15g de Beurre de cacahuète 100% naturel (sans huiles ajoutées)</li>
    <li class="flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span> Une poignée de Myrtilles fraîches (pour leur apport massif en antioxydants)</li>
</ul>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Préparation Étape par Étape</h2>
<ol class="list-decimal pl-5 space-y-4 opacity-90 leading-relaxed">
    <li><strong>La Base Crémeuse :</strong> Dans un grand bol, mélangez vigoureusement le fromage blanc avec la dose de whey protéine. Les poudres Isolate se dissolvent parfaitement dans le Skyr sans créer de grumeaux.</li>
    <li><strong>Le Substrat Énergétique :</strong> Incorporez délicatement les flocons d'avoine. Si vous préférez une texture plus fondante (façon "Overnight Oats"), laissez reposer ce mélange 15 minutes au réfrigérateur ou préparez-le la veille de l'entraînement.</li>
    <li><strong>Le Topping Antioxydant :</strong> Coupez la banane en rondelles régulières et disposez-les sur le dessus. Ajoutez vos myrtilles (qui vont contrer le léger stress oxydatif généré par l'entraînement intense).</li>
    <li><strong>Le Bon Gras :</strong> Terminez par un filet de beurre de cacahuète. Si votre beurre est trop compact, passez-le 10 secondes au micro-ondes pour qu'il coule à la perfection.</li>
</ol>

<h2 class="text-3xl font-bold font-[family-name:var(--font-seasons)] mt-12 mb-6">Conseil du Coach</h2>
<p class="mb-6 opacity-90 leading-relaxed">
    Pour l'hydratation, n'oubliez pas de boire au moins 500ml d'eau avec une petite pincée de sel rose de l'Himalaya avant ce repas pour rétablir votre équilibre électrolytique perdu par la sudation.
</p>
        `
    }
];
