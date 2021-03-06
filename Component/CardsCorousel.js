import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cstyle from "../styles/CardsCorousel.module.css";
import Card from "../Component/Cards";
export default function CardsCorousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  function productso(id, name, imageLink, desc) {
    this.id = id;
    this.name = name;
    this.imageLink = imageLink;
    this.desc = desc;
  }
  //1. object id
  //2. product image
  //3. product name
  //4. product description
  var product1 = new productso(
    1,
    "planter1",
    "/images/pic1.jpg",
    "this is 1st plant"
  );
  var product2 = new productso(
    2,
    "planter2",
    "/images/pic2.jpg",
    "this is 2nd plant"
  );
  var product3 = new productso(
    3,
    "planter3",
    "/images/pic3.jpg",
    "this is 3rd plant"
  );
  var product4 = new productso(
    4,
    "planter4",
    "/images/pic4.jpg",
    "this is 4th plant"
  );
  let products = [product1, product2, product3, product4];
  return (
    <>
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          focusOnSelect={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <Card product={product1}></Card>
          </div>
          <div>
            <Card product={product2}> </Card>
          </div>
          <div>
            <Card product={product3}></Card>
          </div>
          <div>
            <Card product={product4}></Card>
          </div>
        </Carousel>
      </div>
    </>
  );
}
