import ImageTextList from "../../common/image-text-list/Index";

export default function Index() {
  const features = [
    {
      label: "elegant openness",
      title: "Meticulous Design",
      desc: "We meticulously craft highly functional environments that seamlessly blend with their surroundings and gracefully adapt to your evolving needs, from the architectural inception to the curated selection of interior elements.",
      src: "furnishing-materials.png",
    },
    {
      label: "remarkable experience",
      title: "Tailored to You",
      desc: "Rigorously designed for excellence, our expertise curates an unparalleled experience. Immerse yourself in a lifestyle exclusive to residents here, an opportunity unmatched by any other development in the ocuntry.",
      src: "woman-with-design-book.png",
    },
    {
      label: "enduring value",
      title: "Built to Last",
      desc: "We invest in quality construction materials to ensure your property retains its value for generations to come. Experience the peace of mind that comes with a home built with integrity and meticulous attention to detail.",
      src: "rebar.png",
    },
  ];

  return <ImageTextList listItems={features} />;
}
