/**
 * ============================================================
 *  OASIS TABLE — product content
 * ============================================================
 *  Everything about THIS product. Independent from other products.
 *  Bump "version" when you change price, discount, or delivery fees.
 * ============================================================
 */

window.CONTENT = {

  version: 'v1',
  productSlug: 'oasis-table',
  productName: 'Oasis Table',
  brandName:   'Sable & Soleil',

  heroEyebrow: 'Été 2026',
  heroTitle:   'La table pliable pour vos journées en plein air.',
  heroLead:    'Aluminium anodisé, plateau étanche, pieds antidérapants. Se plie en un geste et se glisse dans un sac.',

  unitPrice: 4900,
  priceWas:  6500,
  priceNote: 'Édition lancement',

  discountEnabled: true,
  discountPercent: 10,
  discountMinQty:  2,

  maxQty: 15,

  contactPhone:     '0555 00 00 00',
  contactPhoneHref: '+213555000000',
  contactEmail:     'contact@sable-soleil.dz',

  detail1: {
    eyebrow: 'Matériaux',
    title:   'Aluminium anodisé, plateau étanche.',
    body:    "Le plateau résiste à l'eau, au sable et aux UV. Un chiffon humide suffit à le remettre à neuf. Les pieds sont réglables sur trois hauteurs et s'adaptent à tous les terrains.",
    bullets: [
      'Aluminium anodisé, 800 g',
      'Supporte jusqu\'à 15 kg',
      'Se plie et se range dans un sac'
    ]
  },
  detail2: {
    eyebrow: 'Usage',
    title:   'De la plage au pique-nique.',
    body:    "Stable sur le sable, l'herbe, le gravier ou la pierre. Les pieds larges et antidérapants restent en place même quand la surface bouge."
  },

  features: [
    { title: 'Se plie en un geste',    body: "Se replie à la taille d'un livre et se glisse dans un sac à main, un sac de plage ou une boîte à gants." },
    { title: '800 grammes',            body: 'Assez légère pour être portée toute la journée, assez solide pour supporter 15 kg sans fléchir.' },
    { title: 'Stable sur tout terrain', body: "Pieds larges et antidérapants. Elle reste droite sur le sable, l'herbe, le gravier ou la pierre." },
    { title: "Résistante à l'eau",     body: 'Aluminium anodisé et plateau étanche. Un chiffon humide suffit à la remettre à neuf.' }
  ],

  faq: [
    { q: 'Est-ce que je dois payer quelque chose maintenant ?', a: "Non. Vous ne payez rien tant que vous n'avez pas reçu le colis. Le règlement se fait en espèces auprès du livreur, après vérification." },
    { q: 'Quel est le délai de livraison ?',                   a: 'Nous expédions sous 24 heures. Le colis arrive généralement en 48 à 72 heures selon votre wilaya.' },
    { q: 'Comment sont calculés les frais de livraison ?',     a: "Les frais dépendent de votre wilaya et du mode choisi. Au bureau est moins cher qu'à domicile. Le montant exact s'affiche automatiquement." },
    { q: 'Puis-je refuser le colis ?',                          a: 'Oui. Vous pouvez refuser à la livraison sans rien payer. Prévenez-nous par téléphone pour alerter le livreur.' },
    { q: 'Comment vous contacter ?',                            a: 'CONTACT_AUTO' }
  ],

  deliveryFees: {
    '01 — Adrar':           { domicile: 1200, bureau: 850 },
    '02 — Chlef':           { domicile: 700,  bureau: 400 },
    '03 — Laghouat':        { domicile: 900,  bureau: 600 },
    '04 — Oum El Bouaghi':  { domicile: 700,  bureau: 400 },
    '05 — Batna':           { domicile: 700,  bureau: 400 },
    '06 — Béjaïa':          { domicile: 600,  bureau: 350 },
    '07 — Biskra':          { domicile: 800,  bureau: 500 },
    '08 — Béchar':          { domicile: 1200, bureau: 850 },
    '09 — Blida':           { domicile: 450,  bureau: 300 },
    '10 — Bouira':          { domicile: 600,  bureau: 350 },
    '11 — Tamanrasset':     { domicile: 1400, bureau: 1000 },
    '12 — Tébessa':         { domicile: 800,  bureau: 500 },
    '13 — Tlemcen':         { domicile: 700,  bureau: 400 },
    '14 — Tiaret':          { domicile: 700,  bureau: 400 },
    '15 — Tizi Ouzou':      { domicile: 500,  bureau: 300 },
    '16 — Alger':           { domicile: 400,  bureau: 250 },
    '17 — Djelfa':          { domicile: 800,  bureau: 500 },
    '18 — Jijel':           { domicile: 600,  bureau: 350 },
    '19 — Sétif':           { domicile: 600,  bureau: 350 },
    '20 — Saïda':           { domicile: 700,  bureau: 400 },
    '21 — Skikda':          { domicile: 600,  bureau: 350 },
    '22 — Sidi Bel Abbès':  { domicile: 700,  bureau: 400 },
    '23 — Annaba':          { domicile: 600,  bureau: 350 },
    '24 — Guelma':          { domicile: 650,  bureau: 400 },
    '25 — Constantine':     { domicile: 600,  bureau: 350 },
    '26 — Médéa':           { domicile: 500,  bureau: 300 },
    '27 — Mostaganem':      { domicile: 600,  bureau: 350 },
    '28 — M\'Sila':         { domicile: 650,  bureau: 400 },
    '29 — Mascara':         { domicile: 700,  bureau: 400 },
    '30 — Ouargla':         { domicile: 1000, bureau: 700 },
    '31 — Oran':            { domicile: 500,  bureau: 300 },
    '32 — El Bayadh':       { domicile: 900,  bureau: 600 },
    '33 — Illizi':          { domicile: 1400, bureau: 1000 },
    '34 — Bordj Bou Arreridj': { domicile: 600, bureau: 350 },
    '35 — Boumerdès':       { domicile: 450,  bureau: 300 },
    '36 — El Tarf':         { domicile: 650,  bureau: 400 },
    '37 — Tindouf':         { domicile: 1400, bureau: 1000 },
    '38 — Tissemsilt':      { domicile: 700,  bureau: 400 },
    '39 — El Oued':         { domicile: 900,  bureau: 600 },
    '40 — Khenchela':       { domicile: 750,  bureau: 450 },
    '41 — Souk Ahras':      { domicile: 700,  bureau: 400 },
    '42 — Tipaza':          { domicile: 450,  bureau: 300 },
    '43 — Mila':            { domicile: 600,  bureau: 350 },
    '44 — Aïn Defla':       { domicile: 500,  bureau: 300 },
    '45 — Naâma':           { domicile: 1000, bureau: 700 },
    '46 — Aïn Témouchent':  { domicile: 650,  bureau: 400 },
    '47 — Ghardaïa':        { domicile: 900,  bureau: 600 },
    '48 — Relizane':        { domicile: 600,  bureau: 350 },
    '49 — Timimoun':        { domicile: 1300, bureau: 950 },
    '50 — Bordj Badji Mokhtar': { domicile: 1400, bureau: 1000 },
    '51 — Ouled Djellal':   { domicile: 900,  bureau: 600 },
    '52 — Béni Abbès':      { domicile: 1200, bureau: 850 },
    '53 — In Salah':        { domicile: 1400, bureau: 1000 },
    '54 — In Guezzam':      { domicile: 1500, bureau: 1100 },
    '55 — Touggourt':       { domicile: 950,  bureau: 650 },
    '56 — Djanet':          { domicile: 1500, bureau: 1100 },
    '57 — El M\'Ghair':     { domicile: 900,  bureau: 600 },
    '58 — El Meniaa':       { domicile: 1000, bureau: 700 }
  },

  defaultDeliveryFee: { domicile: 900, bureau: 600 }

};
