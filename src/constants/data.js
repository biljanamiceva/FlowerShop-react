import images from "./images";

const catalog = [
    {
        imgUrl: images.bouquet12,
        name: 'Roses bouquet',
        catalogId: "1",
        price: "1200",
        companyName: "Bloom & Grow",
        city: "Strumica"
    },
    {
        imgUrl: images.bouquet6,
        name: 'Harmony in Bloom',
        catalogId: "2",
        price: "1800",
        companyName: "Floral Paradise",
        city: "Strumica"
    },
    {
        imgUrl: images.bouquet9,
        name: 'Floral Fusion',
        catalogId: "3",
        price: "1700",
        companyName: "Blossom Boutique",
       city: "Skopje"
    },
]
const clients = [
    {
        imgUrl: images.bouquet12,
        imgface: images.face1,
        name: 'Emily Johnson',
        cardId: "4",
        time: "05.05.2023",
        desc:"I can't say enough good things about Flora Connect. Their customer service is top-notch, and they truly go above and beyond to ensure customer satisfaction. The flowers are always fresh, and their unique designs make them stand out. I'm a loyal customer for life!"
    },
    {
        imgUrl: images.bouquet6,
        imgface: images.face2,
        name: 'Ava Garcia',
        cardId: "5",
        time: "03.05.2023", 
        desc: "Flora Connect has become my go-to flower shop. Their arrangements are stunning, and their attention to detail is impressive. I always receive compliments when I send flowers from them. The team is friendly and professional, making the whole experience enjoyable."
    },
    {
        imgUrl: images.bouquet9,
        imgface: images.face3,
        name: 'Mia Clark',
        cardId: "6",
        time: "09.05.2023",
        desc: "I have been using Flora Connect for all my floral needs, and they never disappoint! The quality of their flowers is exceptional, and their delivery service is prompt and reliable. Highly recommended!"

    },
]

const orders = [
    {
        orderId: "10",
        fullName: "Alexander Scott",
        florist: "Petal Paradise",
        price: "4590",
        statusOrder: "Delivered",
    },
    {
        orderId: "11",
        fullName: "Victoria Young",
        florist: " Floral Paradise",
        price: "6350",
        statusOrder: "Delivered",
    },
    {
        orderId: "13",
        fullName: "Benjamin Hayes",
        florist: "Blossom Boutique",
        price: "2490",
        statusOrder: "Delivered",
    },
    {
        orderId: "14",
        fullName: "Penelope Moore",
        florist: "Floral Delights",
        price: "4600",
        statusOrder: "Delivered",
    },
    {
        orderId: "15",
        fullName: "Nathaniel Reed",
        florist: "Blooming Beauty",
        price: "1740",
        statusOrder: "Delivered",
    },
    {
        orderId: "16",
        fullName: "Gabrielle Stone",
        florist: "Floral Delights",
        price: "2320",
        statusOrder: "Delivered",
    },
    {
        orderId: "17",
        fullName: "Sebastian Hart",
        florist: "Floral Delights",
        price: "4180",
        statusOrder: "Delivered",
    },
    {
        orderId: "18",
        fullName: "Valentina Cruz",
        florist: "Blooming Beauty",
        price: "2740",
        statusOrder: "Delivered",
    },
]
const shops = [
    {
        shopId: "21",
        florist: "Blooming Beauty",
        shopLocation: "Skopje",
    },
    {
        shopId: "22",
        florist: "Floral Delights",
        shopLocation: "Skopje",
    },
    {
        shopId: "23",
        florist: "Blossom Boutique",
        shopLocation: "Strumica",
    }
]
const data = { catalog, clients, orders, shops };
export default data;