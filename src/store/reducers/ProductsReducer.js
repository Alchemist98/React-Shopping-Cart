const initState = {
  products: [
    {
      id: 1,
      name: "man t-shirt summer season",
      image: "1.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "Style - Enhance your look by wearing this Casual Stylish Men's shirt, Team it with a pair of tapered denims Or Solid Chinos and Loafers for a fun Smart Casual look",
    },
    {
      id: 2,
      name: "woman jacket for summer",
      image: "2.jpg",
      price: 30,
      discount: 5,
      discountPrice: 30 - (5 / 100) * 30,
      quantity: 1,
      desc: "Insulated Heat Reflective technology which has been updated with luxurious and technical details that include a longer and lush ultra premium coyote fur, hydrophobic nanotech on the fabrication, and a higher fill power woolen lining insulation. These features enhance the warmth and functionality making them some of the best outdoor cold weather winter jackets .",
    },
    {
      id: 3,
      name: "man trouser for all seasons",
      image: "3.jpg",
      price: 15,
      discount: 3,
      discountPrice: 15 - (3 / 100) * 15,
      quantity: 1,
      desc: "Whether you are going on a lunch date or heading to a business meeting, these light blue trousers by Ralph Lauren can instantly boast your confidence. Designed with a solid pattern, this pair of trousers looks as good with a button down shirt as it looks with a round neck T shirt. Tailored in a relaxed fit using a blend of cotton and elastane, these trousers further ensure excellent wearing comfort.",
    },
    {
      id: 4,
      name: "shoes for all season",
      image: "4.jpg",
      price: 50,
      discount: 4,
      discountPrice: 50 - (4 / 100) * 50,
      quantity: 1,
      desc: "Since the adidas Stan Smith hit the tennis courts in 71, its journey hasnt stopped. It made its way to catwalks, crosswalks, music clubs and school halls. And the journey is about to get even more legendary. Evolved to keep pace with a changing world, these shoes are made with recycled materials and redesigned to reduce material waste. Ghost-net-inspired embroidery made of upcycled plastic waste tops off the crisp look.",
    },
    {
      id: 5,
      name: "female soot for summer",
      image: "5.jpg",
      price: 25,
      discount: 2,
      discountPrice: 25 - (2 / 100) * 25,
      quantity: 1,
      desc: "Beautiful unstitched 100% pure Cotton printed dress material For women.Customers need to stitch this material which can vary from S to XXL size",
    },
    {
      id: 6,
      name: "male jeans",
      image: "6.jpg",
      price: 60,
      discount: 6,
      discountPrice: 60 - (6 / 100) * 60,
      quantity: 1,
      desc: "Make your casual times stylish and relaxing with the super comfortable denim jeans by LTB. Made from a multimaterial blend, they are high in performance and durability. Experience comfort like never before in this pair teamed with a cotton T- shirt",
    },
    {
      id: 7,
      name: "male trouser for all seasons",
      image: "7.jpg",
      price: 35,
      discount: 2,
      discountPrice: 35 - (2 / 100) * 35,
      quantity: 1,
      desc: "Whether you are going on a lunch date or heading to a business meeting, these light blue trousers by Ralph Lauren can instantly boast your confidence. Designed with a solid pattern, this pair of trousers looks as good with a button down shirt as it looks with a round neck T shirt. Tailored in a relaxed fit using a blend of cotton and elastane, these trousers further ensure excellent wearing comfort.",
    },
    {
      id: 8,
      name: "male jacket for winter",
      image: "8.jpg",
      price: 80,
      discount: 7,
      discountPrice: 80 - (7 / 100) * 80,
      quantity: 1,
      desc: "Tan in colour, this jacket by Ralph Lauren will get you boatloads of compliments from everyone around you. Having a self textured pattern and chequered lining, this jacket adds an edge to your look instantly. This cotton jacket further features full front zippered closure and two buttoned band collar for ease of wearing.",
    },
    {
      id: 9,
      name: "male jacket for all season",
      image: "9.jpg",
      price: 95,
      discount: 4,
      discountPrice: 95 - (4 / 100) * 95,
      quantity: 1,
      desc: "Tan in colour, this jacket by Ralph Lauren will get you boatloads of compliments from everyone around you. Having a self textured pattern and chequered lining, this jacket adds an edge to your look instantly. This cotton jacket further features full front zippered closure and two buttoned band collar for ease of wearing.",
    },
    {
      id: 10,
      name: "male winter jacket",
      image: "10.jpg",
      price: 120,
      discount: 3,
      discountPrice: 120 - (3 / 100) * 120,
      quantity: 1,
      desc: "Tan in colour, this jacket by Ralph Lauren will get you boatloads of compliments from everyone around you. Having a self textured pattern and chequered lining, this jacket adds an edge to your look instantly. This cotton jacket further features full front zippered closure and two buttoned band collar for ease of wearing.",
    },
  ],
  product: {},
};
const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};
export default ProductsReducer;
