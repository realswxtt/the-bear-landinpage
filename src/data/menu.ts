export interface MenuItem {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
}

export const menuCategories = [
    "ESPECIALIDADES",
    "ENTRADAS",
    "CEVICHES",
    "ARROCES",
    "CHICHARRONES",
    "SOPAS",
    "CHUPES",
    "SUDADOS",
    "PARIGUELAS",
    "COMBOS MARINOS",
    "TRIOS MARINOS",
    "PLATOS DESTACADOS THE BEAR",
    "PORCIONES",
    "BEBIDAS",
    "CERVEZAS",
];

export const menuData: MenuItem[] = [
    // --- ESPECIALIDADES ---
    { id: "e1", title: "CHAUFA SALVAJE", description: "", price: 20, category: "ESPECIALIDADES" },
    { id: "e2", title: "FETTUCCINE /PACÍFICO", description: "", price: 18, category: "ESPECIALIDADES" },
    { id: "e3", title: "CEVICHE MIXTO", description: "", price: 25, category: "ESPECIALIDADES" },
    { id: "e4", title: "L.DE TIGRE THE BEAR", description: "", price: 22, category: "ESPECIALIDADES" },

    // --- ENTRADAS ---
    { id: "en1", title: "Leche de Tigre clasica", description: "", price: 13, category: "ENTRADAS" },
    { id: "en2", title: "Leche de Tigre Espeial", description: "", price: 15, category: "ENTRADAS" },
    { id: "en3", title: "Leche Criolla", description: "", price: 18, category: "ENTRADAS" },
    { id: "en4", title: "Causa Acevichada The Bear", description: "", price: 20, category: "ENTRADAS" },
    { id: "en5", title: "Causa De pulpo a la Parrilla", description: "", price: 20, category: "ENTRADAS" },
    { id: "en6", title: "Papa Rellena Acevichada", description: "", price: 18, category: "ENTRADAS" },

    // --- CEVICHES ---
    { id: "cv1", title: "ceviche de pescado", description: "", price: 20, category: "CEVICHES" },
    { id: "cv2", title: "cevche norteño", description: "", price: 20, category: "CEVICHES" },
    { id: "cv3", title: "ceviche mixto", description: "", price: 25, category: "CEVICHES" },
    { id: "cv4", title: "ceviche pateado", description: "", price: 20, category: "CEVICHES" },
    { id: "cv5", title: "ceviche de langostinos", description: "", price: 30, category: "CEVICHES" },
    { id: "cv6", title: "ceviche de conchas negras", description: "", price: 35, category: "CEVICHES" },

    // --- ARROCES ---
    { id: "ar1", title: "arroz con mariscos", description: "", price: 20, category: "ARROCES" },
    { id: "ar2", title: "arroz con langostinos", description: "", price: 25, category: "ARROCES" },
    { id: "ar3", title: "arroz criollo", description: "", price: 20, category: "ARROCES" },
    { id: "ar4", title: "chaufa de mariscos", description: "", price: 18, category: "ARROCES" },
    { id: "ar5", title: "chaufa de pescado", description: "", price: 18, category: "ARROCES" },
    { id: "ar6", title: "chaufa crispi de pescado", description: "", price: 18, category: "ARROCES" },
    { id: "ar7", title: "chaufa salvaje", description: "", price: 20, category: "ARROCES" },

    // --- CHICHARRONES ---
    { id: "ch1", title: "chicharron de pota", description: "", price: 28, category: "CHICHARRONES" },
    { id: "ch2", title: "chicharron de pescado", description: "", price: 20, category: "CHICHARRONES" },
    { id: "ch3", title: "chicharron mixto", description: "", price: 25, category: "CHICHARRONES" },
    { id: "ch4", title: "chicharron de calamar", description: "", price: 30, category: "CHICHARRONES" },
    { id: "ch5", title: "chicharron de langostinos", description: "", price: 30, category: "CHICHARRONES" },
    { id: "ch6", title: "cabrilla frita", description: "", price: 25, category: "CHICHARRONES" },
    { id: "ch7", title: "chita frita", description: "", price: 25, category: "CHICHARRONES" },
    { id: "ch8", title: "jalea mixta", description: "", price: 28, category: "CHICHARRONES" },

    // --- SOPAS ---
    { id: "sp1", title: "chilcano especial", description: "", price: 13, category: "SOPAS" },
    { id: "sp2", title: "caldo arrecho", description: "", price: 15, category: "SOPAS" },
    { id: "sp3", title: "chilcano de tranbollo", description: "", price: 20, category: "SOPAS" },
    { id: "sp4", title: "chilcano de cabrlla", description: "", price: 20, category: "SOPAS" },

    // --- CHUPES ---
    { id: "cp1", title: "chupe de pescado", description: "", price: 20, category: "CHUPES" },
    { id: "cp2", title: "chupe de mariscos", description: "", price: 22, category: "CHUPES" },
    { id: "cp3", title: "chupe de camarones", description: "", price: 25, category: "CHUPES" },
    { id: "cp4", title: "chupe de langostinos", description: "", price: 25, category: "CHUPES" },

    // --- SUDADOS ---
    { id: "sd1", title: "sudado de filete", description: "", price: 25, category: "SUDADOS" },
    { id: "sd2", title: "sudado de mariscos", description: "", price: 23, category: "SUDADOS" },
    { id: "sd3", title: "sudado de cabrilla", description: "", price: 25, category: "SUDADOS" },
    { id: "sd4", title: "sudado de tranboyo", description: "", price: 25, category: "SUDADOS" },

    // --- PARIGUELAS ---
    { id: "pr1", title: "pariguela de filete", description: "", price: 25, category: "PARIGUELAS" },
    { id: "pr2", title: "pariguela de cabrilla", description: "", price: 28, category: "PARIGUELAS" },
    { id: "pr3", title: "pariguela de tranboyo", description: "", price: 28, category: "PARIGUELAS" },

    // --- COMBOS MARINOS ---
    { id: "cm1", title: "DUO 1", description: "ceviche de pescado + chicharron de pota", price: 23, category: "COMBOS MARINOS" },
    { id: "cm2", title: "DUO 2", description: "ceviche de pescado + chicharron de pescado", price: 25, category: "COMBOS MARINOS" },
    { id: "cm3", title: "DUO 3", description: "ceviche de pescado + chicarron mixto", price: 28, category: "COMBOS MARINOS" },
    { id: "cm4", title: "duo 4", description: "ceviche de pescado + chicharron de calamar", price: 28, category: "COMBOS MARINOS" },
    { id: "cm5", title: "duo 5", description: "ceviche de pescado + arroz con mariscos", price: 25, category: "COMBOS MARINOS" },
    { id: "cm6", title: "duo 6", description: "ceviche de pescado + chaufa de mariscos", price: 25, category: "COMBOS MARINOS" },
    { id: "cm7", title: "duo 7", description: "ceviche de pescado + chaufa de pescado", price: 25, category: "COMBOS MARINOS" },
    { id: "cm8", title: "duo 8", description: "ceviche mixto + chicharron de pota", price: 28, category: "COMBOS MARINOS" },
    { id: "cm9", title: "duo 9 the bear", description: "ceviche mixto + chicharron mixto", price: 28, category: "COMBOS MARINOS" },
    { id: "cm10", title: "duo 10", description: "ceviche mixto + chicharron de calamar", price: 30, category: "COMBOS MARINOS" },
    { id: "cm11", title: "duo 11", description: "ceviche mixto + arroz con mariscos", price: 28, category: "COMBOS MARINOS" },

    // --- TRIOS MARINOS ---
    { id: "tm1", title: "triple 1", description: "ceviche de pescado + chicharron de pota + arroz con mariscos", price: 33, category: "TRIOS MARINOS" },
    { id: "tm2", title: "triple 2", description: "ceviche de pescado + chicharron de pota + chaufa de mariscos", price: 33, category: "TRIOS MARINOS" },
    { id: "tm3", title: "triple 3", description: "ceviche de pescado + chicharron de pescado + arroz con mariscos", price: 33, category: "TRIOS MARINOS" },
    { id: "tm4", title: "triple 4", description: "ceviche de pescado + chicharron de pescado + chaufa de mariscos", price: 33, category: "TRIOS MARINOS" },
    { id: "tm5", title: "triple 5", description: "cebiche de pescado + chicharron mixto + chaufa de mariscos", price: 35, category: "TRIOS MARINOS" },
    { id: "tm6", title: "triple 6", description: "ceviche mixto + chicharron de pota + arroz con mariscos", price: 38, category: "TRIOS MARINOS" },
    { id: "tm7", title: "triple 7", description: "ceviche mixto + chicharron de pota + chaufa de mariscos", price: 38, category: "TRIOS MARINOS" },
    { id: "tm8", title: "triple 8", description: "ceviche mixto + chicharron de pescado + arroz con mariscos", price: 38, category: "TRIOS MARINOS" },
    { id: "tm9", title: "triple 9 the bear", description: "arma tu trio the bear", price: 38, category: "TRIOS MARINOS" },

    // --- PLATOS DESTACADOS THE BEAR ---
    { id: "pd1", title: "fetichini al pacifico", description: "fetuchini a la huancaina con su ceviche", price: 20, category: "PLATOS DESTACADOS THE BEAR" },
    { id: "pd2", title: "fettulomo a la huancaina", description: "fetuchini a la huancaina con su lomo saltado", price: 25, category: "PLATOS DESTACADOS THE BEAR" },
    { id: "pd3", title: "lomo dorado a la huanca pasta", description: "fetuchini a la huancaina con su lomo a la plancha", price: 25, category: "PLATOS DESTACADOS THE BEAR" },
    { id: "pd4", title: "alfredo del mal", description: "fetuchini al alfredo con langostinos", price: 25, category: "PLATOS DESTACADOS THE BEAR" },
    { id: "pd5", title: "tentaculos a la parrilla", description: "pupo a la parrila", price: 28, category: "PLATOS DESTACADOS THE BEAR" },
    { id: "pd6", title: "causa brava de pulpo", description: "causa de pulpo a la parrilla", price: 25, category: "PLATOS DESTACADOS THE BEAR" },
    { id: "pd7", title: "arroz brabazo the bear", description: "arroz de mariscos con chalaquitas de pota", price: 20, category: "PLATOS DESTACADOS THE BEAR" },

    // --- PORCIONES ---
    { id: "po1", title: "yucas fritas", description: "", price: 5, category: "PORCIONES" },
    { id: "po2", title: "yucas sancochadas", description: "", price: 5, category: "PORCIONES" },
    { id: "po3", title: "camotes sancochados", description: "", price: 5, category: "PORCIONES" },
    { id: "po4", title: "arroz blanco", description: "", price: 4, category: "PORCIONES" },
    { id: "po5", title: "yuyu broaster", description: "", price: 5, category: "PORCIONES" },
    { id: "po6", title: "choclo", description: "", price: 5, category: "PORCIONES" },

    // --- BEBIDAS (En la imagen: chichas, pero hay limonada y maracuya) ---
    { id: "bb1", title: "jarra de maracuya", description: "", price: 12, category: "BEBIDAS" },
    { id: "bb2", title: "jarra de maracumango", description: "", price: 13, category: "BEBIDAS" },
    { id: "bb3", title: "jarra de limonada", description: "", price: 12, category: "BEBIDAS" },
    { id: "bb4", title: "jarra de limonada americana", description: "", price: 13, category: "BEBIDAS" },
    { id: "bb5", title: "limonada & menta fresh", description: "", price: 15, category: "BEBIDAS" },
    { id: "bb6", title: "jarra de chicha morada", description: "", price: 10, category: "BEBIDAS" },

    // --- CERVEZAS ---
    { id: "cz1", title: "trigo", description: "", price: 10, category: "CERVEZAS" },
    { id: "cz2", title: "cristal", description: "", price: 8, category: "CERVEZAS" },
    { id: "cz3", title: "pilsen", description: "", price: 8, category: "CERVEZAS" },
];
