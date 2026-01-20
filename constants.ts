
import { Bar, DayOfWeek, Product, PaymentTerm, Supplier } from './types';

export const DEFAULT_SUPPLIER_ID = 'sup-1';

export const MOCK_SUPPLIERS: Supplier[] = [
  { id: 'sup-1', name: 'Pasticceria Bolognese', phone: '051 123456', email: 'ordini@pasticceriabo.it', isActive: true },
  { id: 'sup-2', name: 'Laboratorio Artigianale Cornetti', phone: '051 987654', email: 'info@laboratoriocornetti.it', isActive: true }
];

// Prezzi standard
const PRICE_SWEET_BASE = 0.68;
const PRICE_SWEET_SPECIAL = 0.72;

export const MOCK_PRODUCTS: Product[] = [
  // --- DOLCE (Prezzo base 0.68) ---
  { id: 'd1', name: 'Trecce crema cotta', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd2', name: 'Trecce crema gocce', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd3', name: 'Trecce uva', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd4', name: 'Trecce vuote', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd5', name: 'Barche bigusto', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd6', name: 'Barche cioccolato', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd7', name: 'Barche crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd8', name: 'Ferri', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd9', name: 'Cornetti crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd10', name: 'Cornetti marmellata', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd11', name: 'Cornetti cioccolato', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd12', name: 'Cornetti vuoti', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd13', name: 'Messicani crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd14', name: 'Messicani vuoti', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd15', name: 'Cioccolato bianco', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd16', name: 'Ciliegia', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd17', name: 'Frutti bosco', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd18', name: 'Nocciola', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd19', name: 'Saccottini cioccolato', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd20', name: 'Triangoli crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd27', name: 'Krafen cioccolato', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd28', name: 'Krafen crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd29', name: 'Krafen pistacchio', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd30', name: 'Krafen semolato', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd31', name: 'Zeppole', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd32', name: 'Cannoli fritti crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd33', name: 'Banane crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd34', name: 'Cannoli sf. crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd35', name: 'Fagottini mela', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd36', name: 'Banane cioccolato', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd37', name: 'Napoletane', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd38', name: 'Strisce mela', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd39', name: 'Triangoli mandorla', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_BASE, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },

  // --- SPECIALI (Prezzo 0.72) ---
  { id: 'd21', name: 'Cestini frutta sf.', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd22', name: 'Chantilly', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd23', name: 'Panna', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd24', name: 'Pistacchio', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd25', name: 'Spaccate frutta', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd26', name: 'Trecce crema fresca', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd40', name: 'Bigne crema', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 'd41', name: 'Integrali miele', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: PRICE_SWEET_SPECIAL, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },

  // --- CONTENITORE ---
  { id: 'p3', name: 'Paste Dolci', category: 'Croissanteria', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.68, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },

  // --- SALATO ---
  { id: 's1', name: 'Cornetti salati', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.68, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's2', name: 'Cereali', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.72, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's3', name: 'Burelle', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.80, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's4', name: 'Calzoni', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 1.20, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's5', name: 'Crescentine fritte tonde', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.75, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's6', name: 'Crescentine fritte rettangolari', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.75, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's7', name: 'Gallette', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.68, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's8', name: 'Panini lunghi', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.55, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's9', name: 'Panini piccoli', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.55, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's10', name: 'Panini tondi', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.55, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's11', name: 'Pizze quadre', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 1.20, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's12', name: 'Pizze tonde', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 1.20, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's13', name: 'Pizze coperte funghi', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 1.30, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's14', name: 'Ricce', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.68, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's15', name: 'Trecce prosciutto', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.75, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
  { id: 's16', name: 'Strisce crescente rosmarino', category: 'Salato', supplierId: DEFAULT_SUPPLIER_ID, costPrice: 0, basePrice: 0.75, vatRate: 10, unitsPerCarton: 0, unitOfMeasure: 'PZ', isActive: true },
];

const RAW_BAR_NAMES = [
  "Santa maria", "Il mio bar", "Chicco bar", "Sampei", "Marsigli", "Asco", "Drink e win", 
  "Pongo", "Break", "Caffè della piazza", "Melograno", "Bob", "Garagnani", "Arci piumazzo", 
  "Mk", "Gallery", "Chicco d’oro", "Km 131", "Angy", "Tiglio", "Rebottini", "Bocciofila", 
  "Gentile", "La rocca", "Conad f.a.m.a", "Emi", "Superbar fortuna", "Mack", "Zerlotin", 
  "Penzale", "Chamarel", "Antichi sapori", "Forno Laura", "Guercino", "Paolo", "Fortunato", 
  "Green park", "San rocco", "Teatro", "Blue bar", "Zaco", "Boan", "Toni", "88", "Baldini", 
  "Eni", "Arci tripoli", "Corso", "Giulia", "Andy capp", "Parco", "Gustosa parentesi nuovo", 
  "Gustosa parentesi", "Happy", "Weber", "Etto", "Zecca", "Picnic", "Fantasia", "Piada adriatica"
];

const randomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const generateVAT = () => Math.floor(Math.random() * 90000000000) + 10000000000;
const generateCF = () => 'IT' + Math.random().toString(36).substring(2, 14).toUpperCase();
const generatePhone = () => '3' + Math.floor(Math.random() * 900000000 + 100000000);

// IDs of "Staple" products that almost everyone orders
const STAPLE_IDS = ['d9', 'd10', 'd11', 'd12', 'd1', 's1', 's5']; 

// --- REAL BOLOGNA LOCATIONS MAPPING ---
const REAL_ZONES: Record<string, { lat: number, lng: number, address: string }[]> = {
  'Centro Storico': [
    { lat: 44.4942, lng: 11.3465, address: 'Via Rizzoli 12' },
    { lat: 44.5002, lng: 11.3435, address: 'Via Indipendenza 45' },
    { lat: 44.4912, lng: 11.3402, address: 'Via D\'Azeglio 15' },
    { lat: 44.4965, lng: 11.3512, address: 'Via San Vitale 22' },
  ],
  'San Lazzaro': [
    { lat: 44.4695, lng: 11.4055, address: 'Via Emilia Levante 230' },
    { lat: 44.4725, lng: 11.4112, address: 'Via Kennedy 12' },
  ],
  'Zona Industriale': [
    { lat: 44.5155, lng: 11.3855, address: 'Via del Terrapieno 20' },
    { lat: 44.5205, lng: 11.3955, address: 'Via Mattei 40' },
  ],
  'Casalecchio': [
    { lat: 44.4785, lng: 11.2785, address: 'Via Porrettana 150' },
    { lat: 44.4815, lng: 11.2725, address: 'Via Marconi 10' },
  ]
};

const generateRealisticOrder = (barIndex: number, products: Product[]) => {
  const order: any = {};
  const baseVolume = 30 + Math.floor(Math.random() * 40);
  const validProducts = products.filter(p => p.id !== 'p3'); 
  Object.values(DayOfWeek).forEach(day => {
    order[day] = {};
    let currentTotal = 0;
    while(currentTotal < baseVolume) {
        const prod = randomElement(validProducts);
        const qty = Math.floor(Math.random() * 5) + 1;
        order[day][prod.id] = (order[day][prod.id] || 0) + qty;
        currentTotal += qty;
    }
  });
  return order;
};

export const MOCK_BARS: Bar[] = RAW_BAR_NAMES.map((name, index) => {
    const zoneKeys = Object.keys(REAL_ZONES);
    const assignedZone = zoneKeys[index % zoneKeys.length];
    const locations = REAL_ZONES[assignedZone];
    const loc = locations[index % locations.length];
    return {
      id: `bar-${index + 1}`,
      name: name,
      address: loc.address,
      city: 'Bologna', 
      keyNumber: '',
      zone: assignedZone,
      phone: generatePhone(),
      email: `info@${name.replace(/\s+/g, '').toLowerCase()}.it`,
      vatNumber: generateVAT().toString(),
      fiscalCode: generateCF(),
      paymentTerm: randomElement([PaymentTerm.DAILY, PaymentTerm.WEEKLY, PaymentTerm.MONTHLY]),
      notes: '',
      routeOrder: index + 1,
      customPrices: {},
      weeklyOrder: generateRealisticOrder(index, MOCK_PRODUCTS),
      isActive: true,
      lat: loc.lat + (Math.random() - 0.5) * 0.001,
      lng: loc.lng + (Math.random() - 0.5) * 0.001
    };
});

export const APP_NAME = "LaCroissanteria";
