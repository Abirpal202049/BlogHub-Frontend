import { AiOutlineUser } from "react-icons/ai";

export async function getStaticPaths() {
  const res = await fetch(
    `https://bloghubbackend.herokuapp.com/api/blog-posts?populate=*`
  );
  const { data } = await res.json();

  return {
    paths: data.map((blogpath) => ({
      params: {
        slug: blogpath.attributes.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log("Context is : ", params.slug);
  return {
    props: {
      Heading: params.slug,
    },
  };
}

export default function SingleBlog({ Heading }) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <AiOutlineUser size={50} />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-200 text-lg">
                    Phoebe Caulfield
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base text-gray-100">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-50 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="text-3xl font-semibold capitalize mb-3 ">
                  {Heading}
                </p>
                <p className="leading-relaxed text-lg mb-4 text-gray-300">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90s scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
