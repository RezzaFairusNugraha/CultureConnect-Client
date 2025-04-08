const translationMap = {
  // Negara
  Indonesia: "Indonesia",

  // Provinsi
  "West Java": "Jawa Barat",
  "Central Java": "Jawa Tengah",
  "East Java": "Jawa Timur",
  Jakarta: "DKI Jakarta",
  "Jakarta Capital Region": "DKI Jakarta",
  Banten: "Banten",
  Bali: "Bali",
  "Special Region of Yogyakarta": "DI Yogyakarta",
  "North Sumatra": "Sumatera Utara",
  "South Sumatra": "Sumatera Selatan",
  "West Sumatra": "Sumatera Barat",
  Lampung: "Lampung",
  Riau: "Riau",
  "Riau Islands": "Kepulauan Riau",
  "Bangka Belitung Islands": "Kepulauan Bangka Belitung",
  Aceh: "Aceh",
  Jambi: "Jambi",
  Bengkulu: "Bengkulu",

  "West Kalimantan": "Kalimantan Barat",
  "Central Kalimantan": "Kalimantan Tengah",
  "South Kalimantan": "Kalimantan Selatan",
  "East Kalimantan": "Kalimantan Timur",
  "North Kalimantan": "Kalimantan Utara",

  "West Nusa Tenggara": "Nusa Tenggara Barat",
  "East Nusa Tenggara": "Nusa Tenggara Timur",

  "North Sulawesi": "Sulawesi Utara",
  "South Sulawesi": "Sulawesi Selatan",
  "Southeast Sulawesi": "Sulawesi Tenggara",
  "Central Sulawesi": "Sulawesi Tengah",
  Gorontalo: "Gorontalo",
  "West Sulawesi": "Sulawesi Barat",

  Maluku: "Maluku",
  "North Maluku": "Maluku Utara",
  Papua: "Papua",
  "West Papua": "Papua Barat",
  "South Papua": "Papua Selatan",
  "Highland Papua": "Papua Pegunungan",
  "Central Papua": "Papua Tengah",
  "Southwest Papua": "Papua Barat Daya",

  // Kabupaten/Kota yang umum
  "West Bandung Regency": "Kabupaten Bandung Barat",
  Bandung: "Kota Bandung",
  "Bandung City": "Kota Bandung",
  Bogor: "Kota Bogor",
  "Bogor Regency": "Kabupaten Bogor",
  Bekasi: "Kota Bekasi",
  "Bekasi Regency": "Kabupaten Bekasi",
  Depok: "Kota Depok",
  Cimahi: "Kota Cimahi",
  Cirebon: "Kota Cirebon",
  "Cirebon Regency": "Kabupaten Cirebon",
  Sukabumi: "Kota Sukabumi",
  "Sukabumi Regency": "Kabupaten Sukabumi",
  Garut: "Kabupaten Garut",
  Sumedang: "Kabupaten Sumedang",
  Tasikmalaya: "Kota Tasikmalaya",
  "Tasikmalaya Regency": "Kabupaten Tasikmalaya",
  Purwakarta: "Kabupaten Purwakarta",
  Subang: "Kabupaten Subang",
  Karawang: "Kabupaten Karawang",
  Indramayu: "Kabupaten Indramayu",
  Majalengka: "Kabupaten Majalengka",
  Pangandaran: "Kabupaten Pangandaran",

  // Komponen umum
  road: "Jalan",
  village: "Desa",
  town: "Kota",
  city: "Kota",
  state: "Provinsi",
  county: "Kabupaten",
  country: "Negara",
  postcode: "Kode Pos",
};

const translateComponent = (text) => {
  return translationMap[text] || text;
};

const formatIndonesianAddress = (address) => {
  const {
    road,
    pedestrian,
    neighbourhood,
    suburb,
    village,
    town,
    city,
    county,
    state_district,
    state,
    postcode,
    country,
  } = address;

  const parts = [
    road || pedestrian || "",
    neighbourhood || suburb || "",
    translateComponent(village || town || city || ""),
    translateComponent(county || ""),
    state_district || "",
    translateComponent(state || ""),
    postcode || "",
    translateComponent(country || ""),
  ];

  return parts.filter(Boolean).join(", ");
};

export { translateComponent, translationMap, formatIndonesianAddress };
