const iconSlideData = [
    {
        id: 1,
        icon: require("./assets/icons/icon-slide/chat-with-expert.jpg"),
        onPress: {
            type: "link",
            value: "whatsapp://send/?phone=918929853854&text=Hi Lenskart, help me get started!",
        },
    },
    {
        id: 2,
        icon: require("./assets/icons/icon-slide/frame-size.jpg"),
    },
    {
        id: 3,
        icon: require("./assets/icons/icon-slide/3d-try-on.png"),
    },
    {
        id: 4,
        icon: require("./assets/icons/icon-slide/home-eye-test.jpg"),
    },
    {
        id: 5,
        icon: require("./assets/icons/icon-slide/computer-glasses.jpg"),
    },
    {
        id: 6,
        icon: require("./assets/icons/icon-slide/delivery-time.jpg"),
    },
    {
        id: 7,
        icon: require("./assets/icons/icon-slide/500-stores.jpg"),
    },
    {
        id: 8,
        icon: require("./assets/icons/icon-slide/our-contribution.jpg"),
    },
];

const promoSlideData = [
    require("./assets/images/sliders/promo/air-flex.gif"),
    require("./assets/images/sliders/promo/best-seller.jpg"),
    require("./assets/images/sliders/promo/aqua-color.gif"),
    require("./assets/images/sliders/promo/blu-kids.jpg"),
    require("./assets/images/sliders/promo/our-kids.jpg"),
];

const customerReviewSlideData = [
    {
        image: require("./assets/images/sliders/review/customer-1.jpg"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-1.mp4",
    },
    {
        image: require("./assets/images/sliders/review/customer-2.jpg"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-2.mp4",
    },
    {
        image: require("./assets/images/sliders/review/customer-3.jpg"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-3.mp4",
    },
    {
        image: require("./assets/images/sliders/review/customer-4.gif"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-4.mp4",
    },
    {
        image: require("./assets/images/sliders/review/customer-5.gif"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-5.mp4",
    },
    {
        image: require("./assets/images/sliders/review/customer-6.gif"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-6.mp4",
    },
    {
        image: require("./assets/images/sliders/review/customer-7.gif"),
        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Reviews/review-7.mp4",
    },
];

const categoriesIconSlideData = [
    {
        label: "Men",
        id: 0,
        categories: [
            require("./assets/icons/men/eyeglasses.jpg"),
            require("./assets/icons/men/sunglasses.jpg"),
            require("./assets/icons/men/reading-glasses.jpg"),
            require("./assets/icons/men/computer-glasses.jpg"),
            require("./assets/icons/men/virtual-ar.gif"),
            require("./assets/icons/men/power-glasses.jpg"),
            require("./assets/icons/men/contact-lenses.jpg"),
            require("./assets/icons/men/kids-glasses.jpg"),
            require("./assets/icons/men/mega-sale.jpg"),
        ],
    },
    {
        label: "Women",
        id: 1,
        categories: [
            require("./assets/icons/women/eyeglasses.jpg"),
            require("./assets/icons/women/sunglasses.jpg"),
            require("./assets/icons/women/reading-glasses.jpg"),
            require("./assets/icons/women/computer-glasses.jpg"),
            require("./assets/icons/women/virtual-ar.gif"),
            require("./assets/icons/women/power-glasses.jpg"),
            require("./assets/icons/women/contact-lenses.jpg"),
            require("./assets/icons/women/kids-glasses.jpg"),
            require("./assets/icons/women/mega-sale.jpg"),
        ],
    },
    {
        label: "Kids",
        id: 2,
        categories: [
            require("./assets/icons/kids/eyeglasses.jpg"),
            require("./assets/icons/kids/computer-glasses.jpg"),
            require("./assets/icons/kids/sunglasses.jpg"),
        ],
    },
];

const drawerItems = [
    {
        itemName: "Home",
        icon: require("./assets/icons/drawer/home.png"),
        subItems: null,
        isExpanded: false,
        onPress: {
            type: "navigation",
            value: "HomeScreen",
        },
    },
    {
        itemName: "Your Orders",
        icon: require("./assets/icons/drawer/orders.png"),
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "Eyeglasses",
        icon: require("./assets/icons/drawer/eyeglasses.png"),
        subItems: [
            { name: "Air Collection" },
            { name: "Air-Lightweight Collection" },
            { name: "2 Pairs for 999- Classic" },
            { name: "Air Collection" },
            { name: "Air Collection" },
            { name: "Air Collection" },
        ],
        isExpanded: false,
    },
    {
        itemName: "Sunglasses",
        icon: require("./assets/icons/drawer/sunglasses.png"),
        subItems: [
            { name: "Air Collection" },
            { name: "Air-Lightweight Collection" },
            { name: "2 Pairs for 999- Classic" },
            { name: "Air Collection" },
            { name: "Air Collection" },
            { name: "Air Collection" },
        ],
        isExpanded: false,
    },
    {
        itemName: "Powered Sunglasses",
        icon: require("./assets/icons/drawer/powered-sunglasses.png"),
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "Gold Members Offers",
        icon: null,
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "Avail Gold at Store",
        icon: null,
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "Services",
        icon: require("./assets/icons/drawer/services.png"),
        subItems: [
            { name: "Air Collection" },
            { name: "Air-Lightweight Collection" },
            { name: "2 Pairs for 999- Classic" },
            { name: "Air Collection" },
            { name: "Air Collection" },
            { name: "Air Collection" },
        ],
        isExpanded: false,
    },
    {
        itemName: "Rate Us",
        icon: require("./assets/icons/drawer/rate-us.png"),
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "FAQ",
        icon: require("./assets/icons/drawer/faqs.png"),
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "Agent Screen Share",
        icon: require("./assets/icons/drawer/screen-share.png"),
        subItems: null,
        isExpanded: false,
    },
    {
        itemName: "",
        // icon: require("./assets/icons/drawer/screen-share.png"),
        subItems: null,
        isExpanded: false,
    },
];

export {
    iconSlideData,
    promoSlideData,
    customerReviewSlideData,
    categoriesIconSlideData,
    drawerItems,
};
