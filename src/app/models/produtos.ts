export interface IProduto {
  id: string;
  nomeJogo: string;
  preco: number;
  imagem: string;
}

export const produtos: IProduto[] = [
  {
    id: '1',
    nomeJogo: 'NFL - Madden 2024 ',
    preco: 1200.5,
    imagem: './assets/jogos/116a6444-75e6-4754-9f9e-2b770e126028.png',
  },
  {
    id: '2',
    nomeJogo: 'Diablo IV',
    preco: 439.0,
    imagem: './assets/jogos/1860ac56-837c-4b4f-8489-228b8c98ba21.png',
  },
  {
    id: '3',
    nomeJogo: 'The Crew - Motor Fast',
    preco: 749.99,
    imagem: './assets/jogos/86291b69-36c7-4f3a-8365-8b21d7f83029.png',
  },
  {
    id: '4',
    nomeJogo: 'Final Fantasy XVI',
    preco: 599.99,
    imagem: './assets/jogos/9739172e-0d1d-49a9-9d98-03c78c600654.png',
  },
  {
    id: '5',
    nomeJogo: 'Beat Saber',
    preco: 299.99,
    imagem: './assets/jogos/Beat-Saber.png',
  },
  {
    id: '6',
    nomeJogo: 'Desconto em Dobro',
    preco: 399.99,
    imagem: './assets/jogos/f54b1047-3309-49c0-bffa-ff7a133cd017.png',
  },
  {
    id: '7',
    nomeJogo: 'Call of Dutty - Warzone',
    preco: 399.99,
    imagem: './assets/jogos/f54dc7fc-609f-4d69-b7cc-3c89bb88ad2c.png',
  },
  {
    id: '8',
    nomeJogo: 'Avatar Frontiers of Pandora',
    preco: 399.99,
    imagem: './assets/jogos/8d0edebe-0c67-4cae-b8c5-6a597c1c6578.png',
  },
];
