export const products = [
  {
    id: 1,
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    brand: "AMD",
    model: "7800X3D",
    specs: {
      cores: 8,
      threads: 16,
      socket: "AM5"
    },
    offers: [
      {
        store: "Amazon.sa",
        price: 1299,
        url: "#"
      },
      {
        store: "Noon",
        price: 1349,
        url: "#"
      },
      {
        store: "Trendyol",
        price: 1280,
        url: "#"
      }
    ]
  },

  {
    id: 2,
    name: "NVIDIA GeForce RTX 5070",
    category: "GPU",
    brand: "NVIDIA",
    model: "RTX 5070",
    specs: {
      vram: "12GB",
      memory: "GDDR7"
    },
    offers: [
      {
        store: "Amazon.sa",
        price: 2399,
        url: "#"
      },
      {
        store: "Noon",
        price: 2450,
        url: "#"
      },
      {
        store: "Trendyol",
        price: 2315,
        url: "#"
      }
    ]
  },

  {
    id: 3,
    name: "Kingston Fury Beast 32GB DDR5",
    category: "RAM",
    brand: "Kingston",
    model: "Fury Beast",
    specs: {
      capacity: "32GB",
      type: "DDR5",
      speed: "6000MHz"
    },
    offers: [
      {
        store: "Amazon.sa",
        price: 399,
        url: "#"
      },
      {
        store: "Noon",
        price: 429,
        url: "#"
      },
      {
        store: "Trendyol",
        price: 379,
        url: "#"
      }
    ]
  },

  {
    id: 4,
    name: "Samsung 990 EVO 1TB",
    category: "Storage",
    brand: "Samsung",
    model: "990 EVO",
    specs: {
      capacity: "1TB",
      interface: "NVMe"
    },
    offers: [
      {
        store: "Amazon.sa",
        price: 329,
        url: "#"
      },
      {
        store: "Noon",
        price: 349,
        url: "#"
      },
      {
        store: "Trendyol",
        price: 309,
        url: "#"
      }
    ]
  }
];
