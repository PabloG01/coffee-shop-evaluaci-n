import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';

const products = [
    {
        id: 1,
        name: 'Espresso Clásico',
        description: 'Intenso y puro, preparado con granos tostados artesanalmente.',
        price: '$2.500',
        image: product1,

    },
    {
        id: 2,
        name: 'Cappuccino Cremoso',
        description: 'Espresso con leche vaporizada y una nube perfecta de espuma',
        price: '$3.200',
        image: product2,
    },
    {
        id: 3,
        name: 'Croissant de Mantequilla',
        description: 'Horneado fresco, crujiente por fuera y suave por dentro.',
        price: '$2.800',
        image: product3,
    },
];

export default products;