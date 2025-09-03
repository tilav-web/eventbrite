export const menu: IMenu[] = [
  {
    title: "Home",
    target: "/",
  },
  {
    title: "Shop",
    target: "/shop",
    content: [
      {
        title: "Electronics",
        target: "/product-category/electronics/",
      },
      {
        title: "Jackets",
        target: "/product-category/jackets/",
      },
      {
        title: "Man",
        target: "/product-category/man/",
      },
      {
        title: "T-Shirts",
        target: "/product-category/t-shirts/",
      },
    ],
  },
  {
    title: "Track Order",
    target: "/track-order",
  },
  {
    title: "Blog",
    target: "/blog",
  },
  {
    title: "About Us",
    target: "/about-us",
  },
  {
    title: "Contact Us",
    target: "/contact-us",
  },
];

interface IMenu {
  title: string;
  target: string;
  content?: IMenu[];
}
