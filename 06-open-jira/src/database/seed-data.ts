interface SeedData{
    entries: SeedEntry[];
};



interface SeedEntry {
    description: string;
    status: string;
    createAt: number;
}

export const seedData = {
  entries: [
    {
      description:"Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.",
      status: "pending",
      createAt: Date.now(),
    },
    {
      description:"En-Progreso Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.",
      status: "in-progress",
      createAt: Date.now() - 1000000,
    },
    {
      description:"Terminadas: Commodo veniam aliqua tempor officia officia non laborum.",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};
